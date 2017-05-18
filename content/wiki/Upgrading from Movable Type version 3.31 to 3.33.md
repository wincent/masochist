---
tags: movable.type wiki
---

These notes were made during the upgrade to [Movable Type](/wiki/Movable_Type) version 3.33.

# Downloading

As has happened on previous occasions with downloads from Six Apart, the received tar archive refused to extract (downloaded and tried twice) so I had to download the zip version instead.

    $ tar xzvf MT-3.33-en_US.tar.gz
    tar: This does not look like a tar archive
    tar: Skipping to next header
    tar: Archive contains obsolescent base-64 headers
    tar: Read 2394 bytes from MT-3.33-en_US.tar.gz
    tar: Error exit delayed from previous errors

# Upgrade

The "upgrade" procedure basically amounts to something very close to re-installing all over again.

-   Upgrade instructions (apparently out of date): <http://www.sixapart.com/movabletype/docs/mtupgrade>
-   "Installation Guide": <http://www.sixapart.com/movabletype/docs/Movable_Type_Installation-Upgrade_Guide.pdf>

In the section, "Configuring an Upgrade Installation", the Installation Guide provides information on how to upgrade "to Movable Type Enterprise from an existing Movable Type installation". It says it is "an easy process" and that "simply" requires you to "follow the steps". It says nothing about upgrading from one release of Movable Type to the next. The key "step" is described as follows:

> Install the Movable Type Enterprise files over your existing installation;

That's all. No more detail provided. No references to the non-enterprise version of Movable Type. No mention of filesystem permissions. No allusion to the fact that the 3.33 distribution contains over 1,300 files and directories that you'll have to upload.

# Detailed upgrade procedure

1.   Backup the Movable Type database and installed files on the remote host.
2.   Rename old Movable Type installation on the local host (for example, to `mt-old`).
3.   Put the new files in place on the local host as `mt`.
4.  Copy custom files into `mt`.
5.  Use [Interarchy](/wiki/Interarchy) to perform a mirror upload (uploading in-place over the old files should preserve their permissions). The purchase price of Interarchy is probably justified by the usefulness of this feature alone (together with "Auto Uploads", it is an amazing time saver). Interarchy provides a detailed transcript of activity so that you can monitor progress, as well as a report of what was actually changed (see below).
6.  Hit `mt-upgrade.cgi` in your web browser
7.  For security, remove `mt-upgrade.cgi` from the server

<!-- -->

# Comments on mirroring

The mirroring started at about 12:38 and finished at 12:42, taking approximately 4 minutes. It is important to remember that Interarchy does a **destructive mirror** so extreme care must be taken; files present on the server in the remote directory but not present in the local copy will be deleted. This is why the "Copy custom files" step above is so important.

I neglected to copy some of my custom files and so was forced to restore from a backup of those files.

# Change report (mirror upload)

195 changes (14 remote deletes, 181 uploads).

## Deleted files

    Delete Remote	No local file	README.txt
    Delete Remote	No local file	docs
    Delete Remote	No local file	examples
    Delete Remote	No local file	images
    Delete Remote	No local file	mt-config.cgi
    Delete Remote	No local file	mt-send-entry.cgi
    Delete Remote	No local file	mt-upgradecheck.cgi
    Delete Remote	No local file	mt.js
    Delete Remote	No local file	mtview.php
    Delete Remote	No local file	nav-commenters.gif
    Delete Remote	No local file	schemas
    Delete Remote	No local file	styles.css
    Delete Remote	No local file	plugins/Markdown.pl
    Delete Remote	No local file	php/lib/block.MTIfNotCategory.php

Of these deleted files, some were custom files that I neglected to copy into my local `mt` folder before starting the mirror so it was necessary to restore these from backup:

-   mt-config.cgi
-   plugins/Markdown.pl

One file that Interarchy did *not* delete even though it was not present on the local side was the `.htaccess` file that I use to limit access to the `mt-config.cgi` file:

    <Files mt-config.cgi>
        <Limit GET>
        deny from all
        </Limit>
    </Files>

