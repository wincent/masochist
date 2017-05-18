---
tags: gpg wiki
---

# Installation

```shell
$ curl -O ftp://ftp.gnupg.org/gcrypt/gnupg/gnupg-1.4.10.tar.bz2 
$ openssl sha1 gnupg-1.4.10.tar.bz2 
$ tar xjvf gnupg-1.4.10.tar.bz2 
$ cd gnupg-1.4.10
$ ./configure --disable-asm
$ make && make check
$ sudo make install
```

**Note:** As was the case for the previous release (see "[Installing GnuPG on Mac OS X 10.6 Snow Leopard](/wiki/Installing_GnuPG_on_Mac_OS_X_10.6_Snow_Leopard)") it seems that it is necessary to pass the `--disable-asm` switch only on newer machines which run in 64-bit mode.
