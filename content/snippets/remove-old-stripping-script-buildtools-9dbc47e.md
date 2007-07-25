---
title: Remove old stripping script (buildtools, 9dbc47e)
---

The old stripping script corresponds to the pre-dSYM workflow and all of my projects and their targets have long since been upgraded to use dSYM and the corresponding stripping scripts, so remove the old script.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
