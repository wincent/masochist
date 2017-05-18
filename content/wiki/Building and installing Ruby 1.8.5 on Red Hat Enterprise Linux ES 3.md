---
tags: ruby red.hat updates wiki
cache_breaker: 1
---

These notes were made during the upgrade from [Ruby 1.8.4](/wiki/Ruby_1.8.4) to [Ruby 1.8.5](/wiki/Ruby_1.8.5) on my [Red Hat Enterprise Linux ES 3](/wiki/Red_Hat_Enterprise_Linux_ES_3) box.

# Build

    wget "ftp://ftp.ruby-lang.org/pub/ruby/ruby-1.8.5.tar.gz"
    tar zxvf ruby-1.8.5.tar.gz
    cd ruby-1.8.5
    ./configure
    make
    make test
    sudo make install
    make check

# Failed tests

Two tests fail identically (and harmlessly) as they did for [Ruby 1.8.4](/wiki/Ruby_1.8.4) (see "[Building and installing Ruby 1.8.4 on Red Hat Enterprise Linux ES 3](/wiki/Building_and_installing_Ruby_1.8.4_on_Red_Hat_Enterprise_Linux_ES_3)"). I also found that if I ran the tests as root (probably a silly idea), four more tests failed, but they seem harmless enough and probably only arise because the tests appear to have been written under the assumption that they won't be run with root privileges:

      1) Failure:
    test_delete(TestDBM) [./dbm/test_dbm.rb:332]:
    <DBMError> exception expected but none was thrown.

      2) Failure:
    test_delete(TestGDBM) [./gdbm/test_gdbm.rb:442]:
    <GDBMError> exception expected but none was thrown.

      3) Failure:
    test_s_open_error(TestGDBM) [./gdbm/test_gdbm.rb:200]:
    <Errno::EACCES> exception expected but was
    Class: <Errno::EAGAIN>
    Message: <"Resource temporarily unavailable - tmptest_gdbm">
    ---Backtrace---
    ./gdbm/test_gdbm.rb:201:in `open'
    ./gdbm/test_gdbm.rb:201:in `test_s_open_error'
    ./gdbm/test_gdbm.rb:200:in `test_s_open_error'
    ---------------

      6) Failure:
    test_s_open_error(TestSDBM) [./sdbm/test_sdbm.rb:123]:
    <Errno::EACCES> exception expected but none was thrown.

# See also

-   [Building and installing Ruby 1.8.4 on Red Hat Enterprise Linux ES 3](/wiki/Building_and_installing_Ruby_1.8.4_on_Red_Hat_Enterprise_Linux_ES_3)
-   [Building and installing Ruby 1.8.5 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.5_on_Mac_OS_X_Tiger)
-   Release announcement: <http://www.ruby-lang.org/en/news/2006/08/29/ruby-1-8-5-released/>
-   Change summary: <http://eigenclass.org/hiki.rb?ruby+1.8.5+changelog>
