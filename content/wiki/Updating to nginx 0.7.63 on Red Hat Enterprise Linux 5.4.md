---
tags: red.hat nginx updates wiki
---

# Updating [PCRE](/wiki/PCRE)

We won't update [PCRE](/wiki/PCRE) here because we don't want to lose the automatic updates of the [Red Hat](/wiki/Red_Hat)-supplied version.

# Updating [nginx](/wiki/nginx) and using the [nginx upload module](/wiki/nginx_upload_module)

The [nginx upload module](/wiki/nginx_upload_module) was already in extracted in place (see "[Installing nginx 0.7.62 on Red Hat Enterprise Linux 5.3](/wiki/Installing_nginx_0.7.62_on_Red_Hat_Enterprise_Linux_5.3)") so we just download the updated [nginx](/wiki/nginx) source and extract that alongside it:

```shell
$ wget http://sysoev.ru/nginx/nginx-0.7.63.tar.gz
$ tar xzvf nginx-0.7.63.tar.gz 
$ cd nginx-0.7.63
```

Note in this case we stop to apply [a patch](http://sysoev.ru/nginx/patch.cve-2009-3555.txt) for the well-publicized [SSL](/wiki/SSL) renegotiation vulnerability before continuing with the build:

```shell
$ wget http://sysoev.ru/nginx/patch.cve-2009-3555.txt
$ patch -p 0 <patch.cve-2009-3555.txt
$ ./configure --prefix=/usr/local/nginx --with-http_ssl_module --add-module=../nginx_upload_module-2.0.10
$ make
```

Now we gracefully update the binary in place without dropping any existing connections (see "[Updating to a new nginx binary on the fly](/wiki/Updating_to_a_new_nginx_binary_on_the_fly)" for more details).

The first step is to get the [PID](/wiki/PID) of the old [nginx](/wiki/nginx) master process — in this example it is 2961 — and then perform the update in place by sending the appropriate signals to that process:

```shell
$ ps auxww|grep nginx
$ sudo make install
$ sudo kill -s USR2 2961
$ sudo kill -s WINCH 2961
$ sudo kill -s QUIT 2961
```

# See also

-   Example of an update that didn't use the "updating the binary on the fly" method: [Installing nginx 0.7.62 on Red Hat Enterprise Linux 5.3](/wiki/Installing_nginx_0.7.62_on_Red_Hat_Enterprise_Linux_5.3)
-   [Updating to a new nginx binary on the fly](/wiki/Updating_to_a_new_nginx_binary_on_the_fly)
