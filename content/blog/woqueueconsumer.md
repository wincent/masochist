---
title: WOQueueConsumer
tags: blog
---

So the other day I wrote `WOQueue`, a thread-safe, multi-processor-aware FIFO (first-in-first-out) queue class. Today I've been working on `WOQueueConsumer`, which is designed to eliminate some of the repetitive work you would otherwise have to do every time you make use of such a queue.

### Consumer/producer models

There are number of possible consumer/producer models in single and multi-threaded programming:

1.  **Single-threaded:** the only thread is both a producer (adding items to the queue) and a consumer (removing items from the queue).
2.  **Mutli-threaded, single producer/multiple consumers:** a single thread adds items to the queue (perhaps driven by the user interface or read from the disk or the network) and multiple worker threads are spawned as consumers (removing items from the queue).
3.  **Multi-threaded, single producer/single consumer:** a single thread (such as the main thread) is responsible for adding items to the queue and there is a single worker thread in the background acting as a consumer (removing items from the queue).
4.  **Multi-threaded, multiple producers/single consumer:** multiple threads add items to the queue (producers) but only one thread acts a consumer (removing items from the queue).

Yesterday I [wrote about my threading work](http://www.wincent.com/a/about/wincent/weblog/archives/2006/03/threading_nicet.php) on [Synergy Advance](http://synergyadvance.com/) and commented:

> My next step is to serialize this (there's no good argument for having multiple threads communicating with iTunes at once; it will be much better to have a single worker thread handle all communication using a one-at-a-time queuing model) but it should be fairly easy now that I've written the WOQueue class.

So this is a case where we need a single consumer (model 3 above), and there may potentially be multiple producers (model 4). `WOQueueConsumer` implements model 4, but given that model 4 is a superset of model 3 it can be used for the latter as well. In practice I believe that most of my use will be based on model 3 because the need to communicate with iTunes most often comes from the main thread only (either user-driven interaction with the user interface, or timer-driven interaction such as the heart-beat which also occurs on the main thread).

The idea is that `WOQueueConsumer` implements and neatly encapsulates all the things you usually would need to do when working with a `WOQueue`. You just write a subclass and override the `- (void)processQueueItem:(id)item` method and you're done.





### And tangentially...

One of the things I like most about programming is that you're constantly forced to learn new things. Rather than repeatedly solving problems you've already solved in the past you're exposed to new problems and must acquire new knowledge in order to solve them.

When you first start learning Cocoa you very quickly run into `NSString`, `NSDictionary`, `NSLog` and friends. Then sooner or later you'll need to learn about `NSView`, `NSButton`, `NSWindow`; maybe you need to delve into `NSControl` and `NSResponder` too.

At some point you'll need to parse a string and you'll find out about a thing called `NSScanner`. You'll need to work with files (`NSWorkspace`, `NSFileManager`). You'll discover `NSNotification` and `NSNotificationCenter`.

Then Apple will introduce a new technology like Cocoa Bindings or Core Data and you'll have something completely new to learn. Or you'll find that what you want to do can't be done from within Cocoa so you have to dip into Carbon, Core Foundation, Mach or the POSIX layer.

You'll go on to learn about threads, kernel queues, Mach dead-name notifications, memory barriers, mutexes, public-key cryptography, digests, signatures. If you're really unlucky you'll have to grapple with field editors and `NSCell` subclasses. There are literally hundreds of classes available to you in the Cocoa frameworks and one by one you'll end up learning and using them.

The reason I'm writing all this is that my work on `WOQueueConsumer` and friends has yet again put me in the learning zone where I end up using Cocoa classes that I'd never touched before (like `NSConnection`, `NSPort` and `NSNotificationQueue`). It's all good fun: keeps the job interesting.
