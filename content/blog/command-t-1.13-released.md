---
title: Command-T 1.13 released
tags: releases command.t
---

I just released [Command-T](/wiki/Command-T) version 1.13. It contains some fixes:

-   avoid "W10: Warning: Changing a readonly file" when starting Vim in read-only mode (ie. as `view` or with the `-R` option)
-   fix infinite loop on `<Tab>` (regression introduced in 1.12)

In addition, I've made some small tweaks to the install process to hopefully make mis-installation errors easier to troubleshoot.

Depending on how you installed it\[\*\], upgrading could be a quick `git pull` away...

\[\*\]: There are about half a dozen Vim plug-in managers vying for supremacy. If you're using one of them, hopefully you already know how to install or upgrade plugins.
