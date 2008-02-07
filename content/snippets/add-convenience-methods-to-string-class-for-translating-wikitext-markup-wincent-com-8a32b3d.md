---
title: Add convenience methods to String class for translating wikitext markup (wincent.com, 8a32b3d)
---

I was originally planning on storing a copy of the wikitext source in the database and also a copy of the generated HTML too. But it turns out that the wikitext translator is even faster than I had hoped so I can just store the wikitext markup and convert it into HTML on the fly.

This commit adds a couple of helper methods to the String class for doing this conveniently.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
