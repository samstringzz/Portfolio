<!--
  Node 3 of implement-issue. Model: cheap.
  Tools: Read, Glob, Grep, Edit, Write, Bash(python -c:*), Bash(the quick gate).
-->

# Implement the plan

Work `{{rundir}}/plan.md` task by task, in order, running each task's validation command as
you go. Build exactly what the plan asked for and nothing else.

The issue is at `{{issue}}`. The contract is `docs/visa-education-pages.md`. The standard
three judges will score this against is `docs/education-pages-rubric.md`, and you should
read it before you write a sentence rather than after.

## Absolute prohibitions

1. **Never edit a test, a rule, a lock or a gate to make something pass**
   (`FACTORY_RULES.md` 2.1). If a check is genuinely wrong, say so in your report and stop.
   That is an escalation, not a change you make. Most of those paths are unreachable from
   this node by construction; this rule covers the rest.
2. **Never touch a protected file** (`FACTORY_RULES.md` 5). Governance, `factory/`,
   `harness/`, `.factory/locks/`, `.factory/holdout/`, `.github/`, the build and hosting
   config, `public/_redirects`, `public/_headers`, `src/components/Footer.tsx`,
   `src/utils/attribution.ts`, `src/utils/__tests__/`, the PRD, the architecture document,
   the rubric, anything credential-shaped. `scripts/prerender.js` is deliberately not
   protected, because every new page has to add an entry to it.
3. **Never add a domain to the allowlist in
   `src/utils/__tests__/attribution-links.test.ts`** to make that test pass
   (`FACTORY_RULES.md` 2.10). Wrap the link with `withAttribution()` instead. That file is
   protected anyway, so the attempt fails rather than succeeding.
4. **Never satisfy a rule by deleting content** (`FACTORY_RULES.md` 2.11). Removing FAQs to
   make a parity check pass, or cutting a section to get under the size cap, makes the page
   worse while the gate goes green.
5. **Never add a dependency.** If the plan calls for one, stop and say so.
6. **Never build beyond the plan.** No opportunistic refactors, no "while I was in here".
   The plan's out-of-scope section is binding, and the file cap will catch you anyway.
7. **Stay inside 4,500 changed lines and 22 files.** That is a full wave of pages on
   purpose. Over it, stop and report: the work needs splitting.

## House style, and it is not negotiable

**No em dash and no en dash, anywhere in user-facing copy.** Write "3 to 5 years", not the
dashed form. `VE-DASH-01` checks this and it is a rubric hard gate.

**None of the writing tells** in the vocabulary list `harness/rules.mjs` reads: delve, dive
into, unlock, unleash, elevate, seamless, robust, leverage, tapestry, realm, testament to,
boasts, "navigate the complexities", "it is not just X, it is Y", and the rest.
`VE-VOCAB-01` checks this. And do not swap a flagged word for a synonym while leaving the
sentence exactly as generated (`FACTORY_RULES.md` 2.12): the list is evidence of a habit,
not a blocklist to route around.

**UK English.** Personalise, programme, organisation, specialise.

**Sentence case in headings**, one soft call to action, warm and plain. The reader is often
reading English as a second language and is often years away from buying anything.

**Never write `emigr8visa.com` or any subdomain of it.** `VE-DOMAIN-01`.

## The two things this site gets wrong most often

**Every volatile claim carries its citation, adjacent, in the same passage.** A fee, a
salary threshold, a processing time, an endorsing or reviewing body, a priority sector, an
eligibility rule. The form is exactly
`Official source: <source>. Reviewed <date>.` and the date is the date you checked, not
today's date applied to a claim you did not check. `VE-CITE-01` and `VE-CITE-02` check
presence and shape; nothing can check truth, which is why every one of these flags the pull
request for a named expert before it can be promoted.

**The coaching-not-advice statement appears twice**: in the overview note and in at least
one FAQ. eMigr8 provides coaching and guidance, not legal advice or immigration
consultation. Hard invariant 1, `VE-COMPLY-01`, and a rubric hard gate.

And the one that fails silently: **the FAQ a crawler reads is the FAQ a person reads**.
Whatever you add to the content file goes into `scripts/prerender.js` in the same commit,
with the same questions in the same words. `VE-JSONLD-02` compares them.

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

Write `{{rundir}}/report.md`: what was built, which tasks completed, which of the six
artifacts moved, every volatile claim you wrote with the source you cited for it,
**deviations from the plan and why**, and anything you deliberately left. A documented
deviation is a decision; an undocumented one is a bug.
