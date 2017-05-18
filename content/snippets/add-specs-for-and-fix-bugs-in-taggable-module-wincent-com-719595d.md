---
title: Add specs for and fix bugs in Taggable module (wincent.com, 719595d)
tags: snippets
---

This commit adds specs for the three public methods of the Taggable module, corrects a couple of minor bugs discovered during testing (unexpected behaviour of the split method, and typo in a variable name), as well as setting up a destroy trigger for taggings which should go away when a parent record is deleted.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
