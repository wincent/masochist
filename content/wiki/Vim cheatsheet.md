---
tags: vim
cache_breaker: 1
---

I'll eventually publish a more comprehensive listing, but for now I just want to make some notes of commands that I discover and don't want to forget.

# Insert mode commands

-   Switch from Insert to Normal mode for one command only: `CTRL-o` (followed by the normal mode command)
-   Delete back to the beginning of the previous word (or the beginning of the current word if the cursor is already inside a word): `CTRL-w`
-   Indent current line: `CTRL-t` (mnemonic: "tab")
-   Dedent current line: `CTRL-d` (mnemonic: "dedent")
-   Insert a hard tab, even when it would normally be expanded to spaces: `CTRL-V <tab>`

# Normal mode commands

-   `==`: intelligently indent selection (or currently line if no selection); *note that what is actually happening here is that we're using the "filter" functionality with no filter, so [Vim](/wiki/Vim) just uses the standard builtin "C indenting" functionality* (for more information see `:h filter`)
-   `gq{motion}`: reformat (rewrap); eg:
    -   `gqq`: reformat (rewrap) current line
-   `gu{motion}`: lowercase
-   `gU{motion}`: uppercase
-   `g~{motion}`: toggle case
-   `CTRL-x`: increment the number at (the end of) the word under the cursor
-   `CTRL-a`: decrement the number at (the end of) the word under the cursor
-   `gv`: reselect last selection
-   `g CTRL-G`: show current cursor position and total counts (columns, lines, words, bytes)
-   `ga`: show ASCII info for character under cursor
-   `g8`: show UTF-8 info for character under cursor
-   `CTRL-w f`: open the file under the cursor in a split (`gf` will do this without the split)

## Window and tab-related commands

-   `CTRL-w =`: resize windows to be equal width and height
-   `CTRL-W r` or `CTRL-W CTRL-R`: Rotate windows (downwards/rightwards)
-   `CTRL-W {H,J,K,L}`: Move a window to occupy to an entire edge of the viewport; eg. `CTRL-W J` pushes the current window to the bottom, occupying the full width (also works: `CTRL-W CTRL-{H,J,K,L}`)
-   `CTRL-W T`: open current window in a new tab
-   `CTRL-W _`: make current window as big as possible (cf. `10 CTRL-W _`, which makes it 10 lines high); (also works: `CTRL-W CTRL-_`)
-   `CTRL-W b`: move to bottom window (also works: `CTRL-W CTRL-B`)
-   `CTRL-W t`: move to top window (also works: `CTRL-W CTRL-T`)
-   `gt`: next tab
-   `gT`: previous tab

For more see `:h window-moving`

## Movement

For lots of documentation see `:h motion.txt`.

