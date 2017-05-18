---
title: Change scroll view nesting (gdiff, 106eb63)
tags: snippets
---

Instead of putting the gutter views and file views inside a scroll view put only the file views inside; this change is apparently necessary because otherwise I can't get the autoresizing behaviour and auto-showing/hiding of the horizontal scroll bar to work.

I am not sure whether this is a limitation of the Cocoa text system or there is some kind of magic incantation that would have enabled it to work the other way, but without access to the source code it seems doubtful that it would be worth the effort of trying to figure out what's going on in the bowels of AppKit.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
