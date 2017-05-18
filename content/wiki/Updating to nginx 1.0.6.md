---
tags: nginx updates fedora lion os.x wiki
cache_breaker: 1
---

# Updating on [Fedora](/wiki/Fedora)

These are update notes. For more detail, see "[Updating to nginx 0.8.54 and nginx upload module 2.2.0 on Fedora 8](/wiki/Updating_to_nginx_0.8.54_and_nginx_upload_module_2.2.0_on_Fedora_8)".

```shell
$ curl -O http://nginx.org/download/nginx-1.0.6.tar.gz \
       -O http://nginx.org/download/nginx-1.0.6.tar.gz.asc
$ gpg --verify nginx-1.0.6.tar.gz.asc
$ nice tar xzf nginx-1.0.6.tar.gz
$ cd nginx-1.0.6
$ nice ./configure --prefix=/usr/nginx --with-http_ssl_module --add-module=../vkholodkov-nginx-upload-module-2ec4e4f
$ nice make
$ ps auxww | grep nginx # note old master process PID
$ sudo -s
# nice make install
# kill -s USR2 17998    # advise old master process to start a new master process using updated binary
# kill -s WINCH 17998   # gracefully shut down old worker processes
# kill -s QUIT 17998    # exit old master process
```

# Updating on [Mac OS X](/wiki/Mac_OS_X)

These are update notes. For original installation notes, see "[Installing nginx 0.8.54 on Mac OS X 10.6.6 Snow Leopard](/wiki/Installing_nginx_0.8.54_on_Mac_OS_X_10.6.6_Snow_Leopard)".

```shell
$ curl -O http://nginx.org/download/nginx-1.0.6.tar.gz \
       -O http://nginx.org/download/nginx-1.0.6.tar.gz.asc
$ gpg --verify nginx-1.0.6.tar.gz.asc
$ tar xzf nginx-1.0.6.tar.gz
$ cd nginx-1.0.6
$ ./configure --prefix=/usr/nginx --with-http_ssl_module --add-module=../vkholodkov-nginx-upload-module-2ec4e4f
$ make
$ sudo make install
```

**Note:** There are new compilation errors compiling under [Mac OS X](/wiki/Mac_OS_X) 10.7.1 [Lion](/wiki/Lion). For the time being on my Lion install I am just going to continue with my existing [nginx 1.0.3](/wiki/nginx_1.0.3) install.
