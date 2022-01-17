---
tags: wiki
title: Splitting large log files
---

# With BSD `split`

You can do this with the `split` utility that comes with macOS:

```bash
split -b 25m backfill-reactions-500000-1000000-write.log
```

- Splits the specified log file into chunks of 25m bytes, creating files named `xaa`, `xab` etc.
- **Note:** This will cut the files at exactly 24m bytes, even if that means slicing a line in half.

# With GNU `split`

GNU `split` (available on macOS as `gsplit` via `brew install coreutils`) provides more options that can be used to produce prettier filenames, and additionally avoid cutting lines midway through (via the `-C` switch):

```bash
gsplit -C 25m \
  --numeric-suffixes \
  --additional-suffix=.log \
  backfill-reactions-500000-1000000-write.log \
  backfill-reactions-500000-1000000-write-part-
```

- Makes `backfill-reactions-500000-1000000-write-part-00.log`, `backfill-reactions-500000-1000000-write-part-01.log` etc.

# See also

- [Source](https://stackoverflow.com/questions/2016894/how-can-i-split-a-large-text-file-into-smaller-files-with-an-equal-number-of-lin)
