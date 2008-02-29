---
title: Fix unused variable warnings for GC variables (wikitext, 6f29a90)
---

These GC-related variables aren't used, but we don't want to be warned about that seeing as it is intentional (we just want them on the stack to prevent premature GC).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
