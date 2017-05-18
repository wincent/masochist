---
title: Fix trailing space removal (wikitext, 13e622d)
tags: snippets
---

This was an off-by-one error that was harmless under normal operation because both code paths ended up returning the same length.

But when running under "space\_to\_underscore" mode it was enough to actually prevent the trailing space removal from working in the case where there was only one trailing space.

It worked when "space\_to\_underscore" was false only because each space was actually three characters (%20) so the test passed anyway.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
