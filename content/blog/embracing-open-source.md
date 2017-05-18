---
title: Embracing open source
tags: development open.source blog
cache_breaker: 1
---

Back in March Eric S Raymond [made some controversial statements](http://dotcommie.net/feed/index.php?id=160) about how we don't need the GPL any more. His basic argument was that [open source](/wiki/open_source) has already "won", it produces better software than closed source processes can, and there is no need for reciprocal licenses (like the GPL) which "punish" people for trying to take open source code closed, when the market itself will carry out that "punishment" in any case.

# The open source process is better

While you could argue the finer points, I think Raymond is basically right. One of the most important affirmations here, and one which may need some clarification, is that open source processes produce "better" software.

I'm firmly convinced of this, but it's an affirmation that requires some explanation in the face of the many examples of "best of class" closed source software which are both more popular (numerically) but also demonstrably and objectively superior.

As a desktop OS, most users would agree that Mac OS X (mostly closed) is "better" than Linux (mostly open); note that here "better" really refers to the "user experience" for the average user. I've never used it, but they say that Oracle (closed) is better than even the most popular (MySQL) and most serious (PostgreSQL) open source databases. Although it has its flaws, few would disagree that Photoshop (closed) is better than Gimp (open). I could go on...

As a software developer who has worked on both closed and open source projects, I don't think these examples of superior closed source products undermine the claim that the open source *process* is superior.

There are many counter examples. The best [version control system](/wiki/version_control_system), in my opinion, is [Git](/wiki/Git), which is open source. (Some may prefer others, but ask anybody what the best version control system is and chances are they'll tell you an open source one.) The best web server software (either [Apache](/wiki/Apache) or [nginx](/wiki/nginx), depending on your needs) is open source. The best programming language implementations (take your pick among [Ruby](/wiki/Ruby), [C](/wiki/C), [Haskell](/wiki/Haskell), [Python](/wiki/Python); pretty much any language you might choose) are all open source.

The number of areas in which the best products are open source ones is growing rapidly. If you lurk around on the mailing list of one of these successful open source projects you'll soon be convinced of how well the process works. Somebody wants a new feature or a bugfix; the process enables that feature or bugfix to get addressed in the shortest possible timeframe. A tremendous agility is possible because people can become involved immediately and for as long as is necessary; there's no need to sign contracts or hire new employees. The process works.

It's only natural that programmers are going to want to work on the best projects, so this tendency is only going to get stronger with time. As Raymond points out, the upper limit on the resources that a private company can bring to a proprietary product will always be dictated by their ability to hire talent; whereas open source, in contrast, has no such limits. The most popular projects will only grow more popular, and that popularity will attract programming talent from an essentially unlimited pool in a self-reinforcing cycle.

If you've observed the software marketplace over the last decade you'll have seen this dynamic in action. It is very difficult for a company pushing a closed source solution to compete with the open source model. Companies themselves recognize this: that's why so many of them are opening up previously closed code bases, or building products on top of existing open source projects (think Java, Solaris, a large number of the tecnologies in Mac OS X, and so on). This is also why so much of the "talent" responsible for the code in projects like Linux is actually employed by big corporations, and is paid to work on those open source projects.

# The victory of open source

I've been watching this trend now from my perspective as both a user and a producer of both closed and open source software. To me it's absolutely clear that the "sea change" has already been produced. Open source has "won".

What does this actually mean? In practical terms, it means that the number of open source projects will continue to grow; as a proportion of all software and with a corresponding growth in its relative userbase. It also means that the number of open source projects which attain "best of class" status in their field will continue to grow too.

But more profoundly than this, it also means that the way people think about software has changed and will continue to change. In the not-too-distant future, it will become *unthinkable* to propose a closed source solution rather than an open source one, akin to proposing making cars out of wood instead of metals and plastic. More and more people will start to think of open source software as inherently, technically superior, and more and more people will consider the open source process as "the" only sensible way to produce software.

There are people that have thought this way for a long time now; the Richard Stallmans of the world who didn't so much foresee that this would inevitably take place as actually make it happen.

What we're seeing now is how the everyday programmer on the street is starting to realize that people like Stallman were right. You no longer have to be a visionary to realize that the open source *process* is "the way" that software should be written.

The next domino to fall will be the various strata of business, management, marketing, investors, government. In the not too distant future open source will enjoy its new, unquestioned status. Scientific knowledge is developed collaboratively, "out in the open". "Software knowledge" is really no different, and as time goes by more and more people are going to accept that fact.

It's true that companies like Microsoft will continue to sow Fear, Uncertainty and Doubt about open source. Its revenue model, after all, is built around proprietary, closed source software. It rightly perceives open source as a huge threat.

Some companies, like Apple and Google, have chosen to adapt to these changing times by embracing hybrid models. They strongly push open source code: not only do they take advantage of existing open source projects, they also publish large bodies of their own code as open source. While they do continue to play some of their cards close to their chests, keeping some key pieces of their portfolio as closed source, you can rest assured that as the market evolves they will continue to adapt and ensure that they're always "open enough" to take advantage of the benefits of the open source process and ecosystem.

I don't think the strategy that Microsoft is currently employing is a very prudent one. They seem to be clinging to the hope that they can compete with open source just like they would compete with a closed source competitor; they think that if they try hard enough they'll be able to "crush" their competitor, and once "destroyed", the war with open source will be over and they can go back to making shiploads of money again.

But it doesn't look like this is going to work. Open source so far has proved resilient to attacks on the legal/patent front, and on a technical level as well. The only playing ground on which companies like Microsoft can still hope to win some battles is the marketing one, and even there they are fighting an uphill battle in the face of open source's advances and growing acceptance in so many areas. Microsoft has near-unlimited funds for marketing, but open source has near-unlimited programming resources.

The trouble with Microsoft's strategy is that they are painting themselves into a corner. A "fight to the death" strategy isn't such a bright idea when you're on the losing side. Each day that passes and Microsoft doesn't follow the examples of companies like Apple and Google is a lost opportunity. They are making nominal, symbolic movements towards open source and open standards, but they need to move *much* faster. Mere window-dressing will not be enough to ensure their affluence, or even their survival, indefinitely.

# Consecuences for the small guy

So what does this all mean for the independent softare vendor, the lone programmer such as myself working on small projects?

If the open source process is "the" most sensible method for creating software, then a couple of decisions need to be made:

1.  *What* license should code be made available under?
2.  *How* (or *how much*) and *what* code should be made available as open source?

## What license should be used?

Of these questions, the first question is probably the easiest to answer.

In short, Raymond is basically right: the battle has largely been won and the protection of the GPL is no longer really needed to shield the little guy from the corporate behemoths. I wouldn't go so far as to say that we should actually scrap the GPL; I think its existence and use by high-profile projects like Linux will continue to serve as a visible check against corporate greed. But for all practical purposes, pretty much every new open source project should just choose a permissive license like the BSD license. There is simply no need for any more protection.

By using a permissive license like the BSD you maximize the chances that someone else will pick up your code and run with it; this can lead to more people finding out about it, which should be one of your primary goals (the larger your user base and developer community, the more potential for growth and innovation). Ultimately, having your code in widespread use can lead to all sorts of opportunities, including employment opportunities.

## How much (and what) code should be opened up?

This one is pretty easy to answer too. Common sense tells us that we should open up, simply, "As much as possible".

What does this actually mean in practice? In an ideal world you could open up literally everything and live off of sponsorship, donations, and support licenses, but in reality for the majority of small software vendors this is not yet a financially viable model (donation rates tend to be very, very low).

So in practical terms the best one can do is to follow the lead of the big boys, the Apples and Googles of the world, and open up "as much as possible" while always keeping something closed. In general you can open up the generic or supporting parts of your code base while keeping some key component proprietary. Apple keeps a lot of their higher-level APIs under wraps; Google keeps its page rank algorithms secret. For the small developer you could probably make a minimal core of your application close source and migrate the rest into an open source plug-in architecture.

This is an approach that's been used fairly successfully by [Hog Bay Software](http://www.hogbaysoftware.com/) under the rubric of "user-powered software". The applications themselves are little more than plug-in loaders, and almost all of the real functionality lies in the plug-ins. While not fully open, the idea is to give users as much freedom as possible to modify and enhance their tools while still preserving the economic basis for running the business.

The Hog Bay "user-powered approach" was described in detail in the [September 2009 edition of ATPM](http://www.atpm.com/12.09/atpo.shtml) in an article titled, "Examining New Business Models".

An alternative approach is the one tried by [Alexander Stigsen](http://e-texteditor.com/), creator of the "E" [TextMate](/wiki/TextMate) clone. In an original and somewhat controversial fashion ([initial announcement](http://e-texteditor.com/blog/2009/opencompany), [source code release](http://e-texteditor.com/blog/2009/releasing-the-source)) he decided to open up everything under a modified BSD license which basically said that people could do whatever they wanted *except* alter or remove the application's serial number system. Even more than the Hog Bay approach, this puts power to change the software in the hands of the users, but it did draw criticism for introducing yet another license, and one which was confusingly similar to the BSD license while incorporating a distinctly "non-free" clause.

Neither of these approaches is an ideal solution but rather they are practical compromises. My advice would be to follow the "closed source, minimal core with extensive open source plug-in/framework architecture" approach for now. I think it's ideologically more coherent, and definitely more marketable and less likely to generate friction with the user base, because the code that you're giving away, you really are giving away with total freedom, "no strings attached" (other than the extremely liberal requirements imposed by the BSD license), and under the terms of a widely-used and well-understood license. If the market and ecosystem evolve in the future in such a way that you can open source absolutely everything while still adequately monetizing your efforts then that would be fantastic and you should leap at the opportunity.

## *How* should code be opened up?

This is perhaps the most difficult question of all, because as they say, "the devil's in the details".

In general your goal should be to emulate the processes of the most successful, high-profile open source projects out there ([Git](/wiki/Git), [Linux](/wiki/Linux) etc). Note that these projects have burgeoning, flourishing communities around them, and given their sheer size they usually require complicated infrastructure to facilitate the collaboration process. As a small developer you will obviously not be working on the same scale but there is still much that you can learn from watching these projects.

Here 'transparency' should be your guiding principle. These projects work well because their processes are transparent, and it's transparency that really defines open source anyway. That means some obvious things:

-   **Provide easy access to your source code; not just downloadable tarballs, but access via a [version control system](/wiki/version_control_system) such as [Git](/wiki/Git) and with a [web](/wiki/web)-based repository browser too.** If you aren't able to host your own then [Gitorious](/wiki/Gitorious) is a free, open source provider that can provide both repository hosting as well as web-based browsing. [GitHub](/wiki/GitHub) is also free, but is closed/proprietary.
-   **Provide an easy-to-use, open bug tracker.** This makes what you're working on transparent even for non-coders, and makes it possible for them to collaborate with the development process via bug reports, testing and suggestions.
-   **Provide multiple ways for users to "see" what work is being done on the code.** That might mean writing [blog posts](/blog) about what you're working on, publishing commit logs of the changes going into the code base, offering "nightly" builds so that people can easily try out snapshot builds of work in progress, posting to Twitter or [a similar section on your own website](/twitter), or providing RSS or Atom feeds of any of the above.
-   **Provide multiple ways for users to make their voices heard.** Don't hide your email address for fear of spam; instead make it easily visible on your site and let your spam filter worry about the consequences (trainable filters are now good enough that you can and should do this). This is an invitation to communicate with you rather than a "do not disturb" sign hung on the doorknob. Make it easy to open support tickets or bug reports, even for anonymous users. Provide forums; there are many users who prefer this mode of interaction. Here again you should lower your barrier to entry by allowing even anonymous posts — let technology deal with the spam problem rather than forcing your users to go through an inconvenient registration process — or offering a more convenient authentication method such as OpenID.

Note that you can start implementing many of these points before you even open up a single line of code. Doing so will enhance the transparency and "openness" of your processes, even for those portions of your codebase which you may choose to keep closed. The benefits of this transparency should be immediately apparent: users feel more involved and empowered, more able to influence the direction of the product, more included and respected. If nothing else this is a marketing and public relations win, but it should also improve the quality of your product. It might also improve your blood pressure, because it will improve the quality of your relationship with your clients and make your interactions with them more pleasant and less stressful.

## Making the transition

Believe it or not, I've been working on a draft of this article since 2007. Yep, for that long I've felt that I had something important to say about open source.

I believe in open source, not really because of the "politics of freedom", but because I believe it's a technically superior process. Linus Torvalds is famously reported to [have said](http://en.wikipedia.org/wiki/Linus's_Law), "given enough eyeballs, all bugs are shallow". But even if you're working on your own and are a pirate with one eyeball, one patch and a hook for a hand, you'll probably write better code if it's for publication as open source.

So while I've often talked on this weblog (and on [my old one](http://wincent.com/a/about/wincent/weblog/)) about how I like open source, and while I've already released a lot of code (much of which you can browse at <http://git.wincent.com/>), behind the scenes for a long time I've actually been working towards a much more comprehensive commitment to open source. (If you want, you can go back and read articles that I wrote in [July 2005](http://wincent.com/a/about/wincent/weblog/archives/2005/07/open_source_lic.php), [April 2006](http://wincent.com/a/about/wincent/weblog/archives/2006/04/open_source_a_w.php), [September 2006](http://wincent.com/a/about/wincent/weblog/archives/2006/09/open_vs_closed.php) and [January 2007](http://wincent.com/a/about/wincent/weblog/archives/2007/01/open_source.php) to see how my position has gradually evolved.)

I've been whipping frameworks into shape, making them fit for public consumption, and gradually rearchitecting my applications so as to whittle them down to lean cores and be able to move the bulk of their functionality out into plug-ins that can be made open source. *All* of my applications are going down that road. *All* of them have already begun the journey. And I am determined to push *all* of them as far as I can down that path while still remaining viable as a business.

And on the process level I've been improving the website to lower barriers to participation (and as I've alluded [elsewhere](/misc/legal), the source code for the site itself will eveventually be going public; from the very first commit back in 2007 the code has been prepared with that eventuality in mind). This post has largely been about *code*, but my interest is in open processes and open companies in general. I'll have more to say on that topic in future posts.
