#!/usr/bin/env bash
# Engine-owned process environment, sourced by every script that commits. Unlike factory/config.sh,
# which each repository owns and the vendor script never overwrites, this file travels with the
# engine, so a fix here reaches every repository on the next re-vendor.
#
# GIT IDENTITY. Every commit the engine makes (implement, fix, merge) needs SOME identity, and a
# fresh checkout on a machine with no git config has none: the first Companion lap escalated with
# "Author identity unknown". These are process environment variables only. git config, global or
# local, is never touched. Git's precedence puts GIT_AUTHOR_* and GIT_COMMITTER_* above config, and
# the ":-" means an identity already set by the caller is never overridden. The default matches the
# author of existing factory commits on the website. Once the GitHub App is wired in, a distinct bot
# author would be cleaner.
export GIT_AUTHOR_NAME="${GIT_AUTHOR_NAME:-Oluwatosin}"
export GIT_AUTHOR_EMAIL="${GIT_AUTHOR_EMAIL:-CHANGE_ME@example.com}"
export GIT_COMMITTER_NAME="${GIT_COMMITTER_NAME:-$GIT_AUTHOR_NAME}"
export GIT_COMMITTER_EMAIL="${GIT_COMMITTER_EMAIL:-$GIT_AUTHOR_EMAIL}"
