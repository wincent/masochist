---
title: "Duh!" moments
tags: blog
---

Sometimes you are working on a thorny coding problem and find yourself feeling less and less happy with the number of kludgey hacks you're having to implement in order to get things working. Then comes a "duh!" moment in which you realize that there is a better way that avoids all of the kludges, is much cleaner, and works. It's usually blindingly obvious once you see it.





The most recent case of this was only yesterday when I was working on setting up a kind of client-server communications channel between the main [Synergy Advance](http://synergyadvance.com/) application and a helper. It's thorny because you don't necessarily know which one will be launched first and so when trying to set up a inter-application communication mechanism you need to include code for launching the app at other side of the link, waiting for it to get ready, and actually setting up the link. You also have to worry about race conditions (the time between checking if something is running and the trying to launch it).

So you solve the race condition by trying to launch it unconditionally using a method that will not spawn a second copy of the application if another one is already running.

That leaves the "waiting for the other side to be ready" problem. Polling sucks, but you can't use `NSWorkspace` notifications for background processes so you have to look for another means. About the most elegant non-polling solution I could come up with was to use the `kqueue` mechanism to monitor the `windowserver` for forks and use that as a trigger to scan for new processes.

This won't work on Tiger, however, due to a kernel-panic inducing bug that Apple introduced in 10.4, which I thankfully already knew about before even trying because I had seen it in a mailing list archive.

So there I was in that sticky place where things are starting to look very ugly. I tried to encapsulate the ugliness of polling inside a `WOProcessLauncher` class with the idea being that once Apple fixed the panic bug I could switch the underlying mechanism over to the non-polling version. But I wasn't happy with that even though it worked.

Then I had my "duh!" moment while I popped out to buy the bread for the day. Luckily I had only spent about one hour crafting the kludge. A classic case of not seeing the wood for the trees, my brain had started off so impregnated with the "request notification, don't poll" mentality that I hadn't seen the most obvious and elegant implementation. The appropriate sequence is not:

1.  Launch helper
2.  Wait for it to finish launching
3.  Try setting up link

But instead I had to throw the client-server distinction out the window and think of the two apps as peers and use the following sequence:

1.  Launch peer
2.  Peer notifies when it has finished launching
3.  Set up link

I hadn't thought of this because my initial boxed-in thinking had me thinking of the helper as a server and the main app as a client, and that implied a one-way communication channel in which the main app would send commands to the server but the server wouldn't send anything back. As soon as I realized that they should be peers I saw that there was no reason why the link shouldn't be two-way and that either peer could initiate communication with the other and saying "I'm ready!".

Of course I should have realized this immediately but that's what programming is all about: a learning process in which through experience you increase your arsenal of possible designs, learning which ones suck and which ones don't, and getting better at recognizing when to use which tool.
