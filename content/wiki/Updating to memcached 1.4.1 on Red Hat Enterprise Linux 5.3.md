---
tags: libevent memcached wiki
cache_breaker: 1
---

# Updating [libevent](/wiki/libevent)

Will take the opportunity to update [libevent](/wiki/libevent) as well, from the currently installed 1.4.9 to the latest 1.4.12.

```shell
$ wget http://www.monkey.org/~provos/libevent-1.4.12-stable.tar.gz
$ tar xzvf libevent-1.4.12-stable.tar.gz 
$ cd libevent-1.4.12-stable
$ ./configure --libdir=/usr/lib
$ make
$ make verify
$ sudo make install
```

For reasoning on why we install into `/usr/lib/` see the notes on my initial installation: "[Installing memcached 1.2.6](/wiki/Installing_memcached_1.2.6)".

# Updating [memcached](/wiki/memcached)

```shell
$ wget http://memcached.googlecode.com/files/memcached-1.4.1.tar.gz
$ tar xzvf memcached-1.4.1.tar.gz 
$ cd memcached-1.4.1
$ ./configure
$ make
$ make test
$ sudo make install
```

# Restarting the daemon

In my case I use [monit](/wiki/monit) to handle [memcached](/wiki/memcached) — monit automatically handles restarting any other services which may depend on the restarted service — so I restarted like this:

```shell
$ sudo monit restart memcached-rails
```

And then checked the status of all monitored processes using:

```shell
$ sudo monit status
```

# See also

-   [Installing memcached 1.4.1 on Mac OS X 10.6 Snow Leopard](/wiki/Installing_memcached_1.4.1_on_Mac_OS_X_10.6_Snow_Leopard)
