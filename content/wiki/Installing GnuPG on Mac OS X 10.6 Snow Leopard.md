---
tags: snow.leopard gpg wiki
cache_breaker: 1
---

# Installation

```shell
$ curl -O ftp://ftp.gnupg.org/gcrypt/gnupg/gnupg-1.4.9.tar.bz2
$ openssl sha1 gnupg-1.4.9.tar.bz2 
SHA1(gnupg-1.4.9.tar.bz2)= 826f4bef1effce61c3799c8f7d3cc8313b340b55
$ tar xjvf gnupg-1.4.9.tar.bz2 
$ cd gnupg-1.4.9
$ ./configure 
$ make
$ make check
$ sudo make install
```

**Note:** The above for me worked on a relatively old iMac (first of the Intel-powered ones) which runs in 32-bit mode. Comments indicate that newer machines which run in 64-bit mode may require `./configure --disable-asm` instead of just plain `./configure`.

# Configuration

Seeing as I had a working [GnuPG](/wiki/GnuPG) install on my old [Leopard](/wiki/Leopard) volume, I just copied over my `~/.gnupg` folder to the new [Snow Leopard](/wiki/Snow_Leopard) install:

```shell
$ cp -R /Volumes/Clon/Users/wincent/.gnupg ~
```
