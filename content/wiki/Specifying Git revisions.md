---
tags: git wiki
cache_breaker: 1
---

There are many, many ways of specifying revisions in [Git](/wiki/Git) which are described in detail in the `git-rev-parse` [man page](http://www.kernel.org/pub/software/scm/git/docs/git-rev-parse.html). This article summarizes some of the more useful ones:

# Accessing parents of a commit

Given a commit, `rev`:

-   `rev^` is the *first* parent (remember that a commit can have multiple parents)
-   `rev^1` is the more explicit form of referring to the first parent
-   `rev^2` would refer to the second parent (*not* the grand-parent, but the second parent, such as in cases where you have two parents that are merged to produce a new commit).
-   `rev^0` is the commit itself
-   `rev^^` is the first *grandparent* (first parent of first parent)
-   `rev^1^1` is equivalent
-   `rev^^2` is a different grandparent (second parent of first parent)
-   `rev^1^2` alternative form of the same
-   `rev^2^2` second parent of second parent
-   `rev^2^1` first parent of second parent
-   `rev^2^` alternative form of the same
-   `rev~1` is another way of referring to the *first* parent
-   `rev~2` is another way of referring to the *first* grandparent (first parent of first parent)
-   `rev~3` is another way of referring to the *first* great-grandparent (first parent of first parent of first parent)

Putting all this together means that you can make some downright hideous references; for example:

-   `maint~52^2^2~5`: refers to a distant ancestor of the `HEAD` of the `maint` branch; specifically, the 52nd generation grandparent's second parent's second parent's 5th generation grandparent.

# Accessing prior values of a ref

-   `ref@{1}` is the immediate prior value of a ref (for example, `master@{1}`)
-   `ref@{2}` is the second prior value, and so on
-   `@{2}` would refer to the same thing if you were already on branch `ref`
