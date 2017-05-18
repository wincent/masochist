---
title: Help!
tags: blog
---

I [previously wrote](http://www.wincent.com/a/about/wincent/weblog/archives/2007/04/payoff_time.php) about how pleased I was with my new workflow for creating end-user help documentation. In that article I said:

> The sky really is the limit on this one. One of the things that has always frustrated me about Apple's Help system is that it is very difficult to take the same documentation and use it both in the application itself as well as mirroring a copy to your website. If you use Apple's proprietary link style then your pages won't work on the web; if you use normal HTML links then you lose the frills that you get in Apple's Help Viewer. Furthermore, the system is poorly documented: most of the information is out-of-date or just plain missing (some of the [best information](http://andymatuschak.org/articles/2005/12/18/help-with-apple-help) is not actually provided by Apple). What happens if Apple changes the way it works in the future? For theses reasons I've always been reluctant to include in-application Help.\
> But using [Walrus](http://walrus.wincent.com/) I am able to easily have the best of both worlds. I can have a helper function that emits Apple-style links if a particular environment variable is set at the time the templates are filled, and emits standard HTML links in other cases. If Apple ever changes the link format I'll just have to tweak the helper method and recompile.

I've just pushed out updates ([1](http://www.wincent.com/a/news/archives/2007/04/hextrapolate_20_1.php), [2](http://www.wincent.com/a/news/archives/2007/04/synergy_312_now.php)) to [Hextrapolate](http://hextrapolate.wincent.com/) and [Synergy](http://synergy.wincent.com/) which show the difference between my new approach and my old one.





### The old

[Synergy](http://synergy.wincent.com/) uses [online help documentation](http://www.wincent.com/a/products/synergy-classic/). It's fairly extensive, but obviously can't be read offline unless you previously mirror it.

When Synergy first came out I actually used embedded help documentation that could be viewed using Apple's Help Viewer. Back in version 1.2 (August 2004) I decided to stop doing that and instead keep all the help online. I was motivated by:

-   Bandwidth concerns (the documentation added about 25% to the application size).
-   Spending too much time keeping the website and the application documentation in sync.
-   Chasing two moving targets, and targets that were moving in different directions, by trying to keep both the in-application help and the website close to the then-current Apple aesthetic.
-   Frustration at Apple's use of proprietary extensions for in-application help, and at the lack of documentation for the same.
-   Frustration at the rendering capabilities of Apple's pre-WebKit Help Viewer; back in those days you couldn't even use CSS in your help books.

### The new

Things have changed a lot since 2004.

-   Bandwidth is cheap, and people have faster connections.
-   Apple's Help Viewer is now WebKit-based and can correctly render anything that Safari can render, which is pretty much anything if you adhere to the standards.
-   CSS support means that you don't have to worry about chasing moving targets: you can separate your content from your presentation and update the latter on demand without having to trawl through your content and modify it.
-   Using helper methods in [Walrus](http://walrus.wincent.com/) allows me to single-source my documentation and write my links the same way for the two targets (in-application help and web-based help); it also adds a layer of abstraction that insulates me from any changes that Apple might make to their proprietary and/or undocumented APIs in the future.
-   Writing the documentation is a whole lot more pleasant because I can write it in [Textile](http://www.wincent.com/knowledge-base/Textile) and let Walrus handle the rest.

So [Hextrapolate](http://hextrapolate.wincent.com/) provides the best of both worlds for both user and developer. Users win because they get easy-to-use, task-based documentation in a familiar format (styled after the Apple application help that they're used to and delivered via the Help Viewer application that they all know).

They can view the documentation at any time, even when they're offline, because it's embedded inside the application. But prospective users who don't have the application installed can look at it [online too](http://www.wincent.com/a/products/hextrapolate/help/front_page.html). The embedded help is easily searchable using the Help Viewer, and the online help is easily searched using the [all-powerful Google](http://www.wincent.com/a/site-map/search/).

I win as a developer too for the reasons already stated; above all because I can write the source documentation once and compile it for multiple targets. And it's not just rapid in the do-it-all-in-a-single-step sense; it's agile in the development sense too. Because Walrus is written in [Ruby](http://www.wincent.com/knowledge-base/Ruby) I was able to add the dual-targetting capability in less than five-minutes, literally.

### The future

If you've been following the [Subversion log](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/) this past week you'll see that I've been laying low on the check-in front. I've been looking at speeding up Walrus by converting the parser (generated Ruby code) to a ultra-fast C extension. I first looked at using [Ragel](http://www.wincent.com/knowledge-base/Ragel) but am now leaning towards [ANTLR](http://www.wincent.com/knowledge-base/ANTLR) due to the complexity of the parser.

The current parser works, but it's slower than I'd like. I basically consider it a proof-of-concept prototype that demonstrates that the underlying grammar and workflow is a good, working idea, and that it's worthwhile going down to the metal and making a native, compiled parser for it. The compiler itself will continue to be Ruby.

The Hextrapolate 2.0 documentation is not perfect — I'm aware of a minor flaw in it ([already fixed](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2007/04/wocommon_r362_1_item_changed.php)) and I was remiss in not exhaustively proof-reading it — but I think it's a great first run for this new workflow. From here on all my products will start migrating to the new system, bit by bit.
