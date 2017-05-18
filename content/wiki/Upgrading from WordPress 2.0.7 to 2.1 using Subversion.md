---
tags: wordpress subversion wiki
---

# The upgrade

    OLD_WP_VERSION="2.0.7"
    NEW_WP_VERSION="2.1"
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
    sudo -u "${APACHE_USER}" -H svn up

# Output

From `svn switch`:

    U    wp-rss.php
    U    wp-login.php
    U    wp-comments-post.php
    U    wp-blog-header.php
    U    wp-rdf.php
    U    wp-includes/class-snoopy.php
    U    wp-includes/default-filters.php
    A    wp-includes/post-template.php
    A    wp-includes/plugin.php
    U    wp-includes/locale.php
    U    wp-includes/cache.php
    A    wp-includes/bookmark.php
    A    wp-includes/query.php
    A    wp-includes/link-template.php
    U    wp-includes/wp-db.php
    A    wp-includes/formatting.php
    A    wp-includes/author-template.php
    A    wp-includes/category.php
    U    wp-includes/template-loader.php
    A    wp-includes/rewrite.php
    A    wp-includes/compat.php
    U    wp-includes/gettext.php
    A    wp-includes/post.php
    U    wp-includes/version.php
    A    wp-includes/js/prototype.js
    A    wp-includes/js/scriptaculous
    A    wp-includes/js/scriptaculous/prototype.js
    A    wp-includes/js/scriptaculous/builder.js
    A    wp-includes/js/scriptaculous/MIT-LICENSE
    A    wp-includes/js/scriptaculous/effects.js
    A    wp-includes/js/scriptaculous/unittest.js
    A    wp-includes/js/scriptaculous/scriptaculous.js
    A    wp-includes/js/scriptaculous/dragdrop.js
    A    wp-includes/js/scriptaculous/slider.js
    A    wp-includes/js/scriptaculous/controls.js
    A    wp-includes/js/crop
    A    wp-includes/js/crop/marqueeHoriz.gif
    A    wp-includes/js/crop/cropper.css
    A    wp-includes/js/crop/marqueeVert.gif
    A    wp-includes/js/crop/cropper.js
    U    wp-includes/js/tw-sack.js
    U    wp-includes/js/fat.js
    U    wp-includes/js/quicktags.js
    A    wp-includes/js/autosave-js.php
    U    wp-includes/js/colorpicker.js
    A    wp-includes/js/wp-ajax-js.php
    U    wp-includes/js/dbx.js
    U    wp-includes/js/tinymce/license.txt
    UU   wp-includes/js/tinymce/utils/mctabs.js
    UU   wp-includes/js/tinymce/utils/validate.js
    A    wp-includes/js/tinymce/utils/mclayer.js
    UU   wp-includes/js/tinymce/utils/form_utils.js
    UU   wp-includes/js/tinymce/plugins/wphelp/editor_plugin.js
    UU   wp-includes/js/tinymce/plugins/wphelp/langs/en.js
    UU   wp-includes/js/tinymce/plugins/directionality/editor_plugin.js
    UU   wp-includes/js/tinymce/plugins/directionality/langs/en.js
    A    wp-includes/js/tinymce/plugins/spellchecker
    A    wp-includes/js/tinymce/plugins/spellchecker/editor_plugin.js
    A    wp-includes/js/tinymce/plugins/spellchecker/langs
    A    wp-includes/js/tinymce/plugins/spellchecker/langs/en.js
    A    wp-includes/js/tinymce/plugins/spellchecker/images
    A    wp-includes/js/tinymce/plugins/spellchecker/images/wline.gif
    A    wp-includes/js/tinymce/plugins/spellchecker/images/spellchecker.gif
    A    wp-includes/js/tinymce/plugins/spellchecker/css
    A    wp-includes/js/tinymce/plugins/spellchecker/css/content.css
    A    wp-includes/js/tinymce/plugins/spellchecker/css/spellchecker.css
    A    wp-includes/js/tinymce/plugins/spellchecker/tinyspell.php
    A    wp-includes/js/tinymce/plugins/spellchecker/config.php
    A    wp-includes/js/tinymce/plugins/spellchecker/classes
    A    wp-includes/js/tinymce/plugins/spellchecker/classes/TinyPspellShell.class.php
    A    wp-includes/js/tinymce/plugins/spellchecker/classes/HttpClient.class.php
    A    wp-includes/js/tinymce/plugins/spellchecker/classes/TinyGoogleSpell.class.php
    A    wp-includes/js/tinymce/plugins/spellchecker/classes/TinyPspell.class.php
    UU   wp-includes/js/tinymce/plugins/inlinepopups/editor_plugin.js
    UU   wp-includes/js/tinymce/plugins/inlinepopups/jscripts/mcwindows.js
    U    wp-includes/js/tinymce/plugins/inlinepopups/css/inlinepopup.css
    D    wp-includes/js/tinymce/plugins/inlinepopups/editor_plugin_src.js
    D    wp-includes/js/tinymce/plugins/inlinepopups/readme.txt
    UU   wp-includes/js/tinymce/plugins/autosave/editor_plugin.js
    UU   wp-includes/js/tinymce/plugins/autosave/langs/en.js
    D    wp-includes/js/tinymce/plugins/autosave/langs/cs.js
    D    wp-includes/js/tinymce/plugins/autosave/langs/sv.js
    UU   wp-includes/js/tinymce/plugins/autosave/editor_plugin_src.js
    UU   wp-includes/js/tinymce/plugins/wordpress/editor_plugin.js
    U    wp-includes/js/tinymce/plugins/wordpress/wordpress.css
    UU   wp-includes/js/tinymce/plugins/wordpress/langs/en.js
    A    wp-includes/js/tinymce/plugins/wordpress/images/toolbars.gif
    U    wp-includes/js/tinymce/plugins/wordpress/images/help.gif
    A    wp-includes/js/tinymce/plugins/wordpress/popups.css
    A    wp-includes/js/tinymce/plugins/paste
    A    wp-includes/js/tinymce/plugins/paste/editor_plugin.js
    A    wp-includes/js/tinymce/plugins/paste/pasteword.htm
    A    wp-includes/js/tinymce/plugins/paste/jscripts
    A    wp-includes/js/tinymce/plugins/paste/jscripts/pasteword.js
    A    wp-includes/js/tinymce/plugins/paste/jscripts/pastetext.js
    A    wp-includes/js/tinymce/plugins/paste/langs
    A    wp-includes/js/tinymce/plugins/paste/langs/en.js
    A    wp-includes/js/tinymce/plugins/paste/images
    A    wp-includes/js/tinymce/plugins/paste/images/pastetext.gif
    A    wp-includes/js/tinymce/plugins/paste/images/pasteword.gif
    A    wp-includes/js/tinymce/plugins/paste/images/selectall.gif
    A    wp-includes/js/tinymce/plugins/paste/css
    A    wp-includes/js/tinymce/plugins/paste/css/pasteword.css
    A    wp-includes/js/tinymce/plugins/paste/css/blank.css
    A    wp-includes/js/tinymce/plugins/paste/pastetext.htm
    A    wp-includes/js/tinymce/plugins/paste/blank.htm
    U    wp-includes/js/tinymce/tiny_mce.js
    A    wp-includes/js/tinymce/tiny_mce_config.php
    UU   wp-includes/js/tinymce/langs/en.js
    UU   wp-includes/js/tinymce/wp-mce-help.php
    U    wp-includes/js/tinymce/themes/advanced/about.htm
    U    wp-includes/js/tinymce/themes/advanced/anchor.htm
    U    wp-includes/js/tinymce/themes/advanced/jscripts/source_editor.js
    U    wp-includes/js/tinymce/themes/advanced/jscripts/about.js
    U    wp-includes/js/tinymce/themes/advanced/jscripts/anchor.js
    U    wp-includes/js/tinymce/themes/advanced/jscripts/charmap.js
    U    wp-includes/js/tinymce/themes/advanced/jscripts/color_picker.js
    U    wp-includes/js/tinymce/themes/advanced/jscripts/link.js
    U    wp-includes/js/tinymce/themes/advanced/jscripts/image.js
    U    wp-includes/js/tinymce/themes/advanced/charmap.htm
    U    wp-includes/js/tinymce/themes/advanced/color_picker.htm
    UU   wp-includes/js/tinymce/themes/advanced/langs/en.js
    U    wp-includes/js/tinymce/themes/advanced/link.htm
    A    wp-includes/js/tinymce/themes/advanced/images/underline_es.gif
    A    wp-includes/js/tinymce/themes/advanced/images/opacity.png
    A    wp-includes/js/tinymce/themes/advanced/images/bold_tw.gif
    U    wp-includes/js/tinymce/themes/advanced/images/forecolor.gif
    A    wp-includes/js/tinymce/themes/advanced/images/separator.gif
    A    wp-includes/js/tinymce/themes/advanced/images/bold_es.gif
    A    wp-includes/js/tinymce/themes/advanced/images/justifyright.gif
    U    wp-includes/js/tinymce/themes/advanced/images/buttons.gif
    A    wp-includes/js/tinymce/themes/advanced/images/button_menu.gif
    U    wp-includes/js/tinymce/themes/advanced/images/backcolor.gif
    A    wp-includes/js/tinymce/themes/advanced/images/menu_check.gif
    A    wp-includes/js/tinymce/themes/advanced/images/justifyleft.gif
    A    wp-includes/js/tinymce/themes/advanced/images/italic_tw.gif
    A    wp-includes/js/tinymce/themes/advanced/images/justifyfull.gif
    A    wp-includes/js/tinymce/themes/advanced/images/help.gif
    A    wp-includes/js/tinymce/themes/advanced/images/italic_es.gif
    A    wp-includes/js/tinymce/themes/advanced/images/justifycenter.gif
    A    wp-includes/js/tinymce/themes/advanced/images/underline_tw.gif
    U    wp-includes/js/tinymce/themes/advanced/css/editor_popup.css
    U    wp-includes/js/tinymce/themes/advanced/css/editor_content.css
    U    wp-includes/js/tinymce/themes/advanced/css/editor_ui.css
    U    wp-includes/js/tinymce/themes/advanced/image.htm
    U    wp-includes/js/tinymce/themes/advanced/editor_template.js
    U    wp-includes/js/tinymce/themes/advanced/source_editor.htm
    D    wp-includes/js/tinymce/themes/advanced/editor_template_src.js
    U    wp-includes/js/tinymce/tiny_mce_popup.js
    U    wp-includes/js/tinymce/tiny_mce_gzip.php
    A    wp-includes/js/list-manipulation-js.php
    D    wp-includes/js/dbx-key.js
    A    wp-includes/general-template.php
    U    wp-includes/capabilities.php
    U    wp-includes/classes.php
    A    wp-includes/deprecated.php
    A    wp-includes/cron.php
    A    wp-includes/pluggable.php
    A    wp-includes/comment.php
    A    wp-includes/theme.php
    A    wp-includes/feed.php
    U    wp-includes/kses.php
    A    wp-includes/rss.php
    U    wp-includes/functions.php
    A    wp-includes/script-loader.php
    A    wp-includes/l10n.php
    A    wp-includes/registration.php
    A    wp-includes/comment-template.php
    U    wp-includes/vars.php
    UU   wp-includes/rss-functions.php
    A    wp-includes/bookmark-template.php
    A    wp-includes/user.php
    UU   wp-includes/registration-functions.php
    A    wp-includes/category-template.php
    D    wp-includes/template-functions-general.php
    D    wp-includes/template-functions-category.php
    D    wp-includes/wp-l10n.php
    D    wp-includes/template-functions-post.php
    D    wp-includes/links.php
    D    wp-includes/functions-formatting.php
    D    wp-includes/functions-compat.php
    D    wp-includes/functions-post.php
    D    wp-includes/template-functions-links.php
    D    wp-includes/pluggable-functions.php
    D    wp-includes/comment-functions.php
    D    wp-includes/feed-functions.php
    D    wp-includes/template-functions-author.php
    U    xmlrpc.php
    U    wp-mail.php
    U    index.php
    U    wp-content/plugins/hello.php
    D    wp-content/plugins/wp-db-backup.php
    U    wp-content/themes/classic/sidebar.php
    U    wp-content/themes/classic/comments.php
    U    wp-content/themes/classic/comments-popup.php
    U    wp-content/themes/classic/index.php
    U    wp-content/themes/classic/header.php
    U    wp-content/themes/default/searchform.php
    U    wp-content/themes/default/footer.php
    U    wp-content/themes/default/style.css
    U    wp-content/themes/default/archives.php
    UU   wp-content/themes/default/functions.php
    U    wp-content/themes/default/sidebar.php
    U    wp-content/themes/default/page.php
    U    wp-content/themes/default/archive.php
    U    wp-content/themes/default/single.php
    U    wp-content/themes/default/comments.php
    U    wp-content/themes/default/comments-popup.php
    U    wp-content/themes/default/header.php
    U    wp-content/themes/default/attachment.php
    UU   wp-config-sample.php
    U    wp-register.php
    U    wp-links-opml.php
    U    wp-trackback.php
    U    readme.html
    U    wp-rss2.php
    U    wp-commentsrss2.php
    U    wp-atom.php
    U    wp-settings.php
    A    wp-cron.php
    U    wp-admin/options-head.php
    U    wp-admin/menu-header.php
    A    wp-admin/edit-comments.js
    U    wp-admin/update-links.php
    U    wp-admin/users.php
    A    wp-admin/custom-fields.js
    A    wp-admin/options-privacy.php
    A    wp-admin/install.css
    U    wp-admin/edit-comments.php
    A    wp-admin/admin-ajax.php
    A    wp-admin/post-new.php
    U    wp-admin/wp-admin.css
    U    wp-admin/profile-update.php
    U    wp-admin/install-helper.php
    U    wp-admin/post.php
    U    wp-admin/theme-editor.php
    U    wp-admin/admin.php
    U    wp-admin/upgrade-functions.php
    U    wp-admin/templates.php
    U    wp-admin/admin-functions.php
    A    wp-admin/upload-js.php
    A    wp-admin/custom-header.php
    U    wp-admin/edit-page-form.php
    U    wp-admin/moderation.php
    A    wp-admin/rtl.css
    A    wp-admin/comment.php
    U    wp-admin/options-general.php
    U    wp-admin/index.php
    U    wp-admin/admin-db.php
    U    wp-admin/edit-link-form.php
    U    wp-admin/import/livejournal.php
    UU   wp-admin/import/dotclear.php
    U    wp-admin/import/mt.php
    U    wp-admin/import/blogger.php
    A    wp-admin/import/blogware.php
    U    wp-admin/import/textpattern.php
    U    wp-admin/import/greymatter.php
    U    wp-admin/import/rss.php
    A    wp-admin/import/wordpress.php
    U    wp-admin/options-misc.php
    A    wp-admin/upload.php
    A    wp-admin/upload-rtl.css
    U    wp-admin/edit-form-comment.php
    U    wp-admin/edit-form.php
    U    wp-admin/edit-form-advanced.php
    A    wp-admin/upload-functions.php
    U    wp-admin/menu.php
    U    wp-admin/link-import.php
    A    wp-admin/categories.js
    U    wp-admin/options-discussion.php
    U    wp-admin/admin-header.php
    A    wp-admin/images/login-bkg-bottom.gif
    A    wp-admin/images/login-bkg-tile.gif
    U    wp-admin/xfn.js
    U    wp-admin/plugins.php
    U    wp-admin/cat-js.php
    U    wp-admin/link-add.php
    U    wp-admin/edit.php
    A    wp-admin/upload.css
    A    wp-admin/users.js
    U    wp-admin/upgrade.php
    A    wp-admin/index-extra.php
    U    wp-admin/options.php
    A    wp-admin/link.php
    U    wp-admin/profile.php
    A    wp-admin/edit-category-form.php
    U    wp-admin/user-edit.php
    U    wp-admin/options-reading.php
    U    wp-admin/setup-config.php
    U    wp-admin/page-new.php
    A    wp-admin/dbx-admin-key-js.php
    U    wp-admin/link-manager.php
    U    wp-admin/install.php
    A    wp-admin/install-rtl.css
    U    wp-admin/sidebar.php
    U    wp-admin/link-parse-opml.php
    U    wp-admin/bookmarklet.php
    U    wp-admin/import.php
    U    wp-admin/options-permalink.php
    A    wp-admin/page.php
    U    wp-admin/options-writing.php
    A    wp-admin/export.php
    U    wp-admin/plugin-editor.php
    U    wp-admin/edit-pages.php
    U    wp-admin/admin-footer.php
    U    wp-admin/categories.php
    U    wp-admin/themes.php
    U    wp-admin/upgrade-schema.php
    D    wp-admin/inline-uploading.php
    D    wp-admin/list-manipulation.php
    D    wp-admin/edit-form-ajax-cat.php
    D    wp-admin/link-categories.php
    D    wp-admin/list-manipulation.js
    D    wp-admin/execute-pings.php
    U    wp-feed.php
    Updated to revision 4792.

From `svn up`:

    Fetching external item into 'wp-content/plugins/akismet'
    U    wp-content/plugins/akismet/akismet.php
    Updated external to revision 7502.


    Fetching external item into 'wp-content/plugins/wp-cache'
    Updated external to revision 7502.

    Updated to revision 4792.

# Finishing up

Finally, hit `wp-admin/upgrade.php` and re-enable plug-ins one by one.

# Bug

This release introduced a major bug that rendered the "Manage -&gt; Posts" section in the administrator interface inoperable. The fix is described in, [Applying specific patches to WordPress between versions](/wiki/Applying_specific_patches_to_WordPress_between_versions).

# See also

-   Release announcement: <http://wordpress.org/development/2007/01/ella-21/>
-   Corresponding [Akismet](/wiki/Akismet) release announcement: <http://akismet.com/blog/2007/01/version-20/>
-   2.1 tag in [Subversion](/wiki/Subversion) repository: <http://svn.automattic.com/wordpress/tags/2.1/>
-   Upgrade notes from other versions: [Upgrading WordPress using Subversion](/wiki/Upgrading_WordPress_using_Subversion)
