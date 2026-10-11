"""The state machine, as GitHub labels. FACTORY_RULES.md 1 and 11.

The file backend in `factory/state.py` is unchanged and still works on a clone with no
remote. This module is the same state machine over `gh`, and it is the DEFAULT whenever
an `origin` remote exists. Both backends share one `TRANSITIONS` table, imported from
`state.py` -- two copies of a legality table is two tables that drift, and the whole
value of the table is that a node cannot invent a transition.

    python factory/state.py list issues --state accepted
    python factory/state.py get gh:issue:3
    python factory/state.py set gh:issue:3 state=accepted priority=high
    python factory/state.py next

TARGETS. A target is `gh:issue:<n>` or `gh:pr:<n>` instead of a path. Everything that
took a path -- the dispatcher, gate.sh, merge.sh, run-workflow.sh -- takes one of these
and does not otherwise care.

THE MAPPING. Labels are the state, with two exceptions that are not negotiable because
GitHub owns them:

  issue   untriaged     open,   no factory:* label at all
          accepted      open,   factory:accepted
          in-progress   open,   factory:in-progress
          needs-human   open,   factory:needs-human
          needs-design  open,   factory:needs-design (real work, waiting on a prototype
                                only -- see TRANSITIONS in state.py for why this one
                                stays open where deferred closes)
          deferred      open,   factory:deferred
          rejected      open,   factory:rejected
          done          CLOSED (completed),   factory:approved

  ONLY `done` CLOSES AN ISSUE. A closed issue reads as "finished" to everyone who is not
  the factory, so closing one the factory declined, deferred or could not do hides the
  fact that the work was never done: issue #37 in emigr8-ai-website was closed
  not-planned on a scope rejection and nobody saw it. `rejected` and `deferred` stay
  open, labelled, assigned and announced, so declined work stays in the list a person
  actually reads. To appeal one, remove its `factory:rejected` / `factory:deferred` label
  and it is triaged again. Issues closed before this change (closed + one of those
  labels) still read as the state their label names.

  pr      open          open,   factory:needs-review
          validating    open,   factory:in-progress
          passed        open,   factory:approved      <- passed, merge held
          failed        open,   factory:needs-fix
          needs-human   open,   factory:needs-human
          rejected      CLOSED, factory:rejected
          merged        MERGED  (whatever the labels say)

`untriaged` is the absence of a label rather than a label. That is deliberate and it is
the one place absence is the right encoding: an issue filed by somebody who has never
heard of this factory arrives with no labels, and it has to land in the state that means
"nobody has looked at this yet". Every other state is written by a script, so every other
state gets a label.

`merged` is read from GitHub's own merge state and NOT from a label, because a label can
be removed and a merge cannot be undone. Where the native state and the labels disagree
about a merge, the native state wins. Everywhere else the labels win.

WHAT LABELS DO NOT GIVE YOU, and it is more than FACTORY_RULES.md 11 claimed:

  * No atomicity. §11 called labels "free shared state with atomic-ish updates". There is
    no compare-and-swap on a label set; two dispatchers that both read `factory:accepted`
    both claim the issue. The per-target lock in orchestrator.sh is therefore still
    load-bearing and was NOT replaced by the move.
  * No counter. The fix-attempt cap (FACTORY_RULES.md 8) was an `attempts:` integer in
    the PR front matter. There is no such field on a PR. It is counted here from an
    append-only marker comment, which is strictly better -- an event log rather than a
    mutable number -- but it is a mechanism that had to be built, not one that came free.
  * No arbitrary fields. `area` has no label and is written into the triage comment.
"""
from __future__ import annotations
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# The six labels Cole created, plus the three the move showed were missing. Every one of
# them is a state the file backend could already express; none is a new concept.
LABEL_FOR_STATE = {
    "accepted": "factory:accepted",
    "in-progress": "factory:in-progress",
    "needs-human": "factory:needs-human",
    "needs-design": "factory:needs-design",
    "deferred": "factory:deferred",
    "rejected": "factory:rejected",
    "done": "factory:approved",
    # PR states
    "open": "factory:needs-review",
    "validating": "factory:in-progress",
    "passed": "factory:approved",
    "failed": "factory:needs-fix",
    "merged": "factory:approved",
}
STATE_LABELS = set(LABEL_FOR_STATE.values())

