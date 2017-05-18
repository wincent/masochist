---
title: Fix object-to-pointer comparisons on Leopard (WOTest, a39fc79)
tags: snippets
---

The behaviour of the @encode directive has changed on Leopard and this breaks a number of the comparisons that previously worked in Tiger. For example, comparisons between object pointers and nil, or even between nil and nil, were broken.

This commit adds some special cases for these types of comparisons which now perform simple pointer equality tests instead of failing. I also removed one test which failed on Tiger (when nil was encoded as a numeric scalar) but no longer fails on Leopard.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
