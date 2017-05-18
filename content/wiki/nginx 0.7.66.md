---
tags: nginx wiki
cache_breaker: 1
---

From the official announcement:

    Changes with nginx 0.7.66                                        07 Jun 2010

       *) Security: now nginx/Windows ignores default file stream name.
          Thanks to Jose Antonio Vazquez Gonzalez.

       *) Change: now the charset filter runs before the SSI filter.

       *) Change: now no message is written in an error log if a variable is 
          not found by $r->variable() method.

       *) Change: now keepalive connections after POST requests are not 
          disabled for MSIE 7.0+.
          Thanks to Adam Lounds.

       *) Feature: the "proxy_no_cache" and "fastcgi_no_cache" directives.

       *) Feature: now the "rewrite" directive does a redirect automatically 
          if the $scheme variable is used.
          Thanks to Piotr Sikora.

       *) Feature: the "chunked_transfer_encoding" directive.

       *) Feature: the $geoip_city_continent_code, $geoip_latitude, and 
          $geoip_longitude variables.
          Thanks to Arvind Sundararajan.

       *) Feature: now the ngx_http_image_filter_module deletes always EXIF 
          and other application specific data if the data consume more than 5% 
          of a JPEG file.

       *) Feature: now the "msie_padding" directive works for Chrome too.

       *) Workaround: now keepalive connections are disabled for Safari.
          Thanks to Joshua Sierles.

       *) Bugfix: nginx ignored the "private" and "no-store" values in the 
          "Cache-Control" backend response header line.

       *) Bugfix: an "&" character was not escaped when it was copied in 
          arguments part in a rewrite rule.

       *) Bugfix: nginx might be terminated abnormally while a signal 
          processing or if the directive "timer_resolution" was used on 
          platforms which do not support kqueue or eventport notification 
          methods.
          Thanks to George Xie and Maxim Dounin.

       *) Bugfix: if temporary files and permanent storage area resided at 
          different file systems, then permanent file modification times were 
          incorrect.
          Thanks to Maxim Dounin.

       *) Bugfix: ngx_http_memcached_module might issue the error message 
          "memcached sent invalid trailer".
          Thanks to Maxim Dounin.

       *) Bugfix: nginx could not built zlib-1.2.4 library using the library 
          sources.
          Thanks to Maxim Dounin.

       *) Bugfix: values of the $query_string, $arg_..., etc. variables cached 
          in main request were used by the SSI module in subrequests.

       *) Bugfix: nginx did not support HTTPS referrers.

       *) Bugfix: nginx/Windows might not find file if path in configuration 
          was given in other character case; the bug had appeared in 0.7.65.

       *) Bugfix: the $date_local variable has an incorrect value, if the "%s" 
          format was used.
          Thanks to Maxim Dounin.

       *) Bugfix: nginx did not support all ciphers and digests used in client 
          certificates.
          Thanks to Innocenty Enikeew.

       *) Bugfix: if ssl_session_cache was not set or was set to "none", then 
          during client certificate verify the error "session id context 
          uninitialized" might occur; the bug had appeared in 0.7.1.

       *) Bugfix: OpenSSL-1.0.0 compatibility on 64-bit Linux.
          Thanks to Maxim Dounin.

       *) Bugfix: a geo range returned default value if the range included two 
          or more /16 networks and did not begin at /16 network boundary.

       *) Bugfix: the $uid_got variable might not be used in the SSI and perl 
          modules.

       *) Bugfix: a worker process hung if a FIFO file was requested.
          Thanks to Vicente Aguilar and Maxim Dounin.

       *) Bugfix: a variable value was repeatedly encoded after each an "echo" 
          SSI-command output; the bug had appeared in 0.6.14.

       *) Bugfix: a "stub" parameter of an "include" SSI directive was not 
          used, if empty response has 200 status code.

       *) Bugfix: a block used in a "stub" parameter of an "include" SSI 
          directive was output with "text/plain" MIME type.

       *) Bugfix: if a proxied or FastCGI request was internally redirected to 
          another proxied or FastCGI location, then a segmentation fault might 
          occur in a worker process; the bug had appeared in 0.7.65.
          Thanks to Yichun Zhang.

       *) Bugfix: IMAP connections may hang until they timed out while talking 
          to Zimbra server.
          Thanks to Alan Batie.

       *) Bugfix: nginx did not support chunked transfer encoding for 201 
          responses.
          Thanks to Julian Reich.
