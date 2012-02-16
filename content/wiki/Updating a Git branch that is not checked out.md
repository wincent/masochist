---
tags: git
---

If you're on branch `foo` and want to make branch `bar` point at the HEAD of `foo` without having to first checkout `bar`, you can use:

```shell
$ git branch -f bar HEAD
```

Note that HEAD is actually the default, so the above can be simplified to:

```shell
$ git branch -f bar
```

# Source

-   <http://stackoverflow.com/questions/5471174/git-move-branch-pointer-to-different-commit>

