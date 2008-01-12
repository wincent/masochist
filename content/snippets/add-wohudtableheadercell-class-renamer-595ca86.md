---
title: Add WOHUDTableHeaderCell class (REnamer, 595ca86)
---

Merely calling setTextColor: on the table header cell is not enough; the value is apparently ignored, so must create a new subclass with to enforce white text in the header cells, and swap the cells in when the table is instantiated.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
