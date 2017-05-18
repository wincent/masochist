---
title: Whittling away the controller
tags: blog
---

Since [my post the other day](http://www.wincent.com/a/about/wincent/weblog/archives/2005/07/synergy_advance_1.php) about my monstrously large main controller class I've been working hard on adding new features to [Synergy Advance](http://www.wincent.com/a/products/synergy-advance/).

But working on a large body of code is like moulding pottery from clay: even as you go along adding new bits you continue to work with the already-existing clay, moulding it, reforming it, smoothing it and so on. In programming parlance this translates to a lot of refactoring.

I've been quite satisfied to see that even though I've been *adding* new features to the software the controller has been getting *smaller* as I go along. The truth is that Xcode 2.1 is pretty zippy and doesn't have too much trouble even with a 6,000 line source file, but there *is* a noticeable lag when it comes to saving, and saving is something I do often (hitting Command-S at the end of every line is a reflex for me, bred in by years of working with unreliable computers and software!).

Some of the refactoring is just moving source to different places (to where it should be) and some of it is folding oft-used functionality into somewhere that it can be re-used with minimal code duplication (real refactoring), but either way the end result is a more manageable and maintainable codebase.

Today I've added in a bunch of Growl functionality and Cocoa Bindings have made writing the preferences code much simpler. And while doing this I've spotted some nice fault lines where I can logically split functionality from the controller off into a category. I've also spotted a way in which I can move a huge number of instance variables (which are just used to cache frequently accessed information) out of the controller class and into a proxy class (not an NSProxy but a proxy in layperson's sense) in the SynergyAdvance.framework. Straight away I'll have hacked 2,000 lines off of the controller (all those accessor methods) and put them somewhere where they won't get in the way, and I'll have the benefit of moving some more useful functionality into the framework where it can be used by plug-ins. Basically I've got this abstraction layer between the Synergy Advance core and iTunes, so that Synergy Advance doesn't really need to know that it's talking to iTunes, only that it's talking to "a player"; I'm now formally separating that abstraction layer out into a different class and sticking it in the framework. And by ejecting that cached data from the controller class I'm keeping things truer to the hallowed "MVC" paradigm.
