---
tags: ubb.threads wiki
---

A little tired of doing multi-step manual upgrades to [UBB.threads](/wiki/UBB.threads) (for example, see the notes for the last upgrade, "[UBB.threads 7.0.2 to 7.1 upgrade notes](/wiki/UBB.threads_7.0.2_to_7.1_upgrade_notes)"), I decided to come up with a shell script that would at least guide the process.

The basic procedure is as follows:

1.  Download new version from Members Area: <http://www.infopop.com/members/members.php>
2.  Log in to control panel and close board
3.  Backup the database
4.  Backup the installed files
5.  Temporarily relax permissions (so that the uploads will work)
6.  Perform the upload using [Interarchy](/wiki/Interarchy)'s Auto Upload feature
7.  Restore the permissions
8.  Run the upgrade script `install/upgrade.php` from within the browser
9.  Remove the install directory from the server
10. Open the forums again

Quite tedious to do all this manually, especially if you have more than one install to upgrade.

# The script

The script does as much of the work as possible, prompting when some sort of external action is required that it can't perform (such as closing the control panel or uploading the files).

Here is the first draft of the script. It is customized for my own setup and not something that you could drop-in to your own server and expect things to work; nevertheless it may give some ideas.

    #!/bin/sh
    # $Id$

    # update for each new version
    OLD_VERSION="7_1"

    # set and forget
    BACKUP1="wincent_ubb_${OLD_VERSION}"
    BACKUP2="pw_ubb_${OLD_VERSION}"
    USERNAME1=blah
    DATABASE1=blah
    USERNAME2=blah
    DATABASE2=blah
    INSTALL1=/path/to/forums
    INSTALL2=/path/to/other/forums
    APACHE1=user
    APACHE2=user

    #
    # Functions
    #

    upload_instructions()
    {
      echo 
      echo "Upload all files/folders except for these directories:"
      echo "  - includes"
      echo "  - languages"
      echo "  - styles"
      echo "  - cache_builders/custom"
      echo "Once uploading is complete, will revert permissions to their former state."
      echo "Please indicate that you have finished uploading:"
      continue_or_abort
    }

    continue_or_abort()
    {
      echo
      read -n 1 -p "Press Y to continue, A to abort: " RESPONSE
      if [ "$RESPONSE" = "Y" -o "$RESPONSE" = "y" ]; then
        echo
        return
      else
        echo
        echo "Aborting!"
        exit 1
      fi
    }

    reset_permissions()
    {
      APACHE="$1"
      sudo chmod -v 755 .
      sudo chmod -v 777 includes
      sudo chmod -v 666 includes/*
      sudo chmod -v 777 sessions
      sudo chmod -v 777 templates/compile
      sudo chmod -v 777 templates
      sudo chmod -v 777 cache
      sudo chmod -v 777 cache_builders
      sudo chmod -v 777 cache_builders/custom
      sudo chmod -v 666 cache_builders/custom/*
      sudo chmod -v 777 styles
      sudo chmod -v 666 styles/*.php styles/*.css
      sudo chown -Rv $APACHE:$APACHE *
      
      echo
      echo "Now run the upgrade script (install/upgrade.php) from within the browser."
      echo "Please indicate that you have finished running the script:"
      continue_or_abort
      
      echo
      echo "Will remove the installation directory:"
      sudo rm -rf install
    }

    #
    # Main
    #

    set -e

    read -p "Please enter a tag for the backup archives [$OLD_VERSION]: " TAG
    if [ "$TAG" != "" ]; then
      OLD_VERSION="$TAG"
    fi

    echo
    echo "Before continuing, log in to the control panels and close the boards."
    echo "Please indicate that you have closed the boards:"
    continue_or_abort

    cd

    echo "Dumping forums.wincent.com database"
    mysqldump --opt -u $USERNAME1 -p -h localhost $DATABASE1 | bzip2 -c > $BACKUP1.sql.bz2

    echo "Dumping piratewatch.wincent.com database"
    mysqldump --opt -u $USERNAME2 -p -h localhost $DATABASE2 | bzip2 -c > $BACKUP2.sql.bz2

    echo "You may now be prompted for your sudo password for the file backup"
    sudo -v

    echo "Backing up forums.wincent.com files"
    cd $INSTALL1
    sudo tar -c -v . > ~/$BACKUP1.tar
    gzip --verbose -9 ~/$BACKUP1.tar

    echo "Backing up piratewatch.wincent.com files"
    cd $INSTALL2
    sudo tar -c -v . > ~/$BACKUP2.tar
    gzip --verbose -9 ~/$BACKUP2.tar

    echo "Will now relax the permissions on the forums.wincent.com installation folder"
    continue_or_abort
    cd $INSTALL1
    sudo chmod -Rv 777 .
    upload_instructions
    reset_permissions "$APACHE1"

    echo "Will now relax permissions on the piratewatch.wincent.com installation folder"
    continue_or_abort
    cd $INSTALL2
    sudo chmod -Rv 777 .
    upload_instructions
    reset_permissions "$APACHE2"

    echo
    echo "All done! You can now re-open your forums"

    exit 0

# Cleanup

Although the script as shown worked for me in the 7.1 to 7.1.1 upgrade, the [UBB.threads](/wiki/UBB.threads) upgrade script itself is not infallible. I had another install that had not yet been upgraded to 7.1, and on updating the language files [UBB.threads](/wiki/UBB.threads) introduced a syntax error into one of the files that I had to go in and fix manually.

I then ran the following command to make sure that there were no other errors anywhere in the install:

    find . -name "*.php" -exec php -l {} \;

This found one other minor error elsewhere in the installation, so I recommend running this sweeping check before and after any [UBB.threads](/wiki/UBB.threads) upgrade, just in case.

# See also

-   Release announcement: <http://www.ubbcentral.com/forums/ubbthreads.php?ubb=showflat&Number=182825>
-   Change log: <http://www.ubbcentral.com/forums/ubbthreads.php/ubb/showflat/Number/182824>
-   Release discussion: <http://www.ubbcentral.com/forums/ubbthreads.php/ubb/showflat/Number/182202>
-   Previous release list: <http://www.ubbcentral.com/support/version.php?product=UBB.threads>
