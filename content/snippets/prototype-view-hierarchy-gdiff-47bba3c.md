---
title: Prototype view hierarchy (gdiff, 47bba3c)
tags: snippets
---

Introduce the basic view hierarchy, using the MyDocument class as a controller which instantiates and configures a WODiffView and its subviews.

WODiffView is a simple container view that implements the auto-resizing logic, ensuring that when the parent window is resized the subviews are appropriately adjusted to match.

On the left we have an NSView which is used to group together a WOGutterView (for displaying line numbers) and a WOFileView (for displaying the contents of a blob). In the middle we have an WOGlueView which is used to draw shaded curves which visually link together changes made on one side (the "from" file) and those made on the other (the "to" file). Finally, on the right we have another NSView which is used to group together another WOFileView, another WOGutterView and an NSScroller.

When resizing the window all "columns" should remain fixed in width except for the two WOFileViews, which should grow and shrink as required to fill all of the available space. All columns resize vertically to fill all available space.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
