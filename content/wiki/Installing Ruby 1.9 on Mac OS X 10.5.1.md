---
tags: ruby
---

[Ruby 1.9](/wiki/Ruby_1.9) is a development (not production) release so I wanted to install it in an isolated corner of the filesystem for testing purposes only, and leave the official (production) Ruby build untouched.

    wget ftp://ftp.ruby-lang.org/pub/ruby/1.9/ruby-1.9.0-0.tar.bz2
    tar xjvf ruby-1.9.0-0.tar.bz2 
    cd ruby-1.9.0-0
    ./configure --prefix=/usr/local/ruby19
    make

    # many, many failures here, but the majority of tests do pass
    make check
    sudo make install

To actually use this:

    export PATH="/usr/local/ruby19/bin:$PATH"
    ruby --version
