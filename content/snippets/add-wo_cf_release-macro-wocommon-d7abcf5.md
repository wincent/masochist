---
title: Add WO_CF_RELEASE macro (WOCommon, d7abcf5)
tags: snippets
---

Simple wrapper for CFRelease. Mostly useful in error-recovery situations where it may not be appropriate to use CFMakeCollectable (for example, where you may have a NULL reference and don't want the clutter of an explicit check).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
