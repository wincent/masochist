---
tags: nginx snow.leopard wiki
cache_breaker: 1
---

**Note:** these notes show the use [gpg](/wiki/gpg) which is not a standard part of [Mac OS X](/wiki/Mac_OS_X). See "[Installing GnuPG 1.4.11 on Mac OS X 10.6.6 Snow Leopard](/wiki/Installing_GnuPG_1.4.11_on_Mac_OS_X_10.6.6_Snow_Leopard)" for details.

# [PCRE](/wiki/PCRE)

[PCRE](/wiki/PCRE) is a prerequisite of [nginx](/wiki/nginx) so must be installed first:

```shell
$ curl -O ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.12.tar.gz \
       -O ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.12.tar.gz.sig 
$ gpg --verify pcre-8.12.tar.gz.sig 
$ tar xzvf pcre-8.12.tar.gz 
$ cd pcre-8.12
$ ./configure 
$ make
$ make check
$ sudo make install
$ cd ..
```

# [nginx](/wiki/nginx) and the [nginx upload module](/wiki/nginx_upload_module)

```shell
$ curl -O http://nginx.org/download/nginx-0.8.54.tar.gz \
       -O http://nginx.org/download/nginx-0.8.54.tar.gz.asc
$ gpg --verify nginx-0.8.54.tar.gz.asc 
$ tar xzvf nginx-0.8.54.tar.gz 
$ curl -L https://github.com/vkholodkov/nginx-upload-module/tarball/2.2.0 -o nginx_upload_module-2.2.0.tar.gz
$ tar xzvf nginx_upload_module-2.2.0.tar.gz 
$ cd nginx-0.8.54
$ ./configure --prefix=/usr/local/nginx --with-http_ssl_module --add-module=../vkholodkov-nginx-upload-module-2ec4e4f
$ make
$ sudo make install
```

As this version of nginx will be running as an unprivileged user, I need to set up some directories with appropriate [ACLs](/wiki/ACLs) first:

```shell
$ cd /usr/local/nginx
$ sudo mkdir scgi_temp uwsgi_temp
$ sudo chmod +a 'wincent:allow add_file,delete_child' scgi_temp
$ sudo chmod +a 'wincent:allow add_file,delete_child' uwsgi_temp
$ sudo chmod +a 'wincent:allow add_file,delete_child' logs
```

This will allow the nginx process running as the unprivileged user to create files in this subdirectories and also delete them. The created files will be owned by the unprivileged user, which is fine as I am only doing development on this machine as a single user.
