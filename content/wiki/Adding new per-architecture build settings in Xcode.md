---
tags: xcode wiki
---

In the [Tiger](/wiki/Tiger) version of [Xcode](/wiki/Xcode) there are some build settings which offer per-architecture variants and some which do not. An example of the latter is the `WARNING_CFLAGS` build setting:

    WARNING_CFLAGS_ppc                  = -Wall -Wextra -Wno-unused-parameter
    WARNING_CFLAGS_i386                 = -Wall -Wno-unused-parameter

[Tiger](/wiki/Tiger)'s [Xcode](/wiki/Xcode) will ignore these build settings. The solution is to do the following:

    WARNING_CFLAGS                      = $(WARNING_CFLAGS_$(CURRENT_ARCH))
    WARNING_CFLAGS_ppc                  = -Wall -Wextra -Wno-unused-parameter
    WARNING_CFLAGS_i386                 = -Wall -Wno-unused-parameter
