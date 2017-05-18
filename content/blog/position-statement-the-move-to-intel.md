---
title: Position statement: the move to Intel
tags: blog
---

Yesterday Steve Jobs announced that Apple will transition to Intel processors. I'm very excited about the move and I think it will be the best for Apple customers in the long run. In fact, even in the short term I think we'll see some benefits; I just wish they'd done it sooner. I've written [a more personal response](http://www.wincent.com/a/about/wincent/weblog/archives/2005/06/the_move_to_int.php) on my [weblog](http://colaiuta.net/) but here I wanted to make an official statement on the position of Wincent Software with respect to the move.





In short, Wincent fully supports the move to Intel processors. All Wincent [products](http://www.wincent.com/) will be made available as "Universal Binaries" which will run on both the PowerPC and Intel platforms. I've already ordered the Developer Transition Kit so you can rest assured that all Wincent products will be ready and heavily tested by the time the first Intel-based Apple machines are released to the market.

My current understanding of Apple's plans is that the first Intel-based machines will ship with a version of Mac OS X that is based on the current Tiger operating system. Apple did not announce any plans to make available an Intel-compatible version of Jaguar or Panther; they hope that at least 50% of their installed base will be using Tiger by this time next year. This has implications Wincent applications which run on an older version of the OS. My understanding is that only applications that are compiled for Mac OS X 10.4 and up can be compiled as Universal Binaries; it is not yet clear to me whether I will have to prepare a separate (non-universal) version of applications for people who will run older versions of the operating system on PowerPC hardware.

For example, [Synergy](http://synergy.wincent.com/) runs on Mac OS X 10.2 and up. Because it includes a System Preferences pane it cannot use the "Rosetta" translation unit to run on the Intel version of Mac OS X. But because it must run on Jaguar neither can it be compiled as a Universal Binary. I will therefore do one of two things: either raise the minimum operating system requirement to 10.4 (thus allowing me to compile a universal binary) for future releases of the product (older versions would also continue to be made available for those who haven't yet upgraded to Tiger), or distribute a separate (non-universal) version for those that are still using an older version of the operating system. Either way I will be keeping the website up-to-date as more information becomes available, and I plan to ensure that people can continue to run Wincent Software on the platform and Mac OS X version of their choosing.
