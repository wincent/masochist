---
title: Core Animation notes (WOBezel, ae375d1)
tags: snippets
---

Core Animation makes a lot of the code currently in the WOWindow class redundant. This commit adds some notes noting changes which will be required in order to remove to Core Animation; this is a desirable move to make because it will simplify the code and reduce the memory footprint.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
