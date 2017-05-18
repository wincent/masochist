---
title: Universal Binaries for Intel-based Macs
tags: blog
---

I've already received mail asking when [Synergy](http://www.wincent.com/a/products/synergy-classic/) will be made available as a Universal Binary that will run natively on both Intel-based and PowerPC-based Macs.

The answer is that it already is a Universal Binary (see the [change log](http://www.wincent.com/a/products/synergy-classic/history/)). You can download the latest version [from here](http://www.wincent.com/a/products/synergy-classic/download/).

Likewise, [Synergy Advance](http://www.wincent.com/a/products/synergy-advance/) and [Install](http://www.wincent.com/a/products/install/) are also already Universal Binaries. Current testing indicates that [all other Wincent products](http://www.wincent.com/a/products/) work fine under the Rosetta compatibility layer; [the plan](http://www.wincent.com/a/news/archives/2005/06/position_statem.php) is to make sure all of them eventually become Universal Binaries.

I have not yet been able to make [WinHex](http://www.wincent.com/a/products/winhex/) into a Universal Binary because of issues compiling the third-party GMP library with GCC 4.0; unfortunately GMP will not compile with GCC 4.0, but without GCC 4.0 I cannot make a Universal Binary. I am hoping that updates to GCC or GMP itself will correct the incompatibilities. [WinSwitch](http://www.wincent.com/a/products/winswitch/) should be making its way over to Universal Binary in the near future.
