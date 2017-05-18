---
tags: git updates snow.leopard fedora wiki
cache_breaker: 1
---

# Local update ([Mac OS X](/wiki/Mac_OS_X) 10.6.6 [Snow Leopard](/wiki/Snow_Leopard))

Notes made while updating from [Git 1.7.3.5](/wiki/Git_1.7.3.5) to [Git 1.7.4](/wiki/Git_1.7.4) from within a local clone of the official upstream [Git](/wiki/Git) repository on [Mac OS X](/wiki/Mac_OS_X) 10.6.6 [Snow Leopard](/wiki/Snow_Leopard):

```shell
$ cd path/to/clone/of/git.git/repo
$ git fetch
$ git tag -v v1.7.4
$ git co v1.7.4                                                       # "co" is an alias for "checkout"
$ make clean
$ make prefix=/usr/local test
$ sudo make prefix=/usr/local install quick-install-man
$ diff -u ~/.git-completion.sh contrib/completion/git-completion.bash # any changes to Bash completion?
$ cp contrib/completion/git-completion.bash ~/.git-completion.sh      # yes
$ git co master                                                       # don't hang around on detached HEAD
```

# Remote update (Fedora Linux)

Notes made while updating from [Git 1.7.3](/wiki/Git_1.7.3) to [Git 1.7.4](/wiki/Git_1.7.4) on [Fedora](/wiki/Fedora) 8, again from within a local clone of the official upstream Git repository:

## Updating Git itself

I perform this on the two Amazon [EC2](/wiki/EC2) instances that I use to host Git repos; note that I use `nice` here to execute the build process at a lower priority (otherwise the build process is capable of raising the system load to the point where [Monit](/wiki/Monit) starts firing off unnecessary email alerts):

```shell
$ su -l unprivileged_build_user                      # the -l matters: https://bugzilla.redhat.com/show_bug.cgi?id=622811
$ cd path/to/clone/of/git.git/repo
$ git status                                         # make sure we're not about to clobber anything important
$ git fetch
$ git tag -v v1.7.4
$ git checkout v1.7.4
$ NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 \
  nice make prefix=/usr test                         # as normal user
# exit                                               # back to root
# NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 \
  nice make prefix=/usr install quick-install-man    # as root
$ su -l unprivileged_build_user                      # drop privs
$ git checkout master                                # don't hang around on detached HEAD
```

See "[Updating to Git 1.7.2](/wiki/Updating_to_Git_1.7.2)" for the update notes made during the initial cloning, including retrieving the public key necessary for tag verification.

## Updating [GitWeb](/wiki/GitWeb)

As I am have now rolled out a built-in repo browser and will retire [GitWeb](/wiki/GitWeb) eventually I opted not to update it for this release. There *were* changes in GitWeb between 1.7.3 and 1.7.4 (which can be reviewed with `git diff v1.7.3..v1.7.4 -- gitweb`) but no "show-stoppers", so the update can be safely skipped.
