"""Protected paths, size cap, and the binary-asset ban. Structural, not prompted.

FACTORY_RULES.md 5, 6 and 8. This runs BEFORE any other evaluation, because a change
that can edit the rulebook must not be judged against the edited rulebook.

Usage:
    python factory/guard.py [--base <ref>] [--head <ref>]

Defaults to comparing the working tree against the base branch. Exits:
    0  PROTECTED_OK
    1  PROTECTED_VIOLATION   a protected file was touched -- auto-reject, no fix attempt
    2  GUARD_ERROR           the guard could not run, which is NOT a pass

Exit code 2 matters more than it looks. A guard that cannot determine the diff must fail
closed. Failing open here would mean "we could not check, so we merged", which is the
same class of mistake as counting a skipped check as a passed one.
"""
from __future__ import annotations
import fnmatch
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Kept here, in code, rather than in a data file the factory could plausibly be asked to
# edit as part of some other task. factory/** is itself protected, so this list is
# protected by the rule it defines.
PROTECTED = [
    # SEEDED FROM FACTORY_RULES.md SECTION 5, WHICH IS THE PUBLISHED LIST. This is the
    # executable copy of it. The two are meant to say the same thing, and where they do
    # not, this one is what actually happens - so a change to section 5 that is not
    # mirrored here is a rule that does not exist. Both files are protected, so both move
    # in the same human commit or neither does.

    # Governance, the constitution. The agent cannot amend the rules it is judged by.
    "MISSION.md", "FACTORY_RULES.md", "CLAUDE.md", "AGENTS.md", "FACTORY.md",
    # The PRD the mission was compressed from, and the architecture that decided the gate
    # layer. Both are reasoning a change can be checked against; neither is a thing a
    # change may edit on its way past.
    "docs/*.prd.md", "docs/emigr8-website.architecture.md",
    # The rubric the judge panel scores against. A builder that can edit the rubric can
    # pass the panel, which is the tier 3 version of editing a test.
    "docs/education-pages-rubric.md",

    # The machinery, including this file. factory/* being on its own list is what stops a
    # pull request supplying the guard that judges it.
    "factory/*",
    # The locks and the holdout. Raising a floor is a deliberate human commit, never
    # something a builder does in the pull request that made the floor inconvenient.
    ".factory/locks/*",
    ".factory/holdout/*",

    # The validation harness and everything it reads. FACTORY_RULES.md 2.1: changing what
    # you are measured by is the one thing that cannot be delegated.
    "harness/*",
    "harness/mutations/*",
    "standards/*",

    # Continuous integration. Also unpushable from here: the gh token carries `repo` and
    # not `workflow`, so a change under .github/ fails at the push with an error about
    # scopes rather than at the gate. Listed anyway, because a guard that relies on a
    # token scope is a guard that disappears the day somebody widens the token.
    ".github/*",

    # Build, hosting and deployment. MISSION.md, out of scope forever: a system that can
    # change its own build can change its own gates.
    "vite.config.ts", "vitest.config.ts", "eslint.config.js",
    "tsconfig.json", "tsconfig.app.json", "tsconfig.node.json",
    "package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "package-lock.json",
    "wrangler.toml",
    "public/_headers",
    "src/worker.ts", "src/redirects.json",
    "scripts/noindex-non-production.js",
    # public/_redirects is NOT in this list. It is protected on the same terms as
    # everything else here, but every new page needs two lines added to it (a
    # trailing-slash 301 and the SPA rewrite), so a blanket block refuses the one job
    # this factory exists to do. See ADDITIVE_ONLY below: the file is still fully
    # protected against anything that is not a pure addition.

    # Sitewide surfaces. A change here is not a page change; it is every page at once, and
    # the shared footer is where the compliance statement lives.
    "src/components/Footer.tsx",

    # Attribution. FACTORY_RULES.md 2.10: the allowlist in the test is not a place to add
    # a domain, it is the thing that would have caught the domain not being wrapped.
    "src/utils/attribution.ts",
    "src/utils/__tests__/*",

    # Secrets. Being unable to EDIT one does not stop `git add -A` from publishing one
    # that appears for the first time; see the pre-flight in run-workflow.sh.
    ".env", ".env.*", "*.local", "*credential*", "*secret*",
]

