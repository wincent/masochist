---
title: Will it blend?
tags: blog
---

David Heinemeier Hansson is [again arguing](http://weblog.rubyonrails.com/2007/9/25/designing-scalable-architectures) that [Rails](http://www.wincent.com/knowledge-base/Rails) is, after all, scalable:

> Jason Hoffman from Joyent had a great tutorial at RailsConf Europe on Scaling a Rails Application from the Bottom Up. It defines the key terms and measurements of scaling and explains why scaling in essence have nothing to do with Rails. It's a great story to have in hand when the inevitable fudzy "But does it scale?" nonsense is thrown at you.

The thing is, it seems that David is working with a very particular definition of "scaling" that seeks to sidestep the key issues at the heart of Rail's scaling problems (and there *are* problems). "Scaling in essence has nothing to do with Rails". Really? *Nothing* at all? Nothing at all *in essence*? There are more than a couple words in there that are setting off the sophistry alarm bells...

My personal opinion is that Rails is a pretty nice framework but that it is undeniably slow, resource hungry, and only "scales" when you throw bucket-loads of money at it. And of *course* it "scales" if you do that... But that doesn't make the performance problem vanish into thin air; it's still there and it's not "fudzy nonsense" but a legitimate concern. Compare with the alternatives and note that they all pretty much scale better than Rails (application performance, that is; not even touching the subject of programmer productivity which is another thing entirely).

It doesn't mean that Rails programmers should all just throw in the towel: but it does mean that there is still much work to be done on improving performance, both in Rails and in [Ruby](http://www.wincent.com/knowledge-base/Ruby) itself.
