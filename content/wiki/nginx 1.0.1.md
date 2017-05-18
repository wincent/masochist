---
tags: nginx wiki
cache_breaker: 1
---

From the official release announcement:

    Changes with nginx 1.0.1                                         03 May 2011

       *) Change: now the "split_clients" directive uses MurmurHash2 algorithm 
          because of better distribution.
          Thanks to Oleg Mamontov.

       *) Change: now long strings starting with zero are not considered as 
          false values.
          Thanks to Maxim Dounin.

       *) Change: now nginx uses a default listen backlog value 511 on Linux.

       *) Feature: the $upstream_... variables may be used in the SSI and perl 
          modules.

       *) Bugfix: now nginx limits better disk cache size.
          Thanks to Oleg Mamontov.

       *) Bugfix: a segmentation fault might occur while parsing incorrect 
          IPv4 address; the bug had appeared in 0.9.3.
          Thanks to Maxim Dounin.

       *) Bugfix: nginx could not be built by gcc 4.6 without --with-debug 
          option.

       *) Bugfix: nginx could not be built on Solaris 9 and earlier; the bug 
          had appeared in 0.9.3.
          Thanks to Dagobert Michelsen.

       *) Bugfix: $request_time variable had invalid values if subrequests 
          were used; the bug had appeared in 0.8.47.
          Thanks to Igor A. Valcov.

# See also

-   [Updating to nginx 1.0.1](/wiki/Updating_to_nginx_1.0.1)
