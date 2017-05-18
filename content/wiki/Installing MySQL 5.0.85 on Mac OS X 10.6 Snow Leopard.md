---
tags: mysql snow.leopard wiki
cache_breaker: 1
---

The official [downloads page](http://dev.mysql.com/downloads/mysql/5.0.html) doesn't yet list any binary distributions for [Snow Leopard](/wiki/Snow_Leopard), so before trying to install a [Leopard](/wiki/Leopard) binary distribution I will see if it builds cleanly from source.

```shell
$ curl -O http://mysql.rediris.es/Downloads/MySQL-5.0/mysql-5.0.85.tar.gz
$ tar xzvf mysql-5.0.85.tar.gz 
$ cd mysql-5.0.85
$ ./configure --prefix=/usr/local/mysql
$ make
$ make test
```

Unfortunately one of the tests fails:

    view                           [ fail ]

    --- /Users/wincent/trabajo/vendor/mysql/mysql-5.0.85/mysql-test/r/view.result	2009-08-11 14:18:01.000000000 +0300
    +++ /Users/wincent/trabajo/vendor/mysql/mysql-5.0.85/mysql-test/r/view.reject	2009-08-31 15:39:36.000000000 +0300
    @@ -3659,6 +3659,51 @@
     
     # -- End of test case for Bug#34337.
     
    +# -----------------------------------------------------------------
    +# -- Bug#35193 VIEW query is rewritten without "FROM DUAL",
    +# --           causing syntax error
    +# -----------------------------------------------------------------
    +
    +CREATE VIEW v1 AS SELECT 1 FROM DUAL WHERE 1;
    +
    +SELECT * FROM v1;
    +1
    +1
    +SHOW CREATE TABLE v1;
    +View	Create View
    +v1	CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v1` AS select 1 AS `1` from DUAL  where 1
    +
    +DROP VIEW v1;
    +
    +# -- End of test case for Bug#35193.
    +
    +CREATE VIEW v1 AS SELECT 1;
    +DROP VIEW v1;
    +CREATE TABLE t1 (c1 INT PRIMARY KEY, c2 INT, INDEX (c2));
    +INSERT INTO t1 VALUES (1,1), (2,2), (3,3);
    +SELECT * FROM t1 USE INDEX (PRIMARY) WHERE c1=2;
    +c1	c2
    +2	2
    +SELECT * FROM t1 USE INDEX (c2) WHERE c2=2;
    +c1	c2
    +2	2
    +CREATE VIEW v1 AS SELECT c1, c2 FROM t1;
    +SHOW INDEX FROM v1;
    +Table	Non_unique	Key_name	Seq_in_index	Column_name	Collation	Cardinality	Sub_part	Packed	NulIndex_type	Comment
    +SELECT * FROM v1 USE INDEX (PRIMARY) WHERE c1=2;
    +ERROR HY000: Key 'PRIMARY' doesn't exist in table 'v1'
    +SELECT * FROM v1 FORCE INDEX (PRIMARY) WHERE c1=2;
    +ERROR HY000: Key 'PRIMARY' doesn't exist in table 'v1'
    +SELECT * FROM v1 IGNORE INDEX (PRIMARY) WHERE c1=2;
    +ERROR HY000: Key 'PRIMARY' doesn't exist in table 'v1'
    +SELECT * FROM v1 USE INDEX (c2) WHERE c2=2;
    +ERROR HY000: Key 'c2' doesn't exist in table 'v1'
    +SELECT * FROM v1 FORCE INDEX (c2) WHERE c2=2;
    +ERROR HY000: Key 'c2' doesn't exist in table 'v1'
    +SELECT * FROM v1 IGNORE INDEX (c2) WHERE c2=2;
    +ERROR HY000: Key 'c2' doesn't exist in table 'v1'
    +DROP VIEW v1;
    +DROP TABLE t1;
     # 
     # [/issues/45806 Bug #45806] crash when replacing into a view with a join!
     # 
    @@ -3771,51 +3816,6 @@
     DROP TABLE t1;
     # -- End of test case for Bug#45806
     # -----------------------------------------------------------------
    -# -- Bug#35193 VIEW query is rewritten without "FROM DUAL",
    -# --           causing syntax error
    -# -----------------------------------------------------------------
    -
    -CREATE VIEW v1 AS SELECT 1 FROM DUAL WHERE 1;
    -
    -SELECT * FROM v1;
    -1
    -1
    -SHOW CREATE TABLE v1;
    -View	Create View
    -v1	CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v1` AS select 1 AS `1` from DUAL  where 1
    -
    -DROP VIEW v1;
    -
    -# -- End of test case for Bug#35193.
    -
    -CREATE VIEW v1 AS SELECT 1;
    -DROP VIEW v1;
    -CREATE TABLE t1 (c1 INT PRIMARY KEY, c2 INT, INDEX (c2));
    -INSERT INTO t1 VALUES (1,1), (2,2), (3,3);
    -SELECT * FROM t1 USE INDEX (PRIMARY) WHERE c1=2;
    -c1	c2
    -2	2
    -SELECT * FROM t1 USE INDEX (c2) WHERE c2=2;
    -c1	c2
    -2	2
    -CREATE VIEW v1 AS SELECT c1, c2 FROM t1;
    -SHOW INDEX FROM v1;
    -Table	Non_unique	Key_name	Seq_in_index	Column_name	Collation	Cardinality	Sub_part	Packed	NulIndex_type	Comment
    -SELECT * FROM v1 USE INDEX (PRIMARY) WHERE c1=2;
    -ERROR HY000: Key 'PRIMARY' doesn't exist in table 'v1'
    -SELECT * FROM v1 FORCE INDEX (PRIMARY) WHERE c1=2;
    -ERROR HY000: Key 'PRIMARY' doesn't exist in table 'v1'
    -SELECT * FROM v1 IGNORE INDEX (PRIMARY) WHERE c1=2;
    -ERROR HY000: Key 'PRIMARY' doesn't exist in table 'v1'
    -SELECT * FROM v1 USE INDEX (c2) WHERE c2=2;
    -ERROR HY000: Key 'c2' doesn't exist in table 'v1'
    -SELECT * FROM v1 FORCE INDEX (c2) WHERE c2=2;
    -ERROR HY000: Key 'c2' doesn't exist in table 'v1'
    -SELECT * FROM v1 IGNORE INDEX (c2) WHERE c2=2;
    -ERROR HY000: Key 'c2' doesn't exist in table 'v1'
    -DROP VIEW v1;
    -DROP TABLE t1;
    -# -----------------------------------------------------------------
     # -- Bug#40825: Error 1356 while selecting from a view 
     # --            with a "HAVING" clause though query works
     # -----------------------------------------------------------------

    mysqltest: Result content mismatch

    Aborting: view failed in default mode. 
    To continue, re-run with '--force'.
    Stopping All Servers
    make: *** [test-ns] Error 1

So the [bug in question](http://bugs.mysql.com/bug.php?id=40825) was supposedly fixed in 5.0.83, but the test claims that it wasn't. `make` obviously doesn't understand the `--force` option, so I can't re-run.

Seeing as this is not the production server and only a development workstation, will try installing anyway and see if it works:

```shell
$ sudo make install
$ cd /usr/local/mysql
$ sudo chown -R mysql:mysql .
$ sudo bin/mysql_install_db --user=mysql
$ sudo chown -R root:wheel .
$ sudo chown -R mysql:mysql var
$ sudo -u mysql -b bin/mysqld_safe 
$ mysql
```

At first I was not sure if this actually worked properly because of warnings issued on running `mysql_install_db`:

    Installing MySQL system tables...
    090831 14:59:44 [Warning] Setting lower_case_table_names=2 because file system for /usr/local/mysql/var/ is case insensitive
    OK
    Filling help tables...
    090831 14:59:45 [Warning] Setting lower_case_table_names=2 because file system for /usr/local/mysql/var/ is case insensitive
    OK

Because while the tables appear to be present on disk:

```shell
$ sudo ls -laF /usr/local/mysql/var
total 40976
drwx------   9 _mysql  _mysql       306 31 ago 15:07 ./
drwxr-xr-x  10 root    wheel        340 31 ago 14:51 ../
-rw-rw----   1 _mysql  _mysql      1842 31 ago 15:07 host.local.err
-rw-rw----   1 _mysql  _mysql         6 31 ago 15:07 host.local.pid
-rw-rw----   1 _mysql  _mysql   5242880 31 ago 15:07 ib_logfile0
-rw-rw----   1 _mysql  _mysql   5242880 31 ago 14:52 ib_logfile1
-rw-rw----   1 _mysql  _mysql  10485760 31 ago 15:07 ibdata1
drwx------  53 _mysql  _mysql      1802 31 ago 14:51 mysql/
drwx------   2 _mysql  _mysql        68 31 ago 14:51 test/
```

There is no `mysql` database listed when logged in using the client:

    mysql> show databases;
    +--------------------+
    | Database           |
    +--------------------+
    | information_schema | 
    | test               | 
    +--------------------+
    2 rows in set (0,00 sec)

Looks like the info formerly held in the `mysql` database is now held in `information_schema`, despite the filenames on disk:

    mysql> use information_schema;
    Reading table information for completion of table and column names
    You can turn off this feature to get a quicker startup with -A

    Database changed
    mysql> show tables;
    +---------------------------------------+
    | Tables_in_information_schema          |
    +---------------------------------------+
    | CHARACTER_SETS                        | 
    | COLLATIONS                            | 
    | COLLATION_CHARACTER_SET_APPLICABILITY | 
    | COLUMNS                               | 
    | COLUMN_PRIVILEGES                     | 
    | KEY_COLUMN_USAGE                      | 
    | PROFILING                             | 
    | ROUTINES                              | 
    | SCHEMATA                              | 
    | SCHEMA_PRIVILEGES                     | 
    | STATISTICS                            | 
    | TABLES                                | 
    | TABLE_CONSTRAINTS                     | 
    | TABLE_PRIVILEGES                      | 
    | TRIGGERS                              | 
    | USER_PRIVILEGES                       | 
    | VIEWS                                 | 
    +---------------------------------------+
    17 rows in set (0,00 sec)
