---
tags: unicorn wiki
---

From the official announcement to the [Unicorn mailing list](/wiki/Unicorn_mailing_list):

    Unicorn is an HTTP server for Rack applications designed to only serve
    fast clients on low-latency, high-bandwidth connections and take
    advantage of features in Unix/Unix-like kernels.  Slow clients should
    only be served by placing a reverse proxy capable of fully buffering
    both the the request and response in between Unicorn and slow clients.

    * http://unicorn.bogomips.org/
    * mongrel-unicorn@rubyforge.org
    * git://git.bogomips.org/unicorn.git

    Changes:

    A bunch of small fixes related to startup/configuration and hot
    reload issues with HUP:

    * Variables in the user-generated config.ru files no longer
     risk clobbering variables used in laucher scripts.

    * signal handlers are initialized before the pid file is
     dropped, so over-eager firing of init scripts won't
     mysteriously nuke a process.

    * SIGHUP will return app to original state if an updated
     config.ru fails to load due to {Syntax,Load}Error.

    * unicorn_rails should be Rails 3 compatible out-of-the-box
     ('unicorn' works as always, and is recommended for Rails 3)

    * unicorn_rails is finally "working_directory"-aware when
     generating default temporary paths and pid file

    * config.ru encoding is the application's default in 1.9,
     not forced to binary like many parts of Unicorn.

    * configurator learned to handle the "user" directive outside
     of after_fork hook (which will always remain supported).

    There are also various internal cleanups and possible speedups.
