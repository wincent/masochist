---
title: Parsing/transforming nested lists from wiki markup to HTML
tags: blog
---

In working on my [wikitext](http://www.wincent.com/knowledge-base/wikitext)-to-HTML transformer I saved the ugliest bit for last: parsing/transforming nested lists. I started off with parsing simple span-level elements like `em` and `strong` tags, then moved on to block level items like paragraphs and `pre` blocks, and nesting containers like `blockquote` blocks. But I had to keep putting off lists.

Given input like the following (using the same syntax as that used by [MediaWiki](http://www.wincent.com/knowledge-base/MediaWiki)):

    # this is an ordered list
    # which continues
    ## and has another ordered list
    ## nested inside it
    # and then falls back
    #* and then nests another list
    #* this time an unordered one
    #** itself containing a nested list
    #** which continues
    #**# and finally nests yet another ordered list
    #**# which continues
    #* drops back quite a way
    # and finally all the way
    #****** and finishes with an invalid item

We want a corresponding nested list described in valid [HTML](http://www.wincent.com/knowledge-base/HTML).





As this is wikitext, we want to handle the last item (the invalid) one gracefully. It mustn't break the validity of the HTML but we don't want a silent failure either. We don't want to increase the nesting level several times in one go (probably not what the author intended); it really only makes sense to increase the nesting-level once per line. So the solution will be to handle it the same way Wikipedia does and consider the first `*` to mark the beginning of a nested list and subsequent (invalid) `*` to belong to the first item of that list; this is important because it means they will be displayed back to the user and hopefully alert him/her of the error.

Looking at this HTML makes my brain hurt, but this is what we want to produce:

    <ol>
    <li>this is an ordered list</li>
    <li>which continues
    <ol>
    <li>and has another ordered list</li>
    <li>nested inside it</li>
    </ol>
    </li>
    <li>and then falls back
    <ul>
    <li>and then nests another list</li>
    <li>this time an unordered one
    <ul>
    <li>itself containing a nested list</li>
    <li>which continues
    <ol>
    <li>and finally nests yet another ordered list</li>
    <li>which continues</li>
    </ol>
    </li>
    </ul>
    </li>
    <li>drops back quite a way</li>
    </ul>
    </li>
    <li>and finally all the way
    <ul>
    <li>***** and finishes with an invalid item</li>
    </ul>
    </li>
    </ol>

When rendered this will look like this:

1.  this is an ordered list
2.  which continues
    1.  and has another ordered list
    2.  nested inside it
3.  and then falls back
    -   and then nests another list
    -   this time an unordered one
        -   itself containing a nested list
        -   which continues
            1.  and finally nests yet another ordered list
            2.  which continues
    -   drops back quite a way
4.  and finally all the way
    -   \*\*\*\*\* and finishes with an invalid item

So anyway, it's done now, in about 130 lines of well-commented [C](http://www.wincent.com/knowledge-base/C) code. Surprisingly, despite the recursive structure of the lists the actual transformation code is entirely iterative and no recursion is involved. I still don't know if this is the best way to do it but it is what seemed to be the simplest solution. Indenting could be added to make the structure of the source clearer but as this is intended to be (mostly) read by machines and not humans it doesn't seem like its worth the trade-offs in complexity and speed.
