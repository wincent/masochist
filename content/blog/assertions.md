---
title: Assertions
tags: blog
---

In "[Disable assertions and logging in your Release build](http://chanson.livejournal.com/169786.html)" [Chris Hanson](http://chanson.livejournal.com/) makes the case for, um, Disabling assertions and logging in your release builds. He later follows this up with "[Distinguish between checks and assertions](http://chanson.livejournal.com/170068.html)".

For my first couple of years as a Cocoa programmer I almost never used assertions. When I wanted to test for programming errors I would do an explicit test, create an exception and explicitly raise it. This was fairly verbose so I didn't do it very often.

Then I discovered the joy of assertions and have been using them increasingly over the last few years. It's part of the [fail early](http://www.wincent.com/knowledge-base/fail%20early) philosophy that complements [unit testing](http://www.wincent.com/knowledge-base/unit%20testing) so well.

I never used to turn off assertions in release builds because I figured the speed hit was negligible, and I wanted my shipping code to be the same code that I had tested during development. Why test one thing and then ship something different to customers?

But as my projects have grown larger I've leaned towards turning off assertions in release builds for two reasons:

1.  If your testing processes are adequate then it should be safe to turn off assertions in release builds. In other words, not having them in your shipping code should only be a problem if that code is buggy; if you make testing an integral part of the development process then you won't be shipping buggy code.
2.  As your projects get bigger then it becomes more desirable to reduce your memory footprint and save a few CPU cycles in order to get better performance.

I haven't yet shipped a product with assertions disabled, but I have been thinking about doing so soon. Reading Chris's post made me realize that there is still a little more work to be done before I can go ahead and flip the switch. Chris uses the example of a method that should throw an `NSRangeException` if passed an out-of-range input parameter:

> You might be tempted to implement this using a form of assertion, since by default assertions in Cocoa will throw an exception. But remember, this is part of the API contract of your class, not just an internal detail that should never go wrong! Thus if you do implement this using an assertion, and you disable assertions in your Release build, your Release build will wind up implementing your API incorrectly.





My problem is that I have been using `NSParameterAssert` extensively for a long time now to enforce the [API](http://www.wincent.com/knowledge-base/API) contract of my classes. That is, I generally have three aspects that must all match up:

1.  Inline [Doxygen](http://www.wincent.com/knowledge-base/Doxygen) documentation which states, "If passed `X` raises `Y`".
2.  Unit tests which check that if passed `X`, does indeed raise Y.
3.  In the implementation itself, use of `NSParameterAssert` to raise `Y` if passed `X`.

Once I turn off assertions in release builds my unit tests will break and my implementation will no longer conform to the description in the documentation.

So drat, I now have to make a new macro, let's call it `WOParameterCheck` and use it to replace all my calls to `NSParameterAssert`. `WOParameterCheck` will remain active even when assertions are turned off. I guess I fell into this trap because the name `NSParameterAssert` made me think about parameters and API contracts. And it was just too darn convenient.

My code already had a very clean division between assertions, error conditions and exceptions.

-   Assertions are for checking for programming errors: a failed assertion is evidence of a programming error or an incorrect assumption (which itself is just a class of programming error). That is, a failed assertion is always "my fault".
-   Exceptions are for signalling unexpected conditions outside the control of the programmer: you should be prepared to catch exceptions and deal with them appropriately. Exceptions are for things that are *not* "my fault", but I should be prepared to deal with them (and failure to do so is once again "my fault").
-   Error conditions: every time you make a call to another API you should be prepared to check the return value for an error code or `nil` return value. Error conditions are just like exceptions in the sense that they signal unexpected conditions outside of your control. Likewise, even though the error condition is not "your fault", failure to handle it makes it so.

Evidently my use of `NSParameterAssert` made the separation not clean enough, by blurring the line between assertions and exceptions. I guess we'll just have to add this to the "[Don't repeat the mistakes I made](http://www.wincent.com/knowledge-base/Don%27t_repeat_the_mistakes_I_made)" list.
