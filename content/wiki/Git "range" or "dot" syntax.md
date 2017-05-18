---
tags: git wiki
---

# `git log A..B` (two dots)

While this syntax looks like a "range" of commits from `A` to `B`, it is actually a short hand for `git log ^A B`; ie:

-   show all commits reachable from `B`; `B` itself is *included*
-   excluding those reachable from `A`; `A` itself is *excluded*

So given the following history (with the oldest commits on the left, the newest on the right):

    *--*--*--A--*--*--*--B

`git log A..B` will show all the commits to the right of A.

Note that `git log A..` is equivalent to `git log A..HEAD`.

# `git log A...B` (three dots)

The `git-rev-list` man page describes this as a special notation for "symmetric difference". It is equivalent to `git log A B --not $(git merge-base --all A B)`.

In plain English, this means "all commits that are reachable from either `A` or `B` but not from both.

## Comparison with `git cherry`

I am not sure if this is a very useful thing to see. Slightly more interesting is seeing what commits are in the topic branch `B` but which haven't yet been merged or cherry-picked into master (whose HEAD is at `A`):

```shell
$ git cherry -v master topic
```

This prints a list of commits from the topic branch that aren't yet in the master branch, with a couple of possible prefixes:

-   `-` indicates that the equivalent change for this commit is already in the master branch (for example, via cherry-picking)
-   `+` indicates that the commit is only in the topic branch

Note that all params to `git-cherry` are optional. The first param, the "upstream", defaults to the first tracked remote, and the second param, the "head", defaults to the current branch head. This means that if you are on the topic branch already, then simply running `git cherry -v` will often do the right thing.

## Alternatives to `git cherry`

Yet another alternative is:

```shell
$ git log --cherry-pick A...B # three dots
```

This again performs our symmetric difference, but the `--cherry-pick` switch will suppress changes which appear in both branches or have been cherry-picked over.

# `git diff A..B` (two dots)

Equivalent to `git diff A B` (ie. it just shows a diff of `A` against `B`).

# `git diff A...B` (three dots)

Equivalent to `git diff $(git merge-base A B) B` (ie. shows changes in branch `B` since it was branched from branch `A`).

A common usage scenario is to run something like `git diff master...topic`, to see what changes have been made in a topic branch since it was branched from the master branch, even when the master branch has moved on in the meantime:

            X
            |
            | T
            | |
            | |
            | |
            |/
            B
            |
            |
            S

So, if we start development at `S` on the master branch, branch a topic off at `B` and develop it to `T`, and meanwhile development on master continues to its current HEAD at `X`, then:

-   `git diff master..topic` will show us the difference between `X` and `T`
-   `git diff master...topic` will show us the difference between `B` and `T`

# See also

-   <http://stackoverflow.com/questions/462974/whats-the-difference-between-and-in-git-commit-ranges>
