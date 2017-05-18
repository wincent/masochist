---
tags: wiki
---

# Seeing which dynamic libraries get loaded

    $ export DYLD_PRINT_LIBRARIES=1
    $ ls
    dyld: loaded: /bin/ls
    dyld: loaded: /usr/lib/libncurses.5.4.dylib, cpu-sub-type: 3
    dyld: loaded: /usr/lib/libgcc_s.1.dylib, cpu-sub-type: 3
    dyld: loaded: /usr/lib/libSystem.B.dylib, cpu-sub-type: 3
    dyld: loaded: /usr/lib/system/libmathCommon.A.dylib, cpu-sub-type: 3
    $ unset DYLD_PRINT_LIBRARIES

# Inserting a dynamically loaded framework

    $ export DYLD_INSERT_LIBRARIES="/full-path-to/Framework.framework/Framework"

Multiple libraries can be specified, each pair separated by colon. It appears that libraries are inserted in the same order in which they appear in the specification.
