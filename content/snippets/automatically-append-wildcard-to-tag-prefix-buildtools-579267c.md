---
title: Automatically append wildcard to tag prefix (buildtools, 579267c)
tags: snippets
---

Make life slightly easier for callers by automatically appending the wildcard (asterisk) to the passed-in tag prefix, thus saving them from having to do it.

This assumes a convention that tags will following a "product name-product version" naming pattern.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
