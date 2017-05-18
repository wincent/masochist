---
tags: wiki
---

-   Don't use [NSCopyObject](/wiki/NSCopyObject)
-   [NSCell](/wiki/NSCell) uses it (for now...)
-   Don't count on [NSCell](/wiki/NSCell) using it in the future
-   In [NSCell](/wiki/NSCell) subclasses when you implement [copyWithZone:](/wiki/copyWithZone%3a) don't go through public accessor methods:

<!-- -->

    - (id)copyWithZone:(NSZone *)aZone
    {
        id thing = [super copyWithZone:aZone];
        [thing setVar:[NSColor greyColor]];
        return thing;
    }

-   Use dereferencing instead:

<!-- -->

    - (id)copyWithZone:(NSZone *)aZone
    {
        id thing = [super copyWithZone:aZone];
        thing->var = [var copyWithZone:aZone];
        return thing;
    }

-   This advice is applicable more generally as well:
    -   Don't use public accessor methods in [init](/wiki/init) methods
    -   This is because subclasses would otherwise have to worry within their accessor methods about whether or not they were fully initialized at the time those accessors were used
    -   Don't use them in [copyWithZone:](/wiki/copyWithZone%3a) either because that method is effectively the [init](/wiki/init) method of the new object
    -   This doesn't break encapsulation because it's just like referring to [self](/wiki/self) from within [init](/wiki/init)
