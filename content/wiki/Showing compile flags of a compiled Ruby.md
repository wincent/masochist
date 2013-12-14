---
tags: ruby
cache_breaker: 1
---

```shell
$ ruby -r rbconfig -e 'puts RbConfig::CONFIG["configure_args"]'
```

Sample output:

    '--prefix=/usr' '--mandir=/usr/share/man' '--infodir=/usr/share/info' '--disable-dependency-tracking' '--prefix=/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr' '--sysconfdir=/Library/Ruby/Site' '--with-sitedir=/Library/Ruby/Site' '--enable-shared' '--with-arch=x86_64,i386' 'ac_cv_func_getcontext=no' 'ac_cv_func_setcontext=no' 'ac_cv_c_compiler_gnu=no' 'rb_cv_pri_prefix_long_long=ll' 'CC=xcrun clang' 'CFLAGS= -g -Os -pipe ' 'LDFLAGS= ' 'CXX=xcrun clang++' 'CXXFLAGS= -g -Os -pipe '

Slightly modified from: <https://www.ruby-forum.com/topic/211337>
