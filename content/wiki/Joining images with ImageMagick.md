---
tags: wiki imagemagick
title: Joining images with ImageMagick
---

# Obtaining ImageMagick

## Via Homebrew

```sh
brew install imagemagick
```

# Joining vertically

```
convert -append top.jpg bottom.jpg joined.jpg
```

# Joining horizontally

```
convert +append left.jpg right.jpg joined.jpg
```
