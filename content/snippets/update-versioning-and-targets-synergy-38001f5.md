---
title: Update versioning and targets (Synergy, 38001f5)
tags: snippets
---

Switch to a modern versioning technique in the build, like the one used in Synergy Advance. Basically, when building a package for release we update the build number based on the current Git commit; the version number and copyright years are automatically propagated through to the localized InfoPlist.strings files.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
