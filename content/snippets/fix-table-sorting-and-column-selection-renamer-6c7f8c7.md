---
title: Fix table sorting and column selection (REnamer, 6c7f8c7)
---

These are really two related changes to the nib file: firstly, removing the table view's content binding (this is redundant because each column has its value binding set up with the array controller); and secondly, specify column identifiers so that autosaving of column geometry can be turned on.

I originally had a third change here as well, enabling column selection, but that proved to be unnecessary in order to get sorting working.

Note that a few issues still remain: the sort indicators appear but do not change direction when sort direction is changed, and the highlighting behaviour is incorrect.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
