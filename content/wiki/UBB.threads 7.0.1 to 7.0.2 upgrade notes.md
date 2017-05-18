---
tags: ubb.threads wiki
---

-   Log in to control panel and close board
-   Backup the database:

<!-- -->

    mysqldump --opt -u USERNAME -p -h localhost DATABASE_NAME | \
      bzip2 -c > BACKUP_FILE.sql.bz2

-   Backup the installed files:

<!-- -->

    sudo tar -c -v path_to_forums_install > ~/BACKUP.tar
    gzip --verbose -9 ~/BACKUP.tar

-   Download new version from Members Area: <http://www.infopop.com/members/members.php>
-   Apply fix for [bug](http://www.ubbcentral.com/forums/ubbthreads.php/ubb/showflat/Number/168866/page/1):

Line 14 of `scripts/getshouts.inc.php` reads:

    // Script Version 7.0

It should read:

    // Script Version 7.0.2

-   Temporarily relax permissions:

<!-- -->

    cd path_to_forum_install
    sudo chmod -R 777 .

-   Upload all files/folders except for the `includes`, `languages`, `styles` and `cache_builders/custom` directories.
-   Restore permissions to their prior state:

<!-- -->

    sudo chmod 755 .
    sudo chmod 777 includes
    sudo chmod 666 includes/*
    sudo chmod 777 sessions
    sudo chmod 777 templates/compile
    sudo chmod 777 templates
    sudo chmod 777 cache
    sudo chmod 777 cache_builders
    sudo chmod 777 cache_builders/custom
    sudo chmod 666 cache_builders/custom/*
    sudo chmod 777 styles
    sudo chmod 666 styles/*.php styles/*.css
    sudo chown -R apache_user:apache_group *

-   Run the upgrade script `install/upgrade.php` from within the browser
-   Remove the install directory from the server

<!-- -->

    sudo rm -rf install

-   Open the forums again

# See also

-   Bug and workaround: <http://www.ubbcentral.com/forums/ubbthreads.php/ubb/showflat/Number/168866/page/1>
