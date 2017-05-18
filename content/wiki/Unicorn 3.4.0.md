---
tags: unicorn wiki
---

From the official release announcement:

    Changes:

    * IPv6 support in the HTTP hostname parser and configuration
     language.  Configurator syntax for "listen" addresses should
     be the same as nginx.  Even though we support IPv6, we will
     never support non-LAN/localhost clients connecting to Unicorn.

    * TCP_NOPUSH/TCP_CORK is enabled by default to optimize
     for bandwidth usage and avoid unnecessary wakeups in nginx.

    * Updated KNOWN_ISSUES document for bugs in recent Ruby 1.8.7
     (RNG needs reset after fork) and nginx+sendfile()+FreeBSD 8.

    * examples/nginx.conf updated for modern stable versions of nginx.

    * "Status" in headers no longer ignored in the response,
     Rack::Lint already enforces this so we don't duplicate
     the work.

    * All tests pass under Ruby 1.9.3dev

    * various bugfixes in the (mostly unused) ExecCGI class that
     powers http://bogomips.org/unicorn.git

    * http://unicorn.bogomips.org/
    * mongrel-unicorn@rubyforge.org
    * git://bogomips.org/unicorn.git
