---
tags: wiki zsh
title: Debugging Zsh startup
---

I recently had to debug some breakage in my Zsh set-up where my `$PATH` was getting clobbered but I didn't know where from. [Stack Overflow to the rescue](https://unix.stackexchange.com/a/154971/140622):

```
zsh -xl
```

This simulates a login shell (`-l`/`--login`) and dumps debug info (`-x`/`--xtrace`) about everything that it's doing along the way.
