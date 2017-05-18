---
tags: nginx wiki
---

From the official release announcement:

    Changes with nginx 0.7.65                                        01 Feb 2010

       *) Security: now nginx/Windows ignores trailing spaces in URI.
          Thanks to Dan Crowley, Core Security Technologies.

       *) Security: now nginx/Windows ignores short files names.
          Thanks to Dan Crowley, Core Security Technologies.

       *) Change: now the "009" status code is written to an access log for 
          proxied HTTP/0.9 responses.

       *) Change: now the default buffer size of the 
          "large_client_header_buffers" directive is 8K.
          Thanks to Andrew Cholakian.

       *) Change: now default SSL ciphers are "HIGH:!ADH:!MD5".

       *) Change: now SSLv2 protocol is disabled by default.

       *) Change: now $host variable value is always low case.

       *) Feature: the conf/fastcgi.conf for simple FastCGI configurations.

       *) Feature: now URI part is not required a "proxy_pass" directive if 
          variables are used.

       *) Feature: the $ssl_session_id variable.

       *) Bugfix: if a proxied or FastCGI request was internally redirected to 
          another proxied or FastCGI location, then $upstream_response_time 
          variable may have abnormally large value; the bug had appeared in 
          0.7.63.

       *) Bugfix: if the "expires modified" set date in the past, then a 
          negative number was set in the "Cache-Control" response header 
          line.
          Thanks to Alex Kapranoff.

       *) Bugfix: nginx closed a connection if a cached response had an empty 
          body.
          Thanks to Piotr Sikora.

       *) Bugfix: nginx cached a 304 response if there was the "If-None-Match" 
          header line in a proxied request.
          Thanks to Tim Dettrick and David Kostal.

       *) Bugfix: nginx did not treat a comma as separator in the 
          "Cache-Control" backend response header line.

       *) Bugfix: cached HTTP/0.9 responses were handled incorrectly.

       *) Bugfix: nginx sent gzipped responses to clients those do not support 
          gzip, if "gzip_static on" and "gzip_vary off"; the bug had appeared 
          in 0.8.16.

       *) Bugfix: nginx always added "Content-Encoding: gzip" response header 
          line in 304 responses sent by ngx_http_gzip_static_module.

       *) Bugfix: the "!-x" operator did not work.
          Thanks to Maxim Dounin.

       *) Bugfix: a segmentation fault might occur in a worker process, if 
          limit_rate was used in HTTPS server.
          Thanks to Maxim Dounin.

       *) Bugfix: a segmentation fault might occur in a worker process while 
          $limit_rate logging.
          Thanks to Maxim Dounin.

       *) Bugfix: nginx did not support dates in 2038 year on 32-bit platforms;

       *) Bugfix: nginx/Windows tried to delete a temporary file twice if the 
          file should replace an already existent file.

       *) Bugfix: nginx/Windows tried to rename a temporary file twice if the 
          file should replace an already existent file.

       *) Bugfix: nginx/Windows might not create temporary file, a cache file, 
          or "proxy/fastcgi_store"d file if a worker had no enough access 
          rights for top level directories.

       *) Bugfix: in UTF-8 encoding support by "try_files" directive in 
          nginx/Windows.

       *) Bugfix: UTF-8 encoding usage in the ngx_http_autoindex_module.
          Thanks to Maxim Dounin.

       *) Bugfix: the ngx_http_autoindex_module did not show the trailing 
          slash in links to a directory; the bug had appeared in 0.7.15.

       *) Bugfix: nginx did not close a log file set by the --error-log-path 
          configuration option; the bug had appeared in 0.7.53.

       *) Bugfix: "addition_types" directive was incorrectly named 
          "addtion_types".

       *) Bugfix: invalid request line in $request variable was written in 
          access_log only if error_log was set to "info" or "debug" level.
