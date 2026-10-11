<!--
  Node 1 of implement-issue. Model: cheap. Tools: Read, Glob, Grep, git log, git ls-files.

  NO SKILL IS INVOKED FROM ANY PROMPT IN THIS DIRECTORY, on purpose. Every node runs
  headless behind an --allowedTools list, and a node that asks for a tool it was not given
  asks a human who is not there, gets no answer, and exits successfully having done nothing.
  If you add a skill to a node, add the tool to that node's allowlist in
  factory/run-workflow.sh in the same commit, and prove it once by hand.
-->

# Prime on the rules corpus

Read the corpus, then write down what it means for this one issue. You are not solving
anything here. You are making sure the expensive node after you does not spend a premium
model rediscovering rules that are already written down.

The issue is at `{{issue}}`.

## The corpus, in this order

1. `.factory/context.md`, in full. It is the repository's own account of what it is, how it
   is run and tested, where things live, and what an agent tends to get wrong.
2. `MISSION.md`: what this repository is for, the in-scope areas, the out-of-scope list and
   the hard invariants. Then `factory/RULES.md`, the universal rules for how this runs when nobody is watching, and `FACTORY_RULES.md`, this repository's additions (numbered `<section>.L<n>`). If `standards/` exists, read the files that govern the kind of work in this issue (writing and voice, naming, service boundary, analytics).
3. `CLAUDE.md` and `AGENTS.md`, if present: how the repository is worked in.
4. The rubric, `{{rubric}}`. Read its hard gates and scored criteria now, not after the work
   is written. Independent judges score against it before a pull request opens.
5. `git log -15 --oneline`, then `git ls-files` on the areas the issue touches.
6. The areas the issue touches: the files it names, their neighbours, and the tests beside
   them. Pick the closest existing example of what the issue asks for, read it in full, and
   say in your report which one you picked and why.

Wherever the context file names rules, checks or conventions, cite them by their stable
identifier or path rather than by description. A cited identifier is checkable.

## What you may not read

Anything under `.factory/holdout/`. It is denied at the tool layer, so an attempt fails
rather than succeeding quietly, and that is deliberate: those assertions are only worth
anything while whatever writes the work cannot see them (`FACTORY_RULES.md` 9).

## Write `{{rundir}}/priming.md`

Scannable, and specific to this issue rather than a summary of the documents.

- **What the issue touches.** The in-scope area from `MISSION.md`, and the files.
- **The comparable example**, named, with the reason. Say what the new work should copy in
  structure and what it must not copy verbatim.
- **Which rules and checks apply**, by identifier, and what each will check.
- **The rubric criteria and hard gates most at risk** for this issue, and why.
- **Domain rules from the context file** that this issue will make the work state or depend
  on, and where each one's ground truth comes from. Name them now rather than discovering
  them at the end.
- **Files that must move together**, if the context file lists any, and the ones this issue
  needs.
- **Anything already broken in this area**, kept separate from the issue. Report it; do
  not fix it. An unsupervised system that repairs things nobody asked about produces a
  diff nobody can reason about (`FACTORY_RULES.md` 2.4).

## Report

The path to the file, and the three things in it most likely to make this issue harder
than it looks.
