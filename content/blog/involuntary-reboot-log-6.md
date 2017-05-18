---
title: Involuntary Reboot log #6
tags: blog
---

This time it was my fault, kind of. Trying to do some low-level Mach stuff to work around a bug in Mac OS X, I ran into a different bug in Mac OS X, and this one was enough to cause a kernel panic. From a regular unprivileged process. Ouch. A strong deterrent from continuing that line of development...

#### Involuntary reboot stats to date

-   **Operating system version:** 10.4.8
-   **Kernel panics:** 6
-   **Hard resets:** 0
-   **Total failures:** 6
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 156 days
-   **Average time between failures:** 26 days
-   **Uptime at moment of failure(s):** Several days

As per usual I used the interactive Ruby interpreter, `irb`, to do the date calculations for me:

    require 'date'
    today = Date.today
    start = Date.new(2006, 5, 21)
    today - start
    156 / 6
