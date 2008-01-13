---
title: Set default cell text color to white (REnamer, d347fdf)
---

White (or light grey) text is needed in HUD stlye windows, so change the text color to white in the table cells.

Even so, a NSTextField/NSTextFieldCell subclass will still be required, I believe, in order to suppress the unwanted blue selection highlighting.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
