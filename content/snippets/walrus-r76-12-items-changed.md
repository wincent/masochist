---
title: Walrus r76, 12 items changed
tags: snippets
---

Reworking location tracking storage: it now resides in parse results (or exceptions thrown during parse attempts) rather than being kept in instance variables on the parslets themselves; this allows the parslets to be kept re-entrant and suitable for use in threaded or recursive environments
