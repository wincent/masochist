---
tags: nginx wiki
---

From the official release announcement:

    Changes with nginx 1.1.0                                         01 Aug 2011

       *) Feature: cache loader run time decrease.

       *) Feature: "loader_files", "loader_sleep", and "loader_threshold" 
          options of the "proxy/fastcgi/scgi/uwsgi_cache_path" directives.

       *) Feature: loading time decrease of configuration with large number of 
          HTTPS sites.

       *) Feature: now nginx supports ECDHE key exchange ciphers.
          Thanks to Adrian Kotelba.

       *) Feature: the "lingering_close" directive.
          Thanks to Maxim Dounin.

       *) Bugfix: in closing connection for pipelined requests.
          Thanks to Maxim Dounin.

       *) Bugfix: nginx did not disable gzipping if client sent "gzip;q=0" in 
          "Accept-Encoding" request header line.

       *) Bugfix: in timeout in unbuffered proxied mode.
          Thanks to Maxim Dounin.

       *) Bugfix: memory leaks when a "proxy_pass" directive contains 
          variables and proxies to an HTTPS backend.
          Thanks to Maxim Dounin.

       *) Bugfix: in parameter validaiton of a "proxy_pass" directive with 
          variables.
          Thanks to Lanshun Zhou.

       *) Bugfix: SSL did not work on QNX.
          Thanks to Maxim Dounin.

       *) Bugfix: SSL modules could not be built by gcc 4.6 without 
          --with-debug option.
