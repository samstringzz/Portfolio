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
made from.

## Review

`git diff {{base}}...{{branch}}`, then read each changed file in full rather than only the
hunks. You are running from the root checkout, so use `git show {{branch}}:<path>` to see
what a changed file now says.

Look for:

- **Wiring that is present but wrong.** A canonical that differs by one character between
  the content file and `scripts/prerender.js`. A sitemap entry for a slug the redirects
  spell differently. A `_redirects` pair added after the catch-all rather than before it.
  The rules engine checks identity where it can; ordering and near-misses are where it
  cannot.
- **The six artifacts.** Count them in the diff. Five is the usual failure.
- **Structured data against visible content.** The FAQ in `scripts/prerender.js` and the
  FAQ in the content file ask the same questions in the same words, or a crawler and a
  reader are being told different things.
- **Scope.** Anything in this diff unrelated to the issue is a finding, even when the
  extra work is good.
- **Attribution.** Every outbound link to a tracked domain goes through
  `withAttribution()`, and `app.emigr8.ai` and `architect.emigr8.ai` are the live hosts.
- **Conventions**, from `CLAUDE.md`.

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
<two to four sentences, in terms of what a reader of the site would notice>

## The six artifacts
<one line each: route, prerender entry, sitemap, llms.txt, redirects, hub. Say "not
 applicable" with a reason where one genuinely does not apply, rather than leaving it out>

## Rules that drove this
<the rule identifiers and FACTORY_RULES sections that shaped decisions here, and what each
 one made you do. FACTORY_RULES.md 3.7 requires this and it is the part a person reads
 first>

## Volatile claims added or changed
<each claim, the official source cited, and the review date. Or "none">

## Gate
<the counts from the run log: lint, tests, tier 1 rules and files, e2e steps, holdout
 assertions>

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
panel verdict and, where one fired, the expert-review hold. Write for a person who has not
seen the issue.
