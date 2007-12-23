---
title: Work around CFStringCreateExternalRepresentation() bug (Wincent Strings Utility, b02b784)
---

This commit adds some specs to test the operation of the -encode switch and in so doing has uncovered what looks to be a bug in the CFStringCreateExternalRepresentation() function.

The docs suggest that a BOM should be added to the beginning of the string, but in my testing this is not the case.

The workaround is to manually add the BOM, while double-checking to make sure that the system doesn't add one (just in case the behaviour of the system changes in the future).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