PRIORITY_LABELS = {p: f"priority:{p}" for p in ("critical", "high", "medium", "low")}

# The stop button, reachable from a phone. FACTORY_RULES.md 8 and 11.
STOP_LABEL = "factory:stop"

# The fix-attempt counter, as an append-only event rather than a mutable field.
ATTEMPT_MARKER = "<!-- factory:fix-attempt -->"

_REPO: str | None = None


# --- talking to GitHub -------------------------------------------------------
# Every call fails LOUDLY. A backend that returns "no work" when it cannot reach GitHub
# is indistinguishable from a backend that reached GitHub and found nothing, and the
# dispatcher would read the outage as an idle factory and go quiet for a week.
class GhError(RuntimeError):
    pass


def gh(*args: str) -> str:
    """Run `gh` and decode its output as UTF-8, explicitly.

    NOT `text=True`. That decodes with the platform's locale encoding, which on Windows is
    cp1252 -- so an em-dash came back as the three characters `â`, `€`, `"` and every
    comparison against it failed. This was found by the read-back check in `comment()`
    reporting a mismatch on a comment GitHub had stored perfectly: the verifier could not
    read. A check that cannot read the artifact it is checking reports the artifact as
    broken, which is a false alarm that costs exactly as much trust as a missed one.
    """
    p = subprocess.run(["gh", *args], cwd=ROOT, capture_output=True)
    out = p.stdout.decode("utf-8", "replace")
    if p.returncode != 0:
        err = (p.stderr or p.stdout).decode("utf-8", "replace")
        raise GhError(f"gh {' '.join(args)} failed ({p.returncode}): {err.strip()}")
    return out


def gh_json(*args: str):
    return json.loads(gh(*args) or "null")


def repo() -> str:
    global _REPO
    if _REPO is None:
        _REPO = gh_json("repo", "view", "--json", "nameWithOwner")["nameWithOwner"]
    return _REPO


# --- targets -----------------------------------------------------------------
def parse_target(target: str) -> tuple[str, int]:
    """`gh:issue:3` -> ("issue", 3). Anything else is not ours."""
    m = re.fullmatch(r"gh:(issue|pr):(\d+)", target.strip())
    if not m:
        raise ValueError(f"not a GitHub target: {target!r} (want gh:issue:<n> or gh:pr:<n>)")
    return m.group(1), int(m.group(2))


def is_gh_target(target: str) -> bool:
    return bool(re.fullmatch(r"gh:(issue|pr):\d+", target.strip()))


# --- reading -----------------------------------------------------------------
def _labels(obj) -> list[str]:
    return [l["name"] for l in obj.get("labels") or []]


def issue_state(obj) -> str:
    labels = _labels(obj)
    if obj["state"].upper() == "CLOSED":
        for st in ("deferred", "rejected", "done"):
            if LABEL_FOR_STATE[st] in labels:
                return st
        # Closed with no disposition label. Not guessable, and guessing here is how a
        # deferred roadmap item becomes a permanent rejection (MISSION deferred backlog).
        return "closed-unlabelled"
    for st in ("needs-human", "needs-design", "rejected", "deferred", "in-progress", "accepted"):
        if LABEL_FOR_STATE[st] in labels:
            return st
    return "untriaged"


def pr_state(obj) -> str:
    labels = _labels(obj)
    if obj.get("mergedAt") or obj["state"].upper() == "MERGED":
        return "merged"           # native state wins; a merge cannot be un-labelled
    if obj["state"].upper() == "CLOSED":
        return "rejected"
    for st in ("needs-human", "failed", "passed", "validating", "open"):
        if LABEL_FOR_STATE[st] in labels:
            return st
    # An open PR with no factory label is waiting to be reviewed, which is exactly what
    # `open` means. Same shape as `untriaged` for issues: the arrival state is the one a
    # stranger's PR lands in, so it is the one that must not require a label.
    return "open"


