---
title: Replace many rb_str_append calls with rb_str_cat (wikitext, e116b3f)
tags: snippets
---

I suspected that rb\_str\_cat would be faster than rb\_str\_append because it avoids an unnecessary object instantiation. This commit changes all constant strings to use rb\_str\_cat, shaving about 12% off of the parse time.

Before:

short slab of ASCII text 2.870000 0.000000 2.870000 ( 2.929794) short slab of UTF-8 text 5.390000 0.010000 5.400000 ( 5.399399)

After:

short slab of ASCII text 2.380000 0.010000 2.390000 ( 2.461861) short slab of UTF-8 text 4.860000 0.000000 4.860000 ( 5.016289)

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
