---
tags: nginx gzip curl
cache_breaker: 1
---

Example session diagnosing a failure of \[\[nginx\] to gzip compress static assets:

```shell
$ curl --silent --write-out 'size_download=%{size_download}\n' \
  --output /dev/null https://wincent.com/assets/application-d25d354c71d9829a020f5c20e9a75365.css 
size_download=35565
$ curl --silent --write-out 'size_download=%{size_download}\n' \
  --output /dev/null https://wincent.com/assets/application-d25d354c71d9829a020f5c20e9a75365.css.gz
size_download=5308
$ curl --silent --write-out 'size_download=%{size_download}\n' -H "Accept-Encoding: gzip,deflate" \
  --output /dev/null https://wincent.com/assets/application-d25d354c71d9829a020f5c20e9a75365.css
size_download=5308
$ curl --silent --write-out 'size_download=%{size_download}\n' --http1.0 -H "Accept-Encoding: gzip,deflate" \
  --output /dev/null https://wincent.com/assets/application-d25d354c71d9829a020f5c20e9a75365.css
size_download=35565
```

In other words, it is correctly offering up the compressed file give the right `Accept-Encoding` header. It isn't compressing the file if the request uses HTTP/1.0.

# Source

-   <http://dev.nuclearrooster.com/2009/11/08/checking-gzipdeflate-server-responses-with-curl>

