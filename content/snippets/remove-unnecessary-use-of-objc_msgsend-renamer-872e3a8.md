---
title: Remove unnecessary use of objc_msgSend() (REnamer, 872e3a8)
tags: snippets
---

There is really no need for this here as a normal message send can be used without provoking any GCC warnings.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
