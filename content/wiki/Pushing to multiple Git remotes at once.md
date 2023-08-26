---
tags: wiki git
title: Pushing to multiple Git remotes at once
---

For example, consider a clone of my dotfiles repo that has these two remotes, `origin` and `github`:

```shell
$ git remote -v
github  git@github.com:wincent/wincent.git (fetch)
github  git@github.com:wincent/wincent.git (push)
origin  git@git.wincent.com:public/wincent.git (fetch)
origin  git@git.wincent.com:public/wincent.git (push)
```

We can add a new `all` remote:

```shell
$ git remote add all git@git.wincent.com:public/wincent.git
```

And then set two `pushurl` URLs for it:

```shell
$ git remote set-url --add --push all git@git.wincent.com:public/wincent.git
$ git remote set-url --add --push all git@github.com:wincent/wincent.git
```

Yielding the following:

```shell
$ git remote -v
all     git@git.wincent.com:public/wincent.git (fetch)
all     git@git.wincent.com:public/wincent.git (push)
all     git@github.com:wincent/wincent.git (push)
github  git@github.com:wincent/wincent.git (fetch)
github  git@github.com:wincent/wincent.git (push)
origin  git@git.wincent.com:public/wincent.git (fetch)
origin  git@git.wincent.com:public/wincent.git (push)
```

This is the full config for the `all` remote as seen in the clone's `.git/config`:

```
[remote "all"]
	url = git@git.wincent.com:public/wincent.git
	fetch = +refs/heads/*:refs/remotes/all/*
	pushurl = git@git.wincent.com:public/wincent.git
	pushurl = git@github.com:wincent/wincent.git
```

When we push, we see (something like) the following, which shows the two remotes being processed in sequence:

```shell
$ git push all --dry-run
Everything up-to-date
Everything up-to-date
```

Via:

-   https://stackoverflow.com/questions/14290113/git-pushing-code-to-two-remotes
