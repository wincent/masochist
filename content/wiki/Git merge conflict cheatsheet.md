---
tags: git wiki
cache_breaker: 1
title: Git merge conflict cheatsheet
---

`git status` shows files with conflicts under "Unmerged paths".

# Merge conflict markers

Summarizing "[Understanding Git conflict markers](/wiki/Understanding_Git_conflict_markers)", the "top" half of a conflict is the branch you're merging into, and the "bottom" half of a conflict is the branch you are trying to merge, so:

## Normal merges

-   Top shows local changes (AKA "ours")
-   Bottom shows upstream changes (AKA "theirs")

## Rebases

-   Top shows upstream changes (AKA "ours")
-   Bottom shows "local" (to topic branch) changes (AKA "theirs")

## Stashes

-   Top shows worktree state before running `git stash pop`
-   Bottom shows worktree state that you originally stashed with `git stash`

Conflict markers look like this:

    <<<<<<< Updated upstream
    foo
    =======
    bar
    >>>>>>> Stashed changes

# Index contents

-   stage 1: common ancestor; see with `git show :1:file`
-   stage 2: (local) HEAD; see with `git show :2:file`
-   stage 3: MERGE_HEAD; see with `git show :3:file`

`git ls-files -u` shows the index metadata (paths, blob IDs) for all stages of unmerged paths.

# Scenario: picking one side of the merge

This can be useful when dealing with conflicts due to things like formatting changes. Say you have a topic branch and run a source formatter on it. You rebase that topic branch onto `master` and get conflicts because somebody changed the code that you formatted. The easiest solution here is not to solve the merge conflict by hand, but rather take the `master` changes and then re-run the source formatting operation.

```bash
git checkout --ours -- path/to/conflicting-file
sh format-source.sh
```

Again, note that during rebasing the "ours"/"theirs" distinction is reversed:

-   During rebase: "ours" is the upstream branch, "theirs" is the topic branch.
-   During a normal merge: "ours" is the current branch, "theirs" is the other branch being merged in.

# Scenario: `git stash pop`

As with rebase conflicts, the yours-vs-theirs distinction can be a little confusing.

-   `HEAD` (stage 2 in the index) refers to the worktree state you had before running `git stash pop`
-   `MERGE_HEAD` (stage 3 in the index) refers to the worktree state you recorded with `git stash`

So, say you want to just keep things as they were for a particular file and ignore what's in the stash, you could do:

```shell
$ git show :2:filename > filename
$ git add filename
$ git stash drop
```

But note: in a merge conflict situation hunks that applied cleanly are added to the index, so once you've resolved a conflict like this you may have stuff staged that you aren't necessarily ready to commit. In that case, `git reset HEAD`.

# Scenario: ignoring whitespace changes

This can be helpful to avoid conflicts arising from indentation changes (say, the `main` branch has a change that ends up indenting a method body):

```shell
$ git cherry-pick -Xignore-all-space 15e087dfc205
```

# Aliases

```
[alias]
	# Mark merge conflicts as resolved.
	resolve = "!f() { \
		git add $(git diff --name-only --diff-filter=U -- \"${@:-.}\"); \
	}; f"
```

# `git continue` subcommand

Save under `$PATH` as `git-continue`:

```zsh
#!/usr/bin/env zsh

# Runs `git rebase --continue`, `git cherry-pick --continue` as appropriate,
# based on context.
#
# Based on: https://stackoverflow.com/a/53370600

GIT_DIR=$(git rev-parse --git-dir)
STATUS=$?

if [ $STATUS -ne 0 ]; then
    exit $STATUS
fi

if [ -d "${GIT_DIR}/rebase-merge" ]; then
    exec git rebase --continue
elif [ -d "${GIT_DIR}/rebase-apply" ]; then
    exec git rebase --continue
elif [ -f "${GIT_DIR}/MERGE_HEAD" ]; then
    exec git merge --continue
elif [ -f "${GIT_DIR}/CHERRY_PICK_HEAD" ]; then
    exec git cherry-pick --continue
elif [ -f "${GIT_DIR}/REVERT_HEAD" ]; then
    exec git revert --continue
else
    echo "error: No operation to --continue"
    exit 1
fi

# vim: set filetype=zsh
```
