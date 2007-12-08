---
title: Remove NSLock from NSTimer category (Synergy, 492a094)
---

NSLock was required when the code had to run on Jaguar (because the @synchronized directive was not available); now this limitation is no longer applicable so replace the NSLock idiom with @synchronized.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
