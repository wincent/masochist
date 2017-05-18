---
tags: unicorn wiki
---

From the official release announcement:

    Unicorn is an HTTP server for Rack applications designed to only serve
    fast clients on low-latency, high-bandwidth connections and take
    advantage of features in Unix/Unix-like kernels.  Slow clients should
    only be served by placing a reverse proxy capable of fully buffering
    both the the request and response in between Unicorn and slow clients.

    * http://unicorn.bogomips.org/
    * mongrel-unicorn@rubyforge.org
    * git://git.bogomips.org/unicorn.git

    Changes:

    Thanks to Augusto Becciu for finding a bug in the HTTP parser
    that caused a TypeError (and 500) when a rare client set the
    "Version:" header which conflicts with the HTTP_VERSION header
    we parse in the first line of the request[1].

    Horizontal tabs are now allowed as leading whitespace in header
    values as according to RFC 2616 as pointed out by
    Iñaki Baz Castillo[2].

    Taking a hint from Rack 1.1, the "logger" configuration
    parameter no longer requires a "close" method.  This means some
    more Logger replacements may be used.

    There's a new, optional, Unicorn (and maybe Passenger)-only
    middleware, Unicorn::OobGC[2] that runs GC outside of the normal
    request/response cycle to help out memory-hungry applications.
    Thanks to Luke Melia for being brave enough to test and report
    back on my big_app_gc.rb monkey patch[3] which lead up to this.

    Rails 3 (beta) support:

     Using "unicorn" is still recommended as Rails 3 comes with
     a config.ru, but "unicorn_rails" is cleaned up a bit and
     *should* work as well as "unicorn" out-of-the-box.  Feedback
     is much appreciated.

    Rubinius updates:

     USR2 binary upgrades are broken due to
     {TCPServer,UNIXServer}.for_fd[5][6] being broken
     (differently).

     Repeatedly hitting the server with signals in a tight
     loop is unusual and not recommended[7].

     There are some workarounds and general code cleanups for other
     issues[8], as well but things should generally work unless you
     need USR2 upgrades.  Feedback and reports would be greatly
     appreciated as usual.

    MRI support:

     All tests (except old Rails) run and pass under 1.9.2-preview3.
     1.8.7 and 1.9.1 work well as usual and will continue to be
     supported indefinitely.

    Lets hope this is the last release before 1.0.  Please report
    any issues on the mailing list[9] or email us privately[a].
    Don't send HTML mail.

    [1] - http://mid.gmane.org/AANLkTimuGgcwNAMcVZdViFWdF-UcW_RGyZAue7phUXps@mail.gmail.com
    [2] - http://mid.gmane.org/i2xcc1f582e1005070651u294bd83oc73d1e0adf72373a@mail.gmail.com
    [3] - http://unicorn.bogomips.org/Unicorn/OobGC.html
    [4] - http://unicorn.bogomips.org/examples/big_app_gc.rb
    [5] - http://github.com/evanphx/rubinius/issues/354
    [6] - http://github.com/evanphx/rubinius/issues/355
    [7] - http://github.com/evanphx/rubinius/issues/356
    [8] - http://github.com/evanphx/rubinius/issues/347
    [9] - mailto:mongrel-unicorn@rubyforge.org
    [a] - mailto:unicorn@bogomips.org

    -- 
    Eric Wong
