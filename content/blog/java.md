---
title: Java
tags: blog
---

Am I the only one who's not [excited about JRuby](http://www.rubyinside.com/jruby-11-beta-1-released-faster-than-the-regular-ruby-interpreter-642.html)? [Ruby](http://www.wincent.com/knowledge-base/Ruby) *is* slow but I don't think the right solution is translating it into [Java](http://www.wincent.com/knowledge-base/Java). Don't people find [Rails](http://www.wincent.com/knowledge-base/Rails) apps hard enough to deploy already? They want to add yet another incredibly bloated and complex dependency?

I looked into learning Java many years ago when it looked like it was going to be the next big thing. I developed an immediate distate for its needlessly prolix syntax and tiresomely lengthy class and method naming conventions. But it's not just the low level aesthetics which bug me; it's the high-level obsession with "[design patterns](http://en.wikipedia.org/wiki/Design_Patterns)" which starts to really grate on my nerves. While no one would argue that a modest tool kit of "patterns" aren't helpful ([Cocoa](http://www.wincent.com/knowledge-base/Cocoa) uses [MVC](http://www.wincent.com/knowledge-base/MVC), delegate, singleton and observer patterns highly effectively, for instance), I find this all-encompassing fascination with myriad over-theorized patterns a silly distraction.

A shame because Java apparently had a lot of things going for it, even a cool name.

But in my experience whenever I've had to get my hands dirty with Java as a developer it's been a thoroughly disagreeable experience. Even in the upgrade to [Leopard](http://www.wincent.com/knowledge-base/Leopard) I've already run into at least one very ugly Java-related problem (this one relating to Ant; someone's plan to make Makefiles even worse by turning them into hideous, convoluted XML). And in my end-user (non-developer) brushes with Java I've found the applications to be enormous resource hogs, bloated, and ugly to boot. There are good Java apps out there that work very well (Azureus, for example) but a native implementation would literally blow it away (I have a copy running right now which has nearly *70* threads running when basically idling).

The right solution is making Ruby itself faster, and that's already being done.
