---
tags: ruby tiger updates wiki
cache_breaker: 1
---

These notes were made during the upgrade from [Ruby 1.8.4](/wiki/Ruby_1.8.4) to [Ruby 1.8.5](/wiki/Ruby_1.8.5) on my [Mac OS X Tiger](/wiki/Mac_OS_X_Tiger) machine.

# Build

    wget "ftp://ftp.ruby-lang.org/pub/ruby/ruby-1.8.5.tar.gz"
    tar zxvf ruby-1.8.5.tar.gz
    cd ruby-1.8.5
    ./configure
    make 
    make test
    sudo make install
    make check

# Test failures

Unlike the last version, this version fails catastrophically at the `make check` phase:

    test succeeded
    ./miniruby ./runruby.rb --extout=.ext -- -C "./test" runner.rb --runner=console 
    dyld: NSLinkModule() error
    dyld: Symbol not found: _rl_filename_completion_function
      Referenced from: /Users/wincent/trabajo/ruby/ruby-1.8.5/.ext/i686-darwin8.7.1/readline.bundle
      Expected in: flat namespace

    make: *** [test-all] Trace/BPT trap

Based on a suggestion in [this mailing list post](http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-core/5118) I tried the following and it seems to work:

    cd ext/readline
    ruby extconf.rb
    make
    sudo cp readline.bundle /usr/local/lib/ruby/1.8/i686-darwin8.7.1/
    cd ../..
    make check

# Documentation

In order for the documentation to be installed and accessible to [ri](/wiki/ri) you must explicitly install it. I only discovered this months after building Ruby 1.8.5. When I went back to my Ruby source folder and tried `sudo make install-doc` it didn't work because there was no longer a `Makefile`. I therefore had to reconfigure first:

    ./configure
    sudo make install-doc

# See also

-   [Building and installing Ruby 1.8.4 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.4_on_Mac_OS_X_Tiger)
-   [Building and installing Ruby 1.8.5 on Red Hat Enterprise Linux ES 3](/wiki/Building_and_installing_Ruby_1.8.5_on_Red_Hat_Enterprise_Linux_ES_3)
-   [Getting ri working for built-in classes](/wiki/Getting_ri_working_for_built-in_classes)
