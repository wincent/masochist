---
title: Move link encoding function and make it easier to call (wikitext, b5b252b)
---

Just pass a VALUE (Ruby string) rather than a pointer and a length, and move the function up near the top of the file where it can be used without needing a forward declaration.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
