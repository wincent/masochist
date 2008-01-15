---
title: Remove old code from WOHUDScroller (REnamer, 1bc1fc4)
---

The old drawing style was still present in the source files but was hidden from the compiler with preprocessor directives. Now that the alteranative implementation is up and running, remove the old one from the source to keep the files lean; if the old algorithm is ever needed in the future it can be consulted using Git.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
