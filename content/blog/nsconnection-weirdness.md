---
title: NSConnection weirdness
tags: blog
---

Today I present an episode in the Great Mysteries of Cocoa series.





### The mystery

Set up an `NSConnection` like this:

    [NSConnection connectionWithReceivePort:[NSPort port] sendPort:[NSPort port]];

Pass that connection to another thread as `remoteConnection`. Now try to create a local connection, `localConnection` in the thread based on the passed connection:

    [NSConnection connectionWithReceivePort:[remoteConnection sendPort]
                                   sendPort:[remoteConnection receivePort]];

If you try to use that connection you'll find that your code blocks forever as soon as you try to perform `[localConnection rootProxy]`. Pass the ports separately instead of passing the connection and the code works as expected without blocking. This is why the Apple example code gets you to pass not only the connection but the ports separately (in an array), even though it seems like an unnecessarily long-winded way of doing things.

Still, I can't say that I really like the behaviour. Consider the following piece of code:

    NSPort *port1 = [NSPort port];
    NSPort *port2 = [NSPort port];
    NSConnection *connection =
        [NSConnection connectionWithReceivePort:port1 sendPort:port2];
    NSPort *port3 = [connection receivePort];   // does port3 == port1?
    NSPort *port4 = [connection sendPort];      // does port4 == port2?

Is `NSConnection` returning the ports that were used to create it? If not, it definitely seems counter-intuitive given that the documentation says that `receivePort`, "Returns the NSPort on which the receiver receives incoming network messages." But the docs also go on to say:

> You can inspect this object for debugging purposes or use it to create another NSConnection, but shouldn’t use it to send or receive messages explicitly.

So does `port1` equal `port3` or not? I whipped up a quick test project and found out that it is indeed equal (both according to a pointer comparison and also the `isEqual:` method). It's equal if you perform the comparisons from the same thread, and also if you perform them from a secondary thread after passing the `NSConnection` to that thread. So the question is, why does the call to `rootProxy` block if you don't pass the ports separately? I'm afraid it will have to remain one of the Great Mysteries of Cocoa...
