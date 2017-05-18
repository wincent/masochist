---
title: Google gems
tags: blog
---

The [Google Mac Weblog](http://googlemac.blogspot.com/) continues to be an occasional source of some very interesting gems. [This time](http://googlemac.blogspot.com/2006/11/getting-loaded.html) it's about [module initializers](http://developer.apple.com/documentation/developertools/Conceptual/DynamicLibraries/Articles/DynamicLibraryDesignGuidelines.html), something which I didn't know existed. A handy replacement for the `load` method in categories with a better-defined execution order from which you can safely call methods in super classes and other classes.

Basically, it's not entirely safe to send *any* Objective-C message from inside `load` because there are no guarantees. In practice, on the current version of Mac OS X, it is safe to send messages to your superclass because the runtime will load them and `initialize` them for you if necessary, but that could change with any future version of the OS. Likewise I've never had a problem sending messages to Cocoa classes from inside `load` but that could change too.

So the module-level constructors and destructors are a welcome solution.
