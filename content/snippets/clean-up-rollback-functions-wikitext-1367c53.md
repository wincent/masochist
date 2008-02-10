---
title: Clean-up rollback functions (wikitext, 1367c53)
---

We can cut out about 33 lines of code by taking advantage of the following invariant: as soon as we see a link start marker we know that we'll either be emitting a link, or the text that results from rolling back a failed link. This means that instead of checking to see if we need to start a paragraph in the rollback functions we can just start one unconditionally as soon as we see the link start markers.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
