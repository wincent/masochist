---
title: Roll Ragel generation into Xcode build (gdiff, 828150d)
tags: snippets
---

Migrate the WODiffMachine class to the GUI application build as well using a custom build rule to generate the Objective-C (.m) file from the Ragel (.rl) source.

Although this works there appears to be a problem in the Xcode dependency analysis wherein ragel is run on every single build even when no files have been changed; this in turn causes the built WODiffMachine Objective-C file to itself be rebuilt, and the project relinked. Hopefully will be able to isolate the cause of these unnecessary rebuilds and eliminate them.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
