---
title: Add PATH to cron job notes (snippets, a72ff7e)
tags: snippets
---

Without an adequate path set up the GC script will fail because git-gc depends on various standard tools (like sed etc) and without it the script won't be able to find git-gc in the first place.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
