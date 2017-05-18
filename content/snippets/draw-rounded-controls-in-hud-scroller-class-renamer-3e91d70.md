---
title: Draw rounded controls in HUD scroller class (REnamer, 3e91d70)
tags: snippets
---

This replaces the original behaviour of the scroller (rectangular scroll knob, triangular buttons) with better-looking controls which match those seen in Interface Builder (rounded rectangle scroll knob, circular buttons).

In order to pull this off I've had to override the rectForPart: method. I originally investigated compensating for Cocoa's many, many quirks (for example, when the user has their preferences set to show the arrows separately there is an overlap of two pixels with the scroll knob, but if their preferences are set to show the arrows together then there is no overlap but there is a 4-pixel band of unused space at the other end of the scroll slot; buttons are non-square, the up/down and left/right pairs aren't necessarily the same size, and worse, their shape changes depending on the preferences; there are many, many other irregularities that I won't describe here).

In the end I decided that making adjustments for Cocoa's idiosyncrasies was too brittle and could break with any OS update, and so what I've done in the end is basically completely rewrite the rectForPart: method and do all of the geometry calculations from scratch, sans idiosyncrasies. Evidently the Interface Builer team also wrote their own from scratch, or at least it seems so, because their scrollers do not obey the user preference for displaying the arrows together.

There is still more to do: there is a minor visual smear when moving the vertical scrollbar (I think this may be due to a rounding issue), and at the moment I haven't yet added the arrows inside the circular buttons.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
