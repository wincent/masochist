---
tags: nginx pcre upload wiki
cache_breaker: 1
---

# Installing [PCRE](/wiki/PCRE)

[PCRE](/wiki/PCRE) is a required by the [nginx](/wiki/nginx) [HTTP](/wiki/HTTP) rewrite module, so it must be installed before building nginx:

```shell
$ curl -O ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-7.9.tar.bz2 
$ tar xjvf pcre-7.9.tar.bz2 
$ cd pcre-7.9
$ ./configure
$ make
$ make check
$ sudo make install
```

# Installing [nginx](/wiki/nginx) with the [nginx upload module](/wiki/nginx_upload_module)

```shell
$ curl -O http://www.grid.net.ru/nginx/download/nginx_upload_module-2.0.10.tar.gz
$ tar xzvf nginx_upload_module-2.0.10.tar.gz 
$ curl -O http://sysoev.ru/nginx/nginx-0.7.61.tar.gz
$ tar xzvf nginx-0.7.61.tar.gz 
$ cd nginx-0.7.61
$ ./configure --prefix=/usr/local/nginx --with-http_ssl_module --add-module=../nginx_upload_module-2.0.10
$ make
$ sudo make install
```

# Testing

Note that the first time I built using the [nginx upload module](/wiki/nginx_upload_module) I ran into problems related to temporary directories (see "[Updating to nginx 0.6.36 with the nginx upload module 2.0.9](/wiki/Updating_to_nginx_0.6.36_with_the_nginx_upload_module_2.0.9)").

I ran into a few similar issues this time, again using my `script/nginx` script which I use to launch [nginx](/wiki/nginx) from within the `RAILS_ROOT` of a a [Rails](/wiki/Rails) application.

```shell
$ script/nginx
nginx not running: starting
[alert]: could not open error log file: open() "/usr/local/nginx/logs/error.log" failed (13: Permission denied)
2009/08/31 12:24:11 [emerg] 12691#0: open() "/usr/local/nginx/tmp/nginx-local.conf" failed (2: No such file or directory)
```

The first error is a permissions error and is expected because we are running [nginx](/wiki/nginx) as a normal, unprivileged user. Fix it and retry:

```shell
$ sudo chown wincent /usr/local/nginx/logs
$ script/nginx 
nginx not running: starting
[emerg]: open() "/usr/local/nginx/tmp/nginx-local.conf" failed (2: No such file or directory)
```

So the second error remains: it is looking for the config file at `/usr/local/nginx/tmp/nginx-local.conf` when it should be looking in `RAILS_ROOT/tmp/nginx-local.conf`. We fix that by modifying the `script/nginx` script to pass in absolute rather than relative paths. Now retry:

```shell
$ script/nginx 
nginx not running: starting
[emerg]: open() "/Users/wincent/trabajo/unversioned/wincent.com/src/tmp/mime.types" failed (2: No such file or directory) in /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/nginx-local.conf:11
```

More relative path glitches. The config file has a `include mime.types;` line in it. Eliminate that error and retry:

```shell
$ cp /usr/local/nginx/conf/mime.types tmp/mime.types
$ script/nginx
nginx not running: starting
[warn]: duplicate MIME type "text/html" in /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/nginx-local.conf:25
[warn]: 1024 worker_connections are more than open file resource limit: 256
```

So it now works, but with two warnings.

Looking a little deeper, the reason why things were broken is found [here](http://wiki.nginx.org/NginxHttpMainModule) in the documentation for the `include` directive (emphasis added):

> Note that until version 0.6.7, paths are relative to what was specified to configure via the --prefix=&lt;PATH&gt; directive, which by default is /usr/local/nginx. If you didn't set this when you compiled Nginx, then use absolute paths.
>
> Since version 0.6.7, ***paths are relative to directory of nginx configuration file nginx.conf***, but not to nginx prefix directory.

Now let's look at the remaining warnings. The message for the first one isn't very helpful, seeing as line 25 corresponds to this part of the configuration file, where there are no obvious defects:

        16   gzip on;
        17   gzip_types text/plain
        18              text/html
        19              text/javascript
        20              text/css
        21              text/xml
        22              application/x-javascript
        23              application/xml
        24              application/xml+atom
        25              application/xml+rss;
        26   gzip_proxied any; # default is "off" (no compression on proxied requests)

So start by fixing the first one and retrying:

```shell
$ script/nginx
nginx not running: starting
[warn]: duplicate MIME type "text/html" in /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/nginx-local.conf:25
```

As for the second one, commenting out the `text/html` in the `gzip_types` directive makes it go away. Looks like this is expected:

-   <http://forum.slicehost.com/comments.php?DiscussionID=3763>
-   <http://www.ruby-forum.com/topic/163928>

# See also

-   [Updating to nginx 0.7.61 on Red Hat Enterprise Linux 5.3](/wiki/Updating_to_nginx_0.7.61_on_Red_Hat_Enterprise_Linux_5.3)
