---
tags: git centos
cache_breaker: 1
---

On CentOS I install into my home directory:

```shell
$ cd path/to/local/clone/of/git.git
$ git fetch
$ git tag -v v1.7.10
$ git checkout v1.7.10
$ NO_GETTEXT=1 NO_TCLTK=1 make prefix=$HOME install quick-install-man
```

**Note:** the `quick-install-man` target requires a copy of [the git-manpages repo](http://git.kernel.org/?p=git/git-manpages.git;a=summary) to be cloned, without an explicit `.git` extension, at the same level as the checkout of `git.git`. In order to get the latest man pages I had to manually fetch and checkout the latest `HEAD` of the git-manpages repo.

Also note that the default `MANPATH_MAP` settings in `/etc/man.config` won't work, because the `git` executable is at `~/bin/git`, but the man pages are at `~/share/man` instead of the expected `~/man`. The solution for this is to simply make a symlink at `~/man` which points at `~/share/man`.
