---
title: Prepare for highlighting the knob in the WOHUDScroller class (REnamer, c1a4b63)
---

Add an instance variable to control the whether the knob is drawn highlighted or not in the WOHUDScroller class.

This is the first in a series of commits whose purpose is to work around an inconsistency in Cocoa, and while we're at it make the control behave a little more like the one in Interface Builder.

While rendering currently works great when the scroll arrows are apart, if the user wants them displayed next to each other then we get smearing glitches.

I've investigated the issue and determined that this is caused by the system calling drawRect: with an undersized rectangle. The problem doesn't occur when the arrows are apart.

I looked at various workarounds, including overriding private NSView methods and trying to force a redraw in a larger area but there was no obvious and straightforward solution.

So the only robust and future-proof solution seems to be to override mouseDown: completely and not call super. This commit is one step that lays the ground work for that change. More to follow.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
