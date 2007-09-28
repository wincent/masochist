---
title: Let glue view pick up any pixel slack (gdiff, 50b3dbc)
---

Previously we used the right view to pick up the one-pixel slack caused by dividing the window in two when there were on odd number of pixels available. This was slightly ugly because it introduced an arbitrary difference between the left and right views and therefore incurred a slight maintenance penalty.

Now we use the glue view for picking up that slack when necessary. Seeing as there is only one glue view, it is in the center of the window, and its purpose is to draw curves rather than proportional characters it is the ideal candidate for this role.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
