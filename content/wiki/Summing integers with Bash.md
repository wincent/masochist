---
tags: bash awk
---

```shell
$ awk '{s+=$1} END {print s}' some_file
```