-   `h`, `j`, `k`, `l`: per-character/per-line movement through file (left, down, up, right)
-   `gj`, `gk`: per-line movement through buffer, operating on *display lines* (which may be wrapped) not actual lines in the file (down, up)
-   `w`: forward a word (mnemonic: "word"); here "word" is an "keyword" (identifier) like "foo9" or "h\_go" and the movement is to the *beginning* of the next word
-   `W`: forward a "big" word; here a "word" is *anything* other than whitespace
-   `b`: back a word (mnemonic: "back"); again the movement is to the *beginning* of the word
-   `B`: back a "big" word
-   `e`: forward to the *end* of a word (mnemonic: "end")
-   `E`: forward to the *end* of a "big" word
-   `ge`: back to the *end* of the last word
-   `gE`: back to the *end* of the last "big" word
-   `f{character}`: forward to the next occurrence of `character` (mnemonic: "find/foward")
-   `F{character}`: same as `f{character}`, but search in the opposite direction
-   `t{character}`: forward *til* (until) the next occurrence of `character` (mnemonic: "til/to"); the cursor is place immediately *before* and not on the character
-   `T{character}`: same as `t{character}`, but search in the opposite direction
-   `;`: repeat last `f`, `F`, `t` or `T` operation
-   `,`: repeat last `f`, `F`, `t` or `T` operation, but in the opposite direction
-   `CTRL-F`: forward a (full) screen (mnemonic: "forward")
-   `CTRL-B`: back a (full) screen (mnemonic: "back")
-   `CTRL-D`: down a (half) screen (mnemonic: "down")
-   `CTRL-U`: up a (half) screen (mnemonic: "up")
-   `H`: jump to top of screen (mnemonic: "high")
-   `M`: jump to middle of screen (mnemonic: "middle")
-   `L`: jump to bottom of screen (mnemonic: "low")
-   `gg`: jump to top of file (mnemonic: like `more` or `less` pagers, except plain `g` isn't available so we have to use `gg`)
-   `G`: jump to bottom of file (mnemonic: like `more` or `less` pagers)
-   `200G`: jump to line 200
-   `:200`: same as `200G`
-   `{`: jump to last blank line
-   `}`: jump to next blank line
-   `[[`: jump to previous `{` in column 0
-   `]]`: jump to next `{` in column 0
-   `][`: jump to next `}` in column 0
-   `[]`: jump to previous `}` in column 0
-   `%`: jump to matching brace (with [matchit.vim](http://www.vim.org/scripts/script.php?script_id=39) you can also jump to matching HTML tags and the like)
-   `]s`: jump to next misspelled word
-   `zg`: mark a word as good, adding it to the spelling dictionary

## Scrolling

-   `zz` center current cursor line within viewport
-   `zt` scroll current cursor line to top of viewport
-   `zb` scroll current cursor line to bottom of viewport
-   `CTRL-y` scroll down a line
-   `CTRL-e` scroll up a line
-   `CTRL-d` scroll down one page
-   `CTRL-u` scroll up one page

## Marks and jumps

When jumping to a mark, there are two variants:

-   with `'`, the jump is line-wise, to the first non-blank character on the line containing the mark
-   with `` ` ``, the jump is character-wise, to the position of the mark within the line

Example commands:

-   `m{letter}`: create a mark at the current position
-   `'{letter}`: jump to specified mark (first non-whitespace character on line)
-   `` `{letter} ``: jump to specified mark (to column where mark was set)
-   `''`: jump back to the last line jumped from
-   ``` `` ```: jump back to the last position jumped from
-   `` `. ``: jump to position where last change occurred in current buffer
-   `` `[ `` and `` `] ``: jump to beginning/end of last changed or yanked text
-   `` `< `` and `` `> ``: jump to beginning/end of last visual selection
-   `:jump`: show the jump list (places you've jumped to with motion commands, specifically those listed at `:h jump-motions`)
-   `CTRL-o`: move to older position in jump list (mnemonic: "jump out")
-   `CTRL-i`: move to newer position in jump list (mnemonic: "jump in")
-   `:changes`: show the changes list for the current buffer (places you've edited)
-   `g;`: move to older position in change list
-   `g,`: move to newer position in change list

## Search

-   `*`: find word under cursor
-   `#`: find word under cursor (reverse direction)
-   `g*`: like `*`, but also looks for matches which are substrings of other words
-   `g#`: like `#`, but also looks for matches which are substrings of other words
-   `/{pattern}`: find pattern (mnemonic: like [Perl](/wiki/Perl)/[Ruby](/wiki/Ruby)/pager etc regex syntax)
-   `?{pattern}`: find pattern (reverse direction)
-   `n`: repeat last search
-   `N`: repeat last search in opposite direction
-   `gn`: go to next match and select it visually; can be used as a motion as well (ie. `cgn` means "change next match")
-   `ggn`: go to first match in file
-   `Gn`: go to last match in file

## Folding

-   `zr`: decrement `'foldlevel'` A.K.A. "fold less" (mnemonic: reduce)
-   `zm`: increment `'foldlevel'` A.K.A. "fold more" (mnemonic: more)
-   `zR`: decrement `'foldlevel'` to zero A.K.A. "unfold everything" (mnemonic: *reduce*)
-   `zM`: increment `'foldlevel'` to maximum A.K.A&gt; "fold everything" (mnemonic: *more*)
-   `zo`: open current fold
-   `zO`: open current fold recursively
-   `zc`: close current fold
-   `zC`: close current fold recursively
-   `zv`: view cursor line A.K.A. "open just enough folds to make cursor line visible" (mnemonic: *view*/*visible*)
-   `zi`: toggle value of `'foldenable'` (mnemonic: invert)

# Visual mode commands

Enter using `V`:

-   `gq`: reformat (rewrap) selection
-   `o`: jump to opposite end of selection

# Visual (block) mode commands

Enter using `<C-v>`:

-   `$A{string}<Esc>`: append to each line, varying lengths ([details](http://vimdoc.sourceforge.net/htmldoc/visual.html#v_b_A)).

# Command mode commands

-   `:nohlsearch` (`:noh`): remove currently visible search highlighting (doesn't disable highlighting permanently)
-   `:enew` (`:ene`): open a new scratch buffer
-   `:write`: write current buffer to a file
-   `:read`: read into current buffer; eg:
    -   `:read !{shell command}`: insert output of shell command into current buffer at current cursor location
-   `:{range}d`: delete lines in `{range}`
-   `:{range}y`: yank lines in `{range}`
-   `:g/{pattern}/{action}`: perform action on lines matching pattern (eg. `:g/a/d` would delete all lines matching "a")
-   `:v/{pattern}/{action}`: inverse of `:g` (performs action on non-matching lines)

To open the command-line window (showing full command history in a buffer, which you can edit, then use `<CR>` to run a given line's command):

-   `q:`: for commands
-   `q/`: for searches (or `q?`)

Funnily, you can easily open this by mistake by typing `q:` when you mean to type the quite-frequently-used `:q` instead.

## Quickfix/Location list commands

-   `:cclose` (`:ccl`): close quickfix window (`:lclose` and `:lcl` for location list)
-   `:colder` (`:col`): show previous quickfix results (`:lolder` and `:lol` for location list)
-   `:cnewer` (`:cnew`): show subsequent quickfix results (`:lnewer` and `:lnew` for location list)

## Mappings available in command mode

-   `<C-r>{register}`: paste the text from the specified register into the command line (eg. to paste the last-yanked text, do `<C-r>"`)
    -   `<C-r> w`: paste word currently under cursor

# Special mappings

-   `<C-w> <CR>`: open quickfix entry in a horizontal split

