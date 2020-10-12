---
tags: wiki lua vim neovim
title: Lua development in Neovim
---

# On versions

-   Neovim currently embeds Lua 5.1; verify this with `:lua print(_VERSION)`.
-   But really, it's [LuaJIT](https://luajit.org/) 2.1.0-beta3; see this with `:lua print(jit.version)`.
-   In the Neovim repo after building (which is as easy as `make`), you can find a REPL at `.deps/usr/bin/luajit`.
    -   The LuaJIT REPL [doesn't use readline](http://lua-users.org/lists/lua-l/2011-05/msg00331.html), which is annoying.
    -   Use `brew install rlwrap` to [add fake readline support](https://github.com/hanslub42/rlwrap); invoke with `rlwrap .deps/usr/bin/luajit`; I've added [a crude alias for this](https://github.com/wincent/wincent/blob/9c1b2d0e31b2415fa4416e027e219d8718edee84/aspects/dotfiles/files/.zsh/aliases#L25) to my dotfiles (`nlua`).
-   Lua 5.x updates include breaking changes, so be wary of reading the documentation for the wrong version.
    -   An example breaking change: `...` is the vararg operator for LuaJIT, but other versions use (used?) `arg`.

# Language quirks

-   Indices are 1-based.
    -   This causes confusion in Neovim because some APIs use 0-based indices (eg. `vim.api.nvim_buf_get_lines`) while others use 1-based indices (eg. `vim.api.nvim_win_set_cursor`; details in `:h api-indexing`).
-   Standard library is tiny, meaning you have to implement basic things yourself.
-   `~=` is the "not equals" operator.
-   No regular expressions (just "patterns").
    -   Example: instead of `\b` word boundary, you can use `%f[%A]` (a `%f` "frontier" pattern, look for where `%A` — ie. a non-word character — starts to match).
    -   Non-greedy matches: instead of greedy `*`, non-greedy `{-}` (Vimscript), you can use `-`.
-   No ternaries:
    -   Can't write `a ? b : c`
    -   Can't write `if a then b else c`
    -   _Can_ write `a and b or c` (but beware, if `b` is false, expression will _always_ evaluate to `c`)
-   `0` is truthy, so functions in the Vim API that return 0 or 1 need an explicit `==` check; eg:

    ```
    -- Passes conditonally:
    if vim.fn.has('autocmd') == 1 then; end

    -- Always passes:
    if vim.fn.has('autocmd') then; end
    ```

-   Some methods return tuples, which is great, but can make their use awkward in some situations; eg:

    ```
    -- `gsub` returns the new string plus the index of the match.
    -- We want to make a new list with the result of a couple of
    -- `gsub` calls, but we can't do this:
    list = {
      lines[1]:gsub('a', 'b'),
      lines[2]:gsub('c', 'd'),
    }

    -- or this...
    list = {
      lines[1]:gsub('a', 'b')[1],
      lines[2]:gsub('c', 'd')[1],
    }

    -- we have to do this...
    list = {
      ({lines[1]:gsub('a', 'b')})[1],
      ({lines[2]:gsub('c', 'd')})[1],
    }
    ```

# Language strengths

-   Small/simple (easy to learn).
-   Fast, apparently.
-   Functions are first class values.

# Syntax

-   Line comments: `--`
-   Block comments: `--[[` to `--]]`
-   Functions: `function optional_name()` to `end`
-   Loops: `for ... do` to `end`:
    -   Numbers: `for i = 1, 5 do`/`end` (loops through 1 to 5, inclusive).
    -   Lists: `for i, val in ipairs({'a', 'b', 'c'}) do`/`end`
-   Conditionals:
    -   `if ... then` to `end`; also:
    -   `else`; and
    -   `elseif ... then` (`else if` will usually be a syntax error, because it needs an additional `end`).

# Neovim APIs

-   `vim.gsplit(string, separator, plain)`: Returns an iterator; if `plain` is passed and `true`, `separator` is interpreted literally instead of as a pattern.
-   `vim.inspect()`: eg. `:lua print(vim.inspect(something))`
-   `vim.split(string, separator, plain)`: Returns a list-like table; if `plain` is passed and `true`, `separator` is interpreted literally instead of as a pattern.
-   `vim.trim()`: trims a string.

## Shortcuts

### Reading options

-   `vim.o[option]` (eg. `vim.o.hidden` or `vim.o.hid` etc) is shorthand for `vim.api.nvim_get_option('hidden')`.
-   `vim.bo[option]` (eg. `vim.bo.filetype` or `vim.bo.ft` etc) is shorthand for `vim.api.nvim_buf_get_option(0, 'filetype')`.
-   `vim.wo[option]` (eg. `vim.wo.list` etc) is shorthand for `vim.api.nvim_win_get_option(0, 'list')`.

### Calling Vimscript functions

-   `vim.fn[name]` (eg. `vim.fn.exists` etc) runs a Vimscript function of the same name.

### Running Vim commands

-   `vim.cmd(string)` (eg. `vim.cmd('highlight clear')`) runs a Vim command.

# String methods

-   Available methods (via `:lua print(vim.inspect(vim.tbl_keys(string)))`):

    ```
    { "find", "lower", "format", "rep", "gsub", "len", "gmatch", "dump", "match", "reverse", "byte", "char", "upper", "gfind", "sub" }
    ```

    -   `gmatch()`: returns an iterator that finds a pattern; can be used to split a string (eg. to split `words` on commas: `for word in string.gmatch(words, '[^,]+') do`/`end`) but note that `vim.gsplit()` is probably easier to use.
    -   `sub(startIndex, endIndex)`: returns a substring; indices are 1-based and inclusive; eg. `("foobar"):sub(2, 5)` is `"ooba"`.
    -   `len()`: returns length, but not that `("foo"):len()` can be written as `#"foo"`.

# Table methods

-   `table.concat(tbl, joiner)`: eg. `table.concat(words, ' ')`.
-   `table.insert(tbl, value)`

# Pro-Tips™

-   For testing, can blow away module from cache with: `:lua package.loaded['some.pack'] = nil`.
