---
title: Fix UTF-8 regular expression matching (REnamer, e1df3cb)
tags: snippets
---

Add tests to explore known issues with matching UTF-8 text. Add an errorCode property so that callers can distinguish between non-fatal (eg. no match) and fatal (eg. bad UTF-8) errors in pcre\_exec().

The actual cause of the problem was that I was passing in the string length in characters rather than bytes.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
