---
title: CoreData, weak linking and 10.3 support
tags: blog
---

Ok. So when I started work on [Synergy Advance](http://synergyadvance.com/) I decided to raise the bar on the minimum required OS version to Mac OS X 10.3 (Panther). It just made things easier to drop Jaguar (10.2) support and it allowed me to use delicious new technologies like [Cocoa Bindings](http://developer.apple.com/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html). In the meantime I've continued to support Jaguar in [Synergy](http://synergy.wincent.com/) even though it's caused some difficulties along the way.

Well, when Tiger came along I decided that I would keep my Panther support in place in Synergy Advance but add some extra functionality when the app was launched on Tiger. The trouble that I'm currently facing is that the divide between what can be done in the two versions of the OS is just getting too wide, and one of the major problems is [Core Data](http://developer.apple.com/macosx/coredata.html). It's just too damn powerful, and I can do too many things with it that I can't even contemplate trying to replicate them on Panther.

So now I'm looking at doing a little bit more than just [weak linking](http://developer.apple.com/technotes/tn2002/tn2064.html) ([see also](http://developer.apple.com/documentation/MacOSX/Conceptual/BPFrameworks/Concepts/WeakLinking.html)) a few symbols. We are talking about a central pillar being present on Tiger but not there at all on Panther, and it is going to have repercussions all over the code base. This is going to create a major gap between what Synergy Advance can do on 10.3 and what it can do on 10.4. It's awfully tempting to just drop Panther support, but I'm going to grit my teeth and see if I can solider on without the workload of maintaining what are effectively two separate code bases getting too large.
