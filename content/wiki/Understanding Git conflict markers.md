---
tags: git wiki
title: Understanding Git conflict markers
---

When looking at [Git](/wiki/Git) conflict markers it can sometimes be confusing which half of the conflicting section belongs to which branch:

    <<<<<<< HEAD
    foo
    =======
    bar
    >>>>>>> cb1abc6bd98cfc84317f8aa95a7662815417802d

-   the top half is the branch you are merging _into_ (ie. the "ours" changes)
-   the bottom half is from the commit that you are trying to merge in (ie. the "theirs" changes)

What this means in practice if you are doing something like `git pull` (which is equivalent to a `git fetch` followed by a `git merge`) is:

-   the top half shows your local changes (again, "ours")
-   the bottom half shows the remote changes, which you are trying to merge in (again, "theirs)

On the other hand, if you are doing something like `git rebase origin/master`, you are effectively trying to merge your local changes "into" the upstream changes (by replaying them on top); that means:

-   the top half shows the upstream changes (somewhat confusingly, still called "ours")
-   the bottom half shows your local changes, which you are trying to merge in (again, somewhat confusingly, still called "theirs").

Note the "ours"/"theirs" terminology is useful to know because if you ever what to just resolve a conflict in favor of one side or the other, you can run these commands:

```bash
# During a merge into a topic branch:
git checkout --ours some/file       # file from the topic branch wins
git checkout --theirs some/file     # file from the upstream branch wins

# During a rebase of a topic branch:
git checkout --ours some/file       # file from the upstream branch wins
git checkout --theirs some/file     # file from the topic branch wins
```

# See also

-   [Git merge conflict cheatsheet](/wiki/Git_merge_conflict_cheatsheet)
-   [Understanding Mercurial conflict markers](/wiki/Understanding_Mercurial_conflict_markers)
