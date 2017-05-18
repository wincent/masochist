---
tags: apache nginx wiki
cache_breaker: 1
---

I was wondering if it would be wise to serve [Mac OS X](/wiki/Mac_OS_X) installation packages (`.pkg`) files directly over [HTTP](/wiki/HTTP), or whether browsers would choke on them and do silly things like display them as garbled text in the browser window rather than writing them out to disk. (Up till now I've always wrapped them up in a [zip](/wiki/zip) archive just to be on the safe side, despite the fact that this requires users to perform an additional extraction step before using the package, which has always annoyed me.)

[Safari](/wiki/Safari) does the right thing out of the box, as you would expect, but a quick test using `curl` shows that the default headers are indeed wrong:

```shell
$ curl -O -D header-dump \
  http://wincent.com/a/products/wincent-icon-util/download/WincentIconUtility.pkg
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 23488  100 23488    0     0  16723      0  0:00:01  0:00:01 --:--:-- 20213
$ cat header-dump 
HTTP/1.1 200 OK
Server: nginx/0.6.35
Date: Sat, 29 Aug 2009 15:04:21 GMT
Content-Type: text/plain; charset=UTF-8
Connection: keep-alive
Last-Modified: Sat, 29 Aug 2009 14:56:05 GMT
ETag: "10b0369-5bc0-ffffab40"
Accept-Ranges: bytes
Content-Length: 23488
```

We don't want the `Content-Type` to be `text/plain` at all. A quick test with [Firefox](/wiki/Firefox) proves that this is a bad thing, because the package is shown in the browser window rather than downloaded.

# Setting up the MIME type

We need a line like:

    application/octet-stream              pkg;

In our `/usr/local/nginx/conf/mime.types` file.

And then restarting [nginx](/wiki/nginx). Seeing as I use [monit](/wiki/monit), this means doing the following as root:

    monit restart nginx-rails

We also need to change the line:

    application/octet-stream        bin dms lha lzh exe class so dll img iso dmg

In `/etc/mime.types` to:

    application/octet-stream        bin dms lha lzh exe class so dll img iso dmg pkg

For the benefit of [Apache](/wiki/Apache). Notice that I already added `dmg` to that line in a previous occasion.

Now we can restart Apache (as root):

    apachectl graceful
