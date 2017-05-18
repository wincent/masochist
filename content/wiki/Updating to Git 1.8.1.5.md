---
tags: git centos mountain.lion os.x wiki
---

# Updating on [OS X](/wiki/OS_X) 10.8.2 [Mountain Lion](/wiki/Mountain_Lion)

```shell
$ cd git.git # or wherever your local checkout happens to live
$ git fetch
$ git tag -v v1.8.1.5 # confirm tag is correctly signed
$ git checkout v1.8.1.5
$ NO_GETTEXT=1 make prefix=/usr/local test
$ sudo env NO_GETTEXT=1 make prefix=/usr/local install
$ cd ..
$ curl -O http://git-core.googlecode.com/files/git-manpages-1.8.1.5.tar.gz
$ openssl sha1 git-manpages-1.8.1.5.tar.gz # compare SHA-1 against release announcement
$ sudo tar -C /usr/local/share/man -xzvf git-manpages-1.8.1.5.tar.gz
```

# Updating on [CentOS](/wiki/CentOS) 5.8

On CentOS I install into my home directory:

```shell
$ cd git.git
$ git fetch
$ git tag -v v1.8.1.5
$ git checkout v1.8.1.5
$ NO_GETTEXT=1 NO_TCLTK=1 make prefix=$HOME test install
$ cd ..
$ curl -O http://git-core.googlecode.com/files/git-manpages-1.8.1.5.tar.gz
$ openssl sha1 git-manpages-1.8.1.5.tar.gz
$ tar -C $HOME/man -xzvf git-manpages-1.8.1.5.tar.gz
```
