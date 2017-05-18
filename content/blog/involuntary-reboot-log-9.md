---
title: Involuntary reboot log #9
---

After a day spent trying to get the minimum number of development tools installed onto a clean install of a certain version of a certain OS, I finally decided to throw in the towel and give up. Unusable. The thing has a list of reproducible, hard-core bugs as long as your arm which I won't talk about here. When I tried to shut down the thing hung at a blank screen; after waiting about five minutes it was time for a hard reset. I am sure I could have waited five hours or five days and it would have still been stuck at that same point.

Then the usual time-draining recovery routine: boot off the install DVD and check the disk trying to control the damage. Hard resetting is like going to sleep by bashing yourself in the head with a heavy steel pipe; not good for your head, and not good for your computer (and its data) either.

I had hoped I could tolerate the bugs and with a bit of perseverance get some work done. But it's totally unusable.





### Involuntary reboot stats to date

-   **Operating system version:** undisclosed
-   **Kernel panics:** 6
-   **Hard resets:** 3
-   **Total failures:** 9
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 341 days
-   **Average time between failures:** 37 days
-   **Uptime at moment of failure(s):** 1 day

As per usual I used the interactive Ruby interpreter, `irb`, to do the date calculations for me:

    require 'date'
    Date.today - Date.new(2006, 5, 21)
    341 / 9
