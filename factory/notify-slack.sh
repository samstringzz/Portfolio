#!/usr/bin/env bash
# The one thing that reaches a human. Posts an escalation to Slack.
#
#   printf '%s\n' "<message>" | bash factory/notify-slack.sh <target>
#
# Wired in factory/config.sh as FACTORY_NOTIFY_CMD. Everything else the factory writes
# waits to be found; `needs-human` is the only state a person must act on, so it is the
# only one allowed to interrupt one. If it cannot, unattended quietly means unmonitored.
#
# THE CONTRACT, and getting it the wrong way round produces a useless alert rather than
# none. From factory/config.sh:
#
#   STDIN   "<target> needs a human: <reason>"   <- the whole message. Read this.
#   argv[1] "<target>"                           <- routing and the fallback title only
#
# Somebody writing one of these reaches for "$1" by reflex, and gets a 3am alert whose
# entire body is `gh:pr:14`: it says something is wrong and not what, which is close to no
# notification at all.
#
# ---------------------------------------------------------------------------------------
# THE WEBHOOK URL IS A CREDENTIAL AND IT IS NOT IN THIS REPOSITORY.
#
# A Slack incoming webhook needs no token to post: anyone holding the URL can write to the
# channel as this app, forever, and rotating it means deleting it in Slack. So it is read
# from the environment, and never committed. Two ways to set it, in this order:
#
#   1. `.factory/notify.env`, which .gitignore already covers, holding one line:
#          FACTORY_SLACK_WEBHOOK=https://hooks.slack.com/services/...
#      Per machine, survives a reboot, and visible to anyone who can already read the repo
#      checkout on that machine.
#
#   2. A user environment variable FACTORY_SLACK_WEBHOOK. Better on a shared box, and it
#      is what a Task Scheduler run inherits when the task runs as the same user.
#
# TWO KINDS OF SLACK WEBHOOK, AND THEY TAKE DIFFERENT PAYLOADS.
#
#   hooks.slack.com/services/...   a classic incoming webhook, from a Slack APP.
#                                  Takes Block Kit. Costs an app slot in the workspace.
#   hooks.slack.com/triggers/...   a Workflow Builder webhook trigger. Takes a FLAT
#                                  object whose keys are the variables the workflow
#                                  declares. Costs no app slot.
#
# The second exists here because this workspace hit its app limit, so the obvious route
# was closed. Sending Block Kit to a trigger URL fails, and sending a flat object to a
# services URL renders as an unformatted line, so the shape is chosen from the path
# rather than from a knob nobody would remember to set. One fewer thing to get wrong,
# and switching from one to the other later means changing the URL and nothing else.
#
# For the trigger form, declare ONE text variable on the workflow and name it in
# FACTORY_SLACK_WORKFLOW_VAR (default `message`). A key the workflow does not declare
# is rejected by Slack, so the name has to match what you created.
#
# EXIT 0 MEANS SLACK ACCEPTED THE MESSAGE. ANYTHING ELSE EXITS NON-ZERO.
#
# This exited 0 on every path at first, including the one where no webhook is set, on
# the reasoning that an escalation must never be the thing that fails. That reasoning is
# right and the conclusion was wrong. `factory_notify` in config.sh reads this exit code
# and prints NOTIFIED or NOTIFY_FAILED, and it discards stdout - so exiting 0 while
# posting nothing made the runner log say a human had been told when nobody had. On an
# unattended system that is the worst available outcome: strictly worse than no notifier
# at all, because it also removes the reason to go and look.
#
# Non-fatal is guaranteed by the CALLER, not by this exit code. `factory_notify` reports
# either way and never aborts, and the write to .factory/needs-human.md has already
# happened before this runs. So the exit code is free to tell the truth.
# ---------------------------------------------------------------------------------------

set -uo pipefail

TARGET="${1:-unknown}"
ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

# Read stdin FIRST, unconditionally, before any early return. A caller piping into this
# blocks on a full pipe buffer if nothing ever reads it, and a notifier that can hang the
# escalation path is worse than one that does not fire.
MESSAGE="$(cat || true)"
[ -n "$MESSAGE" ] || MESSAGE="$TARGET needs a human (no reason was supplied)"

