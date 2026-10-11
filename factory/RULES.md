# Factory rules (universal)

How the build system behaves when nobody is watching. **These rules are the same in every Oluwatosin repository.** They live once, in the Oluwatosin Software Factory repository, and reach each repository as part of the vendored engine at `factory/RULES.md`. Do not edit this copy in a repository: change it in the factory repository, release, and re-vendor.

Each repository adds only what is specific to it, in its own `FACTORY_RULES.md` (see section 12). `MISSION.md` says what the product is and what is out of scope. `CLAUDE.md` says how the repository is worked in. This file and the repository's additions exist because nobody is reading the diff.

Every rule has a number. **Cite the number in every comment you post.** A rejection that names its rule can be read and appealed. When a prompt or a script writes `FACTORY_RULES.md 2.1`, it means rule 2.1 of this file. A repository's own rules are cited as `<section>.L<n>`, for example `2.L1`.

The validator reads this file, `FACTORY_RULES.md`, `MISSION.md` and `CLAUDE.md` from the **base branch**, never from the pull request under review, so a pull request cannot weaken the rulebook it is judged against.

## 1. Triage

**1.1** Accept only work inside the in-scope list in `MISSION.md`. Reject anything on the out of scope list, citing the item.

**1.2** Bias towards not building when it is ambiguous, but never towards silence. Reject only what is plainly on the out of scope list, citing the item. Work that is merely not named in the in-scope list, or whose scope is unclear, goes to `needs-human` so a person decides. A false accept costs a wrong pull request, a validation cycle, and possibly a merge; a false reject used to cost a closed issue that nobody saw.

**1.3** An issue arguing to change a hard invariant is rejected. Do not debate it and do not propose a compromise.

**1.4** An issue that would need a protected file changed is rejected, not attempted. Say which file and why it is protected.

**1.5** An issue that is design led, with no acceptance criteria beyond "make it look right", is labelled `factory:needs-design` and not built.

**1.6** Intake. Product issues are triaged on a separate platform and only triaged issues are logged on GitHub, so an open issue is a request a person wants done. `factory:accepted` is the ready signal and there is no separate Ready label. An issue with no `factory:*` label is triaged against `MISSION.md`. Full rules and the label table: `factory/INTAKE.md`.

**1.7** Only `done` closes an issue. A rejected, deferred, needs-design or needs-human issue stays open, labelled, assigned and announced, because a closed issue reads as finished and the work was not done. A rejection is a comment and a label, never a close. To appeal one, a person removes its `factory:rejected` or `factory:deferred` label and it is triaged again.

## 2. Implementation

**2.1** Never edit a test, a rule definition, or a gate to make a change pass. If a gate is wrong, stop and escalate under section 7. Changing what you are measured by is the one thing that cannot be delegated.

**2.2** Never touch a protected file. See section 5.

**2.3** Never exceed the size caps in `factory/config.sh` (section 8).

**2.4** Build exactly what the issue asked for. An unsupervised system that improves things nobody asked about produces a diff nobody can reason about.

**2.5** Never add a dependency without justifying it in the pull request body. Prefer none. Where the package files are protected, never.

**2.6** Never satisfy a check by deleting the thing it checks: removing a test, a route, a rule or a lint setting to go green, or cutting content to get under a cap. The gate turns green and the product gets worse.

**2.7** Never write, read into a prompt, print or commit a secret, key, token, `.env` file or service account.

**2.8** Follow `standards/` where it exists (writing, brand voice, naming, the coaching versus regulated advice boundary, the analytics contract). It is the shared source for content rules and it is protected.

## 3. Quality gates for auto-merge

The ones marked **code** are enforced mechanically and cannot be argued with. The rest are prompt instructions and are therefore weaker.

**3.1** The repository's validate command passes. **code**

**3.2** It emits every marker in `FACTORY_REQUIRED_MARKERS` with non-zero counts. A check that ran against nothing is a failure, not a pass. **code**

**3.3** No protected file was modified. **code**

**3.4** The diff is inside the size caps. **code**

**3.5** The judge panel passed at two of three, within two revision rounds.

**3.6** The pull request body tells a person exactly how to verify the change by hand: where, in what state, and what they should see.

**3.7** The pull request body cites the rules that drove its decisions and what each made the work do.

## 4. The mandatory end to end regression

Before any merge, the repository's end to end check runs and passes on the main path, on every change, including changes that look unrelated. The failures that reach production are usually shared ones (layout, routing, providers, shared configuration) that almost every change touches. What that check is belongs to each repository (`4.L*`).

