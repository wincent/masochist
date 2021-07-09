---
tags: wiki macos
title: Finding aliases and symbolic links
---

To find symbolic links in the current directory:

```bash
find . -type l
```

To find macOS "alias" links on the current volume:

```bash
mdfind kMDItemKind=Alias
```

Or in the current directory:

```bash
mdfind -onlyin . kMDItemKind=Alias
```
