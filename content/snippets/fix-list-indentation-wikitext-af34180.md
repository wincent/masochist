---
title: Fix list indentation (wikitext, af34180)
---

Quick a tricky one, this one, because the LI token is the only one which varies its behaviour depending on the context.

For example, when it is just a standard list item containing some text we want it to behave like a P token (ie. when we dedent we don't want to emit any spaces). On the other hand, if the LI contains a nested list then it takes on block-like properties and we do want to emit spaces when dedenting (ie. like blockquote).

We implementing this by introducing another imaginary token, NESTED\_LIST, which is present when a nested list is present and guides the dedentation process accordingly.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