# `assignees` is here because it was NOT, and the omission produced the exact failure
# this module is built to avoid. `assign()` writes then reads back to confirm; the read
# went through fetch(), fetch() never requested the field, so every successful assignment
# read as a failure and the escalation comment told a human that assigning them had not
# worked while they were, in fact, assigned. Caught on the first live run against issue
# #119. A read-back is only as good as the fields it reads.
ISSUE_FIELDS = "number,title,body,labels,state,stateReason,createdAt,author,assignees"
PR_FIELDS = ("number,title,body,labels,state,headRefName,baseRefName,mergedAt,assignees,"
             "mergeable,mergeStateStatus,isCrossRepository,comments,url")


def fetch(target: str) -> dict:
    kind, num = parse_target(target)
    if kind == "issue":
        obj = gh_json("issue", "view", str(num), "--json", ISSUE_FIELDS)
        obj["_kind"] = "issue"
        obj["_state"] = issue_state(obj)
    else:
        obj = gh_json("pr", "view", str(num), "--json", PR_FIELDS)
        obj["_kind"] = "pr"
        obj["_state"] = pr_state(obj)
    obj["_target"] = f"gh:{kind}:{num}"
    return obj


def priority_of(obj) -> str:
    for p, label in PRIORITY_LABELS.items():
        if label in _labels(obj):
            return p
    return "-"


# THE SAME CAP THE RUNNER ENFORCES, READ FROM THE SAME PLACE.
#
# This was the literal 2 in three places while `FACTORY_MAX_FIX_ATTEMPTS` sat in
# config.sh read by nothing. Two of them are here, in the DISPATCHER, and that is worse
# than a knob that does nothing: raise the cap and the runner would accept a third
# attempt that the dispatcher would never hand it, so a pull request on its second
# failure gets `escalate` instead of `fix-pr` and parks at needs-human for a reason
# nothing prints. A cap enforced in two files by two different numbers is not a cap.
MAX_FIX_ATTEMPTS = int(os.environ.get("FACTORY_MAX_FIX_ATTEMPTS", "2"))


def attempts_of(pr: dict) -> int:
    """The fix-attempt cap, counted from marker comments. FACTORY_RULES.md 8."""
    return sum(1 for c in (pr.get("comments") or [])
               if ATTEMPT_MARKER in (c.get("body") or ""))


def issue_for_pr(pr: dict) -> str:
    """Which issue this PR closes.

    `Closes #N` in the body first, because that is the link GitHub itself acts on and
    the one a human edits. The branch name is the fallback, because a body can be
    rewritten and a branch name cannot be without moving the PR.
    """
    m = re.search(r"(?:closes|fixes|resolves)\s+#(\d+)", pr.get("body") or "", re.I)
    if m:
        return f"gh:issue:{m.group(1)}"
    m = re.search(r"factory/issue-(\d+)", pr.get("headRefName") or "")
    if m:
        return f"gh:issue:{m.group(1)}"
    return ""


# --- writing -----------------------------------------------------------------
def _relabel(kind: str, num: int, current: list[str], add: list[str], drop: list[str]) -> None:
    """ADD in one call, then REMOVE in a second. Never both in one.

    THE ORDER IS THE WHOLE POINT, and it was one call until this was measured against a
    live repo. `gh issue edit --add-label X --remove-label Y` is NOT atomic: when the add
    fails, the remove still lands. The item is left with NO state label at all -- not the
    old state, not the new one, nothing -- and `state.py` then reports it as `untriaged`,
    a state it was never in.

    Observed exactly: an `accepted` issue asked to move to `in-progress` while that label
    did not exist came back with an empty label set and read as `untriaged`. On a live
    factory that is an issue mid-build being handed back to triage and built a second
    time, and a PR losing its place in the pipeline. Any transient failure does it -- a
    rate limit, a network blip, a permission change -- so this is not a consequence of the
    missing label, it is a durable way for the state machine to lose an item.

    Two calls, add first:
      * add fails      -> nothing was removed. The item keeps its old state. Recoverable,
                          and the caller sees the error.
      * add ok, remove fails -> the item carries two state labels. `_state` resolves by a
                          fixed priority order, so that is deterministic and visible.
                          Two labels is a far better failure than none.
    """
    add = [l for l in add if l not in current]
    drop = [l for l in drop if l in current]

    if add:
        args: list[str] = []
        for l in add:
            args += ["--add-label", l]
        gh(kind, "edit", str(num), *args)

    if drop:
        args = []
        for l in drop:
            args += ["--remove-label", l]
        gh(kind, "edit", str(num), *args)


