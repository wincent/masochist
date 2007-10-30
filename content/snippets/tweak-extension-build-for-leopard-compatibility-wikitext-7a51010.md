---
title: Tweak extension build for Leopard compatibility (wikitext, 7a51010)
---

These tweaks fix the build breakage under Leopard caused by the fact that the ANTLR runtime is non-Universal and Ruby is Universal. We set the ARCHFLAGS environment variable to force a non-Universal extension to be built.

In the future may actually produce a Universal version of the runtime, at which point will remove this somewhat kludgy hack.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
