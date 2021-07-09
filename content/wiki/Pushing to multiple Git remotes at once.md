---
tags: wiki git
title: Pushing to multiple Git remotes at once
---

For example, consider a clone of my dotfiles repo that has these two remotes, `origin` and `github`:

```sh
$ git remote -v
github  git@github.com:wincent/wincent.git (fetch)
github  git@github.com:wincent/wincent.git (push)
origin  git@git.wincent.com:public/wincent.git (fetch)
origin  git@git.wincent.com:public/wincent.git (push)
```

We can add a new `all` remote:

```sh
$ git remote add all git@git.wincent.com:public/wincent.git
```

And then set two `pushurls` for it:

```sh
$ git remote set-url --add --push all git@git.wincent.com:public/wincent.git
$ git remote set-url --add --push all git@github.com:wincent/wincent.git
```

Yielding the following:

```sh
$ git remote -v
all     git@git.wincent.com:public/wincent.git (fetch)
all     git@git.wincent.com:public/wincent.git (push)
all     git@github.com:wincent/wincent.git (push)
github  git@github.com:wincent/wincent.git (fetch)
github  git@github.com:wincent/wincent.git (push)
origin  git@git.wincent.com:public/wincent.git (fetch)
origin  git@git.wincent.com:public/wincent.git (push)
```

When we push, we see (something like) the following, which shows the two remotes being processed in sequence:

```sh
$ git push all --dry-run
Everything up-to-date
Everything up-to-date
```

Via:

- https://stackoverflow.com/questions/14290113/git-pushing-code-to-two-remotes
