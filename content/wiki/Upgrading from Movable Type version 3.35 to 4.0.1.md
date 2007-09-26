---
tags: movable.type
---

For such a large upgrade this was actually an amazing painless operation.

# Backup

    #!/bin/sh

    # update for each new version
    OLD_VERSION="3_35"

    # set and forget
    BACKUP="mt_${OLD_VERSION}"
    USERNAME=foo
    DATABASE=bar
    INSTALL=baz

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

# Installation

I then followed the advice at [the official Movable Type site](http://www.movabletype.org/documentation/upgrade/) and did a clean install rather than an in-place upgrade.

The first thing I did was disable the "nofollow" plug-in and then I actually deleted the corresponding files from the server.

I then copied the new 4.0.1 directory into place and navigated to the web interface. I answered a few questions (database, username, password and such) and MT upgraded my database for me.

Finally I uploaded my [wikitext](/wiki/wikitext) plug-in (many of my entries are written using [wiki](/wiki/wiki) markup) and as far as I can tell the plug-in will work unchanged on 4.0.1.

I really couldn't be more impressed with the ease of the upgrade.
