---
tags: gpg wiki
cache_breaker: 1
---

Notes made while installing [GnuPG](/wiki/GnuPG) on a very old PowerBook. For comparison with the process on a newer, 64-bit machine, see "[Installing GnuPG 1.4.10 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_GnuPG_1.4.10_on_Mac_OS_X_10.6.2_Snow_Leopard)".

```shell
$ curl -O ftp://ftp.gnupg.org/gcrypt/gnupg/gnupg-1.4.11.tar.bz2
$ openssl sha1 gnupg-1.4.11.tar.bz2 # for now just verify the SHA-1 hash
$ tar xjvf gnupg-1.4.11.tar.bz2 
$ cd gnupg-1.4.11
$ ./configure
$ make && make check
$ sudo make install
$ cd .. # now we can verify the signature
$ curl -O ftp://ftp.gnupg.org/gcrypt/gnupg/gnupg-1.4.11.tar.bz2.sig
$ gpg --recv-keys 1CE0C630 # first time only
$ gpg --verify gnupg-1.4.11.tar.bz2.sig
```
