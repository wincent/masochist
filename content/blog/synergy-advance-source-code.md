---
title: Synergy Advance source code
tags: blog
---

I have decided to release lines 4452 to 4455 (inclusive) of the file, "WOSynergyAdvanceController.m", part of the source code for [Synergy Advance](http://www.wincent.com/a/products/synergy-advance/), into the public domain. The line numbers are subject to change, of course, but here is the excerpt as it currently stands:

    - (NSString *)synergydName
    {
        return [WO_SYNERGYD_NAME stringByAppendingPathExtension:@"app"];
    }

Well, as you may have guessed, this entry is a bit of a joke. That code in itself isn't very useful and it won't compile because it's missing a macro definition and some context. But I post it here for three reasons: (1) It's Sunday and I'm a little bored; (2) Because I love short methods (they're much easier to maintain); and (3) Because it's interesting that the controller is such a long source file.

At the moment the whole file is nearly 6,000 lines long. This is one hell of a controller class. Just think how long it would be if it weren't for [Cocoa Bindings](http://developer.apple.com/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html) (probably twice as long and twice as ugly).

I generally favour breaking things up into smaller, more manageable units. I like small, simple classes that do one job and do it well (the implementation of my iChat controller class, for example, is only 177 lines long). But the truth is that the main controller doesn't really lend itself to being broken up into smaller units. I could split some functionality into categories in separate files but that wouldn't really change the fact that the class as a whole is one logical unit.

But it's not really as bad as it sounds. 2,000 of those lines are accessor methods, all of which were generated using [Accessorizer](http://www.kevincallahan.org/software/accessorizer.html). Yes, the class has *a lot* of instance variables, but creating the accessors for them was relatively painless.

You can subtract another few hundred lines for defines, constant declarations and other such stuff which isn't really code in the sense that it doesn't actually execute, it's just there to support the rest of the class.

Really, the bulk of the file comes from the fact that Synergy Advance can do a lot of things. If your menu contains a hundred menu items that do a hundred different things then you've got to write the code that implements those things somewhere. Sure, you can write general methods that you reuse whenever possible, but there's only so much coding that can be avoided by pointing, clicking, and hooking-up in Interface Builder.

\[Ironically: I later got rid of the method which I used to open this post.\]
