---
title: Wikitext in the wild
tags: wikitext
---

I've never really known how many people use my [wikitext](/wiki/wikitext) extension, but today I got my first ever feature request for it! (If you're curious, you can check out the request in [ticket \#1268](/issues/1268).)

So I have a user!

My curiosity was piqued. I decided to hit [Google](/wiki/Google) and see if I could find any other evidence of use.

# Sightings in the wild

At this stage I've managed to stumble across three sightings:

-   First up I found [Hoboken](http://github.com/jchupp/hoboken/tree/master) by Jeffrey Chupp; it's a simple [wiki](/wiki/wiki) built using Sinatra that requires wikitext
-   There's also the [ActsAsMarkup](http://www.viget.com/extend/introducing-actsasmarkup-a-markdown-textile-wikitext-and-rdoc-plugin/) project, an ActiveRecord plug-in by Brian Landau that supports wikitext as one of the possible markup formats
-   Finally, I found [this GitHub fork](http://github.com/stephenjudkins/ruby-wikitext/tree/master) by Stephen Judkins, which currently has [5 followers](http://github.com/stephenjudkins/ruby-wikitext/watchers) (including me and the original forker, the "mother forker" if you will)

It's that last one which had me most surprised, because you can see there's a guy by the name of [BJ Clark](http://github.com/RobotDeathSquad) that actually took the time to understand the parser (about 2,500 lines of [C](/wiki/C)) and produce [this commit](http://github.com/stephenjudkins/ruby-wikitext/commit/e768034b66bebb61c66d5c78d7579b218ecd11e5).
