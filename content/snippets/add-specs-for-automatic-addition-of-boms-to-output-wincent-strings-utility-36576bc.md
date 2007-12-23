---
title: Add specs for automatic addition of BOMs to output (Wincent Strings Utility, 36576bc)
---

Make sure that when the input file has no BOM, we automatically add one to the output stream.

At the moment these specs are marked as pending because the parse() function is choking on input files that don't have BOMs.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
