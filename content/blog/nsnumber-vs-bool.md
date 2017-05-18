---
title: NSNumber vs BOOL
tags: blog
---

#### When is an `NSNumber` better than a `BOOL`?

I have a couple of macros that I define in my code:

    #define WO_YES [NSNumber numberWithBool:YES]
    #define WO_NO [NSNumber numberWithBool:NO]

This enables me to use `NSNumbers` just as easily as I would use simple booleans:

    variable1 = YES; // easy
    variable2 = WO_YES; // just as easy

But the `NSNumber` version has a significant advantage in that it allows us to distinguish between three states: true, false and unset. In comparison the `BOOL` version only allows us to distinguish between two states: true and not true:

    // test the object version
    if (variable1)
    {
        if ([variable1 boolValue])
            NSLog(@"variable 1 is set to YES");
        else
            NSLog(@"variable 1 is set to NO");
    }
    else
        NSLog(@"variable 1 is not set");


    // test the scalar version
    if (variable2)
        NSLog(@"variable 2 is set to YES");
    else
        NSLog(@"variable 2 is not set to YES");

As you can see, when testing the scalar version we can only tell if it's "true" or "not true"; there's no way for us to distinguish between "not true/set to false" and "unset".

#### When is a `BOOL` better than an `NSNumber`?

When you care about the overhead introduced by using a fully-fledged object instead of a simple `BOOL`. When you don't care about distinguishing between "set to false" and "unset". As always, you should make the decision based on the specific needs of the situation. In my code I use both my `WO_YES` and `WO_NO` macros and normal booleans.
