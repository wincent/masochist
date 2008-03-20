---
tags: sqlite mail.app
---

On rebooting after my latest [kernel panic](/wiki/kernel_panic) I found that I couldn't launch [Mail.app](/wiki/Mail.app); it would just [beachball](/wiki/beachball) endlessly each time I tried to launch it. I knew the kernel panic occurred at 23:13 and by inspecting the modification dates on the items in `~/Library/Mail/` I was able to see that the likely culprit was a corrupt `Envelope Index` database file, which had a modification date of 23:13.

Luckily, [Apple](/wiki/Apple) uses [SQLite](/wiki/SQLite) (most likely via [Core Data](/wiki/Core_Data)) for these databases and that means that the format and the tools are essentially open, so you have at least some means of attempting repair.

**Note:** These steps were performed on a [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) install, but I believe they should work with little or no modification on [Tiger](/wiki/Tiger) as well (I believe Tiger's [Mail.app](/wiki/Mail.app) also uses [SQLite](/wiki/SQLite)/[Core Data](/wiki/Core_Data) as a backing store).

# Checking the database integrity

    cd ~/Library/Mail
    sqlite3 Envelope\ Index

This yields an `sqlite` prompt:

    sqlite> PRAGMA integrity_check;

Which in turn reported:

    *** in database main *** On page 112037 at right child: invalid page number 112186 SQL error: database disk image is malformed

This seemed to confirm my suspicion that corruption was the likely cause of [Mail.app](/wiki/Mail.app)'s failure to launch.

# Recovering the database

The method I used was to list all tables:

    sqlite> .tables

Then get drop back to the [command line](/wiki/command_line):

    sqlite> .quit

Now for each of the tables I produced a dump file; for example, for the "alarms" table:

    sqlite3 Envelope\ Index '.dump alarms' > alarms.txt

And so on for each table in the database. I then moved the old `Envelope Index` out of the way and created a new one:

    mv Envelope\ Index Envelope\ Index.old
    sqlite3 Envelope\ Index

I then proceeded to import the dumps into the new database:

    sqlite> .read alarms.txt

After performing a `.read` for each dump file I did one final `PRAGMA integrity_check;`, which succeeded. After that, [Mail.app](/wiki/Mail.app) launched fine without [beachballing](/wiki/beachballing).

# When recovery isn't possible

I recently ran into `Envelope Index` corruption again in conjunction with what looks to be permanent, physical drive failure. Unluckily, every single one of the multiple backups that I tried also appeared to be corrupt. So I thought I'd try moving the `Envelope Index` out of the way entirely and see if [Mail.app](/wiki/Mail.app) would rebuild the index; the happy news is that it does indeed do so, so if you can't recover your index then its not the end of the world.
