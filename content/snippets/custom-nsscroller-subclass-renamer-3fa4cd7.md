---
title: Custom NSScroller subclass (REnamer, 3fa4cd7)
---

Now we draw scrollers that are suitable for display in a HUD window. This really is only a preliminary draft: the colors and geometry will almost certainly be tweaked in the future.

This commit also includes an empty clip view subclass. This isn't hooked up because I can't seem to swap it in without breaking drawing entirely. But the eventual intention is to override NSClipView because I suspect it is responsible for drawing the unwanted "end cap" above the vertical scrollbar.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
