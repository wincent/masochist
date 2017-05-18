---
tags: objective.c wiki
---

Messages are logged to `/tmp/msgSends-<pid>`:

         + NSObject NSObject initialize
         + NSNotificationCenter NSObject initialize
         + NSNotificationCenter NSNotificationCenter defaultCenter
         + NSNotificationCenter NSObject self
         + NSNotificationCenter NSObject allocWithZone:
         - NSNotificationCenter NSNotificationCenter addObserver:selector:name:object:
         + NSNotificationCenter NSNotificationCenter defaultCenter
         + NSNotificationCenter NSObject self
         - NSNotificationCenter NSNotificationCenter addObserver:selector:name:object:
         + Protocol Protocol _fixup:numElements:
         + NSAutoreleasePool NSObject initialize
         + NSAutoreleasePool NSObject alloc
         + NSAutoreleasePool NSAutoreleasePool allocWithZone:
         + NSAutoreleasePool NSObject self
         + NSThread NSObject initialize
         + NSThread NSObject allocWithZone:
         - NSThread NSThread init

These are the messages sent in response to:

    int main (int argc, const char * argv[])
    {
        NSAutoreleasePool *pool = [NSAutoreleasePool alloc];
        return 0;
    }

My understanding of the syntax is as follows:

-   First column: `+` indicates a [class (factory) method](/wiki/class_%28factory%29_method), `-` indicates an [instance method](/wiki/instance_method)
-   Second column: the class of the object receiving the message
-   Third column: the class of the object that implements the message (note that a class may inherit an implementation from a superclass rather than providing its own)
-   Fourth column: the actual selector

Based on this interpretation, the previously listed message sends indicate the following:

-   The first method called is the [NSObject](/wiki/NSObject) `initialize` class method
-   The second method is the [NSNotificationCenter](/wiki/NSNotificationCenter) `initialize` class method, but [NSNotificationCenter](/wiki/NSNotificationCenter) doesn't implement that method, so the superclass implementation is called instead (thus demonstrating why you should make sure that code you write in `initialize` is either safe to call multiple times, or is protected in some way against repeated execution)

There are two ways of turning on logging:

# Setting an environment variable

    export NSObjCMessageLoggingEnabled=YES

# Enabling/disabling at runtime

    instrumentObjcMessageSends(YES);
    // do something ...
    instrumentObjcMessageSends(NO);

# See also

-   "Technical Note TN2124: Max OS X Debugging Magic": <http://developer.apple.com/technotes/tn2004/tn2124.html>
-   <http://www.dribin.org/dave/blog/archives/2006/04/22/tracing_objc/>
-   <http://unixjunkie.blogspot.com/2006/08/tracing-objective-c-messages.html>
-   <http://www.robertblum.com/articles/2006/01/09/the-making-of-icalfix>
