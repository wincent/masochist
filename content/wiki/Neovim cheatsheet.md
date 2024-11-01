---
tags: wiki neovim
title: Neovim cheatsheet
---

# Normal mode

- `]d`/`[d`: Move to next/previous diagnostic message.

# Running prerelease versions

Download from the [releases page on GitHub](https://github.com/neovim/neovim/releases).

Say you downloaded to `~/Downloads`, verify the signature, then unpack the archive:

```
cd ~Downloads
tar xzf nvim-macos-arm64.tar.gz
```

And add to your `$PATH`; in my case, I use the `prepend_to` helper function [defined here](https://github.com/wincent/wincent/blob/5ac2017cc008c2fd3f3f7244bf3f4801d7faf426/aspects/dotfiles/files/.zsh/path#L38-L73), which prepends an item to the specified variable only if it is not already present:

```
prepend_to PATH "$HOME/Downloads/nvim-macos-arm64/bin"
```

If macOS complains about not being able to run the software because it cannot be verified, do this:

```
xattr -d com.apple.quarantine ~/Downloads/nvim-macos-arm64/bin/nvim
```

# See also

- [Vim cheatsheet]

<!-- References -->

[Vim cheatsheet]: /wiki/Vim_cheatsheet
