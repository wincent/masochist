---
tags: movable.type wiki
---

# Background

I've written in the past that [I don't like the Movable Type upgrade](http://wincent.com/a/about/wincent/weblog/archives/2006/09/the_movable_typ.php) procedure. The last upgrade was the worst one ever (see "[Upgrading from Movable Type version 3.33 to 3.34](/wiki/Upgrading_from_Movable_Type_version_3.33_to_3.34)").

Thankfully, for version 3.35 they've [instituted](http://www.sixapart.com/movabletype/news/2007/04/mt335_released.html) a long overdue change:

> Coincidentally, we recently made big changes to how you download Movable Type as well. Now users seeking the personal and free edition of Movable Type no longer have to hunt for the link, or create an account in TypeKey to download the software. Just click the big button that says "Download Movable Type."

The other improvement is that for the first time in many moons the [tar](/wiki/tar) archive is actually extractable! Just to be sure there were no funny going-on I also downloaded the "non-free" version by logging in first and then performing a diff on the two expanded archives (using `diff -r`). Curiously, although `diff` reported no differences at all, the [MD5](/wiki/MD5) checksums on the two tarballs were different; perhaps some kind of on-the-fly "watermarking" is being done to the "non-free" downloads.

# Helper script

Just as I did earlier today with my [UBB.threads](/wiki/UBB.threads) upgrade, I decided to make a helper shell script to guide and automate the upgrade process insofar as it is possible (see "[UBB.threads 7.1 to 7.1.1 upgrade notes](/wiki/UBB.threads_7.1_to_7.1.1_upgrade_notes)"). The overall procedure is:

1.  Merge custom files from the old install into the new install; unfortunately, this is time-consuming process that can only be done manually: please see the separate article, "[Determining which custom files need to be merged when performing Movable Type upgrades](/wiki/Determining_which_custom_files_need_to_be_merged_when_performing_Movable_Type_upgrades)".
2.  Backup the database.
3.  Backup the installed files.
4.  Perform the upload

There is much less for this helper script to do, so it is quite simple:

    #!/bin/sh
    # $Id$

    # update for each new version
    OLD_VERSION="3_34"

    # set and forget
    BACKUP="mt_${OLD_VERSION}"
    USERNAME=blah
    DATABASE=blah
    INSTALL=/path/to/mt/install

    #
    # Main
    #

    set -e

    read -p "Please enter a tag for the backup archives [$OLD_VERSION]: " TAG
    if [ "$TAG" != "" ]; then
      OLD_VERSION="$TAG"
    fi

    cd

    echo "Dumping database"
    mysqldump --opt -u $USERNAME -p -h localhost $DATABASE | bzip2 -c > $BACKUP.sql.bz2

    echo "You may now be prompted for your sudo password for the file backup"
    sudo -v

    echo "Backing up files"
    cd $INSTALL
    sudo tar -c -v . > ~/$BACKUP.tar
    gzip --verbose -9 ~/$BACKUP.tar

    echo "All done! You can now upload the new version."

    exit 0

# Performing the upload

Uploading is very simple using [Interarchy](/wiki/Interarchy) and the bookmark created during the last update (see "[Upgrading from Movable Type version 3.33 to 3.34](/wiki/Upgrading_from_Movable_Type_version_3.33_to_3.34)"). Double-clicking on the "Movable Type mirror upgrade" bookmark triggers the operation; if you wish to do a dry-run first you can right-click and choose "Mirror Dry Run" from the contextual menu instead.

## Mirror results

There were 28 changes in all and all of them were uploads:

    Upload	Local file changed	php/lib/MTUtil.php
    Upload	Local file changed	php/lib/MTViewer.php
    Upload	Local file changed	php/lib/function.MTDate.php
    Upload	No remote file	php/lib/l10n_de.php
    Upload	No remote file	php/lib/l10n_es.php
    Upload	No remote file	php/lib/l10n_fr.php
    Upload	No remote file	php/lib/l10n_nl.php
    Upload	Local file changed	plugins/GoogleSearch/GoogleSearch.pl
    Upload	Local file changed	plugins/nofollow/nofollow.pl
    Upload	Local file changed	tmpl/wizard/configure.tmpl
    Upload	Local file changed	tmpl/wizard/mt-config.tmpl
    Upload	Local file changed	tmpl/wizard/optional.tmpl
    Upload	Local file changed	tmpl/wizard/packages.tmpl
    Upload	Local file changed	tmpl/wizard/start.tmpl
    Upload	Local file changed	lib/MT/App/Wizard.pm
    Upload	Local file changed	lib/MT/L10N/de-iso-8859-1.pm
    Upload	Local file changed	lib/MT/L10N/de.pm
    Upload	Local file changed	lib/MT/L10N/es-iso-8859-1.pm
    Upload	Local file changed	lib/MT/L10N/es.pm
    Upload	Local file changed	lib/MT/L10N/fr-iso-8859-1.pm
    Upload	Local file changed	lib/MT/L10N/fr.pm
    Upload	Local file changed	lib/MT/L10N/ja.pm
    Upload	Local file changed	lib/MT/L10N/nl-iso-8859-1.pm
    Upload	Local file changed	lib/MT/L10N/nl.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBM.pm
    Upload	Local file changed	lib/MT/Template/ContextHandlers.pm
    Upload	Local file changed	lib/MT/ObjectDriver/DBI/postgres.pm
    Upload	Local file changed	plugins/WidgetManager/lib/WidgetManager/App.pm

# Finishing the upgrade

Visit `mt-upgrade.cgi` using the browser and upon successful completion remove it from the server.

# Manual patching of template security flaws

This upgrade also requires manual patching of system templates:

See: <http://www.sixapart.com/movabletype/news/2007/04/mt335_released.html>

# See also

-   Notes for other versions: [Movable Type upgrade notes](/wiki/Movable_Type_upgrade_notes)
