---
title: Change WOREnamerController to WOREnamerDocument (REnamer, 2b68e85)
tags: snippets
---

The refactoring I was considering (making WOREnamerController an NSWindowController subclass) was a bit misguided; better to rename it to WOREnamerDocument and make it an NSDocument subclass.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
