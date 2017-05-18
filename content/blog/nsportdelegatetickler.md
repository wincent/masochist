---
title: NSPortDelegateTickler
tags: blog
---

Well I was very happy with the [new support for a particular threading idiom](http://www.wincent.com/a/about/wincent/weblog/archives/2006/03/threading_nicet.php) that I'd developed for [Synergy Advance](http://synergyadvance.com/) and it seemed to work very nicely.

But not *all* was well.

I was finding that if I left Synergy Advance running overnight I would come back and find that it [had crashed](http://www.wincent.com/a/support/bugs/show_bug.cgi?id=388) in the undocumented and tauntingly named `__NSPortDelegateTickler` method deep down in the bowels of some Apple framework. Crashing is never fun, but it's worse when the crash is intermittent, and worse still when the offending method is ignominiously named "NSSomething*Tickler*"...





So the stack traces show this occurring deep down in Apple code. Does this mean it's an Apple bug? Not likely... As [Wil Shipley](http://wilshipley.com/blog/) [writes](http://wilshipley.com/blog/2006/03/pimp-my-code-part-8-mary-mary-why-you.html):

> Now, let me state something unequivocally: 98% of the time when you think you've found a bug that is not your fault, it really is your fault. The other 2% of the time... well, it's probably your fault as well.

I *am* using `NSPort` objects in my application, and the crashes *are* happening in `__NSPortDelegateTickler` so the odds are something like this:

-   There's a 98% chance that this is *not* a bug in Apple's code, and a 2% chance that it's probably not a bug in Apple's code... right...
-   Perhaps there's a bug in my code (specifically narrowed down to the very small number of lines of code in my program that use `NSPort`); seems unlikely given that the program can run for hours on end without crashing (ie. the code "works"; and it can do exactly what you ask it to do thousands of times without a problem) and I had examined those few lines of code *extensively*...
-   Most likely of all, there's something about the way `NSPort` and friends work that I either misunderstand or that is inadequately documented.

In my experience I've been bitten by Apple documentation flaws many, many more times that I've been bitten by actual Apple bugs. So with this in mind I set out about trying to reproduce this problem in the debugger and track down the cause.

Now there were a number of reasons why this one was fiendishly difficult to track down:

1.  It was intermittent; the program could run for hours and hours on end without hitting the bug despite heavy use.
2.  It was occurring entirely in Apple code, so I could not backtrace it to parts of my own code causing the problem; in other words, if my code was causing the problem it was causing it indirectly or peripherally, with the cause of the problem separated from the actual site of the crash both in time (an unknown period) and space (across threads).
3.  The crashes were all occurring in `__NSPortDelegateTickler` but they looked different. Sometimes it was a `KERN_INVALID_ADDRESS`, at others a `KERN_PROTECTION_FAILURE`; there were a few different possibilities for the final stack frames of the crash logs; the crash only seemed to happen on PowerPC processors, but a similar crash ([bug \#397](http://www.wincent.com/a/support/bugs/show_bug.cgi?id=397)) was happening on the Intel platform and it looked suspiciously related (specifically, the crash was occurring in `CFRunLoopDoObservers`, never getting as far as `__NSPortDelegateTickler`, but `CFRunLoopDoObservers` always appeared in the stack traces for the PowerPC crashes just before the call to `__NSPortDelegateTickler`).
4.  I have no idea what `__NSPortDelegateTickler` does; it is private, undocumented API. Do a Google search for it and you'll find absolutely *nothing* useful. What the hell is a *tickler* anyway?

The first (and only) good news that I received was that if I set a breakpoint on `__NSPortDelegateTickler` and got it to print a hit-count and auto-continue then the crash was highly reproducible. Instead of taking hours to crash it would most often crash within seconds. So I suspect there was something timing related. The extra time required to hit the breakpoint, log the hit-count and continue was enough to trigger whatever it was that was causing the crash.

I started analyzing, looking for patterns. What user interface actions could be used to trigger the bug? What preference settings? Did the crashes have something to do with threads? With Apple Events? Did they have something to do with hot key events? Bit by bit I started to establish patterns, correlations, form suspicions about possible causes and effects, and rule out unrelated factors.

Once I knew I could reproduce it, I knew I'd be able to fix the bug, no matter how painful that fix might end up being. Best of all, once I started to narrow down my range of suspicions to a single source (specifically, my `NSThread` category) I was able to create a simple Xcode project containing a minimal test case, and *boom*, I was able to reproduce the crash in a project containing *only* the category under suspicion and a simple controller class that I used to fire a timer 10 times a second to invoke the offending method and provoke a crash.

Yet still, after several days of hunting I was unable to get rid of the crashes. It seemed that the crashes were being caused by the Apple frameworks trying to manipulate dead mach ports. I was able to avoid the crashes, but at the cost of leaking mach ports. Leaking mach ports is bad because if your program runs for a long enough time you'll eventually use up so many ports that the system will slow to a crawl. In a worst case scenario the machine will become all but unusable until your application is quit or dies.

So, eliminating the crashes at the cost of leaking mach ports was not an acceptable workaround and it still didn't help me to understand the real cause of the crashes. Why were the crashes occurring only sporadically? What was the real trigger?

I registered for `NSConnectionDidDieNotifications` and `NSPortDidBecomeInvalidNotifications` and printed stack backtraces whenever they were received in an effort to find out where, when, and why connections and ports in my application were dying. I tried looking at Apple sample code (such as the [Trival Threads](http://developer.apple.com/samplecode/TrivialThreads/TrivialThreads.html) and [Simple Threads](http://developer.apple.com/samplecode/SimpleThreads/SimpleThreads.html) samples) to see why and where you should (or should not) call the `invalidate` methods.

To cut a long story short, after several days of trying to hunt this down I formed the suspicion that my invalidation was occurring on the wrong threads. None of this is particularly well documented, but it seems that the following is true:

-   In a typical inter-thread communication case you'll have one `NSConnection` in the calling thread, and another in the secondary thread; you'll also have two `NSPort` objects that are actually shared by the connections.
-   If you never call `invalidate` on either of the connections or either of the ports, you may still see invalidation notifications generated by the behaviour of the frameworks (for example, invalidating when an object is released upon the destruction of an autorelease pool.
-   If you don't call `invalidate` on the ports then you'll leak mach ports (bad).
-   If you *do* call `invalidate` on the ports then you might crash randomly and extremely intermittently.
-   Calling `invalidate` on the connections has little effect on the crashes or on the mach port leakage (or non-leakage), and may be unnecessary anyway depending on the already-mentioned behaviour of the frameworks with respect to autorelease pools.
-   The docs say very little about what calling `invalidate` on a port actually does; they merely say that it gets "marked as invalid", but what does "marked as invalid" mean? It seems that marking ports (in reality, mach ports) as invalid involves adjusting their right counts and stops them from leaking.
-   Order seems to matter: marking a connection as invalid doesn't necessarily invalidate its ports, but marking a connection's ports as invalid may invalidate the connection.
-   That docs do say a little more about what marking an connection as invalid actually does; namely that it "withdraws" the ports that the connection has registered with the current run loop.

That last bit about the "current run loop" got me thinking, because the docs also say, elsewhere, that "\[t\]he NSRunLoop class is generally not considered to be thread-safe and its methods should only be called within the context of the current thread. You should never try to call the methods of an NSRunLoop object running in a different thread, as doing so might cause unexpected results."

This meant that invalidating a connection was a potentially dangerous operation, if done from the wrong thread. Now, my testing showed that invalidating the connection wasn't strictly necessary in order to avoid mach port leakage, but the documentation suggested that if the connection was being automatically registered with the current run loop at initialization then it would probably be a good idea to invalidate it later on to remove it from that run loop. And given the threading issues I should probably take care to ensure that that invalidation took place on the same thread in which the connection was first created.

So I made changes to the code to *guarantee* that that would always happen rather than leaving it in the lap of the gods. But I was still left with the issue to decide what to do with my port objects. In the end, it seems that the following method both avoids crashes and doesn't suffer from any mach port leakage problems:

1.  Create your connection and ports in thread 1.
2.  Create corresponding connection in thread 2.
3.  Dispose of the connection in thread 2 (invalidate it) to ensure that the ports get removed from its run loop; in reality you don't have to do this explicitly because when the thread terminates its autorelease pool should free the connection which in turn will invalidate itself automatically.
4.  Dispose of the connection in thread 1 (invalidate it) to ensure that the ports get removed from its run loop (note that you can't actually control the order of these two steps due to the concurrent execution of the threads).
5.  Only after the disposal of the connection should you (must you) invalidate the ports, and it seems safest to do this on the thread that originally created them (not only because this was where they began but also because it's in that thread in which you can know once you're finally "done with" the connection; that is, once you've receive your message(s) from the second thread. The other option is to let each thread dispose of its own receive port (or its own send port); for the time being I've chosen the former.
6.  You must dipose of *both* ports (invalidating them, that is); or you'll leak ports.
7.  You'll need to take care of concurrency issues if you share the responsibility for invalidation across two threads.

Following these rules I've found that the crashes have indeed gone away. Before making these changes I could precipitate a crash — often within seconds but never more than a few minutes — by setting a breakpoint on `__NSPortDelegateTickler`, thus forcing the timing issue and exposing the crash. After making these changes I can run Synergy Advance for extended periods, and even with the breakpoint set and clocking up literally thousands of hits I have yet to see a recurrence of the dreaded tickler crash.
