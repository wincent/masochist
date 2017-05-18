---
tags: nginx wiki
---

Changes with nginx 0.7.63                                        26 Oct 2009

       *) Security: now "/../" are disabled in "Destination" request header 
          line.

       *) Change: minimum supported OpenSSL version is 0.9.7.

       *) Change: the "ask" parameter of the "ssl_verify_client" directive was 
          changed to the "optional" parameter and now it checks a client 
          certificate if it was offered.
          Thanks to Brice Figureau.

       *) Feature: now the "-V" switch shows TLS SNI support.

       *) Feature: the $ssl_client_verify variable.
          Thanks to Brice Figureau.

       *) Feature: the "ssl_crl" directive.
          Thanks to Brice Figureau.

       *) Bugfix: the $ssl_client_cert variable usage corrupted memory; the 
          bug had appeared in 0.7.7.
          Thanks to Sergey Zhuravlev.

       *) Feature: now the start cache loader runs in a separate process; this 
          should improve large caches handling.

       *) Feature: now temporary files and permanent storage area may reside 
          at different file systems.

       *) Bugfix: nginx counted incorrectly disk cache size.

       *) Change: now directive "gzip_disable msie6" does not disable gzipping 
          for MSIE 6.0 SV1.

       *) Bugfix: nginx always added "Vary: Accept-Encoding" response header 
          line, if both "gzip_static" and "gzip_vary" were on.

       *) Feature: the "proxy" parameter of the "geo" directive.

       *) Feature: the ngx_http_geoip_module.

       *) Feature: the "limit_rate_after" directive.
          Thanks to Ivan Debnar.

       *) Feature: the "limit_req_log_level" and "limit_conn_log_level" 
          directives.

       *) Bugfix: now "limit_req" directive conforms to the leaky bucket 
          algorithm.
          Thanks to Maxim Dounin.

       *) Bugfix: in ngx_http_limit_req_module.
          Thanks to Maxim Dounin.

       *) Bugfix: now nginx allows underscores in a request method.

       *) Bugfix: "proxy_pass_header" and "fastcgi_pass_header" directives did 
          not pass to a client the "X-Accel-Redirect", "X-Accel-Limit-Rate", 
          "X-Accel-Buffering", and "X-Accel-Charset" lines from backend 
          response header.
          Thanks to Maxim Dounin.

       *) Bugfix: in handling "Last-Modified" and "Accept-Ranges" backend 
          response header lines; the bug had appeared in 0.7.44.
          Thanks to Maxim Dounin.

       *) Feature: the "image_filter_transparency" directive.

       *) Feature: the "image_filter" directive supports variables for setting 
          size.

       *) Bugfix: in PNG alpha-channel support in the 
          ngx_http_image_filter_module.

       *) Bugfix: in transparency support in the ngx_http_image_filter_module.

       *) Feature: now several "perl_modules" directives may be used.

       *) Bugfix: ngx_http_perl_module responses did not work in subrequests.

       *) Bugfix: nginx sent '\0' in a "Location" response header line on 
          MKCOL request.
          Thanks to Xie Zhenye.

       *) Bugfix: an "error_page" directive did not redirect a 413 error; the 
          bug had appeared in 0.6.10.

       *) Bugfix: in memory allocation error handling.
          Thanks to Maxim Dounin and Kirill A. Korinskiy.
