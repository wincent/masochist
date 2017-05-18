---
tags: ragel snow.leopard wiki
---

Notes made while installing [Ragel](/wiki/Ragel) on [Mac OS X](/wiki/Mac_OS_X) 10.6.1 [Snow Leopard](/wiki/Snow_Leopard).

# Download and verify

```shell
$ curl -O http://www.complang.org/ragel/ragel-6.5.tar.gz
$ curl -O http://www.complang.org/ragel/ragel-6.5.tar.gz.asc
$ curl -O http://www.complang.org/thurston/thurston.asc
$ gpg --import thurston.asc
$ gpg --verify ragel-6.5.tar.gz.asc ragel-6.5.tar.gz
```

# Build

```shell
$ tar xzvf ragel-6.5.tar.gz 
$ cd ragel-6.5
$ ./configure
$ make
```

# Test

As before, I had to make a tweak to a test header file in order to get the suite to pass (see "[Upgrading from Ragel 5.24 to 6.0 on Mac OS X 10.5.1 Leopard](/wiki/Upgrading_from_Ragel_5.24_to_6.0_on_Mac_OS_X_10.5.1_Leopard)" for full details).

```shell
$ cd test
$ ./runtests
$ vi cppscan1.h 
$ ./runtests
```

# Install

```shell
$ cd ..
$ sudo make install
```
