---
title: Fix button highlighting in vertical scrollbar (REnamer, 2722970)
tags: snippets
---

Was passing the point in the scroller's coordinate system rather than in the window's, as is required by testPart:.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
