---
title: Involuntary reboot log #10
---

[Twice in one day...](http://www.wincent.com/a/about/wincent/weblog/archives/2007/04/involuntary_reb_9.php)


### Involuntary reboot stats to date

-   **Operating system version:** undisclosed
-   **Kernel panics:** 6
-   **Hard resets:** 4
-   **Total failures:** 10
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 342 days
-   **Average time between failures:** 34 days
-   **Uptime at moment of failure(s):** 1 hour

As per usual I used the interactive Ruby interpreter, `irb`, to do the date calculations for me:

    require 'date'
    Date.today - Date.new(2006, 5, 21)
    342 / 10
