---
title: Add first of two scroll views (gdiff, 390c5b3)
---

Rather than replicate all the work done by NSScrollView (and behind the scenes NSClipView) I am going to try letting NSScrollView do as much as possible. This commit starts the migration, placing the content on the left-hand side inside a programmatically created scrollview.

The previously used NSView that was used for grouping purposes is still required seeing as an NSScrollView expects a single document view. The autoresizing machinery works without modification using the scrollview as a drop-in replacement for the NSView.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
