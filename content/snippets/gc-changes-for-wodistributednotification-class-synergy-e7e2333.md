---
title: GC changes for WODistributedNotification class (Synergy, e7e2333)
tags: snippets
---

The autorelease calls are no longer needed, doubly so because this is a singleton class and was never released prior to GC anyway.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
