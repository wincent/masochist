---
title: buildtools r67, 1 item changed
tags: snippets
---

Correct typo; only update revision file if Subversion revision has changed (saves some gratuitous rebuilds in Xcode): this means that the build timestamp won't be accurate for repeated builds of the same revision but it will at least be correct on all fresh checkouts
