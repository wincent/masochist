---
title: WOCommon r259, 2 items changed
tags: snippets
---

Silence GCC warnings about potentially clobbered variables; in this case the use of the volatile keyword alone is not enough because the variables that GCC is complaining about are declared inside the NSMakeRange function.
