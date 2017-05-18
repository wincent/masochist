---
tags: mysql snow.leopard wiki
---

Unlike last time (see "[Installing MySQL 5.0.85 on Mac OS X 10.6 Snow Leopard](/wiki/Installing_MySQL_5.0.85_on_Mac_OS_X_10.6_Snow_Leopard)"), there are now binary builds available for [Snow Leopard](/wiki/Snow_Leopard) on [the MySQL downloads page](http://dev.mysql.com/downloads/mysql/5.1.html).

I chose the "Mac OS X ver. 10.6 (x86, 64-bit), Compressed TAR Archive" option, currently `mysql-5.1.45-osx10.6-x86_64.tar.gz`, seeing as I can't find any 5.0-series on the official site (I would prefer to use the 5.0 series seeing as that is what is currently installed on the remote server).

See the downloads page for your local mirror, but in my case I used one from Portugal:

```shell
$ wget http://mysql.nfsi.pt/Downloads/MySQL-5.1/mysql-5.1.45-osx10.6-x86_64.tar.gz
$ cd /usr/local
$ sudo sh -c 'gunzip < ~/trabajo/vendor/mysql/mysql-5.1.45-osx10.6-x86_64.tar.gz | tar xvf -'
$ sudo chown -R mysql:mysql mysql-5.1.45-osx10.6-x86_64
$ sudo ln -s mysql-5.1.45-osx10.6-x86_64 mysql
$ sudo mysql/scripts/mysql_install_db --user=mysql
$ cd mysql
$ sudo scripts/mysql_install_db --user=mysql
$ sudo chown -R root .
$ sudo chown -R mysql data
```

# The "mysql" [RubyGem](/wiki/RubyGem)

This gem is notoriously tricky to build. In the past I've had problems with it, so the last time I built it I was quite surprised to see that all that as needed was a simple `sudo gem install mysql`.

This time, however, the gem built using `sudo gem install mysql` was not usable and I had to resort to:

```shell
$ sudo env ARCHFLAGS='-arch i386 -arch x86_64' gem install mysql
```
