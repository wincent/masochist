---
title: Extract str_free function into separate function (wikitext, 2bc8593)
tags: snippets
---

Rather than an inline function we need a normal function so that we can pass its address to Data\_Wrap\_Struct.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
