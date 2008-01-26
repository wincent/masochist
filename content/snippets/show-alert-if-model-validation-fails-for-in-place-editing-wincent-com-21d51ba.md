---
title: Show alert if model validation fails for in-place editing (wincent.com, 21d51ba)
---

If validation fails we now display a JavaScript alert before reverting the field to its former value. I could look at instead updating the flash region of the layout but I actually think a dialog box is a little more usable in this case.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