# DELIBERATELY NOT PROTECTED, and it is worth saying why in the file that would otherwise
# be read as the whole list. `scripts/prerender.js` is 12,982 lines and every new page has
# to add an entry to it, so protecting it would refuse the one job this factory exists to
# do. FACTORY_RULES.md 2.7 covers it instead: a FAQ added to a content file is mirrored
# there in the same commit, and the tier 2 parity rule fails the gate when they disagree.

# ADDITIVE-ONLY EXCEPTION (FACTORY_RULES.md 5, amended 2026-09-19). `public/_redirects`
# stays fully protected -- this does not remove it from the guard, it narrows what
# "touched" means for this one file. A PR that only ADDS lines (a new route's
# trailing-slash 301 and SPA rewrite, inserted ahead of the `/* /index.html 200`
# catch-all) passes. A PR that removes, reorders, or edits any EXISTING line is a full
# protected-file violation, exactly as before -- this exception registers new routes,
# it does not reopen the file to rewrites. `is_purely_additive()` below is what actually
# enforces that: it fails closed (treats a diff it cannot read as non-additive) the same
# way the rest of this guard fails closed on an unreadable diff.
ADDITIVE_ONLY = [
    "public/_redirects",
]

# PER-REPOSITORY PROTECTED LIST (engine 0.2.0).
#
# The list above is the website's. A repository that is not the website supplies its own in
# `.factory/protected.txt`: one fnmatch pattern per line, `#` comments, blank lines ignored,
# and a line starting `additive:` adds a pattern to ADDITIVE_ONLY instead. When that file
# exists the website-specific list above is NOT used: the protected set is UNIVERSAL below
# plus the file. The file protects itself, and it lives outside `factory/` on purpose so a
# repo can change its own list in a normal human PR without re-vendoring the engine.
UNIVERSAL = [
    "MISSION.md", "FACTORY_RULES.md", "CLAUDE.md", "AGENTS.md", "FACTORY.md",
    "factory/*", ".factory/locks/*", ".factory/holdout/*", ".factory/protected.txt", "standards/*",
    ".github/*", ".env", ".env.*", "*.pem", "*.p8", "*.jks",
]


def _load_repo_protected() -> None:
    global PROTECTED
    path = os.path.join(ROOT, ".factory", "protected.txt")
    if not os.path.isfile(path):
        return
    extra: list[str] = []
    additive: list[str] = []
    with open(path, encoding="utf-8") as fh:
        for raw in fh:
            line = raw.strip()
            if not line or line.startswith("#"):
                continue
            if line.startswith("additive:"):
                additive.append(line.split(":", 1)[1].strip())
            else:
                extra.append(line)
    ADDITIVE_ONLY[:] = additive
    PROTECTED = UNIVERSAL + extra + additive


# Optional: a whole file category banned by extension rather than by intent, for the
# case where a mission says "no imported assets" or "no vendored binaries". Checked by
# extension because "just one placeholder" is how the exception becomes the rule.
# Leave empty if this does not apply to your project.
BINARY_ASSETS: list[str] = [
    # "*.png", "*.jpg", "*.gif", "*.wav", "*.mp3", "*.ttf",
]

# Crude, and it works. Unsupervised agents ship 3,000-line PRs nobody can review, and
# "nobody can review it" is where a factory stops being auditable even in principle.
SIZE_CAP = int(os.environ.get("FACTORY_SIZE_CAP", "500"))
SIZE_EXEMPT = [".factory/runs/*", ".factory/locks/*"]