def set_state(target: str, new: str) -> None:
    kind, num = parse_target(target)
    obj = fetch(target)
    labels = _labels(obj)
    want = LABEL_FOR_STATE[new]
    drop = [l for l in STATE_LABELS if l != want]

    if kind == "issue":
        if new == "done":
            _relabel("issue", num, labels, [want], drop)
            if obj["state"].upper() != "CLOSED":
                gh("issue", "close", str(num), "--reason", "completed")
        else:
            # Everything that is not `done` is OPEN, including `rejected` and `deferred`:
            # a closed issue means finished, and these are not. A legacy closed one is
            # reopened here so its state and its visibility agree.
            if obj["state"].upper() == "CLOSED":
                gh("issue", "reopen", str(num))
            _relabel("issue", num, labels, [want], drop)
        return

    # PRs. `merged` is never written here: only `gh pr merge` produces it, and
    # factory/merge.sh is the only thing that calls that.
    if new == "merged":
        _relabel("pr", num, labels, [want], drop)
        return
    if new == "rejected":
        _relabel("pr", num, labels, [want], drop)
        if obj["state"].upper() == "OPEN":
            gh("pr", "close", str(num))
        return
    _relabel("pr", num, labels, [want], drop)


def add_label(target: str, label: str) -> None:
    """Add one non-state label, and read it back.

    Used by the expert flag. It is a SEPARATE call from set_state on purpose: the state
    labels are a mutually exclusive set that `_relabel` keeps exactly one of, and
    `needs-expert-review` is orthogonal to all of them. Folding it into the state
    vocabulary would mean a pull request could be flagged for an expert or be `passed`,
    but never both, and both is the whole point.

    Read back for the same reason every other write here is: an `--add-label` for a label
    the repository does not have exits non-zero on some gh versions and silently does
    nothing on others, and a flag that quietly did not land is worse than no flag.
    """
    kind, num = parse_target(target)
    obj = fetch(target)
    current = _labels(obj)
    if label in current:
        return
    gh(kind, "edit", str(num), "--add-label", label)
    if label not in _labels(fetch(target)):
        raise GhError(
            f"added label {label!r} to {target} but it is not there on read-back. "
            f"Create it first: gh label create {label!r}"
        )


def set_priority(target: str, value: str) -> None:
    kind, num = parse_target(target)
    if value not in PRIORITY_LABELS:
        raise ValueError(f"unknown priority {value!r}")
    obj = fetch(target)
    _relabel(kind, num, _labels(obj), [PRIORITY_LABELS[value]],
             [l for p, l in PRIORITY_LABELS.items() if p != value])


# --- human-facing writes, and the read-back that keeps them honest -----------
# EVERY piece of text this factory shows a human goes through the three functions below.
# Not a style preference: a node that hand-rolls `gh` is making the same class of mistake
# as a node that hand-rolls the merge, and it failed in exactly the way you would predict.
#
# The triage rejection on issue #3 was correct. The verdict was correct, the label was
# correct, the close reason was correct -- and the comment that reached GitHub was the two
# characters `@-`, because it was assembled in a shell pipeline and handed to
# `gh api -f body=@-`. `-f` sets a literal string; only `-F` reads a file. Nothing noticed,
# because the only thing checked afterwards was that the call exited 0 and that the text
# contained no replacement characters -- which two ASCII characters satisfy perfectly.
#
# So: assemble in one process, send bytes, and then READ THE ARTIFACT BACK and assert it
# carries what was meant to be sent. A write nobody reads back is a write nobody has
# checked, which is the same rule the rest of this repository already runs on.

def _verify_body(kind: str, url: str, sent: str) -> None:
    """Fetch what GitHub actually stored and compare it to what we meant to send."""
    m = re.search(r"#issuecomment-(\d+)", url)
    if not m:
        raise GhError(f"posted to {url} but the response carried no comment id, so the "
                      f"write could not be read back and has not been checked")
    stored = gh_json("api", f"/repos/{repo()}/issues/comments/{m.group(1)}")["body"]
    if _normalise(stored) != _normalise(sent):
        raise GhError(
            f"POST_NOT_VERIFIED {url}\n"
            f"  sent {len(sent)} chars, GitHub stored {len(stored)}\n"
            f"  sent starts:   {sent[:80]!r}\n"
            f"  stored starts: {stored[:80]!r}\n"
            f"  The comment was written and is wrong. Fix the caller, then edit the "
            f"comment -- do not leave a body nobody meant to publish.")


