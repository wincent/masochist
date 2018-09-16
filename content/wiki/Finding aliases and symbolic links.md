---
tags: wiki macos
---

To find symbolic links in the current directory:

```shell
find . -type l
```

To find macOS "alias" links on the current volume:

```shell
mdfind kMDItemKind=Alias
```

Or in the current directory:

```shell
mdfind -onlyin . kMDItemKind=Alias
```
