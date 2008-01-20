---
title: Defer to super if we don't handle the KVO message (REnamer, 0c0ac38)
---

I can't think of any reason why we would receive a message that we don't handle, but it doesn't hurt to check for this eventuality and defer to super if it ever arises.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
