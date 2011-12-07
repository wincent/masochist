---
tags: bash
---

```shell
$ kill -s STOP 1234
$ kill -s CONT 1234
```

You can also `Control-Z` a foreground process to suspend it, and signal that it should continue in the background with:

    bg %1
