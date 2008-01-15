---
title: Eliminate smearing problems when dragging scroll knobs (REnamer, db0eecf)
---

I think I might have eliminated the smearing glitches described in 3e91d70 but using round() instead of floor(). Seems that these geometry calculations are a very sensitive beast indeed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
