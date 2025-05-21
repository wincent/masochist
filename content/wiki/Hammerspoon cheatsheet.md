---
tags: wiki hammerspoon cheatsheet
title: Hammerspoon cheatsheet
---

# General

## Show configured hotkeys

```
hs.inspect(hs.hotkey.getHotkeys())
```

# Stuff specific to [my dotfiles](https://github.com/wincent/wincent/blob/main/aspects/dotfiles/files/.hammerspoon)

## Keybindings

### Moving windows

- ^⌥-↑: Move to top edge (repeat to cycle sizes)
- ^⌥-→: Move to right edge (repeat to cycle sizes)
- ^⌥-↓; Move to bottom edge (repeat to cycle sizes)
- ^⌥-←: Move to left edge (repeat to cycle sizes)
- ^⌥⌘-↑: Move to corner (repeat to cycle corners)
- ^⌥⌘-↓: Move to center (repeat to cycle sizes)

### Selecting layouts

- ^⌥⌘-F1: Switch to single-monitor layout
- ^⌥⌘-F2: Switch to dual-monitor layout
- ^⌥⌘-F3: Arrange displays vertically
- ^⌥⌘-F4: Arrange displays horizontally
- ^⌥⌘-F5: Toggle Hammerspoon console
- ^⌥⌘-F6: Reload Hammerspoon configuration

### Other

- ⌥-v: Show clipboard contents.
