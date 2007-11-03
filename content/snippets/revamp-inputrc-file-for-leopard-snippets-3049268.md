---
title: Revamp inputrc file for Leopard (snippets, 3049268)
---

It appears that Apple has commandeered the up and down cursor keys in the new version of the Terminal in Leopard, breaking my old bindings for history-search-backward and history-search-forward. Or maybe its just the new version of Bash that ships with Leopard.

Whatever the cause, this commit re-instates the old desired behaviour, as well as setting up key combinations for word-based movement and jumping to the beginning and end of lines.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
