---
title: Avoid more glitches by monitoring for frame changes (REnamer, c4bdee5)
tags: snippets
---

Have the scroll view advise the scrollers whenever its document view changes its frame or bounds. This is necessary to prevent glitches when, say, the user resizes the table columns (thus causing the scroll knobs to redraw).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
