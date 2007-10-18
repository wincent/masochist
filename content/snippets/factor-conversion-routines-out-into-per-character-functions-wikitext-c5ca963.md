---
title: Factor conversion routines out into per-character functions (wikitext, c5ca963)
---

Extract two new functions, one for converting a single UCS-2 character into a (possibly multi-byte) UTF-8 representation, and another for performing the reverse operation.

This change will be useful when sanitizing internal link targets in the future; such link targets must be URL-encoded, which means converting them to UTF-8, performing the encoding, and then converting back into UCS-2 for merging into the output stream (whose working format is UCS-2). The functions can be used to efficiently convert on a per-character basis and thus avoid potentially expensive allocations of temporary strings; in fact the whole thing can be done in pure C this way without any Ruby message sends at all.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
