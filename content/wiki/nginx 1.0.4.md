---
tags: nginx wiki
---

From the official release announcement:

    Changes with nginx 1.0.4                                         01 Jun 2011

       *) Change: now regular expressions case sensitivity in the "map" 
          directive is given by prefixes "~" or "~*".

       *) Feature: now shared zones and caches use POSIX semaphores on Linux. 
          Thanks to Denis F. Latypoff.

       *) Bugfix: "stalled" cache updating" alert.

       *) Bugfix: nginx could not be built --without-http_auth_basic_module; 
          the bug had appeared in 1.0.3.
