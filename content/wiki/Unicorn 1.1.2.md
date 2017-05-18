---
tags: unicorn wiki
---

From the official release announcement:

    Changes:

    Theses release fix a long-standing bug where the original PID
    file is not restored when rolling back from a USR2 upgrade.
    Presumably most upgrades aren't rolled back, so it took over a
    year to notice this issue.  Thanks to Lawrence Pit for
    discovering and reporting this issue.

    About Unicorn:

    Unicorn is an HTTP server for Rack applications designed to only serve
    fast clients on low-latency, high-bandwidth connections and take
    advantage of features in Unix/Unix-like kernels.  Slow clients should
    only be served by placing a reverse proxy capable of fully buffering
    both the the request and response in between Unicorn and slow clients.

    * http://unicorn.bogomips.org/
    * mongrel-unicorn@rubyforge.org
    * git://git.bogomips.org/unicorn.git
