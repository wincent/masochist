---
tags: ruby textmate wiki
---

Looking at the release notes for revision 1360 of [TextMate](/wiki/TextMate) I see that [Ruby](/wiki/Ruby) code completion is now on offer.

In order to get this working I had to check out the lastest version of the [Ruby](/wiki/Ruby) bundle:

    cd ~/Library/Application\ Support/TextMate/Bundles
    rm -rf Ruby.tmbundle
    svn co http://macromates.com/svn/Bundles/trunk/Bundles/Ruby.tmbundle

I suspect the problem was an old copy of the bundle (not sure how it got there). Deleting it probably would have been enough.

# Limitations

There still seems to be a way to go before this will become useful. In a brand new file I found that hitting Option-Escape would allow me to complete basic strings like `str` to `String` and `Struct`. But on trying it on anything remotely complex would yield only a tool-tip containing the words, "Parse error".

# See also

-   [TextMate](/wiki/TextMate) changelog feed: <http://macromates.com/textmate/changelog.rss>
-   <http://sofanaranja.com/2007/01/20/textmate-rcodetools-el-paraiso-de-ruby/>
-   <http://marcus.ahnve.net/2007/01/30/ruby-code-completion-in-textmate/>
