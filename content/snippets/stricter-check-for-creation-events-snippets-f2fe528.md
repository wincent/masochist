---
title: Stricter check for creation events (snippets, f2fe528)
tags: snippets
---

Instead of using a relatively loose regular expression to detect creation\
events use a strict fixed-length check for a string consisting of exactly 40\
zeros.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;\
