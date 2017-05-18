---
title: Code cleanup
tags: blog
---

[A post](http://www.omnigroup.com/mailman/archive/macosx-dev/2006-September/059280.html) by Apple's Ali Ozer to the [Omni](http://www.omnigroup.com/)-run [macosx-dev mailing list](http://www.omnigroup.com/mailman/listinfo/macosx-dev) got me thinking about my current localization practices.

I'm pleased to report that as a result the `WOLocalizedStringsManager` class is going out the window to be replaced by a system with all of the benefits (centralized localization, encapsulation of some ugly verbosity, shorter and more readable code) but none of the costs (lower memory usage, less CPU cycles spent during set-up at runtime, no need to make `WOLocalizedStringsManager` subclasses). As an added bonus the code is much shorter and therefore easier to read. The necessary changes to support this have already been made to [buildtools](http://www.wincent.com/a/products/buildtools/).

And while in this frenzy of code cleaning I've identified a way to compress all those instances of `stringWithFormat:` all over the codebase, and it's nicely consistent with some of the similar tricks I'm already employing with `NSArray`, `NSDictionary`, `NSNumber` and friends. So all in all, quite happy with the changes.
