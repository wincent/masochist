---
title: Shell-script clean-up (buildtools, a1267f6)
tags: snippets
---

Remove hard-coded paths in /usr/bin (trust PATH to lead to the selection of the right tool), use /bin/sh instead of /bin/bash in the shebang line, and quote some arguments which contain variables (paths are unlikely to contain spaces, but err on the safe side).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
