---
title: Implement click-and-hold in the non-knob part of the slot (REnamer, 655a288)
---

Previous clicking in the non-knob part of the lost resulted in a "page up" or "page down" movement. Now clicking-and-holding results in a repeated action, depending on which part of the slot the mouse is in at that moment. This brings the custom scroller behaviour completely in line to that of the rest of the system.

There is still one change I'd like to make (making the page up/down intervals larger), but that will have to be done in the NSScrollView subclass.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
