---
title: Test process improvements
tags: blog
---

Yesterday and today I've been working on improving the automated testing process used when building products like [Synergy Advance](http://advance.wincent.com/) and [Hextrapolate](http://hextrapolate.wincent.com/).





### Goodbye failing tests

I had some failing tests in place (`WO_TEST_FAIL`) to serve as reminders to go ahead and implement real tests at a later date. This is mostly in cases where the tests are fiendishly difficult to write (testing [GUI](http://www.wincent.com/knowledge-base/GUI) elements, for example) and I wasn't sure how to proceed.

So I've gotten rid of these placeholder tests and put good old-fashioned `TODO` comments in their place. This means that I can now do builds and expect 100% success rates; failure no longer means "look into this later", it now means "here's a problem that needs to be fixed right now". This is a change that I probably should have made a long time ago.

This in turn makes my automated [nightly builds process](http://www.wincent.com/s/nightlies/) more robust. Instead of manually reviewing the builds before allowing the nightly to proceed I am one step closer to letting them run truly automatically (for the time being I am still firing them off manually until I am 100% convinced that the process is bullet-proof).

### Notifications

The next thing I want to do is show Growl notifications when test runs finish, using the `growlnotify` [CLI](http://www.wincent.com/knowledge-base/CLI) tool. In the case of nightlies I'll make these "sticky" notifications so that they'll hang around on the screen even if I'm not in front of the computer at the time the nightlies run. In the case of normal builds I'll make them non-sticky.

### Truly continuous integration

My next step will then be to set up truly continuous automated testing for better [continuous integration](http://www.wincent.com/knowledge-base/continuous%20integration). The idea is to perform the following in the background in an endless loop:

-   Checkout an up-to-the-second copy of the project source code.
-   Perform a full build at a lower priority (using `nice`).
-   If any errors occur or unit tests fail, notify using `growlnotify`.

The idea is that instead of thinking about doing a change-build-test cycle you just think about changes: change, change, change, change, continuously advancing and letting the background tests notify you if one of your changes needs revision.

Thanks to [SVK](http://www.wincent.com/knowledge-base/SVK) (which provides a local mirror of the remote [Subversion](http://www.wincent.com/knowledge-base/Subversion) repository) this cycle can be performed without hitting the network. Thanks to `nice` all this should be possible without bogging down the machine (although more memory would be nice, I admit).

It shouldn't be too much work to set this up; I can probably just modify the current nightlies script and pass in a command-line switch to get the desired behaviour.

This is just one of the ways in which my recent work using [Ruby](http://www.wincent.com/knowledge-base/Ruby) to write [Walrus](http://walrus.wincent.com/) has made me a better programmer; working with the excellent [Autotest](http://www.wincent.com/knowledge-base/Autotest) suite prompted me to take this step.

### Packaging tests

Finally, I want to add some more tests that focus on the built product (testing the build process) rather than on the code (testing the code). I've found issues in the past where a piece of the program didn't work properly because of an issue external to the code; for example, an `Info.plist` file that was incorrectly encoded as [UTF-16](http://www.wincent.com/knowledge-base/UTF-16) rather than [UTF-8](http://www.wincent.com/knowledge-base/UTF-8) and which prevented a preference pane from being included in the list of available panes (but only in one of the localizations).

It might have been possible to catch this with normal unit tests, but only if I ran them all for each localization (which is something I should consider doing in the future anyway). This experience has happened more than once; it is all too easy for encodings to get mucked up in [Xcode](http://www.wincent.com/knowledge-base/Xcode) because of carelessness.

So I want to add some "packaging" tests to inspect the built product before it's considered satisfactory. Things like automatically checking the encoding on `plist` and `strings` files, making sure no expected items are missing from the final bundle, making sure no items which shouldn't be in the bundle are present (private headers, for instance), and so forth.

### RubyCocoa and RSpec

Those are exactly the kinds of tests that would be easiest to write in Ruby. In fact, I think that many, many unit tests would be easier to write in Ruby. [Apple](http://www.wincent.com/knowledge-base/Apple) is going to up their support of scripting bridges in [Leopard](http://www.wincent.com/knowledge-base/Leopard) and that means at some point in the future it is going to get a whole lot simpler to bridge between [Objective-C](http://www.wincent.com/knowledge-base/Objective-C) and [Ruby](http://www.wincent.com/knowledge-base/Ruby).

Ruby is great for writing tests for two reasons:

1.  Everything is an object: this means that you can specify expectations on literally anything at all, even `Fixnum` instances like `1` and `3`, and special values like `nil`, `true` and `false`.
2.  The amazing [RSpec](http://www.wincent.com/knowledge-base/RSpec) [BDD](http://www.wincent.com/knowledge-base/BDD) framework which leverages the everything-is-an-object design of [Ruby](http://www.wincent.com/knowledge-base/Ruby) to improve the readability of your specs:

<!-- -->

    # the RSpec way:
    thing.should == "foo"

    // the Objective-C way:
    WO_TEST_EQ(thing, @"foo");

There's nothing wrong with the [Objective-C](http://www.wincent.com/knowledge-base/Objective-C) way (using [WOTest](http://test.wincent.com/)) of course, but the RSpec way is nicer. Note that it works no matter what `thing` is; it can even be `nil` or `false` and the test will work as you would expect. The WOTest version will work too regardless of what `thing` is (it can be a `NULL` pointer, for instance) but it's not as elegant.

When I saw [RSpec](http://www.wincent.com/knowledge-base/RSpec) I wanted to modify WOTest to use a similar syntax (`should` and `shouldNot` messages added via a category on `NSObject`) using [Higher Order Messaging](http://www.wincent.com/knowledge-base/Higher%20Order%20Messaging) to allow expressions like:

\[\[thing should\] equal:@"foo"\];
But this could fall down if `thing` were `nil` and wouldn't work if `thing` were not an `NSObject` subclass.

Note that I use a `should` method that returns an anonymous proxy that captures the `equal:` method and then forwards it back to `thing` rather than using a single `shouldEqual:` method. This is to avoid cluttering the `NSObject` namespace.

I guess it could be done, but you could never go the full distance in Objective-C. That's one of the reasons I'm looking forward to [Leopard](http://www.wincent.com/knowledge-base/Leopard); I'm hoping that the RubyCocoa bridge will allow me to write specs in [Ruby](http://www.wincent.com/knowledge-base/Ruby) that can be used to test [Objective-C](http://www.wincent.com/knowledge-base/Objective-C) objects. Maybe using [RSpec](http://www.wincent.com/knowledge-base/RSpec) itself, or providing a bridge layer to tap into the existing WOTest machinery.
