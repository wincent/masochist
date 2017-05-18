---
title: Split WOFileView into superclass with two subclasses (gdiff, 01d3ea9)
tags: snippets
---

WOFileView is now a superclass of two new subclasses, WOFromFileView and WOToFileView. Almost all of the behaviour will be in the superclass with minor overrides in the subclasses. Basically the only difference in behaviour is which part of the represented WOFile object the subclass represents.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
