---
title: HOM update
tags: blog
---

A couple of days ago I [wrote](http://www.wincent.com/a/about/wincent/weblog/archives/2006/11/more_thoughts_o.php) about my first venture into HOM (Higher Order Messaging) in the form of a `ifResponds` selector.

I included some results that showed that the HOM implementation was about 100 times slower than the non-HOM version, but I probably should have added that the "if responds" HOM is pretty much a worst-case scenario. You go through all the set-up and overhead for a once-off message send. Compare that to the collection HOMs where you can incur that set-up cost once and then iterate cheaply over a collection that may contain hundreds, thousands or even millions of items.





#### Performance

So I went ahead and implemented some more HOM selectors, `detach`, `perform` (I chose "perform" rather than "do" because the latter is a C language keyword, and besides, "perform" is common Objective-C parlance), and `collect`. The "collect" HOM is the first that can iterate over a collection, so here are some updated test results:

    "If responds" HOM tests:
        Convenience version : Usage: 0.063110/0.000427/0.063537 (user/system/total)
        HOM version         : Usage: 4.173793/0.167678/4.341471 (user/system/total)
        Traditional version : Usage: 0.050435/0.000294/0.050729 (user/system/total)
        Runtime version     : Usage: 0.039302/0.000225/0.039527 (user/system/total)


    "Collect" HOM tests (tiny array, 1 elements):
        HOM version         : Usage: 0.000192/0.000080/0.000272 (user/system/total)
        Traditional version : Usage: 0.000020/0.000004/0.000024 (user/system/total)


    "Collect" HOM tests (small array, 10 elements):
        HOM version         : Usage: 0.000124/0.000007/0.000131 (user/system/total)
        Traditional version : Usage: 0.000051/0.000004/0.000055 (user/system/total)


    "Collect" HOM tests (medium array, 100 elements):
        HOM version         : Usage: 0.000560/0.000025/0.000585 (user/system/total)
        Traditional version : Usage: 0.000370/0.000026/0.000396 (user/system/total)


    "Collect" HOM tests (big array, 1000 elements):
        HOM version         : Usage: 0.005044/0.000229/0.005273 (user/system/total)
        Traditional version : Usage: 0.003596/0.000204/0.003800 (user/system/total)


    "Collect" HOM tests (bigger array, 10000 elements):
        HOM version         : Usage: 0.048220/0.001478/0.049698 (user/system/total)
        Traditional version : Usage: 0.034332/0.000836/0.035168 (user/system/total)


    "Collect" HOM tests (biggest array, 100000 elements):
        HOM version         : Usage: 0.490689/0.015145/0.505834 (user/system/total)
        Traditional version : Usage: 0.358335/0.018534/0.376869 (user/system/total)

While the "if responds" HOM is about 100 times slower than the non-HOM equivalent, the "collect" HOM is only 10 times slower in the worst case scenario (iterating over a collection that contains only a single element) and in the best case scenario tested (100,000 elements) it was only 30% slower. This is for a completely unoptimized implementation which doesn't take any tricky shortcuts with the runtime and which should work unmodified on any version of Mac OS X.

It's interesting to compare these speed figures with the results reported in Marcel Weiher's [HOM paper](http://www.metaobject.com/papers/Higher_Order_Messaging_OOPSLA_2005.pdf) (co-authored with Stéphane Ducasse), which were collected using "techniques for optimizing message sends":

  Array size   HOM relative speed (optimized)   HOM relative speed (unoptimized)
  ------------ -------------------------------- ----------------------------------
  1            Not tested                       1133%
  10           218%                             238%
  100          122%                             148%
  1000         98%                              139%
  10000        94%                              141%
  100000       Not tested                       134%

So for very small collections the performance difference is negligible, but as the collection size grows the optimized HOM implementation approaches better-than-100% performance penalty whereas the non-optimized case tends towards somewhere between 130 and 140% performance penalty. [Premature optimization is the root of all evil](http://en.wikipedia.org/wiki/Optimization_(computer_science)), so I think I'll leave things the way they are until real-application profiling indicates that I should be optimizing my HOM stuff or replacing it with non-HOM alternatives.

#### Is HOM really HOM?

In [my last article](http://www.wincent.com/a/about/wincent/weblog/archives/2006/11/more_thoughts_o.php) on HOM, I asked, is HOM really HOM? The "higher order" part of HOM refers to the fact that you're sending a message to a message. Well, actually, that's only what you *want* to do:

    [collection select: hasPrefix:@"foo"];

But that's not valid Objective-C. You can't pass a message as a parameter to another message. The alternative, idealized syntax (also invalid) won't work either:

    [collection select hasPrefix:@"foo"];

Actually-existing HOM is not actually HOM at all, a point that even [the seminal paper on HOM](http://www.metaobject.com/papers/Higher_Order_Messaging_OOPSLA_2005.pdf) admits, although I didn't realize that it made this admission until I read the paper yesterday:

> Objective-C ... \[doesn't\] support sending messages as a parameter to another message, not even syntactically. What is supported, however, is messages taking objects as arguments, so we need to somehow bridge this gap.\
> \
> \[I\]nstead of passing the argument message to the prefix message directly, which isn't possible, \[in Higher Order Messaging\] the prefix message returns an object that is then sent the argument message.

So HOM doesn't actually exist, except as a theoretical ideal. What does exist is an working model that is equivalent in functional terms to the theoretical ideal. No "higher order" messages are actually sent, but the end result is just the same as if they were. Knowing that this fact is acknowledged by the originators of the "HOM" moniker makes me feel a lot more comfortable than I [did before](http://www.wincent.com/a/about/wincent/weblog/archives/2006/08/thoughts_on_hig.php) with the whole idea.

Still, I think there *may* be a problem here. It's entirely suitable to invent a new term to describe a different kind of messaging (messages that take messages as parameters). But it probably causes confusion when you then apply that term to something that doesn't actually exist yet; what we call "HOM" today isn't HOM: it's Traditional Messaging That Allows Us To Obtain A Result That's Approximately Equivalent To What We'd Get If We Had A Real HOM Implementation. I guess that "TMTAUTOARTAETWWGIWHARHI" is not as catchy as HOM. I think the cognitive dissonance provoked by the gap between the term and the reality goes a long way to explaining my resistance to HOM in the past.

I can partly explain my response in the following manner. The part of HOM which is indisputably true is the "Messaging" part. Messaging is definitely occurring. But what is "higher order" about actually-existing implementations of HOM? There's a trampoline involved, but the trampoline is just a good old fashioned proxy. There is nothing at all new about sending a message to something (a proxy) and having the proxy forward that message the real recipient.

Existing implementations of HOM feel more like "abstraction" than anything "higher order". Let's take the "collect" HOM as an example. Isn't it just abstraction of the iteration pattern? "Abstraction" because iteration is still definitely happening under the hood; but you hide it under an abstraction layer. The actual messy work is encapsulated out of sight inside the proxy, but underneath it all it's still the same old iterative code, and if anything it's even uglier because of the elaborate forwarding and runtime manipulation required to get the trampoline working in the first place.

[Ofri Wolfus](http://www.dpompa.com/?p=33) passes a message encapsulated inside an object. As such it seems less "higher order" than Marcel Weiher's implementation. "Less" because there is less invisible magic going on. It's all out in the open. It's a case of "I'm going to send you this message (encapsulated in an object because that's the way message sending actually works in Objective-C), and then I want you to send it to every item in the collection". The drawback is that the code is more verbose and quite ugly (see the example below), and it kind of defeats the whole purpose of HOM (let the programmer think about intention rather than implementation details).

    [[myArray select] hasPrefix:@"a"];              // "traditional" HOM
    [myArray selectWhere:MSG(hasPrefix:@"a"), nil]; // Wolfus version


    [[myArray selectWhere] capitalizedString] hasPrefix:@"a"];              // "traditional" HOM
    [myArray selectWhere:MSG(capitalizedString), MSG(hasPrefix:@"a"), nil]; // Wolfus version


    [[[myArray selectWhere] valueForKey:@"capitalizedString.lastPathComponent"] hasPrefix:@"a"];    // "traditional" HOM
    [myArray selectWhere:MSG(capitalizedString), MSG(lastPathComponent), MSG(hasPrefix:@"a"), nil]; // Wolfus version

Compare that with [Marcel Weiher's version](http://www.metaobject.com/Research.html): the intention is clear even if the mechanism is not. Clear because the thing reads similar to natural language and it's not cluttered with visible secondary implementation details. But the mechanism is not clear because it's all happening with secret behind-the-scenes sauce. You don't have to bundle up the message, you just send it like you would anyway. There is less of an obstacle between formulating your intention and actually expressing it; you just do it. In other words, your intention is to send a message to the items in a collection, so what do you do? You send the message! The actual recipient of the message you send is an invisible proxy, but at least at a cursory glance it looks like you're sending the message to the collection itself if you overlook the nitty gritty syntax; so you're working with the collection as a whole in a way that affects the individual components. It's therefore *like* Higher Order Messaging even if there is nothing *actually* "higher order" about it.

#### Next...

I'll have more to say on [HOM](http://www.wincent.com/a/about/wincent/weblog/archives/hom/) within the next few days. Specifically the topic of "the BOOL return problem". Watch [this space](http://colaiuta.net/) for more.
