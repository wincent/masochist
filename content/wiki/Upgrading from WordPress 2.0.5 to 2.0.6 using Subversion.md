---
tags: wordpress subversion wiki
---

The are the upgrade notes for the [WordPress](/wiki/WordPress) 2.0.5 to 2.0.6 upgrade using [Subversion](/wiki/Subversion) (based on previous notes, "[Upgrading from WordPress 2.0.4 to 2.0.5 using Subversion](/wiki/Upgrading_from_WordPress_2.0.4_to_2.0.5_using_Subversion)").

    OLD_WP_VERSION="2.0.5"
    NEW_WP_VERSION="2.0.6"
    PUBLIC_HTML_CONTAINING_WP="path_to_public_html_folder_where_wp_lives"
    DATABASE_USER="database_user"
    DATABASE_NAME="database_name"
    APACHE_USER="user_that_apache_runs_as"

    # backup the database
    sudo -v
    sudo mysqldump --opt -u "${DATABASE_USER}" -p -h localhost \
        "${DATABASE_NAME}" | bzip2 -c > ~/wp-${OLD_WP_VERSION}-db-backup.tar.bz2

    # backup the installed files
    cd "${PUBLIC_HTML_CONTAINING_WP}"
    sudo tar -c -v wp > ~/wp-${OLD_WP_VERSION}-files-backup.tar
    gzip --verbose -9 ~/wp-${OLD_WP_VERSION}-files-backup.tar

    # after disabling all plug-ins
    cd wp
    svn info
    sudo -u "${APACHE_USER}" -H svn switch "http://svn.automattic.com/wordpress/tags/${NEW_WP_VERSION}"
    sudo -u "${APACHE_USER}" -H svn up

Output:

    U    wp-login.php
    U    wp-includes/template-functions-general.php
    U    wp-includes/template-functions-category.php
    U    wp-includes/cache.php
    U    wp-includes/template-functions-post.php
    U    wp-includes/wp-db.php
    U    wp-includes/links.php
    U    wp-includes/functions-formatting.php
    U    wp-includes/gettext.php
    U    wp-includes/version.php
    U    wp-includes/functions-post.php
    U    wp-includes/classes.php
    U    wp-includes/kses.php
    U    wp-includes/pluggable-functions.php
    U    wp-includes/comment-functions.php
    U    wp-includes/functions.php
    U    wp-includes/template-functions-author.php
    U    wp-content/themes/classic/comments-popup.php
    U    wp-content/themes/default/searchform.php
    U    wp-content/themes/default/comments-popup.php
    U    wp-register.php
    U    wp-links-opml.php
    U    wp-trackback.php
    U    wp-settings.php
    U    wp-admin/edit-form-advanced.php
    U    wp-admin/inline-uploading.php
    U    wp-admin/users.php
    U    wp-admin/edit-comments.php
    U    wp-admin/wp-admin.css
    U    wp-admin/link-categories.php
    U    wp-admin/edit.php
    U    wp-admin/post.php
    U    wp-admin/theme-editor.php
    U    wp-admin/upgrade.php
    U    wp-admin/options.php
    U    wp-admin/admin-functions.php
    U    wp-admin/templates.php
    U    wp-admin/edit-page-form.php
    U    wp-admin/moderation.php
    U    wp-admin/link-manager.php
    U    wp-admin/bookmarklet.php
    U    wp-admin/options-permalink.php
    U    wp-admin/edit-link-form.php
    U    wp-admin/edit-pages.php
    U    wp-admin/import/blogger.php
    U    wp-admin/options-misc.php
    U    wp-admin/categories.php

Finally, try hitting the upgrade script (at `wp-admin/upgrade.php`) and re-enable all plug-ins one by one.

# Plug-in upgrades

After upgrading to 2.0.6 I checked for new versions of my installed plug-ins and found that [WP-Cache 2.0](/wiki/WP-Cache_2.0) had been bumped to version 2.0.21 ([release announcement](http://mnm.uib.es/gallir/posts/2007/01/07/940/)).

I decided to take the time to switch over to [Subversion](/wiki/Subversion)-based upgrades for that plug-in as well.

    # after disabling the plug-in
    cd wp-content/plug-ins
    sudo rm -rf wp-cache

It was then time to edit the `svn:externals` definition:

    sudo -u "${APACHE_USER}" -H svn propedit svn:externals .

Changing it from this:

    akismet http://svn.wp-plugins.org/akismet/trunk/

To this:

    akismet http://svn.wp-plugins.org/akismet/trunk/
    wp-cache http://svn.wp-plugins.org/wp-cache/tags/release-2.0.21

And then updating:

    sudo -u "${APACHE_USER}" -H svn up

Output:

    Fetching external item into 'wp-cache'
    A    wp-cache/wp-cache-config-sample.php
    A    wp-cache/README.txt
    A    wp-cache/wp-cache-phase1.php
    A    wp-cache/wp-cache-phase2.php
    A    wp-cache/wp-cache.php
    Updated external to revision 7238.

Then re-enable the plug-in and everything seems to be working.

One curious thing I noted was that the Akismet plug-in does not get updated when running the normal `svn switch` upgrade process. I should do an `svn up` as well after each update. The output was:

    Fetching external item into 'akismet'
    A    akismet/akismet.gif
    U    akismet/akismet.php
    Updated external to revision 7238.
