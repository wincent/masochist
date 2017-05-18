---
title: Fix a couple of crashers in the plug-in (REnamer, 00629cf)
tags: snippets
---

Just tying up a couple of loose ends that fell out from the rewrite; we fully-initialize the plug-in structure now just in case there's random garbage in the memory returned by malloc(), and also restore the check for NULL before calling CFRelease on the menu item title.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
