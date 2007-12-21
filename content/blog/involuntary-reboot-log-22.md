---
title: Involuntary Reboot Log #22
---

When I got home my machine, which had been up for about a day and had a bunch of in-progress work in open applications, started acting funny. New Terminal windows were totally blank (neither the command prompt nor any other text would ever appear), suggesting some kind of problem with the Directory Services infrastructure which is used on [Leopard](http://www.wincent.com/knowledge-base/Leopard) for user authentication. Strangely, everything else seemed to be working fine; I could open and close windows, launch applications, and write to files with no problems. (Sometimes you see situations in which you can't do those things; in those cases it seems that the cause must be some kind of resource exhaustion, like running out of Mach ports due to a leak.)

So I decided to reboot and went off to have a shower. On getting back I was looking at a blank desktop (no menu bar, no Dock, no icons) with only a spinning indicator. It seems that the posited Directory Services problem was impeding the shutdown. No choice but to pull the plug. Ugh.

You know, basically since switching to [Mac OS X](http://www.wincent.com/knowledge-base/Mac%20OS%20X) I've had about a one-month average time between involuntary reboots. At first this seemed pretty awesome, having come from OS 9; but now after half a decade it's starting to get pretty old. One-month time-to-failure doesn't seem so impressive any more. If I were running Linux or FreeBSD then I'm sure that my time-to-failure would be measured in years rather than days, and determined by hardware rather than software; in other words, my involuntary reboots would happen every couple of years when a drive had a physical failure, rather than every month. I still remember a beloved FreeBSD box I used to have at home which was up for 400 days once before a power failure in the neighbourhood finally brought it down (back in the days before I had a UPS).

So it seems that this is the price of all the eye candy and the polished user experience. I am starting to get a little weary of paying it. But no, I'm not actually thinking of switching away from Mac OS X: I'm just wishing that Apple would devote a few more resources to core stability and robustness rather than so much superficial candy.

[]{#Involuntary%20reboot%20stats%20to%20date}

### Involuntary reboot stats to date

-   **Operating system version:** 10.5.1
-   **Kernel panics:** 6
-   **Hard resets:** 16
-   **Total failures:** 22
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 579 days
-   **Average time between failures:** 26.32 days
-   **Uptime at moment of failure(s):** roughly 24 hours
