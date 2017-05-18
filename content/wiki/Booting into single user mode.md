---
tags: unix os.x wiki
---

To boot into [single user mode](/wiki/single_user_mode) on [Mac OS X](/wiki/Mac_OS_X) hold down the Command+S keys while rebooting. This is *not* equivalent to [dropping back to the console](/wiki/dropping_back_to_the_console).

I use a Spanish keyboard but in single user mode a US keymap applies. This means that to type a hyphen I must use the `?/'` key and to type a forward-slash I must use the `-/_` key.

To check the disk:

    fsck -y

To remount the disk in read/write mode:

    mount -uw /
