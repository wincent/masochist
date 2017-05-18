---
title: Horrible idiom in Rails 3
tags: rails blog
cache_breaker: 1
---

Not sure whether this is something that's only started happening with Rails 3 or whether the codebase was already pockmarked with this horrible little idiom, but lately I've noticed a lot of examples of this pattern in Rails:

```ruby
require File.expand_path('../boot', __FILE__)
```

Replacing alternative idioms like:

```ruby
require File.join(File.dirname(__FILE__), 'boot')
```

# The motivation

Evidently the motivation is that:

1.  It's shorter to type by a few characters
2.  It's one message send instead of two

Saving a message send leaves the realms of "micro-optimization" far behind, blazing on into the unexplored regions of nano-, pico-, and even femto-optimization. The difference is literally unmeasurable because these lines typically get executed once in the lifetime of the application.

# Why it's horrible

The thing which irks me about this pattern is that it tries to be "clever" and abuse the `expand_path` method in order to achieve goals which are completely without value (femto-optimization and eliminating an insignificant number of characters), using means which are questionable on various grounds.

Let's look at three of these questionable aspects now.

The documentation for the method says the following:

    ------------------------------------------------------ File::expand_path
         File.expand_path(file_name [, dir_string] ) -> abs_file_name
    ------------------------------------------------------------------------
         Converts a pathname to an absolute pathname. Relative paths are
         referenced from the current working directory of the process unless
         _dir_string_ is given, in which case it will be used as the
         starting point. The given pathname may start with a ``+~+'', which
         expands to the process owner's home directory (the environment
         variable +HOME+ must be set correctly). ``+~+_user_'' expands to
         the named user's home directory.

            File.expand_path("~oracle/bin")           #=> "/home/oracle/bin"
            File.expand_path("../../bin", "/tmp/x")   #=> "/bin"

So the first uncomfortable thing about the idiom is that it's passing in a *file* path where the method is actually asking for a "dir\_string". This is the first bit of code smell: use of an API that seems to run counter the use intended by the API's authors.

The second uncomfortable thing about it is that in order for this trick to actually work, the idiom needs to prepend `../` to the first parameter, effectively compensating for the fact that what we really wanted to pass in as the second parameter was the directory of the current file, but we passed in the file itself instead.

This is a smell too because while our objective is to require the `boot` file in the current directory (ie. `./boot`) we end up passing in `../boot` as a parameter instead, which isn't exactly intention-revealing and at a casual glance is actually downright misleading, because it looks like we're referring to a file in the parent directory.

My final concern with this idiom is that it doesn't read nicely from left to right compared with the alternatives. We usually read paths from parent to child, from left to right (eg `grandparent/parent/child`) and by choosing the `expand_path` method the framework authors effectively invert that order by requiring us to pass the parameters as "child, parent".

Does all this work? Evidently, yes. Is it the end of the world? No, of course not. It's just sad for me to see such a nasty little idiom proliferate like a rash in a project which is taken by many as an reference point for the state-of-the-art in Ruby coding.

Unfortunately, now that this ugly little idiom has received the "blessing" from the Rails team, I expect to see it popping up all over the place in other projects from here on.
