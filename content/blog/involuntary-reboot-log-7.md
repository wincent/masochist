---
title: Involuntary Reboot log #7
tags: blog
---

This was a novel one and the first non-kernel panic involuntary reboot I've ever had with the iMac. Today I was waiting for a compile to finish and was wishing a friend a merry Christmas over IM when I noticed that my keypresses weren't resulting in any output. Mouseclicks didn't work either although I could still move the pointer. Mousing over the Dock yielded nothing. Yet iTunes continued to play and the seconds on the clock continued to update smoothly.

I patiently waited for iTunes to finish playing tracks. Mac OS X rarely hard crashes anymore, but it can still make itself unusable by running out of Mach ports for instance. But playback of the next track started fine and that indicated new files could be opened and that port exhaustion was most likely not the problem. I tried clicking. Typing. Turning the wireless Mighty Mouse off and on again (in fact, earlier today I had lost the ability to click again although mouse movement still worked and that was cured by power cycling the mouse). I don't have another machine here so I couldn't try connecting via SSH. I couldn't bring up the "Force Quit" dialog either, nor the application switcher.

The screen saver kicked in and ran as slow as treacle. Couldn't escape from it by moving the mouse, clicking or typing. I hit the power button: nothing. Again, the machine finally decided to go to sleep. Bash the keyboard and click the mouse until the machine woke up. After a minute or two of clomping the keyboard the screensaver finally snapped back to normal performance levels and I was able to get back to the desktop again. I tried plugging in a wired mouse: no difference, still couldn't click.

So held the power button and did a hard reset. There was no unsaved work but I hate losing all my open applications and windows (dozens of them) and knowing that my Mail application has probably left my 5 gigabyte mail folder in an inconsistent state.

As per standard procedure, booted off the Mac OS X DVD to run Disk First Aid; no problems reported.

#### Involuntary reboot stats to date

-   **Operating system version:** 10.4.8
-   **Kernel panics:** 6
-   **Hard resets:** 1
-   **Total failures:** 7
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 222 days
-   **Average time between failures:** 31 days
-   **Uptime at moment of failure(s):** Several days

As per usual I used the interactive Ruby interpreter, `irb`, to do the date calculations for me:

    require 'date'
    today = Date.today
    start = Date.new(2006, 5, 21)
    today - start
    222 / 7
