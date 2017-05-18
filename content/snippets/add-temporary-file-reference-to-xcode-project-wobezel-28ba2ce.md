---
title: Add temporary file reference to Xcode project (WOBezel, 28ba2ce)
tags: snippets
---

I've added the com.wincent.buildtools.gitrev.h file to the Xcode project in the hope that it will help Xcode's dependency analysis. Regrettably, it seems that this doesn't make any difference: one would hope that Xcode would see that a file included from the Info.plist preprocessing header file is modified and regenerate the property list accordingly, but it does not. The only way to get the Info.plist file to be generated again is to perform a full clean first.

This is definitely a bug in Xcode and one that I don't recall seeing in the last version; I'm going to commit this change anyway seeing as it doesn't do any harm to keep it in the tree.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
