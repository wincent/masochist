---
title: JavaScript-backed flash
tags: 
cache_breaker: 1
---

So up until recently I had only been caching [Atom](/wiki/Atom) feeds seeing as they are what gets hammered the most. Then about a week ago I added a new resource to the site and figured that if I was caching the Atom feed I may as well cache the HTML pages as well; it was probably less than 5% additional effort for twice as much caching.

Having never done HTML page caching, I quickly ran into a beginner's mistake: allowing flashes to appear on cached pages (and said flashes to be forever immortalized in the static HTML).

The immediate workaround was to make sure I didn't show flashes on those pages. Generally they were merely informative flashes saying things like "Successfully created new record", for things which were obviously evident anyway.

An alternative "workaround" that I've since seen suggested in many places on the web is simply, "don't cache those pages". Hmm. There's something about that recommendation which I don't like...

In any case, I decided to see if I could transmit my flashes via cookies and insert them into the page dynamically using [JavaScript](/wiki/JavaScript). Turns out that it's not too difficult to do, although it is a little bit fiddly.

But the question is, was this a good idea? It'll make page caching a lot easier now, which means a faster site and the option of making more complex, information-rich pages. But on the other hand, users without JavaScript enabled aren't going to see flashes any more.

Is this a really bad thing? How many users surf without JavaScript? And how many of those perform actions which would result in flashes being shown? How many flashes tend to be fluffy frills like "Logged in successfully", and how many are important warnings?

Rhetorical questions, I know... I do have comments functionality built into this site, but I don't want to turn it on yet because I haven't got pretty CSS for it yet. Bear with me...
