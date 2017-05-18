---
tags: nginx wiki
cache_breaker: 1
---

From the official release announcement:

    Changes with nginx 1.0.3                                         25 May 2011

       *) Feature: the "auth_basic_user_file" directive supports "$apr1", 
          "{PLAIN}", and "{SSHA}" password encryption methods.
          Thanks to Maxim Dounin.

       *) Feature: the "geoip_org" directive and $geoip_org variable.
          Thanks to Alexander Uskov, Arnaud Granal, and Denis F. Latypoff.

       *) Feature: ngx_http_geo_module and ngx_http_geoip_module support IPv4 
          addresses mapped to IPv6 addresses.

       *) Bugfix: a segmentation fault occurred in a worker process during 
          testing IPv4 address mapped to IPv6 address, if access or deny rules 
          were defined only for IPv6; the bug had appeared in 0.8.22.

       *) Bugfix: a cached reponse may be broken if proxy/fastcgi/scgi/ 
          uwsgi_cache_bypass and proxy/fastcgi/scgi/uwsgi_no_cache directive 
          values were different; the bug had appeared in 0.8.46.

# See also

-   [Updating to nginx 1.0.3](/wiki/Updating_to_nginx_1.0.3)
