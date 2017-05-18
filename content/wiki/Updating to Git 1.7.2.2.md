---
tags: git updates snow.leopard wiki
---

# Local update ([Mac OS X](/wiki/Mac_OS_X) 10.6.4 [Snow Leopard](/wiki/Snow_Leopard))

Notes made while updating from [Git 1.7.2.1](/wiki/Git_1.7.2.1) to [Git 1.7.2.2](/wiki/Git_1.7.2.2) from within a local clone of the official upstream [Git](/wiki/Git) repository on [Mac OS X](/wiki/Mac_OS_X) 10.6.4 [Snow Leopard](/wiki/Snow_Leopard):

```shell
$ cd path/to/clone/of/git.git/repo
$ git fetch
$ git tag -v v1.7.2.2
$ git co v1.7.2.2                                                     # "co" is an alias for "checkout"
$ make clean
$ make prefix=/usr/local test
$ sudo make prefix=/usr/local install quick-install-man
$ diff -u ~/.git-completion.sh contrib/completion/git-completion.bash # any changes to Bash completion?
$ cp contrib/completion/git-completion.bash ~/.git-completion.sh      # nope, but this is how we would install it
$ git co master                                                       # don't hang around on detached HEAD
```

# Remote update (Fedora Linux)

I didn't perform the remote update for this release of Git. See "[Updating to Git 1.7.2.1](/wiki/Updating_to_Git_1.7.2.1)" for an example of notes made during a remote update.
