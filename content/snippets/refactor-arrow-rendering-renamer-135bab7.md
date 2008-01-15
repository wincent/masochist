---
title: Refactor arrow rendering (REnamer, 135bab7)
---

This is the possible refactoring mentioned in f3b70d5, which takes advantage of the fact that the code for drawing an up arrow in a flipped coordinate system is the same as that for drawing a down arrow in an unflipped one, and likewise in the case of the unflipped up arrow and flipped down arrow.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
