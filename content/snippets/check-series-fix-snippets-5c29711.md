---
title: check-series fix (snippets, 5c29711)
tags: snippets
---

Although the script worked a warning was issued at runtime because an integer comparison (-ne) was used rather than a string comparison (!=).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
