---
tags: mysql wiki
---

# Example: one local [OS](/wiki/OS) partition to another

In this example we have a [Rails](/wiki/Rails) application that has three databases — development, production and test — on a volume with [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) installed. We want a textual dump of these that we can then import on a different volume on the same machine, but with [Snow Leopard](/wiki/Snow_Leopard) installed.

Boot into [Leopard](/wiki/Leopard) and dump:

```shell
$ mysqldump -u root app_ development > dev.sql
$ mysqldump -u root app_production > prod.sql
$ mysqldump -u root app_test > test.sql
```

Then, booted into the second [Snow Leopard](/wiki/Snow_Leopard), create the target databases:

```shell
$ mysql -u root -e "CREATE DATABASE app_development CHARACTER SET 'UTF8';"
$ mysql -u root -e "CREATE DATABASE app_production CHARACTER SET 'UTF8';"
$ mysql -u root -e "CREATE DATABASE app_test CHARACTER SET 'UTF8';"
```

And import the tables and data:

```shell
$ mysql -u root app_development < dev.sql
$ mysql -u root app_production < prod.sql 
$ mysql -u root app_test < test.sql
```
