---
title: Wincent Login Tool 1.0 and 2.0 released and source code repository now public
tags: releases login.tool open.source blog
cache_breaker: 1
---

Wincent Login Tool is a small [command line](/wiki/command_line) utility for managing login items. It was never really intended to be a separate product, but others started using it because they had seen me using it inside the [Synergy](/wiki/Synergy) installer to update the login items (see "[Install](/wiki/Install)" for more information on the installer itself).

A short while ago one of those users informed me that the tool would only work on Intel machines running [Snow Leopard](/wiki/Snow_Leopard) if the optional [Rosetta](/wiki/Rosetta) environment was installed, and that a [Universal Binary](/wiki/Universal_Binary) was therefore required (see [issue \#1313](/issues/1313) for more info).

Today I'm releasing two versions of the tool: a 1.0 release which is a Universal Binary which can run on versions of [Mac OS X](/wiki/Mac_OS_X) as far back as [Jaguar](/wiki/Jaguar), and a 2.0 release which uses new [APIs](/wiki/APIs) and runtime features and will only run on [Leopard](/wiki/Leopard) and up. At the same time I'm releasing the source code under the [BSD license](/wiki/BSD_license).

This is part of a general move towards [open source](/wiki/open_source) that I've been working on for a long, long time now. If you're interested to hear about my motivation, see the post I published last month, "[Embracing open source](/blog/embracing-open-source)".

# Differences between the two versions

The 1.0 release is the Jaguar Universal Binary. It will run on PowerPC processors right back to [Jaguar](/wiki/Jaguar) and on Intel processors back to [Tiger](/wiki/Tiger).

It runs on versions of [Mac OS X](/wiki/Mac_OS_X) up to [Leopard](/wiki/Leopard). Will probably work on [Snow Leopard](/wiki/Snow_Leopard) too although I can't test that as I don't have access to it.

The 2.0 release is an enhanced version that runs only on [Leopard](/wiki/Leopard) and up.

The main difference between the two versions is that the 1.0 series directly manipulates the `~/Preferences/loginwindow.plist` file in order to manage login items. This was never officially supported by [Apple](/wiki/Apple). And it's not guaranteed to be reliable. For example, at least on Leopard, you can verify for yourself that the file *is* correctly modified, but your changes won't necessarily be reflected in the "Accounts" preference pane immediately, even if you close the System Preferences application and re-open it.

The 2.0 series, on the other hand, uses new [APIs](/wiki/APIs) recently added by Apple (new in Leopard, I think) to manage login items. This is the official, supported way to do things, but it only works on Leopard and up (and in any case I've built the 2.0 series using [Garbage Collection](/wiki/Garbage_Collection) which is only available on Leopard). Switching to this new API was desirable because not only was the method used in 1.0 unsupported, but the *previously* supported method recommended by Apple (talking to the System Events application via [AppleScript](/wiki/AppleScript) or Apple Events) was at best unreliable and at worst horribly broken on Leopard.

# Source code release

I've also made the [Git](/wiki/Git) source code repository open, and the code is available under the [BSD license](/wiki/BSD_license). You can browse the repo here:

-   <http://git.wincent.com/login-tool.git>

Periodically-updated backup mirrors are already in place at [GitHub](/wiki/GitHub) and [Gitorous](/wiki/Gitorous):

-   <http://github.com/wincent/login-tool/>
-   <http://gitorious.org/login-tool>

# Binary downloads

There are no official product pages yet, and perhaps there never will be, but pre-built executables have been placed at the following locations:

-   <http://wincent.com/a/products/login-tool/download/login-tool-1.0.zip>
-   <http://wincent.com/a/products/login-tool/download/login-tool-2.0.zip>