def _normalise(text: str) -> str:
    return "\n".join(line.rstrip() for line in text.replace("\r\n", "\n").split("\n")).strip()


def comment(target: str, body: str) -> str:
    """Post a comment, read it back, and return its URL."""
    kind, num = parse_target(target)
    body = body.rstrip() + "\n"
    if not body.strip():
        raise GhError("refusing to post an empty comment")
    # Bytes, explicitly. `text=True` encodes stdin with the platform codepage, which on
    # Windows is how a correct rejection full of em-dashes arrived full of U+FFFD.
    p = subprocess.run(["gh", kind, "comment", str(num), "--body-file", "-"],
                       cwd=ROOT, input=body.encode("utf-8"), capture_output=True)
    if p.returncode != 0:
        raise GhError(f"gh {kind} comment failed: "
                      f"{(p.stderr or p.stdout).decode('utf-8', 'replace').strip()}")
    url = p.stdout.decode("utf-8", "replace").strip().splitlines()[-1]
    _verify_body(kind, url, body)
    print(f"POST_VERIFIED {url} ({len(body)} chars)")
    return url


def edit_comment(url: str, body: str) -> str:
    """Rewrite an existing comment, and read that back too."""
    m = re.search(r"#issuecomment-(\d+)", url)
    if not m:
        raise ValueError(f"not a comment url: {url!r}")
    body = body.rstrip() + "\n"
    p = subprocess.run(["gh", "api", "-X", "PATCH",
                        f"/repos/{repo()}/issues/comments/{m.group(1)}",
                        "-F", "body=@-"],
                       cwd=ROOT, input=body.encode("utf-8"), capture_output=True)
    if p.returncode != 0:
        raise GhError(f"gh api PATCH failed: "
                      f"{(p.stderr or p.stdout).decode('utf-8', 'replace').strip()}")
    _verify_body("issue", url, body)
    print(f"EDIT_VERIFIED {url} ({len(body)} chars)")
    return url


def create_pr(title: str, body: str, base: str, head: str) -> tuple[int, str]:
    """Open a pull request and read its body back. Same rule as a comment."""
    body = body.rstrip() + "\n"
    p = subprocess.run(["gh", "pr", "create", "--base", base, "--head", head,
                        "--title", title, "--body-file", "-"],
                       cwd=ROOT, input=body.encode("utf-8"), capture_output=True)
    if p.returncode != 0:
        raise GhError(f"gh pr create failed: "
                      f"{(p.stderr or p.stdout).decode('utf-8', 'replace').strip()}")
    url = p.stdout.decode("utf-8", "replace").strip().splitlines()[-1]
    num = int(url.rstrip("/").split("/")[-1])
    stored = gh_json("pr", "view", str(num), "--json", "body,title")
    if _normalise(stored["body"]) != _normalise(body):
        raise GhError(f"POST_NOT_VERIFIED {url}: the PR body GitHub stored is not the "
                      f"body that was sent ({len(body)} chars sent, "
                      f"{len(stored['body'])} stored)")
    if stored["title"].strip() != title.strip():
        raise GhError(f"POST_NOT_VERIFIED {url}: title is {stored['title']!r}, "
                      f"sent {title!r}")
    print(f"PR_VERIFIED {url} ({len(body)} chars)")
    return num, url


ESCALATE_ASSIGNEE = os.environ.get("FACTORY_ESCALATE_ASSIGNEE", "").strip()


