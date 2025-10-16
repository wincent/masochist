---
tags: wiki git
title: Listing blobs by file size in a Git repo
---

```sh
git rev-list --objects --all |
  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' |
  awk '$1 == "blob"' |
  sort -k3 -n -r |
  awk '{printf "%s\t", $2; system("numfmt --to=iec " $3); print $4}'
```

ie.

- List all objects.
- For each, show type (ie. "blob", "tree" etc), hash, size, and path.
- Filter out everything but blobs.
- Sort by third column (size) in reverse order.
- Print hash, a tab, then human-readable size (formatted with `numfmt`, from [GNU Coreutils](https://www.gnu.org/software/coreutils/), to produce a number with a single-letter suffix like `M` or `K`), and then the path.

Example output from [my dotfiles repo](https://github.com/wincent/wincent), showing the first 10 lines of output (ie. the 5 biggest blobs):

```
a70c4b97c11c0fe7c911a8a0a08b90a2f5e15476        49M
aspects/nvim/files/.config/nvim/pack/bundle/opt/command-t/data/wincent/commandt/benchmark/configs/matcher.lua
90173c7cc0ed1eef3e76e8d7e4034845e9c5c47a        13M
roles/misc/files/sierra-desktop.jpg
dfd1510fee8c04198e204ab7c8368ba8e9cf7ddf        5.1M
vendor/git-cipher/vendor/yarn-v1.22.22/lib/cli.js
35ed6980092d6e0e5c0008e78540dcf47196cc25        5.1M
vendor/yarn/lib/cli.js
b959411fa647cd55265c6b7992a2b1104e5e2dc0        5.1M
vendor/yarn/lib/cli.js
```
