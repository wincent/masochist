---
tags: git centos mountain.lion os.x
---

# Updating on [OS X](/wiki/OS_X) 10.8 [Mountain Lion](/wiki/Mountain_Lion)

```shell
$ cd path/to/local/clone/of/git-manpages # see note below
$ git pull
$ cd ../git.git
$ git fetch
$ git tag -v v1.7.12
$ git checkout v1.7.12
$ NO_GETTEXT=1 make prefix=/usr/local
$ sudo env NO_GETTEXT=1 make prefix=/usr/local install quick-install-man
```

**Note:** the `quick-install-man` target requires a copy of [the git-manpages repo](http://git.kernel.org/?p=git/git-manpages.git;a=summary) to be cloned, *without an explicit `.git` extension*, at the same level as the checkout of `git.git`. In order to get the latest man pages I had to manually fetch and checkout the latest `HEAD` of the git-manpages repo.

# Updating on [CentOS](/wiki/CentOS) 5.8

On CentOS I install into my home directory:

```shell
$ cd path/to/local/clone/of/git-manpages # see below
$ git pull
$ cd ../git.git
$ git fetch
$ git tag -v v1.7.12
$ git checkout v1.7.12
$ NO_GETTEXT=1 NO_TCLTK=1 make prefix=$HOME install quick-install-man
```

**Note:** as on [OS X](/wiki/OS_X) (above), we need a git-manpages checkout available. But note that the default `MANPATH_MAP` settings in `/etc/man.config` won't work, because the `git` executable is at `~/bin/git`, but the man pages are at `~/share/man` instead of the expected `~/man`. The solution for this is to simply make a symlink at `~/man` which points at `~/share/man`.
