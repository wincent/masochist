---
tags: snow.leopard postgresql wiki
cache_breaker: 1
---

I found a bug in Rails 3.0.0.rc, specifically in Action Dispatch, and in order to submit a failing test case I need to install PostgreSQL, unfortunately. (The tests won't run without doing `bundle install` first, and `bundle install` wants the "pg" gem to be on the system, which in turn depends on a working PostgreSQL install and headers.)

```shell
$ wget http://wwwmaster.postgresql.org/redir/149/h/source/v8.4.4/postgresql-8.4.4.tar.bz2
$ wget http://wwwmaster.postgresql.org/redir/149/h/source/v8.4.4/postgresql-8.4.4.tar.bz2.md5
$ cat postgresql-8.4.4.tar.bz2.md5 
$ md5 postgresql-8.4.4.tar.bz2
$ tar xjvf postgresql-8.4.4.tar.bz2
$ cd postgresql-8.4.4
$ ./configure
$ make
$ sudo make install
$ OLDPATH=$PATH
$ export PATH=/usr/local/pgsql/bin:$PATH
$ sudo gem install pg
$ export PATH=$OLDPATH
```
