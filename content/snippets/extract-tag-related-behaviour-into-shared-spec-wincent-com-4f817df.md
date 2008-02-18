---
title: Extract tag-related behaviour into shared spec (wincent.com, 4f817df)
---

Rather than testing the Taggable module directly, define a set of shared behaviours and test them in each model using "it\_should\_behave\_like".

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
