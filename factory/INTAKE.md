# Issue intake: how the factory decides what to work on

The same in every repository. It is the website's rule set, kept once here and vendored with the engine as `factory/INTAKE.md`. Do not edit a vendored copy: change it in the Oluwatosin Software Factory repository. Rule 1.6 in `factory/RULES.md` points here.

## The principle

Product issues are managed on a separate issue platform and are not all logged on GitHub. **An issue appears on GitHub only after people have triaged it for fixing.** So an open GitHub issue is a request a person wants done, not an idea. The factory picks it up when it is ready and then decides whether it can proceed. It never decides what is worth building, and it never accepts work that the repository's `MISSION.md` puts out of scope.

## Labels and states

State is a `factory:*` label on the issue. `state.py` reads it. Created once per repository with `bash factory/init-labels.sh`.

| State | Label | Meaning |
|---|---|---|
| untriaged | (no `factory:*` label) | Open and unseen. The factory triages it on its next free tick |
| accepted | `factory:accepted` | **Ready.** In scope and the factory may build it. A person can apply this directly to say "do this now" |
| in progress | `factory:in-progress` | A workflow is on it. Not a queue state |
| in review | `factory:needs-review`, `factory:needs-fix`, `factory:approved` | A pull request is waiting for validation, needs a fix (under the attempt cap), or passed every gate |
| needs a person | `factory:needs-human` | Stopped. The only state that should reach a person. Assigned and commented |
| needs design | `factory:needs-design` | Real work waiting only on a design or prototype. Stays open |
| deferred | `factory:deferred` | In scope, not now. Stays open |
| rejected | `factory:rejected` | Declined by the factory, rule cited. Stays open and assigned; remove the label to re-triage |
| flood | `factory:rate-limited` | Too many issues at once. Re-evaluated after midnight UTC |
| emergency stop | `factory:stop` | Any open issue with this label halts all dispatch |

Priority: `priority:critical`, `priority:high`, `priority:medium`, `priority:low`. Highest first, then lowest issue number.

There is **no separate "Ready" label.** `factory:accepted` is the ready signal. The factory sets it after triage, or a person sets it to skip triage.

## What happens on each tick

`python factory/state.py next` decides, in a fixed order: fix a pull request that needs fixing, validate one that is waiting, implement the highest priority accepted issue, then triage an untriaged one. Finish in-flight work before starting new work.

The triage node reads the issue against the repository's `MISSION.md` and `FACTORY_RULES.md` section 1 and sets one state, with a comment that cites the rule. When it is ambiguous it leans to `needs-human` or reject rather than guessing, because a wrong accept costs a wrong pull request and a wrong reject costs one comment.

## How a person steers it

- Hold an issue back: apply `factory:needs-human` or `factory:deferred` before the factory sees it.
- Say it is ready now: apply `factory:accepted`.
- Keep one out of every tick: add its target to `exclude` for the repository in `registry.json`.
- Stop everything: label any open issue `factory:stop`, or create the stop file.

## Before a repository is switched on

The moment a repository is enabled in the registry, every open GitHub issue in it is eligible for triage on the next tick, and triage may accept it. Before enabling: read the open issues, label the ones you want held, and confirm each accepted issue has acceptance criteria a person could check. Companion example: issues 15 and 16 were open when it was onboarded, and the owner agreed they should be worked once the factory is configured.

## What makes an issue workable

A concrete expected result, where it happens (screen, route, endpoint), and how someone confirms it. Issues that are design led with nothing to build against go to `factory:needs-design`. Issues that touch a protected file, or anything on the repository's out of scope list, are rejected or sent to a person, however well they are written.

## Closing issues

A factory pull request targets `dev`. GitHub's `Closes #N` only fires on a merge into the default branch, and merges are made by people, so closing the issue and updating its label after the merge is manual until that is automated. It is a known gap, recorded in the website's `docs/factory-current-state.md`.

## Where decisions across repositories live

- **Process decisions** (this document, `decisions.md`, the onboarding process): this repository.
- **Content and brand rules that must be identical everywhere** (writing and AI-writing signs, brand voice, product naming, the coaching versus regulated advice boundary, the analytics contract): `oluwatosin/oluwatosin-standards`. It is vendored into each property with a verifier that fails a build on drift. It does not hold process decisions, and this repository does not hold content rules. A product repository with user facing copy or analytics should vendor the standards as well as the factory.
