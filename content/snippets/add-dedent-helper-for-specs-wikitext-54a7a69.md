---
title: Add "dedent" helper for specs (wikitext, 54a7a69)
---

I'm finding the multiline spec data hard to read because it breaks the flow of the indentation (where does one spec end and another begin? are we nested inside multiple "describe" blocks? etc).

So here I add a "dedent" helper which will allow me to indent the spec data for better readability while editing, and then dedent the data at runtime for actual checking.

As a safety valve I make sure that we're not asked to dedent more whitespace than we actually have.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
