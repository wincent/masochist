---
title: Remove no-op NSView overrides (gdiff, dc7f887)
tags: snippets
---

The default NSView subclass templates include no-op methods that can be overridden. Seeing as the WODiffView class is unlikely to ever need to override these methods, remove them and fall through to the super class implementations.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
