---
title: Set up a tokenizing benchmark for ANTLR lexer (wikitext, bdc7a11)
---

This function doesn't actually do anything with the tokens, it just asks the lexer for tokens as fast as it can dish them out.

The intention is to measure the raw speed of the tokenization part only (ie. the part due to ANTLR only).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
