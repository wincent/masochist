---
title: Speed up indentation by caching spaces string (wikitext, 149ec37)
---

We lazily create a string struct on demand the first time it is needed, and as larger indent levels are required we grow the buffer and populate it with spaces. We never shrink the buffer and so never have to re-populate it. It is freed only at the end of the parsing operation.

So this will have little or no effect in really short snippets of wikitext (one liners where there is no indentation at all) but on longer slabs with lots of nesting it should afford a nice boost. A typical use case (examples with more nesting would see a larger improvement):

Before:

longer slab of ASCII text 14.260000 0.040000

After:

longer slab of ASCII text 13.510000 0.060000

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
