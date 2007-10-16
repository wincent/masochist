---
title: Store generate files in repository (wikitext, 402251b)
---

Given the fragility of the ANTLR build chain (upgrading from my working 3.0-with-bugfixes copy to 3.0.1-which-also-needed-bugfixes version proved to be quite timeconsuming and error-prone) I'm adding the ANTLR-generated lexer files to the repository to guard against possible future problems. That is, even if I have problems building a working future version of ANTLR and can't re-generate the lexer, at least I'll have a copy on hand of a prior working version in the repository.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
