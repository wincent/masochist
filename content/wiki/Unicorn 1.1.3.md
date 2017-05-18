---
tags: unicorn wiki
---

From the official release announcement:

    Changes:

    This release fixes race conditions during SIGUSR1 log cycling.
    This bug mainly affects Rainbows! users serving static files,
    but some Rack apps use threads internally even under Unicorn.

    Other small fixes:
    * SIGTTIN works as documented after SIGWINCH
    * --help output from `unicorn` and `unicorn_rails` is more consistent


    Unless people scream, there will be no further releases from the 1.0.x
    line and all users are encouraged to upgrade to 1.1.x.  I'm still
    thinking about how to approach some internal cleanups for 2.x, but 2.x
    could be out as early as next week  (but 1.x will continue to be
    maintained).

    * http://unicorn.bogomips.org/
    * mongrel-unicorn@rubyforge.org
    * git://git.bogomips.org/unicorn.git
