---
tags: movable.type wiki
---

# Downloading

Amazingly, downloading was even more painful than ever. Not only did the [tar](/wiki/tar) archive refuse to extract (as was the case with version 3.33, and the version before that; I am basically resigned to the fact that their system is broken and that they'll never fix it):

    tar xzvf MT-3.34-en.tar.gz 
    tar: This does not look like a tar archive
    tar: Skipping to next header
    tar: Archive contains obsolescent base-64 headers
    tar: Read 1816 bytes from MT-3.34-en.tar.gz
    tar: Error exit delayed from previous errors

But this time [six apart](/wiki/six_apart) required me to provide an email address before downloading. It's annoying enough that you have to jump through hoops and sign in via their [TypeKey](/wiki/TypeKey) registration service before downloading; but this time they required an active, deliverable email address in order to proceed with the download. This is actually a multi-step process:

1.  Answer yes, let [six apart](/wiki/six_apart) have my email address.
2.  Find out that given that your email address on file with [TypeKey](/wiki/TypeKey) is unconfirmed that you must "Activate" it. Of course, in my case, the old address I'd provided, <win@wincent.org>, has long since been deactivated due to spam, so I didn't receive the confirmation email.
3.  Request for the confirmation email to be resent, this time providing a different (throwaway) email address.

I'm actually secretly hoping that I receive spam at the throwaway address as it will fuel my already substantial dislike for [six apart](/wiki/six_apart) and its nauseating business practices. They shouldn't be making it this hard for paying customers to get security updates for their buggy software. They shouldn't need my email address for any reason and they most definitely shouldn't be requiring that I supply it to them before letting me download.

So, rant aside, it was time to unzip the alternative download:

    unzip MT-3.34-en.zip

# Backup

As described on the page, "[Movable Type security notes](/wiki/Movable_Type_security_notes)", I use a secret install location for a little bit of security through obscurity. In these notes I'll just refer to the install directory as `mt`.

## Backup the database

    OLD_VERSION="3.33"
    NEW_VERSION="3.34"
    DATABASE_NAME="my_database"
    DATABASE_USER="db_user"

    mysqldump --opt -u "${DATABASE_USER}" -p -h localhost "${DATABASE_NAME}" | \
      bzip2 -c > ~/movable-type-${OLD_VERSION}-db-backup.tar.gz

## Backup the installed files

This step is particularly important seeing as we'll be using an automated tool ([Interarchy](/wiki/Interarchy)) to do a potentially destructive automatic mirroring operation (so as to ease the pain of installing over 1,300 files).

    sudo -v
    cd secret_install_path
    sudo tar -c -v . > ~/movable-type-${OLD_VERSION}-files-backup.tar
    gzip --verbose -9 ~/movable-type-${OLD_VERSION}-files-backup.tar

# Mirroring

1.  On the localhost rename the old [Movable Type](/wiki/Movable_Type) directory to `mt-old` or `mt-3.33`.
2.  Move the newly extracted 3.34 files into place (`mt` or the secret name of your choice).
3.  Copy custom files from the old directory into the new one (see below for more details).
4.  Use [Interarchy](/wiki/Interarchy) to perform a mirror upload (uploading in-place over the old files should preserve their permissions); "File" menu, "Connect to Server...", Protocol "SFTP", Action "Mirror", fill in the appropriate "Server", "Path" (absolute path to secret install directory, no trailing slash required), "Username" (no need to supply password as will use public key authentication), "Source" (the local folder) and "Mirror Mode" ("Upload"), from the action menu choose "Add to Bookmarks" instead of "Mirror Now", then press the "Bookmark" (Play) button.

Finally, in the "Bookmarks" view, chose a reasonable title for the saved bookmark ("Movable Type mirror upgrade") and right-click on the bookmark to choose "Mirror Dry Run". If the dry run looks all right, perform the actual mirror by double-clicking.

## Custom files

I determined which custom files needed to be copied by running the following commands:

    diff mt-old mt
    diff -r mt-old mt | less
    diff -r mt-old mt | grep "Only in"

Basically, I was looking for lines of the form:

    Only in mt-old: mt-config.cgi

And anything else that looked like it might need bringing over. In any case it's interesting to see what lines changed between the two releases seeing as [six apart](/wiki/six_apart)'s release notes are not very forthcoming. Of the nearly substantive 800 lines in the [diff](/wiki/diff) output (`diff -r mt-old mt | grep '^[><]' | wc`) almost all of them where just updated copyright notices. There were 278 lines after stripping out `$Id` tags and copyright notices (`diff -r mt-old mt | grep '^[><]' | grep -v '$Id' | grep -v 'Copyright' | wc`); quite a few of those remaining lines are documentation and "bookkeeping" changes (updated version strings and the like).

The custom files that should be copied over in my case were handled as follows:

    cp mt-old/.htaccess mt/
    cp mt-old/mt-config.cgi mt/
    cp mt-old/plugins/Markdown.pl mt/plugins

    # confirm that the custom files in old and new are now in sync:
    diff -r mt-old mt | grep "Only in"

# Mirror report

The mirroring operation lasted from 14:10 to 14:13. I can't recommend [Interarchy](/wiki/Interarchy) strongly enough for this kind of thing.

There were 120 changes (all uploads):

    Upload	Local file changed	index.html
    Upload	Local file changed	mt-add-notify.cgi
    Upload	Local file changed	mt-atom.cgi
    Upload	Local file changed	mt-check.cgi
    Upload	Local file changed	mt-comments.cgi
    Upload	Local file changed	mt-config.cgi-original
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
    Upload	Local file changed	lib/MT.pm
    Upload	Local file changed	mt-static/mt.js
    Upload	Local file changed	php/mt.php
    Upload	Local file changed	tools/run-periodic-tasks
    Upload	Local file changed	lib/MT/App.pm
    Upload	Local file changed	lib/MT/Atom.pm
    Upload	Local file changed	lib/MT/AtomServer.pm
    Upload	Local file changed	lib/MT/Author.pm
    Upload	Local file changed	lib/MT/Blocklist.pm
    Upload	Local file changed	lib/MT/Blog.pm
    Upload	Local file changed	lib/MT/Bootstrap.pm
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
    Upload	Local file changed	lib/MT/PluginData.pm
    Upload	Local file changed	lib/MT/Promise.pm
    Upload	Local file changed	lib/MT/Request.pm
    Upload	Local file changed	lib/MT/Sanitize.pm
    Upload	Local file changed	lib/MT/Serialize.pm
    Upload	Local file changed	lib/MT/Session.pm
    Upload	Local file changed	lib/MT/TBPing.pm
    Upload	Local file changed	lib/MT/TaskMgr.pm
    Upload	Local file changed	lib/MT/Template.pm
    Upload	Local file changed	lib/MT/TemplateMap.pm
    Upload	Local file changed	lib/MT/Trackback.pm
    Upload	Local file changed	lib/MT/Upgrade.pm
    Upload	Local file changed	lib/MT/WeblogPublisher.pm
    Upload	Local file changed	lib/MT/XMLRPC.pm
    Upload	Local file changed	lib/MT/XMLRPCServer.pm
    Upload	Local file changed	lib/MT/default-templates.pl
    Upload	Local file changed	php/lib/MTSerialize.php
    Upload	Local file changed	php/lib/MTUtil.php
    Upload	Local file changed	php/lib/MTViewer.php
    Upload	Local file changed	php/lib/mtdb_mysql.php
    Upload	Local file changed	php/lib/mtdb_postgres.php
    Upload	Local file changed	php/lib/mtdb_sqlite.php
    Upload	Local file changed	php/lib/sanitize_lib.php
    Upload	Local file changed	plugins/StyleCatcher/stylecatcher.cgi
    Upload	Local file changed	plugins/StyleCatcher/stylecatcher.pl
    Upload	Local file changed	plugins/nofollow/nofollow.pl
    Upload	Local file changed	plugins/spamlookup/spamlookup.pl
    Upload	Local file changed	plugins/spamlookup/spamlookup_urls.pl
    Upload	Local file changed	plugins/spamlookup/spamlookup_words.pl
    Upload	Local file changed	tmpl/cms/rebuild_confirm.tmpl
    Upload	Local file changed	lib/MT/App/ActivityFeeds.pm
    Upload	Local file changed	lib/MT/App/Comments.pm
    Upload	Local file changed	lib/MT/App/NotifyList.pm
    Upload	Local file changed	lib/MT/App/Trackback.pm
    Upload	Local file changed	lib/MT/App/Upgrader.pm
    Upload	Local file changed	lib/MT/App/Viewer.pm
    Upload	Local file changed	lib/MT/FileMgr/Local.pm
    Upload	Local file changed	lib/MT/I18N/default.pm
    Upload	Local file changed	lib/MT/I18N/en_us.pm
    Upload	Local file changed	lib/MT/I18N/ja.pm
    Upload	Local file changed	lib/MT/L10N/de-iso-8859-1.pm
    Upload	Local file changed	lib/MT/L10N/de.pm
    Upload	Local file changed	lib/MT/L10N/en_us.pm
    Upload	Local file changed	lib/MT/L10N/es-iso-8859-1.pm
    Upload	Local file changed	lib/MT/L10N/es.pm
    Upload	Local file changed	lib/MT/L10N/fr-iso-8859-1.pm
    Upload	Local file changed	lib/MT/L10N/fr.pm
    Upload	Local file changed	lib/MT/L10N/ja.pm
    Upload	Local file changed	lib/MT/L10N/nl-iso-8859-1.pm
    Upload	Local file changed	lib/MT/L10N/nl.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBI.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBM.pm
    Upload	Local file changed	lib/MT/Plugin/JunkFilter.pm
    Upload	Local file changed	lib/MT/Plugin/L10N.pm
    Upload	Local file changed	lib/MT/Template/Context.pm
    Upload	Local file changed	lib/MT/Template/ContextHandlers.pm
    Upload	Local file changed	mt-static/js/tc/client.js
    Upload	Local file changed	mt-static/js/tc/json.js
    Upload	Local file changed	plugins/StyleCatcher/lib/StyleCatcher.pm
    Upload	Local file changed	plugins/StyleCatcher/tmpl/header.tmpl
    Upload	Local file changed	plugins/spamlookup/lib/spamlookup.pm
    Upload	Local file changed	extras/examples/plugins/l10nsample/l10nsample.cgi
    Upload	Local file changed	extras/examples/plugins/l10nsample/l10nsample.pl
    Upload	Local file changed	lib/MT/ObjectDriver/DBI/postgres.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBI/sqlite.pm
    Upload	Local file changed	plugins/StyleCatcher/lib/StyleCatcher/L10N.pm
    Upload	Local file changed	plugins/WidgetManager/lib/WidgetManager/App.pm
    Upload	Local file changed	extras/examples/plugins/l10nsample/lib/l10nsample.pm
    Upload	Local file changed	extras/examples/plugins/mirror/lib/Mirror.pm
    Upload	Local file changed	extras/examples/plugins/l10nsample/lib/l10nsample/L10N.pm

# Completing the upgrade

The next step is to hit `mt-upgrade.cgi` in your browser. For some reason I got an error when I did this and "`script not found or unable to stat`" appeared in the [Apache](/wiki/Apache) error log.

So I went to the root (`index.html`) and was prompted to log in; it allowed me to log in and so I tried hitting `mt-upgrade.cgi` again and this time it worked.

For security, I then removed the `mt-upgrade.cgi` file from the server.

# Security

I am getting tired of having to keep abreast with security updates for so many web-facing applications; this week alone I've had to install new versions of [WordPress](/wiki/WordPress), [MediaWiki](/wiki/MediaWiki) and now [Movable Type](/wiki/Movable_Type). I new release of [Bugzilla](/wiki/Bugzilla) is also just around the corner. Unfortunately due to the security flaws in the packages these upgrades are all "no choice", "do it your hosed" kinds of upgrades. I'm definitely looking forward to the day when I can retire *all* of these packages and replace them with a single, monstrous, custom web app written in [Ruby on Rails](/wiki/Ruby_on_Rails). Of course, there are two things stopping me doing that right now: one is lack of time, and the other is lack of maturity in the framework (something to be taken very seriously when you are talking about founding your entire online business presence upon it); but hopefully by the time [Rails](/wiki/Rails) hits 2.0 I'll be prepared to migrate to it.

# See also

-   Upgrade notes for other versions: "[Movable Type upgrade notes](/wiki/Movable_Type_upgrade_notes)"
-   Official release notes: <http://www.sixapart.com/movabletype/news/2007/01/mt334_released.html>
-   Security vulnerabilties fixed: <http://www.sixapart.com/movabletype/beta/distros/MT-3.34-beta-Release-Notes.html>
