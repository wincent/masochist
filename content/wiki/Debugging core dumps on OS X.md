---
tags: core.dump macos wiki
---

```
$ ulimit -c unlimited # Enable core dumps.
$ ls -lt /cores # Identify latest core dump.
$ lldb -c /cores/core.12345
> bt -- backtrace
```

# See also

* https://developer.apple.com/library/mac/technotes/tn2124/_index.html
* http://lldb.llvm.org/lldb-gdb.html
