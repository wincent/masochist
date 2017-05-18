---
tags: nginx fedora wiki
---

These are update notes. For more detail, see "[Updating to nginx 0.8.54 and nginx upload module 2.2.0 on Fedora 8](/wiki/Updating_to_nginx_0.8.54_and_nginx_upload_module_2.2.0_on_Fedora_8)".

```shell
$ curl -O http://nginx.org/download/nginx-1.4.4.tar.gz \
       -O http://nginx.org/download/nginx-1.4.4.tar.gz.asc
$ gpg --verify nginx-1.4.4.tar.gz.asc
$ nice tar xzf nginx-1.4.4.tar.gz
$ cd nginx-1.4.4
$ nice ./configure --prefix=/usr/nginx \
                   --with-http_ssl_module \
                   --with-http_gzip_static_module
$ nice make
$ ps auxww | grep nginx # note old master process PID
$ sudo -s
# nice make install
# kill -s USR2 17998    # advise old master process to start a new master process using updated binary
# kill -s WINCH 17998   # gracefully shut down old worker processes
# kill -s QUIT 17998    # exit old master process
```
