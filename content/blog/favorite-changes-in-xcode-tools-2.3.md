---
title: Favorite changes in Xcode Tools 2.3
tags: blog
---

-   **`Info.plist` preprocessing has been improved:** you can now specify build settings using a "$(BUILD\_SETTING)"-style syntax (fixes [this complaint](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/urls_in_preproc.php); although with the `-traditional` switch it's not such a big deal anymore anyway).
-   **`atos` now works with Universal Binaries:** thanks to the `-arch` switch.
-   **Better tracking of breakpoints across dependent projects:** at last you can see *all* the breakpoints in the application in a single window even when they are spread across multiple dependent projects (such as framework projects).
-   **Cleaning dependencies is now optional:** handy for when you just want to flush out a single target's resources (for example) and not have to rebuild a long chain of dependencies. You can also elect to skip cleaning precompiled headers.
-   **Option-double-click now works on symbols names in documentation windows:** making it much, much faster to zoom around the documentation.
-   **Clicking on symbols in the API listing now requires only a single click:** thus fixing a long-standing regression in which you had to click twice (once to switch documents and then again to scroll the document to the appropriate anchor).
-   And finally... **Everything seems much faster...** or am I just imagining it? A full [Synergy Advance](http://synergyadvance.com/) clean and build is still taking about six and a half minutes on the G5 ([only 5 minutes on the iMac](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/imac_memory_upg.php)) although admittedly I have added quite a bit of code since the [last time](http://www.wincent.com/a/about/wincent/weblog/archives/2006/03/automated_strip.php) I did that test; but movement in the editor and around the user interface definitely feels faster to me.

These are all very real improvements that have a significant impact on my work flow (either eliminating blocker bugs, allowing me to remove kludges and workarounds, or simple helping me to work faster/better). Great work, Apple!
