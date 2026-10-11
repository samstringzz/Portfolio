"""The expert flag. Did this branch add or change an immigration fact?

    python factory/expert_flag.py --base <ref> --head <ref> [--fields-only]

Prints `EXPERT_REVIEW_REQUIRED=<n>` with the claims, or `EXPERT_REVIEW_NOT_REQUIRED=0`.
Always exits 0 unless it could not run, which exits 2. It is a FLAG, not a gate: what it
blocks is the promotion from dev to prod, and that promotion is a human action.

WHY IT PARSES THE PROSE RATHER THAN A NEW FIELD. `Official source: <source>. Reviewed
<date>.` already appears 1,069 times across 54 of the 63 content files, in a consistent
form. That is a schema sitting in the prose, and using it costs nothing today. Promoting
citations to a typed `sources` array with URLs is stronger in every long-term sense and is
the prerequisite for real source watching, but migrating 61 pages is itself work that
needs expert review, so it is deferred rather than rejected. See
`docs/emigr8-website.architecture.md`, "The expert flag", and open issue #108.

WHAT COUNTS AS A CHANGE. By default a claim is the citation plus the sentence it sits at
the end of, so rewording the claim beside a citation flags it. That is deliberate: the
whole risk being managed is a number moving, and a number moves inside the sentence rather
than inside the `Official source:` clause.

`--fields-only` compares the source and the review date alone. That is the fallback the
architecture document names, to be switched on only if the default flags rewording often
enough that a reviewer starts approving without reading. A flag everybody waves through is
worse than no flag, because it looks like a control.

WHAT THIS CANNOT DO, and it belongs in the file rather than in a document nobody opens: it
checks that a citation exists, that it names a source, and that its wording changed. It
cannot check that the claim beside it is TRUE. That is on MISSION.md's permanently-human
list and no amount of parsing moves it.
"""
from __future__ import annotations

import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Comma-separated directories whose files carry cited facts. Engine 0.2.0: overridable per
# repository with FACTORY_EXPERT_CONTENT_DIRS. Set it empty (`FACTORY_EXPERT_CONTENT_DIRS=`)
# for a repository with no volatile-fact gate and the flag never fires. Unset keeps the
# website's directories.
_dirs = os.environ.get("FACTORY_EXPERT_CONTENT_DIRS")
CONTENT_DIRS = (("src/content/visa", "src/content/move", "src/content/events")
                if _dirs is None else tuple(d.strip() for d in _dirs.split(",") if d.strip()))
SKIP = {"types.ts", "routes.ts"}

# `Official source: <source>. Reviewed <date>.` The source runs to the sentence that
# introduces the review date, and dates in this repository are written "17 July 2026".
CITATION = re.compile(
    r"Official source:\s*(?P<source>.+?)\.\s*Reviewed\s+(?P<date>[^.]+?)\.",
    re.IGNORECASE | re.DOTALL,
)

# How much of the sentence before the citation counts as the claim. Long enough to carry a
# threshold or a fee, short enough that an unrelated edit two paragraphs up does not flag.
CLAIM_WINDOW = 240


def git(*args: str) -> tuple[int, str]:
    p = subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True)
    return p.returncode, p.stdout


def _norm(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def claims(text: str, fields_only: bool) -> set[tuple[str, str, str]]:
    out: set[tuple[str, str, str]] = set()
    for m in CITATION.finditer(text):
        source = _norm(m.group("source"))
        date = _norm(m.group("date"))
        if fields_only:
            out.add((source, date, ""))
            continue
        before = text[max(0, m.start() - CLAIM_WINDOW):m.start()]
        # Back off to the last sentence boundary so the claim is a sentence rather than a
        # window that happens to start mid-word.
        cut = max(before.rfind(". "), before.rfind('", '), before.rfind("\n"))
        claim = _norm(before[cut + 1:] if cut > 0 else before)
        out.add((source, date, claim))
    return out


def content_files_changed(base: str, head: str) -> list[str]:
    rng = f"{base}...{head}" if head else f"{base}...HEAD"
    rc, out = git("diff", "--name-only", rng)
    if rc != 0:
        raise SystemExit(f"EXPERT_FLAG_ERROR: git diff {rng} failed")
    files = []
    for f in out.splitlines():
        f = f.strip().replace("\\", "/")
        if not f.endswith(".ts") or not any(f.startswith(d + "/") for d in CONTENT_DIRS):
            continue
        if os.path.basename(f) in SKIP:
            continue
        files.append(f)
    return sorted(files)


def show(ref: str, path: str) -> str:
    rc, out = git("show", f"{ref}:{path}")
    # A new page has no base version, so every one of its claims is new. That is right:
    # a page of fresh immigration facts is exactly what an expert should sign off.
    return out if rc == 0 else ""


def main() -> int:
    argv = sys.argv[1:]
    fields_only = "--fields-only" in argv
    base = argv[argv.index("--base") + 1] if "--base" in argv else os.environ.get(
        "FACTORY_BASE_BRANCH", "dev")
    head = argv[argv.index("--head") + 1] if "--head" in argv else "HEAD"

    rc, _ = git("rev-parse", "--verify", "--quiet", base)
    if rc != 0:
        print(f"EXPERT_FLAG_ERROR: base ref {base!r} does not resolve")
        return 2

    files = content_files_changed(base, head)
    print(f"EXPERT_FLAG_SCOPE files={len(files)} mode="
          f"{'fields-only' if fields_only else 'claim-text'} range={base}...{head}")

    flagged: list[tuple[str, tuple[str, str, str]]] = []
    for f in files:
        was = claims(show(base, f), fields_only)
        now = claims(show(head, f), fields_only)
        for c in sorted(now - was):
            flagged.append((f, c))

    if not flagged:
        print("EXPERT_REVIEW_NOT_REQUIRED=0")
        print("No citation in this branch names a source or a review date the base branch "
              "did not already carry.")
        return 0

    print(f"EXPERT_REVIEW_REQUIRED={len(flagged)}")
    for f, (source, date, claim) in flagged:
        print(f"  {f}")
        print(f"    source:   {source}")
        print(f"    reviewed: {date}")
        if claim:
            print(f"    claim:    {claim[:220]}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
