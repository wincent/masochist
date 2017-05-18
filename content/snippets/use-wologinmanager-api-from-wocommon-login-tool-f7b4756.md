---
title: Use WOLoginManager API from WOCommon (login-tool, f7b4756)
tags: snippets
---

Apple has a new API for managing login items in Leopard, so I'm writing an Object-Oriented wrapper for it and sticking it inside WOCommon. This commit is the first of an incremental transition to the WOCommon API; the first function to be converted is for the "list" command.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
