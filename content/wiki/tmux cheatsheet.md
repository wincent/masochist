---
tags: tmux wiki cheatsheet
cache_breaker: 1
title: tmux cheatsheet
---

Not a comprehensive cheatsheet, but stuff that I keep forgetting and want to remember:

# Recipes

-   `:clear-history`: clear scrollback buffer of currently selected pane
-   `:break-pane`: break current pane into a new window
-   `:join-pane -t [window]`: inverse of `:break-pane`

## Windows

### Move current window to the left/right =

-   `:swap-window -t +1`: move to the right (in [my `tmux.conf`](https://github.com/wincent/wincent/blob/main/aspects/dotfiles/files/.config/tmux/tmux.conf), [bound to `[prefix] >`](https://github.com/wincent/wincent/blob/01ba91accbef7d07d83fd8352f6f36670fcfb2fc/aspects/dotfiles/files/.config/tmux/tmux.conf#L56))
-   `:swap-window -t -1`: move to the left (in [my `tmux.conf`](https://github.com/wincent/wincent/blob/main/aspects/dotfiles/files/.config/tmux/tmux.conf), [bound to `[prefix] <`](https://github.com/wincent/wincent/blob/01ba91accbef7d07d83fd8352f6f36670fcfb2fc/aspects/dotfiles/files/.config/tmux/tmux.conf#L55))

### Swap the current window with another

-   `:swap-window -t N`: swaps current window with window at N
-   `:swap-window -s N -t M`: swaps window at M with window at N

### Jump to previous/next window =

-   `:previous-window` (normally `[prefix] p`, but I have that bound to `select-layout -o` instead; see above)
-   `:next-window` or `[prefix] n`

I wanted to be super clever here and make use of, say `[prefix] [` and `[prefix] ]` to echo the familiar shortcuts for jumping between tabs, but that would class with the standard bindings for entering copy mode and pasting.

I considered instead binding to `[prefix] C-[` and `[prefix] C-]`, but is too subtle and close to the copy mode bindings, making it easy to do the wrong thing. Oh well.

## Panes

-   `[prefix] "`: vertical split (I have this [remapped to `[prefix] |` and `[prefix] \`](https://github.com/wincent/wincent/blob/01ba91accbef7d07d83fd8352f6f36670fcfb2fc/aspects/dotfiles/files/.config/tmux/tmux.conf#L51-L52) for convenience)
-   `[prefix] %`: horizontal split (I have this [mapped to `[prefix] -`](https://github.com/wincent/wincent/blob/01ba91accbef7d07d83fd8352f6f36670fcfb2fc/aspects/dotfiles/files/.config/tmux/tmux.conf#L53) for convenience)
-   `[prefix] C-o`: rotate panes within the current window
-   `[prefix] {`: swap pane (to the left)
-   `[prefix] }`: swap pane (to the right)

### Go back to previous layout

-   `:select-layout -o` ([source](https://github.com/tmux/tmux/issues/859)) (in [my `tmux.conf`](https://github.com/wincent/wincent/blob/main/aspects/dotfiles/files/.config/tmux/tmux.conf), [bound to `[prefix] p`](https://github.com/wincent/wincent/blob/01ba91accbef7d07d83fd8352f6f36670fcfb2fc/aspects/dotfiles/files/.config/tmux/tmux.conf#L48))

# Miscellaneous

-   `:set -w synchronize-panes on`: send same input to all visible panes (except panes in a separate mode).

<!-- References -->

[prefix]: /wiki/prefix