## 5. Protected files, auto-reject on any modification

A pull request touching any of these is closed without a fix attempt and the issue escalates, because touching one means the scope was misunderstood.

- `MISSION.md`, `FACTORY_RULES.md`, `CLAUDE.md`, `AGENTS.md`
- `factory/**` (the vendored engine, including this file), `.factory/locks/**`, `.factory/holdout/**`, `.factory/protected.txt`
- `standards/**`
- `.github/**`
- `.env` and every variant, and anything named like a credential, key or service account
- everything listed in the repository's `.factory/protected.txt`, published as `5.L*` in its `FACTORY_RULES.md`

The executable list is `factory/guard.py` plus `.factory/protected.txt`. Where this file and the guard disagree, the guard is what happens.

## 6. Auto-reject triggers, no fix attempt

**6.1** Any protected file modified.
**6.2** A secret or credential committed, in any form.
**6.3** A test, rule or gate weakened, disabled, skipped, or allowlisted around.
**6.4** A hard invariant from `MISSION.md` broken.
**6.5** Work outside the in-scope list, discovered after the pull request opened.
**6.6** Three failed fix attempts on the same pull request.

## 7. Deciding, and the short list that stops the factory

**7.1** Decide ordinary product values yourself and record them in `.factory/decisions.md` with a sentence of reasoning: naming, layout details, which existing pattern to reuse. Do not stop for these and do not ask a person to choose a heading.

**7.2 The stop list, complete and deliberately short.** Only these stop the work, plus whatever the repository adds as `7.L*`:

- Anything that would touch a protected file
- Anything that would break a hard invariant
- A change to authentication, payments, data retention, or what is stored about a person
- A requirement that contradicts existing behaviour and cannot be settled from the issue
- A decision that would be expensive to reverse

**7.3 The irreversible list.** A revert on the development branch undoes almost everything. It does not undo anything sent outside the building, a store release or over-the-air update, data written to a person's record, or a claim a person has acted on. Treat those as one way and stop.

**7.4 When it does stop**, it does so loudly: the label, an issue assigned to a person, and a comment naming the rule and what a human needs to decide. It does not merge and then mention it.

## 8. Cost and throughput

- One job at a time per worktree. Give each worktree its own branch, and never nest one inside another checkout.
- Size caps are `FACTORY_SIZE_CAP` and `FACTORY_FILE_CAP` in the repository's `factory/config.sh`.
- Three fix attempts per pull request, then auto-reject under 6.6.
- Premium model in the planning slot, cheaper models elsewhere.
- Priority order, and it is load bearing: fix a pull request that needs fixing, then validate one waiting, then implement the highest priority accepted issue, then triage. Finish in-flight work before starting new work, or the queue triages forever while its own pull requests rot.

## 9. Separation of concerns, the holdout

The scenarios in `.factory/holdout/` are the only honest reason to merge code nobody read. They work only while the system writing the code cannot read them.

**9.1** No implementing or fixing node may read, list or infer the contents of `.factory/holdout/`.

**9.2** A pull request that modifies anything under `.factory/holdout/` is auto-rejected under 6.1.

**9.3** The validator is told what was asked for and what the code does now. It is never told how the code was written, what the implementer intended, or what it struggled with.

**9.4** When a holdout scenario fails, the failure is reported without quoting the scenario into a context an implementing node will see.

## 10. Communication style

Lead with the decision. Cite the rule by number. Stay neutral and specific. Quote the exact offending text rather than describing it. Leave an appeal path, which is a person removing the `factory:rejected` label. Never promise future behaviour and never apologise on behalf of the system. UK English. No em dash, no en dash, and none of the writing tells, in comments as well as in copy.

## 11. Changing this file

Human commits only, in the Oluwatosin Software Factory repository, followed by a release and a re-vendor into each repository. It is on the protected list everywhere, and the validator reads it from the base branch. If a rule here is wrong, the system's job is to stop and say so under section 7, not to fix it.

## 12. Repository additions

A repository's `FACTORY_RULES.md` may add rules and may not weaken any rule here. Additions are numbered `<section>.L<n>` in the section they extend, for example `2.L1`, and are cited the same way. A repository states its own: the definition of the end to end check (`4.L*`), the published copy of its protected list (`5.L*`), and extra stop conditions and irreversible actions (`7.L*`). Anything that reads like a weaker version of a rule above is void.
