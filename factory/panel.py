"""Tally the judge panel. Code, not a model.

    python factory/panel.py tally    <round-dir>   -> exit 0 pass, 1 fail, 2 error
    python factory/panel.py findings <round-dir>   -> markdown for the revise node
    python factory/panel.py evidence <round-dir>   -> markdown for the pull request body

The panel is tier 3: brand voice, factual grounding, template uniqueness, whether the page
reads as human. `docs/emigr8-website.architecture.md` puts it in front of pull request
CREATION rather than in continuous integration, so what it gates is whether a pull request
opens at all. The deterministic gate has already run by the time this does.

THE COUNTING IS HERE AND NOT IN A PROMPT, for the same reason the merge is in bash. Three
judges returning three opinions is the model's job; deciding what two of three means is
not, and a model asked to summarise its own panel will find the summary that lets the work
through. `docs/education-pages-rubric.md`, "Pass Threshold", is the spec:

    3 judges per item, independent, no visibility into each other's verdicts.
    Item needs 2 of 3 judges to vote pass to pass this round.
    ANY single hard-gate violation flagged by ANY judge fails the item outright,
    regardless of scored-criteria averages or vote count on other judges.

That last line is why this is not a majority vote. A 3-0 pass with one hard gate flagged
by one judge is a FAIL, and getting it the other way round would ship the exact failure
the architecture document was written about: three judges passed PR #95, which carried no
`Official source:` citation at all, and a single grep would have rejected it in under a
second.

EMPTY IS NOT PASS applies here too, and it is the reason `tally` exits 2 rather than 0
when a judge wrote nothing. A judge whose node crashed produces no file, no failing vote,
and no objection. Counting that as an abstention makes a two-judge panel out of a
three-judge one and quietly lowers the threshold to one.
"""
from __future__ import annotations

import json
import os
import sys

REQUIRED_VOTES = int(os.environ.get("FACTORY_PANEL_PASS", "2"))
EXPECTED_JUDGES = int(os.environ.get("FACTORY_PANEL_JUDGES", "3"))


class PanelError(Exception):
    pass


def _load(round_dir: str) -> list[dict]:
    if not os.path.isdir(round_dir):
        raise PanelError(f"no panel directory at {round_dir}")
    names = sorted(n for n in os.listdir(round_dir) if n.endswith(".json"))
    if len(names) != EXPECTED_JUDGES:
        raise PanelError(
            f"{len(names)} judge verdict(s) in {round_dir}, expected {EXPECTED_JUDGES}. "
            "A judge that wrote nothing is not an abstention: it is a missing vote, and "
            "counting it as one would lower the threshold without anybody deciding to."
        )
    out = []
    for n in names:
        path = os.path.join(round_dir, n)
        try:
            with open(path, encoding="utf-8") as fh:
                d = json.load(fh)
        except (OSError, ValueError) as e:
            raise PanelError(f"{n} is not readable JSON ({e}). Failing closed.")
        v = str(d.get("verdict", "")).lower()
        if v not in ("pass", "fail"):
            raise PanelError(f"{n} returned verdict {v!r}, expected 'pass' or 'fail'")
        d["_file"] = n
        out.append(d)
    return out


def _hard_gates(verdicts: list[dict]) -> list[tuple[str, dict]]:
    flags = []
    for d in verdicts:
        for hg in d.get("hard_gate_violations") or []:
            flags.append((d["_file"], hg))
    return flags


def tally(round_dir: str) -> int:
    verdicts = _load(round_dir)
    votes = sum(1 for d in verdicts if str(d["verdict"]).lower() == "pass")
    flags = _hard_gates(verdicts)

    print(f"PANEL_JUDGES={len(verdicts)}")
    print(f"PANEL_PASS_VOTES={votes} of {REQUIRED_VOTES} required")
    print(f"PANEL_HARD_GATE_FLAGS={len(flags)}")
    for src, hg in flags:
        print(f"  HARD_GATE {src}: {hg.get('gate', '?')} in {hg.get('file', '?')}: "
              f"{str(hg.get('why', '')).strip()[:200]}")

    # A judge that voted pass while naming a hard gate has contradicted itself. The
    # rubric already decides that case (any hard gate fails the item), so nothing is
    # ambiguous, but it is worth printing: a panel that does this repeatedly is a panel
    # whose prompt is not landing, and that is a fact about the factory rather than the
    # page.
    for d in verdicts:
        if str(d["verdict"]).lower() == "pass" and (d.get("hard_gate_violations") or []):
            print(f"PANEL_NOTE: {d['_file']} voted pass while naming a hard gate; "
                  "the hard gate wins (rubric, Pass Threshold).")

    if flags:
        print("PANEL_VERDICT=fail reason=hard-gate")
        return 1
    if votes < REQUIRED_VOTES:
        print("PANEL_VERDICT=fail reason=votes")
        return 1
    print("PANEL_VERDICT=pass")
    return 0


