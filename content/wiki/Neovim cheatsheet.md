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

If it then complains along the lines of "“lua.so” can’t be opened because Apple cannot check it for malicious software.", this is a sign that the bundled treesitter parsers also have tobe marked safe as well. Failure to do so means that Neovim will complain like this whenever you try to open a Lua file:

```
Error detected while processing BufReadPost Autocommands for "*":
Error executing lua callback: ...wnloads/nvim-macos-arm64/share/nvim/runtime/filetype.lua:36:
BufRead Post Autocommands for "*"..
FileType Autocommands for "*"..
function <SNR>1_LoadFTPlugin[20]..
script $HOME/Downloads/nvim-macos-arm64/share/nvim/runtime/ftplugin/lua.lua:
Vim(runtime):E5113: Error while calling lua chunk:
...im-macos-arm64/share/nvim/runtime/lua/vim/treesitter.lua:421:
Parser could not be created for buffer 1 and language "lua" stack traceback:
        [C]: in function 'assert'
        ...im-macos-arm64/share/nvim/runtime/lua/vim/treesitter.lua:421: in function 'start'
        ...ads/nvim-macos-arm64/share/nvim/runtime/ftplugin/lua.lua:2: in main chunk
        [C]: in function 'nvim_cmd'
        ...wnloads/nvim-macos-arm64/share/nvim/runtime/filetype.lua:36: in function <...wnloads/nvim-macos-arm64/share/nvim/runtime/filetype.lua:35>
        [C]: in function 'pcall'
        vim/shared.lua: in function <vim/shared.lua:0>
        [C]: in function '_with'
        ...wnloads/nvim-macos-arm64/share/nvim/runtime/filetype.lua:35: in function <...wnloads/nvim-macos-arm64/share/nvim/runtime/filetype.lua:10>
stack traceback:
        [C]: in function '_with'
        ...wnloads/nvim-macos-arm64/share/nvim/runtime/filetype.lua:35: in function <...wnloads/nvim-macos-arm64/share/nvim/runtime/filetype.lua:10>
```

The fix, then, is:

```
$ find . -name '*.so'
./lib/nvim/parser/c.so
./lib/nvim/parser/vim.so
./lib/nvim/parser/markdown.so
./lib/nvim/parser/vimdoc.so
./lib/nvim/parser/lua.so
./lib/nvim/parser/query.so
./lib/nvim/parser/markdown_inline.so
$ find . -name '*.so' -exec xattr -d com.apple.quarantine {} \;
```

# See also

- [Vim cheatsheet]

<!-- References -->

[Vim cheatsheet]: /wiki/Vim_cheatsheet
