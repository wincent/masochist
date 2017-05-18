---
title: Move subview initialization into WODiffView (gdiff, 1cc773c)
tags: snippets
---

WODocument is a controller class which previously set up its own document window and all the subviews. Now all of the subview initialization has been moved into WODiffView.

This results in a much simpler controller implementation, and there is better locality now that all subview management is encapsulated in WODiffView (previously only the autoresizing code was there).

When the controller needs to access the subviews (for example to initiate scrolling) I will add the appropriate properties or action methods to the WODiffView class.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
