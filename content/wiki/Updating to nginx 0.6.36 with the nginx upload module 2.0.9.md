---
tags: leopard nginx nginx.upload.module wiki
cache_breaker: 1
---

I wasn't going to update to [nginx 0.6.36](/wiki/nginx_0.6.36) but seeing as I am about to start testing the [nginx upload module](/wiki/nginx_upload_module) (see [ticket \#1193](/issues/1193)) and I would have to rebuild [nginx](/wiki/nginx) anyway for that, I thought I'd use the latest stable release.

# Building on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.6

## Build process

    wget http://www.grid.net.ru/nginx/download/nginx_upload_module-2.0.9.tar.gz
    tar xzvf nginx_upload_module-2.0.9.tar.gz 
    wget http://sysoev.ru/nginx/nginx-0.6.36.tar.gz
    tar xzvf nginx-0.6.36.tar.gz
    cd nginx-0.6.36
    ./configure --prefix=/usr/local/nginx \
      --with-http_ssl_module \
      --add-module=../nginx_upload_module-2.0.9
    make
    sudo make install

The build is pretty much identical to the normal process (see "[Updating to nginx 0.6.35](/wiki/Updating_to_nginx_0.6.35)" for example), but you'll see something like this at the configuration stage:

    configuring additional modules
    adding module in ../nginx_upload_module-2.0.9
     + ngx_http_upload_module was configured

## Changes

The `script/nginx` helper script that I use in local [Rails](/wiki/Rails) development no longer works:

    $ script/nginx
    nginx not running: starting
    2009/04/27 23:16:50 [emerg] 64491#0: mkdir() "/usr/local/nginx/proxy_temp" failed (13: Permission denied)

Not really sure why it's trying to create that directory, seeing as my config explicitly tells it to create it elsewhere; here's the relevant snippet:

      server {
        listen 127.0.0.1:3001;
        server_name rails.wincent.local;
        rewrite ^/(.*) https://localhost:3002/$1 permanent;
        client_body_temp_path /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/client_body_temp;
        fastcgi_temp_path /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/fast_cgi_temp;
        proxy_temp_path /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/proxy_temp;
        access_log /Users/wincent/trabajo/unversioned/wincent.com/src/log/access_log;
      } # end: server

      server {
        listen 127.0.0.1:3002;
        ssl on;
        ssl_certificate /Users/wincent/trabajo/unversioned/wincent.com/src/config/local/ssl.crt;
        ssl_certificate_key /Users/wincent/trabajo/unversioned/wincent.com/src/config/local/ssl.key;
        server_name rails.wincent.local;
        root /Users/wincent/trabajo/unversioned/wincent.com/src/public;
        client_body_temp_path /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/client_body_temp;
        fastcgi_temp_path /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/fast_cgi_temp;
        proxy_temp_path /Users/wincent/trabajo/unversioned/wincent.com/src/tmp/proxy_temp;

Ok, I just tried rebuilding without the module:

    cd nginx-0.6.36
    ./configure --prefix=/usr/local/nginx --with-http_ssl_module
    make
    sudo make install

And have confirmed that the error is related to the upload module (the error doesn't occur without the module).

Further investigation shows that `proxy_temp_path` configuration in both `server` and `http` blocks is ignored by the module; it always uses the default path.

For now, a workaround to get nginx starting again is to just created the default path:

    sudo mkdir /usr/local/nginx/proxy_temp
