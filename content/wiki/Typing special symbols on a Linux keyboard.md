---
tags: wiki
title: Typing special symbols on a Linux keyboard
---

At least in the Colemak layout, the following[^following] are compatible with all the hacks I've got in place to make the Linux keyboard behave at least somewhat similarly to how the Mac does. Additionally, as of [9c241271b715a939](https://github.com/wincent/wincent/commit/9c241271b715a939a445eb02828baa6f8036f4d3), I have some macOS-style dead-key bindings in place, noted in the appendix.

[^following]: As described in ["Multilingual" on the Colemak wiki](https://colemak.com/Multilingual).

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

# Appendix: macOS-style bindings

As of the commit mentioned earlier, I currently have these shoe-horned into my set-up (plus some extras, but the ones listed below are the ones that you actually have to type in Spanish from time to time) by a combination of [Interception Tools](https://gitlab.com/interception/linux/tools) and [`~/.XCompose`](https://linux.die.net/man/5/compose) (`man 5 Compose`):

- `Option-n n` = `ñ`
- `Option-Shift-n n` = `Ñ`
- `Option-e a` = `á`
- `Option-Shift-e a` = `Á`
- `Option-e e` = `é`
- `Option-Shift-e e` = `É`
- `Option-e i` = `í`
- `Option-Shift-e i` = `Í`
- `Option-e o` = `ó`
- `Option-Shift-e o` = `Ó`
- `Option-e u` = `ú`
- `Option-Shift-e u` = `Ú`
- `Option-u u` = `ü`
- `Option-Shift-u u` = `Ü`
