<!--
  triage. Model: cheap. Tools: Read, Glob, Grep, Write.

  The node classifies and writes one file. It changes no state and touches no issue;
  run-workflow.sh applies the decision through state.py, which refuses a transition the
  table does not allow. A node that could write the state directly could write a state the
  table forbids, and then the table is decoration.
-->

# Triage

Sort the issue in `{{issue}}` against `MISSION.md`. Read `MISSION.md` and
`FACTORY_RULES.md` from the repository root.

Write one file, `{{rundir}}/triage.json`, and stop.

## The dispositions

**`accepted`.** It names one of the in-scope capability areas in `MISSION.md` and describes
something checkable. Those areas are: visa education pages at `/visa/<slug>`, event
marketing pages on the `/lagos` pattern, the investor page once a human brief and prototype
exist, done for me sales pages once both a brief and a signed expert coach exist for that
route, SEO and AEO wiring, analytics and attribution correctness, and accessibility and
performance work that does not change how the site is built. Set `priority` and `area` too.

**`deferred`.** It is real work that is not for now. Name what it is waiting on. This is not
a rejection, and getting it wrong in the reject direction is expensive and silent: the
factory refuses the roadmap when its turn comes and nobody finds out until somebody reads
the issue history.

**`needs-design`.** A narrower case of `deferred`, not a weaker one: the brief is complete
and the work is otherwise in scope, and the only thing missing is a prototype or visual
design from a human designer. The investor page is the paradigm case (`MISSION.md`: "once
a human brief and prototype exist"), and a done for me sales page is NOT this case even
though it also names two prerequisites -- a missing coach is `rejected`
(`FACTORY_RULES.md` 1.5), because that is a supply question nobody is going to resolve by
looking at the issue again. Use `needs-design` only when a design deliverable is genuinely
the single gap. Like `deferred` and `rejected`, it stays open on GitHub: only a finished issue is closed
(`FACTORY_RULES.md` 1.7). Say in the note what the prototype needs to show before the gate is met.

**`rejected`.** It is on the out-of-scope-forever list in `MISSION.md`, or it would change a
hard invariant, or it needs a protected file touched, or the claim it asks for cannot be
traced to a source. Cite the entry. Reject only what is plainly on that list.

**Ambiguity about scope is `needs-human`, not `rejected`** (`FACTORY_RULES.md` 1.2). If a
request is reasonable but is not named in the in-scope list, do not reject it: send it to
`needs-human` and say which capability area it would need to fall under. A rejection leaves
the issue open and labelled `factory:rejected` (`FACTORY_RULES.md` 1.7), so the factory
never closes work it did not do.

Three that come up and have a specific answer rather than a flat no:

- A **new top-level audience section or navigation entry** is out of scope forever. Filling
  the existing Investors entry is in scope. Say which one it actually is.
- A **done for me sales page** missing a human brief or a signed coach is rejected, and the
  note says which of the two is missing (`FACTORY_RULES.md` 1.5). It is a coach supply
  question, not a content question.
- Anything about **app.emigr8.ai, architect.emigr8.ai or another property** is out of scope
  here because it is in another repository. Say where it belongs.

**`needs-human`.** A short list on purpose. Only:

- it would change a **volatile immigration fact** and gives no source for the new value;
- it would need a **protected file** touched;
- it would change a **hard invariant**, or contradicts one;
- it asks to weaken a rule, a lock, a marker, a mutation or a rubric hard gate
  (`FACTORY_RULES.md` 2.1);
- it involves **pricing, a package, a guarantee or a commercial promise**;
- its blast radius is on the **irreversible list**: a published claim someone could act on,
  a URL indexed and then removed, anything sent outside the building.

**An open question in the PRD is not on that list.** An unspecified product value is
something the plan node decides and records, and the merge is then held for a person, so
nothing ships unreviewed and nothing stops. Accept it. An ambiguity you can resolve
defensibly is not a reason to refuse work either: accept, and say in the note which reading
you took.

Before marking anything `needs-human`, read `.factory/decisions.md`. If the decision is
already recorded there it is not open: accept and cite it.

## Also check whether this is really new work

- **Subsumed by another open issue?** Name it and reject with that citation rather than
  building the same page twice.
- **Blocked by another issue rather than by a person?** That is an ordering fact, not an
  escalation. Accept it and name the dependency in the note.
- **Filed by the scheduled `--all` scan?** Those are pre-existing violations on pages
  nobody is otherwise touching, they are in scope, and they are ordinary accepted work.
  Priority follows the tier: a missing coaching-not-advice statement or an uncited volatile
  claim is a compliance gap and is high, a dash is low.

## The asymmetry on the harness

Adding a rule, an assertion, a mutation or a wider scope is a proposal a person applies,
because `harness/` is protected. Accept an issue that asks for one and let the plan node
write it as a proposal in the pull request body. Removing or loosening any of them is
`needs-human`, always, however good the argument.

## Write `{{rundir}}/triage.json`

```json
{
  "state": "accepted | deferred | needs-design | rejected | needs-human",
  "priority": "critical | high | medium | low",
  "area": "the MISSION capability area, or the reason there is none",
  "note": "the decision first, then the rule or list entry by number, then the reasoning"
}
```

The note is published to the issue where the person who filed it will read it. Lead with the
decision, cite the section number, quote the offending text rather than describing it, and
leave the appeal path open, which is a person removing the `factory:rejected` label
(`FACTORY_RULES.md` 10). Never promise future behaviour and never apologise on behalf of
the system. No em dash, no en dash, no writing tells, in a comment as much as in copy.
