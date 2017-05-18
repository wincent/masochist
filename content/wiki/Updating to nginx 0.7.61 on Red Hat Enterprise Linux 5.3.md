---
tags: red.hat nginx updates nginx.upload.module wiki
cache_breaker: 1
---

# Updating [PCRE](/wiki/PCRE)

Although we updated [PCRE](/wiki/PCRE) as part of our [Mac OS X](/wiki/Mac_OS_X) 10.6 [Snow Leopard](/wiki/Snow_Leopard) install, we won't update here because we don't want to lose the automatic updates of the [Red Hat](/wiki/Red_Hat)-supplied version.

# Updating [nginx](/wiki/nginx) and using the [nginx upload module](/wiki/nginx_upload_module)

Although I have tried the upload module previously on my development machine (see "[Updating to nginx 0.6.36 with the nginx upload module 2.0.9](/wiki/Updating_to_nginx_0.6.36_with_the_nginx_upload_module_2.0.9)" and "[Installing nginx 0.7.61 on Mac OS X 10.6 Snow Leopard](/wiki/Installing_nginx_0.7.61_on_Mac_OS_X_10.6_Snow_Leopard)") this is the first time I am deploying it on the remote server.

```shell
$ wget http://www.grid.net.ru/nginx/download/nginx_upload_module-2.0.10.tar.gz
$ tar xzvf nginx_upload_module-2.0.10.tar.gz 
$ wget http://sysoev.ru/nginx/nginx-0.7.61.tar.gz
$ tar xzvf nginx-0.7.61.tar.gz 
$ cd nginx-0.7.61
$ ./configure --prefix=/usr/local/nginx --with-http_ssl_module --add-module=../nginx_upload_module-2.0.10
$ make
```

For the actual installation we use a somewhat more elaborate process than the one we use on the development machine, principally because we want a rapid retreat path in case something goes wrong. As noted in "[Updating to nginx 0.6.34 on Red Hat Enterprise Linux 5.1](/wiki/Updating_to_nginx_0.6.34_on_Red_Hat_Enterprise_Linux_5.1)", it is in theory possible to do a zero-downtime update by swapping in a new binary on the fly. It's something I may try next time (and if I do, I will make notes at "[Updating to a new nginx binary on the fly](/wiki/Updating_to_a_new_nginx_binary_on_the_fly)"), but for now I used the more conservative approach of stopping the server, moving the entire old `/usr/local/nginx/` folder out of the way, installing the new version, and restarting.

```shell
$ sudo -i
# monit summary
# monit stop all
# monit summary
# mv /usr/local/nginx /usr/local/nginx-old
# cd /path/to/nginx/src/nginx-0.7.61
# make install
# cd /usr/local
# cp nginx-old/conf/nginx-staging.conf nginx/conf/
# mv nginx/conf/nginx.conf nginx/conf/nginx.conf.vendor
# cp nginx-old/conf/nginx.conf nginx/conf/
# sbin/nginx -t -c conf/nginx.conf
# cp -R ../nginx-old/conf/certs conf/
# cp -R ../nginx-old/conf/keys conf/
# sbin/nginx -t -c conf/nginx.conf
# sbin/nginx -t -c conf/nginx-staging.conf
# monit start all
# monit summary
# exit
```

# See also

-   [Installing nginx 0.7.61 on Mac OS X 10.6 Snow Leopard](/wiki/Installing_nginx_0.7.61_on_Mac_OS_X_10.6_Snow_Leopard)
