---
tags: libevent memcached snow.leopard wiki
cache_breaker: 1
---

# [libevent](/wiki/libevent)

[Libevent](/wiki/Libevent) is a prerequisite of [memcached](/wiki/memcached) so we install it first:

```shell
$ curl -O http://monkey.org/~provos/libevent-2.0.10-stable.tar.gz
$ curl -O http://monkey.org/~provos/libevent-2.0.10-stable.tar.gz.asc
$ gpg --recv-keys 8D29319A # first time only
$ gpg --verify libevent-2.0.10-stable.tar.gz.asc 
$ tar xzvf libevent-2.0.10-stable.tar.gz 
$ cd libevent-2.0.10-stable
$ ./configure
$ make
$ make verify
$ sudo make install
```

# [memcached](/wiki/memcached)

```shell
$ curl -O http://memcached.googlecode.com/files/memcached-1.4.5.tar.gz
$ tar xzvf memcached-1.4.5.tar.gz 
$ cd memcached-1.4.5/
$ ./configure
$ make
$ make test
$ sudo make install
```
