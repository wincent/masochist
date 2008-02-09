---
title: Fix minor wart with pre block closing (wikitext, 172a51c)
---

Under some circumstances (unnested pre block followed by two consecutive newlines) we would emit a block that looked like this:

&lt;pre&gt;foo &lt;/pre&gt;

Rather than like this:

&lt;pre&gt;foo&lt;/pre&gt;

While the former displayed fine in the browser, the latter looks better in the HTML source.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
