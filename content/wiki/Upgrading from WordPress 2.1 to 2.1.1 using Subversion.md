---
tags: wordpress subversion wiki
---

# The upgrade

    OLD_WP_VERSION="2.1"
    NEW_WP_VERSION="2.1.1"
    PUBLIC_HTML_CONTAINING_WP="path_to_public_html_folder_where_wp_lives"
    DATABASE_USER="database_user"
    DATABASE_NAME="database_name"
    APACHE_USER="user_that_apache_runs_as"

    # backup the database
    sudo -v
    sudo mysqldump -u "${DATABASE_USER}" -p -h localhost \
        "${DATABASE_NAME}" | bzip2 -c > ~/wp-${OLD_WP_VERSION}-db-backup.bz2

    # backup the installed files
    cd "${PUBLIC_HTML_CONTAINING_WP}"
    sudo tar -c -v wp > ~/wp-${OLD_WP_VERSION}-files-backup.tar
    gzip --verbose -9 ~/wp-${OLD_WP_VERSION}-files-backup.tar

    # after disabling all plug-ins
    cd wp
    svn info
    sudo -u "${APACHE_USER}" -H svn switch "http://svn.automattic.com/wordpress/tags/${NEW_WP_VERSION}"

Output from `svn switch` (note conflicted files):

    U    wp-includes/post-template.php
    C    wp-includes/cache.php
    U    wp-includes/formatting.php
    U    wp-includes/category.php
    U    wp-includes/post.php
    C    wp-includes/version.php
    A    wp-includes/js/scriptaculous/wp-scriptaculous.js
    U    wp-includes/js/tinymce/tiny_mce_config.php
    U    wp-includes/js/tinymce/wp-mce-help.php
    U    wp-includes/js/tinymce/tiny_mce_gzip.php
    U    wp-includes/capabilities.php
    U    wp-includes/cron.php
    U    wp-includes/functions.php
    U    wp-includes/bookmark-template.php
    U    xmlrpc.php
    U    wp-admin/admin-ajax.php
    U    wp-admin/admin-functions.php
    U    wp-admin/custom-header.php
    U    wp-admin/options-general.php
    U    wp-admin/edit.php
    U    wp-admin/index-extra.php
    U    wp-admin/options-reading.php
    Updated to revision 4904.

This conflict was caused because I had previously applied a fix to a bug in version 2.1 (see "[Upgrading from WordPress 2.0.7 to 2.1 using Subversion](/wiki/Upgrading_from_WordPress_2.0.7_to_2.1_using_Subversion)").

Fix conflict by copying newer versions over locally modified versions:

    sudo cp version.php.r4904 version.php
    sudo cp cache.php.r4904 cache.php
    sudo svn resolved cache.php version.php

Now `svn up`:

    sudo -u "${APACHE_USER}" -H svn up

From `svn up`:

    At revision 4904.

# Finishing up

Finally, hit `wp-admin/upgrade.php` and re-enable plug-ins one by one.

# See also

-   Release announcement: <http://wordpress.org/development/2007/02/new-releases/>
-   2.1.1 tag in [Subversion](/wiki/Subversion) repository: <http://svn.automattic.com/wordpress/tags/2.1.1/>
-   Upgrade notes from other versions: [Upgrading WordPress using Subversion](/wiki/Upgrading_WordPress_using_Subversion)
