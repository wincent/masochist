---
title: Additional logging for stale login items (WOCommon, 4d74d72)
---

We now have confirmation that the problem described in bug \#636 is caused by stale entries in the login items (file not found on disk). Commit 26afae1 already fixes the crash caused by this, but here we add some additional logging for this case; informing the user of the stale entry makes the log entry more helpful than just reporting "error -43".

See:

http://www.wincent.com/a/support/bugs/show\_bug.cgi?id=636

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
