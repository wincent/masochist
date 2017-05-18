---
title: Double-checked locking and memory barriers, take two
tags: blog
---

A while ago [I wrote about double-checked locking and memory barriers](http://www.wincent.com/a/knowledge-base/archives/2006/01/locking_doublec.php). There are plenty of articles about this on the net. They generally show three examples.





#### No locking

    if (!condition)
    {
        do_something();
        condition = YES;
    }

#### Slow locking

    @synchronized (object)
    {
        if (!condition)
        {
            do_something();
            condition = YES;
        }
    }

#### Double-checked locking

    if (!condition)
    {
        @synchronized (object)
        {
            if (!condition)
            {
                do_something();
                condition = YES;
            }
        }
    }

These articles fall into two categories: those that say double-checked locking is the bomb, and those that point out that double-checked locking is an "anti-pattern" and doesn't actually work. The articles in this latter category often go on to explain how the use of memory barriers can cure the brokenness of the double-checked locking "anti-pattern".

I was thinking (yet again) about all this and I suddenly realized why double-checked locking appears so attractive, and why it can be so hard to accept that it doesn't work. The problem is one of intuition. Look at the last two code examples again. The second one is identical to the first, except that it encloses everything in an *additional* check. How on earth could something that imposes an additional safety check actually end up being less safe? That's the point where your intuition may become your enemy.

Put simply, the reason why the third example is dangerous is that the first check of the condition *is not synchronized* with the actual setting of the condition. The fact that there's a second check that *is* synchronized doesn't matter at all because that unprotected first check is enough to send your program into the danger zone.

The peril is well-explained in many places ([here, for example](http://www.oaklib.org/docs/oak/singleton.html)) so I will only briefly state the problem here.

Pretty much all new Macs are dual-core now. That means that two threads could be running on two cores, each operating with its own local copy of the `condition` variable in its cache. Furthermore, the compiler (and the CPU too) is free to interpolate temporary variables, re-order instructions or run them in parallel if it deems that the effect will be equivalent. In other words, code like this:

    if (!condition)
    {
        do_something();
        condition = YES;
    }

May be turned into this:

    if (!condition)
    {
        condition = YES;
        do_something();
    }

If two threads hit this same code at the same time it is possible that one of them may see `condition` as being `YES` even before `do_something()` has done its stuff. Putting a lock around the entire block is one solution. Using a memory barrier is another:

    if (!condition)
    {
        do_something();
        WO_MEMORY_BARRIER();
        condition = YES;
    }

The barrier prevents the compiler (or the CPU) from rescheduling across the fence. This means that `condition` can only be set to `YES` once `do_something()` has really done its stuff. The above code still needs a synchronization block to handle the case were two threads may race to `do_something()` for the first time:

    @synchronized (object)
    {
        if (!condition)
        {
            do_something();
            WO_MEMORY_BARRIER();
            condition = YES;
        }
    }

But once again we're back in the always-lock camp. And if we're always locking do we even need the memory barrier? The answer is no; even if the instructions get reordered there's still no way for a thread to see `condition` as being `YES` unless the `do_something()` function has already finished.

Now, let's looked at the double-checked pattern again, this time with the memory barrier in place:

    if (!condition)
    {
        @synchronized (object)
        {
            if (!condition)
            {
                do_something();
                WO_MEMORY_BARRIER();
                condition = YES;
            }
        }
    }

If the memory barrier weren't there then you can see what might happen. In an ideal world one thread can enter the synchronized section, call `do_something()` and set the condition. A second thread asking if `condition` is `YES` knows that it can only be `YES` if `do_something()` is finished.

In the real world, however, things are different. The compiler could reorder the instructions in the synchronized section. The first thread could set the condition before calling `do_something()`. A second thread could therefore see `condition` as being `YES` too early, undertake some action which depends on `do_something()` being done, and disaster can ensure. The memory barrier saves us from this.

The problem of working on multiple cores which may have multiple caches still remains. Even with the memory barrier in the synchronized section protecting us from undesired instruction reordering, there is still the possibility that a thread on one core could set `condition` to `YES`, but a thread on another core will continue to see it as `NO`, at least until the caches are resynchronized.

This latter problem can be addressed by inserting an additional barrier before the first check of the condition; this forces a resynchronization across all components of the system (caches, cores, main memory):

    WO_MEMORY_BARRIER();
    if (!condition)
    {
        @synchronized (object)
        {
            if (!condition)
            {
                do_something();
                WO_MEMORY_BARRIER();
                condition = YES;
            }
        }
    }

What's actually happening here? Basically, when running on two cores the ordering restrictions imposed on one core may not necessarily be visible to code running on the other core (or cores). For this reason memory barriers should always be paired when working in an SMP context (and Mac OS X is well and truly an SMP context). Most often this is seen in the pairing of a read barrier with a write barrier.

Expressed in human terms, let say we have a bunch of stores (writes to memory) that are ordered into two groups, "store A, B and C" and "store X, Y and Z", with the aid of a write memory barrier. This means that although the stores of A, B and C may occur in any order, they are guaranteed to occur before the stores of X, Y and Z (which may themselves occur in any order).

A read barrier is required in order for this ordering to be perceived by a thread running on another core. Otherwise the thread is free to perceive the stores in literally any order.

    Core 1                      Core 2
    Store A
    Store B
    Store C
    WO_WRITE_MEMORY_BARRIER
    Store X
    Store Y
    Store Z                     Load A
                                WO_READ_MEMORY_BARRIER
                                Load X

Here the read memory barrier ensures that the ordering effects imposed by the write barrier on the first core and correctly perceived by the second core. In other words, it is not only guaranteed that A will be stored before X on the first core, but also that that ordering will be perceived on the second core as well.

In the case of our double-checked locking example, the same effect can be achieved more efficiently using only read and write barriers rather than fully bi-directional barriers:

    WO_READ_MEMORY_BARRIER();
    if (!condition)
    {
        @synchronized (object)
        {
            if (!condition)
            {
                do_something();
                WO_WRITE_MEMORY_BARRIER();
                condition = YES;
            }
        }
    }

For more information on memory barriers in SMP contexts I recommend [this article](http://kerneltrap.org/node/6431).

So there you have it... yet another article in the "double-checked locking is broken unless you fix it with memory barriers" meme. I guess everyone has to write one to really understand it.

#### Update: 18 February 2007

Here is [the take by](http://ridiculousfish.com/blog/archives/2007/02/17/barrier/) Peter Ammon, [an Apple engineer on the AppKit team](http://weblog.scifihifi.com/2005/05/26/say-hello-to-ridiculous-fish/). Highly recommended reading.
