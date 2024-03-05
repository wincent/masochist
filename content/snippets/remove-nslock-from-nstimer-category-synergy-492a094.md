---
title: Remove NSLock from NSTimer category (Synergy, 492a094)
tags: snippets
---

NSLock was required when the code had to run on Jaguar (because the @synchronized directive was not available); now this limitation is no longer applicable so replace the NSLock idiom with @synchronized.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
