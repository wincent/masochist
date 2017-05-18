---
title: HOM improvements
tags: blog
---

One of the things which tricked me when I [first started](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2006/11/wocommon_r165_8_items_changed.php) with [HOM](http://www.wincent.com/a/about/wincent/weblog/archives/hom/) (an entire 6 days ago) was that I would see examples like this:

    [[collection select] hasPrefix:@"foo"];

And assumed that I could write things like:

    [[[collection select] stringValue] hasPrefix:@"foo"];

It turns out that you have to write this:

    [[[collection selectWhere] stringValue] hasPrefix:@"foo"];

This is an unfortunate breakdown of a couple of the key principles that underlie HOM: "think about intentions, don't get distracted by implementation details", and "make your intentions clear". You have to worry about two different HOM patterns "select" and "select where" for what is essentially exactly the same operation: selecting items from a collection based on a yes/no criteria. You have one variation which consists of a prefix message followed by an argument message, and you have another that consists of a prefix message followed by two argument messages.

In my implementation of this pattern that means having one class for handling the first variation (`WOHOMSelectProxy`) and another pair of classes for handling the second one (`WOHOMSelectWhereProxy` and `WOHOMWhereProxy`). This works but you're probably wondering what you do if you ever want to send more than two argument messages... (And yes, I've chosen to use different classes for different types of trampoline behaviour; this allows me to keep my source files shorter and more manageable, group my unit tests into smaller, more manageable groups, and import *only* the HOM functionality that I am interested in for any given project rather than having to link to a gigantic framework.)





So last night it occurred to me that this distinction between the two variations was unnecessary. I've [just checked in](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2006/11/wocommon_r186_14_items_changed.php) a new HOM class, `WOHOMChainedSelectProxy`, that allows you to use a single HOM regardless of whether you're doing a straight "select" or a "select where". It's "chained" because you can chain as many levels together as you want: one, two, three, four, the sky is the (non-arbitrary) limit. In other words, all of the following work:

    [[collection select] hasPrefix:@"foo"];
    [[[collection select] stringValue] hasPrefix:@"foo"];
    [[[[collection select] stringValue] uppercaseString] hasPrefix:@"FOO"];
    [[[[[collection select] stringValue] uppercaseString] substringWithRange:NSMakeRange(2, 3)] isEqualToString:@"FOO"];

Don't ask me *why* you'd ever want to nest things that deeply; the important thing is that you *can* if you want to. Just as Objective-C allows (and even encourages) you to nest message sends, and key-value coding allows you to create path chains by writing things like @"stringValue.lowercaseString", and Objective-C 2.0 will feature a property syntax that allows you to chain your property accesses by writing things like `stringValue.length`, I think HOM should allow you to do the same too when you want.

Previously the only way to hack this kind of arbitrarily long chain together would be to mix in "collect" messages between your other argument messages, which would be terribly inefficient, terribly ugly, and terribly cumbersome, thus throwing the whole simplifying purpose of HOM out the window:

    [[[[[[[[collection collect] stringValue] collect] uppercaseString] collect] substringWithRange:NSMakeRange(2, 3)] select] isEqualToString:@"FOO"];

Apart from ridding us of an arbitrary distinction and accompanying limitation, the new code addresses the concerns about getting distracted by implementation details. Don't think about using "select" or "select where", just go ahead an use "select".

All of this comes at a very small performance cost. I'll shortly post an article with some numbers to back this up, but I believe that the single-level select (equivalent to the old "select" HOM) and the two-level select (equivalent to the old "select where" HOM) will be basically the same. Once you start nesting more deeply your set-up costs will go up but there are generally up-front costs and once the iteration has begun things will go relatively quickly. If you find that you have to nest too deeply and the speed is a problem then it is probably a hint that your design is bad; it's hard to think of too many cases where you would want to chain to more than two levels.

The new pattern eliminates one of the areas in which the `valueForKey:` method in the `NSArray` class had the edge. Previously, if you wanted to chain together multiple levels using the "select where" HOM you had to engage in this kind of kludgery:

    [[[collection selectWhere] valueForKey:@"stringValue.lowercaseString"] isEqualToString:@"foo"];

Now you can just write:

    [[[[collection select] stringValue] lowercaseString] isEqualToString:@"foo"];

And you can do something that was never possible using `valueForKey:` — pass parameters to the argument messages in the chain:

    [[[[collection select] stringValue] substringFromIndex:3] isEqualToString:@"bar"];

It's also interesting to compare the syntax for chaining argument messages used here with [the syntax](http://www.dpompa.com/?p=33) you'd need to use if you were using [Ofri Wolfus' HOM implementation](http://www.dpompa.com/?page_id=4):

    // this version should be instantly readable to most Objective-C programmers
    [[[[collection select] capitalizedString] lastPathComponent] hasPrefix:@"a"];


    // this the Wolfus version of the same:
    [collection selectWhere:MSG(capitalizedString), MSG(lastPathComponent), MSG(hasPrefix:@"a"), nil];

#### Concluding comments

This definitely isn't the only "select" HOM that you'll ever need. There is still a strong justification for [a "select first" HOM](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2006/11/wocommon_r184_23_items_changed.php), for example, because such a HOM is more efficient: rather than iterating of the entire collection it can stop and immediately return as soon as it finds the desired element. It can also explicitly return a single object rather than wrapping the found item up in a single-item array:

    // the "select first" version
    id item = [[collection selectFirst] hasPrefix:@"foo"];


    // the alternative is slower and less convenient
    NSArray *collection = [[collection select] hasPrefix:@"foo"];
    id item = [collection count] > 0 ? [collection objectAtIndex:0] : nil;


    // even if you define a "firstObject" method this is still less efficient:
    id item = [[[collection select] hasPrefix:@"foo"] firstObject];

The implementation could fairly easily be extended to the "collect" HOM as well (and others for that matter...) but with one important difference: such a "collect" HOM would need an a "suffix message" to serve as an end marker:

    [[[[collection collect] stringValue] lastPathComponent] endCollect];

This is because in the case of the "collect" HOM all argument messages effectively look alike; there is no way to automatically tell which is the final argument message in the chain. In many cases using the built-in alternative will be faster and more concise anyway:

    [collection valueForKey:@"stringValue.lastPathComponent"];

The only case where the HOM "collect" pattern is necessary is where you must pass arguments along with your argument messages. An (admittedly ugly) workaround enabling you to chain "collect" operations together is to interpolate as follows:

    [[[[collection collect] stringValue] collect] lastPathComponent];

But my policy with respect to implementing new HOM patterns at the moment is that I don't bother touching them until I actually run into a real-world case where I need the new pattern. HOM is basically an open-ended playground in which you could waste a lot of time building sand castles, so I'm carefully keeping only to stuff that I actually need/want to use.

Performance numbers on the code described in this post [coming soon](http://colaiuta.net/).
