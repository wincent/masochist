---
title: Capistrano
tags: capistrano
---

So Jamis just [announced](http://weblog.jamisbuck.org/2009/2/25/net-ssh-capistrano-and-saying-goodbye) that [Capistrano](/wiki/Capistrano) development is over.

> So where do these projects go from here? That’s entirely up to the community. If you have a neat idea for any of these, please feel free to fork the project on GitHub (see my profile page for the links to the individual projects) and release updates on your own schedule.

I'll be very curious to see where things go from here. At the time of writing, Capistrano [has](http://github.com/jamis/capistrano/network) 686 "watchers" and 61 "forks" on GitHub. Will one of these emerge as the new "official" Capistrano?

People say that one of the great things about GitHub is the whole "fork-happy" ecosystem that it cultivates. One of the features of this ecosystem is that it is person-centric and not project-centric. That is, you get "the" Capistrano from `github.com/jamis/capistrano` and not `github.com/capistrano` or even `github.com/capistrano/jamis`.

So what happens now? As much as people love distributed version control, people still generally like to know what "the" authoritative version of a project is. That's why we name our projects; to given them an *identity*. Embracing distributed version control doesn't necessarily mean that you have to renounce the concepts of identity and authoritativeness.

That's what is going to be particularly interesting about this case, seeing as Jamis has made a point of saying "do what you please", rather than passing the mantle on to a new maintainer. People can "fork" and "release updates", but isn't it a little bit meaningless to talk about "releases" of something emanating from an unorganized diaspora?

# Capistrano and me

For me, Capistrano was finished a long time ago anyway. By its very nature, it is a tool that either works (ie. it deploys stuff) or it doesn't. Is it really something that needs to be constantly "improved" and "enhanced"? Is it performance critical and in need of optimization? Is it missing features that if implemented would allow you to do something you couldn't do before? Basically, for me the answer to all of these questions is "no", "no" and "no".

So, if the tool already does *exactly* what you need in a very important area (ie. actually deploying your app), why would you risk breaking it? Do you change your lightbulbs pre-emptively when the manufacturer starts using a different metal for the contacts on the base?

I'm still using Capistrano version 2.2.2 (and Jamis just released 2.5.5) because all post-2.2.2 releases include changes which break my deployments. They say, "If it ain't broke don't fix it". In the case of Capistrano, I'd say, "If it ain't broke don't break it".

Basically, I'm surprised Jamis continued with Capistrano for as long as he did. I've never really understood why he would work on something that was already "finished". And I've never really appreciated the way in which that "evolution" of the code base was carried out in a way that so easily broke existing recipes.

# Update (27 February 2009)

I see [discussion about the maintainership](http://groups.google.co.uk/group/capistrano/browse_thread/thread/76817cb286e0aba6) has already flared up in the [Capistrano](/wiki/Capistrano) [Google](/wiki/Google) [group](http://groups.google.co.uk/group/capistrano).

Jamis chimes in with:

> The only reason people look to "/jamis/capistrano" as the canonical copy is because that's what's been linked to in the past. As soon as another repo because the "canonical" one (whatever that means), it becomes a documentation issue. There's really nothing especially discoverable about "/jamis/capistrano", and there are already a LOT of capistrano forks on github, and it never really caused trouble before.

So "whatever" does "canonical" mean? Geez. What a question. Well, I'd say, the "canonical" source is (obviously) the one linked to from <http://capify.org/>, which is supposedly the Capistrano "home page".

It's such a bleedingly obvious assertion that it strikes me as absurd to even have to answer the question. All this existential doubt and philosophizing about identity; it's as if postmodernist theory has suddenly erupted into the IT world — by way of distributed version control — decades after it made a splash in academia.
