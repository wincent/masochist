---
title: Mock objects in WOTest
tags: blog
---

Well, continuing on from [my last post on the topic](http://www.wincent.com/a/about/wincent/weblog/archives/2005/06/handling_except.php) I'm blazing ahead with my [unit testing](http://www.wincent.com/a/about/wincent/weblog/archives/2005/06/unit_testing_an.php) framework, [WOTest](http://test.wincent.com/). I've gotten the custom root class support finished (and tested, of course!) and have now moved on to rolling in mock object support.

Now, I've never used mock objects in my own unit testing in the past but I think it will be something useful to add. There are a few design patterns that one could use to implement it (see how [jMock](http://www.jmock.org/getting-started.html), [NMock](http://www.nmock.org/) and [OCMock](http://www.mulle-kybernetik.com/software/OCMock/) do it) and of these I think the most attractive one is the "[trampoline](http://cocoadev.com/index.pl?HigherOrderMessaging)" pattern. The trampoline pattern is attractive because it allows a very minimal, elegant syntax, which is exactly what I've strived for with the test macros used in the rest of the framework.

OCMock is an extremely lean, cut-down implementation of the idea and it is open source, but I think it can be done in a better way: it's missing a few methods which I think are must haves and it is hamstrung by the fact that you cannot use it to create a mock object that responds to any selector that contains non-object arguments.

The implementation I have so far implements a number of methods whose function should be self-evident if you've had any experience with using mock objects (ironically, I haven't but I have been reading up on it over the last few days!): *accept*, *acceptOnce*, *reject*, *expect*, *expectOnce*, *expectInOrder* and *verify*. As always when writing Objective-C I've tried to pick method names that are so self-evident that they are almost self-documenting (why is the OCMock equivalent of *accept* called *stub*? To me the relationship between *stub* and *expect* is far from self-evident, but that between *accept* and *expect* is immediately clear).

There are still a couple of challenges to tackle:

**Coming up with an elegant syntax that allows people to specify constraints on arguments**

The default case is to require all the arguments passed at test time to exactly match those specified during set-up. The question is how to provide control over the constraints while still maintaining the simplicity and elegance of the current syntax. I have a few ideas but no clear winner yet. [NMock](http://www.nmock.org/) is a good example of the extreme case: it provides an amazing level of control but the cost is a high degree of syntactic complexity. To a lesser degree I'm also wondering about what would be the best syntax for specifying return values.

**Build mock classes that can handle class methods**

OCMock allows you to set up mock object instances and send instance methods to them. What happens if you want a mock class that stands in for a class and accepts class methods? This is a problem that I've only just begun to think about but it seems to me that in most cases you could design your tests in such a way that you only ever needed to send instance methods; but if you had the freedom to send class methods would you start working in another way? It's still early days so I don't even know if this is possible (I note that NSProxy does not declare a *forwardInvocation:* class method, although if you use class-dump you'll note that NSObject does even if it isn't documented). I suppose that the last resort case would be to throw NSProxy out the window and implement a new root class that handles this scenario.
