---
title: Crashes
tags: snippets
---

Fixed [bug \#387](http://www.wincent.com/a/support/bugs/show_bug.cgi?id=387) (a crash) and [bug \#389](http://www.wincent.com/a/support/bugs/show_bug.cgi?id=389) (an abort), both caused by some sort of flakey and unreliable behaviour across different versions of Mac OS X, different versions of the development tools, and different versions of [Synergy Advance](http://synergyadvance.com/). Basically I had no choice but to completely remove the anti-corruption features which is a shame because I spent so much time developing them and they have worked well up until now; but now there are just too many variables and the whole thing is just too brittle and fragile. Probably better off without the protection.
