---
title: WODockIcon class
tags: blog
---

When I first started [Synergy Advance](http://synergyadvance.com/) one of my early goals was to implement the ability for the user to show and hide the Dock icon at will. I also envisaged the ability to show the cover art of the currently playing track in the Dock. This was fairly simple, so I just stuck the code for it in the application's main controller class.

But since then things have gotten more complicated. After the icon was designed, and it turned out to be a speaker, the obvious idea was to animate that speaker during playback (credit goes to [Elroy](http://elroyonline.net/), the designer of the icon, for that idea). Then I decided to add a progress meter. Then, seeing as the animated icon looked so cool, it seemed only natural to offer to show the cover art in the Dock as a badge rather than as a full icon. All of this is optional so the user can turn any of these features on or off in different combinations with the other options.

Basically this adds up to a lot of image compositing and can be taxing on the CPU. Along the way I've made some optimizations. A couple of days ago I decided to do a little bit more optimization, and at that point decided to split all of the Dock icon code off into a separate class, `WODockIcon`. That's what I've been working on today. Instead of the main controller class having to worry about managing animation timers, progress bar timers, caches, compositing and so forth, it can just tell the `WODockIcon` class to do it all with simple messages like `startAnimation`, `stopAnimation` and `setBadge:`. The complexity is all neatly encapsulated away in the `WODockIcon` class, making the main controller less complex and easier to maintain.

I also split some Dock-visibility related code off into an `NSApplication` category in a framework, once again to keep the main controller more simple and to make the Dock-manipulation code available to anything which links against the framework (preference panes, plug-ins and the like, as well as the main application).
