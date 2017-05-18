---
tags: nginx updates fedora wiki
cache_breaker: 1
---

```shell
$ wget http://www.grid.net.ru/nginx/download/nginx_upload_module-2.0.12.tar.gz \
       http://nginx.org/download/nginx-0.7.67.tar.gz \
       http://nginx.org/download/nginx-0.7.67.tar.gz.asc
$ gpg --keyserver wwwkeys.pgp.net --recv-keys 0xA524C53E # first time only
$ gpg --verify nginx-0.7.67.tar.gz.asc nginx-0.7.67.tar.gz
$ tar xzvf nginx-0.7.67.tar.gz
$ tar xzvf nginx_upload_module-2.0.12.tar.gz 
$ cd nginx-0.7.67
$ ./configure --prefix=/usr/nginx --with-http_ssl_module --add-module=../nginx_upload_module-2.0.12
$ make
```

Now we gracefully update the binary in place without dropping any existing connections (see "[Updating to a new nginx binary on the fly](/wiki/Updating_to_a_new_nginx_binary_on_the_fly)" for more details).

The first step is to get the [PID](/wiki/PID) of the old [nginx](/wiki/nginx) master process — in this example it is 17998 — and then perform the update in place by sending the appropriate signals to that process:

```shell
$ ps auxww | grep nginx
$ sudo -s
# make install
# kill -s USR2 17998
# kill -s WINCH 17998
# kill -s QUIT 17998
```
