# The factory runner

The execution layer: a dispatcher, a runner, a structural gate, a protected-path guard, a
judge panel, an expert flag, a merge, and the node prompts that carry the process.

`MISSION.md` says what this site is. `FACTORY_RULES.md` says how the system behaves when
nobody is watching. `docs/emigr8-website.architecture.md` says why the gate layer is shaped
the way it is. This file says what is wired to what.

**Nothing here is armed.** `FACTORY_AUTONOMY` is 0, `orchestrator.sh` refuses to dispatch
below 1, and no scheduler is installed. Everything below runs by hand until a lap has been
proven by hand.

## The lap

```
implement-issue      prime -> plan -> implement -> gate -> PANEL -> [revise -> gate -> PANEL]
                     -> expert flag -> review -> push -> pull request into dev
validate-pr          rebase -> tripwire -> guard -> gate -> judge -> gate.sh -> merge
fix-pr               findings -> fix -> gate -> back to validate-pr
triage               classify -> state.py applies it
```

Priority order is fixed and load-bearing: fix a pull request that needs fixing, then
validate one waiting, then implement the highest-priority accepted issue, then triage.
Reversed, the queue triages forever while its own pull requests rot.

## What is different here from the stock template

| What | Why |
|---|---|
| `FACTORY_BASE_BRANCH=dev`, `FACTORY_PROMOTE_BRANCH=prod` | The template hardcoded `main` in six places. `main` still exists here, is stale, and nothing deploys from it, so a pull request merged there would succeed and change nothing a user sees. |
| `FACTORY_VALIDATE_CMD=node harness/ci.mjs` | Component 5 was built in phase 3. Markers: `APP_STARTED`, `E2E_PASSED`, `HOLDOUT_PASSED`, `GATE_OK`. |
| `gate.sh` reads `GATE_FAILED step=<name>` | The template matched `GATE_FAILED: <name>`, which `harness/ci.mjs` never prints, so the block that names the failing step was dead and every failure was reported four steps downstream of its cause. |
| A three-judge panel in `implement-issue` | `docs/education-pages-rubric.md`, two of three, hard gates fail outright, two revision rounds. It gates whether a pull request opens, not continuous integration. |
| `factory/panel.py` | Counts the votes, in code. A model asked to summarise its own panel finds the summary that lets the work through. |
| `factory/expert_flag.py` | Parses the `Official source: <source>. Reviewed <date>.` convention, diffs head against base, labels the pull request `needs-expert-review` and holds the promotion. |
| Size cap 4,500 lines and 22 files | A full wave of pages in one pull request, chosen deliberately. The accepted cost is that a revert takes the whole wave. |
| The pre-flight also refuses a TRACKED secret | `.env` is committed. Adding it to `.gitignore` turns `git check-ignore` green while `git add -A` still commits it, so the check would have passed on exactly the file it was written for. |
| `deploy.sh` is not called by anything | Cloudflare Pages already builds every branch, and `validate` runs inside `pnpm build`, so a failed build leaves the last good deployment serving. That is the deploy gate and it predates this runner. |

## Before the first lap

Four things, in order. None of them are done.

**1. Untrack `.env`.** Its own one-file human commit. `VITE_TURNSTILE_SITE_KEY` is set in
Cloudflare Pages for dev and prod, so this is now safe. Until it lands the pre-flight
refuses every workflow that can commit, which is the correct answer.

```bash
git rm --cached .env && git commit -m "Untrack .env now that the key is set in Cloudflare Pages"
```

**2. Create the labels.** Once, and they are the state machine.

```bash
bash factory/init-labels.sh
```

**3. Confirm the ignore rules really bite.**

```bash
git check-ignore -v .env secrets.json credentials.json .factory/runs .worktrees
```

**4. Drive one real issue by hand, at level 0.**

```bash
python factory/state.py next
bash factory/run-workflow.sh triage gh:issue:<n>
bash factory/run-workflow.sh implement-issue gh:issue:<n>
bash factory/run-workflow.sh validate-pr gh:pr:<n>
bash factory/orchestrator.sh --dry-run
```

Only then raise `FACTORY_AUTONOMY`, one notch at a time, watching a full cycle at each.
Level 3 is the target: it is the first level where code merges without a person reading it,
and everything expensive in this repository exists to earn it. The dev to prod promotion
stays human at every level.

## Things that are load-bearing

**The dispatcher never asks a model what to run.** An agent asked "what work is pending?"
invents dispatches for issues nobody filed.

**Each node gets a fresh session.** Not a performance choice. A node that inherits the
previous node's context inherits its reasoning, and the whole holdout argument rests on
some nodes not having seen it.

**The holdout is enforced by the agent's deny list, not by a sentence in a prompt.**
`--disallowedTools` on `.factory/holdout/`.

**Governance is read from the base branch.** A pull request must not be able to weaken the
rulebook it is about to be judged against.

**The guard runs from the root checkout, never from inside the worktree.** Run it in the
worktree and a pull request supplies the code that judges it.

**Empty is not pass.** Every marker in `FACTORY_REQUIRED_MARKERS` must be present with a
non-zero count. Nothing anywhere tests for the absence of the word "error".

**The gate overrides the model.** When the raw markers and the verdict disagree, the raw
output wins and the pull request escalates.

**The stop button fails closed.** Two of them: `.factory/STOP` works with the network down,
and the `factory:stop` label is reachable from a phone. Use one on purpose before going
unattended.

**No prompt invokes a skill.** The Skill tool is on no node's allowlist, and a node denied a
tool does not fail: it asks a human who is not there and exits successfully having done
nothing. If you add a skill to a prompt, add the tool to that node's allowlist in
`run-workflow.sh` in the same commit.

## The comments are the expensive half

Nearly every comment in these files that reads like a war story is one. A factory rebuilt
from the design alone rediscovers all of them, in production, unattended. Do not tidy them
away.
