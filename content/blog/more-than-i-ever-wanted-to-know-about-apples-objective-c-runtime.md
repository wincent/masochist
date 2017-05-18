---
title: More than I ever wanted to know about Apple's Objective-C runtime
tags: blog
---

Some time ago I wrote about [adding mock objects to WOTest](http://www.wincent.com/a/about/wincent/weblog/archives/2005/06/mock_objects_in.php). Over the last couple of days I set about trying to improve them and make them more elegant and flexible. In the process I've learnt a lot of about message dispatch system in Apple's Objective-C runtime. Too much. Read on if you'd like to see the story of a journey from a position of relative ignorance to not-quite-as-much ignorance.





Mock objects in WOTest are basically used like this:

    WOMock *mock = [WOMock mockForClass:[NSString class]];
    [[mock expect] lowercaseString];
    [mock lowercaseString];
    [mock verify];

That's a simple example (that you'd probably never ever see in real testing) that sets up the mock, tells it to expect a message, sends the messages, and then asks the mock for confirmation that it received the message. Why would you want to set up a mock to stand in for `NSString` anyway? Why not just use `NSString` itself directly? There are two reasons:

1.  You can't ask `NSString` for confirmation that it received a message but you can ask a mock object. This may seem ridiculous in this contrived example — after all, you know it received the message because you yourself sent it right then and there! — but there are testing situations in which the message should be sent by some other "third-party" object not under your direct control and you'll want to confirm that it fulfilled the expectation.
2.  It doesn't matter if the documented (or undocumented) behaviour of`NSString` changes in the future because your mock will always behave the same. The mock provides you with a consistent foundation that you can use to test something else (after all, if you want to test the behaviour of `NSString` you should probably be testing it directly!).

A much more common example involves using mock objects to stand in for classes of your own design that are under construction but not finished yet, or which can't conveniently be used in a testing scenario. For example:

    NSArray *plugins = [NSArray arrayWithObjects:@"foo", @"bar", nil];
    WOMock *mock = [WOMock mockForClass:[WOPlugin class]];
    [[[mock accept] returning:plugins] allPlugins];
    WO_TEST_EQUAL([mock allPlugins], plugins);

Another contrived example, but it will suffice. The mock is told to stand in for a "plugin" class and return a list of plugins ("foo" and "bar"). For the purposes of illustration the example uses a macro, `WO_TEST_EQUAL`, to make sure the mock returned the expected list. It's fairly easy to imagine the benefit of using mock objects to perform controlled testing of other parts of the code without directly involving the `WOPlugin` class itself (perhaps you haven't finished writing it yet, or you want to test it separately, or you simply wish to test an artificial situation which would be difficult to contrive without mocks).

The trouble here is that you can only tell the mock to accept or expect methods which the class really does implement. That is, if you want to test a new method `pluginHash` but you haven't started writing it yet then you cannot use a mock object to stand in until you've at the very least written an empty implementation (a "stub" in mock object parlance) in the real `WOPlugin` class:

    - (unsigned)pluginHash
    {
        // TODO: actually write a real hash implementation!
        return (unsigned)self;
    }

The reason why you need this method stub in place is that the Objective-C runtime depends on it to be able to figure out a method signature (more on this below). This severely limits the usefulness of mock objects as stand-ins for incomplete or inaccessible implementations. You may find yourself asking why you would use a mock object at all in cases like this when you could just throw some temporary code into the real implementation (a stub) that will perform any "mock behaviour" that you're looking for. Mocks still have some advantages, but they'd be even better if they didn't have this limitation.

Knowing that the Objective-C runtime is incredibly dynamic and flexible I set about overcoming the restriction. The idea was to have the mock record any invocation at all, not just ones for which the mocked class already had a method signatures. It turns out that I haven't yet been able to achieve this goal and I think it may not be possible ever, due to the design of the runtime.

#### About method signatures and the flow of execution

So your mock is a subclass of `NSProxy` which is designed to stand in for other classes. Messages sent to the proxy wind up at this method and are forwarded from there to the real thing:

    - (void)forwardInvocation:(NSInvocation *)anInvocation

The idea is that instead of forwarding to the "real thing", your mock steps in and handles it anyway.

