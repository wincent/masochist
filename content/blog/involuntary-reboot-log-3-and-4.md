---
title: Involuntary reboot log #3 and #4
tags: blog
---

Two kernel panics while trying to boot from a just-installed copy of Mac OS X. I won't bother telling you what version of the OS it was...





#### Panic \#1

Installed with all the defaults, except added the X11 package and deselected the printer drivers package. On rebooting got a kernel panic while still looking at the spinning progress indicator. Rebooted from the OS DVD and ran Disk First Aid, just to be safe.

#### Panic \#2

Tried booting from the new install again and got another panic at the same point. Again rebooted from the DVD and ran Disk First aid, but this time picked up a problem:

    Checking Catalog file.
    Incorrect block count for file .store.db
    (It should be 0 instead of 21)

Now, these panics would be annoying in the best of cases because of the threat they pose to the integrity of your precious data; that's why I installed the OS on a separate partition on an external FireWire drive. But this second panic was doubly-annoying because the damaged file system wasn't on the external (test) drive; it was on my internal drive. What was the OS doing touching that drive and corrupting it? And what good is journalling? Almost none, apparently.

So let's tally this up: nearly two hours of time wasted rebooting, installing the OS, rebooting, panicking, rebooting, verifying, rebooting, panicking, verifying and repairing and finally rebooting again (back to my old install); and after all that I've achieved nothing except risking my data and littering a partition with unusable files.

Why the crash? Why nothing written to `/Library/Logs/panic.log`? Doesn't the OS support booting off an external FireWire enclosure? Do you expect me to install this thing on my internal drive on my production machine? Are you nuts?

#### Involuntary reboot stats to date

-   **Operating system version:** go figure
-   **Kernel panics:** 4
-   **Hard resets:** 0
-   **Total failures:** 4
-   **Average time between failures:** 32 days
-   **Uptime at moment of failure(s):** Less than one minute

#### Leopard update

On a *completely* unrelated note, looks like my plans for starting some Leopard-specific development work have been postponed indefinitely. You see, to do that kind of work I'd need a machine with a bootable Leopard install on it... I wonder if Apple will provide ADC Select members with a later version of Leopard prior to it being released, or whether we're stuck with the WWDC preview; I sure hope so, and I hope they get it to us with enough time to enable us to actually do something useful with it.

I guess I could try installing the WWDC preview on my 3-year-old laptop. Maybe that would work.
