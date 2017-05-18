---
title: Use waitpid consistently in installer tool and parent application (gdiff, 6aa0212)
tags: snippets
---

Make usage of waitpid consistent across the installer tool and the parent application (where it incorrectly used WNOHANG).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
