---
tags: awk wiki
---

```shell
$ awk '{ if ( length >a ) { a = length; b=$0 }}END{ print b }' filename
```
