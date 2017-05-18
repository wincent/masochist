---
title: Remove WOLogManager dependency on WOSingleton (WOCommon, 343dc6b)
tags: snippets
---

Make WOLogManager a WOObject subclass, removing the dependency on WOSingleton and instead implementing a local (non-abstract) "advisory" singleton pattern. Given that the initialization code is already thread-safe (done with double-checked locking and memory barriers) I also greatly simplify the load-time initialization code; in the unlikely event that it were called twice only one singleton instance would be instantiated anyway.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
