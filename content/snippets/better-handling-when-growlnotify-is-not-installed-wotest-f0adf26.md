---
title: Better handling when growlnotify is not installed (WOTest, f0adf26)
---

Previouly when growlnotify was not installed env would issue an ugly error message to the standard error.

This commit redirects standard error to /dev/null so as to suppress this output and instead checks the exit status of the env tool. When growlnotify cannot be found in the current PATH a note (not an error or warning) is printed to the console. Other failure cases issue either an error or a warning, depending on their severity.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