def assign(target: str, who: str) -> bool:
    """Put the item in a person's Assigned list. Returns whether it landed.

    THE NOTIFICATION CHANNEL THAT NEEDS NO CREDENTIAL AND NO SLACK APP.

    The interview settled on "escalate by assigning it to me, plus a label", and the label
    half was built while this half was not. It matters more than it looks: a label is a
    property of the item and a human has to go looking for it, whereas an assignment is
    pushed - GitHub emails the assignee and the item appears in their Assigned view, which
    is a worklist rather than a feed.

    It also costs nothing to run. The `repo` scope already covers it, there is no webhook,
    no app slot, no SMTP and no second system to keep alive. On a factory whose whole point
    is running when nobody is watching, the notification path with the fewest moving parts
    is the one most likely to still work in three months.

    Never fatal, for the same reason factory_notify is not: the escalation has already been
    recorded by the time this runs, and an item that could not be assigned is still
    escalated. It returns False so the caller can say so rather than claim success.
    """
    if not who:
        return False
    kind, num = parse_target(target)
    try:
        gh(kind, "edit", str(num), "--add-assignee", who)
    except GhError:
        return False
    # Read back, like every other write here. `--add-assignee` on a user who cannot be
    # assigned - not a collaborator, or a typo - is accepted by some gh versions and
    # quietly does nothing, which would leave the runner reporting that a human had been
    # told when the item is sitting in nobody's list.
    try:
        obj = fetch(target)
    except GhError:
        return False
    return who in {a.get("login", "") for a in (obj.get("assignees") or [])}


def escalate_note(target: str, workflow: str, reason: str) -> str:
    """The escalation comment. Assembled here for the same reason the triage note is."""
    landed = assign(target, ESCALATE_ASSIGNEE)
    parts = [
        f"**factory/{workflow}** - escalated to `needs-human`.",
        reason.strip(),
    ]
    if ESCALATE_ASSIGNEE:
        # The @mention as well as the assignment, and it is not redundant. Assignment
        # emails are the first thing people filter into a folder; a mention in the body
        # survives that, and costs one line.
        parts.append(
            f"@{ESCALATE_ASSIGNEE} this needs you."
            if landed else
            f"@{ESCALATE_ASSIGNEE} this needs you. (Assigning it failed, so it will not "
            f"appear in your Assigned list. Check that `{ESCALATE_ASSIGNEE}` is spelt "
            "correctly and can be assigned on this repository.)"
        )
    parts.append(
        "FACTORY_RULES.md §7. No further factory activity on this item until a "
        "human removes `factory:needs-human`."
    )
    return comment(target, "\n\n".join(parts))


def triage_note(target: str, decision: dict) -> str:
    """The triage comment, assembled HERE rather than in a shell pipeline.

    The pipeline version worked by luck for as long as it did: `echo` a header, pipe a
    `python -c` through a codepage, hand the result to a `gh` flag that does not read
    files. One process, one string, one verified write.
    """
    parts = [f"**factory/triage** - `{decision.get('state', '?')}`", "",
             (decision.get("note") or "(no note)").strip(), ""]
    if decision.get("area"):
        parts.append(f"_area:_ `{decision['area']}`")
    if decision.get("priority"):
        parts.append(f"_priority:_ `{decision['priority']}`")
    parts.append("_Decided by the triage node against `MISSION.md`; applied by "
                 "`factory/run-workflow.sh` through the transition table._")
    if decision.get("state") in ("rejected", "deferred"):
        # THE FACTORY DID NOT DO THIS WORK, SO THE ISSUE STAYS OPEN AND SAYS SO. Assigned
        # and @mentioned for the same reason escalate_note does both: assignment emails
        # get filtered, a mention survives.
        label = LABEL_FOR_STATE[decision["state"]]
        landed = assign(target, ESCALATE_ASSIGNEE)
        parts += ["", "**Not done, and left open on purpose.** The factory has not made this "
                      f"change. To have it triaged again, remove the `{label}` label. To do "
                      "it by hand, leave the label and close the issue yourself when it is done."]
        if ESCALATE_ASSIGNEE:
            parts.append(f"@{ESCALATE_ASSIGNEE} this was declined by the factory and needs a decision."
                         + ("" if landed else " (Assigning it failed, so it will not appear in your Assigned list.)"))
    return comment(target, "\n".join(parts))


def bump_attempt(target: str) -> int:
    """Record one fix attempt, append-only. Returns the new count."""
    kind, num = parse_target(target)
    if kind != "pr":
        raise ValueError("fix attempts are counted on PRs")
    comment(target, f"{ATTEMPT_MARKER}\n"
                    "**factory/fix-pr** - fix attempt recorded (FACTORY_RULES.md §8, cap 2).")
    return attempts_of(fetch(target))


