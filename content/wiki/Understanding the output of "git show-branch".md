---
tags: git wiki
cache_breaker: 1
---

`git show-branch` is a tool that I use infrequently enough that every time I do so I end up having to look up the output format in the [man page](/wiki/man_page). This is a weakness I've developed while leaning on the crutch that is `gitk --all`.

But the output of `git show-branch` is really not *that* opaque and a simple-enough example should suffice:

```shell
$ git show-branch 
! [maint] Show tweet number in tweets#show HTML template
 * [master] Add Wincent Login Tool to products menu in navigation bar
--
 * [master] Add Wincent Login Tool to products menu in navigation bar
+* [maint] Show tweet number in tweets#show HTML template
```

# What do the lines *above* the `--` mean?

Think of these as "table headers".

-   ` * [master] msg`: is saying, the currently checked out `HEAD` (indicated by the `*`) corresponds to the `master` branch, and `msg` is the latest commit on the branch
-   `! [maint] msg`: is saying, a non-`HEAD` branch (indicated by the `!`) is the `maint` branch, and `msg`is the latest commit on that branch

## What do the lines *below* the `--` mean? =

-   all the lines labelled with a `*` are commits on the `HEAD` branch (in this case, `master`); in this case note how they all line up in column two, which was the column where the `*` appeared in the "table header" area
-   all of the lines labelled with `+` are commits on another branch (in this case, `maint`); note how they all line up in column one, which was the column where the `maint` branch's `!` appeared in the "table header" area
-   any lines labelled with `-` (none in the example diagram) are merge commits

So in the example we have one commit which is *only* on the `master` branch, and another which is in both `maint` and `master`.