It turns out that in order to create such an `NSInvocation`, the runtime needs a thing called an `NSMethodSignature`, which it gets from this method:

    - (NSMethodSignature *)methodSignatureForSelector:(SEL)aSelector

So that makes two methods you have to override. The trouble, [as stated here](http://www.stuffonfire.com/2005/12/signaturewithobjctypes_is_stil.html), is that there is no easy way to make a method signature. In fact, there are no public APIs for it at all. There is a private method, but I always try to avoid using private or undocumented APIs whenever I can; here's the declaration of the private method in question (obtained using [class-dump](http://www.codethecode.com/Projects/class-dump/)):

    + (id)signatureWithObjCTypes:(const char *)fp8;

I did look at writing my own method for making method signatures and adding it to a category of `NSMethodSignature` but the implementation required me to directly mess with instance variables and I didn't feel good about doing that. It felt even nastier than using a private API so I resigned myself to using that private API.

You might think your troubles are over at that point because you have a method for making method signatures. Unfortunately it is not so. How do you get the list of types?

The answer is that only the runtime knows, and how does it know? It knows because it knew them at compile time. It knew them at compile time, which meant that it knew them at link time, which means that it knows it at runtime. You can find this sort of stuff out by using the low-level functions like `class_getInstanceMethod` to find information about methods. But you'll only ever be able to find information about methods that the compiler knew about at compile time. This means that you can get a method signature for the `lowercaseString` method of `NSString`, and you can get a method signature for the `allPlugins` method of `WOPlugin` (but only if you included at least a skeletal implementation of it at compile time). If you want to figure out the method signature for a new, unwritten method like our example, `pluginHash`, you're out of luck.

But surely that can't be the end of the story, you say. The runtime is dynamic! If you send a message dynamically at runtime then you should be able to capture information about it! Consider the following example:

    [[mock expect] fancy:@"foo" smancy:@"bar"]

This is valid, legal, Objective-C. The compiler might warn you about code like this (saying that selector `fancy:smancy:` may not be recognized by the class) but it is valid code and it will execute. The compiler will dutifully replace this with a call to `objc_msgSend()`. In normal use you will see an exception if you send an unrecognized selector, but in this case you want the mock object to record the selector and remember it for later.

So what happens at runtime? Ultimately the following selector gets called (this is another private `NSProxy` API discovered with class-dump) and an exception is thrown:

    - (void)doesNotRecognizeSelector:(SEL)fp8

I wanted to see what the flow of execution was. Here's the stack trace at the time the exception is raised:

    _NSRaiseError
    [NSException raise:format:]
    [NSObject(NSForwardInvocation) forward::]
    _objc_msgForward

`objc_msgSend` does not appear in the stack trace but it is responsible for jumping to `_objc_msgForward`. More class-dump research reveals the following method in an `NSObject` category called `NSForwardInvocation`; this corresponds to the third line of the stack trace shown above:

    - (long long)forward:(SEL)fp8:(void *)fp12;

#### How unrecognized selectors are handled in the Apple runtime

So I started getting serious about searching Google for information on the message dispatch process used by the Apple runtime, and particularly how it handles unrecognized selectors. There is documentation for the runtime, but it is mostly high-level discussion of functions like `objc_msgSend` and doesn't delve into the low-level details; the runtime is mostly written in hand-coded assembly for speed.

I found [this article](http://www.geocities.com/chrootstrap/custom_objective_c_root_classes.html) about making your own root classes and it indicates that "your root class will need to recognize `forward` messages due to a little assertion Apple has". I had forgotten about this but now I remember that in the past when I'd made a custom root class I had to stumble across that same article before I could get things to work.

So what we see here is a private, undocumented method, `_objc_msgForward` invoking a private, undocumented method, `forward::`. In truth it's not totally private; it's just that it's not advertised. You can look at the assembly language implementation of this and other functions by downloading the Darwin source.

The `forward::` method is called when no implementation can be found for a selector. If the `forward::` method is not implemented then an exception is raised. In the default implementation (as found in `NSProxy`) `forward::` invokes `methodSignatureForSelector:` and then uses the returned signature to construct an invocation and passes it to `forwardInvocation:`. If there is no method signature then the invocation cannot be created and `doesNotRecognizeSelector` is called.

The `Object` root class defines a similar method:

    - forward: (SEL)sel : (marg_list)args;

The [NSObject class](http://cvs.savannah.gnu.org/viewcvs/gnustep/core/base/Source/NSObject.m) in GNUstep defines it this way:

    - (retval_t) forward:(SEL)aSel :(arglist_t)argFrame;

A little further hunting (this time through [the Darwin source code](http://darwinsource.opendarwin.org/10.4.3/objc4-267/runtime/Messengers.subproj/)) reveals that the signature is officially:

    - forward:(SEL)sel :(marg_list)args;

So the question then becomes, what kind of useful information can we extract from this marg\_list parameter, and can we use it to construct a method signature?

#### Trying to find out more about the `marg_list` type

According to the documentation a `marg_list` is a "reference to an argument list". It's defined like this:

    typedef void * marg_list;

I started looking at the Darwin source to see if I could figure out what was being pointed at by this marg\_list parameter. The `_objc_msgForward` interface itself adopts one of two forms depending on the contents of the r11 register (on ppc; on i386 the secret flag is in edx):

    id _objc_msgForward(id self, SEL   sel, ...);
    struct_type _objc_msgForward(id self, SEL   sel, ...);

The Darwin source also notes:

     * But the marg_list is prepended with the 13 double precision
     * floating point registers that could be used as parameters into
     * the method (fortunately, the same registers are used for either
     * single or double precision floats).  These registers are layed
     * down by _objc_msgForward, and picked up by _objc_msgSendv.  So
     * the "marg_list" is actually:
     *
     * typedef struct objc_sendv_margs {
     *  double      floatingPointArgs[13];
     *  int     linkageArea[6];
     *  int     registerArgs[8];
     *  int     stackArgs[variable];
     * };

Notes on `objc_msgSendv` for i386:

    /********************************************************************
     * id objc_msgSendv(id self, SEL _cmd, unsigned size, marg_list frame);
     *
     * On entry:
     *      (sp+4)  is the message receiver,
     *      (sp+8)  is the selector,
     *      (sp+12) is the size of the marg_list, in bytes,
     *      (sp+16) is the address of the marg_list
     *
     ********************************************************************/

Notes for ppc:

    /********************************************************************
     * id       objc_msgSendv(id    self,
     *          SEL     op,
     *          unsigned    arg_size,
     *          marg_list   arg_frame);
     *
     * But the marg_list is prepended with the 13 double precision
     * floating point registers that could be used as parameters into
     * the method (fortunately, the same registers are used for either
     * single or double precision floats).  These registers are layed
     * down by _objc_msgForward, and picked up by _objc_msgSendv.  So
     * the "marg_list" is actually:
     *
     * typedef struct objc_sendv_margs {
     *  double      floatingPointArgs[13];
     *  int     linkageArea[6];
     *  int     registerArgs[8];
     *  int     stackArgs[variable];
     * };
     *
     * arg_size is the number of bytes of parameters in registerArgs and
     * stackArgs combined (i.e. it is method_getSizeOfArguments(method)).
     * Specifically, it is NOT the overall arg_frame size, because that
     * would include the floatingPointArgs and linkageArea, which are
     * PowerPC-specific.  This is consistent with the other architectures.
     ********************************************************************/

#### Putting together the pieces... or at least trying to

So we now have some idea about the flow of execution. These three methods will be called in order and must all be overriden:

    - forward:(SEL)sel :(marg_list)args;
    - (NSMethodSignature *)methodSignatureForSelector:(SEL)aSelector
    - (void)forwardInvocation:(NSInvocation *)anInvocation

The question is, do we have enough information available to construct a method signature? The first two methods receive the selector and we can easily get a human-readable string representation from that. The first method also passes a pointer to a `marg_list` (and at least that type is discussed in the Apple documentation, unlike the GNUstep `arglist_t` type). By the time we get to the third method we already need to know the method signature otherwise the passed invocation never could have been constructed. We also know that at least in the `objc_msgSendv` method, the pointer to and the length of the `marg_list` is known, but we don't have access to the runtime at such a low-level because the three methods mentioned above are operating at a much higher level. The Darwin source reveals some detail about how arguments are passed via registers and on the stack, but by the time we get our hands on the `marg_list` at a higher level it looks like that information is no longer available.

Can we construct anything from just a selector? The answer seems to be no, unless the runtime already knows something about it (in which case it had to be known at compile time too). Can we extract anything from the `marg_list` pointer? Once again the answer seems to be no. It is just a pointer to a slab of memory and we have no way of knowing how big that slab is. We can deduce the number of arguments by looking at the number of colons in the selector string, but that doesn't help us because the arguments may be of different sizes (pointers, ints, chars, arrays and so forth).

Let's wind the clock back a little bit. Does the runtime know more about the arguments at the time `objc_msgSend` is called? This is a function that takes a variable number of arguments. As far as I can tell, the only way `objc_msgSend` can learn about the arguments is by querying the runtime. Presuming that `objc_msgSend` uses the standard `va_start`, `va_arg` and `va_end` macros then the only way it can know the type of each argument is to query the runtime beforehand.

I made a small foundation tool that created an instance of a `NSProxy` subclass and sent a couple of messages. I wanted to see what kind of assembly the compiler generated for a line like this.

    [TestProxy message:@"foobar"];

It turns out that the compiler generates type strings like "@8@0:4\\0" with labels such as `L_OBJC_METH_VAR_TYPE_0` for methods that *are* implemented. For methods that are messaged but *not* implemented no such type information is stored, although the compiler still does generate a call to `objc_msgSend`. Here is a partial listing which shows the salient bits of the generated code:

    L_OBJC_METH_VAR_NAME_0:
        .ascii "message:\0"
    L_OBJC_CLASS_NAME_0:
        .ascii "TestProxy\0"
    L_OBJC_CLASS_REFERENCES_0:
        .long   L_OBJC_CLASS_NAME_0
    L_OBJC_SELECTOR_REFERENCES_0:
        .long   L_OBJC_METH_VAR_NAME_0
    LC0:
        .ascii "foobar\0"
    LC1:
        .long   ___CFConstantStringClassReference
        .long   1992
        .long   LC0
    _main:
        mflr r0
        lis r3,ha16(L_OBJC_CLASS_REFERENCES_0)     ; receiver
        lis r4,ha16(L_OBJC_SELECTOR_REFERENCES_0)  ; selector
        lis r5,ha16(LC1)
        stw r0,8(r1)
        stwu r1,-64(r1)
        la r5,lo16(LC1)(r5)
        lwz r3,lo16(L_OBJC_CLASS_REFERENCES_0)(r3)
        lwz r4,lo16(L_OBJC_SELECTOR_REFERENCES_0)(r4)
        bl L_objc_msgSend$stub

As documented in the Darwin source, r3 is the message receiver (the `TestProxy` class) and r4 is the selector. The IA-32 function calling conventions (how parameters are passed and values returned) are [discussed here](http://developer.apple.com/documentation/DeveloperTools/Conceptual/LowLevelABI/Articles/IA32.html). Those for 32-bit PowerPC can be [found here](http://developer.apple.com/documentation/DeveloperTools/Conceptual/LowLevelABI/Articles/32bitPowerPC.html) (see [this document for 64-bit PowerPC](http://developer.apple.com/documentation/DeveloperTools/Conceptual/LowLevelABI/Articles/64bitPowerPC.html#//apple_ref/doc/uid/TP40002471-SW14)). By the time we get to our `forward::` implementation, it seems that this knowledge won't be helpful to us anymore.

Can we get clever and construct a signature with partial information in `forward::` or elsewhere and later fill it in or replace it when we have more info? It seems that the answer is no. We can indeed create a partial signature and things will "work" in a way (that is, the messages will be sent) but we lose information in the process that makes the resulting invocation much less useful (for example, it means that we can no longer compare method signatures meaningfully for equality, and extracting arguments won't work as expected). And it seems that there is no other point in the program flow where we'll have more information.

So at this point I bow my head and admit defeat. I couldn't solve the problem but at least I struggled from a position of total ignorance to less-complete ignorance. If anyone sees something I'm overlooking here feel free to [contact me](http://www.wincent.com/a/contact/mail/) and let me know.
