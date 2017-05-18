---
title: Draw top and bottom borders in file source list (gdiff, 094f018)
tags: snippets
---

This is a preliminary attempt at drawing top and bottom borders in the file source list. Some visual glitches may be visible near the bottom border if the window is rapidly resized; the cause of these will need to be investigated. Also, given that the borders are being drawn just inside the view it is possible that they could overlap content inside the view; it may be necessary to find a way to somehow inset the content or instead perform the drawing elsewhere (the split view itself may be a good candidate for this as it would localize all top and bottom border drawing to a single place in the code).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
