---
title: Highlighting overlength lines in Vim
tags: vim
---

After defining a couple of colors in my [Vim](/wiki/Vim) color scheme:

    hi LineProximity guibg=#DDDDB6
    hi LineOverflow guibg=#AAAAB6

And adding a couple lines to my `~/.vimrc`:

    let w:m1=matchadd('LineProximity', '\%<81v.\%>75v', -1)
    let w:m2=matchadd('LineOverflow', '\%>80v.\+', -1)

I now have some special highlighting that shows up when lines in my source code start getting near the 80-column limit (shown in light gray), and actually surpass it (shown in darker gray):

![vim-overlength.png](/system/images/vim-overlength.png)

Not quite as pretty as a vertical line serving as a visual guide (like you'd see in [Xcode](/wiki/Xcode), [TextMate](/wiki/TextMate) or [BBEdit](/wiki/BBEdit)), but it has the advantage that it will work nicely even if you have to reduce your window size and your text starts wrapping.

# Making the changes stick

In reality those `let` lines in the config only apply to the first window that appears when you launch [Vim](/wiki/Vim). To make the settings "stick" for all windows you need to [detect window creation](http://vim.wikia.com/wiki/Detect_window_creation_with_WinEnter) and apply the settings for each new window. This is done with the following snippet, as [explained](http://vim.wikia.com/wiki/Detect_window_creation_with_WinEnter) on the Vim wiki:

    autocmd VimEnter * autocmd WinEnter * let w:created=1
    autocmd VimEnter * let w:created=1

    autocmd WinEnter * if !exists('w:created') | let w:m1=matchadd('LineProximity', '\%<81v.\%>75v', -1) | endif
    autocmd WinEnter * if !exists('w:created') | let w:m2=matchadd('LineOverflow', '\%>80v.\+', -1) | endif
