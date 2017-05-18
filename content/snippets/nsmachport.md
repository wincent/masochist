---
title: NSMachPort
tags: snippets
---

I'm leaking Mach ports (one per detached thread) in the development build of [Synergy Advance](http://synergyadvance.com/), so I've made a category on `NSMachPort` in my WODebug framework to help me find out when, why and what's happening.
