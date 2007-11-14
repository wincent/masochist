---
title: Tweak Rakefile for Linux (Walrus, 116bb1c)
---

Instead of using the hard-coded extension suffix for Mac OS X (".bundle") use a dynamic one (the DLEXT constant). With this change running a "rake make" can successfully build the C extensions on both Mac OS X (where the extension is ".bundle") and on Linux (where it is ".so"), and possibly others as well.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
