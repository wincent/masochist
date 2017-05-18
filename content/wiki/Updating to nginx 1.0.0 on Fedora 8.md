---
tags: nginx updates fedora wiki
cache_breaker: 1
---

These are update notes. For more detail, see "[Updating to nginx 0.8.54 and nginx upload module 2.2.0 on Fedora 8](/wiki/Updating_to_nginx_0.8.54_and_nginx_upload_module_2.2.0_on_Fedora_8)".

```shell
$ curl -O http://nginx.org/download/nginx-1.0.0.tar.gz
$ curl -O http://nginx.org/download/nginx-1.0.0.tar.gz.asc
$ gpg --verify nginx-1.0.0.tar.gz.asc
$ tar xzvf nginx-1.0.0.tar.gz
$ curl -L https://github.com/vkholodkov/nginx-upload-module/tarball/2.2.0 -o nginx_upload_module-2.2.0.tar.gz
$ tar xzvf nginx_upload_module-2.2.0.tar.gz
$ cd nginx-1.0.0
$ ./configure --prefix=/usr/nginx --with-http_ssl_module --add-module=../vkholodkov-nginx-upload-module-2ec4e4f
$ make
$ ps auxww | grep nginx # note old master process PID
$ sudo -s
# make install
# kill -s USR2 17998    # advise old master process to start a new master process using updated binary
# kill -s WINCH 17998   # gracefully shut down old worker processes
# kill -s QUIT 17998    # exit old master process
```

# See also

-   [Updating to nginx 1.0.0 on Mac OS X 10.6.7 Snow Leopard](/wiki/Updating_to_nginx_1.0.0_on_Mac_OS_X_10.6.7_Snow_Leopard)
