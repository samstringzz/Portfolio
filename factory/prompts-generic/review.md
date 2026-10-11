<!--
  Node 5 of implement-issue, run from the ROOT checkout after the worktree is gone.
  Model: cheap. Tools: Read, Glob, Grep, git diff, git show, git log, git status, Write.

  THE FRONT MATTER IS MACHINERY. run-workflow.sh asserts that issue, title, state and
  branch are all present and non-empty, and fails the lap naming the missing one if not.
  Without it state.py cannot find the branch and the pull request can never be validated.
-->

# Review the diff, then write the pull request record

The deterministic gate is green and the panel has passed. You are the only node that reads
the diff as code rather than as markers, and then you write the record the pull request is
made from. Read `.factory/context.md` first, for the conventions and known traps.

## Review

`git diff {{base}}...{{branch}}`, then read each changed file in full rather than only the
hunks. You are running from the root checkout, so use `git show {{branch}}:<path>` to see
what a changed file now says.

Look for:

- **Wiring that is present but wrong.** Two places that must agree and differ by one
  character, an entry registered under a different name from the one it is used by, an
  item added in the wrong position in an ordered list. Automated checks miss near-misses.
- **Files that must move together.** If the context file lists a set, count them in the
  diff. Missing one is the usual failure.
- **Mirrored or duplicated data.** Anything stated in two places says the same thing in
  both.
- **Tests.** Behaviour that changed has a test that would fail without the change, and no
  test, check or threshold was weakened, skipped or deleted.
- **Secrets and protected files.** None in the diff.
- **Scope.** Anything in this diff unrelated to the issue is a finding, even when the
  extra work is good.
- **Conventions**, from `CLAUDE.md`, `AGENTS.md` and the context file.

Governance is read from the base branch. A change is never judged against a rulebook it
just edited.

You are reviewing, not editing. Findings go in the record.

## Then write `{{prfile}}`

One file, at exactly that path. The script opens the pull request after you exit; you do
not have `gh` and that is the point. A model's only output is a record, and code decides
what happens to it.

```markdown
---
issue: {{issue_ref}}
title: <the change in the imperative, as CLAUDE.md wants a commit subject, no dashes>
branch: {{branch}}
state: open
attempts: 0
---

## What changed
<two to four sentences, in terms of what a user of this repository would notice>

## Files that move together
<one line per artifact in the set the context file names. Say "not applicable" with a
 reason where one genuinely does not apply, rather than leaving it out. If the context
 file names no set, say so>

## Rules that drove this
<the rule identifiers and FACTORY_RULES sections that shaped decisions here, and what each
 one made you do. FACTORY_RULES.md 3.7 requires this and it is the part a person reads
 first>

## Claims added or changed
<each domain claim, its source, and the date checked. Or "none">

## Gate
<the counts from the run log: lint, tests, rules checked, any end-to-end or holdout steps>

## Review findings
<severity, file:line, what and why. Or "none">

## Assumptions
<what the plan decided that the issue did not specify, or "none". The merge is held on
 these, so state them plainly>
```

`state: open` hands it to the independent validator. **Do not merge.** `factory/gate.sh`
and `factory/merge.sh` decide, and they re-check the markers themselves rather than
trusting anything in this file.

Everything below the second `---` becomes the pull request body, and the script appends the
panel verdict and, where one fired, any expert-review hold. Write honest evidence for a
person who has not seen the issue, in UK English, no em or en dashes.
