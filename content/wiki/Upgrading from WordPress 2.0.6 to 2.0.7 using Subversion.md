---
tags: wordpress subversion wiki
---

Last night the [WordPress](/wiki/WordPress) folks announced a rushed new release to address what is apparently a pretty major flaw in [PHP](/wiki/PHP)'s [Zend Engine](/wiki/Zend_Engine). I unfortunately didn't have a lot of time to do a thorough upgrade (with backups etc) but I felt that quickly patching was important given that I didn't have time to find out whether Red Hat had already pushed out a fix for the PHP flaw (there doesn't seem to be a [CVE](/wiki/CVE) number for this issue yet, not does it appear in the [Red Hat "Days of Risk Report"](/wiki/Red_Hat_%22Days_of_Risk_Report%22) yet); so I decided to bite the bullet and do the famous "Five second upgrade":

    cd path_to_wp_install
    svn info
    svn -u apache_user -H svn switch http://svn.automattic.com/wordpress/tags/2.0.7

Output:

    U    wp-includes/version.php
    U    wp-includes/classes.php
    U    wp-includes/functions.php
    U    wp-settings.php
    U    wp-admin/inline-uploading.php
    U    wp-admin/post.php
    Updated to revision 4734.

Then:

    svn -u apache_user -H svn up

Output:

    Fetching external item into 'wp-content/plugins/akismet'
    U    wp-content/plugins/akismet/akismet.php
    Updated external to revision 7358.

Then hit `wp-admin/upgrade.php` using your web browser.

See the last upgrade notes for a more detailed procedure ("[Upgrading from WordPress 2.0.5 to 2.0.6 using Subversion](/wiki/Upgrading_from_WordPress_2.0.5_to_2.0.6_using_Subversion)").

# See also

-   Release announcement: <http://wordpress.org/development/2007/01/wordpress-207/>
-   2.0.7 tag in [Subversion](/wiki/Subversion) repository: <http://svn.automattic.com/wordpress/tags/2.0.7/>
-   [Zend Engine](/wiki/Zend_Engine) hashtable bug: <http://www.hardened-php.net/hphp/zend_hash_del_key_or_index_vulnerability.html>
-   [WordPress](/wiki/WordPress) workaround for [Zend](/wiki/Zend) bug: <http://trac.wordpress.org/changeset/4717>
