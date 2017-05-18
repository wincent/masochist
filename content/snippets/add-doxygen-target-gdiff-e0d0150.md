---
title: Add Doxygen target (gdiff, e0d0150)
tags: snippets
---

This commit adds a Doxygen target for producing code-level documentation. At the moment, the latest Doxygen release (1.5.3) doesn't build on Leopard although a pre-built binary does run. Doxygen does not yet understand the property syntax of Objective-C 2.0.

Likewise, the latest version of Graphviz (2.8) (whose "dot" tool is invoked by Doxygen to depict inheritance hierarchies) doesn't yet build on Leopard, although I suspect an existing binary would work without problems.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
