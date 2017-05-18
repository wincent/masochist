---
title: Update WORegistrationTextFieldCell for GC (WOCommon, 932eefb)
tags: snippets
---

Changes for GC under Leopard: the move to GC here not only allows us to get rid of lots of retains and releases, but we can also dispose of the reference counting tricks that we needed in order to keep a single shared instance of the field editor.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
