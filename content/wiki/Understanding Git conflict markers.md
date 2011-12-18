---
tags: git
---

When looking at [Git](/wiki/Git) conflict markers it can sometimes be confusing which half of the conflicting section belongs to which branch:

    <<<<<<< HEAD
    foo
    =======
    bar
    >>>>>>> cb1abc6bd98cfc84317f8aa95a7662815417802d

-   the top half is the branch you a merging *into*
-   the bottom half is from the commit that you are trying to merge in

What this means in practice if you are doing something like `git pull` (which is equivalent to a `git fetch` followed by a `git merge`) is:

-   the top half shows your local changes
-   the bottom half shows the remote changes, which you are trying to merge in

On the other hand, if you are doing something like `git rebase origin/master`, you are effectively trying to merge your local changes "into" the upstream changes (by replaying them on top); that means:

-   the top half shows the upstream changes
-   the bottom half shows your local changes, which you are trying to merge in

# See also

-   [Git merge conflict cheatsheet](/wiki/Git_merge_conflict_cheatsheet)

