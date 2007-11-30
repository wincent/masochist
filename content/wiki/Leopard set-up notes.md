---
tags: leopard
---

# Preferences

-   Appearance
    -   Up "Recent items" to 50 each
-   Screensavers
    -   Show clock
-   Spaces (System Preferences crashes)
    -   Enable (2 rows, 2 columns)
    -   Use Control-Option to switch spaces (Control alone is far too common)
-   Accounts
    -   Remove old (Tiger) guest account
    -   Set-up new (Leopard) guest account
-   Sound
    -   Input
        -   Use ambient noise reduction
-   Sharing
    -   Turn off Bluetooth, File sharing
    -   Turn on SSH
-   Software update
    -   Search daily
-   Date and time
    -   Turn on NTP updates

# Developer tools

-   Install Xcode Tools

# Other tools

-   LittleSnitch 2 public beta: <http://obdev.at/products/littlesnitch/public-beta.html>
-   Net Monitor <http://homepage.mac.com/rominar/net4.3.14.dmg>
-   Remove StuffIt "MagicMenu" from login items

# `sudoers`

-   Add self back to sudoers file:

<!-- -->

    su admin_user
    env EDITOR=/usr/bin/nano sudo visudo
    exit

# Set up backups

-   Set up cron job for automated backups of home directory (following instructions in `~/bin/homedir-backup.sh`)

<!-- -->

    sudo crontab -e

-   Confirm set-up:

<!-- -->

    sudo crontab -l

# Building and installing other software

In most cases I already had a copy of the source archive for the latest version still on my hard drive, so I was able to just change to the appropriate directory, re-extract if necessary, and build again.

    cd wget-1.10
    ./configure
    make
    make check
    sudo make install

    cd ../../aee
    tar xzvf aee-2.2.15b.tar.gz 
    cd aee-2.2.15b
    make
    sudo make install

    cd ../../ee
    tar xzvf ee-1.4.6.src.tgz 
    cd easyedit-1.4.6
    make
    sudo make install

    cd ../../ragel
    tar xzvf ragel-5.24.tar.gz
    cd ragel-5.24
    ./configure
    make
    cd test
    ./runtests 
    cd ..
    sudo make install

    # a new version of Doxygen is now available
    cd ../../doxygen
    wget http://ftp.stack.nl/pub/users/dimitri/Doxygen-1.5.4.dmg
    hdiutil attach Doxygen-1.5.4.dmg 
    sudo ditto /Volumes/Doxygen /Applications/Doxygen
    sudo mv /Applications/Doxygen/Doxygen.app /Applications/
    sudo rm -r /Applications/Doxygen
    hdiutil detach `hdiutil info | grep "/Volumes/Doxygen" | awk '{print $1}'`
    wget ftp://ftp.stack.nl/pub/users/dimitri/doxygen_manual-1.5.4.pdf.zip

    cd ../git
    tar xjvf gnupg-1.4.7.tar.bz2 
    cd gnupg-1.4.7
    ./configure
    make
    make check
    sudo make install

    cd ..
    tar xjvf git-1.5.3.4.tar.bz2 
    cd git-1.5.3.4
    make prefix=/usr/local all
    make prefix=/usr/local test
    echo $?
    sudo make prefix=/usr/local install
    cd ..
    sudo tar xjv -C /usr/local/man -f git-manpages-1.5.3.4.tar.bz2

    # now that Git is installed clone the Git repo
    git clone git://git.kernel.org/pub/scm/git/git.git

# [MySQL](/wiki/MySQL)

-   See: <http://dev.mysql.com/doc/refman/5.0/en/installing-source.html>

Get public key from:

-   <http://dev.mysql.com/doc/refman/5.0/en/checking-gpg-signature.html>

<!-- -->

    mkdir mysql
    cd mysql
    wget "http://mysql.rediris.es/Downloads/MySQL-5.0/mysql-5.0.45.tar.gz"
    wget http://dev.mysql.com/Downloads/MySQL-5.0/mysql-5.0.45.tar.gz.asc
    gpg --import mysql_public_key.asc 
    gpg --verify mysql-5.0.45.tar.gz.asc mysql-5.0.45.tar.gz

