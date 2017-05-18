---
tags: red.hat mysql wiki
---

# Downloading

Locate the appropriate RPMs in the section, "Red Hat Enterprise Linux 3 RPM (x86) downloads", at <http://dev.mysql.com/downloads/mysql/4.1.html>.

    mkdir mysql-4.1.21
    cd mysql-4.1.21
    wget \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-server-standard-4.1.21-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-client-standard-4.1.21-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-shared-compat-4.1.21-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-devel-standard-4.1.21-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-standard-debuginfo-4.1.21-0.rhel3.i386.rpm/from/http://mysql.rediris.es/

# Installing

Perform a test run:

    rpm -Uvh --test *.rpm

This failed because of faulty packaging (missing files) in one of the RPMs (see below), but I originally though it was because of changes made to the system in the last major update (see "[Red Hat kernel-2.4.21-40.EL to kernel-2.4.21-47.EL upgrade notes](/wiki/Red_Hat_kernel-2.4.21-40.EL_to_kernel-2.4.21-47.EL_upgrade_notes)"):

    warning: MySQL-client-standard-4.1.21-0.rhel3.i386.rpm: V3 DSA signature: NOKEY, key ID 5072e1f5
    error: Failed dependencies:
            libmysqlclient.so.10 is needed by (installed) mod_auth_mysql-20030510-2.ent
            libmysqlclient.so.10 is needed by (installed) libdbi-dbd-mysql-0.6.5-5
            libmysqlclient.so.10 is needed by (installed) MySQL-python-0.9.1-6
            libmysqlclient.so.10 is needed by (installed) MyODBC-2.50.39-12.1
            libmysqlclient.so.10 is needed by (installed) php-mysql-4.3.2-33.ent
            libmysqlclient.so.10 is needed by (installed) perl-DBD-MySQL-2.1021-4.EL3

I thought, however, that this would not be a problem because I was going to be installing the compatibility versions of the shared client libraries; see the partial output of `rpm --query --info --package MySQL-shared-compat-4.1.21-0.rhel3.i386.rpm`:

    This package includes the shared libraries for both MySQL %{version3},
    MySQL %{version40} as well as MySQL 4.1.21.
    Install this package instead of "MySQL-shared", if you have applications
    installed that are dynamically linked against older versions of the MySQL
    client library but you want to upgrade to MySQL 4.1.xx without breaking the
    library dependencies.

Proceed with the installation:

    sudo service httpd stop
    sudo service mysql stop
    sudo rpm -Uvh --nodeps *.rpm
    sudo service httpd start

# Disaster recovery

[Apache](/wiki/Apache) refuses to start:

    Starting httpd: Syntax error on line 6 of /etc/httpd/conf.d/auth_mysql.conf:
    Cannot load /etc/httpd/modules/mod_auth_mysql.so into server: libmysqlclient.so.10: cannot open shared object file: No such file or directory

Sure enough, the required compatibility library does not exist:

    $ ls /usr/lib | grep mysql
    libmysqlclient_r.so@
    libmysqlclient_r.so.14@
    libmysqlclient_r.so.14.0.0*
    libmysqlclient.so@
    libmysqlclient.so.14@
    libmysqlclient.so.14.0.0*

Inspect the supplied RPM and verify that it is incomplete:

    $ rpm -q --dump --package MySQL-shared-compat-4.1.21-0.rhel3.i386.rpm 
    warning: MySQL-shared-compat-4.1.21-0.rhel3.i386.rpm: V3 DSA signature: NOKEY, key ID 5072e1f5
    /usr/lib/libmysqlclient.so 24 1153391670 00000000000000000000000000000000 0120777 root root 0 0 1793 libmysqlclient.so.14.0.0
    /usr/lib/libmysqlclient.so.14 24 1153391670 00000000000000000000000000000000 0120777 root root 0 0 2560 libmysqlclient.so.14.0.0
    /usr/lib/libmysqlclient.so.14.0.0 1174404 1153391671 042ee1c839ea36cbdb8c322319b2880b 0100755 root root 0 0 1792 X
    /usr/lib/libmysqlclient_r.so 26 1153391670 00000000000000000000000000000000 0120777 root root 0 0 18692 libmysqlclient_r.so.14.0.0
    /usr/lib/libmysqlclient_r.so.14 26 1153391670 00000000000000000000000000000000 0120777 root root 0 0 18700 libmysqlclient_r.so.14.0.0
    /usr/lib/libmysqlclient_r.so.14.0.0 1182664 1153391671 a7dbf18b56a1b1f6313d954d2d63398a 0100755 root root 0 0 0 X

