---
title: Involuntary Reboot log #5
tags: blog
---

Much like [last time]() but with an updated version of the OS, again a panic on boot. Tried unplugging the USB cable connecting the UPS and was able to boot.

Disk Utility reported one error on the volume containing the fresh install, "Incorrect number of Access Control Lists". I rebooted into my previous install and tried to repair but was told that it didn't work; on verifying again it said the error was no longer present.

#### Involuntary reboot stats to date

-   **Operating system version:** no comment
-   **Kernel panics:** 5
-   **Hard resets:** 0
-   **Total failures:** 5
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 147 days
-   **Average time between failures:** 29 days
-   **Uptime at moment of failure(s):** Less than one minute





#### Notes about day calculations

Rather than hurting my brain by trying to manually work out date intervals and mean time between failures, I used the interactive Ruby interpreter, `irb`:

    require 'date'
    today = Date.today
    start = Date.new(2006, 5, 21)
    today - start
    147 / 5