Unfortunately this wouldn't build in 10.5.0:

    ranlib: archive member: libmysys.a(my_new.o) cputype (7) does not match previous archive members cputype (18) (all members must match)
    ranlib: archive member: libmysys.a(raid.o) cputype (7) does not match previous archive members cputype (18) (all members must match)
    ranlib libmysys.a
    ranlib: archive member: libmysys.a(my_new.o) cputype (7) does not match previous archive members cputype (18) (all members must match)
    ranlib: archive member: libmysys.a(raid.o) cputype (7) does not match previous archive members cputype (18) (all members must match)
    ranlib: for architecture: ppc file: libmysys.a(my_getpagesize.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(my_crc32.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(mf_brkhant.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(my_lockmem.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(my_port.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(my_netware.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(my_largepage.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(my_windac.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(my_access.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(my_libwrap.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(thr_mutex.o) has no symbols
    ranlib: for architecture: ppc file: libmysys.a(thr_rwlock.o) has no symbols
    ranlib: for architecture: i386 file: libmysys.a(my_new.o) has no symbols
    ranlib: for architecture: i386 file: libmysys.a(raid.o) has no symbols
    ranlib: warning for library: libmysys.a for architecture: i386 the table of contents is empty (no object file members in the library define global symbols)
    make[2]: *** [libmysys.a] Error 1
    make[1]: *** [all-recursive] Error 1
    make: *** [all] Error 2

Something seems to have changed in 10.5.1, however, and now the build works:

    ./configure &&
    make &&
    make check &&
    sudo make install

On actually trying to use this build, however, I bombed out as follows:

    touch: /usr/local/var/machine.lan.err: No such file or directory
    chown: /usr/local/var/machine.lan.err: No such file or directory
    Starting mysqld daemon with databases from /usr/local/var
    /usr/local/bin/mysqld_safe: line 380: /usr/local/var/machine.lan.err: No such file or directory
    /usr/local/bin/mysqld_safe: line 386: /usr/local/var/machine.lan.err: No such file or directory
    STOPPING server from pid file /usr/local/var/machine.lan.pid
    tee: /usr/local/var/machine.lan.err: No such file or directory
    071129 20:01:38  mysqld ended
    tee: /usr/local/var/machine.lan.err: No such file or directory

The output of the `./configure --help` reveals the problem:

    Installation directories:
      --prefix=PREFIX         install architecture-independent files in PREFIX
    			  [/usr/local]
      --exec-prefix=EPREFIX   install architecture-dependent files in EPREFIX
    			  [PREFIX]

    By default, `make install' will install all the files in
    `/usr/local/bin', `/usr/local/lib' etc.  You can specify
    an installation prefix other than `/usr/local' using `--prefix',
    for instance `--prefix=$HOME'.

    For better control, use the options below.

    Fine tuning of the installation directories:
      --bindir=DIR           user executables [EPREFIX/bin]
      --sbindir=DIR          system admin executables [EPREFIX/sbin]
      --libexecdir=DIR       program executables [EPREFIX/libexec]
      --datadir=DIR          read-only architecture-independent data [PREFIX/share]
      --sysconfdir=DIR       read-only single-machine data [PREFIX/etc]
      --sharedstatedir=DIR   modifiable architecture-independent data [PREFIX/com]
      --localstatedir=DIR    modifiable single-machine data [PREFIX/var]
      --libdir=DIR           object code libraries [EPREFIX/lib]
      --includedir=DIR       C header files [PREFIX/include]
      --oldincludedir=DIR    C header files for non-gcc [/usr/include]
      --infodir=DIR          info documentation [PREFIX/info]
      --mandir=DIR           man documentation [PREFIX/man]

At this point I have two options:

-   Create the directories that MySQL expects to find, like `PREFIX/var` (in this case that would be `/usr/local/var/`).
-   Rebuild after configuring using `--prefix=/usr/local/mysql` or similar.

In hindsight it would have been better to use a prefix like `/usr/local/mysql` all along and keep all the MySQL files in a single place, and make that place writable by the `mysql` user, but rebuilding now would mean leaving behind all the files previously installed at various points under `/usr/local/`.

As a compromise I decided to make use of as much of the previously installed material as possible:

    sudo mkdir -p /usr/local/var/mysql
    sudo chown mysql:mysql /usr/local/var/mysql
    sudo mkdir -p /usr/local/com/mysql
    sudo chown mysql:mysql /usr/local/com/mysql

    cd path_to_mysql_src_dir
    make clean &&
    ./configure --sharedstatedir=/usr/local/com/mysql \
                --localstatedir=/usr/local/var/mysql &&
    make &&
    make test &&
    sudo make install

It turns out that this still doesn't work:

    $ sudo -b mysqld_safe --log-error=/tmp/foo.log
    Password:
    Starting mysqld daemon with databases from /usr/local/var
    STOPPING server from pid file /usr/local/var/cuzco.lan.pid
    071129 23:26:42  mysqld ended
    $ sudo cat /tmp/foo.log
    071129 23:26:42  mysqld started
    071129 23:26:42 [Warning] Setting lower_case_table_names=2 because file system for /usr/local/var/ is case insensitive
    071129 23:26:42  InnoDB: Operating system error number 13 in a file operation.
    InnoDB: The error means mysqld does not have the access rights to
    InnoDB: the directory.
    InnoDB: File name ./ibdata1
    InnoDB: File operation call: 'create'.
    InnoDB: Cannot continue operation.
    071129 23:26:42  mysqld ended

As you can see, the `--sharedstatedir` and `--localstatedir` configuration options seem to have no effect as MySQL is still looking inside `/usr/local/var/`. Running `mysql_config` prints:

            --cflags         [-I/usr/local/include/mysql]
            --include        [-I/usr/local/include/mysql]
            --libs           [-L/usr/local/lib/mysql -lmysqlclient -lz -lm]
            --libs_r         [-L/usr/local/lib/mysql -lmysqlclient_r -lz -lm]
            --socket         [/tmp/mysql.sock]
            --port           [3306]
            --version        [5.0.45]
            --libmysqld-libs [-L/usr/local/lib/mysql -lmysqld -lz -lm]

So I decided to wipe the slate clean and do it the way MySQL evidently wants me to:

    make --dry-run uninstall
    sudo make uninstall &&
    make clean &&
    ./configure --prefix=/usr/local/mysql &&
    make &&
    make test &&
    sudo make install

After installing, the fun was still not over yet. The output of `sudo -b mysqld_safe --log-error=/tmp/bar.log` was:

    071130 10:48:47  mysqld started
    071130 10:48:47 [Warning] Can't create test file /usr/local/mysql/var/cuzco.lower-test
    071130 10:48:47 [Warning] Can't create test file /usr/local/mysql/var/cuzco.lower-test
    /usr/local/mysql/libexec/mysqld: Can't change dir to '/usr/local/mysql/var/' (Errcode: 2)
    071130 10:48:47 [ERROR] Aborting

    071130 10:48:47 [Note] /usr/local/mysql/libexec/mysqld: Shutdown complete

    071130 10:48:47  mysqld ended

After doing:

    sudo mkdir /usr/local/mysql/var
    sudo chown mysql:mysql /usr/local/mysql/var

The output was:

    071130 10:50:08  mysqld started
    071130 10:50:08 [Warning] Setting lower_case_table_names=2 because file system for /usr/local/mysql/var/ is case insensitive
    InnoDB: The first specified data file ./ibdata1 did not exist:
    InnoDB: a new database to be created!
    071130 10:50:08  InnoDB: Setting file ./ibdata1 size to 10 MB
    InnoDB: Database physically writes the file full: wait...
    071130 10:50:08  InnoDB: Log file ./ib_logfile0 did not exist: new to be created
    InnoDB: Setting log file ./ib_logfile0 size to 5 MB
    InnoDB: Database physically writes the file full: wait...
    071130 10:50:08  InnoDB: Log file ./ib_logfile1 did not exist: new to be created
    InnoDB: Setting log file ./ib_logfile1 size to 5 MB
    InnoDB: Database physically writes the file full: wait...
    InnoDB: Doublewrite buffer not found: creating new
    InnoDB: Doublewrite buffer created
    InnoDB: Creating foreign key constraint system tables
    InnoDB: Foreign key constraint system tables created
    071130 10:50:08  InnoDB: Started; log sequence number 0 0
    071130 10:50:08 [ERROR] Fatal error: Can't open and lock privilege tables: Table 'mysql.host' doesn't exist
    071130 10:50:08  mysqld ended

Which made me realise that this is really a case of user error; failure to read the `INSTALL` documentation. It's been too long since I've done a clean MySQL install. What I really needed to do was:

    cd /usr/local/mysql
    sudo chown -R mysql:mysql .
    sudo -u mysql bin/mysql_install_db --user=mysql
    sudo chown -R root:wheel .
    sudo chown -R mysql:mysql var

Now things work on starting the server:

    sudo -u mysql -b mysqld_safe

For more notes on installing MySQL on Leopard, see:

-   <http://hivelogic.com/narrative/articles/installing-mysql-on-mac-os-x>

# Install and update [RubyGems](/wiki/RubyGems)

    sudo gem install rspec
    sudo gem install fastri
    sudo gem install ZenTest
    sudo gem install rails
    sudo gem install mongrel
    sudo gem install haml
    sudo gem install walrus
    sudo gem install ruby-debug
    sudo gem install rcov
    fastri-server -b

# JUnit

    wget http://switch.dl.sourceforge.net/sourceforge/junit/junit4.4.zip
    unzip junit4.4.zip 
    sudo mv junit4.4 /usr/local
    cd /usr/local
    sudo ln -s junit4.4 junit
    cd junit
    sudo ln -s junit-4.4.jar junit.jar
    export CLASSPATH="/usr/local/junit/junit.jar:/usr/local/junit"
    java org.junit.runner.JUnitCore org.junit.tests.AllTests

# ANTLR

[ANTLR](/wiki/ANTLR) no longer builds under [Leopard](/wiki/Leopard):

    BUILD FAILED
    /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/build.xml:102: The following error occurred while executing this line:
    /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/build.xml:55: Problem: failed to create task or type antlr
    Cause: the class org.apache.tools.ant.taskdefs.optional.ANTLR was not found.
            This looks like one of Ant's optional components.
    Action: Check that the appropriate optional JAR exists in
            -/usr/share/ant/lib
            -/Users/wincent/.ant/lib
            -a directory added on the command line with the -lib argument

Diagnosis:

    ant -version
    Apache Ant version 1.7.0 compiled on September 23 2007

Inspection reveal the system has an `ant-antlr-1.7.0.pom`, but no `ant-antlr.jar`:

    wget http://ftp.udc.es/apache-dist/ant/binaries/apache-ant-1.7.0-bin.tar.bz2
    tar xjvf apache-ant-1.7.0-bin.tar.bz2 
    sudo cp apache-ant-1.7.0/lib/ant-antlr.jar /usr/share/ant/lib/

After that it builds fine.
