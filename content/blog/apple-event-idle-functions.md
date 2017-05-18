---
title: Apple Event "idle functions"
tags: blog
---

So I had implemented an Apple Event "idle function" in [Synergy Advance](http://synergyadvance.com/) so that it would remain responsive to the user even when iTunes blocked and refused to respond to Apple Events (as it does when its preferences window is open, for example).

Well, it turns out that I'm not all that happy with the kinds of things you can achieve from such a function. Sure, I can stop the spinning beachball cursor from appearing. I can even replace it with an old-school "animated wristwatch" cursor in most circumstances, but weirdness in the `NSCursor` implementation makes this hard to do if its in response to a click on the Global Menu (sending the `set` message has no effect). And you can do little else from within that idle function.

So I've ditched it and have switched to a threaded model. Now all Apple Event comms take place on a separate thread. This makes things considerably more complicated internally, but the end result will be much more elegant from the user perspective.
