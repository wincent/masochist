---
title: Modifications to WOAlertBezelView class for garbage collection (WOBezel, 50e8fed)
---

Remove autorelease message send which is now a no-op under garbage collection.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