## Uploaded files

    Upload	Local file changed	mt-add-notify.cgi
    Upload	Local file changed	mt-atom.cgi
    Upload	Local file changed	mt-check.cgi
    Upload	Local file changed	mt-comments.cgi
    Upload	Local file changed	mt-db2sql.cgi
    Upload	Local file changed	mt-feed.cgi
    Upload	Local file changed	mt-search.cgi
    Upload	Local file changed	mt-tb.cgi
    Upload	Local file changed	mt-testbg.cgi
    Upload	No remote file	mt-upgrade.cgi
    Upload	Local file changed	mt-view.cgi
    Upload	Local file changed	mt-wizard.cgi
    Upload	Local file changed	mt-xmlrpc.cgi
    Upload	Local file changed	mt.cgi
    Upload	Local file changed	default_templates/comment_preview_template.tmpl
    Upload	Local file changed	default_templates/datebased_archive.tmpl
    Upload	Local file changed	default_templates/individual_entry_archive.tmpl
    Upload	Local file changed	default_templates/main_index.tmpl
    Upload	Local file changed	default_templates/search_results_template.tmpl
    Upload	Local file changed	lib/MT.pm
    Upload	Local file changed	mt-static/mt.js
    Upload	Local file changed	mt-static/styles.css
    Upload	Local file changed	php/mt.php
    Upload	Local file changed	search_templates/default.tmpl
    Upload	Local file changed	search_templates/results_feed.tmpl
    Upload	Local file changed	search_templates/results_feed_rss2.tmpl
    Upload	Local file changed	tools/convert-db
    Upload	Local file changed	tools/run-periodic-tasks
    Upload	Local file changed	extlib/HTML/Template.pm
    Upload	Local file changed	lib/MT/App.pm
    Upload	Local file changed	lib/MT/Atom.pm
    Upload	Local file changed	lib/MT/AtomServer.pm
    Upload	Local file changed	lib/MT/Author.pm
    Upload	Local file changed	lib/MT/Blocklist.pm
    Upload	Local file changed	lib/MT/Blog.pm
    Upload	Local file changed	lib/MT/Builder.pm
    Upload	Local file changed	lib/MT/Callback.pm
    Upload	Local file changed	lib/MT/Category.pm
    Upload	Local file changed	lib/MT/Comment.pm
    Upload	Local file changed	lib/MT/Config.pm
    Upload	Local file changed	lib/MT/ConfigMgr.pm
    Upload	Local file changed	lib/MT/DateTime.pm
    Upload	Local file changed	lib/MT/DefaultTemplates.pm
    Upload	Local file changed	lib/MT/Entry.pm
    Upload	Local file changed	lib/MT/ErrorHandler.pm
    Upload	Local file changed	lib/MT/FileInfo.pm
    Upload	Local file changed	lib/MT/FileMgr.pm
    Upload	Local file changed	lib/MT/I18N.pm
    Upload	Local file changed	lib/MT/IPBanList.pm
    Upload	Local file changed	lib/MT/Image.pm
    Upload	Local file changed	lib/MT/ImportExport.pm
    Upload	Local file changed	lib/MT/L10N.pm
    Upload	Local file changed	lib/MT/Log.pm
    Upload	Local file changed	lib/MT/Mail.pm
    Upload	Local file changed	lib/MT/Notification.pm
    Upload	Local file changed	lib/MT/Object.pm
    Upload	Local file changed	lib/MT/ObjectDriver.pm
    Upload	Local file changed	lib/MT/Permission.pm
    Upload	Local file changed	lib/MT/Placement.pm
    Upload	Local file changed	lib/MT/Plugin.pm
    Upload	Local file changed	lib/MT/PluginData.pm
    Upload	Local file changed	lib/MT/Promise.pm
    Upload	Local file changed	lib/MT/Request.pm
    Upload	Local file changed	lib/MT/Sanitize.pm
    Upload	Local file changed	lib/MT/Serialize.pm
    Upload	Local file changed	lib/MT/Session.pm
    Upload	Local file changed	lib/MT/TBPing.pm
    Upload	Local file changed	lib/MT/Tag.pm
    Upload	Local file changed	lib/MT/TaskMgr.pm
    Upload	Local file changed	lib/MT/Template.pm
    Upload	Local file changed	lib/MT/TemplateMap.pm
    Upload	Local file changed	lib/MT/Trackback.pm
    Upload	Local file changed	lib/MT/Upgrade.pm
    Upload	Local file changed	lib/MT/Util.pm
    Upload	Local file changed	lib/MT/WeblogPublisher.pm
    Upload	Local file changed	lib/MT/XMLRPC.pm
    Upload	Local file changed	lib/MT/XMLRPCServer.pm
    Upload	Local file changed	lib/MT/default-templates.pl
    Upload	Local file changed	mt-static/js/tc.js
    Upload	Local file changed	php/lib/MTUtil.php
    Upload	Local file changed	php/lib/MTViewer.php
    Upload	Local file changed	php/lib/block.MTEntries.php
    Upload	Local file changed	php/lib/block.MTEntryIfTagged.php
    Upload	Local file changed	php/lib/block.MTIfCategory.php
    Upload	Local file changed	php/lib/function.MTArchiveCount.php
    Upload	Local file changed	php/lib/function.MTVersion.php
    Upload	Local file changed	php/lib/mtdb_base.php
    Upload	Local file changed	php/lib/mtdb_mysql.php
    Upload	Local file changed	php/lib/mtdb_postgres.php
    Upload	Local file changed	php/lib/mtdb_sqlite.php
    Upload	Local file changed	php/lib/sanitize_lib.php
    Upload	Local file changed	php/plugins/init.nofollow.php
    Upload	Local file changed	plugins/GoogleSearch/GoogleSearch.pl
    Upload	Local file changed	plugins/StyleCatcher/base-weblog.css
    Upload	Local file changed	plugins/StyleCatcher/stylecatcher.cgi
    Upload	Local file changed	plugins/StyleCatcher/stylecatcher.pl
    Upload	Local file changed	plugins/TemplateRefresh/TemplateRefresh.pl
    Upload	Local file changed	plugins/WidgetManager/WidgetManager.pl
    Upload	Local file changed	plugins/WidgetManager/widget-manager.cgi
    Upload	Local file changed	plugins/feeds-app-lite/mt-feeds.pl
    Upload	Local file changed	plugins/nofollow/nofollow.pl
    Upload	Local file changed	plugins/spamlookup/spamlookup.pl
    Upload	Local file changed	plugins/spamlookup/spamlookup_urls.pl
    Upload	Local file changed	plugins/spamlookup/spamlookup_words.pl
    Upload	Local file changed	tmpl/cms/edit_comment.tmpl
    Upload	Local file changed	tmpl/cms/edit_commenter.tmpl
    Upload	Local file changed	tmpl/cms/edit_ping.tmpl
    Upload	Local file changed	tmpl/cms/list_tags.tmpl
    Upload	Local file changed	tmpl/wizard/complete.tmpl
    Upload	Local file changed	tmpl/wizard/configure.tmpl
    Upload	Local file changed	tmpl/wizard/header.tmpl
    Upload	Local file changed	tmpl/wizard/optional.tmpl
    Upload	Local file changed	tmpl/wizard/packages.tmpl
    Upload	Local file changed	lib/MT/App/ActivityFeeds.pm
    Upload	Local file changed	lib/MT/App/CMS.pm
    Upload	Local file changed	lib/MT/App/Comments.pm
    Upload	Local file changed	lib/MT/App/NotifyList.pm
    Upload	Local file changed	lib/MT/App/Search.pm
    Upload	Local file changed	lib/MT/App/Trackback.pm
    Upload	Local file changed	lib/MT/App/Upgrader.pm
    Upload	Local file changed	lib/MT/App/Viewer.pm
    Upload	Local file changed	lib/MT/App/Wizard.pm
    Upload	Local file changed	lib/MT/FileMgr/Local.pm
    Upload	Local file changed	lib/MT/I18N/default.pm
    Upload	Local file changed	lib/MT/I18N/en_us.pm
    Upload	Local file changed	lib/MT/I18N/ja.pm
    Upload	Local file changed	lib/MT/L10N/ja.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBI.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBM.pm
    Upload	Local file changed	lib/MT/Plugin/JunkFilter.pm
    Upload	Local file changed	lib/MT/Plugin/L10N.pm
    Upload	Local file changed	lib/MT/Template/Context.pm
    Upload	Local file changed	lib/MT/Template/ContextHandlers.pm
    Upload	Local file changed	mt-static/js/tc/alert.js
    Upload	Local file changed	mt-static/js/tc/autocomplete.js
    Upload	Local file changed	mt-static/js/tc/benchmark.js
    Upload	Local file changed	mt-static/js/tc/client.js
    Upload	Local file changed	mt-static/js/tc/colorpicker.js
    Upload	Local file changed	mt-static/js/tc/cookie.js
    Upload	Local file changed	mt-static/js/tc/focus.js
    Upload	Local file changed	mt-static/js/tc/frankencode.js
    Upload	Local file changed	mt-static/js/tc/gestalt.js
    Upload	Local file changed	mt-static/js/tc/json.js
    Upload	Local file changed	mt-static/js/tc/mixer.js
    Upload	Local file changed	mt-static/js/tc/preview.js
    Upload	Local file changed	mt-static/js/tc/spellcheck.js
    Upload	Local file changed	mt-static/js/tc/tableselect.js
    Upload	Local file changed	mt-static/js/tc/tagcomplete.js
    Upload	Local file changed	mt-static/js/tc/window.js
    Upload	Local file changed	mt-static/js/tc/wordselect.js
    Upload	Local file changed	plugins/StyleCatcher/lib/StyleCatcher.pm
    Upload	No remote file	plugins/WidgetManager/default_widgets/powered_by.tmpl
    Upload	Local file changed	plugins/WidgetManager/default_widgets/recent_comments.tmpl
    Upload	Local file changed	plugins/WidgetManager/default_widgets/subscribe_to_feed.tmpl
    Upload	Local file changed	plugins/WidgetManager/default_widgets/widgets.cfg
    Upload	Local file changed	plugins/WidgetManager/tmpl/header.tmpl
    Upload	Local file changed	plugins/WidgetManager/tmpl/list.tmpl
    Upload	Local file changed	plugins/spamlookup/lib/spamlookup.pm
    Upload	Local file changed	extras/examples/plugins/l10nsample/l10nsample.cgi
    Upload	Local file changed	extras/examples/plugins/l10nsample/l10nsample.pl
    Upload	Local file changed	lib/MT/ObjectDriver/DBI/mysql.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBI/postgres.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBI/sqlite.pm
    Upload	Local file changed	mt-static/js/tc/mixer/display.js
    Upload	Local file changed	mt-static/js/tc/mixer/tagmatch.js
    Upload	Local file changed	plugins/GoogleSearch/lib/GoogleSearch/L10N.pm
    Upload	Local file changed	plugins/StyleCatcher/lib/StyleCatcher/L10N.pm
    Upload	Local file changed	plugins/WidgetManager/lib/WidgetManager/App.pm
    Upload	Local file changed	plugins/WidgetManager/lib/WidgetManager/Plugin.pm
    Upload	Local file changed	plugins/WidgetManager/lib/WidgetManager/Util.pm
    Upload	Local file changed	plugins/spamlookup/lib/spamlookup/L10N.pm
    Upload	Local file changed	extras/examples/plugins/l10nsample/lib/l10nsample.pm
    Upload	Local file changed	extras/examples/plugins/mirror/lib/Mirror.pm
    Upload	Local file changed	plugins/GoogleSearch/lib/GoogleSearch/L10N/en_us.pm
    Upload	Local file changed	plugins/GoogleSearch/lib/GoogleSearch/L10N/ja.pm
    Upload	Local file changed	plugins/WidgetManager/lib/WidgetManager/L10N/ja.pm
    Upload	Local file changed	plugins/feeds-app-lite/lib/MT/App/FeedsWidget.pm
    Upload	Local file changed	plugins/feeds-app-lite/lib/MT/Feeds/Find.pm
    Upload	Local file changed	plugins/feeds-app-lite/lib/MT/Feeds/Lite.pm
    Upload	Local file changed	extras/examples/plugins/l10nsample/lib/l10nsample/L10N.pm
    Upload	Local file changed	plugins/feeds-app-lite/lib/MT/Feeds/Lite/CacheMgr.pm

# See also

-   Release announcement: <http://www.sixapart.com/movabletype/news/2006/09/mt_333-mte_103_updates.html>
-   "Professional Network blog" announcement: <http://www.sixapart.com/pronet/weblog/2006/09/mt_333-mte_103_patches.html>
-   Previous upgrade notes: [Movable Type 3.2 to 3.31 upgrade notes](/wiki/Movable_Type_3.2_to_3.31_upgrade_notes)
