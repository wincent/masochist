---
tags: wordpress subversion wiki
---

# Prerequisites

See: [Preparing WordPress for Subversion-based upgrades](/wiki/Preparing_WordPress_for_Subversion-based_upgrades)

# For the reckless: the 5 second upgrade

The reckless can perform the upgrade with a single command from inside their [WordPress](/wiki/WordPress) install. The use of [sudo](/wiki/sudo) and the `-u user -H` options (where you would substitute an appropriate value for `user`) is to ensure that ownership of the files does not change during the update (necessary if you are running in [PHP Safe Mode](/wiki/PHP_Safe_Mode)):

    sudo -u user -H svn switch http://svn.automattic.com/wordpress/tags/2.0.4

A less reckless upgrade procedure is described below, which includes making a backup before upgrading.

# For the careful: the 5 minute upgrade

## Check the trunk, branches and tags directories in the repository

Given that in recent versions the [WordPress](/wiki/WordPress) team hasn't always maintained an [up-to-date set of tags](http://wincent.com/a/knowledge-base/archives/2006/06/wordpress_updat.php) in their [Subversion](/wiki/Subversion) repository, it is a good idea to check that recent changes in the `trunk`, `branches` and `tags` directories on the repository all match up. At the time of [the 2.0.4 release announcement](http://wordpress.org/development/2006/07/wordpress-204/) all three directories appeared to be in sync:

-   <http://svn.automattic.com/wordpress/tags/2.0.4/>
-   <http://svn.automattic.com/wordpress/branches/2.0/>
-   <http://svn.automattic.com/wordpress/trunk/>

I checked using the following commands:

    svn log --limit 5 http://svn.automattic.com/wordpress/tags/2.0.4
    svn log --limit 5 http://svn.automattic.com/wordpress/branches/2.0
    svn log --limit 5 http://svn.automattic.com/wordpress/trunk

And incidentally, using the `svn log` command (with a higher `--limit` value) is one way of seeing what changes have been made to the source tree. This is useful seeing as the [WordPress](/wiki/WordPress) team likes to practise a little bit of [security through obscurity](/wiki/security_through_obscurity), labelling a release as a containing "several important security fixes" but neglecting to mention what they are, nor any of the other "bug fixes (over 50!)" in the release. You can also [check the WordPress trac](http://trac.wordpress.org/query?status=closed&milestone=2.0.4).

## Backup the database

Choosing appropriate values for `${MYSQLUSER}`, `${DATABASE}` and `${FILENAME}`:

    /usr/bin/sudo /usr/bin/mysqldump --opt -u "${MYSQLUSER}" -p -h localhost \
          "${DATABASE}" | /usr/bin/bzip2 -c > "~/${FILENAME}"

## Backup the installed files

If your [WordPress](/wiki/WordPress) install was in the folder `wp` you would `cd` into its parent folder and do something like this:

    /usr/bin/sudo /bin/tar -c -v wp > ~/pre-2.0.4-backup.tar
    /bin/gzip --verbose -9 ~/pre-2.0.4-backup.tar

## Disable all plug-ins

<http://example.com/wp-admin/plugins.php>

## Perform the upgrade

Get info on the working copy:

    svn info

Perform the actual upgrade, substituting an appropriate value for `${USER}`:

    sudo -u "${USER}" -H svn switch http://svn.automattic.com/wordpress/tags/2.0.4

Output:

    U    wp-pass.php
    U    wp-login.php
    U    wp-includes/class-snoopy.php
    U    wp-includes/default-filters.php
    U    wp-includes/template-functions-general.php
    U    wp-includes/wp-db.php
    U    wp-includes/functions-formatting.php
    U    wp-includes/gettext.php
    U    wp-includes/version.php
    U    wp-includes/functions-post.php
    U    wp-includes/classes.php
    U    wp-includes/kses.php
    U    wp-includes/pluggable-functions.php
    U    wp-includes/comment-functions.php
    U    wp-includes/functions.php
    U    wp-includes/vars.php
    U    wp-includes/streams.php
    U    wp-includes/template-functions-author.php
    U    xmlrpc.php
    U    wp-content/plugins/wp-db-backup.php
    U    wp-content/themes/classic/comments-popup.php
    U    wp-content/themes/default/footer.php
    U    wp-content/themes/default/style.css
    U    wp-content/themes/default/archives.php
    U    wp-content/themes/default/search.php
    U    wp-content/themes/default/index.php
    U    wp-content/themes/default/functions.php
    U    wp-content/themes/default/sidebar.php
    U    wp-content/themes/default/page.php
    U    wp-content/themes/default/links.php
    U    wp-content/themes/default/archive.php
    U    wp-content/themes/default/single.php
    U    wp-content/themes/default/comments.php
    U    wp-content/themes/default/comments-popup.php
    U    wp-content/themes/default/header.php
    U    wp-content/themes/default/attachment.php
    U    wp-trackback.php
    U    wp-settings.php
    U    wp-admin/edit-form-advanced.php
    U    wp-admin/inline-uploading.php
    U    wp-admin/update-links.php
    U    wp-admin/users.php
    U    wp-admin/edit-comments.php
    U    wp-admin/wp-admin.css
    A    wp-admin/images/box-butt-left.gif
    A    wp-admin/images/box-butt-right.gif
    A    wp-admin/images/box-head-left.gif
    A    wp-admin/images/box-head-right.gif
    A    wp-admin/images/box-bg-left.gif
    A    wp-admin/images/box-bg-right.gif
    U    wp-admin/link-categories.php
    U    wp-admin/plugins.php
    U    wp-admin/post.php
    U    wp-admin/theme-editor.php
    U    wp-admin/upgrade.php
    U    wp-admin/admin.php
    U    wp-admin/options.php
    U    wp-admin/admin-functions.php
    U    wp-admin/templates.php
    U    wp-admin/edit-page-form.php
    U    wp-admin/moderation.php
    U    wp-admin/user-edit.php
    U    wp-admin/setup-config.php
    U    wp-admin/link-manager.php
    U    wp-admin/index.php
    U    wp-admin/sidebar.php
    U    wp-admin/import.php
    U    wp-admin/admin-db.php
    U    wp-admin/edit-link-form.php
    U    wp-admin/edit-pages.php
    U    wp-admin/plugin-editor.php
    U    wp-admin/import/dotclear.php
    U    wp-admin/import/blogger.php
    U    wp-admin/import/textpattern.php
    U    wp-admin/categories.php
    U    wp-admin/themes.php
    U    wp-admin/upgrade-schema.php
    U    wp-admin/edit-form-comment.php
    U    wp-admin/edit-form.php
    Updated to revision 4068.

Finally, compare the info on the updated working copy:

    svn info

It seems that in this release it is not necessary to hit the upgrade script:

<http://example.com/wordpress/wp-admin/upgrade.php>

## Re-enable all plug-ins

One by one.

# See also

-   [WordPress](/wiki/WordPress) 2.0.4 release announcement: <http://wordpress.org/development/2006/07/wordpress-204/>
-   [Upgrading from WordPress 2.0.4 to 2.0.5 using Subversion](/wiki/Upgrading_from_WordPress_2.0.4_to_2.0.5_using_Subversion)
