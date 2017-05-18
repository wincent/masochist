---
tags: wordpress subversion wiki
---

# Prerequisites

-   See: [Preparing WordPress for Subversion-based upgrades](/wiki/Preparing_WordPress_for_Subversion-based_upgrades)

# The procedure

Check that the new release has actually been tagged in the [Subversion](/wiki/Subversion) repository:

-   <http://svn.automattic.com/wordpress/tags/2.0.5/>

In this case I chose not to make a database backup, unlike [last time](/wiki/Upgrading_from_WordPress_2.0.3_to_2.0.4_using_Subversion), because I haven't made any posts lately and the automated daily backup of the database ensures that I already have a fresh backup copy.

I did, however, backup the installed files:

    cd path_to_public_html_folder_where_wp_lives
    sudo tar -c -v wp > ~/2.0.4-backup.tar
    gzip --verbose -9 ~/2.0.4-backup.tar

Go to the admin control panel and disable all plugins.

Perform the actual upgrade:

    cd wp
    svn info
    sudo -u user_that_apache_runs_as -H svn switch http://svn.automattic.com/wordpress/tags/2.0.5

Output:

    U    wp-comments-post.php
    U    wp-includes/class-snoopy.php
    U    wp-includes/default-filters.php
    U    wp-includes/template-functions-general.php
    U    wp-includes/template-functions-category.php
    U    wp-includes/template-functions-post.php
    U    wp-includes/wp-db.php
    U    wp-includes/functions-formatting.php
    U    wp-includes/version.php
    U    wp-includes/functions-post.php
    U    wp-includes/classes.php
    U    wp-includes/pluggable-functions.php
    U    wp-includes/comment-functions.php
    U    wp-includes/functions.php
    U    wp-includes/feed-functions.php
    U    wp-includes/template-functions-author.php
    U    xmlrpc.php
    U    wp-content/plugins/wp-db-backup.php
    U    wp-content/themes/classic/sidebar.php
    U    wp-rss2.php
    U    wp-admin/edit-form-advanced.php
    U    wp-admin/inline-uploading.php
    U    wp-admin/users.php
    U    wp-admin/menu.php
    U    wp-admin/options-discussion.php
    U    wp-admin/wp-admin.css
    U    wp-admin/link-categories.php
    U    wp-admin/plugins.php
    U    wp-admin/post.php
    U    wp-admin/theme-editor.php
    U    wp-admin/options.php
    U    wp-admin/admin-functions.php
    U    wp-admin/templates.php
    U    wp-admin/edit-page-form.php
    U    wp-admin/profile.php
    U    wp-admin/user-edit.php
    U    wp-admin/page-new.php
    U    wp-admin/install.php
    U    wp-admin/options-general.php
    U    wp-admin/index.php
    U    wp-admin/admin-db.php
    U    wp-admin/options-permalink.php
    U    wp-admin/import/livejournal.php
    U    wp-admin/import/dotclear.php
    U    wp-admin/import/mt.php
    U    wp-admin/import/blogger.php
    U    wp-admin/import/textpattern.php
    U    wp-admin/import/greymatter.php
    U    wp-admin/import/rss.php
    U    wp-admin/admin-footer.php
    U    wp-admin/options-misc.php
    U    wp-admin/upgrade-schema.php
    Updated to revision 4438.

Try hitting the upgrade script (at `wp-admin/upgrade.php`), although again it doesn't seem necessary on this release.

Re-enable plug-ins one by one.

# See also

-   Release announcement: <http://wordpress.org/development/2006/10/205-ronan/>
-   Detailed change log: <http://trac.wordpress.org/query?status=closed&resolution=fixed&milestone=2.0.5>
-   Change overview: <http://markjaquith.wordpress.com/2006/10/17/changes-in-wordpress-205/>
-   Previous upgrade: [Upgrading from WordPress 2.0.3 to 2.0.4 using Subversion](/wiki/Upgrading_from_WordPress_2.0.3_to_2.0.4_using_Subversion)
