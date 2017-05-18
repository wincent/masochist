---
title: Here documents
tags: blog
---

I [just added](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2007/02/walrus_r51_3_items_changed.php) "[here document](http://en.wikipedia.org/wiki/Here_document)" support to Walrus.

This is an extension to the normal syntax for the `raw` directive:

    #raw
    Characters which would normally have special meaning
    are treated as normal characters inside the #raw block.
    #end

Notice how the string, `#raw`, inside the raw block does *not* have the effect of opening a new, nested raw block. This is because the `#` character loses its special meaning inside the block. This effect holds true up until the next `#end` directive.

But what if you want to include a literal `#end` inside the block without terminating it. You could try escaping it (`\#end`) but then you'd be breaking the idea that special characters should be treated as normal characters inside the raw block (that is, you'd be granting `\` a special function inside the block).





The solution is to allow here documents:

    #raw <<END_OF_HERE_DOCUMENT
    The raw block can now include anything at all,
    including a literal #end without prematurely
    escaping the block.
    END_OF_HERE_DOCUMENT

You can substitute `END_OF_HERE_DOCUMENT` for anything you want; I just chose that for the purposes of demonstration. Because there are an infinite range of possible of delimiter tokens, there are literally no limits for what you can include in your `#raw` blocks, apart from the physical and addressing limits of the memory in your machine.

Implementing here documents was an interesting mini-challenge within the context of a Parser Expression Grammar (PEG) parser generator like the one used by Walrus. PEGs are totally unambiguous and deterministic, which requires you to know the allowed syntax at the time that you define the grammar. But it's hard to specify the sytax for a here document so early because you don't know what the user is going to select as their delimiter and so you have to have some kind of dynamic self-referencing mechanism:

> A here document shall be a delimiter consisting of a "string of characters", followed by a bunch of other characters, terminated by the "string of characters" that you previously identified as the delimiter.

You can't address this problem with a simple regular expression like this:

    /[a-zA-Z_][a-zA-Z0-9]*/

Because that can match a different delimiter each time you run it:

    #raw <<FOO
    Our regular expression matches FOO,
    which is nice.
    But it also matches BAR,
    which isn't what we want.
    BAR

You therefore need some way of expressing the notion in your grammar that you want to remember a token which you don't know at the time you author the grammar, and later apply that to the input.

Ruby comes to the rescue here with the fantastically useful `lambda` method. This essentially allows you to define an anonymous function (technically a `Proc` object) in the middle of your grammar which has access to all the variables in scope at the time of definition, and which can handle the logic for "recording" the start delimited and then scanning up to it.

The design of the Walrus parser generator already includes a bunch of handy classes ("parslets") to make writing this logic extremely easy. My implementation basically behaves just like the one in Ruby, and allows indentation of the closing delimiter via the `<<-` syntax.

So now Walrus has a `ProcParslet` class in addition to the existing `String`, `Regexp` and `Symbol` equivalents. This may well be the last low-level parslet type I ever have to add because with it you can do pretty much anything; the sky is the limit.
