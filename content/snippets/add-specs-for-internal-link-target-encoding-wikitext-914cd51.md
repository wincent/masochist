---
title: Add specs for internal link target encoding (wikitext, 914cd51)
tags: snippets
---

Add specs, including comparisons against the behaviour of URI.escape in the standard library. Note that I do not bother testing for handling of invalid encodings here because that would just be duplicating the tests already done elsewhere (we are going through the encoding conversion machinery first, and that is already tested in other specs).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
