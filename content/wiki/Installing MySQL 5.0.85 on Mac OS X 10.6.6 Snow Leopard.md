---
tags: mysql snow.leopard os.x wiki
---

As I am using this for doing [Rails](/wiki/Rails) development which on the remote server is running [MySQL](/wiki/MySQL) 5.0 I decided to install the same version on my local machine, building from source seeing as there is no binary installer for version 5.0 and [Snow Leopard](/wiki/Snow_Leopard).

```shell
$ curl -O http://mysql.he.net/Downloads/MySQL-5.0/mysql-5.0.92.tar.gz
$ tar xzvf mysql-5.0.92.tar.gz 
$ cd mysql-5.0.92
$ ./configure 
$ make
$ make test # bails due to a failure, hopefully not too serious
$ sudo make install
$ sudo mysql_install_db --user=mysql
```

Note that as I am doing this development within a specific Rails application (with the development database running locally and stored inside the application's `tmp` directory, and the test database in a throwaway ramdisk) I don't really need to do any of the usual setup. In fact, even the `mysql_install_db` above is probably unnecessary. For an example of an installation where I do do the additional set-up see also:

-   [Installing MySQL 5.0.85 on Mac OS X 10.6 Snow Leopard](/wiki/Installing_MySQL_5.0.85_on_Mac_OS_X_10.6_Snow_Leopard)
-   [Installing MySQL 5.1.45 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_MySQL_5.1.45_on_Mac_OS_X_10.6.2_Snow_Leopard)
