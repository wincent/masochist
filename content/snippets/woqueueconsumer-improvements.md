---
title: WOQueueConsumer improvements
tags: snippets
---

Removed the temporary (and kludgy) workaround in my `WOQueueConsumer` class where I was forced to use polling to check for newly enqueued items; now it just blocks in the background until it's time to respond, courtesy of the magic of `NSMachPort`.
