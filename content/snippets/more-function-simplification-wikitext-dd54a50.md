---
title: More function simplification (wikitext, dd54a50)
---

Here we are four more members to the parser struct to avoid having to pass so many parameters.

This allows us to simplify the "pop from stack", "pop from stack up to", "pop excess elements", "rollback failed link" and "rollback failed internal link" functions considerably; the parameter counts for these functions have gone from 4, 6, 6, 8 and 5 to 2, 4, 1, 3 and 2 respectively, with the possibility of further simplificationin the future.

A nice side effect of this change is that the calling parser code can be simplified in many places too; I as able to trim off a number of repeated lines that were no longer necessary, or which could be moved out into the functions.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
