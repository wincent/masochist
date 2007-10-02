---
title: Add source list (gdiff, f6aa0a3)
---

Add a source list for showing files included in a patch. This is a (currently NSOutlineView subclass); note that in swapping out NSOutlineView for the subclass there are serious drawing glitches of the focus ring. A fairly typical pattern in AppKit (empty subclass behaves radically different to superclass) but hopefully won't be too painful to troubleshoot.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
