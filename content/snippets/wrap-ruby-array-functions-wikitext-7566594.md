---
title: Wrap Ruby array functions (wikitext, 7566594)
tags: snippets
---

This is the first step towards replacing the Ruby array calls with pure C ones which will hopefully be much faster. Profiling indicates that a large part of the parse time is spend inside rb\_ary\_includes (as much as 28%, even more than the time spend in the next\_token function, which only occupies 14%), so I'm hoping to see decent speed boosts from this.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
