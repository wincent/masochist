---
title: WOTest r195, 2 items changed
tags: snippets
---

Launch growlnotify using env, and unset DYLD\_INSERT\_LIBRARIES to prevent the dynamic loader from issuing warning messages which might be generated when that environment variable is set for use by WOTestRunner
