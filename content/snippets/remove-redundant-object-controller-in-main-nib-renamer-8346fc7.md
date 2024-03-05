---
title: Remove redundant object controller in main nib (REnamer, 8346fc7)
tags: snippets
---

We don't need to go through a mediating NSObjectController here, we can just bind to the WOREnamerController instance directly.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
