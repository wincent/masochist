---
title: Unit testing and why it suddenly became more important
tags: blog
---

I'm a big fan of unit testing. I admit that I was at first put off by the puritanical fanaticism of some of its most vocal advocates (the kind that MashWordsTogether even when they're not writing in programming wikis about their [favorite](http://www.xprogramming.com/xpmag/whatisxp.htm) [topic](http://www.extremeprogramming.org/)) but there was no arguing with the basic premise that automated testing should lead to more robust, bug-free software.





#### What's so good about unit testing?

I don't agree that "Test Driven Development" is the only way to write software but it's clear that once you start to unit test, no matter what your personal style is, you will find that your development patterns do start to incorporate moments of "test-drivenness", even if only fleetingly. In reality there's an interplay between writing code, writing tests and writing documentation. I do all three, not always in the same order and often moving back and forth between them. Writing code is the most important, of course, because without it you wouldn't have a product, but the other two (testing and documenting) help you to write better code and often to come up with better designs. I write code-level API documentation even for code that I doubt anyone else will ever see because I find that doing so provides me with a discipline that leads to code that's better thought out (it's that open source idea that you'll write better code if you imagine you're writing for an audience than if you're not writing for anyone) and I think it also forces me to come up with more usable, better designed APIs. As an added benefit that documentation might come in handy in the future if I ever have to revisit very old code, or if I decide to open source it.

The merit of automated testing is even more self-evident. The single most important benefit is that it helps you to find bugs. Secondary benefits are that it sometimes helps you to come up with better designs (if the code is awkward to test then it's probably awkward in normal use as well and perhaps that means a better design is possible).

You'll also notice that you start to feel more confident about your code and about refactoring it. That confidence actually makes you more productive because if your newly written method passes the battery of tests that you've written (including all the thorny edge cases) then you'll be that much more certain about blazing ahead and writing the next method, and the next, and the next. I think the extra speed at which you work more than offsets the time you must spend writing the tests.

And as I said, you'll be more ready to refactor code if you've got a battery of unit tests in place. That's a good thing because it liberates you from an "if it ain't broke don't fix it" philosophy that might otherwise dissuade you from implementing better designs. Unit testing gives you the confidence to refactor code because you know that it will help you to find any problems or bugs that creep in as a result of the changes, and refactoring is a good thing (or at least it should be!) which should lead you to code that is more maintainable, comprehensible, efficient, error-free.

#### Why unit testing suddenly became more important...

I've used unit testing for some time in my products but for a long while I've fallen short of what I would consider to be a "comprehensive" level of testing. In other words, I test some things that can be easily tested but neglect many things that I probably could and therefore should be testing. I did most of my testing with homegrown macros but I knew that there was scope for improvement so I started work on my own fully-fledged testing framework. There are already a number of frameworks out there but this was one particular wheel that I wanted to reinvent because I wanted a tool that exactly matched my requirements and way of working. Testing style and methodology for me is an intimately personal thing which had to just *feel right* if I was to practise it in a disciplined and methodical fashion. So I set about writing [WOTest](http://test.wincent.com/).

I had left WOTest on the back burner for a while though to work on more important things (well, at least [things that customers felt were more important](http://synergyadvance.com/)). Apple's recent announcement that it will be moving to Intel processors has dramatically changed my priorities.

Automated testing will now be more important than ever because now we'll all be developing for two platforms. It will no longer be enough to test "on the Mac". Now we must test on the Mac (PowerPC) and on the other Mac (Intel) too. There are all sorts of untested assumptions that could end up biting us and I'd prefer to be protected.

I've bitten the bullet and ordered the Developer Transition Kit (my credit card company must love me) and I've spent the last few days working on WOTest again. It was a great feeling to get to that "bootstrap" point at which WOTest could actually test itself:

    Run summary:
    Tests run:           551
    Tests passed:        396 + 155 expected failures (100.00% success rate)
    Tests failed:        0 + 0 unexpected passes (0.00% failure rate)
    Uncaught exceptions: 0

Because it's a test framework I have to be sure that it not only knows how to handle success cases but failure cases as well. That's why you see two numbers in the "Tests passed" row above; one is the number of tests that passed (and which I expected to pass) and the other is the number which failed (and which I expected to fail). It's necessary to verify that tests not only work when you expect them to work but also that they *don't* work when you don't expect them to work.

I still have a few more days of work before I'll consider it to be "finished" to 1.0 level, but the major design work has been tackled and now all that remains is writing tests and handling some implementation details. It's quite a powerful framework with a lot of functionality, and seeing as I have to have an extreme degree of confidence in the framework itself I will be writing lots and lots and lots of tests for it. I've written over 500 so far but I expect the final figure could easily top 2,000 or more. It's not as bad as it sounds as they are quite easy to write, but still there are a lot of them...

As I note on the [WOTest page](http://test.wincent.com/) this is an internal-use-only piece of software for now but if there's enough interest in making it available I'll think about what would be the best way to distribute it to developers in the future (what kind of license I should use and so forth). Let me know if you have any ideas.
