---
tags: vim recipe wiki
cache_breaker: 1
---

Turn a vertical split into a horizontal split:

    ^Wt^WK

Turn a horizontal split into a vertical split:

    ^Wt^WH

ie:

-   `^Wt`: make top-left window current
-   `^WK`: move current window to full-width, top position
-   `^WH`: move current window to full-height, far left position

If there are only two windows, the `^Wt` can be omitted.

As a mnemonic, each of `^WH`, `^WJ`, `^WK` and `^WL` (ie. the basic directional movement keys in [Vim](/wiki/Vim)) can be used to send the current window to the very left, bottom, top, or right, respectively.

Source:

-   <http://stackoverflow.com/questions/1269603/to-switch-from-vertical-split-to-horizontal-split-fast-in-vim>
-   <http://www.mail-archive.com/vim@vim.org/msg11206.html>
