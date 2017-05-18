---
tags: git snow.leopard wiki
---

Notes made while updating from [Git 1.7.0.2](/wiki/Git_1.7.0.2) to [Git 1.7.0.3](/wiki/Git_1.7.0.3) from within a local clone of the official upstream [Git](/wiki/Git) repository on [Mac OS X](/wiki/Mac_OS_X) 10.6.2 [Snow Leopard](/wiki/Snow_Leopard):

```shell
$ git fetch
$ git tag -v v1.7.0.3
$ git co v1.7.0.3                                                     # "co" is an alias for "checkout"
$ make clean
$ make prefix=/usr/local test
$ sudo make prefix=/usr/local install quick-install-man
$ diff -u ~/.git-completion.sh contrib/completion/git-completion.bash # any changes to Bash completion?
$ cp contrib/completion/git-completion.bash ~/.git-completion.sh      # yep, better install it
```
