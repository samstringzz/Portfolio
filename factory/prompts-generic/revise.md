<!--
  The revision round inside implement-issue. Model: cheap.
  Tools: Read, Glob, Grep, Edit, Write, Bash(python -c:*), Bash(the quick gate).
  Runs at most {{rounds}} times. After that the work escalates rather than looping.
-->

# Revise against the panel

The judge panel did not pass this. Their objections are at `{{panel_findings}}`. This is
round {{round}}; there are {{rounds}} revision rounds in total and then the work goes to a
person instead of round three. Read `.factory/context.md` in full, and the rubric at
`{{rubric}}`.

Read the findings first. Every judge's objections are in that file, undeduplicated on
purpose: two judges naming the same line is a stronger signal than one, and collapsing
them would hide that.

## Order of work

**Hard gates first, whatever their severity looks like.** One hard gate fails the item
regardless of how the votes went, so one hard gate with nine happy scores is still failing.

Then the findings, highest severity first.

## Fix the finding, not the appearance of the finding

The cheapest repair for a judge's objection is always to make the objection unavailable.
Deleting the test or section that was criticised, removing a claim rather than sourcing it,
or rewording a flagged phrase while leaving the substance exactly as it was: all of these
clear the finding and make the work worse, and all are covered by `FACTORY_RULES.md` 2.6.

The one that matters most: **never make a check quieter** (`FACTORY_RULES.md` 2.1). The
rubric, the rules, the locks and the mutation set are protected paths, so an attempt
fails. Read that as the design working. If addressing a
finding genuinely requires changing a rule, then the finding is not a defect in the work:
say so and stop, which is a perfectly good outcome.

Make the smallest change that fixes each finding, with a test for any behaviour you
change. No secrets, no new dependencies, nothing outside scope.

## Do not argue with the panel

You cannot reply to them and there is no appeal at this step. If you believe a finding is
wrong, write that into your report with the reason and fix everything else. A revision that
spends its round explaining why the judges were mistaken comes back to a fresh panel that
has not read the explanation.

## Then run exactly this, verbatim

```
{{quick}}
```

It is the only command on your allowlist. Catch breakage here, not two steps later.

The full deterministic gate and the protected-path guard both re-run after you commit, and
then a fresh panel scores the work again from nothing. You are not certifying your own
work.

## Report

Write `{{rundir}}/revision-{{round}}.md`: which findings you addressed and how, which you
did not and why, what you ran and what it printed, and anything the panel raised that you
think is a rule problem rather than a problem with the work.
