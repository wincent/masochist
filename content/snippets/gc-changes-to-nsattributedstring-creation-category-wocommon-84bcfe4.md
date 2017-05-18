---
title: GC changes to NSAttributedString creation category (WOCommon, 84bcfe4)
tags: snippets
---

Under GC the attributedString method is effectively equivalent to sending a copy message, so mark the method as deprecated and advise callers to use copy instead.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
