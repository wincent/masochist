---
title: Refactor script into build and install portions (wikitext, 015e869)
---

Now we have a build script (which builds the ANTLR tool and the C target runtime on Darwin, and only the runtime on Linux) and a separate install script (which installs tool and runtime on Darwin, and only the runtime on Linux).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
