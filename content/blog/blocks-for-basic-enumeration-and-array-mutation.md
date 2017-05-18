---
title: Blocks for basic enumeration and array mutation
tags: ruby objective.c blog
cache_breaker: 1
---

A fairly common pattern in many programming languages is iterating over a collection and mutating the elements in some way. Some languages provide built-in support for this kind of thing, while others need a simple in-place implementation such as an explicit `for` loop. In languages without built-in support, we could consider trying to extract this common pattern into a reusable unit in some way.

Which do you prefer?

# Ruby

Here we start with `dir` (a `String` containing the absolute path to a directory) and `filenames` (an `Array` of filenames):

```ruby
filenames.map { |filename| "#{dir}/#{filename}" }
```

Advantages:

-   concise, elegant and idiomatic
-   `map` method comes for free with the language

Disadvantages:

-   like all [Ruby](/wiki/Ruby), it is relatively slow

# Objective-C 2.0 (blockless)

This time we have `dir` (a pointer to an `NSString`) and `filenames` (a pointer to an `NSArray`):

```objc
NSMutableArray *paths = [NSMutableArray arrayWithCapacity:[fileNames count]];
for (NSString *fileName in fileNames)
    [paths addObject:[dir stringByAppendingPathComponent:fileName]];
return [paths copy]; // return immutable
```

Advantages:

-   simple and fast
-   self-contained (fast enumeration and other methods come with the runtime and system libraries)

Disadvantages:

-   relatively verbose compared to [Ruby](/wiki/Ruby)

# Objective-C 2.0 (with block-based "map" method)

Again with the same variables:

```objc
return [fileNames map:^(id fileName) {
    return (id)[dir stringByAppendingPathComponent:fileName];
}];
```

Advantages:

-   captures some of the elegance of the Ruby version

Disadvantages:

-   hampered by noisy syntax
-   requires external support method (`map:`), although said method is reusable

# Objective-C 1.0 `for` loop (C99)

```objc
NSMutableArray *paths = [NSMutableArray arrayWithCapacity:[fileNames count]];
for (unsigned i = 0, max = [fileNames count]; i < max; i++)
{
    NSString *filename = [fileNames objectAtIndex:i];
    [paths addObject:[dir stringByAppendingPathComponent:fileName]];
}
```

Advantages:

-   simple and fast
-   self-contained

Disadvantages:

-   even more verbose than the Objective-C 2.0 version

# Objective-C 1.0 `for` loop (pre-C99)

```objc
NSMutableArray *paths = [NSMutableArray arrayWithCapacity:[fileNames count]];
unsigned i, max;
for (i = 0, max = [fileNames count]; i < max; i++)
{
    NSString *filename = [fileNames objectAtIndex:i];
    [paths addObject:[dir stringByAppendingPathComponent:fileName]];
}
```

Advantages:

-   simple and fast
-   self-contained

Disadvantages:

-   the most verbose version so far

# Objective-C with extracted method

First the extracted method:

```objc
@interface NSMutableString (WOStringPrepending)

- (void)prependString:(NSString *)aString
{
    [self insertString:aString atIndex:0];
}

@end
```

And now for the code which uses it:

```objc
NSMutableArray *mutablePaths = [NSMutableArray arrayWithCapacity:[fileNames count]];
for (NSString *fileName in fileNames)
    [mutablePaths addObject:[fileName mutableCopy]];
[mutablePaths makeObjectsPerformSelector:@selector(prependString:) withObject:dir];
return [mutablePaths copy] # return immutable;
```

Advantages:

-   ?

Disadvantages:

-   Requires pre-processing phase ensuring that all array elements are mutable
-   Requires cluttering up `NSString` class with additional utility method
-   Although the returned array is immutable, the contained objects are not, and if we want them to be so we would have to perform yet another iteration
-   Inefficient (2 to 3 separate iterations)

There are other candidates we could have chosen here for our "extracted" method but they all suffer from similar disadvantages.

For example, if we choose to make a `stringByPrependingString:` method we would avoid our need to make mutable copies of all the strings but we would need to introduce a new temporary variable with the path separator (`/`) already appended after our `dir`.

There are other alternatives still which would be even more unworkable. If we chose to pass in `stringByAppendingPathComponent:` to our `makeObjectsPerformSelector:withObject:` call, we end up having to pre-populate an array with multiple copies of our `dir` string, but we run into a dead-end because we can't change the "object" parameter as we iterate.

# So which to choose?

Which one of these would you go for then in your Objective-C program?
