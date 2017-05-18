---
tags: unicorn wiki
---

tldr:
    2.0.0 - cleanups for Rainbows!, but should be ready for general use
           barring portability issues
    1.1.5 - bug fixes
    1.0.2 - bug fixes

    Please send any and all feedback to the mailing list.  Do not waste
    bandwidth with HTML or signature attachments.

    email: mongrel-unicorn@rubyforge.org
    git: git://git.bogomips.org/unicorn.git

    The longer change summaries/release notes:

    == unicorn 2.0.0 - mostly internal cleanups

    Despite the version number, this release mostly features
    internal cleanups for future versions of Rainbows!.  User
    visible changes include reductions in CPU wakeups on idle sites
    using high timeouts.

    Barring possible portability issues due to the introduction of
    the kgio library, this release should be ready for all to use.
    However, 1.1.x (and possibly 1.0.x) will continue to be
    maintained.  Unicorn 1.1.5 and 1.0.2 have also been released
    with bugfixes found during development of 2.0.0.

    == unicorn 1.1.5

    This maintenance release fixes several long-standing but
    recently-noticed bugs.  SIGHUP reloading now correctly restores
    default values if they're erased or commented-out in the Unicorn
    configuration file.  Delays/slowdowns in signal handling since
    0.990 are fixed, too.

    == unicorn 1.0.2

    This is the latest maintenance release of the 1.0.x series.
    All users are encouraged to upgrade to 1.1.x stable series
    and report bugs there.

    Shortlog of changes since 1.0.1:

    Eric Wong (8):
         SIGTTIN works after SIGWINCH
         fix delays in signal handling
         Rakefile: don't post freshmeat on empty changelogs
         Rakefile: capture prerelease tags
         configurator: use "__send__" instead of "send"
         configurator: reloading with unset values restores default
         gemspec: depend on Isolate 3.0.0 for dev
         doc: stop using deprecated rdoc CLI options

    ==
    Have fun!
