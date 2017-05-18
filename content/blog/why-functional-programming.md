---
title: Why functional programming
tags: blog
---

So in my spare time I've started learning [Haskell](http://www.wincent.com/knowledge-base/Haskell) because I think it's the right time to learn [functional programming](http://www.wincent.com/knowledge-base/functional%20programming).

I started thinking about this almost exactly one year ago when I read [this post](http://codemines.blogspot.com/2006/09/another-thread-on-threads.html) by [Mark Bessey](http://codemines.blogspot.com/), a former [Apple](http://www.wincent.com/knowledge-base/Apple) employee that used to [work with](http://www.friday.com/bbum/2006/09/03/into-the-codemines/) [Bill Bumgarner](http://www.friday.com/bbum) on [Xcode](http://www.wincent.com/knowledge-base/Xcode):

> When really massively-parallel systems start to become more common, the programming model will have to change. The simplicity of implementation of the shared-memory model will inevitably give way to more explicitly compartmentalized models. What languages you'll likely use to program these beasts is an interesting question - most likely, it'll be a functional language, something like Haskell, or Erlang. I've been lax in getting up to speed on functional programming, and I'm going to make an effort to do better. I recommend that you do the same.

It's worth reading the [entire article](http://codemines.blogspot.com/2006/09/another-thread-on-threads.html), as well as the [preceding](http://codemines.blogspot.com/2006/09/hell-is-multi-threaded-c-program.html) [parts](http://codemines.blogspot.com/2006/08/now-they-have-two-problems.html).

But my basic gut feeling is that Mark could very well be right. While Apple continues to improve their toolset, [APIs](http://www.wincent.com/knowledge-base/APIs) and [Objective-C](http://www.wincent.com/knowledge-base/Objective-C) itself to make it easier to write threaded programs (some details of which are already known, and others we can't talk about in public until the wraps are off Leopard), the fundamental problem is that massively-parallel consumer systems are going to start arriving much faster than we're able to improve our threaded programming techniques.

8-core consumer machines are already readily available; expect 16-core machines in the near future. The recent trend is clear that ongoing Moore's Law improvements are less and less about clock speed increases and more and more about increasing the number of cores and reducing the power consumption (performance per watt). Life would certainly be simpler if CPU performance had continued to increase purely from clock speed gains, but sadly it's already evident that that particular avenue for advancement is getting narrower and narrower.

So for the purposes of illustration let's just assume that clock speeds will remain roughly constant from here on in but the number of cores will double every 18 months or so; this means we could have 128-core consumer machines in as little as 10 years. Whether or not these figures are wildly inaccurate doesn't really matter because the exact numbers are not important: what is clear is that the number of cores is on the way up and it's going to keep going up in a way that is going to make threaded programming harder and harder.

As the number of threads goes up the difficulty of using the shared-memory model goes up too. Software doesn't necessarily get much faster (due to locking overhead, cache coherency requirements etc) and complexity goes up; the bug count probably goes up too.

One approach to avoid the pitfalls of shared-memory is to use multiple processes rather than multiple threads. For some problems this will scale well, for others it will not.

Functional programming is promising in this context because of a key attribute:

> Unlike imperative programming languages, functional programming has no notion of state or side effects; functions merely have (immutable) inputs and (immutable) results. This means that things like execution order suddenly matter much less. This frees the compiler to be able to split the problem up across multiple cores without the programmer having to know about it.

This is precisely the kind of problem that can and should be solved by the compiler and not the programmer. In the days when computers only had 4KB of memory the programmer had to worry about allocating and hand-optimizing every last byte, but today in the age of vast pools of physical memory and almost unbounded virtual memory programmers no longer need to think about memory at the same level: sure, we think about not using too much of it, but we basically let the compiler handle all the *details*.

As the number of cores increase we're going to see exactly the same progression. While in the "old days" it made sense for a programmer to think about and micro-manage a "UI thread" and a background "work thread", for instance, in the future it will make much more sense for the programmer to forget about threads and just let the compiler make sure that all 128-cores are kept busy.

This is much more likely to become possible with functional compilers because functional programming operates at a much higher abstract level than imperative languages. In imperative languages the programmer thinks like a machine; the programmer knows that the processor executes one instruction after another and the source-code reflects that sequential processing: "do this, then do that, then do this".

But in modern processors with deep pipelines, massive caches, out-of-order execution, and all sorts of hardware micro-optimizations *and* compiler-level optimizations, the relationship gets fuzzier and fuzzier between the sequence of instructions embodied in the source code and the *actual* sequence of execution, usually distributed across cores and processors, in reality.

Functional programming offers an exit, freeing us from thinking about those implementation details and instead allowing us to think about problems and solutions in terms of data transformations. To illustrate, let's look at the canonical functional programming example, the factorial function:

    fac 0 = 1
    fac n = fac (n - 1) * n

And a comparable implementation in an imperative language, in this case [Ruby](http://www.wincent.com/knowledge-base/Ruby):

    def fac n
      n == 0 ? 1 : fac(n - 1) * n
    end

Note that there are many, many ways to implement a factorial function in both languages, but these simple versions will serve for the purposes of illustration.

The imperative version is what you write when you think about the computer as a machine that executes algorithms as a series of steps. The design of the method is just a rephrasing of the actual machine code instructions you expect to be executed:

-   Check if `n` is equal to zero
-   If it is, then return `1` (the factorial of 0 is 1)
-   Otherwise, multiply `n` by the value of the factorial of `n - 1`

The fact that the method includes a recursive self-reference doesn't change the fact that the programmer thinks in terms of a series of steps, and that the thinking is predicated on the fact that the computer will execute the method as a series of steps as well.

The functional version looks very similar at first glance, but don't let the appearance fool you. The difference is subtle precisely because calculating a factorial is such a simple mathematical function.

First up, notice how the functional version is higher-level, more abstract, even if only a little in this example; that is, the source code of the function reads much more like a textbook definition of factorial than the imperative version.

Secondly, notice that the functional version states *what* a factorial is rather than *how* it should be calculated. This point is key because it's at the core of why a compiler can in theory take a functional algorithm and figure out how to distribute it across multiple cores. The functional version does not state "do this then do this"; it instead states "a factorial of a number `n` *is* this". The difference is subtle. Try to look at the function without automatically decomposing it into the series of steps that you believe the computer will perform behind the scenes.

Finally, although this isn't explicitly visible in this example, note that the functional version is totally free of state and side-effects. Once again this grants the compiler an additional degree of freedom for splitting work up across cores. In the case of the imperative example there aren't any side-effects external to the method either, but the key point to note is that in imperative languages side-effects are possible and they are created, along with state all over the place. Pure functional languages, on the other hand, eschew state.

In a future article I'll provide some more realistic examples which demonstrate why this apparent limitation is actually an amazing strength of the functional programming approach. In the meantime, [this article](http://www.defmacro.org/ramblings/fp.html) explains the concurrency aspects of functional programming very well:

> A functional program is ready for concurrency without any further modifications. You never have to worry about deadlocks and race conditions because you don't need to use locks! No piece of data in a functional program is modified twice by the same thread, let alone by two different threads. That means you can easily add threads without ever giving conventional problems that plague concurrency applications a second thought!\
> \
> If your application is inherently single threaded the compiler can still optimize functional programs to run on multiple CPUs. In a functional language the compiler could analyze the code, classify the functions that create strings s1 and s2 as potentially time consuming operations, and run them concurrently. This is impossible to do in an imperative language because each function may modify state outside of its scope and the function following it may depend on it. In functional languages automatic analysis of functions and finding good candidates for concurrent execution is as trivial as automatic inlining! In this sense functional style programs are "future proof" (as much as I hate buzzwords, I'll indulge this time). Hardware manufacturers can no longer make CPUs run any faster. Instead they increase the number of cores and attribute quadruple speed increases to concurrency. Of course they conveniently forget to mention that we get our money's worth only on software that deals with parallelizable problems. This is a very small fraction of imperative software but 100% of functional software because functional programs are all parallelizable out of the box.

So we're going to see the number of cores go up exponentially in the future and with it the complexity of the shared-memory model will go through the roof. I see three ways in which innovation is going to prevent all of this collapsing into a horrid mess:

-   Companies like Apple will continue to improve their frameworks, languages and tools to make it easier for programmers to do the right thing with respect to threads, and harder to do the wrong thing. Things like garbage collection help to address a bunch of thread-related memory management problems; monolithic APIs like Core Data are great for doing the "heavy lifting" and Apple is free to implement infrastructure there behind the API which works well on multiple cores (ditto for any of the "high-performance" APIs such as Core Image and friends) .
-   Programmers will have to learn to distribute work across multiple processes, not multiple threads, because in many cases this will be more scalable and in most it will be more robust.
-   Those supporting processes which don't need to interact with the user interface will probably be best written in a functional programming language, where the compiler can take on a large part of making the most of the opportunities for parallelism on a multi-core machine. (Even though there are already language bindings for wedding together Haskell and C code, I still expect most UI-level code on [Mac OS X](http://www.wincent.com/knowledge-base/Mac%20OS%20X) to be written in Objective-C, if for no other reason than that's what the frameworks do and will use, and that's where the impedance match is.)
