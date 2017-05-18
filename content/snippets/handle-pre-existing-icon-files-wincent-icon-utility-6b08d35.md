---
title: Handle pre-existing icon files (Wincent Icon Utility, 6b08d35)
tags: snippets
---

This is an initial attempt at handling pre-existing icon files (easy enough to encounter when doing repeated builds). If an existing file is already present we try to open it, remove any existing icon resources, and then proceed to the normal codepath (adding the new icon resource).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
