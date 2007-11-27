---
title: Don't trust Xcode to obey the -e (buildtools, 1307e40)
---

Xcode will use its own shebang line and thus ignore the "-e" switch, so use an explicit "set" statement instead.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
