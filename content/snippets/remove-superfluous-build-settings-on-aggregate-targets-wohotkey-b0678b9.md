---
title: Remove superfluous build settings on aggregate targets (WOHotKey, b0678b9)
---

Not sure whether this is a new feature of Xcode or whether the settings were always present but not exposed, but I've just noticed a bunch of redundant build settings on aggregate targets. This commit removes them.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
