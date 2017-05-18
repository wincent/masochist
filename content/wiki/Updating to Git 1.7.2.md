---
tags: git updates snow.leopard fedora wiki
cache_breaker: 1
---

# Local update ([Mac OS X](/wiki/Mac_OS_X) 10.6.4 [Snow Leopard](/wiki/Snow_Leopard))

Notes made while updating from [Git 1.7.1.1](/wiki/Git_1.7.1.1) to [Git 1.7.2](/wiki/Git_1.7.2) from within a local clone of the official upstream [Git](/wiki/Git) repository on [Mac OS X](/wiki/Mac_OS_X) 10.6.4 [Snow Leopard](/wiki/Snow_Leopard):

```shell
$ git fetch
$ git tag -v v1.7.2
$ git co v1.7.2                                                       # "co" is an alias for "checkout"
$ make clean
$ make prefix=/usr/local test
$ sudo make prefix=/usr/local install quick-install-man
$ diff -u ~/.git-completion.sh contrib/completion/git-completion.bash # any changes to Bash completion?
$ cp contrib/completion/git-completion.bash ~/.git-completion.sh      # yes, install it
```

# Remote update (Fedora Linux)

Notes made while updating from [Git 1.7.0](/wiki/Git_1.7.0) to [Git 1.7.2](/wiki/Git_1.7.2) on [Fedora](/wiki/Fedora) 8, again from within a local clone of the official upstream Git repository:

## Updating Git itself

```shell
$ git clone git://git.kernel.org/pub/scm/git/git.git git.git
$ cd git.git
$ git cat-file blob junio-gpg-pub | gpg --import # one-time only set-up for tag verification
$ git tag -v v1.7.2
$ git checkout v1.7.2
$ NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make prefix=/usr test                      # as normal user
# NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make prefix=/usr install quick-install-man # as root
```

## Updating [GitWeb](/wiki/GitWeb)

```shell
$ make clean
$ cd gitweb
$ NO_CURL=1 make GITWEB_PROJECTROOT=/pub/git/public \
                 GITWEB_LIST=/pub/git/conf/gitweb-projects \
                 GITWEB_STRICT_EXPORT=1 \
                 GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
                 prefix=/usr \
                 gitwebdir=/pub/git/public_html \
                 gitweb.cgi
# NO_CURL=1 make GITWEB_PROJECTROOT=/pub/git/public \
                 GITWEB_LIST=/pub/git/conf/gitweb-projects \
                 GITWEB_STRICT_EXPORT=1 \
                 GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
                 prefix=/usr \
                 gitwebdir=/pub/git/public_html \
                 install
# chown -R git:git /pub/git/public_html/* # keep suexec happy
```

To take advantage of the new syntax highlighting support:

```shell
# yum install highlight
# echo "\$feature{'highlight'}{'default'} = [1];" >> /pub/git/conf/gitweb.conf
```