def _findings_of(d: dict) -> list[dict]:
    return list(d.get("hard_gate_violations") or []) + list(d.get("findings") or [])


def findings(round_dir: str) -> int:
    """What the revise node reads. Everything every judge objected to, deduplicated by
    nobody: two judges naming the same sentence is signal, not noise, and collapsing it
    hides which objections were unanimous."""
    verdicts = _load(round_dir)
    print("# Panel findings")
    print("")
    print("Every objection raised by every judge. Fix the cause in the source. Never make")
    print("the objection quieter (FACTORY_RULES.md 2.1, 2.11, 2.12).")
    for d in verdicts:
        print("")
        print(f"## {d['_file']} voted {d['verdict']}")
        summary = str(d.get("summary", "")).strip()
        if summary:
            print("")
            print(summary)
        items = _findings_of(d)
        if not items:
            print("")
            print("No objections.")
            continue
        for it in items:
            where = it.get("file", "?")
            line = it.get("line")
            loc = f"{where}:{line}" if line else where
            label = it.get("gate") or it.get("criterion") or it.get("severity") or "finding"
            print("")
            print(f"- **{label}** at `{loc}`")
            quote = str(it.get("quote", "")).strip()
            if quote:
                print(f"  - offending text: `{quote[:300]}`")
            why = str(it.get("why") or it.get("what") or "").strip()
            if why:
                print(f"  - {why}")
    return 0


def evidence(round_dir: str) -> int:
    """What goes on the pull request. The person approving the promotion to prod should
    read a judged artifact rather than a blank diff, and that means the votes and the
    scores, not a sentence saying the panel passed."""
    verdicts = _load(round_dir)
    votes = sum(1 for d in verdicts if str(d["verdict"]).lower() == "pass")
    flags = _hard_gates(verdicts)
    print("## Judge panel")
    print("")
    print(f"{votes} of {len(verdicts)} judges voted pass. {REQUIRED_VOTES} required. "
          f"{len(flags)} hard-gate violation(s) flagged.")
    print("")
    print(f"Rubric: `{os.environ.get('FACTORY_PANEL_RUBRIC', 'docs/education-pages-rubric.md')}`. The panel gates whether this pull")
    print("request opened at all; it is not re-run in continuous integration.")
    print("")
    print("| Judge | Verdict | Hard gates | Summary |")
    print("|---|---|---|---|")
    for d in verdicts:
        s = str(d.get("summary", "")).strip().replace("|", " ").replace("\n", " ")
        print(f"| {d['_file']} | {d['verdict']} | {len(d.get('hard_gate_violations') or [])} | {s[:180]} |")

    scored = [d for d in verdicts if isinstance(d.get("scores"), dict) and d["scores"]]
    if scored:
        keys = sorted({k for d in scored for k in d["scores"]})
        print("")
        print("| Criterion | " + " | ".join(d["_file"] for d in scored) + " |")
        print("|---" * (len(scored) + 1) + "|")
        for k in keys:
            row = " | ".join(str(d["scores"].get(k, "")) for d in scored)
            print(f"| {k} | {row} |")
    return 0


def main() -> int:
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    cmd, round_dir = sys.argv[1], sys.argv[2]
    fn = {"tally": tally, "findings": findings, "evidence": evidence}.get(cmd)
    if fn is None:
        print(__doc__)
        return 2
    try:
        return fn(round_dir)
    except PanelError as e:
        print(f"PANEL_ERROR: {e}")
        return 2


if __name__ == "__main__":
    sys.exit(main())
