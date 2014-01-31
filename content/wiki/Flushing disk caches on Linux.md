---
tags: linux
---

To get "cold" timings when running benchmarks on Linux:

```shell
$ echo 3 | sudo tee /proc/sys/vm/drop_caches
```

# Source

-   <http://stackoverflow.com/questions/9551838/how-to-purge-disk-i-o-caches-on-linux>

