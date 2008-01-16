---
title: Teach WOHUDScrollView how to scroll (REnamer, 46da7d1)
---

NSScrollView doesn't implement the scrollPageUp:, scrollPageDown:, scrollLineUp: and scrollLineDown: methods (not sure why; as such the embedded class generally has to do this). Seeing as our scroll view has all the information necessary to implement these methods, do so, thus keeping all the movement code to the scroll view itself.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
