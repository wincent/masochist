---
title: Teach parser to interpret image markup (wikitext, 9f49894)
tags: snippets
---

Given wikitext input like:

{{foo.png}}

will emit:

&lt;img src="foo.png" alt="foo.png" /&gt;

The "alt" attribute is added because it is required for XHTML validity. In the future I may add a support for overriding the attribute content, perhaps with a syntax like this:

{{foo.png|a picture of foo}}

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
