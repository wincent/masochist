---
title: GC changes for NSDictionary+WOCreation category (WOCommon, ca0232d)
---

In moving from referencing counting to GC for Leopard also fixed a tiny leak that could occur in the dictionaryWithKeysAndObjects: method in the event that an exception were thrown; in doing so we also avoid the expense of entering a @try block.
