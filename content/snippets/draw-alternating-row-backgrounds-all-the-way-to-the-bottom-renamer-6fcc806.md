---
title: Draw alternating row backgrounds all the way to the bottom (REnamer, 6fcc806)
tags: snippets
---

No need to do any further subclassing, can just overdraw until we hit the edge of the clip rectangle.

This is the initial implementation which clearly shows what's being done (draw existing rows, then overdraw past bottom of clip rectangle). I'm about to commit a refactored implementation that eliminates the repetition by combining the two phases.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
