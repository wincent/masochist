---
title: Eliminate SCM noise by changing ANTLR template (wikitext, 39d1565)
tags: snippets
---

I've just made a tweak to the ANTLR 3.0.1 C target code generation template to prevent it from producing SCM noise by embedding build dates inside the generated files; this information properly belongs outside of the files, in the modification-date metadata. The truly important information (the version of ANTLR used to perform the build, the source file name and so on) is preserved.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
