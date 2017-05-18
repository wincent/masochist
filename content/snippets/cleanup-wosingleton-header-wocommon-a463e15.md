---
title: Cleanup WOSingleton header (WOCommon, a463e15)
tags: snippets
---

Remove redundant method declarations in the header (stuff that is inherited from NSObject) and the accompanying Doxygen blocks (some of which had technical discrepancies anyway), convert remaining Doxygen blocks to use the currently preferred style (the one which gets along most nicely with Xcode's automatic indentation), eliminate some superfluous whitespace, and update the date format to match the standard.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
