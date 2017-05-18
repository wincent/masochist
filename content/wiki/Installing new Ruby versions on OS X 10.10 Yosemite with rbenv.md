---
tags: ruby clang os.x rbenv yosemite wiki
---

On updating to [Yosemite](/wiki/Yosemite) I found that [rbenv](/wiki/rbenv), which I installed via [Homebrew](/wiki/Homebrew), would only allow me to add new versions if I prefixed the `rbenv install` command with `CC=clang`; eg:

```shell
$ CC=clang rbenv install 2.1.3
```
