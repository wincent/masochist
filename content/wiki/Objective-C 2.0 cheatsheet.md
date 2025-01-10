---
tags: objective.c wiki cheatsheet
title: Objective-C 2.0 cheatsheet
---

# Properties

## Basic syntax

    @property type name;

Or:

    @property(attributes) type name;

For example:

    @property(copy)     NSString *summary;
    @property(readonly) int      status;

## Attributes

-   `readonly` or `readwrite` (the default)
-   `assign` (the default), `retain`, `copy`
-   `nonatomic`
-   `getter=name`
-   `setter=name`

## Common patterns

Read-only public accessors, read/write private accessors:

    // in the header, WOAmazingClass.h:
    @interface WOAmazingClass : NSObject {
        int      status;
        NSString *name;
    }

    @property(readonly)       int      status;
    @property(readonly, copy) NSString *name;

    @end

    // in the implementation, WOAmazingClass.m:
    @interface WOAmazingClass () // private category
    @property                 int      status;
    @property(readonly, copy) NSString *name;
    @end

Including "is" in the getter accessor for booleans:

    // this will give us isHidden and setHidden: accessors
    @property(getter=isHidden) BOOL hidden;

# See also

-   <http://the-lazy-programmer.com/blog/files/Objective-C%20cheat%20sheet.pdf>
