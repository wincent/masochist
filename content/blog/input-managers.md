---
title: Input Managers
tags: blog
---

The ownership and permissions on my `InputManagers` folders (both inside my home folder and at system level):

    -r--------     1 root     wheel    -     0 Jan 27  2006 InputManagers

For these restrictions to be effective you should probably revoke group write access to the `/Library/` folder as well (if [recent disclosures](http://www.wincent.com/a/about/wincent/weblog/archives/apple/moab/) weren't enough to make you worry about it already). And [don't run as an admin user](http://www.wincent.com/a/about/wincent/weblog/archives/2006/09/dont_run_mac_os.php).

Input managers are an evil idea, all too easily abused. I tightened up access controls a year ago in response to the [Sandvox and Path Finder Input Manager mini-scandal](http://daringfireball.net/2006/01/smart_crash_reports) (see also [this](http://www.friday.com/bbum/2006/01/20/sandvox-hidden-feature/)), but today we have [yet another reason](http://applefun.blogspot.com/2007/01/moab-22-01-2007-apple.html) to avoid them like the plague.

#### For the really paranoid

See `man chflags`. You can set the "system immutable" flag on a folder so that not even the root user can change the permissions on it without first explicitly clearing the flag.

    sudo chflags schg target_folder

Results in this:

    dr--------    2 root     wheel    schg    68 Jan 23 12:13 target_folder/

Even root won't be able to change the flags on the folder after that:

    sudo chmod 777 target_folder
    chmod: example: Operation not permitted

But things get better: the only way for root to clear the "system immutable" flag is to [boot into single user mode](http://www.wincent.com/knowledge-base/Booting_into_single_user_mode) and run `sudo chflags noschg target_folder` (merely [dropping back to the console](http://www.wincent.com/knowledge-base/Dropping_back_to_the_console) is not sufficient). If you don't want to go so far look at the "user immutable" flag; this will prevent all users from modifying the target (even root) but you don't have to reboot into single user mode in order to remove it (the file owner or root can both unset the flag).
