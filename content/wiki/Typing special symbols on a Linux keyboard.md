---
tags: wiki
title: Typing special symbols on a Linux keyboard
---

At least in the Colemak layout, the following are compatible with all the hacks I've got in place to make the Linux keyboard behave at least somewhat similarly to how the Mac does.

# Dead letters

These ones work:

- `AltGr + Backtick` = `~` (mnemonic, "tilde"): so, to produce `ñ`, type `AltGr + Backtick` then `n`.
- `AltGr + d` = `"` (mnemonic, "diuresis"): so, to produce `ü`, type `AltGr + d` then `u`.

These ones do not, because they clash with my mappings:

- `AltGr + t` (acute accent, clashes with "New tab"):
  - To type `á`, you're out of luck; not even typing `Ctrl + u` then `00e1` works.
  - To type `é`, type `AltGr + e`.
  - To type `í`, type `AltGr + i`.
  - To type `ó`, type `AltGr + o`.
  - To type `ú`, type `AltGr + u`.

# Other mappings

These ones work:

- `AltGr + Shift + Minus` = `—` (em dash).
- `AltGr + Shift + Space` = ` ` (non-breaking space).
- `AltGr + Shift + 9` = `“` (left double quote).
- `AltGr + Shift + 0` = `”` (right double quote).
- `AltGr + 9` = `‘` (single left quote).
- `AltGr + 0` = `’` (single right quote).
- `AltGr + Shift + Plus` = `÷` (division).

These ones don't work:

- `AltGr + Minus` = `–` (en dash, clashes with "Decrease zoom").
- `AltGr + Plus` = `×` (multiplication, clashes with "Increase zoom").
