---
title: buildtools r76, 3 items changed
tags: snippets
---

Use GCC\_PREPROCESSOR\_DEFINITIONS\_NOT\_USED\_IN\_PRECOMPS for better precompiled prefix header sharing, but change DEBUG macro to WO\_DEBUG macro because the former causes GCC to freak out with the Apple headers