# THE SCOPE LEASH, and it is a file count rather than a line count on purpose.
#
# The failure it catches is specific and it is not size: a cleanup or refactor node with
# no scope will grow a six-file PR into eleven, and introduce a bug in one of the five it
# was never asked to touch. That PR can be well under the line cap the whole way - five
# one-line "while I was in here" edits cost nothing in lines and are exactly the diff no
# reviewer would have approved.
#
# A cap enforced in code beats the same instruction in a prompt, which is a suggestion
# with good manners. Raise it deliberately for a repo whose changes genuinely span more
# files; set it to 0 to disable and accept that the line cap is your only scope control.
FILE_CAP = int(os.environ.get("FACTORY_FILE_CAP", "12"))

_load_repo_protected()


def git(*args: str) -> tuple[int, str]:
    p = subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True)
    return p.returncode, p.stdout.strip()


def base_ref(explicit: str | None) -> str | None:
    if explicit:
        return explicit
    # `dev` FIRST, AND `main` IS NOT IN THE LIST AT ALL.
    #
    # `main` exists in this repository, is stale, and is not a deploy target. It is also
    # what `origin/HEAD` points at, so the template's order would have computed every
    # diff against a branch nothing has merged into for months: a three-dot diff against
    # a long-dead ref reports as "this branch changed it" everything that landed on dev
    # since main was abandoned, which is most of the repository, including factory/** and
    # harness/**. Every pull request would have been auto-rejected under 6.1 for
    # protected files it never touched.
    #
    # Read from the environment so `factory/config.sh` really is the one file you edit.
    configured = os.environ.get("FACTORY_BASE_BRANCH", "dev")
    for cand in (f"origin/{configured}", configured, "origin/dev", "dev"):
        rc, out = git("rev-parse", "--verify", "--quiet", cand)
        if rc == 0 and out:
            return cand
    return None


def matches(path: str, patterns: list[str]) -> bool:
    p = path.replace("\\", "/")
    return any(fnmatch.fnmatch(p, pat) or fnmatch.fnmatch(os.path.basename(p), pat)
               for pat in patterns)


def is_purely_additive(path: str, base: str, head: str | None) -> bool:
    """True only if every changed line in `path` is a new line -- nothing removed.

    Two-dot, not three-dot: this checks one file's actual content difference (base's
    version vs. the version under review), not "what did this branch do" in the
    three-dot sense the rest of the guard uses. `head=None` diffs against the working
    tree, so this also covers a hand-run on a dirty tree, same as the caller's own
    dirty-tree handling above.

    A diff this cannot read is NOT additive. Failing open here -- treating an unreadable
    diff as safe -- would turn "we could not check" into "we allowed it", which is the
    exact failure this guard's module docstring already refuses for the whole file.
    """
    args = ["diff", "--unified=0", base] + ([head] if head else []) + ["--", path]
    rc, out = git(*args)
    if rc != 0:
        return False
    for line in out.splitlines():
        if line.startswith("+++ ") or line.startswith("--- "):
            continue
        if line.startswith("-"):
            return False
    return True


