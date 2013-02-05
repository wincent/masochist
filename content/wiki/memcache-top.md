---
tags: memcached
---

`memcache-top` is a handy perl script for getting insight into things like cache misses and utilization rates for running [memcached](/wiki/memcached) instances.

-   <http://code.google.com/p/memcache-top/>

Example command:

```shell
$ memcache-top-v0.6 --instances=memcache02,memcache03,memcache04,memcache05
```

Sample output:

    memcache-top v0.6       (default port: 11211, color: on, refresh: 3 seconds)

    INSTANCE                USAGE   HIT %   CONN    TIME    EVICT/s READ/s  WRITE/s
    memcache02:11211        89.4%   14.5%   1874    12.4ms  17.3    359.7K  805.6K
    memcache05:11211        89.3%   10.2%   1785    11.3ms  25.7    499.1K  302.3K
    memcache03:11211        89.3%   12.9%   1785    11.6ms  12.0    303.4K  378.3K
    memcache04:11211        89.3%   6.0%    1786    11.9ms  18.7    376.7K  443.7K

    AVERAGE:                89.3%   10.9%   1807    11.8ms  18.4    384.7K  482.5K

    TOTAL:          35.7GB/ 40.0GB          7230    47.3ms  73.7    1.5M    1.9M
    (ctrl-c to quit.)
