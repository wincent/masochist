---
description: Letting folks now about the move to a new domain name
tags: blog
title: Moving to wincent.dev
---

By the time you read this, _if_ you read this, it's because I've transferred the old domain, `wincent.com`, to a new owner[^owner], and moved all of my stuff over to a new domain: `wincent.dev`. (Technically, I actually moved the stuff a month or so before the transfer, and set up redirects so that anybody who visited a page on `wincent.com` got redirected to the equivalent page on `wincent.dev`.) As [I said on Twitter/X](https://twitter.com/wincent/status/1783887370703532251), I'm sorry for any hassle caused by the switch! In this post I'm going to give a bit of background on why I decided to make this change, but before I get into that, here's a summary of what you should do:

[^owner]:
    Fun fact: I didn't actually know who the new owner was until after the sale, because they acted through an intermediary. My guesses were (not necessarily in order):

    1. [A Swedish drum stick manufacturer](https://www.wincent.se) running their site at https://www.wincent.se/
    2. [A German singer](https://en.wikipedia.org/wiki/Wincent_Weiss) running his site at https://www.wincentweiss.de/
    3. [A crypto start-up](https://www.crunchbase.com/organization/wincent) running their site at https://www.wincent.co/
    4. [A gun safe manufacturer](https://www.facebook.com/wincentsafe/) running their site at https://www.wincentpro.com/

    In the end, it was the crypto start-up.

1. Update your bookmarks and links.
2. If you cloned something from `git.wincent.com`, update the URL to `git.wincent.dev` instead.
3. If you have a `wincent.com` email address in your contacts, update it to `investor.relations@hurrell.net` instead[^investors].

[^investors]: This last one is a joke. Or is it? 😉

# Details

## Web links

Please update any bookmarks you may have for `wincent.com` to point at `wincent.dev` instead.

I hate broken links, and I'm routinely disappointed to look at articles I wrote 10 years ago — and sometimes _much_ more recently than that — and find that almost every link to an external site has succumbed to bit-rot and now 404s[^404s] or goes to the completely wrong place. As far as _internal_ links go, however, I've gone to some effort to keep links working over the years, setting up redirects when necessary. Some things have slipped through the cracks, but overall, my internal links have been pretty robust over the years.

[^404s]: "404s" — a neologism for returning a "404 Not Found" HTTP status code.

Well, this time it's my turn to be the bad guy: now that the domain name transfer has taken place, all of a sudden there are a _bunch_ of links out there on the web that no longer work, and there's nothing I can do to redirect them because I'll no longer control the domain. Some of these links I have the ability to edit and have already updated (eg. links from descriptions on videos on [my YouTube channel](https://youtube.com/c/GregHurrell), links from READMEs on [GitHub projects](https://github.com/wincent?tab=repositories) etc), but there are many others that are controlled by third-parties and are going to stop working. Breaking all those is not something I take lightly, but the deal presented itself on favorable enough terms that I had to conclude that accepting it made sense[^emotional].

[^emotional]: There's an emotional component to this as well, because some of my most important online activity for the last 20+ years has taken place on `wincent.com` (I originally acquired it back in May 2003). And the dot-org, `wincent.org`, was the first domain name I ever registered (on 18 September 1999, unless I'm mistaken). Since then, I've been using `wincent` as a handle in a bunch of places, some of them quite meaningful (eg. [GitHub](https://github.com/wincent) and [Twitter](https://twitter.com/wincent), among others). I built up my blog to the point where I was getting 50,000 page views per day (in the lead-up to the first public release of Mac OS X). I made a living writing and selling software products under the Wincent brand, hosted on the dot-com domain. The path that eventually led to me getting hired at a Bay Area startup, getting hired later by Facebook, and later on by GitHub, started with Wincent. It was only after weeks of deliberation that I actually got to the point where I felt comfortable with proceeding with the sale, and the negotiations spanned months.

For the most part, I think search engines will be relatively quick to pick up pages at their new locations. As an example, soon after setting up the redirects I did [a search for "understanding rebase conflict markers"](https://kagi.com/search?q=understanding+rebase+conflict+markers) at [Kagi](https://kagi.com), and it immediately showed the new domain. [The same search](https://www.google.com/search?q=understanding+rebase+conflict+markers) on [Google](https://google.com)[^google], however, was showing the page at the old domain. A few hours later, it caught up.

[^google]: Google is a search engine that aims to "organize and make accessible the world's information". You may have heard of it, but in case you haven't, I have included a "hypertext" link that you can click on and check it out.

## Git

Another issue is that many people have made clones of Git repositories hosted at `git.wincent.com`. These should all be updated to point at `git.wincent.dev` instead (or heck, just switch to GitHub URLs, which won't be changing any time soon). Example commands to update the remote for a project (in this case, [Command-T](https://github.com/wincent/command-t)) are:

```
# To set the "origin" remote's URL to git.wincent.dev:
git remote set-url origin git.wincent.dev:public/command-t.git

# To set the "origin" remote's URL to GitHub:
git remote set-url origin git@github.com:wincent/command-t.git
```

## Email

I mostly stopped using `wincent.com` email accounts years ago[^one], so there is unlikely to be any change needed here for most folks.

[^one]: I did have one poor email user who had been using a `wincent.com` email account intensively, as their primary address, for many years, though, and for her the migration was painful. 😔

# The future

I can't promise that `wincent.dev` will be around forever, but my plan is to keep it around for as long as I can (that means, as long as I'm alive and of sound mind, and able to pay the bill!). I chose it as a replacement for `wincent.com` for three reasons:

1. I have a lot of muscle-memory for typing "wincent followed by a three-letter TLD[^tld]". I figure I should be able to retrain myself to type `wincent.dev` pretty quickly[^others].
2. I'm not aware of any other development-focused "Wincent" in the world, either a person or corporation, that is likely to want the dot-dev domain in the future. As such, it is a reasonably safe bet that I won't receive any offers to buy it and it should be easy enough to retain it effectively indefinitely.
3. Registration fees for dot-dev domain names are, for now at least, in the same ballpark as for dot-com domains.

[^tld]: Top-Level Domain.

[^others]: Funnily enough, I still own `wincent.org` and `wincent.net`, and those are also three-letter TLDs, but given that so much of the content I post and host is development-related, the dot-dev seemed like the best fit. Take, for instance, `git.wincent.dev`, which seems somehow better than `git.wincent.org` or `git.wincent.net` for hosting Git repositories. 🤷

# That's a wrap

And that brings us to the end. I don't know how many folks will find this post, but I hope that at least some get to see it. Thank you all for your understanding!
