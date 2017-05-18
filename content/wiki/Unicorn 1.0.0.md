---
tags: unicorn wiki
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

    There are only minor changes since 0.991.0.

    For users clinging onto the past, MRI 1.8.6 support has been
    restored.  Users are strongly encouraged to upgrade to the
    latest 1.8.7, REE or 1.9.1.

    For users looking towards the future, the core test suite and
    the Rails 3 (beta) integration tests pass entirely under 1.9.2
    preview3.  As of the latest rubinius.git[1], Rubinius support is
    nearly complete as well.

    Under Rubinius, signals may corrupt responses as they're being
    written to the socket, but that should be fixable transparently
    to us[4].  Support for the hardly used, hardly documented[2]
    embedded command-line switches in rackup config (.ru) files is
    is also broken under Rubinius.

    The recently-released Rack 1.2.1 introduced no compatiblity
    issues[3] in core Unicorn.  We remain compatible with all Rack
    releases starting with 0.9.1 (and possibly before).

    [1] tested with Rubinius upstream commit
    cf4a5a759234faa3f7d8a92d68fa89d8c5048f72
    [2] lets avoid the Dueling Banjos effect here :x
    [3] actually, Rack 1.2.1 is broken under 1.8.6.
    [4] http://github.com/evanphx/rubinius/issues/373


    The Future:

    * Bug/compatibility fixes as needed, of course!
    * Scalability for hardware that may be common in 5-10 years
    * Rainbows!  LOTS of Rainbows!

    Thanks for reading!