# --- the stop button ---------------------------------------------------------
def stop_requested() -> tuple[bool, str]:
    """FACTORY_RULES.md 8 and 11, the remote half of the stop button.

    Any OPEN issue carrying `factory:stop` halts the factory. Reachable from a phone,
    which is the entire reason it exists at 2am.

    It fails CLOSED. A GhError here means "we could not read the stop state", and a
    dispatcher that treats an unreadable stop button as "not stopped" has no stop button
    -- it has one that works only while the network does. §11 said "remove a label",
    which is the wrong polarity: removing a label cannot be distinguished from an API
    call that failed to list it.
    """
    try:
        hits = gh_json("issue", "list", "--label", STOP_LABEL, "--state", "open",
                       "--json", "number,title")
    except GhError as e:
        return True, f"cannot read the stop state from GitHub, halting: {e}"
    if hits:
        h = hits[0]
        return True, f"#{h['number']} {h['title']} carries {STOP_LABEL}"
    return False, ""


# --- the dispatcher's question ----------------------------------------------
PRIORITIES = ["critical", "high", "medium", "low"]


# THE FACTORY OWNS ITS OWN BRANCHES AND NOTHING ELSE.
#
# `_open_prs` returned EVERY open pull request, which is fine on a repository the factory
# is alone in and wrong on a live one. Measured against this repository before the dial had
# moved: `state.py next` answered `validate-pr gh:pr:40`, a dependabot bump nobody in this
# system opened. The first tick after arming would have validated, judged and, at level 3,
# MERGED somebody else's work under a verdict that never looked at it.
#
# It is not enough to say a human will notice. The dispatcher runs unattended by design and
# the whole point of the priority order is that it finishes in-flight work first, so a
# foreign pull request sitting at the top of the queue also starves the factory's own.
#
# Every branch the runner creates is `factory/issue-<n>`. Anything else belongs to a
# person. Set FACTORY_BRANCH_PREFIX empty to disable, and understand what that means.
BRANCH_PREFIX = os.environ.get("FACTORY_BRANCH_PREFIX", "factory/")


def _open_prs() -> list[dict]:
    raw = gh_json("pr", "list", "--state", "open", "--json", PR_FIELDS, "--limit", "100")
    out = []
    skipped = 0
    for p in raw or []:
        if BRANCH_PREFIX and not str(p.get("headRefName", "")).startswith(BRANCH_PREFIX):
            skipped += 1
            continue
        p["_kind"] = "pr"
        p["_state"] = pr_state(p)
        p["_target"] = f"gh:pr:{p['number']}"
        out.append(p)
    if skipped:
        # Printed to stderr so it lands in the dispatcher log without corrupting the one
        # tab-separated line on stdout that the orchestrator parses. Silence here would
        # make "the factory has nothing to do" and "the factory cannot see anything"
        # look identical, which is the failure mode this whole runner is written against.
        print(f"NOTE: {skipped} open pull request(s) are not on '{BRANCH_PREFIX}*' "
              "and belong to a person, not the factory.", file=sys.stderr)
    return sorted(out, key=lambda p: p["number"])


def _open_issues() -> list[dict]:
    raw = gh_json("issue", "list", "--state", "open", "--json", ISSUE_FIELDS, "--limit", "100")
    out = []
    for i in raw or []:
        i["_kind"] = "issue"
        i["_state"] = issue_state(i)
        i["_target"] = f"gh:issue:{i['number']}"
        out.append(i)
    return sorted(out, key=lambda i: i["number"])


