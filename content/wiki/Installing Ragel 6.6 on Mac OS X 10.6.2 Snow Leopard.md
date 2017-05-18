---
tags: ragel snow.leopard wiki
cache_breaker: 1
---

**Note:** [GPG](/wiki/GPG) is not a standard part of [Mac OS X](/wiki/Mac_OS_X) so must be installed separately; see "[Installing GPG 1.4.10 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_GPG_1.4.10_on_Mac_OS_X_10.6.2_Snow_Leopard)" for more information.

```shell
$ wget http://www.complang.org/ragel/ragel-6.6.tar.gz \
       http://www.complang.org/ragel/ragel-6.6.tar.gz.asc
$ gpg --verify ragel-6.6.tar.gz.asc ragel-6.6.tar.gz
$ tar xzvf ragel-6.6.tar.gz
$ cd ragel-6.6
$ ./configure
$ make
$ cd test
$ ./runtests
$ cd ..
$ sudo make install
```

Nice to see that `runtests` works now out of the box without requiring any tweaks to the include paths.
