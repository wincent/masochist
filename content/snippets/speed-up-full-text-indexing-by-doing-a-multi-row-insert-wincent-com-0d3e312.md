---
title: Speed up full-text indexing by doing a multi-row insert (wincent.com, 0d3e312)
tags: snippets
---

This gets indexing up to an acceptable speed (a 10,000 word, 90,000 byte test article took less than a second to save in development mode, so production mode should be fast enough) so we can turn it back on again.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
