---
title: Watch out for nil login item (WOCommon, 26afae1)
tags: snippets
---

Avoids crash at launch described in:

http://wincent.dev/a/support/bugs/show\_bug.cgi?id=636

The underlying cause of why we might wind up with a nil item is still being investigated.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
