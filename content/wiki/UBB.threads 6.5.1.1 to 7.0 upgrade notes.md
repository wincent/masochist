---
tags: ubb.threads wiki
---

# Backup

-   Log in to control panel and close board
-   Copy text from control panel, "Display Options", "General", "HTML Includes"
-   Perform backup of database:

<!-- -->

    mysqldump --opt -u USERNAME -p -h localhost DATABASE_NAME | \
      bzip2 -c > BACKUP_FILE.sql.bz2

# Installation

-   Create a new database for the new forums:

<!-- -->

    mysql -u root -p
    CREATE DATABASE new_db_name;
    GRANT ALL ON new_db_name.* TO 'new_user_name'@'localhost';
    SET PASSWORD FOR 'new_user_name'@'localhost' = OLD_PASSWORD('new_password');
    FLUSH PRIVILEGES;

(The `OLD_PASSWORD` trick is necessary because [UBB.threads](/wiki/UBB.threads) will be connecting to the database using PHP, and the version of PHP on the server is compiled against a pre-4.1 version of the MySQL libraries; see [this page on password hashing](http://dev.mysql.com/doc/refman/4.1/en/password-hashing.html) for more information.)

-   Create new forums directory:

<!-- -->

    sudo -u WEB_USER mkdir new-forums
    sudo -u WEB_USER /bin/echo "Forums currently unavailable while upgrade is in progress" > \
      new-forums/index.html

-   Move old forums out-of-the-way:

<!-- -->

    sudo -u WEB_USER mv forums old-forums
    sudo -u WEB_USER mv new-forums forums

-   Install the new forums according to the instructions into `new-forums`:

<!-- -->

    sudo -u WEB_USER mkdir new-forums

-   Upload the files into, then set permissions and move new forums into place:

<!-- -->

    cd new-forums
    sudo chmod 777 includes
    sudo chmod 666 includes/*
    sudo chmod 777 sessions
    sudo chmod 777 templates/compile
    sudo chmod 777 templates
    sudo chmod 777 cache
    sudo chmod 777 cache_builders
    sudo chmod 777 cache_builders/custom
    sudo chmod 666 cache_builders/custom/*
    sudo chmod 777 styles
    sudo chmod 666 styles/*.php styles/*.css
    cd ..
    sudo rm -r forums
    sudo mv new-forums forums

-   Run the upgrade script at: <http://example.com/path_to_forums/install/install.php>
-   Use a custom cookie prefix to prevent cookies from other apps (such as [Bugzilla](/wiki/Bugzilla)) from interfering with the forums.
-   As this is an upgrade installation, do not create an admin user; instead proceed directly to the "Creating your tables" step.

# Import

-   Upload importer script
-   Execute in browser

<!-- -->

    Importing Banned Host: NULL
    Script: 
    Line#: 
    SQL Error: 
    SQL Error #: 0
    Query: insert into ubbt_BANNED_HOSTS values ( NULL )

On investigation:

    mysql> USE old_database_name;
    mysql> SELECT * FROM w3t_Banned;
    +------------+
    | B_Hostname |
    +------------+
    | NULL       |
    +------------+
    1 row in set (0.00 sec)

    mysql> delete from w3t_Banned;

Inspection of the `threads_import.php` script indicated that it would probably be safe to go back and pick up import from where it left off by visiting: <http://example.com/path_to_forums/importers/threads_import.php?ubb=extras>

Only glitch at end is that I saw some [PHP](/wiki/PHP) warnings with regard to my `open_basedir` restriction; may have to disable that for the forums directory.

-   Restore settings not transferred in the import:
    -   Master Settings
        -   Primary Settings
            -   General
                -   Community Name: Wincent Forums
                -   Board Email Address: <forums-noreply@wincent.com>
                -   Show Debug Information in Footer? no
            -   Censor
                -   Enable Censor?: yes
        -   Feature Settings
            -   General
                -   Member List Visibility: No Users
                -   Enable "Mail Topic to Friend"?: no
                -   Flood Check Time: 60
                -   Enable Topic Ratings?: yes
                -   Enable Member Ratings?: yes
    -   Display Options
        -   General
            -   Primary
                -   Homepage URL: <http://wincent.com/>
                -   Text for homepage URL: Wincent
                -   Contact Link Type: Contact URL
                -   "Contact Us" URL: <http://wincent.com/a/contact/mail/>
                -   Text for contact link: Contact
                -   Privacy Statement Link: Use Privacy Statement URL
                -   Privacy Statement URL: <http://wincent.com/a/about/privacy/>
                -   Who's Online Timeframe: 60
                -   Show Forum Moderators? no
            -   Date & Time
                -   Default Time Format: d M Y | h:i A
                -   Available Time Formats: (add) d M Y | h:i A
    -   Membership
        -   Registration Settings
            -   Basic Options
                -   Enable Email Verification?: yes
                -   Allow Special Characters in Display Names?: no
                -   Board Rules: (update)
            -   Registration Screen
                -   Add "Show" for:
                    -   Avatar
                    -   Accept Private Messages
                    -   Signature
                    -   Homepage
                    -   Occupation
                    -   Hobbies
                    -   Location
                    -   Time Format
                    -   Time Offset
                    -   View Signatures
                    -   Flat or Threaded
                    -   Topics Per Page
                    -   Replies Per Page
                    -   Show Users's Avatars
                    -   Email on Private Message Receipt
                -   Add "Show & Require" for:
                    -   Visible on "Who's Online"
            -   Reserved Names: (add) (.\*?)wincent(.\*?)
-   Customize forum templates to get old "look and feel" back
    -   See "Default Header" and "Header Insert" in the "Display Options/General/HTML Includes" section of the control panel.
-   Replace ugly redirect in `index.php` with immediate ([PHP](/wiki/PHP)) redirect
-   [Apply fix](http://www.ubbcentral.com/forums/ubbthreads.php?ubb=showflat&Number=165070&page=0#Post165064) for RSS template bug

# Cleanup

Due to permissions errors I'm temporarily turning off [PHP](/wiki/PHP) [Safe Mode](/wiki/Safe_Mode) within the forums directory and changing the ownership on all files:

    cd path_to_forums
    sudo chown -R apache_user:apache_group *

-   Drop old database

<!-- -->

    USE mysql;
    DROP DATABASE old_database_name;
    DELETE FROM user WHERE User = 'old_username';
    DELETE FROM db WHERE Db = 'old_database_name';
    FLUSH PRIVILEGES;

-   Remove old forum files
-   Upload redirection scripts so that old links will continue to work
-   Delete `importers` and `install` subdirectories
