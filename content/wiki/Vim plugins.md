---
tags: vim
cache_breaker: 1
---

This is a list of [Vim](/wiki/Vim) plugins which I find useful and robust enough to warrant recommending them.

\[**Disclaimer:** This list is massively out of date. See [my dotfiles repo](https://github.com/wincent/wincent/) for a more accurate reflection of what I'm using.\]

# Switching between buffers

-   minibufexpl.vim: <http://vim.sourceforge.net/scripts/script.php?script_id=159>
-   a.vim: <http://www.vim.org/scripts/script.php?script_id=31> (opens alternate files; header and source files, for example)

# Project and file system browsing

-   [Command-T](/wiki/Command-T) (written by me)
-   [fuzzyfinder.vim](/wiki/fuzzyfinder.vim): <http://www.vim.org/scripts/script.php?script_id=1984>
-   NERD Tree: <http://www.vim.org/scripts/script.php?script_id=1658>

## Retired from service

These are plug-ins which I tried out for a while but eventually got rid of due to [insatisfaction](/blog/fuzzyfinder):

-   fuzzy\_file\_finder (similar to `Command-T` in [TextMate](/wiki/TextMate)): <http://github.com/jamis/fuzzy_file_finder/tree/master>
-   fuzzyfinder\_textmate (extends Fuzzyfinder to use fuzzy\_file\_finder): <http://github.com/jamis/fuzzyfinder_textmate/tree/master>

# Editing

## Manipulating spans

-   surround.vim: <http://www.vim.org/scripts/script.php?script_id=1697>

This plug-in is great for doing things like converting single quotes to double quotes with: `cs'"`

-   repeat.vim: <http://www.vim.org/scripts/script.php?script_id=2136>

Complementary to `surround.vim`, `repeat.vim` allows plugins to hook into the repeat command (`.`) so that the entire action performed by a plug-in mapping can be repeated rather than just the last command that was executed inside the function.

## Commenting

-   The NERD Commenter: <http://www.vim.org/scripts/script.php?script_id=1218>

## Snippets

-   XP Template: <http://www.vim.org/scripts/script.php?script_id=2611>

# [Rails](/wiki/Rails)

-   rails.vim: <http://github.com/tpope/vim-rails> (see also <http://www.vim.org/scripts/script.php?script_id=1567>)
    -   screencast: <http://video.google.com/videoplay?docid=2139263225227275468>

