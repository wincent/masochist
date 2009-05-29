---
tags: bugzilla updates
cache_breaker: 1
---

# Upgrade procedure

These notes were made during the upgrade from [Bugzilla](/wiki/Bugzilla) 2.22.1 to 2.22.2:

-   Run `sanitycheck.cgi` from within the browser.
-   In the "Parameters" section set `shutdownhtml` to a useful value:

<!-- -->

    Currently closed for maintenance, please check back again soon.

-   Back up the database:

<!-- -->

    # no need to pass --opt with MySQL 4.1 and up
    mysqldump -u database_user -p database_name | bzip2 -c > ~/bugzilla-2.22.1.sql.bz2

-   Back up the installed files:

<!-- -->

    cd path_to_bugzilla_installation
    sudo tar -c -v . | bzip2 -c > ~/bugzilla-2.22.1-files-backup.tar.bz2

-   Perform the actual update using [CVS](/wiki/CVS) ([CVS](/wiki/CVS) password is "anonymous"):

<!-- -->

    cvs login
    sudo cvs update -rBugzilla_Stable -dP

-   Watch for conflicts during update; if any found, fix as demonstrated in [Bugzilla 2.22 to 2.22.1 upgrade notes](/wiki/Bugzilla_2.22_to_2.22.1_upgrade_notes).
-   Run `sudo ./checksetup.pl` from the command line.
-   With `sudo`, use my custom `repair-bugzilla.sh` to repair the ownership and permissions on the installed files.
-   In the "Parameters" section empty the `shutdownhtml` field; in order to get there you may need to explicitly navigate to `editparams.cgi` and log in.
-   Run `sanitycheck.cgi` from within the browser.
-   Test the installation.

# Future improvements

This process could be largely automated via a shell script.

# See also

-   Release notes: <http://www.bugzilla.org/releases/2.22.2/release-notes.html>
-   Security advisory: <http://www.bugzilla.org/security/2.20.3/>

