---
title: Remove reference to "commonInit" method in WOPreferencesWindowController (WOCommon, 5b43413)
tags: snippets
---

Thanks to the better compiler checks stemming from the use of anonymous private categories, found a method that was still declared as being implemented even though the actual implementation had been removed in the distant past. This commit removes the superfluous declaration.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
