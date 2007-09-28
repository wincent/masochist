---
title: Add second of two scroll views (gdiff, 429df2e)
---

Completing the work started in 390c5b3, the right hand side is now also located inside a scroll view with no vertical scroll bar. The NSScroller that was previously grouped along with the left file view and its gutter has now been move outside of the group (it makes no sense to have a scroller inside the document view of an NSScrollView).

This required some reworking of the WODiffView autoresizing code, and in the process I discovered that the incorporation of the "slack" in the glue view (introduced in commit 50b3dbc) was being thrown away during window resizes; so as part of the updates to the autoresizing code I now ensure that the slack is accommodated by the glue view during window resizing as well.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
