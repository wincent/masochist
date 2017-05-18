---
title: Wincent Strings Util
tags: blog
---

Today I'm announcing a new product that may be of interest to developers, [Wincent Strings Utility](http://www.wincent.com/a/products/wincent-strings-util/), which is a derivative of Omni Development's stringsUtil. This is a tool that I have been using in-house for some time as part of my localization process, but I've decided to release it publicly now in preparation for some things to come.

### The things to come...

I have been thinking about releasing some software under the GPL and in order to do so I have been moving some scripts and tools that I use in my build chain into a special "buildtools" package. There's not much point in releasing GPLed software if you don't also provide the tools to conveniently build it; hence buildtools. The idea is that the buildtools package will also be released under the GPL.

Now, Omni's Source Code is not licensed under the GPL so I cannot roll my derived work into buildtools, but I do have to make the strings utility available in *some* way or another. Their license does not allow the distribution of modified source code, but they *do* allow modified binaries to be distributed provided that you change their name (which is why I named the executable `wincent-strings-util`), and they also allow you to distribute patches, so I've done that too.
