---
tags: nginx wiki
cache_breaker: 1
---

From the official announcement posted to the [nginx](/wiki/nginx) mailing list:

    Changes with nginx 0.7.64                                        16 Nov 2009

       *) Security: now SSL/TLS renegotiation is disabled.
          Thanks to Maxim Dounin.

       *) Bugfix: nginx sent gzipped responses to clients those do not support 
          gzip, if "gzip_static on" and "gzip_vary off"; the bug had appeared 
          in 0.7.63.

       *) Bugfix: if names .domain.tld, .sub.domain.tld, and .domain-some.tld 
          were defined, then the name .sub.domain.tld was matched by 
          .domain.tld.

       *) Bugfix: segmentation fault and infinite looping in resolver.

       *) Bugfix: in resolver.
          Thanks to Artem Bokhan.

       *) Bugfix: resolver cache poisoning.
          Thanks to Matthew Dempsky.

       *) Bugfix: memory leak in resolver.
          Thanks to Matthew Dempsky.

# See also

-   [Updating to nginx 0.7.64 on Red Hat Enterprise Linux 5.4](/wiki/Updating_to_nginx_0.7.64_on_Red_Hat_Enterprise_Linux_5.4)
