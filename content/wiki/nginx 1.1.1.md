---
tags: nginx wiki
---

From the official release announcement:

    Changes with nginx 1.1.1                                         22 Aug 2011

       *) Change: now cache loader processes either as many files as specified 
          by "loader_files" parameter or works no more than time specified by 
          "loader_threshold" parameter during each iteration.

       *) Change: now SIGWINCH signal works only in deamon mode.

       *) Feature: now shared zones and caches use POSIX semaphores on 
          Solaris.
          Thanks to Den Ivanov.

       *) Feature: accept filters are now supported on NetBSD.

       *) Bugfix: nginx could not be build on Linux 3.0.

       *) Bugfix: nginx did not use gzipping in some cases; the bug had 
          appeared in 1.1.0.

       *) Bugfix: request body might be incorrectly processed if client used 
          pipelining.

       *) Bugfix: in the "request_body_in_single_buf" directive.

       *) Bugfix: in "proxy_set_body" and "proxy_pass_request_body" directives 
          if SSL connection to backend was used.

       *) Bugfix: nginx hogged CPU if all servers in an upstream were marked 
          as "down".

       *) Bugfix: a segmentation fault might occur during reconfiguration if 
          ssl_session_cache was defined but not used in a previous 
          configuration.

       *) Bugfix: a segmentation fault might occur in a worker process if many 
          backup servers were used in an upstream.

       *) Bugfix: a segmentation fault might occur in a worker process if 
          "fastcgi/scgi/uwsgi_param" directives were used with values starting 
          with "HTTP_"; the bug had appeared in 0.8.40.
