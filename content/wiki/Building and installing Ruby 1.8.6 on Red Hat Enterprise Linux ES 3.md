---
tags: ruby red.hat updates
cache_breaker: 1
---

These notes were made during the upgrade from [Ruby 1.8.5](/wiki/Ruby_1.8.5) to [Ruby 1.8.6](/wiki/Ruby_1.8.6) on my [Red Hat Enterprise Linux ES 3](/wiki/Red_Hat_Enterprise_Linux_ES_3) box.

# Build

    wget ftp://ftp.ruby-lang.org/pub/ruby/1.8/ruby-1.8.6.tar.bz2
    openssl md5 ruby-1.8.6.tar.bz2
    tar xjf ruby-1.8.6.tar.bz2
    cd ruby-1.8.6
    ./configure --enable-install-doc
    make
    make test
    sudo make install
    make check

# Failed tests

Two tests fail identically (and harmlessly) as they did for [Ruby 1.8.4](/wiki/Ruby_1.8.4) and [Ruby 1.8.5](/wiki/Ruby_1.8.5) (see "[Building and installing Ruby 1.8.4 on Red Hat Enterprise Linux ES 3](/wiki/Building_and_installing_Ruby_1.8.4_on_Red_Hat_Enterprise_Linux_ES_3)" and "[Building and installing Ruby 1.8.5 on Red Hat Enterprise Linux ES 3](/wiki/Building_and_installing_Ruby_1.8.5_on_Red_Hat_Enterprise_Linux_ES_3)").

# See also

-   [Building and installing Ruby 1.8.6 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.6_on_Mac_OS_X_Tiger)

