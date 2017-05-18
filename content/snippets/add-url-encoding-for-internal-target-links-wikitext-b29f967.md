---
title: Add URL encoding for internal target links (wikitext, b29f967)
tags: snippets
---

Add machinery for converting strings into URL-encoded strings suitable for use as internal target links. Unreserved characters are passed through unchanged and all others are escaped using percent encoding; prior to escaping the string is first converted to UTF-8 (so that a string containing the euro symbol, for instance, will be encoded as "%e2%82%ac").

In order for the new functions to make use of the existing text-encoding conversion methods a few minor tweaks had to be made to the conversion functions (because in these cases the conversion is under controlled conditions the converted width is not important in some cases, and in others there is no need to free the target buffer in the event of an error because it is not dynamically allocated).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
