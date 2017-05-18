---
tags: unicorn wiki
cache_breaker: 1
---

From the official announcement:

    Unicorn is an HTTP server for Rack applications designed to only serve
    fast clients on low-latency, high-bandwidth connections and take
    advantage of features in Unix/Unix-like kernels.  Slow clients should
    only be served by placing a reverse proxy capable of fully buffering
    both the the request and response in between Unicorn and slow clients.

    * http://unicorn.bogomips.org/
    * mongrel-unicorn@rubyforge.org
    * git://git.bogomips.org/unicorn.git

    Changes:

    This is a small, incremental feature release with some internal
    changes to better support upcoming versions of the Rainbows! and
    Zbatery web servers.  There is no need to upgrade if you're
    happy with 1.0.0, but also little danger in upgrading.

    There is one pedantic bugfix which shouldn't affect anyone
    and small documentation updates as well.
