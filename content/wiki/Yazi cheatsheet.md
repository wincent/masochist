---
tags: wiki yazi cheatsheet
title: Yazi cheatsheet
---

# Command line

```
yazi --debug       # show settings
yazi --clear-cache # reset image cache
```

# Standard settings

See [`preset/yazi.toml`](https://github.com/sxyazi/yazi/blob/shipped/yazi-config/preset/yazi.toml).

# Standard bindings

See [`preset/keymap.toml`](https://github.com/sxyazi/yazi/blob/shipped/yazi-config/preset/keymap.toml).

Also see the official ["Quick Start"](https://yazi-rs.github.io/docs/quick-start) docs, which currently list these (among others):

- `.`: Toggle hidden/invisible/dot files.
- `f`: Filter.
- `<Tab>`: Show info.
- Sorting:
    - `,m` / `,M`: modified / reverse modified
    - `,e` / `,E`: extension / reverse extension
    - `,a` / `,A`: alphabetical / reverse alphabetical
    - `,n` / `,N`: natural (ie. folders first, case-insensitive, alphabetical) / reverse natural
    - `,s` / `,S`: size /reverse size

# Custom bindings

From `~/.config/yazi/keymap.toml` [in my dotfiles](https://github.com/wincent/wincent/blob/main/aspects/dotfiles/files/.config/yazi/keymap.toml):

- `T`: Toggle preview (hide/show).
- `F`: Full-size preview (zoom/unzoom).

# See also

- [sxyazi/yazi](https://github.com/sxyazi/yazi) on [GitHub].
- [Yazi homepage](https://yazi-rs.github.io/).

<!-- References -->

[GitHub]: /wiki/GitHub
