---
tags: git
---

`git status` shows files with conflicts under "Unmerged paths".

# Merge conflict markers

Summarizing "[Understanding Git conflict markers](/wiki/Understanding_Git_conflict_markers)", the "top" half of a conflict is the branch you're merging into, and the "bottom" half of a conflict is the branch you are trying to merge, so:

## Normal merges

-   Top shows local changes
-   Bottom shows upstream changes

## Rebases

-   Top shows upstream changes
-   Bottom shows "local" (to topic branch) changes

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
-   stage 3: MERGE\_HEAD; see with `git show :3:file`

`git ls-files -u` shows the index metadata (paths, blob IDs) for all stages of unmerged paths.

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
