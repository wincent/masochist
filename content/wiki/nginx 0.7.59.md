---
tags: nginx
---

From the [official release announcement](http://article.gmane.org/gmane.comp.web.nginx.english/12531):

    Changes with nginx 0.7.59                                        25 May 2009

        *) Feature: the "proxy_cache_methods" and "fastcgi_cache_methods" 
           directives.

        *) Bugfix: socket leak; the bug had appeared in 0.7.25.
           Thanks to Maxim Dounin.

        *) Bugfix: a segmentation fault occurred in worker process, 
           if a request had no body and the $request_body variable was used;
           the bug had appeared in 0.7.58.

        *) Bugfix: the SSL modules might not built on Solaris and Linux;
           the bug had appeared in 0.7.58.

        *) Bugfix: ngx_http_xslt_filter_module responses were not handled by 
           SSI, charset, and gzip filters.

        *) Bugfix: a "charset" directive did not set a charset to 
           ngx_http_gzip_static_module responses.

    The 0.7.x version status is changed to stable.
    While 0.7.x version development the following features appreared:

        *) caching of proxied and FastCGI servers;
        *) "try_files" directive;
        *) the "location" and "server_name" directives support captures
           in regular expressions;
        *) XLST and image filters;
        *) a preliminary IPv6 support;
        *) nginx/Windows.
