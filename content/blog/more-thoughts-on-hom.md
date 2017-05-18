---
title: More thoughts on HOM
tags: blog
---

Back in August [I wrote the following](http://www.wincent.com/a/about/wincent/weblog/archives/2006/08/thoughts_on_hig.php) about HOM (Higher Order Messaging):

> It reads like natural language but behind the scenes there's an invisible trampoline object that does the work. The first message returns this invisible object with which you never need interact knowingly, and that invisible object mysteriously captures the message that you send it, the message that you really want to send to the objects in the collection, and then it does something with it.\
> \
> Yes, it works; yes, it allows you to write shorter, more compact code using a natural-language style. But it just feels wrong.

I had already used a HOM-style syntax for my mock object implementation in my [WOTest](http://test.wincent.com/) Objective-C unit testing framework, although I never really felt convinced that it was the "right thing" to do.

Yesterday, I allowed true HOM to creep into WOCommon in the form of an `ifResponds` implementation.





#### The problem

Sick of writing things like:

    if ([object respondsToSelector:@selector(foo)])
        return [object performSelector:@selector(foo)];

I had long ago added a method to `NSObject` via a category that enabled me to write:

    return [object performSelectorIfResponds:@selector(foo)];

What if the message you wish to send has an object parameter? The obvious solution is to also provide a `performSelectorIfResponds:withObject:` method, a parallel of Foundation's `performSelector:withObject:` method.

Two object parameters? Whip up a `performSelectorIfResponds:withObject:withObject:` partner to go with the `performSelector:withObject:withObject:` method already provided by Foundation.

But if you want to go beyond three object parameters things start to feel distinctly kludgy (if they didn't already!). We can't keep on adding additional "withObject:" parameters forever. Ideally, it would be nice to have a method which took a variable number of arguments:

    - (id)performSelectorIfResponds:(SEL)aSelector 
                        withObjects:(id)firstObject, ...

But writing such a method is not as easy as you might think. The first step (checking to see if an object responds to a selector) is easy, but the second step (dispatching the message) is not as straightforward.

The Objective-C runtime does provide two variants of the basic message dispatch function, `objc_msgSend` and `objc_msgSendv`, but they don't work the same way that `NSLog` and `NSLogv` do. `objc_msgSendv` uses an arcane type called a `marg_list` whereas `NSLogv` uses a `va_list`. A `va_list` is easy to work with using the `va_start` and `va_end` macros but a `marg_list` is not. As far as I know there is only one place in the runtime where you get handed a `marg_list` and that's in the undocumented but semi-public `forward::` method (semi-public because you can learn about it by exploring the Darwin source code).

So if you want to handle a variable number of arguments you're going to need a proxy object that implements `forward::` and if you're going to do that you may as well give in and just do it the HOM way and write an `ifResponds` implementation that allows you to write code like the following:

    return [[object ifResponds] replaceOccurencesOf:@"foo" with:@"bar"];

You see, one of my objections to HOM was that it felt to me like a solution looking for a problem. But in the case of the example under discussion now it really does seem to be addressing a real need. The need is that you want to be able to elegantly handle a variable number of parameters. I admit that the "need" only arose because I wanted to avoid the `respondsToSelector:`/`performSelector:` pattern mentioned above, but the truth is that that pattern doesn't work cleanly anyway when you want to send a message with more than two parameters:

    if ([object respondsToSelector:@selector(foo:bar:foobar:)])
    {
        // unless object is of type "id" compiler will complain here that it may not respond to "foo:bar:foobar:"
        return [object foo:@"1" bar:@"2" foobar:@"3"];


        // to suppress the warning you could do an unsightly cast to id
        return [(id)object foo:@"1" bar:@"2" foobar:@"3"];


        // or a cast to the specific object that you think you're working with
        return [(MyFancyObject *)object foo:@"1" bar:@"2" foobar:@"3"];


        // or drop down to the runtime level
        return objc_msgSend(object, @selector(foo:bar:foobar:), @"1", @"2", @"3");
    }

#### The verdict on `ifResponds`

So does the `ifResponds` HOM pattern come out in front when we compare it with the `performSelectorIfResponds:` method?

Strong points:

-   Shorter syntax
-   Works out of the box with any number of parameters
-   Requires only one method, `ifResponds`, to be added to the `NSObject` namespace (unlike the `withObject:` variants of `performSelectorIfResponds:`)

Weak points:

-   Requires non-obvious invisible trampoline object behind the scenes (which is what I wrote about [here](http://www.wincent.com/a/about/wincent/weblog/archives/2006/08/thoughts_on_hig.php))
-   Runs slower due to said secret magic

Neutral points:

-   Neither method relies on any undocumented or private API so shouldn't break when run on Leopard

Weighing these things up, HOM seems like a winner, unless speed is really important to you. How slow is slow? About 100 times slower, believe it or not; here are the results of a quick, unscientific test that I did comparing the speed of four different methods, each doing an "if responds, perform selector" operation 10 million times:

    Convenience version: 0.674308
    HOM version        : 56.451863
    Traditional version: 0.515416
    Runtime version    : 0.388666

The "convenience version" uses the `performSelectorIfResponds:` method. The "traditional" version uses a `respondsToSelector:`/`performSelector:` pair. The "runtime" version drops the `performSelector:` message in favor of directly calling `objc_msgSend`.

Why is it so much slower? The traditional version requires two explicit message sends; the convenience version is a little slower because it wraps those message sends up in a method and incurs an additional message send; the HOM version instantiates a proxy object (relatively costly compared to a basic message send) and then involves the entire NSInvocation machinery, and I suspect it's this latter element which makes it so dastardly slow.

Admittedly, this is plain, unoptimized HOM, but the moral of the story remains, don't use the HOM version in tight loops; it is best left for cases where it will be used infrequently.

#### Is HOM really HOM?

In working writing the `ifResponds` implementation and writing this article another reason for feeling uncomfortable with HOM dawned on me. It seems that HOM isn't really HOM, not in the strictest sense.

HOM stands for "Higher Order Messaging". "Higher Order" or "meta" because the idea is that instead of sending a message to an object, you send a message to a message. But Objective-C doesn't really allow that; it only allows you to send messages to objects. The HOM implementation tries to give you what you would have if you really could send a message to a message, but in reality if you look at the code it's just a string of normal send-a-message-to-an-object message sends.

[Ofri Wolfus](http://www.dpompa.com/?p=33) has recently been trying to innovate in the HOM space with a framework that encapsulates messages inside message objects. In a sense it is a more "honest" implementation of HOM because it embraces Objective-C's flavor of Object Orientation; that you encapsulate "stuff" in objects and then pass those objects around via messaging. Ofri seems to be a very clever guy and it looks like his framework is both efficient and full-featured despite being at an early stage of development. I admit though that I find the macros and syntax that he's come up with to be fairly unwieldy.

[Pete Yandell](http://notahat.com/nhcollections) has also been trying to break the mould a little bit and his HOM framework looks to be one of the simplest out there. The basic design is a big strong point, in my opinion, but I'll bet that his implementation, like Ofri's, suffers from the same speed problems that plague anything that relies on NSInvocation. It seems that to get really fast HOM you'd need to take NSInvocation out of the picture, and if that's not possible at least minimize it's role. Once you go down that road you have to start meddling at a pretty low level with the runtime and you risk incompatibility with Objective-C 2.0 or other changes that Apple might make in Leopard or later; likewise you probably also make your code more brittle and architecture dependent. I know that Ofri has been working on this, and I believe that Marcel Weiher (author of one of the first frameworks designated as "HOM" for Objective-C) has also optimized the pattern fairly heavily. But I am at this stage only a HOM dabbler and I haven't looked at their code nor the optimizations that they've undertaken.
