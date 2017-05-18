---
title: WOTest r165, 11 items changed
tags: snippets
---

Replace signal handling mechanism with lower-level exception handling (at CoreServices level); this prevents the Crash Reporter application from showing up spuriously when WOTest intercepts a fault that would otherwise derail the testing process
