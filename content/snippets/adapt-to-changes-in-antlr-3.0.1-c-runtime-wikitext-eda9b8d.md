---
title: Adapt to changes in ANTLR 3.0.1 C runtime (wikitext, eda9b8d)
tags: snippets
---

In version 3.0 of the ANTLR runtime the "start" field in the ANTLR3\_COMMON\_TOKEN\_struct was a character index (the number of characters, not bytes, relative to the start of the input stream). Likewise for the "stop" field.

In version 3.0.1 the "start" field is now an absolute pointer, as is the "stop" field.

One caveat: one thing which appears to be a bug is that the "stop" field does not point to the end of the token, but rather to one byte before it. I suspect that this bug is latent when working with ASCII streams, but it is a problem when working with UCS-2 streams (where each character is 2 byte) because this means that the "stop" field now points to the second half of a character, which is invalid. This commit adjusts the stop field up by 1 byte to compensate.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
