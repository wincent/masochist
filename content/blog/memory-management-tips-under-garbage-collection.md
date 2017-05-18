---
title: Memory management tips under Garbage Collection
tags: blog
---

### The `CFRelease` function

Good old-fashioned reference counting (with `retain` and `release`) has been thrown out the window in the brave new Garbage Collected world.

Core Foundation objects *are* Garbage Collected too, but they continue to use a reference counting layer on top of the GC. This means that a CF object will only become eligible for collection when its reference count hits zero.

This makes CF objects great candidates for passing to sheet methods and the like which take `void *` "context info" pointers. A normal Cocoa object might be collected here because the pointer to void is not considered a strong reference, but a CF object will remain in memory. When you get back from the sheet you can do a `CFRelease` and the object will eventually be disposed of.

(Your alternative if you don't want to directly touch anything CF is to use the `disableCollectorForPointer:` and `enableCollectorForPointer:` methods of the `NSGarbageCollector` class, but that might end up being a bit more typing in many cases, unless you want to add some convenience methods to `NSObject` via a category to do the same.)

One caveat: you're not supposed to pass `NULL` references to `CFRelease`.


### The `CFMakeCollectable` function

To save you from this potentially error-prone pattern:

    CFTypeRef thing = CFCreateSomething(...);

    ... do lots of stuff ...

    CFRelease(thing); // ... at least, if you remember!

Apple provides `CFMakeCollectable`:

    CFTypeRef thing = CFMakeCollectable(CFCreateSomething(...));

    ... do lots of stuff ...

`CFMakeCollectable` does a `CFRelease` for you immediately and hands the reference back to you. The object sticks around because there is a strong reference to it (until the reference falls out of scope) but you don't have to worry about remembering to `CFRelease` it later on when you're done with it.

The caveat: because `CFMakeCollectable` is a wrapper for `CFRelease` you must not pass `NULL` references to it. This makes it unsuitable for use with some functions that may return NULL on failure, unless you test for `NULL` first in which case you may as well just use `CFRelease` anyway because it's easier to type even if a little misleading about when the released object might end up getting deallocated ("release" sounds too immediate given that the object will stick around at least as long as there are strong references to it).

There is nothing to stop you from writing your own wrapper functions which check for `NULL` references prior to calling `CFRelease` or `CFMakeCollectable`.


### The `NSMakeCollectable` function

The user-friendliest of them all because it is both `NULL`-safe and does a cast to `id` for you at the same time as marking something as collectable. When you do this:

    NSString *string = NSMakeCollectable(CFTryToCreateThing(...));

It is equivalent to writing:

    CFStringRef ref = CFTryToCreateThing(...);
    if (ref)
        CFRelease(ref);
    NSString *string = (NSString *)ref;
