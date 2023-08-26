---
tags: png optipng pngcrush pngquant wiki
cache_breaker: 1
title: Compressing PNGs for delivery on the web
---

# Prerequisites

```shell
$ brew install pngcrush pngquant optipng
```

# Usage example

Lossy compression using `pngquant`, followed by an additional pass with `optipng`:

```shell
$ pngquant --force --ext .png --speed 1 file.png
$ optipng -o7 file.png
```

Non-lossy compression with `pngcrush`:

```shell
$ pngcrush -ow -brute file.png
```

In an extremely scientific test that I did, I wound up with these sizes, which would tend to confirm the above recommendations (ie. `pngquant` + `optipng` when lossy compression is acceptable; otherwise `pngcrush`):

| File                    | Size    |
| ----------------------- | ------- |
| Original                | 212,699 |
| `pngcrush`              | 122,826 |
| `pngquant`              | 65,264  |
| `optipng`               | 130,783 |
| `pngquant` + `optipng`  | 64,741  |
| `pngquant` + `pngcrush` | 64,951  |
