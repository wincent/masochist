---
tags: libevent memcached snow.leopard wiki
---

**Note:** these notes show the use of [wget](/wiki/wget) and [gpg](/wiki/gpg) which are not standard parts of [Mac OS X](/wiki/Mac_OS_X). See "[Installing wget 1.12 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_wget_1.12_on_Mac_OS_X_10.6.2_Snow_Leopard)" and "[Installing GPG 1.4.10 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_GPG_1.4.10_on_Mac_OS_X_10.6.2_Snow_Leopard)" for details.

# [libevent](/wiki/libevent)

[Libevent](/wiki/Libevent) is a prerequisite of [memcached](/wiki/memcached) so we install it first:

```shell
$ wget http://www.monkey.org/~provos/libevent-1.4.13-stable.tar.gz \
       http://www.monkey.org/~provos/libevent-1.4.13-stable.tar.gz.sig
$ gpg --recv-keys --keyserver keys.gnupg.net 0A2F87E5
$ gpg --verify libevent-1.4.13-stable.tar.gz.sig libevent-1.4.13-stable.tar.gz
$ tar xzvf libevent-1.4.13-stable.tar.gz
$ cd libevent-1.4.13-stable
$ ./configure
$ make
$ make verify
$ sudo make install
```

# [memcached](/wiki/memcached)

```shell
$ wget http://memcached.googlecode.com/files/memcached-1.4.4.tar.gz
$ tar xzvf memcached-1.4.4.tar.gz
$ cd memcached-1.4.4
$ ./configure
$ make
$ make test
$ sudo make install
```
