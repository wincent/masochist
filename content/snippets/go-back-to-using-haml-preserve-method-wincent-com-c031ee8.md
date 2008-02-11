---
title: Go back to using Haml "preserve" method (wincent.com, c031ee8)
---

Will soon follow up with a patch to undo the ugliness from inside the "render" method. Clearly a hack, and I'd love to be rid of it, but will have to be that way for now.

The main issue with it is that it involves applying two totally redundant transformations: one to insert newline escapes and another to remove them. Combined, these cancel each other out and the total effect is a no-op, but we're forced to use them to prevent Haml from mangling the PRE blocks (we gain correctly formatted PRE blocks in the browser but lose our nice source formatting and get back a horrible uninterrupted blob of text instead).

This time-wasting transform is especially a shame because of all the effort I've put in to making the wikitext translator fast, so I'd still like to find an elegant way to teach Haml how to pass designated blocks of text without touching the formatting in any way.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
