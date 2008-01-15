---
title: Teach WOHUDScroller about flipped coordinate systems (REnamer, 56c18f7)
---

Similiar to commit f19e388, here we teach WOHUDScroller to draw correctly depending on whether its coordinate system is flipped or not, in this case specifically with respect to the arrows.

Rather than eliminating repetition here, I think clarity is more important, so I've explicitly specified the path for each of the permutations of ascending/descending, horizontal/vertical, and flipped/unflipped.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
