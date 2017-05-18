---
title: Additional dependency info for Rakefile (wikitext, 3fd78b8)
tags: snippets
---

Rather than just firing off the Makefile from within the Rakefile, some basic dependency info is added so that Rake knows when to bother running "make" again.

The default task is the "all" task, which builds (only if necessary) and runs the specs. Note that because the actual building is delegated to make, and the Makefile has its own set of dependency information, the build will only perform as much as is necessary (for example, if the grammar file is touched then everything gets rebuilt; if only the wikitext.c file is touched then only that gets rebuilt and is relinked against the other object files).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
