---
tags: leopard mysql wiki
cache_breaker: 1
---

Based on instructions found [here](http://akrabat.com/computing/uninstalling-mysql-on-mac-os-x-leopard/):

```shell
$ sudo mysqladmin shutdown
$ sudo rm -rf /usr/local/mysql*
$ sudo rm -rf /Library/StartupItems/MySQLCOM
$ sudo rm -rf /Library/Receipts/mysql*
$ sudo rm -rf /Library/Receipts/MySQL*
$ sudo vim /etc/hostconfig # remove the MYSQLCOM line
```
