---
title: Walrus r20, 2 items changed
tags: snippets
---

ParsletMerge should deal with omissions at the level of the collection, not the elements inside the collection (to match the behaviour of other parslet combinations); as a side effect this enables some grammar rules to be written less verbosely (for example, a factored out predicate rule preceded by whitespace that should be omitted, like the 'directive' rules in Walrus)
