---
title: Event log
tags: blog
---

I'll be continuing these entries in the "mini-log" on the left hand side of [my weblog](http://colaiuta.net/).

#### Wednesday 9 August

-   The new app is now "complete", meaning that it builds, runs, and basically does what it was designed to do. From here on it's polish and test, polish and test...
-   Refactored out some methods so that they can be separately unit tested; I want this product to be very heavily tested.
-   Added a full simulation to the preflight phase to detect potential problems that can't otherwise be detected.
-   Added GUI for some "power user" preferences that were previously command-line only.
-   Separate command-line tool for leveraging the app's functionality in the terminal.
-   "Show preview" now defaults to "on" by default; the preview is just too useful...
-   Optional transparency for preview window.





#### Tuesday 8 August

-   Upgrade to ClamAV 0.88.4.
-   Roll the 6000+ tests that come with PCRE into the unit tests for my new application. At this stage about 500 of them are failing from within the app (all pass on the command line) because my `WORegularExpression` class is not set up to use the full functionality of the PCRE library; will see what I can do about filtering out those failing tests so that they don't clutter the output.
-   Read about the WWDC keynote; Leopard and Xcode 3.0 sound brilliant, really looking forward to them both.
-   First high-level acceptance tests for the new app.

#### Monday 7 August

-   WOTest now differentiates its behaviour depending on whether it is running on Panther or Tiger; this required linking to the CoreServices framework (for `Gestalt`).
-   WOTest can now optionally trim path names when logging test results to the console; paths relative to the source root still result in clickable results in Xcode but look much cleaner than absolute paths.
-   Lots of refactoring in WOTest to make use of the extra space afforded by my new 132-column formatting policy (was 80 columns); TextMate's "Unwrap selection" feature (Control-Option-Q) can save a lot of time in that respect, so I am thinking of whipping up a quick Perl script to do the same from within Xcode.
-   Other WOTest cleanup (getting rid of unused methods), refactoring to maximize code re-use, and a new method, `runAllTests`. I'm happy to report that after all the aggressive refactoring all 2028 self-tests still pass.

#### Sunday 6 August

-   New class for WOTest, `WOTestBundleInjector`. Combined with the magic of the `BUNDLE_LOADER` build setting (passed to the linker via the `bundle_loader` option) and the `DYLD_INSERT_LIBRARIES` environment variable (plus one of my own, `WOTestInjectBundle`), this makes unit testing of application bundles much, much easier. `WOTestRunner` is still required for testing frameworks and other bundles, but that always was fairly straightforward to use.
-   Finished my PHP-to-HTML automated processing system for the production of in-application help documentation.
-   I've decided that using [ecto](http://ecto.kung-foo.tv/) under Rosetta is just too painful; this post comes to you from Safari.
