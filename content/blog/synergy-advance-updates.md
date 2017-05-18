---
title: Synergy Advance updates
tags: blog
---

The next Synergy Advance update will be coming out soon. Rather than releasing 0.5 I'm going to jump straight ahead to 0.5.1b because I want to include some minor new features.

#### Dock options

As [explained here](http://www.wincent.com/a/support/forums/ubbthreads.php?ubb=showflat&Number=1219&page=1#Post1221), there are a number of reasons why the latest Synergy Advance release (0.5b) no longer has the ability to hide the Dock icon (in summary: this has always been a bit hackish in previous versions of the operating system, but when Leopard comes out it is going to be downright broken).

It will still be possible to manually alter the application's `Info.plist` file if you really want to hide the Dock icon, but I'll no longer be providing a user interface to do this from within the application. In order to make this change easier to live with I have been adding ever more features to the Dock icon, many of which are visible in the 0.5b release. Today I've been working on adding a user-customizable Dock menu; the intention is that the Dock icon becomes so useful that you won't want to hide it:

![](/system/images/legacy/dock-options.png)

#### More hot keys

People have been [requesting more ways](http://www.wincent.com/a/support/bugs/show_bug.cgi?id=240) of setting half-star ratings. Today I've implemented additional hot keys and a couple of menu-based ways of applying half-star ratings are well on the way:

![](/system/images/legacy/more-hot-keys.png)
