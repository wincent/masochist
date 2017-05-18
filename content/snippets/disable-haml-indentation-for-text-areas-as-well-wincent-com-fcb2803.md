---
title: Disable Haml indentation for text areas as well (wincent.com, fcb2803)
tags: snippets
---

In "edit" forms Haml was indenting the text that appeared inside &lt;textarea&gt;&lt;/textarea&gt; spans, which basically mangled the wikitext, making it impossible to edit any article without ruining it.

So wrap the text areas in preserve() calls to prevent this. This results in some very ugly source code so I am keen to find a more elegant solution.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