Try downloading the 5.0.x RPM and see if it contains the missing file:

    $ wget http://dev.mysql.com/get/Downloads/MySQL-5.0/MySQL-shared-compat-5.0.23-0.rhel3.i386.rpm/from/http://mysql.rediris.es/
    $ rpm -q --dump --package MySQL-shared-compat-5.0.23-0.rhel3.i386.rpm 
    warning: MySQL-shared-compat-5.0.23-0.rhel3.i386.rpm: V3 DSA signature: NOKEY, key ID 5072e1f5
    /usr/lib/libmysqlclient.so 24 1152109532 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient.so.15.0.0
    /usr/lib/libmysqlclient.so.14 24 1152109532 00000000000000000000000000000000 0120777 root root 0 0 12549 libmysqlclient.so.14.0.0
    /usr/lib/libmysqlclient.so.14.0.0 1174404 1152109533 3321ec4c92a8aa37869f45ae461d6a0b 0100755 root root 0 0 12552 X
    /usr/lib/libmysqlclient.so.15 24 1152109532 00000000000000000000000000000000 0120777 root root 0 0 12550 libmysqlclient.so.15.0.0
    /usr/lib/libmysqlclient.so.15.0.0 1803876 1152109533 0ccae08b7c9af5e54d82c1bf2a18f471 0100755 root root 0 0 17063 X
    /usr/lib/libmysqlclient_r.so 26 1152109532 00000000000000000000000000000000 0120777 root root 0 0 12625 libmysqlclient_r.so.15.0.0
    /usr/lib/libmysqlclient_r.so.14 26 1152109532 00000000000000000000000000000000 0120777 root root 0 0 19746 libmysqlclient_r.so.14.0.0
    /usr/lib/libmysqlclient_r.so.14.0.0 1182664 1152109533 975c049c8d71a123c30392fdb182cf98 0100755 root root 0 0 19757 X
    /usr/lib/libmysqlclient_r.so.15 26 1152109532 00000000000000000000000000000000 0120777 root root 0 0 12624 libmysqlclient_r.so.15.0.0
    /usr/lib/libmysqlclient_r.so.15.0.0 1809768 1152109533 9677e769962541215095f661925ea0ce 0100755 root root 0 0 12551 X

Confirm on the [downloads page](http://dev.mysql.com/downloads/mysql/4.1.html) that it appears that MySQL has shipped faulty compatibility RPMs for all platforms (note that the file sizes for compatibility and non-compatibility variants are the same; the compatibility variants should be larger).

Do an emergency rollback to version 4.1.20:

    $ mkdir mysql-4.1.20
    $ cd mysql-4.1.20
    $ wget \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-server-standard-4.1.20-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-client-standard-4.1.20-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-shared-compat-4.1.20-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-devel-standard-4.1.20-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-standard-debuginfo-4.1.20-0.rhel3.i386.rpm/from/http://mysql.rediris.es/
    $ sudo rpm -Uvh --force *.rpm
    $ sudo service httpd start

This is the first time I've ever been bitten by a problem with a MySQL-produced package. Fortunately it only cost me a few minutes of downtime, and some stress. Have filed a bug report with MySQL; see:

-   <http://bugs.mysql.com/21341>

## Update

As of 4 August 2006 the bug is marked as fixed.

    $ wget \
    http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-shared-compat-4.1.21-1.rhel3.i386.rpm/from/http://mysql.rediris.es/
    $ rm MySQL-shared-compat-4.1.21-0.rhel3.i386.rpm
    $ for FILE in *.rpm; do rpm -Uvh --test "${FILE}"; done
    $ sudo service httpd stop && \
      sudo service mysql stop && \
      sudo rpm -Uvh --nodeps *.rpm && \
      sudo service httpd start

The second time around the upgrade went much more smoothly. Service downtime was less than 60 seconds from start to finish.

# Post-upgrade checks

Check that [Apache](/wiki/Apache) and [MySQL](/wiki/MySQL) is running:

    sudo service --status-all | grep httpd
    ps auxww | grep -i mysql

Check that website works:

-   PHP + MySQL still works?: <http://forums.wincent.com/>
-   Perl + MySQL still works?: <http://bugs.wincent.com/>
-   Python + Apache still works?: <http://lists.wincent.com/>
-   Regular HTTP still works?: <http://wincent.com/>
-   HTTPS still works?: <https://secure.wincent.com/a/store/>

Check to see versions of installed RPMs:

    rpm -qa | grep -i mysql

Check that [MySQL](/wiki/MySQL) is still configured to start automatically at boot:

    sudo chkconfig --list | grep -i mysql

# See also

-   [Upgrading MySQL on Red Hat Enterprise Linux](/wiki/Upgrading_MySQL_on_Red_Hat_Enterprise_Linux)
