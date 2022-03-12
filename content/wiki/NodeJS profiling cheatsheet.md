---
tags: wiki node v8
title: NodeJS profiling cheatsheet
---

# Function prefixes

- `^` baseline compiler
- `*` optimized
- `~` optimizable

# `LazyCompile`

> does **not** mean that this time was spent in compiler, it just means that the function itself was compiled lazily

[Source](https://stackoverflow.com/a/26834673).

# Official docs

- https://v8.dev/docs/profile
