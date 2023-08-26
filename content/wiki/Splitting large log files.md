---
tags: wiki split coreutils shell
title: Splitting large log files
---

# With BSD `split`

You can do this with the `split` utility that comes with macOS:

```bash
split -b 25m backfill-reactions-500000-1000000-write.log
```

-   Splits the specified log file into chunks of 25m bytes, creating files named `xaa`, `xab` etc.
-   **Note:** This will cut the files at _exactly_ 25m bytes, even if that means slicing a line in half.

# With GNU `split`

GNU `split` (available on macOS as `gsplit` via `brew install coreutils`) provides more options that can be used to produce prettier filenames, and additionally avoid cutting lines midway through (via the `-C` switch):

```bash
gsplit -C 25m -a 3 \
  --numeric-suffixes \
  --additional-suffix=.log \
  backfill-reactions-500000-1000000-write.log \
  backfill-reactions-500000-1000000-write-part-
```

-   Makes `backfill-reactions-500000-1000000-write-part-000.log`, `backfill-reactions-500000-1000000-write-part-001.log` etc.
-   Note the `-a` flag, which in our example bumps the numeric prefix length up from the default (2) to 3; without this, if you have to produce a lot of chunks things will start to get really weird at the 100th chunk.

# See also

-   [Source](https://stackoverflow.com/questions/2016894/how-can-i-split-a-large-text-file-into-smaller-files-with-an-equal-number-of-lin)
