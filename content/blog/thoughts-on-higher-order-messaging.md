---
title: Thoughts on Higher Order Messaging
tags: blog
---

I've never used Higher Order Messaging (HOM) but I am familiar with what it is. The main benefit of HOM is that it allows you to reduce lengthy code sections like this:

    NSEnumerator *enumerator = [array objectEnumerator];
    NSMutableArray *temp = [NSMutableArray array];
    id string = nil;
    while ((string = [enumerator nextObject]))
    {
        if ([string hasPrefix:@"foo"])
            [temp addObject:string];
    }
    NSArray *result = [NSArray arrayWithArray:temp];

Into this:

    NSArray *result = [[array select] hasPrefix:@"foo"];

Which is clearly more readable and easier to maintain. HOM advocates will tell you that the "select" idiom reads like natural language, and that's why it's so easy to understand and use.

But it's not all roses. The compiler will issue a warning when it sees that above statement because as far as it is concerned (unless you tell it otherwise with category declarations in headers, macros, or casts) the `hasPrefix:` method returns a `BOOL` (an integer type) rather than an object (a pointer type). Not just a warning in fact, the compiler and the runtime may even go so far as to conspire and mangle the returned object for you to the extent that the example doesn't even work without some hideous runtime hackery. The problem is so bad that one of the most oft-cited and celebrated uses for HOM (the "select" pattern) simply cannot be implemented in a clean, non-kludgey way.





But it's not just the compiler that feels uncomfortable with this construction. I don't either, even though I understand what's happening behind the scenes. You see, with a language that supports HOM as a fundamental part of the language (Smalltalk, for example), HOM looks "right". A similar paradigm is the block syntax offered by Ruby, although strictly speaking that's not really HOM; rather it's anonymous inline functions which allow you to achieve a similar effect.

But in Objective-C where HOM effectively has to be shoehorned into the language things don't look "right" to me. You see, when I see messages chained together in Objective-C I've learnt to recognize a basic pattern:

    [[[NSString alloc] init] autorelease];

Or:

    [[[thing doSomething] andThenThis] andThenThat];

When the leftmost entity is a class you recognize this is a factory method that churns something out, and each subsequent message is going to add to, modify, or build on that something. When the leftmost entity is an object you see each message as adding to, modifying or building on whatever got returned by the first message.

But with HOM that pattern no longer applies. It reads like natural language but behind the scenes there's an invisible trampoline object that does the work. The first message returns this invisible object with which you never need interact knowingly, and that invisible object mysteriously captures the message that you send it, the message that you really want to send to the objects in the collection, and then it does something with it.

Yes, it works; yes, it allows you to write shorter, more compact code using a natural-language style. But it just feels wrong. I don't know if I've explained myself; I guess the fundamental difference for me is that in the typical pattern examples I gave above there is nothing hidden, it's all out in the open. This "honesty" is manifested throughout almost all Objective-C code, you experience it hundreds of times every day that you code. At each step in the chain you know exactly what kind of object has been returned and the effect of each message. There is no trickery or sleight of hand, no hidden proxies, just a clear chain of object/message pairs. The fact that I know how HOM works and I know what the invisible objects doing the real work are doesn't make me feel any more comfortable with it.

I know that this is what proxies do. I use them myself in my WOTest framework (to implement mock objects). But it still doesn't feel right to me. Proxies feel right when you're sending messages to remote objects across a network or in other processes or threads, but not when you're sending a message to a local instance of `NSArray`, so close that you could touch it and all of the objects inside it. If I could think of a better way to do mock objects I would throw out the HOM-style messaging syntax in a heartbeat. I mean, the following code works, it's compact, it's intention is clear, but it just feels wrong to me:

    [[mock expect] returning:@"foo"] substringfromIndex:3];

A long-winded alternative, something like the following, doesn't set off those same alarm bells:

    [mock expectSelector:@selector(substringFromIndex:)
                  return:@"foo" 
               arguments:3];

(Although in reality such a method — one that accepts a variable number of arguments — would come up against the [same problems](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/more_than_i_eve.php) that any `NSInvocation`-based mechanism comes up against when it comes to trying to forward messages when working with variable numbers of arguments.)

That's why I haven't embraced HOM yet. That, and the fact that it works at such a low level that Apple could break it at any time in a future OS update. (To be fair, I should qualify that statement and say that "most *existing* implementations could be broken at any time in a future OS update"; it is possible to implement most HOM patterns in an unoptimized way without relying on too many low-level runtime details.)

#### Addendum

And as a side note, the code comparison that I posted above wasn't really fair. I would really write the first example as follows, using my `WO_ENUMERATE` macro and an `array` method in a category on `NSMutableArray` to make things a little less painful:

    NSMutableArray *temp = [NSMutableArray array];
    WO_ENUMERATE(array, string)
    {
        if ([string hasPrefix:@"foo"])
            [temp addObject:string];
    }
    NSArray *result = [temp array];

From activity in the GCC CVS repository it looks like Objective-C 2.0 will support a new `foreach` keyword anyway, or syntactic sugar for `for` which makes it behave like `foreach` , rendering even tricks like the `WO_ENUMERATE` macro unnecessary:

    NSMutableArray *temp = [NSMutableArray array]
    for (NSString *string in array)
    {
        if ([string hasPrefix:@"foo"];
            [temp addObject:string];
    }
    NSArray *result = [temp array];