# The file is sourced rather than parsed so a value containing `=` or `#` survives.
if [ -z "${FACTORY_SLACK_WEBHOOK:-}" ] && [ -f "$ROOT/.factory/notify.env" ]; then
  # shellcheck disable=SC1091
  . "$ROOT/.factory/notify.env"
fi

if [ -z "${FACTORY_SLACK_WEBHOOK:-}" ]; then
  echo "SLACK_SKIPPED no FACTORY_SLACK_WEBHOOK set (env, or .factory/notify.env)."
  echo "  The escalation is still recorded in .factory/needs-human.md and on the issue."
  exit 1
fi

# Refuse anything that is not a Slack webhook. This value arrives from a file on disk and
# from the process environment, and posting an escalation - which quotes repository paths
# and rule text - to whatever URL happens to be in that variable is a data leak with a
# helpful covering note. A typo should fail loudly here rather than succeed somewhere else.
case "$FACTORY_SLACK_WEBHOOK" in
  https://hooks.slack.com/*) : ;;
  *) echo "SLACK_REFUSED FACTORY_SLACK_WEBHOOK is not a https://hooks.slack.com/ URL. Not posting."
     exit 1 ;;
esac

case "$FACTORY_SLACK_WEBHOOK" in
  */triggers/*) SLACK_KIND=workflow ;;
  *)            SLACK_KIND=app ;;
esac

# JSON-encoded by python, never by hand. An escalation reason is arbitrary text that
# routinely contains quotes, backslashes and newlines, straight out of a gate log. A
# hand-built payload breaks on the first one and Slack answers `invalid_payload`, which is
# a notification failing precisely when the message is interesting.
PAYLOAD="$(MSG="$MESSAGE" TGT="$TARGET" KIND="$SLACK_KIND" \
           VAR="${FACTORY_SLACK_WORKFLOW_VAR:-message}" python -c '
import json, os
msg = os.environ["MSG"].strip()
tgt = os.environ["TGT"]

if os.environ["KIND"] == "workflow":
    # Flat, one declared variable, and the whole thing as plain text. Workflow Builder
    # renders the value as written, so the target goes INSIDE the string rather than in a
    # second key the workflow was never told about.
    body = "Oluwatosin factory: " + tgt + " needs a human" + chr(10) + chr(10) + msg[:2500]
    print(json.dumps({os.environ["VAR"]: body}))
else:
    print(json.dumps({
        "text": f"Oluwatosin factory: {tgt} needs a human",
        "blocks": [
            {"type": "section",
             "text": {"type": "mrkdwn", "text": f"*Oluwatosin factory: `{tgt}` needs a human*"}},
            {"type": "section",
             "text": {"type": "mrkdwn", "text": "```" + msg[:2800] + "```"}},
            {"type": "context",
             "elements": [{"type": "mrkdwn",
                           "text": "Nothing merges on this until a person acts. "
                                   "Also in `.factory/needs-human.md` and on the issue."}]},
        ],
    }))
' 2>/dev/null)"

if [ -z "$PAYLOAD" ]; then
  echo "SLACK_FAILED could not build the payload; the escalation is in .factory/needs-human.md"
  exit 1
fi

# --fail so a 4xx is a failure rather than a body that says "invalid_payload" with exit 0,
# and a timeout so a hung Slack cannot hold a dispatch slot open.
HTTP="$(printf '%s' "$PAYLOAD" | curl -sS --fail-with-body --max-time 15 \
          -X POST -H 'Content-type: application/json' \
          --data @- "$FACTORY_SLACK_WEBHOOK" 2>&1)" && RC=0 || RC=$?

if [ "$RC" -eq 0 ]; then
  echo "SLACK_POSTED $TARGET kind=$SLACK_KIND"
  exit 0
fi
# Never echo the URL: a curl error message can include the endpoint it failed against.
echo "SLACK_FAILED rc=$RC ${HTTP:0:200}"
echo "  The escalation is still recorded in .factory/needs-human.md and on the issue."
exit 1
