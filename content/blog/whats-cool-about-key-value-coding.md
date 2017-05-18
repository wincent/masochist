---
title: What's cool about Key-Value Coding?
tags: blog
---

Thanks to Key-Value Coding and a [nice method on `NSArray`](http://developer2.apple.com/documentation/Cocoa/Reference/Foundation/ObjC_classic/Classes/NSArray.html) you can do nice things like this...





     - (BOOL)panel:(id)sender shouldShowFilename:(NSString *)filename
     {
    -    NSEnumerator *enumerator = [[self identities] objectEnumerator];
    -    SSHIdentity *identity = nil;
    -    while ((identity = [enumerator nextObject]))
    -    {
    -        if ([filename isEqualToString:[identity path]])
    -            return NO;
    -    }
    -    return YES;
    +    NSArray *filenames = [[self identities] valueForKey:@"path"];
    +    return (![filenames containsObject:filename]);
     }

That's 8 lines of messy, inefficient code replaced with 2 simple lines whose intention and purpose are much clearer.
