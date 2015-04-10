---
title: Command-T 1.12 released
tags: releases command.t
---

I just released [Command-T](/wiki/Command-T) version 1.12. It contains some fixes and minor feature additions. Quoting from [the docs](https://github.com/wincent/command-t/blob/master/doc/command-t.txt):

-   add `:CommandTLoad` command
-   fix rare failure to restore cursor color after closing Command-T (patch from Vlad Seghete)
-   doc fixes and updates (patches from Daniel Hahler and Nicholas T.)
-   make it possible to force reloading of the plug-in (patch from Daniel Hahler)
-   add `g:CommandTEncoding` option, to work around rare encoding compatibility issues
-   fix error restoring cursor highlights involving some configurations (patch from Daniel Hahler)
-   skip set-up of `<Esc>` key mapping on rxvt terminals (patch from Daniel Hahler)
-   add `g:CommandTGitScanSubmodules` option, which can be used to recursively scan submodules when the "git" file scanner is used (patch from Ben Boeckel)
-   fix for not falling back to "find"-based scanner when a Watchman-related error occurs

Depending on how you installed it\[\*\], upgrading could be a quick `git pull` away...

\[\*\]: There are about half a dozen Vim plug-in managers vying for supremacy. If you're using one of them, hopefully you already know how to install or upgrade plugins.
