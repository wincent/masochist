---
title: Let the compiler decide when to inline (wikitext, cf1128c)
---

This change was initially prompted because I was getting duplicate symbol errors when linking for functions which should have been inlined on RHEL 5.1.

My first trouble-shooting technique was disabling inlining to confirm that the linker errors went away (they did) but it turns out that there was a secondary benefit: the compiler is actually much smarter than me, because when I leave things up to the compiler instead of explicitly requesting inlining, the spec suite runs 10 to 20% faster. There is quite a bit of Ruby/RSpec overhead in the spec suite, so the speed improvement of the parser itself is probably significantly more.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
