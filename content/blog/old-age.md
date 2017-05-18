---
title: Old age
tags: blog
---

Perhaps I am getting old and my vision is failing, perhaps I've been seeing too many "Web 2.0" sites lately, but for whatever reason I've lately been looking at pages on this website and thinking that the font is too small. I've even gone so far as to hitting the "bigger" button in my Safari toolbar when reading long articles like [this one](http://www.wincent.com/a/about/wincent/weblog/archives/2006/10/kagi_a_recommen.php) that I just published.

So I've just made a couple of minor tweaks to the CSS. Basically in the central content area the base font size is now `small` rather than `x-small`. The rest of the page should be unaffected. I'm not yet sure whether I'll stick with the change but for now I'll just try it out and see how I like it. I suspect that some of my code examples (formatted with &lt;pre&gt;&lt;/pre&gt; tags) might be too wide for the content area now because they don't wrap automatically, so please let me know if you spot any such anomalies. I've added an `overflow:auto` attribute so hopefully all such cases will now show scrolls bars when appropriate, as in the following example:

    # $Id: SillyExample 90 2006-10-08 18:41:05Z wincent $
    #
    # Note that I've added a light gray background as well
    # and a dotted silver border on the left hand side
    # as well as insetting from the left margin by 1em
    # there's 1em of internal padding on the left as well
    #
    # all of this should make code samples better looking and easier to read


    # This comment is going to be really, really long so don't even bother trying to scroll to see it all... You can see how this will be useful when pasting in code examples...


    # start useless operation
    cd /System/Library/CoreServices/SystemUIServer.app/Contents/Resources/uiscriptrunner.app/Contents/MacOS/
    cd -

Please [contact me](http://www.wincent.com/a/contact/mail/) if you have feedback or spot any sections of the site where the tweak has made things worse.
