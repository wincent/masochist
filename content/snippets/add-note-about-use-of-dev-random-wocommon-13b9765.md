---
title: Add note about use of /dev/random (WOCommon, 13b9765)
tags: snippets
---

Reading too many bits from /dev/random may constitute an abuse of a scarce resource, and the read() call may block if there is not enough random data anyway. Ideally in this case we should only read enough to seed another (psuedo-random) generator.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
