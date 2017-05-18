---
tags: libevent memcached wiki
cache_breaker: 1
---

# Installing [libevent](/wiki/libevent)

[libevent](/wiki/libevent) is a prerequisite for [memcached](/wiki/memcached):

```shell
$ curl -O http://www.monkey.org/~provos/libevent-1.4.12-stable.tar.gz
$ tar xzvf libevent-1.4.12-stable.tar.gz 
$ cd libevent-1.4.12-stable
$ ./configure
$ make
$ make verify
$ sudo make install
```

# Installing [memcached](/wiki/memcached)

```shell
$ curl -O http://memcached.googlecode.com/files/memcached-1.4.1.tar.gz
$ tar xzvf memcached-1.4.1.tar.gz 
$  cd memcached-1.4.1
$ ./configure
$ make
$ make test
$ sudo make install
```

# Testing

In my case I have a script in the `script` dir of a [Rails](/wiki/Rails) application that I call whenever I want to start or stop [memcached](/wiki/memcached), so I just used that:

```shell
$ script/memcached 
memcached not running: starting
$ script/memcached 
memcached running: stopping
```

(The script basically just does `memcached -d -P pidfile -l 127.0.0.1` to start [memcached](/wiki/memcached).)

# See also

-   [Updating to memcached 1.4.1 on Red Hat Enterprise Linux 5.3](/wiki/Updating_to_memcached_1.4.1_on_Red_Hat_Enterprise_Linux_5.3)
