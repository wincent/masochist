---
title: Suppress whitespace immediately after the separator in internal links (wikitext, 968db92)
---

If we've seen the internal link start marker, the link target, and the separator, we know we're guaranteed to have a valid link (even if the user doesnt close it we will auto-close it). In this case it is safe to suppress the emission of whitespace rather than letting it through and sanitizing afterwards (like we have to do with spaces that come before the separator).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
