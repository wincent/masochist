---
title: Provide build script for ANTLR (wikitext, 282eee9)
---

Make the ANTLR build process less error prone by doing it all in a reproducible script which cleans, extracts the tar archives, applies the patches, works around the build bug, and builds both ANTLR itself and the C target runtime.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
