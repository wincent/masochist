---
tags: nginx updates snow.leopard macos wiki
---

These are update notes.

For original installation notes, see "[Installing nginx 0.8.54 on Mac OS X 10.6.6 Snow Leopard](/wiki/Installing_nginx_0.8.54_on_Mac_OS_X_10.6.6_Snow_Leopard)".

```shell
$ curl -O http://nginx.org/download/nginx-1.0.0.tar.gz
$ curl -O http://nginx.org/download/nginx-1.0.0.tar.gz.asc
$ gpg --verify nginx-1.0.0.tar.gz.asc 
$ tar xzvf nginx-1.0.0.tar.gz 
$ cd nginx-1.0.0
$ ./configure --prefix=/usr/local/nginx --with-http_ssl_module --add-module=../vkholodkov-nginx-upload-module-2ec4e4f
$ make
$ sudo make install
```
