---
title: Workaround Haml whitespace damage of pre blocks (wincent.com, ec72ab3)
tags: snippets
---

Haml provides a preserve() helper for this which I am reluctantly using. Downsides: turns large slabs of transformed wikitext into indecipherable, hard-to-debug, ugly slabs; and makes another pass over the entire input stream, which runs against the primary design goal of the wikitext translator (speed).

I'm currently investigating an alternative workaround, the seed of which you can see in the application helper. Basically I want to suppress all indentation inside the given block; if I can come up with a workable solution will submit a patch to Haml.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
