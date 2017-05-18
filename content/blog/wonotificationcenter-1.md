---
title: WONotificationCenter
tags: blog
---

I've revised my `WONotificationCenter` class to more elegantly and transparently handle the delivery of notifications to specific threads.

The old implementation used `NSNotificationQueues` to queue up notifications for specific threads but unfortunately it required the caller to worry about the details of setting up the queues and it required the caller to use a different, custom call to set things up (`addObserver:selector:name:object:queue:`).

The new version dispenses with the queues and handles everything transparently. All you have to do is register to receive notifications using the standard `addObserver:selector:name:object:` method; you'll automatically receive notifications on the thread from which you registered *regardless of the thread from which they were posted*.
