---
title: Two annoying Xcode bugs
tags: blog
---

Last night between the hours of 4 and 5 AM I was battling against two annoying Xcode bugs (in fact, the late hour immediately upgraded them to "incredibly annoying").

### Annoying bug \#1

I spent about an hour wondering why any macros that I inserted into my `Info.plist` file where getting eaten when I turned on info property list preprocessing. For example, I have a macro defined like this:

    #define WO_INFO_PLIST_VERSION 1.2

When I tried to insert that into my property list it didn't work. On preprocessing it was replaced with nothing (ie. it disappeared); I *knew* the preprocessor was seeing the macro because it was removing it, but I had no idea why it wasn't *substituting* the appropriate content. There is little official documentation on how to do this. The one or two references that you'll find on the Apple site use examples like this:

    <string>$(PRODUCT_NAME)</string>

Nothing I tried would work. In desperation I tried various options.

    ${WO_INFO_PLIST_VERSION}
    $(WO_INFO_PLIST_VERSION)
    WO_INFO_PLIST_VERSION

I was puzzled because I'd used the preprocessing feature in the past with success (although "puzzled" was upgraded to "frustrated" via the automatic "Wee Small Hours Upgrade"). I then tried examples from the documentation (like `$(PRODUCT_NAME)`) and they didn't work either! What the hell was going on?

No matter what I did the output was the same. I began to doubt that Xcode was actually updating the file. So in between each build I was hand-deleting the property list file to make sure that a new one would be generated. The problem persisted.

Now, perhaps I could have solved this more quickly if I hadn't been so tired, but it was late and I wasted a good half hour before I hit "Clean" and everything worked. In short, the bug is:

> When info property list preprocessing is turned on, Xcode does not "see" modifications to the project's `Info.plist` file even when you make those modifications and save the file from within Xcode itself; it reuses the same, stale copy from the build intermediates directory over and over again. The workaround is to do a clean.

I am still too annoyed about this — and too busy trying to get the next preview release of Synergy Advance ready to ship — to file a bug report.

#### Update: March 2007

For some more insights into the different build settings for processing and preprocessing `Info.plist` files see [this Knowledge base article](http://www.wincent.com/knowledge-base/Setting_up_a_nightly_build_system).

### Annoying bug \#2

This next one isn't so bad, but it is a little pesky. For a long time now I've wondered why the shell script I use to update my strings files runs *every, single, build* even when no updates are necessary. The shell script adds between 30 to 60 seconds to each build and the effect is multiplied when the project in question is later included as a dependency of another, higher-level project.

The Apple docs say:

> Xcode uses the input and output files to determine whether to run the script and to determine the order in which the script is executed. Specifying input and output files ensures that Xcode runs the script only when the modification date of any of the input files is later than the modification date of any of the output files (reducing the time it takes to build your product), and that the files the script produces are included in the dependency analysis the build system performs before building your product. If you provide no outputs, Xcode runs the script every time you build the target.

In my case the input and output file settings were being totally ignored and I still don't know why. Tired of putting up with this, I modified my shell script so that *it* did the work that Xcode should have been doing (comparing modification dates before deciding whether to actually do anything). So chalk up another workaround for Wincent. It's still disappointing though, because it reduces the ease with which the same script can be reused in other projects.

These little bugs are annoying because they make you feel like you tools are working against you. Xcode is a tool. *It* should serve *you*. You use that tool to do your job. When your tool seems to be actively trying to thwart you and prevent you from doing your job it can start to rile...

### Some words of praise

But don't get me wrong, apart from little faults like this, I love Xcode. With each release it gets faster, more stable, more flexible. Most days it gives me no trouble at all and allows me to manage large and complex projects with aplomb.

And I tip my hat to Apple for making these tools available for free (true, I pay Apple $500 a year for membership in the [Apple Developer Connection](http://connect.apple.com/) but anybody can get the tools for free by signing up for a free ADC "Online" account). If they didn't offer them for free then I never would have decided to try out Project Builder four years ago and learn Cocoa (the result was [Synergy](http://www.wincent.com/a/products/synergy-classic/)). In general, both their tools and their documentation are of absolutely outstanding quality. It's one of the reasons why I can't stomach the idea of ever switching to Windows and closed, proprietary, non-free tools.
