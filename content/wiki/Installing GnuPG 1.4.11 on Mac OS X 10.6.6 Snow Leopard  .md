---
tags: gpg wiki
---

Another day, another [GPG](/wiki/GPG) install. Different machine, and slightly different versions of [Mac OS X](/wiki/Mac_OS_X) and [GPG](/wiki/GPG).

Unlike other times, I found I didn't need to pass the `--disable-asm` flag to `./configure` (see "[Installing GnuPG on Mac OS X 10.6 Snow Leopard](/wiki/Installing_GnuPG_on_Mac_OS_X_10.6_Snow_Leopard)" for a counter-example).

```shell
$ curl -O ftp://ftp.gnupg.org/gcrypt/gnupg/gnupg-1.4.11.tar.bz2 \
      -O ftp://ftp.gnupg.org/gcrypt/gnupg/gnupg-1.4.11.tar.bz2.sig
$ openssl sha1 gnupg-1.4.11.tar.bz2 # 78e22f5cca88514ee71034aafff539c33f3c6676
$ tar xjvf gnupg-1.4.11.tar.bz2 
$ cd gnupg-1.4.11
$ ./configure 
$ make && make check
$ sudo make install
$ cd ..
$ gpg --verify gnupg-1.4.11.tar.bz2.sig 
$ gpg --recv-keys 1CE0C630 # only needed the first time
$ gpg --verify gnupg-1.4.11.tar.bz2.sig
```
