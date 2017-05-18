---
title: Property overhaul for WORegularExpressions class (REnamer, ad1d5bb)
tags: snippets
---

Replace hand-coded accessors with Objective-C 2.0 properties and synthesized accessors, remove unused accessors, cache normalized forms when the corresponding properties are set, replace usage of NSLog with WOLogManager.

This should probably be a series of commits but I the changes were made simultaneously seeing as they required pretty much each file to be swept over in its entirety.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
