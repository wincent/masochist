---
title: Coding notes: optimization and plug-ins
tags: blog
---

Donald Knuth famously [said](http://en.wikiquote.org/wiki/Donald_Knuth) "premature optimization is the root of all evil". You can waste a lot of time optimizing code for negligible benefit. You can also waste your resources by optimizing the wrong thing; you generally can't be sure of where the bottlenecks will be until the entire project is done or at least near to completion.

Computers are getting faster and faster all the time. Often when I have to make a choice between fast code and readable code I choose the latter. Ideally you'll write code that is both fast *and* readable but other times you are forced to make a choice. Customers care most about features and products that actually make it out the door; write maintainable code and you'll be able to produce more of it, and your customers will be happier. If you decide that it's worth sacrificing 1% of speed in order to get 50% more features then most of your users will agree with you.

This doesn't mean you can throw efficiency concerns out the window. When you see an opportunity to make something faster without losing maintainability you should take it, especially if it's an easy change to make. It's good to get in the habit of writing code that executes quickly.

Yesterday I had a situation where I did have to do some optimization. [Synergy Advance](http://www.wincent.com/a/products/synergy-advance/) has the ability to do some fancy stuff with the Dock icon. But I found that compositing a non-trival amount of stuff multiple times per second was using over 40% of one CPU. Ouch. Turn off the bells and whistles and CPU usage dropped back down below 1% again. But I like bells and whistles. After optimization it was using less than 1% of one CPU even with everything turned on. A case of optimization the even Knuth would agree with.

#### Plug-ins

From the very beginning I've wanted Synergy Advance to take advantage of plug-ins so that it could be flexibly extended in a way that the original Synergy cannot. Everything is highly modular. Even where stuff is compiled into the main, monolithic executable it still has a relatively independent existence within the class hierarchy (which means that I can easily move stuff from the main executable into plug-ins or frameworks). There are five base frameworks that I've created and which I also use in other products. I've split off a large part of the functionality of Synergy Advance into a special framework of its own so that plug-ins can link against it and get that functionality for free. All of the preference panes are completely separate modules (with separate Xcode project files) which build independently and which encapsulate a lot of the voluminous "glue code" that comes with complicated user interfaces.

Today I thought I would eat my own dog food as far as plug-ins goes. The iTunes communication engine, which was already neatly tucked away under an abstraction layer, was recently moved into the SynergyAdvance.framework. Today I went a step further and broke it out into a plug-in of its own. I'm about to do the same with the iChat engine. Basically the groundwork was already laid from a design point of view; I just had to do the physical redistribution of the code and massage it to make it compile and run correctly at its new location. The potential to use Synergy Advance with other players and other instant messaging clients is most definitely open.

The only bad choice I made at the start and which I am only just now coming to regret is that the word "iTunes" is hardcoded in the strings files at a lot of places. Changing that is going to be a time consuming and monotonous chore, but one that's probably better done sooner rather than later...
