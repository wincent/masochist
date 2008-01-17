---
title: Factor out color macros into WOHUD.h (REnamer, cd6174e)
---

The color macros were all defined in WOHUDTableView.h, seeing as that was the first class I made when starting work on the HUD controls.

This was a bit of an anomaly, as other HUD classes had to include the table view header even if they had nothing to do with it.

So extract the color macros out into a separate file, WOHUD.h, and have all classes which need to know about HUD colors import that.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
