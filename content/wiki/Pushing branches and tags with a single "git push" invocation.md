---
tags: git wiki
cache_breaker: 1
---

With recent versions of [Git](/wiki/Git) you can do this with `git push --follow-tags`.

# See also

-   <http://stackoverflow.com/questions/3745135/push-git-commits-tags-simultaneously>

# Older notes

Normally pushing branches and tags is a two step process:

```shell
$ git push
$ git push --tags
```

A handy tip was just posted to the [Git mailing list](/wiki/Git_mailing_list) by Zoltán Füzesi:

> I use `.git/config` to solve this:
>
>     [remote "origin"]
>     	url = ...
>     	fetch = +refs/heads/*:refs/remotes/origin/*
>     	push = +refs/heads/*
>     	push = +refs/tags/*
>
> With these lines added `git push origin` will upload all your branches and tags. If you want to upload only some of them, you can enumerate them.

Haven't tried it myself yet, but it looks like it might be useful until some other way of pushing branches and tags at the same time is added to `git push`. On the other hand, I don't mind typing:

```shell
$ git push && git push --tags
```
