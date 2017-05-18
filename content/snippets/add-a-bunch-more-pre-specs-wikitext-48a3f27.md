---
title: Add a bunch more PRE specs (wikitext, 48a3f27)
tags: snippets
---

I'm checking as many weird corner cases and exceptions here as I can think of.

The basic behaviour is to allow a literal &lt;pre&gt; only at the very top level or inside a P block, as long as the latter is not inside a BLOCKQUOTE block (this is because I'll later be adding literal &lt;blockquote&gt;&lt;/blockquote&gt; support and I don't want to allow intermixing the two markup styles to avoid confusion). Any open span-level elements are automatically closed whenever such a &lt;pre&gt; block is entered, including rolling back any unfinished internal or external links.

If an unexpected &lt;pre&gt; or &lt;/pre&gt; token appears anywhere else, echo it in escaped form to provide feedback to the user; I think this is better feedback than just autoclosing the previous spans/blocks and then starting a &lt;pre&gt; block anyway.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
