---
title: Force window to front on subsequent "open" events (REnamer, f8562dc)
---

Now we force the main window to the front on subsequent "open" events, which means that when you drop more files on the Dock icon the associated window becomes main/key, and its preview becomes visible (if appropriate).

I am not sure exactly why I have to force this in this way, nor why the controller's window message returns nil, but it works.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
