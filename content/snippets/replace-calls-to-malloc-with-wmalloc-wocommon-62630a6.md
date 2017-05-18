---
title: Replace calls to malloc with wmalloc (WOCommon, 62630a6)
tags: snippets
---

This saves us a few lines of code and makes behaviour in the face of failed memory allocation more consistent.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
