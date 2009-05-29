---
tags: ruby tiger updates
cache_breaker: 1
---

# Note

These notes are superseded by the article, "[Building and installing Ruby 1.8.5 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.5_on_Mac_OS_X_Tiger)".

# Build

First, download, extract, configure and build:

    wget ftp://ftp.ruby-lang.org/pub/ruby/ruby-1.8.4.tar.gz
    tar zxvf ruby-1.8.4.tar.gz 
    cd ruby-1.8.4/
    ./configure 
    make

Second, run the tests and install. Note that the full test suite (`make check`) can only be run *after* installing:

    make test
    sudo make install
    make check

Print out the version of the newly installed ruby interpreter:

    /usr/local/bin/ruby -v

# See also

-   [Building and installing RubyGems 0.9.0 on Mac OS X Tiger](/wiki/Building_and_installing_RubyGems_0.9.0_on_Mac_OS_X_Tiger)
-   [Building and installing Ruby 1.8.4 on Red Hat Enterprise Linux ES 3](/wiki/Building_and_installing_Ruby_1.8.4_on_Red_Hat_Enterprise_Linux_ES_3)

