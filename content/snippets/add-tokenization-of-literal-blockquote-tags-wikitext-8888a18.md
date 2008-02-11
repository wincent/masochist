---
title: Add tokenization of literal blockquote tags (wikitext, 8888a18)
---

This is the first step in adding support for literal &lt;blockquote&gt; and &lt;/blockquote&gt; tags. The rationale for this is that when quoting large slabs of text it is much more convenient to use starting and ending tags rather than prefixing every single line with a greater-than sign.

Because blockquote and pre blocks are intimately interrelated I won't allow mixing the two types of syntax, as it could produce results too confusing for the user.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
