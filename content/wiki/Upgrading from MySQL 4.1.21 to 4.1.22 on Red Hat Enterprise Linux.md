---
tags: red.hat mysql wiki
---

# The upgrade

-   Download: <http://dev.mysql.com/downloads/mysql/4.1.html>

<!-- -->

    mkdir mysql-4.1.22
    cd mysql-4.1.22
    wget \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-server-standard-4.1.22-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-client-standard-4.1.22-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-shared-standard-4.1.22-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-shared-compat-4.1.22-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-devel-standard-4.1.22-0.rhel3.i386.rpm/from/http://mysql.rediris.es/ \
      http://dev.mysql.com/get/Downloads/MySQL-4.1/MySQL-standard-debuginfo-4.1.22-0.rhel3.i386.rpm/from/http://mysql.rediris.es/

-   Check [MD5](/wiki/MD5) checksums:

<!-- -->

    openssl md5 *

-   The standard shared libraries won't be installed, so stick them elsewhere:

<!-- -->

    mkdir not-installed
    mv MySQL-shared-standard-4.1.22-0.rhel3.i386.rpm not-installed/

-   Bearing in mind the missing shared compatibility libraries in the [last upgrade](/wiki/Upgrading_from_MySQL_4.1.20_to_4.1.21_on_Red_Hat_Enterprise_Linux), double-check the contents of the [RPM](/wiki/RPM):

<!-- -->

    rpm -q --dump --package MySQL-shared-compat-4.1.22-0.rhel3.i386.rpm

Yields:

    /usr/lib/libmysqlclient.so 24 1162837883 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient.so.14.0.0
    /usr/lib/libmysqlclient.so.10 24 1162837883 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient.so.10.0.0
    /usr/lib/libmysqlclient.so.10.0.0 224606 1162837883 579c6fecfad48cb3e8748811026f4890 0100755 root root 0 0 0 X
    /usr/lib/libmysqlclient.so.12 24 1162837883 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient.so.12.0.0
    /usr/lib/libmysqlclient.so.12.0.0 251559 1162837883 2fae279de1a3929b178d89333103eacc 0100755 root root 0 0 0 X
    /usr/lib/libmysqlclient.so.14 24 1162837883 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient.so.14.0.0
    /usr/lib/libmysqlclient.so.14.0.0 1174788 1162837883 ba0a9fc64a8f0d2e66f5ffb0ddd7ead1 0100755 root root 0 0 0 X
    /usr/lib/libmysqlclient_r.so 26 1162837883 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient_r.so.14.0.0
    /usr/lib/libmysqlclient_r.so.10 26 1162837883 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient_r.so.10.0.0
    /usr/lib/libmysqlclient_r.so.10.0.0 230560 1162837883 f358f523cb4a364eb8105d9a0f49f943 0100755 root root 0 0 0 X
    /usr/lib/libmysqlclient_r.so.12 26 1162837883 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient_r.so.12.0.0
    /usr/lib/libmysqlclient_r.so.12.0.0 259501 1162837883 ab26ebef4759527211545190ccedebb5 0100755 root root 0 0 0 X
    /usr/lib/libmysqlclient_r.so.14 26 1162837883 00000000000000000000000000000000 0120777 root root 0 0 0 libmysqlclient_r.so.14.0.0
    /usr/lib/libmysqlclient_r.so.14.0.0 1182664 1162837883 722f2db76712ee48801b36c0bbe052f7 0100755 root root 0 0 0 X 

So it appears that they are all there.

-   Perform a test run:

<!-- -->

    for RPM in $(ls *.rpm); do rpm -Uvh --test "$RPM"; done

No problems:

    warning: MySQL-client-standard-4.1.22-0.rhel3.i386.rpm: V3 DSA signature: NOKEY, key ID 5072e1f5
    Preparing...                ########################################### [100%]
    warning: MySQL-devel-standard-4.1.22-0.rhel3.i386.rpm: V3 DSA signature: NOKEY, key ID 5072e1f5
    Preparing...                ########################################### [100%]
    warning: MySQL-server-standard-4.1.22-0.rhel3.i386.rpm: V3 DSA signature: NOKEY, key ID 5072e1f5
    Preparing...                ########################################### [100%]
    warning: MySQL-shared-compat-4.1.22-0.rhel3.i386.rpm: V3 DSA signature: NOKEY, key ID 5072e1f5
    Preparing...                ########################################### [100%]
    warning: MySQL-standard-debuginfo-4.1.22-0.rhel3.i386.rpm: V3 DSA signature: NOKEY, key ID 5072e1f5
    Preparing...                ########################################### [100%]

-   Perform the actual upgrade:

<!-- -->

    sudo service httpd stop
    sudo service mysql stop
    sudo rpm -Uvh --nodeps *.rpm
    sudo service httpd start

Downtime was less than 60 seconds.

# Post-upgrade checks

-   Confirm that Apache and MySQL are running:

<!-- -->

    sudo service --status-all | grep httpd
    ps auxww | grep -i mysql

-   Try connecting to MySQL from the command line
-   Check that website works:
    -   PHP + MySQL still works?: <http://forums.wincent.com/>
    -   Perl + MySQL still works?: <http://bugs.wincent.com/>
    -   Python + Apache still works?: <http://lists.wincent.com/>
    -   Regular HTTP still works?: <http://wincent.com/>
    -   HTTPS still works?: <https://secure.wincent.com/a/store/>
-   Check to see versions of installed RPMs:

<!-- -->

    rpm -qa | grep -i mysql

-   Check that MySQL is still configured to start automatically at boot:

<!-- -->

    sudo chkconfig --list | grep -i mysql

# See also

-   [Upgrading MySQL on Red Hat Enterprise Linux](/wiki/Upgrading_MySQL_on_Red_Hat_Enterprise_Linux)
