---
tags: bugzilla updates
cache_breaker: 1
---

# Upgrade procedure

These notes were made during the upgrade from [Bugzilla](/wiki/Bugzilla) 2.22 to 2.22.1:

-   Run `sanitycheck.cgi` from within the browser.
-   In the "Parameters" section set `shutdownhtml` to a useful value:

<!-- -->

    Currently closed for maintenance, please check back again soon.

-   Back up the database:

<!-- -->

    sudo -s
    mysqldump -u root -p database_name > bugzilla-20061016.sql

-   Back up the installed files:

<!-- -->

    mkdir bugzilla-backup
    cd path_to_bugzilla_installation
    tar cf - . | (cd full_path_to_backup_directory && tar xBf -)

-   Perform the actual update using [CVS](/wiki/CVS) ([CVS](/wiki/CVS) password is "anonymous"):

<!-- -->

    cvs login
    cvs update -rBugzilla_Stable -dP

-   Watch for conflicts during update; in the current case the following conflicts were reported:

<!-- -->

    Merging differences between 1.40 and 1.40.2.1 into header.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/global/header.html.tmpl

-   Fix conflicts; in the example case:

<!-- -->

    cd template/en/default/global
    cvs status header.html.tmpl
    # (shows "File had conflicts on merge")
    nano header.html.tmpl
    cvs status header.html.tmpl
    # (shows "Locally modified")
    cd ../../../..

-   Remove auxiliary files created due to the merge conflict:

<!-- -->

    find . -name "\.#*" -and -type f
    find . -name "\.#*" -and -type f -exec rm "{}" \;

Or more conservatively:

    find . -name "\.#*" -and -type f -ok rm "{}" \;

-   Run `checksetup.pl` from the command line.
-   Use my custom `repair-bugzilla.sh` to repair the ownership and permissions on the installed files.
-   In the "Parameters" section empty the `shutdownhtml` field; in order to get there you need explicitly navigate to `editparams.cgi` and log in.
-   Run `sanitycheck.cgi` from within the browser.
-   Test the installation.
-   Remove backup files:

<!-- -->

    sudo rm -r full_path_to_backup_directory
    sudo rm full_path_to_database_dumpfile

# Future improvements

This process could be largely automated via a shell script.

# See also

-   <http://www.bugzilla.org/releases/2.22.1/release-notes.html>

