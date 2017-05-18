---
title: Threading niceties for Synergy Advance
tags: blog
---

### Existing paradigms

I've spent a day now coming up with a neat way of implementing a particular inter-thread communication paradigm. The most common thread paradigm is the following:

> The main thread spawns a worker thread to handle long-running processing tasks in the background. While the worker thread is labouring away the main thread keeps the user interface responsive for the user. When the worker thread is done it notifies the main thread.

A popular variation on this paradigm is this one:

> The main thread again employs a worker thread, but this time the main thread has the ability to send messages to the worker thread while the latter continues to run (for example, a "cancel" message could be used to tell the worker thread to stop processing and perform cleanup).

Compare these with the single threaded-paradigm:

> The main thread handles all the work itself; if a task is long running then the user interface may become unresponsive until the task is completed.

This last paradigm is probably the fastest because it avoids thread-associated overheads. It is also the easiest to implement because it does not require the developer to worry about resource contention between threads, nor is there any need to implement methods to handle callback notifications.

Ironically this paradigm (the fastest) may *seem* to be the slowest because of the UI responsiveness issues. If the user sees the "spinning beachball of death" then he or she may think the program has hung (entered an infinite loop) even though the program is working away. For this reason "beachballs" should be avoided at all costs, and that's why you sometimes have to go down a multi-threaded path even though you might prefer not to.





### A new paradigm

I began to wonder if there was a way of blending these paradigms into something new, something that would be better for the particular set of problems I am trying to solve in my work on [Synergy Advance](http://synergyadvance.com/). I don't claim to have invented this design pattern but it's not something I've seen before. The basic idea can be broken up as follows:

> The main thread spawns a worker thread to handle potentially long-running tasks.

So, the beachball issue is taken care of. But let's add a nuance:

> The main thread will block and wait for the worker thread to finish its task, but it will only block for a short period (say, one or two seconds) so as to avoid the appearance of the dreaded beachball.

What this means is that we still maintain the appearance of a responsive UI (no beachballs) but we gain some of the simplicity of what we had in the single-threaded approach (a linear flow of execution).

> In the case that the worker thread takes too long, the main thread unblocks. When the worker thread is done it will notify the main thread.

So now we are back in the world of multi-threaded programming again. The main thread will maintain UI responsiveness while the worker thread labours in the background. The main thread will also receive notification once the worker thread is done.

This is the method that I've come up with to implement this pattern:

    + (BOOL)detatchNewThreadInvocation:(NSInvocation *)invocation
                                  wait:(NSTimeInterval)interval
                              callback:(id)target
                              selector:(SEL)selector

Observations:

-   It's provided in a category on `NSThread` for ease of use.
-   The pattern should be familiar to anyone who has used Cocoa's `detachNewThreadSelector:toTarget:withObject:`.
-   I use `NSInvocation` as it allows me to neatly encapsulate the target, selector, arguments and return value.
-   If `interval` is zero the calling thread won't wait/block at all.
-   If `target` is zero then no callback will take place.
-   Returns YES if the thread returned before the time limit was reached (in which case the caller knows there's no need to expect a callback).
-   Returns NO if the thread did not return before the time limit (in which case the caller knows whether to expect a callback).
-   The callback method should accept a single argument of type `NSInvocation`; it will be passed the original invocation.
-   The method can be called from any thread, not just the main thread.
-   No ugly kludges or inefficient techniques required (polling, spinlocks).

All in all I am fairly happy with the design and I think it will help me to make some very nice code. Basically, this is ideal for Apple Event communication between Synergy Advance and iTunes; most of the time iTunes responds to Apple Events almost immediately, but at other times (for example, when you have the preferences window open) it will delay for extremely long periods. This method allows me to use a simple communications model most of the time but fall back to the more complicated (multi-threaded/callback) model when required.

My next step is to serialize this (there's no good argument for having multiple threads communicating with iTunes at once; it will be much better to have a single worker thread handle all communication using a one-at-a-time queuing model) but it should be fairly easy now that I've written the `WOQueue` class.
