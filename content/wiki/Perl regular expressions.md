---
tags: perl
---

# Negative (fixed-width) lookbehind

    /(?<!foo)bar/

Matches "bar" only if not preceded by "foo".

# Match only *horizontal* whitespace

    \h
