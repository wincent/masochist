---
title: Update Info.plist to reflect new document class (gdiff, dd4f9e0)
tags: snippets
---

The refactoring tools provided with Xcode don't actually handle all the places where renaming a class may require changes to be made. In this case the Info.plist file's NSDocumentClass key still had a stale value.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
