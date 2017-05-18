---
title: Terminus 0.1 released
tags: releases vim terminus blog
---

[Terminus](https://github.com/wincent/terminus) is another small [Vim](/wiki/Vim) plug-in that I just extracted from [my dotfiles](https://github.com/wincent/wincent).

It enhances Vim's integration with the terminal in a few ways:

-   Sets up cursor shape changes on entering insert mode.
-   Sets up `FocusGained`/`FocusLost` events, `:checktime`, and `'autoread'`, which means that Vim will automatically pick up changes to files made by other processes.
-   Sets up improved mouse support.
-   Sets up Bracketed Paste support, for easy pasting (no more `'paste'` mode).
