---
title: Snap window size to table view row height (REnamer, 97148f1)
---

When resizing, force window size to always coincide with the height of the rows in the table.

I've added the custom code for this into the WOHUDTableView class; if I ever want to extract that and make it a reusable class then this kind of custom code will need to be moved down into another subclass.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
