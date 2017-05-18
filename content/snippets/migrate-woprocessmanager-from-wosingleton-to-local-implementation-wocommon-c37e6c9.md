---
title: Migrate WOProcessManager from WOSingleton to local implementation (WOCommon, c37e6c9)
tags: snippets
---

Dump the abstract enforced singleton pattern obtained from using WOSingleton as a superclass and instead use a lightweight local advisory implementation implemented using a double-checked locking pattern with memory barriers.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
