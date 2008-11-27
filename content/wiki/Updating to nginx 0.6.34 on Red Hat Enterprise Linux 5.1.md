---
tags: nginx updates
---

These notes were made during the upgrade from nginx 0.6.32 to nginx 0.6.34 on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) 5.1.

Although the nginx wiki does [describe how to swap in a new binary](http://wiki.nginx.org/NginxCommandLine) without dropping any connections, I decided that a more conservative approach would be to stop the server, move the entire old `/usr/local/nginx/` folder out of the way, install the new version, and restart. That way I could back out of the update fairly cleanly and easily if anything went wrong.

Grab the source, configure and build:

    $ wget http://sysoev.ru/nginx/nginx-0.6.34.tar.gz
    $ tar xzvf nginx-0.6.34.tar.gz
    $ cd nginx-0.6.34
    $ ./configure --prefix=/usr/local/nginx --with-http_ssl_module
    $ make

Get ready to deploy:

    $ sudo -s

Check how everything is going (note that I am using [monit](/wiki/monit) to manage my nginx and [mongrel](/wiki/mongrel) instances):

    # monit summary

Shut down the old instance:

    # monit stop all

Make sure that it has shut down completely:

    # monit summary

Move the old install off to one side:

    # mv /usr/local/nginx /usr/local/nginx-0.6.32

Actually install:

    # make install

Copy over the old configuration files (note that I have two, one for staging and one for production):

    # cd /usr/local
    # cp nginx-0.6.32/conf/nginx-staging.conf nginx/conf/
    # mv nginx/conf/nginx.conf nginx/conf/nginx.conf.vendor
    # cp nginx-0.6.32/conf/nginx.conf nginx/conf/
    # cd nginx/conf

Check config file syntax:

    # cd ..
    # sbin/nginx -t -c conf/nginx.conf
    # sbin/nginx -t -c conf/nginx-staging.conf

Go live with new server:

    # monit start all

Make sure it's up:

    # monit summary

And we're done:

    # exit
