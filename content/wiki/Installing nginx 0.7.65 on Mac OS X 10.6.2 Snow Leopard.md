---
tags: nginx snow.leopard pcre nginx.upload.module wiki
cache_breaker: 1
---

**Note:** these notes show the use of [wget](/wiki/wget) and [gpg](/wiki/gpg) which are not standard parts of [Mac OS X](/wiki/Mac_OS_X). See "[Installing wget 1.12 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_wget_1.12_on_Mac_OS_X_10.6.2_Snow_Leopard)" and "[Installing GPG 1.4.10 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_GPG_1.4.10_on_Mac_OS_X_10.6.2_Snow_Leopard)" for details.

# [PCRE](/wiki/PCRE)

[PCRE](/wiki/PCRE) is a prerequisite of [nginx](/wiki/nginx) so must be installed first:

```shell
$ wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.02.tar.bz2 \
       ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.02.tar.bz2.sig
$ gpg --recv-keys --keyserver keys.gnupg.net FB0F43D8 # first time only
$ gpg --verify pcre-8.02.tar.bz2.sig pcre-8.02.tar.bz2
$ tar xjvf pcre-8.02.tar.bz2
$ cd pcre-8.02
$ ./configure
$ make
$ make check
$ sudo make install
$ cd ..
```

# [nginx](/wiki/nginx) and the [nginx upload module](/wiki/nginx_upload_module)

```shell
$ wget http://www.grid.net.ru/nginx/download/nginx_upload_module-2.0.12.tar.gz \
       http://nginx.org/download/nginx-0.7.65.tar.gz \
       http://nginx.org/download/nginx-0.7.65.tar.gz.asc
$ tar xzvf nginx_upload_module-2.0.12.tar.gz 
$ gpg --recv-keys --keyserver keys.gnupg.net A524C53E # first time only
$ gpg --verify nginx-0.7.65.tar.gz.asc nginx-0.7.65.tar.gz
$ tar xzvf nginx-0.7.65.tar.gz
$ cd nginx-0.7.65
$ ./configure --prefix=/usr/local/nginx --with-http_ssl_module --add-module=../nginx_upload_module-2.0.12
$ make
$ sudo make install
$ sudo chmod 777 /usr/local/nginx/logs
```

The last line is required because on my development machine I run [nginx](/wiki/nginx) as an unprivileged user.
