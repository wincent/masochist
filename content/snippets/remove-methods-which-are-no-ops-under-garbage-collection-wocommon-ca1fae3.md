---
title: Remove methods which are no-ops under Garbage Collection (WOCommon, ca1fae3)
---

Methods like retain, release and so forth were implemented as no-op operations for the WOSingleton class. Now, under Garbage Collection, not only are they no-ops but the compiler will never actually generate any message sends for those selectors. So this commit now removes the unneeded methods completely.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
