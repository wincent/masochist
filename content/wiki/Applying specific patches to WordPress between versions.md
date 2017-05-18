---
tags: wordpress wiki
---

The [last WordPress upgrade](/wiki/Upgrading_from_WordPress_2.0.7_to_2.1_using_Subversion) (to version 2.1) introduced a [major bug](http://trac.wordpress.org/ticket/3642) that rendered the "Manage -&gt; Posts" section of the administration interface inoperable.

The fix for the 2.1 branch is [here](http://trac.wordpress.org/changeset/4857).

To apply this fix I put [the patch](http://trac.wordpress.org/changeset/4857?format=diff&new=4857) in a file `~/wp-patch.diff` and executed the following:

    # check current status of install
    cd path_to_wordpress_install
    svn info

    # apply the patch
    sudo -u user_that_apache_runs_as patch -b -p3 < ~/wp-patch.diff

    # inspect patch results
    svn diff

    # remove the backup files
    cd wp-includes
    sudo rm cache.php.orig version.php.orig

I passed the `-b` switch to `patch` so that backups of the files would be made before making changes to the files, but given that I am using a [Subversion](/wiki/Subversion)-based install I could have just as easily reverted using `svn revert` in the event that the patching didn't work out.

The `-p3` switch tells `patch` to strip three levels (`/`, `branches/` and `2.1/`) from the absolute path names (such as `/branches/2.1/wp-includes/cache.php`) in the patch file.

When the time for the next upgrade comes around I am not sure if the `svn switch` will work given that I'll already have local changes. I may have to run `svn revert` beforehand, or manually resolve conflicts. (**Update:** I manually resolved the conflicts; see "[Upgrading from WordPress 2.1 to 2.1.1 using Subversion](/wiki/Upgrading_from_WordPress_2.1_to_2.1.1_using_Subversion)".)
