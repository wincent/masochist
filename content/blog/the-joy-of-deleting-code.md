---
title: The joy of deleting code
---

Things have been quiet here of late because I've been feverishly trying to get things ready in order for the server move coming up at the end of this month. It's a big move because it's not just moving the box from one place to another; I'm changing data centers, hosting companies, operating systems, and application software all at once, and there is a *lot* of work to be done.

One of the things I'll be doing is replacing the teetering stack of disparate applications that I'm currently running (a mix of applications — Movable Type, UBB.threads, Mailman, Bugzilla, MediaWiki and a number of custom scripts — written in a mix of languages — Perl, PHP, Python and Ruby) with a single unified application, a custom job written in Ruby and built on Rails.

I'm taking the opportunity to greatly simplify things in the "Web 2.0" spirit (ugh, how I hate that term; but I've started to use it because it's lost some of its ridiculous hype feel and has now come to mean a set of widely understood characteristics). And it's actually quite a liberating experience. Each chunk of code that I delete makes me feel lighter, freer.





Take an example, the wiki. I'm not aiming to write a Ruby on Rails port of MediaWiki. I'm aiming to write a basic wiki that does the same things as MediaWiki did for me, in other words a subset of its functionality. I was able to put that together in about a day (the hard part was writing the wikitext-to-HTML translator, that took weeks). And at the end of it I realized that there were some features of MediaWiki that I'd implemented only because I didn't think about what I really needed, I just implemented them because "that's the way wikis are". Here I'm specifically referring to things like keeping revision history for each article. I realized that I don't need it; this is a hand-coded wiki built exactly to my specifications, it is not a community-driven wiki and it's not one where I need to guard against the possibility of vandalism. The entire revision machinery got deleted and I felt great about it. Less code means less lines in which bugs can hide.

A similar thing happened with respect to the localization system. It was one of the first things I developed. It was elegant. But then I realized that I didn't need it. Out it went. There as no sense in building in the ability to localize the application "just in case". And doing localization well isn't easy. If it can't be done perfectly then I don't think there's any sense in doing it at all. I mean, I could take an English string like:

> The requested %s could not be found.

Where the "thing" might be "resource", or "page", or "bug report". Whatever. I had machinery for translating that into Spanish:

> No se ha encontrado el %s solicitado.

The trouble is that "page" in Spanish is feminine, while "resource" is masculine. You can't just drop in a different word without also changing the surrounding words to match its gender.

So I could have a simple but imperfect localization system which I might use one day, or I could write a massively complex and flexible system that handled all the thorny edge cases but at a cost of speed and complexity, or I could just rip out the localization system entirely and worry about it when and if I decided I ever needed it. I opted for the latter.

In the case of the weblog, I got it up and running and then added comments support. Then I realized that I don't necessarily want comments on my weblog. I've never used them before and I shouldn't start using them now just because that's what everyone else does. I'm not really interested in holding conversations with random strangers, in public, *and* hosting it on my own server. I didn't actually rip out the support for comments because I can imagine posts in which I *will* want to solicit comments, but I did turn comments off by default.

Same for the issue tracker: Bugzilla is horrendously powerful, but a lot of users found it scary. I just threw out the ability to define custom statuses (things like "CLOSED (WORKSFORME)") which I had mindlessly replicated because that's what I was used to from Bugzilla. No. Think about what you actually need and then write the tool that gives you *exactly* that, nothing more. For me that's the whole point of Rails. It's supposed to make it easy to quickly implement your ideas. Take advantage of that characteristic to write lean custom apps that do what you ask them to, rather than always trying to write the ultimate in reusable, flexible, generalizable code.