def cmd_next(argv: list[str] | None = None) -> int:
    """Same order as the file backend, from the same rule (FACTORY_RULES.md 8).

    Finish in-flight work before starting new work. Reversed, the factory triages forever
    while its own branches rot.

    `--exclude a,b,c` drops targets the dispatcher already holds a lock on. Without it a
    target already in flight consumed the whole tick and `FACTORY_MAX_PARALLEL` above 1
    did nothing at all.
    """
    argv = argv or []
    skip: set[str] = set()
    if "--exclude" in argv:
        skip = {t.strip() for t in argv[argv.index("--exclude") + 1].split(",") if t.strip()}

    prs = [p for p in _open_prs() if p["_target"] not in skip]

    failed = [p for p in prs if p["_state"] == "failed"]
    for p in failed:
        if attempts_of(p) < MAX_FIX_ATTEMPTS:
            print(f"fix-pr\t{p['_target']}")
            return 0
    if failed:
        print(f"escalate\t{failed[0]['_target']}")
        return 0

    for p in prs:
        if p["_state"] == "open":
            print(f"validate-pr\t{p['_target']}")
            return 0
    for p in prs:
        if p["_state"] == "passed":
            print(f"merge\t{p['_target']}")
            return 0

    issues = [i for i in _open_issues() if i["_target"] not in skip]
    ready = [i for i in issues if i["_state"] == "accepted"]
    for prio in PRIORITIES:
        for i in ready:
            if priority_of(i) == prio:
                print(f"implement-issue\t{i['_target']}")
                return 0
    # An accepted issue with no priority label still has to be reachable, or a human who
    # labels `factory:accepted` by hand -- which is exactly how these three arrived --
    # files work the dispatcher will never look at.
    if ready:
        print(f"implement-issue\t{ready[0]['_target']}")
        return 0

    for i in issues:
        if i["_state"] == "untriaged":
            print(f"triage\t{i['_target']}")
            return 0

    # See the same block in state.py::cmd_next. A PR left in `validating` by a run that
    # never came back is the one live state no branch above looks at, so it was answered
    # as `idle`. Reported, not acted on: only the orchestrator holds the runtime lock that
    # separates "still running" from "died".
    referenced = {issue_for_pr(p) for p in prs}
    for i in issues:
        if i["_state"] == "in-progress" and i["_target"] not in referenced:
            print("stalled" + chr(9) + i["_target"])
            return 0

    for p in prs:
        if p["_state"] == "validating":
            print(f"stalled\t{p['_target']}")
            return 0

    print("idle\t-")
    return 0


def cmd_list(argv: list[str]) -> int:
    kind = argv[0] if argv else "issues"
    want = argv[argv.index("--state") + 1] if "--state" in argv else None
    items = _open_prs() if kind == "prs" else _open_issues()
    if kind == "prs":
        merged = gh_json("pr", "list", "--state", "merged", "--json", PR_FIELDS,
                         "--limit", "100") or []
        for p in merged:
            p["_kind"] = "pr"
            p["_state"] = "merged"
            p["_target"] = f"gh:pr:{p['number']}"
        items = sorted(items + merged, key=lambda p: p["number"])
    for i in items:
        if want and i["_state"] != want:
            continue
        print(f"{i['_target']}\t{i['_state']}\t{priority_of(i)}\t{i['title']}")
    return 0


def cmd_get(argv: list[str]) -> int:
    obj = fetch(argv[0])
    print(f"target={obj['_target']}")
    print(f"number={obj['number']}")
    print(f"state={obj['_state']}")
    print(f"title={obj['title']}")
    if obj["_kind"] == "issue":
        print(f"priority={priority_of(obj)}")
        print(f"filed-by={(obj.get('author') or {}).get('login', '?')}")
        print(f"opened={(obj.get('createdAt') or '')[:10]}")
    else:
        print(f"branch={obj['headRefName']}")
        print(f"base={obj['baseRefName']}")
        print(f"attempts={attempts_of(obj)}")
        print(f"issue={issue_for_pr(obj)}")
        print(f"url={obj.get('url', '')}")
    print(f"labels={','.join(_labels(obj))}")
    return 0


def cmd_body(argv: list[str]) -> int:
    """The issue text, as the nodes need it: a file they can Read.

    This is the join that FACTORY_RULES.md 11 did not have a row for. Every node prompt
    takes `{{issue}}` and opens it. An issue that lives behind an API has to be rendered
    to a path before a node can read it, and rendering it is also what keeps the judge
    reading the issue AS FILED rather than as it looks after triage edited it.
    """
    obj = fetch(argv[0])
    fm = [f"id: {obj['_target']}", f"number: {obj['number']}", f"title: {obj['title']}",
          f"state: {obj['_state']}"]
    if obj["_kind"] == "issue":
        fm += [f"priority: {priority_of(obj)}",
               f"filed-by: {(obj.get('author') or {}).get('login', '?')}",
               f"opened: {(obj.get('createdAt') or '')[:10]}"]
    print("---")
    print("\n".join(fm))
    print("---")
    print()
    print(obj.get("body") or "(no body)")
    return 0
