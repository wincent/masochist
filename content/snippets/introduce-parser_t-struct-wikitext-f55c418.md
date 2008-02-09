---
title: Introduce parser_t struct (wikitext, f55c418)
---

This will make passing parameters around much easier because we'll be able to pass a single pointer rather than a raft of variables. As a starting point, I've converted the "start para if necessary" function to accept a pointer to the new struct as one of its parameters.

Once fully completed this will be a substantial clean-up and a big enhancement for maintainability.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
