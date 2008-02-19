---
title: Get rid of Mac OS X-specific header paths (wikitext, 34972c4)
---

While including "ruby/ruby.h" will work on Mac OS X, it won't on Linux so change it to "ruby.h" where it should work on both. "mkmf" will take care of specifying the appropriate include search path.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
