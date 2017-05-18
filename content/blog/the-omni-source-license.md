---
title: The Omni Source License
tags: blog
---

Today I released a new product, [Wincent Strings Utility](http://www.wincent.com/a/products/wincent-strings-util/) ([full release announcement here](http://www.wincent.com/a/news/archives/2006/02/wincent_strings.php)). It's a derivative work of the [Omni Group's](http://www.omnigroup.com/) [stringsUtil](http://www.omnigroup.com/ftp/pub/localization/) and I wanted to make a few comments about their license, the [Omni Source License](http://www.omnigroup.com/developer/sourcecode/sourcelicense/).

Firstly, although it's an open source license, it actually makes it very difficult to distribute a derivative work:

1.  You are allowed to distribute verbatim unmodified copies of Omni software at will
2.  You are allowed to distribute modified binaries
3.  You are *not allowed* to distribute modified source
4.  You are allowed to distribute patches

It's that third provision that makes things difficult. In most open source licenses (and certainly in all free software licenses) you are allowed to distribute modified source. In fact, it's that provision which is central to the whole idea of free software.

In order to comply with their license I've had to prepare two kinds of distribution: the modified binary, and a "unmodified source plus patch" archive. I've included a couple of scripts that automate the process of preparing and applying the patch but the whole thing definitely feels like a kludge.

I'm also left doubting what the rules for *re*-distribution are. That is, what happens if someone wants to make a derivative based on my derivative? Must they distribute it as a set of patches against the Omni original source? Against my modified source? The license isn't explicit about this case.

Some of the provisions in the license are a little odd or at least (from my point of view) suboptimal:

-   You must include in-file changelogs describing modifications (normally that information would be handled by a version control system).
-   You must include a man page (first time I've ever had to write one!).
-   You must rename the executable to avoid confusion.

This last provision is an interesting one because it's really the only reason that I've released this derivative as new "product". If the source code had been under the BSD license or the GPL I most likely would have kept the old name, rolled it into my buildtools package, and never done a new product release at all. (See [the release announcement](http://www.wincent.com/a/news/archives/2006/02/wincent_strings.php) for more comments on the buildtools package and why I am putting it together.)

In any case I've written to Omni asking for permission to distribute modified source code ([here they imply](http://www.omnigroup.com/developer/sourcecode/sourcelicense/) that you can ask for such permission). We'll see how they respond. \[*Update, 23 February 2006:* Omni has granted me permission to distribute modified source code.\]

For interest, here is [one other person's take on the license](http://akosut.com/log/2003/03/31/somethings-not-right-here/).
