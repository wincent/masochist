---
title: Drop PCRE library tests from test suite (REnamer, ccce3a5)
tags: snippets
---

The library gets tested at compile time, so there is no need to re-test it at runtime.

This change was motivated because the test apparatus is quite brittle, basically requiring that the pcretest tool be re-implemented from scratch to play with the WORegularExpression wrapper. There is risk of breakage every time a PCRE update is released, and the implementation did not capture a lot of nuances of the original tests anyway.

I will instead be adding more tests in "native" style (ie. hand-written tests rather than trying to leverage the PCRE ones).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
