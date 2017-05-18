---
title: WOCommon r510, 3 items changed
tags: snippets
---

r2337@cuzco (orig r259): wincent | 2007-03-22 16:56:18 +0100 Silence GCC warnings about potentially clobbered variables; in this case the use of the volatile keyword alone is not enough because the variables that GCC is complaining about are declared inside the NSMakeRange function.
