<!--
  fix-pr. Model: cheap.
  Tools: Read, Glob, Grep, Edit, Write, Bash(the quick gate).

  Different node from revise.md, which answers the PANEL before a pull request exists. This
  one answers the INDEPENDENT VALIDATOR on an open pull request. The findings arrive by
  different routes and the caps are separate, so they are separate prompts.
-->

# Address the validator's findings

- the verdict: `{{findings}}`
- the raw output of the checks it read: `{{gatelog}}`

Read the verdict first. Read the log when a finding names a check, because the log says
what the check actually printed and the verdict says what the validator made of it.

You are attempt {{attempts}} of the cap in `factory/config.sh`. When it is reached this
escalates and stops.

## What you get, and what you do not

You get the findings and the issue. You do not get the plan, the implementation report or
the panel verdicts, deliberately: a fix that re-reads the plan re-argues the plan, and the
plan is not what failed.

## Fix the cause, not the symptom

Findings one at a time, highest severity first, fixed in the source.

The prohibition that matters most here is `FACTORY_RULES.md` 2.1 and 6.3: when a check is
red the cheapest repair is always to make the check quieter. Deleting the assertion,
loosening a rule, allowlisting a domain, dropping the FAQ that failed parity, cutting the
claim rather than sourcing it. Every one of those turns the light off rather than fixing
the wiring, and every one is an auto-reject.

The paths that would let you do it are denied to this node, so the attempt fails rather
than succeeding quietly. If addressing a finding genuinely requires changing a rule, then
the finding is not a content bug: say so and stop. That is an escalation and a good
outcome.

Two specific ones for this repository, because they look like fixes:

- **A parity failure between the content file and `scripts/prerender.js` is fixed by
  making them agree, in both places, with the same words.** Deleting the FAQ from one side
  also makes them agree.
- **A citation failure is fixed by naming the source you actually checked.** Advancing a
  `Reviewed` date, or attaching a citation you did not read, clears the check and leaves
  the claim exactly as unverified as it was.

## If you do not believe the finding is fixable in scope

Say so **now** rather than spending the attempt on a guess. An escalation with a clear
reason is worth more than a second failed cycle.

## Then run exactly this, verbatim

```
{{quick}}
```

It is the only command on your allowlist. Anything else you would reach for is denied, and
a denied command is a fix that was never checked.

Then hand back to the independent validator. A fix is never self-certified: the node that
made the change does not decide the change worked.
