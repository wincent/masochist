---
title: Provide menu item for bringing preferences window on screen (Synergy, c2adcef)
---

Useful for when user dismisses preferences window and later decides that he/she wants it back.

An interesting case is when there are unapplied changes; if the user tries to close the window, clicks "Don't Apply", and then tries to quit the application then the window will come back on screen again and the sheet will be shown.

In order to support this repeated showing of the preferences window had to use the setReleasedWhenClosed: method. Note that I may later decide to auto-quit the application when the last window is closed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
