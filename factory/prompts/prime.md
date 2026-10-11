<!--
  Node 1 of implement-issue. Model: cheap. Tools: Read, Glob, Grep, git log, git ls-files.

  NO SKILL IS INVOKED FROM ANY PROMPT IN THIS DIRECTORY, and that is a decision rather than
  an omission. Every node runs headless behind an --allowedTools list, the Skill tool is not
  on any of them, and a node that asks for a tool it was not given does not fail: it asks a
  human who is not there, gets no answer, and exits successfully having done nothing. The
  process is written out here instead. If you add a skill to a node, add the tool to that
  node's allowlist in factory/run-workflow.sh in the same commit, and prove it once by hand.
-->

# Prime on the rules corpus

Read the corpus, then write down what it means for this one issue. You are not solving
anything here. You are making sure the expensive node after you does not spend a premium
model rediscovering rules that are already written down.

The issue is at `{{issue}}`.

## The corpus, in this order

**The constitution.** `MISSION.md` first: what this site is for, the in-scope capability
areas, the out-of-scope-forever list, and the ten hard invariants. Then `FACTORY_RULES.md`:
how this runs when nobody is watching. Then `CLAUDE.md` and `AGENTS.md`: how the repository
is worked in whether a person or a machine is doing it.

**The page contract.** `docs/visa-education-pages.md`. This is the specification for
everything at `/visa/<slug>` and the plan is written against it. Read it in full. It is
long, and every section of it is there because something went wrong once.

**The standard the work is judged by.** `docs/education-pages-rubric.md`. Read the hard
gates and the scored criteria now, not after the page is written. Three independent judges
score against this before a pull request opens, and two of three have to pass.

**The rules that are already code.** `harness/rules.mjs`. Sixteen rules with stable
identifiers, and they are the deterministic half of the corpus. Note which of them touch
the area this issue is in. Cite identifiers rather than descriptions: `VE-CITE-01` is
checkable and "the citation rule" is not.

**The shape of a real page.** `src/content/visa/types.ts` for the contract, then one
existing content file in full. Pick the closest comparable route to the one the issue is
about, and say in your report which one you picked and why.

**The six artifacts that move together.** Look at how one existing slug appears in each of
`src/App.tsx`, `scripts/prerender.js`, `generate-sitemap.mjs` and `public/sitemap.xml`,
`public/llms.txt`, `public/_redirects`, and `src/content/visa/routes.ts`. A good share of
the failures in this repository are a page that exists in five of the six.

**What has changed lately.** `git log -15 --oneline`, and `git ls-files src/content/visa`.

## What you may not read

Anything under `.factory/holdout/`. It is denied at the tool layer, so an attempt fails
rather than succeeding quietly, and that is deliberate: those assertions are the only
honest reason to merge a page nobody read, and they work only while whatever writes the
page cannot see them (`FACTORY_RULES.md` 9).

## Write `{{rundir}}/priming.md`

Scannable, and specific to this issue rather than a summary of the documents.

- **What the issue touches.** The capability area from `MISSION.md`, and the files.
- **The comparable page**, named, with the reason. Say what the new work should copy in
  structure and what it must not copy in wording. The rubric scores template uniqueness,
  and a find-and-replace of a route name across shared paragraphs fails it.
- **Which of the sixteen rules apply**, by identifier, and what each one will check.
- **The hard gates most at risk for this route**, from the rubric. For most routes that is
  the citation gate and the coaching-not-advice gate. Say which, and why for this route.
- **Volatile facts the work will have to state**: fees, thresholds, processing times,
  endorsing bodies, eligibility rules. Each one needs an adjacent
  `Official source: <source>. Reviewed <date>.` line, and each one flags the pull request
  for expert review, so name them now rather than discovering them at the end.
- **Anything already broken in this area**, kept separate from the issue. Report it; do
  not fix it. An unsupervised system that repairs things nobody asked about produces a
  diff nobody can reason about (`FACTORY_RULES.md` 2.4).

## Report

The path to the file, and the three things in it most likely to make this issue harder
than it looks.
