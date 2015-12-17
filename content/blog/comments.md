---
tags: site
title: Comments on commenting
fb: https://www.facebook.com/glh/posts/10153086863026307
twitter: https://twitter.com/wincent/status/677591039687790592
---

When I [rolled out](/blog/masochist) the recent website revamp, I had to decide what I would do about comments.

In keeping with my recent penchant for writing [rambling](/blog/old-stuff-that-rocks) [retrospective](/blog/betting-on-the-wrong-horse) blog posts, I thought I'd detail here how my opinions about where blog comments should live have changed over time.

# ~~The Perl era~~ The primordial ooze

Back in the late 90s my website at [wincent.org](http://wincent.org) acquired its first recognizably blog-like surface. The pages were static HTML. I added a "message board" at the bottom of each page, implemented as a combination of [Perl](/wiki/Perl) [CGI](/wiki/CGI) scripts and [SSIs](https://en.wikipedia.org/wiki/Server_Side_Includes), using the filesystem as a flat-file database. You can still find some examples of these message threads if you [poke around web.archive.org](http://web.archive.org/web/20000816012023/http://wincent.org/articles/criticism/1999,11,22,gfx2.shtml).

At this point I had no idea what I was doing and added all this because it was fun to do, and it seemed to be something that "real websites" had.

# No comments

A few years later I had more of a "real" blog, and I was powering it using the then-dominant [Movable Type](/wiki/Movable_Type), which was an actual blog engine. I'd learned enough this point to be paranoid about security exploits, so I set the admin interface up behind some incredibly obscure URL like `/cgi-bin/lrhfkjhkjiitt/mt.cgi` and configured the software to rebuild the HTML files and dump them in a public directory whenever I made a change. The result was entirely static.

My intent here was to gain security at the expense of silencing discussion. I knew it meant less engagement, but I didn't want to get [pwn3d](http://www.urbandictionary.com/define.php?term=pwn3d). I partly rationalized this trade-off by telling myself that I wanted the blog to be a platform for my own voice, and not a publicly-accessible surface to be run over with the seas of inane babbling, unfiltered blathering, nasty trolling, froth-mouthed flaming and thoughtless vandalism that was typical of unmoderated discussion forums across the web.

I didn't know it back then, but I was ahead of my time, effectively using a static site generator years before they became popular, albeit running it on the server.

# What happens on the website, stays on the website

The next iteration came with the [Rails](/wiki/Rails) rewrite of the site. I wanted engagement after all, and was willing to spend the time to secure the site and moderate the discussion as needed. By then (late 2000s) I already knew that people didn't want to create an account just to leave a comment on a blog post, so I made the barrier to entry as low as possible: anybody could comment, even if they weren't logged in, but unverified or anonymous comments would be held for moderation before being published.

Pervasive, low-friction commenting was rolled out across the site, and nary a flat-file database was needed to support it.

By now the web had changed and my readership had changed too. Gone were the days of thousands of daily visitors returning to my blog to see if I'd written something new. Now people arrived from Google because they'd searched for a specific set of keywords, they would land on a specific post, and when they left they probably wouldn't come back. Instead, an entirely different group of about a thousand people would come along, read their one article, and leave.

# Delegation

When I rebuilt the website in its current form, I knew I didn't want to bother implementing my own commenting system again. It just wasn't worth it for the level of engagement that it produced. Most people consume passively; few actively participate.

I seriously considered delegating to a third party like the [Facebook comments plug-in](https://developers.facebook.com/docs/plugins/comments) or [Disqus](https://disqus.com/). In fact, I even wondered if I should just move the entire operation off-shore, so to speak, and publish my written content on [Medium](https://medium.com/).

In the end, however, writing is still enough of a deeply personal activity that I want to "own" my content. I feel less possessive over my more ephemeral pronouncements, so I'm comfortable with using [Twitter](https://twitter.com/wincent) for those, but I want my long-form stuff to live "forever" (ie. in a [Git](/wiki/Git) repo [distributed](https://github.com/wincent/masochist) [across](https://gitlab.com/wincent/masochist) [multiple](https://bitbucket.org/ghurrell/masochist) [locations](http://git.wincent.com/masochist.git)), and I want full control over how it is presented. And let's not forget that I am a developer, and building websites is fun. There's a reason I started doing this all those years ago, and I want to keep doing it.

Maybe delegation wasn't the answer.

# Keep it simple, stupid

After a [brief experiment](https://github.com/wincent/masochist/issues/44) with the Facebook comments plug-in, I decided that I preferred to keep things simple, and avoid the performance overhead of pulling down an SDK, and the mess of embedding a bunch of complicated third-party code in an iframe. Additionally, using a third party platform like this means that you don't own or control the data that is attached to your post, yet it is colocated right there on the page alongside your stuff; something about that produces cognitive dissonance for me.

Instead, I'll include a link at the bottom of each new post to a place (or places, as appropriate) that people can use to comment. For example, on my [last](/blog/betting-on-the-wrong-horse) [couple](/blog/old-stuff-that-rocks) of posts I've included links back to Facebook, Hacker News, Reddit, and Twitter.

The idea is that with this set-up:

- My blog remains a place for my voice without the distracting din of mass internet participation.
- Rather than opening up my site for commenting by random bunch of individuals, people can discuss it elsewhere within an active (and self-organizing, somewhat homogenous, cohesive) community of their choosing; this makes sense: I am a nerd engineer type writing content for people like me, and nerd engineer types tend to hang out on places like Hacker News.

Downsides:

- I have to add these links manually, which implies a two-step process &mdash; publish then amend with links &mdash; and as I don't intend on always submitting these posts to multiple sites, there is a chance that I won't be aware of a discussion in progress and so won't add the link.
- I obviously won't be going back to older content and doing this retroactively.
- This will only apply to blog posts, so a bunch of wiki content that could benefit from commenting functionality won't have it (my email address is in the footer of every page on the site though, so I'm open to receiving corrections or supplements to any page; heck, seeing as all the content is in Git I'd be happy to take pull requests too).

Overall I feel pretty happy with this. It may not be optimal and I could certainly end up changing my mind in the future, but the cost of this decision is low, there are no barriers to revising it later, and it's hard to argue with the simplicity.

<small><em>Discuss: [Facebook](https://www.facebook.com/glh/posts/10153086863026307) - [Twitter](https://twitter.com/wincent/status/677591039687790592)</em></small>
