---
title: To wrap or not to wrap?
tags: blog
---

For a long, long, long, long time now I've hard-wrapped all of my source code to 80 columns. Why might you do this when there is a lot of Objective-C code out there that doesn't use any limit at all? (examples: [Adium](http://trac.adiumx.com/browser/trunk/), [Camino](http://bonsai.mozilla.org/rview.cgi?dir=mozilla/camino&cvsroot=/cvsroot&module=default), [Colloquy](http://project.colloquy.info/trac/browser/trunk); there are many others). As [one coder says](http://www.sowbug.org/mt/archives/000192.html):

> We're stocking new engineers with dual 1920x1200 widescreens. That's the equivalent of six side-by-side VGA screens! In spite of this growth over the years, my basic monitor real-estate coding rules haven't changed: stay within 80 columns, and try to keep each function short enough to fit vertically on a single screen.





### Arguments for wrapping

Most of the arguments for wrapping boil down to the same basic idea: anything you can do to increase the readability of your code (the ease with which you can take in a slab of code at a glance) is going to help you develop better code (more robust, better designed, less buggy code) and develop it faster.

#### Displays the same everywhere

Because 80 columns is pretty much a "lowest common denominator", it's fairly likely that your source code will look the same to everyone, whether they are viewing it in a tiny terminal window or stretched out across a 30" Cinema Display.

#### Email

Code and patches wrapped to 80-columns tend to look pretty good when sent as plaintext email.

#### Enforces nesting discipline

If you start nesting code too many levels deep you'll find it hard to keep under the 80-column limit. It's a handy sign that you're probably nesting too much; if you refactor the code so that it requires fewer levels of nesting it will often be clearer and more readable to others.

#### Encourages good variable naming habits

The 80-column limit is not so strict that you'll end up labelling all of your variables `i`, `objPtr` and `errPtr`, yet neither is it so liberal that you slip into the bad habit of cooking up variable names like `pointerToPreviouslyInstantiatedSingletonInstance`. Somewhere in the middle between those two extremes you'll find the readability sweet spot.

### Arguments against wrapping

#### Wrapping to 80 columns can be diffcult

As much as you might try to find variable names in the "just right" length range you will sometimes be forced to deal with beasts like the `NSPropertyListSerialization` class and you'll find it very difficult to fit things neatly in an 80-column limit.

#### Reformatting can be painful

If you have edit and re-edit the same block of text many times you may find yourself having to juggle words repeatedly so as to continue sticking to the 80-column limit. This means both reducing line length when lines get too long and increasing line length to use up wasted space when lines get too short.

For this very reason some time ago I introduced an exception into my "80-column rule". Basically all code and normal comments would still be subject to the limit, but Headerdoc (and later, Doxygen) comments would not be subject to any hard-wrapping at all. I did this because the in-code documentation was just being edited too many times and I was wasting a lot of time worrying about wrapping. The arguments for readability didn't apply to in-code documentation comments because those would be transformed into HTML anyway by Doxygen.

#### Readability can actually suffer

What's more readable? This (wrapped to 80 columns)?:

    NSString *executable = 
            [self objectForInfoDictionaryKey:(NSString *)kCFBundleExecutableKey];

Or this (not wrapped)?:

    NSString *executable = [self objectForInfoDictionaryKey:(NSString *)kCFBundleExecutableKey];

#### 80 columns is too small

Perhaps it's good to have a non-arbitrary limit, but in this day and age of big screens and high resolutions maybe 80 columns is too small. Perhaps 132 columns would be a good candidate (neither number is entirely arbitrary: historically many terminals have offered 80 and 132-column modes). It seems that this would address some of the main complaints about hard-wrapping without throwing away the readability benefits. Importantly, two 132-column windows can fit comfortably side-by-side on a 23" display.

### Conclusions

I'm thinking about making the switch to 132-columns. If you have any thoughts on comments on the issue I'd greatly appreciate hearing them (either [in the forums](http://www.wincent.com/a/support/forums/postlist.php?Cat=0&Board=lounge) or [directly via email](http://www.wincent.com/a/contact/mail/)).
