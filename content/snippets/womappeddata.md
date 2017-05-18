---
title: WOMappedData
tags: snippets
---

An `NSData` subclass (well, not a true subclass; a compound class actually) for mapping (potentially very large) files into page-aligned virtual memory buffers. It's true that there are methods for doing this using `NSData` itself, but they're only available on 10.4 and my stuff needs to run on 10.3 as well.
