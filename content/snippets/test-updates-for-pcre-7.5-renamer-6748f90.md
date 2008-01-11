---
title: Test updates for PCRE 7.5 (REnamer, 6748f90)
---

Store test files in new directory and rather than trying to force them into UTF-8, instead allow for per-file encodings to be specified. Time will tell whether this level of granularity is enough because there could conceivably be mixed test files which contain both UTF-8 and ISO-8859-1 encodings.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
