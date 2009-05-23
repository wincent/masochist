---
title: Tabs vs spaces (or spaces vs tabs), and elastic tabstops
tags: development
cache_breaker: 1
---

After [my post](/blog/on-the-80-column-limit) on the 80-column limit it's time for another [coding style](/wiki/coding_style) entry, this one on the [eternal debate](http://www.emacswiki.org/emacs-se/IntelligentTabs) on spaces vs tabs.

# Tabs forever

Some people say you should use tabs for everything. They love their freedom. They love the fact that you can use a tab-stop of 4 and they can use a tab-stop of 8 and they'll see the code with the indentation that they like, not the one that you do.

Basically, it's all about the personal freedom of *the reader* of the code.

# Spaces forever

Some people say you should use spaces for everything. They care less about freedom and more about ensuring that the code looks they way they want it to, no matter who's reading and on what machine.

In short, it's all about the control of *the writer* of the code.

# Tabs for indentation, spaces for alignment

It turns out that the "tabs for everything" position actually ends up being untenable because while it works great for indentation it fails miserably for alignment; that is, things like:

    for (x in y)
    {
       foobar(param1,
              param2,
              param3);
    }

This looks fine if spaces are used for everything:

    for (x in y)
    {
    ....foobar(param1,
    ...........param2,
    ...........param3);
    }

With tabs things aren't so nice. Given a tab-stop of 4 we have to use some spaces to force the alignment into the desired position:

    for (x in y)
    {
    --->foobar(param1,
    --->--->...param2,
    --->--->...param3);
    }

Compare the diffrence with a tab-stop of 2:

    for (x in y)
    {
    ->foobar(param1,
    ->->...param2,
    ->->...param3);
    }

And a tab-stop of 8:

    for (x in y)
    {
    ------->foobar(param1,
    ------->------->...param2,
    ------->------->...param3);
    }

This is the mixed camp which tries to reconcile things by suggesting that tabs be used only for indenting and spaces be used for all alignment:

    for (x in y)
    {
    --->foobar(param1,
    --->.......param2,
    --->.......param3);
    }

Undoubtedly a very nice way of permitting reader freedom as well as offering the writer a reasonable guarantee that the code will look relatively close to how they wrote it. It also nicely handles things like trailing comments:

    for (x in y)
    {
    --->foobar(param1,....// one of my favourite params
    --->.......param2,....// although this one is also pretty good
    --->.......param3);...// param3 mustn't be negative
    }

Unfortunately, while the "tabs for indentation, spaces for alignment" convention promises a great mix of freedom and control, and is used by many [open source](/wiki/open_source) projects, in practice it is limited by the competence of the people writing the code.

Basically, it is an optimistic position predicated on the belief that all contributors in a particular community are smart enough to understand the conventions, and disciplined enough to apply them. If it weren't the inherent tendency of human beings to lack intelligence, discipline and insight then I'm sure this position would be a clear winner.

# Elastic tabstops

A while ago "elastic tabstops" [came onto the scene](http://nickgravgaard.com/elastictabstops/). They promised to solve this problem once and for all by rehabilitating the "tabs for everything" convention, making the tabstops themselves flexible so that they could be used everywhere without the need for spaces to pad things out. I won't explain the full details here; see [the original proposal](http://nickgravgaard.com/elastictabstops/) for that.

It certainly sounds wonderful in theory, although there are a couple of things which I don't really like about the proposal.

One is that to make our example align nicely we'd actually need to insert whitespace *before* the first function parameter, `param1`, which feels a little unnatural:

    for (x in y)
    {
    --->foobar(->param1,-->// one of my favourite params
    --->-------->param2,-->// although this one is also pretty good
    --->-------->param3);->// param3 mustn't be negative
    }

My other minor complaint is that the flexible, automatic alignment only works for things which are on contiguous lines; that is, if we drop middle comment in our example, our trailing comments will no longer align:

    for (x in y)
    {
    --->foobar(->param1,->// one of my favourite params
    --->-------->param2,
    --->-------->param3);->// param3 mustn't be negative
    }

To correct either of these problems your only option is to fall back to spaces again, thus eliminating the number one benefit promised by elastic tabstops (convenience).

This was [discussed on Reddit](http://www.reddit.com/r/programming/comments/8mebl/ive_been_waiting_for_this_for_ages_is_this_the/) a couple of days ago and people raised a number of similar objections.

Perhaps the most important objection of all is the one raised by [TextMate](/wiki/TextMate) author, Allan Odgaard, [here](http://blog.macromates.com/2006/elastic-tabs/):

> \[H\]ere would be too big a compatibility problem with actually saving such files, since all renderings of the file (`cat` it in terminal, paste it in an email, on the web, etc.) would be wrong — and it's not easily fixable, e.g. by piping the text through something like `expand`, which would normally fix presenting a file with the wrong tab size.

There's the rub. Even if the *editing* experience with elastic tabstops were the best thing in the world, there would be tremendous interoperability problems. *Even if* all the editors in the world suddenly started supporting them, how would your code look when viewed in the [Terminal](/wiki/Terminal) with `cat` or `less`? How would your changes look when inspected with `git diff`? How would patches look when sent via email?

Even if you believe that all the editors in the world could be changed, and all the command-line tools, and all programmers could be convinced of the utility of switching, can you imagine the [Apple](/wiki/Apple) will ever update [Mail.app](/wiki/Mail.app) to display your patches accurately?

This looks like it might be one of those almost-great ideas, still-born and destined to fail.

Auto-conversion to and from spaces doesn't really look viable (easy enough to convert *to*, but *from*? How could that possibly be done reliably?). So in the end we have to chalk up elastic tabstops as just another option, but certainly not a clear winner.

# So, the winner is?

In the end there *is* no winner. No matter which option you prefer you'll always have to abide by the conventions set out by the community in which you're working. By all means, set a standard for your own projects (I chose "spaces for everything" many years ago, probably because I wanted to be sure that things displayed nicely everywhere *and* because I didn't have faith in my fellow human beings to actually follow more complicated conventions, and now I stick to it out of habit more than anything else) but in the end you're going to have to learn to be flexible.

The truth is that even if you are a lover of personal freedom *and* you have great faith in your fellow human beings, the "freedom of choice" that you get from the "tabs for indentation, spaces for alignment" convention is ultimately only an illusion. Even if you do get to control that one tiny aspect of your coding (your tabstop), you'll still have to abide by the conventions of the project and the community for things like placement of braces, variable naming, and many, many other things.
