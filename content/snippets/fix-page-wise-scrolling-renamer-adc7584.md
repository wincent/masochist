---
title: Fix page-wise scrolling (REnamer, adc7584)
tags: snippets
---

This is the fix anticipated in 655a288. I wasn't jumping far enough when doing page-up and page-down scrolling. The cause was treating horizontalPageScroll and verticalPageScroll like horizontalLineScroll and verticalLineScroll; they are not the same!

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
