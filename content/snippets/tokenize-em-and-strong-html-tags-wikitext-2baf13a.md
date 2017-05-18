---
title: Tokenize em and strong HTML tags (wikitext, 2baf13a)
tags: snippets
---

This is useful for cases where you either type HTML tags instead of wikitext markup without thinking, or where you explicitly prefer to use explicit tags for the purposes of disambiguation (ie. does "'''''" mean "strong em" or "em strong"?). By default, the wikitext extension assumes strong em because it is an on-the-fly transformer and can't look ahead to see what the likely ordering is, but sometimes you want the other order and using HTML tags is one way of imposing it (the other is to insert a zero-length nowiki span, or insert whitespace, between the opening em and strong tags).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
