---
title: Frustration
tags: blog
---

Have just spent about six hours trying to track down a bug in my code that was causing a crash in [Synergy Advance](http://synergyadvance.com/). Turns out that it wasn't a bug in my code at all, rather it was a misunderstanding of the way `NSConnection` works. I was using an `NSConnection` to communicate between threads, passing a pointer to an `NSInvocation` from one thread to another. The receiving thread was testing for pointer equality prompting my assertion to fail. The reason I spent so much time before finding the cause is that I assumed it was an error in my code; it wasn't until the very end that I decided to test my assumptions about the way Cocoa works...

It turns out that because `NSConnection` uses `NSDistantObject`, a subclass of `NSProxy`, to do the communication it wasn't just passing my pointer; it was actually creating a new `NSInvocation` on the fly, and passing a pointer to that object! I guess I should have known this if I'd've had more experience with distributed objects. A painful and frustrating lesson, nonetheless. I guess I'm a little surprised that it works this way; I can easily handle thread-safe access to the object, all I want to do is perform a pointer comparison!

So the "solution" is to pass something else. My first attempt was to pass an `NSValue` object containing the pointer, but that causes causes an `NSInvalidArgumentException` (cannot encode (void \*) value: &lt;170ff900 &gt;). Seems like the way to go will be to use `NSNumber` to represent the pointer... Unbelievable.

Of course, once you've learned (the hard way, using the debugger) that this is the way `NSConnection` works, you quickly find some explanation in the documentation. In the description for the `rootProxy` method of `NSConnection` you click on the link to `NSDistantObject`, and from there to the Distributed Objects manual, where you find a heading, "[Making Substitutions During Message Encoding](http://gemma.apple.com/documentation/Cocoa/Conceptual/DistrObjects/Tasks/substitutions.html)", which tells all.

At the end of your journey you find good old `NSPortCoder` and see that it has two methods, `isByCopy` and `isByRef` which report whether the coder will encode by copying (the behaviour you're trying to avoid) or by reference (but is this the desired behavior?; I suspect that what actually gets passed is an `NSDistantObject` proxy and not the real `NSInvocation`). But you've now got your working (but ugly) `NSNumber` workaround, so the question becomes, how much work will it take to force your `NSConnection` to pass the invocation as an unmodified pointer instead of by copying, and will it be worth it? Will you have to subclass `NSConnection`? Or `NSInvocation`? Or `NSPortCoder`? Might you even have to subclass `NSDistantObject`?

I'm going to explore these questions and see what I find out.
