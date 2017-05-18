---
tags: nginx wiki
cache_breaker: 1
---

From the official release announcement:

    Changes with nginx 0.8.54                                        14 Dec 2010

       *) Bugfix: if there was a single server for given IPv6 address:port 
          pair, then captures in regular expressions in a "server_name" 
          directive did not work.

       *) Bugfix: a segmentation fault might occur in a worker process, if the 
          "auth_basic" directive was used.
          Thanks to Michail Laletin.

       *) Bugfix: compatibility with ngx_http_eval_module; the bug had 
          appeared in 0.8.42.
