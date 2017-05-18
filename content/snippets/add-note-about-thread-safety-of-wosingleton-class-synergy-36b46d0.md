---
title: Add note about thread-safety of WOSingleton class (Synergy, 36b46d0)
tags: snippets
---

Basically, it's not thread-safe, so add a note that it should only be used in the single-threaded context.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
