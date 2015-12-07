---
title: Introducing Masochist
tags: masochist relay graphql redis javascript site
---
> **masochist (noun)**<br>
> A person who, on realizing she has painted herself into a corner, applies a second coat.

# What?

Masochist is a rewrite of the software powering the website at [wincent.com]. It's called "masochist" because I never learn, and I find myself yet again moving my online presence into a new home. The software lives on [the master branch](https://github.com/wincent/masochist/tree/master) and the source content lives on [the content branch](https://github.com/wincent/masochist/tree/content).

## No, really, what it is

In short, a terrible but fun-to-build idea.

`<buzzwords>`Masochist is a JavaScript application. On the server, we run [Express] with [Node.js] on [Amazon EC2](/wiki/EC2). The UI is built with [React], data is handled by [Relay], queried via [GraphQL], stored in [Git], and with secondary caches and data structures hosted in [Redis] and [memcached].`</buzzwords>`

At the time of writing, it is in a very early stage of development and has a bunch of [known issues](https://github.com/wincent/masochist/issues).

# Background

## Three decades

### 1995-2005: The Wild West

My website was a collection of hand-coded HTML files, Perl scripts, and custom PHP. FTP (and later SFTP) was king. The web was young and sites came and went frequently, and went up and down too. If you entrusted any of your data to a third-party, you couldn't count on it being available to you when you needed it.

I gradually pulled in more and more functionality by installing open source projects: [Bugzilla] for bug-tracking, [Movable Type] and [WordPress] for blogging, [UBB.threads] for forums, [mailman] for mailing lists, [MediaWiki] for wikis, and so on. I was in control of my data and responsible for my own uptime.

### 2005-2015: Consolidation

I got sick of keeping all these disparate projects up to date, sick of the way every mandatory update ("install this new version or get p4wn3d") was accompanied by a swathe of breaking changes, sick of the lack of integration between the systems, sick of the way I had to write pseudo-HTML in one, [Textile] in another, and wikitext elsewhere.

I wrote one [Rails] app to rule them all. From then on I'd only need to update one thing (I was wrong about how easy this would be: keeping a single large Rails app up-to-date was just as painful as keeping the disparate open source projects up-to-date).

It had a blog, a wiki, a bug tracker, a "gists" feature, a repo browser, forums, a CMS for managing product pages, Atom feeds, a short-linker. Everything but the kitchen sink. It even had a built-in [Twitter] clone (holdover from my inherent mistrust of third-parties, I wanted even that data to live on my own server, even if it meant forgoing the network effect &mdash; the primary value proposition! &mdash; of doing it all on Twitter where everybody else was doing it).

It used wikitext everywhere as the markup language of choice (side note: I bet on the wrong format, and now I have thousands of documents in wikitext instead of [Markdown]).

It was fun to build all that stuff, but by 2010 it was becoming clear that the world was changing. Powerful, stable communities were springing up online for sharing text, photos, code. My monolithic Rails app was becoming a liability, because I was incurring the cost of keeping it up-to-date, but also paying an overhead to replicate the content out to other places where people would actually see it.

### 2015-2025: A new Golden Age

We have shiny new toys like [React] and [GraphQL] that make building slick, dynamic, complex interfaces a breeze (relatively speaking). It's perfectly sensible to trust that big companies like [Google], [Facebook], [GitHub], Twitter and friends with a copy of your precious data, and rely on them to provide robust access to it.

It is now reasonable (and in fact, has been for a while) to keep your textual content (the blog and wiki use cases) in a Git repo like this one, and fully delegate the more dynamic aspects of online functionality  (like comments) to third-parties. Let GitHub track issues for you, just go ahead and do your "live" interactions on Twitter where everybody else is doing them, and share your photos on Facebook with people who actually want to see them.

You could even dispense with hosting your own website at all, and trust all your content to third parties. [Medium] may or may not exist 10 years from now, but at a cosmic scale, does that really matter anyway?

## Why?

When I mentioned the "Golden Age" above, I did so with some irony. Things *have* changed, and for the better, but they will surely change again. I don't want to punish myself on an endless upgrade treadmill, but I do want to embrace change to some extent. That means I do want to build something new from time to time, for fun, even if I know it won't last forever.

So, I won't be at all surprised if 10 years from now I feel the same way about GraphQL as I do today about Rails. [REST] delivered value, but it had its drawbacks too, and GraphQL will be the same. Nothing is perfect, and nothing is permanent.

Nevertheless, I think there's an opportunity here to get *most* of my content into Markdown (which can reasonably be expected to be a good default choice for another 5 or even 10 years, and which is structured enough to make converting it into other formats feasible). And keeping it in Git, versioned ("as God intended"), is a highly desirable property. Git's long term prognosis as an abstraction, piece of software, and data storage and exchange protocol, is about as solid as these things come in the malleable and ever-changing world of software.

GraphQL provides a decent mechanism for providing access to that data, and it allows for composition of data sources (eg. Git plus a database) behind a single, uniform abstraction. For the more highly dynamic bits (comments, issues, source code browsing etc) I can just delegate to third parties. In Facebook/GitHub/Twitter we trust. But there will always likely be *some* dynamic stuff or metadata that will require a local database (tags, for instance), and GraphQL allows us to put all of that behind a unified facade.

As an added benefit, I get to produce most of my content using the writing tool I most prefer, [Vim]. Combined with a tool like [Marked 2], I've preserved my ability to have live previews.

## Design principles

As noted above, Masochist is still a work in progress, but I've gone into it with some principles in mind to guide my decisions, and as the work has progressed my thinking has evolved. Here are some of the guiding ideas:

- Go where the people are:
  - Source code and issues should live on GitHub. Product pages can live on their respective GitHub project pages.
  - If you have something ephemeral to say, say it on Twitter.
  - It's nice to own some of your content, so track things like wiki articles in this repo. Even if only you are hosting them, Google can still index them and they can provide value to others.
  - If you want people to read your blog-type content, maybe you should just stick it on Facebook or Medium, where people who care about you, or who share you interests, can see it.
  - Writing content in this repo and having a low-friction way to export it elsewhere (eg. to Facebook, Medium etc) is a bonus (note: haven't gotten to the low-friction exports yet).
- Most content should be in plain-text (minimal vendor lock-in) with Markdown preferred.
- At the same time, I should be able to keep my legion wikitext files and not have to do a forced upgrade of them all at once, even if that means doing something hacky and expedient like forking a Ruby process or spinning up a microservice to do the translation to HTML (note: I ended up building the microservice).
- You should be able to `git push` to publish content. There should be no complicated build step (with a zillion dependencies).
- You should be able to `git push` to deploy code too.
- These content and code pushes should involve separate branches, because you should be able to do one without the other.
- Can't create content from the website (no mutations); this is an explicit trade-off that I am making in the name of simplicity (note: I am thinking of doing something else crazy, which is putting an Electron-powered front end over the local Git repo for publishing and editing).
- Note that not being able to create content extends even to things like tagging; tags are embedded in files and mostly only get set up at initial creation time, with later (infrequent) updates requiring a push.
- Things should be fast by default (assets should be efficiently packaged, for example).
- Old URLs should not break, so that means having a router smart enough to redirect to static mirrors of pages from the old Rails app, or to migrated content on GitHub if necessary. Note that a lot of this can possibly be baked into the nginx config, allowing for more simplicity in the router.
- Don't rebuild an auth system. Delegate to a trusted company like Facebook for [login](https://developers.facebook.com/docs/facebook-login/web), and use their [comment board](https://developers.facebook.com/docs/plugins/comments) and [social plugin](https://developers.facebook.com/docs/plugins/like-button) to get interactivity and distribution "for free" (note: you might not even need an auth system.)
- Given that data lives in a Git repo which is the source of truth, make spinning up a new "stateless" EC2 instance easy via Ansible; as the instances are effectively throwaway, it means you don't even need to worry about backups.
- End goal includes complete elimination of dependency on the business logic in the Rails app, and eventually turning it off entirely (note: I've already cut over from the Rails app, but haven't turned it off yet).

[Ansible]: http://www.ansible.com/
[Bugzilla]: https://www.bugzilla.org
[Express]: http://expressjs.com/
[Facebook]: https://www.facebook.com/
[Git]: /wiki/Git
[GitHub]: https://github.com/
[Google]: https://www.google.com/
[GraphQL]: http://graphql.org/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[Marked 2]: http://marked2app.com/
[MediaWiki]: https://www.mediawiki.org/wiki/MediaWiki
[Medium]: https://medium.com/
[Movable Type]: https://en.wikipedia.org/wiki/Movable_Type
[Node.js]: https://nodejs.org/
[REST]: https://en.wikipedia.org/wiki/Representational_state_transfer
[Rails]: http://rubyonrails.org/
[React]: http://facebook.github.io/react/
[Relay]: http://facebook.github.io/relay/
[Redis]: http://redis.io/
[Textile]: https://en.wikipedia.org/wiki/Textile_(markup_language)
[Twitter]: https://twitter.com/
[UBB.threads]: https://en.wikipedia.org/wiki/UBB.threads
[Vim]: https://github.com/vim/vim
[WordPress]: https://wordpress.org/
[mailman]: http://www.gnu.org/software/mailman/
[memcached]: http://memcached.org/
[wincent.com]: https://wincent.com
