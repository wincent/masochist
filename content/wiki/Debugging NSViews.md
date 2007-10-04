---
tags: cocoa
---

When I recently wrote a [weblog](/wiki/weblog) [entry](http://wincent.com/a/about/wincent/weblog/archives/2007/10/appkit_vs_found.php) about the difficulty of working with NSView subclasses Gus Mueller of [Flying Meat](http://flyingmeat.com/) was kind enough to send [this link](http://borkware.com/quickies/single?id=205) to me.

In short, you can get [AppKit](/wiki/AppKit) to highlight all views in an application, with nested subviews in different colors.

    # method 1: set persistent user defaults
    defaults write com.wincent.MyAppBundleIdentifier NSShowAllViews YES

    # method 2: pass default at launch time
    Example.app/Contents/MacOS/Example -NSShowAllViews YES
