---
tags: vim wiki
---

Turn off viminfo-saving and then clear the "jumps" section of the viminfo file:

```
:set viminfo=
:e ~/.vim/tmp/viminfo
```

**Note:** The actual location of the viminfo file may vary. See `:set vi?`. A common default is `~/.viminfo`.
