---
tags: gems ruby bundler mariadb
---

I caused some problems for myself in an app by upgrading my Brew-managed copy of MariaDB:

    Incorrect MySQL client library version!
    This gem was compiled for 5.5.36-MariaDB but the client library is 10.0.10-MariaDB. (RuntimeError)

It was hard to get the mysql2 gem rebuilt and linking against the new library:

```shell
$ bundle show mysql2
$ cd ~/code/project/.bundle/ruby/2.1.0/gems/mysql2-0.3.15
$ rm -r mysql2-0.3.1*
$ cd ../specifications
$ rm mysql2*
$ gem uninstall mysql2
$ bundle config build.mysql2 --with-mysql-config=/usr/local/Cellar/mariadb/10.0.10/bin/mysql_config
```
