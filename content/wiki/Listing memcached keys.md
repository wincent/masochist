---
tags: memcached
cache_breaker: 1
---

You officially can't do this, but unofficially you can, at least good enough for debugging purposes in the development environment, by [testing memcached with telnet](/wiki/testing_memcached_with_telnet).

First, connect to the daemon with telnet (eg. `telnet localhost 11211` or similar) and get a slab id:

    stats items
    STAT items:7:number 1
    STAT items:7:age 22
    STAT items:7:evicted 0
    STAT items:7:evicted_time 0
    STAT items:7:outofmemory 0
    STAT items:7:tailrepairs 0
    END

Now, use `cachedump`, passing in the id and a limit specifying the maximum number of keys to dump:

    stats cachedump 7 100
    ITEM views/tweets_sidebar [290 b; 1283471297 s]
    END

And you can retrieve using the listed key(s):

    get views/tweets_sidebar
    VALUE views/tweets_sidebar 0 290
    ...
    END

# Source

-   <http://www.darkcoding.net/software/memcached-list-all-keys/>

# See also

-   Ruby script implementing this technique: <https://gist.github.com/bkimble/1365005>

