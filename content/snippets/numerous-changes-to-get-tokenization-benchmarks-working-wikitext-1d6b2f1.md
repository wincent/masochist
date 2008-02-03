---
title: Numerous changes to get tokenization benchmarks working (wikitext, 1d6b2f1)
---

Here I add a Wikitext::Parser::Token class to make debugging and testing a little more convenient and introduce the first version of the raw tokenization benchmark.

I've made some other changes to the code here to fix up some flaws discovered during the development of the benchmark, and at the same time gotten rid of stucture passing to and from the next\_token (now we only pass pointers, for speed).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
