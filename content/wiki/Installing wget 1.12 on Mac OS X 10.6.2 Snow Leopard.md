---
tags: snow.leopard wget wiki
---

**Note:** [GPG](/wiki/GPG) is not a standard part of [Mac OS X](/wiki/Mac_OS_X) so must be installed separately; see "[Installing GPG 1.4.10 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_GPG_1.4.10_on_Mac_OS_X_10.6.2_Snow_Leopard)" for more information.

```shell
$ curl -O http://ftp.gnu.org/gnu/wget/wget-1.12.tar.bz2
$ curl -O http://ftp.gnu.org/gnu/wget/wget-1.12.tar.bz2.sig
$ gpg --recv-keys --keyserver keys.gnupg.net 4A1B4EB1 # first time only
$ gpg --verify wget-1.12.tar.bz2.sig wget-1.12.tar.bz2
$ tar xjvf wget-1.12.tar.bz2
$ cd wget-1.12
$ ./configure
$ make
$ make check
$ sudo make install
```
