---
title: Force strong references to top-level nib objects (Synergy, b2cc476)
---

Set up some phoney outlets to the top-level objects in the nib so as to create strong references to them and thus avoid having them garbage collected.

I am not entirely sure of all the cases in which this is required (I know that it is required for standalone controllers) so I have created outlets for all "real" (instantiated) top-level objects (at this stage that only means the controller and the MainMenu).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
