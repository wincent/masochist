---
title: Handling exceptions with custom root classes
tags: blog
---

Apple's Objective-C runtime allows you to throw any object as an exception. Most commonly you would throw an NSException object as shown below:

    @throw [NSException exceptionWithName:@"ExceptionName" 
                                   reason:@"Invalid arguments"
                                 userInfo:nil];

The trouble is, however, that you could conceivably throw other objects:

    @throw @"Exceptions are fun";

And this could cause trouble for you if your exception handler makes assumptions about what kind of object it will be passed as an exception. This could be particularly troublesome if you threw a class the did not derive from the NSObject root class or implement the NSObject protocol:

    @throw [WORootClass trickyException];

In this case if your exception handler makes the assumption that the exception will respond to messages like *name*, *reason*, *userInfo* or *description* then you could end up crashing the program. There are not even any guarantees that the passed exception class will respond to messages like *conformsToProtocol:*, *respondsToSelector:*, *performSelector:*, *isKindOfClass:* or even the most basic *class*. You would normally use these methods to protect yourself from unknown conditions but if you try to invoke them on an object that does not derive from the NSObject (or similar) root class then you could find that your program crashes rather than raising a normal exception.

Now it is true that you almost never see custom root classes on Mac OS X but that doesn't mean that they don't exist. For that reason for the last couple of days I've been working on making [WOTest](http://test.wincent.com/) work with any kind of Objective-C object regardless of whether it derives from NSObject. As a testing framework it's extremely important that it be totally robust and that it catches exceptions regardless of what kind of object they are. As far as I know none of the other Objective-C unit testing frameworks have this capability (admittedly I don't have much knowledge of the internals of those frameworks).

This involves some low-level manipulation of the Objective-C runtime but I'm enjoying getting my hands dirty with it.

My current challenge is that I am trying to figure out how to determine the return type of an Objective-C method dynamically at runtime. For example, consider the "Object" root class (implemented in libobjc which is open source and part of Darwin; see /usr/include/objc/Object.h). The Object class responds to the *name* selector but it returns a value of type "const char \*" (unlike NSException which has a "NSString \*" return type). If you send a *name* selector to this object you'll get a valid pointer back but you'll most likely crash the program if you make the mistake of assuming that it points to an NSString object.

It's true that this is probably not a very likely situation but it's one that I want to handle. I'm implementing a number of high-level convenience methods in a category on NSObject that serve as wrappers for the low-level functionality that I'm using. Once I've solved this little problem I'll be able to use those wrappers to protect me in a number of other cases too (the *description* selector is one which springs to mind). I had a glance at the runtime documentation and I can't yet see where return type information is stored for the method definitions. Nevertheless if I run class-dump on libobjc or Foundation I see that it correctly distinguishes between id return types and const char \*, so the information must be in there somewhere...

#### Update

Looks like the information is in the objc\_method structure. The docs say that method\_types "contains the type encodings for the method's argument" but a little bit of empirical testing shows that the string encodes not only the arguments but the return type as well...
