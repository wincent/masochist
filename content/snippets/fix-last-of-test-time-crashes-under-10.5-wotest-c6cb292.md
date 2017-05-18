---
title: Fix last of test-time crashes under 10.5 (WOTest, c6cb292)
tags: snippets
---

Fix another test-time crash that's new under 10.5, this one stemming from the use of the Object root class. It appears that this class is not compatible with the new runtime when GC is set to "required", as these same tests didn't used to crash prior to turning that setting on.

So for now we just skip those tests.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
