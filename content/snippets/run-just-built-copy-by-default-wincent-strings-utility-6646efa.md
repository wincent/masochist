---
title: Run just-built copy by default (Wincent Strings Utility, 6646efa)
tags: snippets
---

When run from inside an Xcode shell script phase the TARGET\_BUILD\_DIR environment variable enables us to find the just-built copy for testing purposes. The same effect can be achieved by manually exporting the environment variable and running the specs by hand from the command line.

When the environment variable is not set, fall back to just running whatever copy of wincent-strings-util happens to be found first in the PATH.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
