---
title: Update method signature to avoid deprecated API warnings (WOHotKey, f4f9ad8)
tags: snippets
---

The method signature for validateMenuItem: has changed in Leopard. This commit updates the signature; functionality is unchanged but the new signature avoids some warnings about deprecated APIs that are issued inside the method itself.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
