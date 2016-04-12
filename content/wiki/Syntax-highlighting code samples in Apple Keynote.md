---
tags: keynote vim
---

The "easiest" way seems to be:

1.  Turn off line-numbering in Vim (note: MacVim; terminal Vim won't preserve the color information).
2.  Run `:TOhtml`.
3.  Write output to file: `:saveas! /tmp/code.html`.
4.  Open file in browser: `:!open %<tab>`.
5.  Copy text from browser into TextEdit.app (sigh).
6.  Copy text from TextEdit.app into Keynote.app.

Note that you'll need to edit your master slides to match the background color of your Vim color scheme.

Here is an example of a nasty function which can do at least the first few steps above:

```` " Open a syntax-colored version of the current file in Chrome, " suitable for copy-pasting into a presentation. function! functions\#keynote() abort

     if has('gui')
       setlocal nonumber
       setlocal norelativenumber
       TOhtml
       let l:tempfile=system('mktemp')
       execute 'saveas! ' . l:tempfile
       execute '!open -b com.google.Chrome ' . l:tempfile
       quit
     else
       echoerr 'functions#keynote() should be run from within a GUI instance of Vim'
     endif

endfunction ````
