---
title: Programming challenges
tags: blog
---

There are two kinds of problems in computer programming: stimulating ones and annoying ones. The former are generally the problems you face when inventing something new; the latter are the ones you face when your development tools suddenly start behaving like unruly children.

Tonight I've had to deal with an annoying one.





Code that's been working for months suddenly stops working. The first thing you try to do is run it under the debugger to see what's going wrong. It works perfectly. So you realize that this is a problem which only happens in release builds.

This is annoying because the code in question is identical. There are no `#ifdef` directives or anything else which would cause the generated code to be different in the release build.

It's doubly annoying because by definition you can't run release code in the debugger (no debugging symbols available). You try anyway but it doesn't work. So instead of using the debugger you have to use old-fashion `NSLog` statements to find out where the code is falling down. Doubly annoying because after you've sprayed these statements over the problem section you'll only have to go back and remove them all by hand later on.

You eventually find the point of failure and through analysis discover that the failure is occurring because of a missing symbol. Annoying because the linker complained of no missing symbols. But armed with that knowledge you can start digging around with `nm` seeing the differences between the release build and the debug build. Why are the symbols missing? You turn off stripping and the release build still doesn't work. You examine the executable and the necessary symbols are still missing.

Finally after a good two hours of painstaking hunting you decide to see if dead-code stripping is the culprit. Lo and behold, it is. The symbols that you've explicitly marked for exporting have been culled by dead-code stripping. So you rewrite your `EXPORT` macro definition from:

    #define EXPORT __attribute__((visibility("default")))

To:

    #define EXPORT __attribute__((used)) __attribute__((visibility("default")))

`nm` now confirms that the symbols are there and the release build starts working again. It's now 5 AM. Sure, perhaps I should have realized sooner, but one does one's best. Better still I would have written the `EXPORT` macro like that the first time around.

This kind of problem is annoying rather than stimulating because there's no logic involved in it. It's not an intriguing puzzle. It's not like a game of Sudoku or trying to figure out a new algorithm. It doesn't involve writing any code (except for the ugly `NSLog` statements with which you are obliged to pepper your code). It doesn't feel like a creative struggle; rather, it feels like a struggle *against* the tools which are supposed to be enabling you, and pointless struggle too because you're doing all this stuff just to fix something broken that used to work fine last month, and you hadn't touched anything to break it. Instead of having a couple-hundred lines of new code to look back at the end of your labours all you have is an empty feeling and a slight headache.

You can point the finger at the Apple documentation which suggested you write your macro like that (inadequately) in the first place. Or you can blame yourself for not reading the dead-code stripping documentation carefully enough, or for not having it in mind when the problem started. Or you can blame the fact that you're working with a large and complex system, and it's just been luck that you've not run into this issue in the past. Whatever the case, it's not fun.
