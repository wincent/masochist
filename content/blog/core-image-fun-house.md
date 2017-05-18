---
title: Core Image Fun House
tags: blog
---

With every major release of Mac OS X Apple delivers some delicious new APIs to developers. I've missed out on these a lot in the past because I've wanted my products to support older versions of Mac OS X. It's true that you can employ a number of tricks like weak linking to make your software run on multiple OS versions, but the complexity of your code increases as does the difficulty of adequately testing it. [Synergy](http://synergy.wincent.com/), for example, began development on Jaguar back in 2002 and it doesn't make use of any post-10.2 API.

Products that I released later on, such as [Synergy Advance](http://synergyadvance.com/) take advantage of newer APIs found in Panther (Cocoa Bindings, for example). But I've still tended to keep things at the level of the "lowest common denominator", and when Tiger came out I still tried to use only APIs that were available on Panther as well.

But it's a game I don't want to play any more. Avoiding the newer APIs is literally holding these products back. Time to make the jump forwards. The update to Synergy Advance that I am currently working on makes use of Tiger-only APIs and I've bumped the version requirement up from 10.3.9 to 10.4. In 2007 I plan to switch to pretty much Leopard-only development.

In recent months I've been making new plug-ins for Synergy Advance and some of these used 10.4-only features like `NSDatePicker` and `NSTreeController` (which *so* should have been rolled out with the other Cocoa Bindings stuff in 10.3): but being plug-ins it didn't really matter if they broke compatibility; they could just refuse to load on older versions of the operating system.

The first 10.4-only API to sneak into the core application was the Apple System Log facility (see `man asl`). In fact, I started to make some changes and it was only after committing them that I realized that they depended on Tiger. Now ASL is not a very glamorous API, but it is a useful one, and it has opened the flood gates to using Tiger APIs.

I've been doing a huge amount of restructuring of the Dock icon code in preparation for Leopard and so I thought, why not learn Core Image while I'm at it? On Sunday I [committed](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2006/12/wocommon_r243_8_items_changed.php) my first Core Image code to the repository.

Once that little experiment proved successful I set about replacing all of the Cocoa compositing code with Core Image. Given that Core Image is more powerful I took the opportunity to not just translate the code to the new API but to improve the image quality as well; for example, instead of just resizing I now resize and sharpen. I just [committed](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2006/12/synergy_advance_r377_16_items.php) the initial results. I was pleasantly surprised that after those massive, disruptive, non-incremental changes, the code compiled and worked pretty much as I would have expected to on the first try.

And it's quite fun to use the Core Image API. The code tends to be more verbose than the old Cocoa version because there is a fair bit of set-up and tear-down to be done with the filters. But the design itself feels very elegant and very Object-Oriented. The filters are like little black boxes: you plug-in the inputs, chain as many filters as you want together, and then ask for the result. One of the reasons it feels so elegant is that the use of Key-Value Coding gives the API a very consistent feel. The other is that the whole thing is extremely efficient just by design: even though you spend time setting up and tearing down the filters, the actually expensive part of the whole operation (the rendering) is deferred until the time to actually draw the image arrives.

So here are some unscientific demonstration images; first of all we have a picture of the Dock icon as it was about one week ago. You can see that it's a little different than the icon in the currently-shipping preview of Synergy Advance because at this point, prior to embarking on the Core Image rewrite, I had already started to add user preferences for altering the opacity of the cover art badge and the colors of the various elements in the icon:

![](/system/images/legacy/SADockBefore.png)

Here is a similar image made after the Core Image rewrite; like I said not very scientific but you may be able to detect the improved image quality that results from the superior Core Image scaling and the additional sharpening step.

![](/system/images/legacy/SADockAfter.png)

Performance is roughly equivalent despite the additional processing. In doing the rewrite I also took the opportunity to refactor the code, splitting common code off into methods and throwing out a huge bunch of fairly verbose and complicated caching and optimizations that I had made to the old Cocoa version in an effort to get it as fast as possible. The new code is completely unoptimized yet Core Image still manages to maintain performance levels. The refactoring should enable me to put a preview icon right in the preferences window at full size so that users can get a better idea of the effects of their customizations; this is important because there are a large number of new settings.

Of course, it's not perfect. As shown in the image below the code for handling cover art badges doesn't yet handle non-square album art. Should be quick enough to fix.

![](/system/images/legacy/SADockBug.png)
