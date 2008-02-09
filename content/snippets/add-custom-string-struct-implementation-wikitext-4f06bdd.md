---
title: Add custom string struct implementation (wikitext, 4f06bdd)
---

This is actually the result of some work on an experimental topic branch which didn't work out. Now that we have the parser struct in place, however, it should be possible to gradually make more and more use of the efficient custom string struct instead of instantiating full-blown Ruby Strings. Object instantiation is one of the most costly operations in the translator, and it brings with it a corresponding cost in garbage collection, so I'm hoping that this will lead to a nice speed boost.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
