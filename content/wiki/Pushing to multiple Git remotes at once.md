---
tags: wiki git
title: Pushing to multiple Git remotes at once
---

# Example: pushing to canonical repo + GitHub mirror

For example, consider a clone of my dotfiles repo that has these two remotes, `origin` and `github`:

```shell
$ git remote -v
github  git@github.com:wincent/wincent.git (fetch)
github  git@github.com:wincent/wincent.git (push)
origin  git@git.wincent.dev:public/wincent.git (fetch)
origin  git@git.wincent.dev:public/wincent.git (push)
```

We can add a new `all` remote:

```shell
$ git remote add all git@git.wincent.dev:public/wincent.git
```

And then set two `pushurl` URLs for it:

```shell
$ git remote set-url --add --push all git@git.wincent.dev:public/wincent.git
$ git remote set-url --add --push all git@github.com:wincent/wincent.git
```

Yielding the following:

```shell
$ git remote -v
all     git@git.wincent.dev:public/wincent.git (fetch)
all     git@git.wincent.dev:public/wincent.git (push)
all     git@github.com:wincent/wincent.git (push)
github  git@github.com:wincent/wincent.git (fetch)
github  git@github.com:wincent/wincent.git (push)
origin  git@git.wincent.dev:public/wincent.git (fetch)
origin  git@git.wincent.dev:public/wincent.git (push)
```

This is the full config for the `all` remote as seen in the clone's `.git/config`:

```
[remote "all"]
	url = git@git.wincent.dev:public/wincent.git
	fetch = +refs/heads/*:refs/remotes/all/*
	pushurl = git@git.wincent.dev:public/wincent.git
	pushurl = git@github.com:wincent/wincent.git
```

When we push, we see (something like) the following, which shows the two remotes being processed in sequence:

```shell
$ git push all --dry-run
Everything up-to-date
Everything up-to-date
```

# Example: publishing to this wiki

This is like the example above, but we now have three remotes:

1. The canonical repo (at git.wincent.dev).
2. The GitHub mirror.
3. The website itself, running on EC2.

I want to be able to run `git publish` and have it push to those, in that order.

## Initial set-up

```
git remote add publish git@git.wincent.dev:public/content-repo.git
git remote set-url publish --add --push git@git.wincent.dev:public/content-repo.git
git remote set-url publish --add --push git@github.com:wincent/content-repo.git
git remote set-url publish --add --push content-user@content-host.example.net:/srv/content-repo/content
```

## Verify it works

```
git push publish --dry-run
```

## Use it

```
git push publish
```

# See also

-   https://stackoverflow.com/questions/14290113/git-pushing-code-to-two-remotes
