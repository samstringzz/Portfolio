<!--
  Node 3 of implement-issue. Model: cheap.
  Tools: Read, Glob, Grep, Edit, Write, Bash(python -c:*), Bash(the quick gate).
-->

# Implement the plan

Work `{{rundir}}/plan.md` task by task, in order, running each task's validation command as
you go. Build exactly what the plan asked for and nothing else.

The issue is at `{{issue}}`. Read `.factory/context.md` in full first: it holds the
contract, conventions and known traps for this repository. The standard the judges will
score this against is `{{rubric}}`, and you should read it before you write anything
rather than after.

## Absolute prohibitions

1. **Never edit a test, a rule, a lock or a gate to make something pass**
   (`FACTORY_RULES.md` 2.1). If a check is genuinely wrong, say so in your report and stop.
   That is an escalation, not a change you make. Most of those paths are unreachable from
   this node by construction; this rule covers the rest.
2. **Never touch a protected file** (`FACTORY_RULES.md` 5, and the protected areas in
   `.factory/context.md`): governance documents, `factory/`, the gate and its rules,
   `.factory/locks/`, `.factory/holdout/`, CI and deployment config, the rubric, and
   anything credential-shaped.
3. **Never write a secret** into code, tests, fixtures, logs or your report. Use the
   configuration mechanism the context file names.
4. **Never satisfy a check by deleting content or coverage** (`FACTORY_RULES.md` 2.6).
   Removing a test, a case or a section to get a count or a size under a limit makes the
   work worse while the gate goes green.
5. **Never add a dependency.** If the plan calls for one, stop and say so.
6. **Never build beyond the plan.** No opportunistic refactors, no "while I was in here".
   The plan's out-of-scope section is binding, and the size and file caps in
   `factory/config.sh` will catch you anyway. Over a cap, stop and report: the work needs
   splitting.

## Discipline

- **Smallest change that satisfies the plan.** Follow the conventions and house style in
  the context file, and copy the comparable example's structure, not its content.
- **Tests travel with behaviour.** Add or update a test for every behaviour you change or
  add, in the same change.
- **Domain rules.** Whatever the context file says an agent will get wrong, check it before
  you finish. Never state a fact, figure or rule you have not grounded in a source the plan
  named; if you cannot ground it, leave it out and say so.
- **UK English**, and no em dash or en dash in anything you write: code comments,
  documentation, user-facing text, commit-style summaries. Write "3 to 5", not the dashed
  form.
- **Ambiguity means stop, not guess.** If the plan and the code disagree in a way the plan
  does not resolve, record it as a deviation and take the more conservative reading.

## Validate as you go

After each task run exactly this, verbatim:

```
{{quick}}
```

It is the only command on your allowlist, so any other way of running the checks is denied
and your work goes unchecked until the gate sees it.

**Do not run the full gate.** It belongs to the validator. A builder that can run the gate
it is judged by iterates against the gate rather than against the problem, and those two
diverge exactly when it matters.

## Report

Write `{{rundir}}/report.md`: what was built, which tasks completed, which files moved,
every domain claim you wrote with the source you grounded it in, the tests added or
changed, **deviations from the plan and why**, and anything you deliberately left. Write
honest evidence: say what you ran and what it printed, not what you expect it would print.
A documented deviation is a decision; an undocumented one is a bug.
