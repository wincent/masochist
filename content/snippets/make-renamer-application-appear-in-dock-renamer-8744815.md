---
title: Make REnamer application appear in Dock (REnamer, 8744815)
---

This is part of a general style change. In the prototype, the principal object of interest was the contextual menu plugin and the application was a helper that was embedded inside the plugin bundle.

Now, the application is the star and the plugin lives inside the application bundle. This opens up some other possibilities for UI interaction, like responding to items dragged and dropped onto the Dock icon or the application in the Finder.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
