---
tags: nginx wiki
---

Changes with nginx 0.7.61                                        22 Jun 2009

       *) Bugfix: nginx could not be built on MacOSX 10.6. the bug had 
          appeared in 0.8.2.

       *) Bugfix: nginx could not be built --without-http-cache; the bug had 
          appeared in 0.7.60.

       *) Bugfix: a segmentation fault occurred in worker process, if a 
          backend 401 error was intercepted and the backend did not set the 
          "WWW-Authenticate" response header line.
          Thanks to Eugene Mychlo.
