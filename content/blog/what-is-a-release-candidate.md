---
title: What is a "release candidate"?
tags: rails blog
---

Here we go again. I've [complained about this already](http://wincent.com/a/about/wincent/weblog/archives/2007/12/what_is_a_relea.php) in the past, but it looks like it's time to mention it again. The [Rails](/wiki/Rails) team has a totally non-standard, recklessly non-conservative definition of what a "release candidate" is.

From the [official weblog](http://weblog.rubyonrails.org/2009/3/13/this-week-in-edge-rails):

> Things have been pretty busy on the development side since the release of Rails 2.3 RC2. The core team has been making a serious effort to review all of the open bugs and patches with an eye towards getting us a solid release. At this point, the bar for new features is set fairly high, but even so, there have been an incredible 94 commits in the week since RC2 – mostly fixes to ensure expected behavior and stability.

So, we've already seen two of these so-called "release candidates", and they're *still* open to new features being added? I don't really care how "high the bar" is at this point; it's just crazy to be talking about new features at all at this stage.

Back when I was complaining about this the last time (December 2007), I wrote this:

> I know [Subversion](/wiki/Subversion) sucks for branching and merging, but they need to get their code into a non-broken [SCM](/wiki/SCM) like [Git](/wiki/Git), start making use of at least two branches (one for mainline development and one for maintenance), start cooking invasive changes in topic branches, and adopt some discipline in their approach to releases, especially major ones.

So my wish has only come half-true. They did move to a non-broken SCM, but their release engineering is still too reckless.
