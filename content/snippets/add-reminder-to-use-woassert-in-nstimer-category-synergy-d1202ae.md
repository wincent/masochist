---
title: Add reminder to use WOAssert in NSTimer category (Synergy, d1202ae)
tags: snippets
---

For now we explicitly check and throw an exception, but as this is intended to check programmer errors should really use an assert macro (which will only be active in debug builds).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
