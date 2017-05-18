---
title: DSTROOT, install_name_tool and Interface Builder palettes
tags: blog
---

Yesterday I was working on getting [WinSwitch](http://winswitch.wincent.com/) up and running as a Universal Binary. One of the hold-ups has been that a couple of the frameworks that WinSwitch depends on, WOBezel and WOHotKey, have been under heavy development as part of my work on [Synergy Advance](http://synergyadvance.com/). This required some changes to WinSwitch to get the whole thing back into a buildable state.

One of the things that was broken was that I had refactored some classes in WOBezel. What used to be `WOBezelWindow` was now `WOAlertBezelWindow` and I had to update my nib files. But when I tried to open my nib files Interface Builder refused to open them because it couldn't unarchive the instances of `WOHotKeyCaptureView` in the nibs.

So it was time to get my WOHotKey Interface Builder palette working again, as well as the installable variants of my WOHotKey, WOBezel, WODebug and WOTest frameworks (these were previously broken in one of the many Xcode upgrades that have taken place since the last time I made changes to those nib files).

### Embedded vs Installable

In general I create all my frameworks as embedded frameworks for the following reasons:

-   All-in-one packages are easier to distribute (no need for an installer).
-   There's no possibility of a version mismatch between an application and older, installed frameworks.
-   The diskspace and bandwidth overheads are negligible in this day of cheap, massive hard disks and widespread broadband access.

But the trouble with embedded frameworks is that they require you to hardwire their install path to `@executable_path/../Frameworks`. Because of the hard-wiring you can't move those frameworks somewhere else (such as `/Library/Frameworks/`) and expect them to work. There *is* the new `@loader_path` macro which affords some flexibility but that only works on 10.4 and so it's not suitable for use with my frameworks (which at the time of writing must all run on 10.3 as well).

So in the past I've gotten around this problem by having two separate targets in each of my framework projects: one for the embedded version and one for the installed version. This sucked because it was yet another thing to worry about keeping in synch; if I made a change to one target I'd have to remember to make a change to the other. It also doubled the effective build time if I wanted to build both the embeddable and installable variants of a framework.

But that wasn't the only reason it was bad. I also had a bit of trouble with Xcode's `DSTROOT` build setting. Xcode has this to say about `DSTROOT`:

> The path at which all products will be rooted when performing an install build. For instance, to install your products on the system proper, set this path to '/'. Defaults to /tmp/$(PROJECT\_NAME).dst to prevent a "test" install build from accidentally overwriting valid and needed data in the ultimate install path.\
> \
> Typically this path is not set per target, but is provided as an option on the command line when performing an 'xcodebuild install'. It may also be set in a build configuration in special circumstances. \[DSTROOT\]

Now, reading this I said to myself, why not set it per-target? What's the difference between setting it per-target and passing it on the command line? Apple's Scott Tooker provides [this clarification](http://lists.apple.com/archives/xcode-users/2004/Jan/msg00534.html):

> The idea is that by default, when "installing" a build that the products go into a separate location where you can verify the contents before dittoing or copying the result into place (since a bad framework could seriously hose your system). Another benefit of installing into a separate location is this gives you a sparse root that can be turned into a package for distribution.\
> \
> By default this separate location is set to be /tmp (the build setting that controls this is $DSTROOT). Currently there is no UI for $DSTROOT. Although we don't recommend it, you can set DSTROOT to "/" to have things install in place.

Until I understood this I was setting my installable frameworks to be installed in `/Library/Frameworks/`. This had a number of undesirable side-effects:

-   It's not just that the products were being *installed* there, they were actually being *built* there; this means that a failed build would cause a previous, working version of the framework to be damaged or overwritten.
-   In many cases doing a "Clean All" would remove installed versions of all your frameworks, which can wreak havoc if you have applications running that depend on those frameworks (Interface Builder, for example).
-   Xcode puts a symbolic link to the installed framework in the `TARGET_BUILD_DIR`, thus making it impossible to have both an embeddable version in your `TARGET_BUILD_DIR` and an installed version in your `/Library/Frameworks/` directory.
-   Xcode had a lot of trouble find private headers for installed frameworks (which I like to store in my `TARGET_BUILD_DIR` rather than in inside the framework itself so that I don't have to worry about stripping them out before shipping the framework to users).

So what's the point of using `DSTROOT` if it brings all these problems with it? How is it better than merely copying the framework into place yourself using a shell script build phase? It seemed to me that the only reason you would use it is if you needed "sparse root that can be turned into a package for distribution", and that didn't apply to me.

### `install_name_tool` to the rescue

When I finally understood this I set about creating new aggregate targets in my framework projects for the purposes of creating installable variants. Aggregate targets are wonderful in this case because you can leverage the work already done in setting up the embeddable version of the framework: no need to keep two targets in synch with each other, no need to double your build times if you want to build both variants of the framework.

But that leaves the `@executable_path` problem to solve. This information was hard-coded in my frameworks and would render them inoperative once installed. This is where `install_name_tool` comes to the rescue. You can use it to change the install name of a framework and also the names of the dynamic shared libraries it depends on. Instead of building an entirely new version of the framework for installation purposes, your shell script merely copies it into place and then uses `install_name_tool` to massage it into shape (see the man page for [more information](http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/install_name_tool.1.html)). Package all this into a reusable shell script and you're laughing.

Obviously this is much, much faster than building a whole new version of the framework. It also neatly sidesteps all the problems mentioned above: there are no troublesome symbolic links left in your `TARGET_BUILD_DIR`, Xcode has no trouble finding private header files, and the frameworks are only copied into place (overwriting previously installed versions) if the build completes successfully so you won't have any problems "pulling the rug out from under" running applications.





### The last remaining problem to solve...

With this change I am very happy with my build process. If you've been reading this weblog with any regularity you'll see that over the past few weeks I've been [working hard at addressing](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/xcode_inputoutp.php) [bugs in Xcode's Input/Output Files functionality](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/two_annoying_xc.php), reducing excessive build times caused by [automatic build number embedding](http://www.wincent.com/a/about/wincent/weblog/archives/2006/01/embedding_build.php), implementing a [home-made version of `InfoPlist.strings` file preprocessing](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/xcode_feature_r.php), rolling out a [configuration file](http://www.wincent.com/a/about/wincent/weblog/archives/2006/01/build_setting_i.php) infrastructure across all my projects, and converting many, many dependent sub-projects into mere targets within their parent projects (for less overhead, faster builds, better dependency analysis, easier management and better searchability).

As a result of all this work my builds are faster than ever, more deterministic and reliable, and my maintenance load is way down. I've been rolling as much useful stuff as possible into my "[buildtools](http://www.wincent.com/a/news/archives/2006/02/wincent_strings.php)" tool set. I've finally achieved the holy grail of version numbering: the ability to set the version number in a single place and have it propagate everywhere it's needed (the `Info.plist` and all `InfoPlist.strings` files, and embedded in the application itself in places like the "About" box and visible on the command line via the `what` tool).

All of this has required literally weeks of work, but the long-term benefits will be obvious. From here on it will be much less time spent doing [the clickety-click dance in Xcode](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/clicketyclick.php) and waiting for builds to complete, and more time spent coding! There are currently no major Xcode bugs which are draining my productivity because I've implemented satisfactory workarounds in all cases. (There *are* still *minor* productivity-draining bugs, but I've filed bug reports, they've been marked as duplicates, and I am confident that Apple will eliminate them in the not-too-distant future.)

There is now only one last remaining problem to solve: how to integrate the automatic production of unstripped release builds in the build process. At the moment I have two configurations, "Debug" and "Release". The "Debug" builds are gigantic because they contain an immense quantity of symbols. These cannot be shipped to customers due to their size; they may also be slower, and they are more vulnerable to reverse engineering. The "Release" builds are slim because the symbols have been stripped but the stripping makes crash reports hard to read.

Consider this report:

    Thread 0 Crashed:
    0   com.apple.Foundation        0x92902340 _NSRaiseError + 264
    1   com.apple.Foundation        0x929b36e0 -[NSAssertionHandler handleFailureInMethod:object:file:lineNumber:description:] + 112
    2   com.wincent.WOBase          0xc80021fc 0xc8000000 + 8700
    3   libobjc.A.dylib             0x909c0568 call_class_loads + 164
    4   libobjc.A.dylib             0x909c047c call_load_methods + 124
    5   libobjc.A.dylib             0x909bb2e8 map_images + 760
    6   dyld                        0x8fe0f8b4 ImageLoaderMachO::doNotification(dyld_image_mode, unsigned, dyld_image_info const*) + 108
    7   dyld                        0x8fe03a38 dyld::notifyAdding(std::vector<ImageLoader*, std::allocator<ImageLoader*> >&) + 260
    8   dyld                        0x8fe0d8f4 ImageLoader::runInitializers(ImageLoader::LinkContext const&) + 80
    9   dyld                        0x8fe030a0 dyld::initializeMainExecutable() + 92
    10  com.wincent.SynergyAdvance  0x00007c2c 0x1000 + 27692
    11  com.wincent.SynergyAdvance  0x00007a28 0x1000 + 27176
    12  dyld                        0x8fe01048 _dyld_start + 60

You'll notice that in frame 2 (inside the WOBase framework) and frames 10 and 11 (inside Synergy Advance itself) there is no human-readable symbol information, just numeric addresses. What methods correspond to these addresses? Where did the crash occur? There's no way of knowing by looking at this report.

Now compare it with this one (for a different crash), in which the symbol information has not been stripped. Here I can see at a glance that the crash stems from something that happened in the `initialize` class method of the `WOTickerController` class:

    Thread 0 Crashed:
    0   com.apple.Foundation        0x90a5c740 _NSRaiseError + 0xf8
    1   com.apple.Foundation        0x90a5c624 +[NSException raise:format:] + 0x2c
    2   com.apple.Foundation        0x909fcee8 -[NSObject(NSForwardInvocation) forward::] + 0xb0
    3   libobjc.A.dylib             0x90836810 _objc_msgForward + 0xb0
    4   libobjc.A.dylib             0x908329e0 class_initialize + 0x140
    5   libobjc.A.dylib             0x90831524 _class_lookupMethodAndLoadCache + 0x84
    6   libobjc.A.dylib             0x90831298 objc_msgSend + 0xb8
    7   com.wincent.SynergyAdvance  0x0000b070 +[WOTickerController initialize] + 0x14c
    8   libobjc.A.dylib             0x908329e0 class_initialize + 0x140
    9   libobjc.A.dylib             0x90831524 _class_lookupMethodAndLoadCache + 0x84
    10  libobjc.A.dylib             0x90831298 objc_msgSend + 0xb8
    11  com.apple.AppKit            0x92ebc368 -[NSCustomObject nibInstantiate] + 0x100
    12  com.apple.AppKit            0x92deb5c0 -[NSIBObjectData instantiateObject:] + 0xbc
    13  com.apple.AppKit            0x92df25ec -[NSIBObjectData nibInstantiateWithOwner:topLevelObjects:] + 0x88
    14  com.apple.AppKit            0x92ee42f8 loadNib + 0xfc
    15  com.apple.AppKit            0x92e3b55c +[NSBundle(NSNibLoading) _loadNibFile:nameTable:withZone:ownerBundle:] + 0x2e8
    16  com.apple.AppKit            0x92eba3f4 +[NSBundle(NSNibLoading) loadNibFile:externalNameTable:withZone:] + 0x9c
    17  com.apple.AppKit            0x92ecbbe8 +[NSBundle(NSNibLoading) loadNibNamed:owner:] + 0x174
    18  com.apple.AppKit            0x92eba25c NSApplicationMain + 0x174
    19  com.wincent.SynergyAdvance  0x0000aa10 _start + 0x188 (crt.c:267)
    20  dyld                        0x8fe1a558 _dyld_start + 0x64

Apple's [Technical Note 2123](http://developer.apple.com/technotes/tn2004/tn2123.html) talks about how to make sense of crash reports:

> The good news is that you can have your cake and eat it too. If you set up your build environment correctly, you can ship a program with export-only symbols to your users and still be able to map addresses in a crash log to their symbolic names.

So my current task is to work out what the best way is to make the production of non-stripped release builds occur in an automatic fashion. In the past I had a separate build style (in addition to "Debug" and "Release"); call it "Release+symbols" or "Release-no-strip" or "Release (unstripped)", whatever takes your fancy. I've made so many changes to my build chain lately that these old styles no longer work so I'll have to start again from scratch.

Most likely I'll have to turn off linker support for symbol stripping and instead perform stripping in a separate shell script build phase using the `strip` tool. But as Apple's Eric Albert [notes](http://lists.apple.com/archives/Xcode-users/2005/Nov/msg00588.html), this will probably produce slightly different results:

> Symbol stripping with strip is different from symbol stripping at link time. In particular, the linker has additional information about the layout of your executable that strip doesn't have, so it can strip slightly more.

So will report back here if I gain any useful insights while working on the problem.

\[**Update:** *22 March 2006*; [Andy O'Meara](http://www.55ware.com/about-andy.html) (of [G-Force](http://www.55ware.com/g-force/index.html) fame) has made an [interesting post](http://lists.apple.com/archives/Xcode-users/2006/Mar/msg00552.html) to the [Xcode users mailing list](http://lists.apple.com/mailman/listinfo/xcode-users) about his own approach to tackling this problem.\]
