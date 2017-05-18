---
tags: ruby red.hat updates wiki
cache_breaker: 1
---

# Note

These notes are superseded by the article, "[Building and installing Ruby 1.8.5 on Red Hat Enterprise Linux ES 3](/wiki/Building_and_installing_Ruby_1.8.5_on_Red_Hat_Enterprise_Linux_ES_3)".

# Build

    wget ftp://ftp.ruby-lang.org/pub/ruby/ruby-1.8.4.tar.gz
    tar zxvf ruby-1.8.4.tar.gz
    cd ruby-1.8.4
    ./configure
    make
    make test
    sudo make install
    make check

# Failed tests

      1) Failure:
    test_s_open_no_create(TestGDBM) [./gdbm/test_gdbm.rb:94]:
    <nil> expected but was
    <#<GDBM:0xb6be0490>>.

The source code for the `test_gdbm.rb` file notes that:

    # this test is failed on libgdbm 1.8.0

And the version of libgdbm installed on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) ES release 3 (Taroon Update 8) is indeed `gdbm-1.8.0-20` so I believe the message is probably harmless.

      2) Failure:
    test_verify(OpenSSL::TestX509Store) [./openssl/test_x509store.rb:169]:
    This test is expected to be success with OpenSSL 0.9.7c or later.
    <true> expected but was
    <false>.

    1356 tests, 15391 assertions, 2 failures, 0 errors
    make: *** [test-all] Error 1

It's possible that this second test fails because of the version of OpenSSL installed on the server; `openssl-0.9.7a-33.17`, which is up-to-date with ES release 3 (Taroon Update 8) of [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux). I believe it is probably a harmless warning, although I can't find any confirmation of that fact on the web.

# See also

-   [Building and installing RubyGems 0.9.0 on Red Hat Enterprise Linux ES 3](/wiki/Building_and_installing_RubyGems_0.9.0_on_Red_Hat_Enterprise_Linux_ES_3)
-   [Building and installing Ruby 1.8.4 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.4_on_Mac_OS_X_Tiger)
