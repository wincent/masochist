---
tags: nginx
---

Up until now I've used [Mongrel](/wiki/Mongrel) for local testing purposes when developing [Rails](/wiki/Rails) applications, started using `script/server`, but now I need to do some testing over [SSL](/wiki/SSL) and Mongrel doesn't work over SSL.

Seeing as I already use [nginx](/wiki/nginx) as a frontend for Mongrel in my production environment, I decided to install nginx locally on my [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.6 development box seeing as it *does* speak SSL, and use that as a frontend for the existing Mongrel server in the development environment.

    mkdir nginx
    cd nginx

    # install PCRE, needed for the nginx rewrite module
    # (not sure I'll need the module, but just in case)
    wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-7.8.tar.bz2
    tar xjvf pcre-7.8.tar.bz2 
    cd pcre-7.8
    ./configure
    make
    make check
    sudo make install

    # now for nginx
    cd ..
    wget http://sysoev.ru/nginx/nginx-0.6.34.tar.gz
    tar xzvf nginx-0.6.34.tar.gz 
    cd nginx-0.6.34
    ./configure --prefix=/usr/local/nginx --with-http_ssl_module
    make
    sudo make install

Now I'm going to set up a configuration file and a new script, `script/nginx` to get nginx running as a proxy at <http://localhost:3001/> or similar, and forwarding requests to the Mongrel instance that gets launched by `script/server`.
