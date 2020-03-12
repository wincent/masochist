---
title: buildtools r69, 2 items changed
tags: snippets
---

Use GCC_PREPROCESSOR_DEFINITIONS_NOT_USED_IN_PRECOMPS for better precompiled prefix header sharing, but change DEBUG macro to WO_DEBUG macro because the former causes GCC to freak out with the Apple headers
