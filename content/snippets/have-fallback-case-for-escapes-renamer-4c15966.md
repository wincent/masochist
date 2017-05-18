---
title: Have fallback case for escapes (REnamer, 4c15966)
tags: snippets
---

Although it's not mentioned in the pcretest manpage as far as I can tell, in addition to the list of supported escapes a fallback case is accepted (and expected to be implemented) that handles a backslash followed by any other character, as is common in most languages which incorporate some form of escapes.

Roll in support for this, thus fixing a bunch of different test failures.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