def main() -> int:
    argv = sys.argv[1:]
    base = base_ref(argv[argv.index("--base") + 1] if "--base" in argv else None)
    head = argv[argv.index("--head") + 1] if "--head" in argv else None

    if base is None:
        print("GUARD_ERROR: no base branch found. The guard fails closed: a diff that "
              "cannot be computed is not a diff that was checked.")
        return 2

    # THREE dots, always. `git diff main` compares the two TIPS, so a branch cut before
    # main moved reports main's later commits as though this branch had made them -- and
    # main's later commits routinely touch factory/** and the locks. Every such branch was
    # auto-rejected under 6.1 for protected files it never went near: a false positive in
    # the most severe gate there is, firing more often the longer a branch lives.
    #
    # `main...HEAD` compares against the MERGE BASE: what this branch actually changed.
    rng = f"{base}...{head}" if head else f"{base}...HEAD"

    rc, out = git("diff", "--name-only", rng)
    if rc != 0:
        print(f"GUARD_ERROR: git diff {rng} failed. Failing closed.")
        return 2
    changed = [f for f in out.splitlines() if f.strip()]

    # A three-dot diff only sees COMMITTED work. In the workflow the guard runs after the
    # commit step so that is the whole story, but anything run by hand on a dirty tree
    # would otherwise be checked against nothing and print a confident PROTECTED_OK. The
    # union costs nothing and keeps the guard failing closed rather than blind.
    if not head:
        # `-uall`, and it is not optional. The default (`-unormal`) collapses an untracked
        # DIRECTORY into a single entry - `src/` rather than the forty files inside it. So
        # a node that creates a whole new directory reported one changed file, sailed past
        # any file-count scope cap, and had none of its contents checked against the
        # protected list or the banned categories individually. Found by pointing the new
        # scope leash at thirteen new files in a new folder and watching it report one.
        rc, dirty = git("status", "--porcelain", "--untracked-files=all")
        if rc != 0:
            print("GUARD_ERROR: git status failed. Failing closed.")
            return 2
        for row in dirty.splitlines():
            # porcelain is exactly two status columns, then the path. Slicing 3 eats the
            # first character of the filename when the second column is blank.
            path = row[2:].lstrip().strip('"')
            if " -> " in path:                      # a rename: check the destination
                path = path.split(" -> ", 1)[1]
            if path and path not in changed:
                changed.append(path)

    rc, stat = git("diff", "--numstat", rng)
    lines = 0
    if rc == 0:
        for row in stat.splitlines():
            parts = row.split("\t")
            if len(parts) == 3 and parts[0].isdigit() and parts[1].isdigit():
                if not matches(parts[2], SIZE_EXEMPT):
                    lines += int(parts[0]) + int(parts[1])

    print(f"GUARD_START range={rng} files={len(changed)} lines={lines}")

    violations: list[tuple[str, str]] = []
    for f in changed:
        if matches(f, ADDITIVE_ONLY):
            if not is_purely_additive(f, base, head):
                violations.append(
                    (f, "protected file, non-additive change (FACTORY_RULES.md 5)"))
        elif matches(f, PROTECTED):
            violations.append((f, "protected file (FACTORY_RULES.md 5)"))
        elif matches(f, BINARY_ASSETS):
            violations.append((f, "banned file category (see BINARY_ASSETS)"))

    for f in changed:
        if any(v[0] == f for v in violations):
            status = "BLOCK"
        elif matches(f, ADDITIVE_ONLY):
            status = "ADD  "   # allowed only because it was purely additive
        else:
            status = "ok   "
        print(f"  {status}  {f}")

    print(f"GUARD_FILES_CHECKED={len(changed)}")

    if violations:
        print(f"PROTECTED_VIOLATION={len(violations)}")
        for f, why in violations:
            print(f"  {f}: {why}")
        print("Auto-reject, no fix attempt (FACTORY_RULES.md 6). Needing one of these "
              "touched means the scope was misunderstood, which is a triage bug rather "
              "than a code bug -- escalate to needs-human.")
        return 1

    scoped = [f for f in changed if not matches(f, SIZE_EXEMPT)]
    if FILE_CAP and len(scoped) > FILE_CAP:
        print(f"SCOPE_VIOLATION: {len(scoped)} files changed, cap is {FILE_CAP}. "
              "A node that can edit outside its own scope will grow the PR and introduce "
              "a bug in a file nobody asked it to touch. Split the work into a sub-issue.")
        return 1

    if lines > SIZE_CAP:
        print(f"SIZE_VIOLATION: {lines} lines changed, cap is {SIZE_CAP} "
              "(FACTORY_RULES.md 8). Split the work into a sub-issue rather than "
              "shipping something nobody could review even in principle.")
        return 1

    print("PROTECTED_OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
