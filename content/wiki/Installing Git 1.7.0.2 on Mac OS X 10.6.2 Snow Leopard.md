---
tags: git snow.leopard wiki
---

**Note:** [GPG](/wiki/GPG) is not a standard part of [Mac OS X](/wiki/Mac_OS_X) so must be installed separately; see "[Installing GPG 1.4.10 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_GPG_1.4.10_on_Mac_OS_X_10.6.2_Snow_Leopard)" for more information.

```shell
$ curl -O http://kernel.org/pub/software/scm/git/git-1.7.0.2.tar.bz2
$ curl -O http://kernel.org/pub/software/scm/git/git-1.7.0.2.tar.bz2.sign
$ gpg --verify git-1.7.0.2.tar.bz2.sign git-1.7.0.2.tar.bz2
$ tar xjvf git-1.7.0.2.tar.bz2 
$ cd git-1.7.0.2
$ make prefix=/usr/local test
$ sudo make prefix=/usr/local install
$ curl -O http://www.kernel.org/pub/software/scm/git/git-manpages-1.7.0.2.tar.bz2
$ curl -O http://www.kernel.org/pub/software/scm/git/git-manpages-1.7.0.2.tar.bz2.sign
$ gpg --verify git-manpages-1.7.0.2.tar.bz2.sign git-manpages-1.7.0.2.tar.bz2
$ sudo mkdir /usr/local/man
$ sudo tar xjv -C /usr/local/man -f git-manpages-1.7.0.2.tar.bz2
```

Check to see if we need to update the completion script (no we don't):

```shell
$ diff -u ~/.git-completion.sh contrib/completion/git-completion.bash
```
