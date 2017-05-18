---
tags: wiki
cache_breaker: 1
---

I was first exposed to the [singleton](/wiki/singleton) pattern when I started using the [Cocoa](/wiki/Cocoa) [APIs](/wiki/APIs) on [Mac OS X](/wiki/Mac_OS_X). It's a very frequently used pattern there. I dutifully copied the pattern where it seemed appropriate in my own [Objective-C](/wiki/Objective-C) coding.

Little did I know at the time, it is an oft-criticized pattern:

-   "[Why Singletons are Evil](http://blogs.msdn.com/b/scottdensmore/archive/2004/05/25/140827.aspx)"
-   "[Patterns I Hate \#1: Singleton](http://tech.puredanger.com/2007/07/03/pattern-hate-singleton/)"
-   "[Singleton Considered Stupid](http://sites.google.com/site/steveyegge2/singleton-considered-stupid)"

My personal take on this is that, like so many so-called "anti-patterns" it's not so much using it that is the problem as over-using it. Most of the arguments leveled at it are actually red-herrings when applied to a justified use of the singleton pattern (for examples, look at most instances of the pattern by [Apple](/wiki/Apple)).

The criticisms which *do* hold water for me are both to do with testability:

-   given that singletons last for the lifetime of the program and therefore carry persistent state, they pose problems for testing, as they can allow state to bleed over from one test into another either by oversight or through bugs, potentially disrupting the results and leading to spurious successes (or failures)
-   given that the singleton can only be initialized once during the course of test run, it can be difficult or impossible to influence the initialization for the purposes of things like dependency injection or substitution of test doubles

A pattern I've found useful, therefore, is that of the "advisory" singleton. The class itself doesn't *enforce* the singleton pattern (that is, it does nothing to stop you from trying to instantiate multiple instances of the class) but it does provide you with a convenience method for accessing a single shared instance if you want to. This gives you the convenience of the singleton without the baggage that would normally make a singleton problematic in the test environment.

# Language-based prevalence

It's funny how your choice of language and the language culture around it have an influence here. Of the two object-oriented languages that I've most used, [Objective-C](/wiki/Objective-C) and [Ruby](/wiki/Ruby), I've noticed that the singleton pattern flourishes all over the place in the former yet is very infrequently used in the latter (despite the fact that a `Singleton` module comes included in the standard library).

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [singletons](/wiki/singletons): <http://en.wikipedia.org/wiki/Singleton_pattern>
