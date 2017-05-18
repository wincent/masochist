---
tags: libevent memcached wiki
cache_breaker: 1
---

# Installing on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.6

First we install [libevent](/wiki/libevent), a prerequisite for installing [memcached](/wiki/memcached):

    wget http://www.monkey.org/~provos/libevent-1.4.9-stable.tar.gz
    tar xzvf libevent-1.4.9-stable.tar.gz 
    cd libevent-1.4.9-stable
    ./configure
    make
    make verify
    sudo make install

Now moving on to [memcached](/wiki/memcached) itself:

    cd ..
    wget http://www.danga.com/memcached/dist/memcached-1.2.6.tar.gz
    tar xzvf memcached-1.2.6.tar.gz 
    cd memcached-1.2.6
    ./configure
    make
    make test
    sudo make install

# Installing on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) 5.1

When I tried the same procedure on [RHEL](/wiki/RHEL) I found that [memcached](/wiki/memcached) wasn't able to find the [libevent](/wiki/libevent) library at runtime.

This is because it gets installed by default in `/usr/local/lib` and that is not in the dynamic loadpath.

## Troubleshooting options

    # confirm "not found" for libevent
    ldd -v ./memcached
    # see where memcached is looking for the library
    LD_DEBUG=libs ./memcached -vv

## Workarounds

    # export path before launching memcached
    export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH
    ./memcached

## Final solution

That run-time workaround strikes me as a bit ugly. I tried some other tricks at compile-time, but nothing worked.

In the end I decided that installing [libevent](/wiki/libevent) into `/usr/lib` rather than `/usr/local/lib` was the least hideous alternative.

So the final installation incantation was:

    wget http://www.monkey.org/~provos/libevent-1.4.9-stable.tar.gz
    tar xzvf libevent-1.4.9-stable.tar.gz 
    cd libevent-1.4.9-stable
    ./configure --libdir=/usr/lib
    make
    make verify
    sudo make install
    cd ..
    wget http://www.danga.com/memcached/dist/memcached-1.2.6.tar.gz
    tar xzvf memcached-1.2.6.tar.gz 
    cd memcached-1.2.6
    ./configure
    make
    make test
    sudo make install

# See also

-   [Testing memcached with telnet](/wiki/Testing_memcached_with_telnet)
