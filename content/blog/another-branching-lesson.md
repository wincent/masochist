---
title: Another branching lesson
tags: blog
---

In the migration from [Tiger](http://www.wincent.com/wiki/Tiger) to [Leopard](http://www.wincent.com/wiki/Leopard) I learnt another, painfully obvious lesson about [branching](http://www.wincent.com/wiki/branching) and [merging](http://www.wincent.com/wiki/merging).

Even though [SVK](http://www.wincent.com/wiki/SVK) cures the pain of trying to do merging with [Subversion](http://www.wincent.com/wiki/Subversion), there will always be some types of branch for which automated merging is not going to be possible. The move from [Tiger](http://www.wincent.com/wiki/Tiger) to [Leopard](http://www.wincent.com/wiki/Leopard) is one such situation because it doesn't just involve updates to [API](http://www.wincent.com/wiki/API) but a change to the language as well (to [Objective-C](http://www.wincent.com/wiki/Objective-C) 2.0).

This means that the two branches very quickly diverge because the language changes are pervasive. So when you make a change on one branch and try to merge it back into another you find that it's not just a case of adding or removing lines, but of having translate them at the same time. It's kind of like trying to automatically merge changes between the [Ruby](http://www.wincent.com/wiki/Ruby) and [Python](http://www.wincent.com/wiki/Python) ports of a project; you can "merge" but you have to rewrite along the way so you may as well just do it manually.

In my case I don't intend to keep the two branches in lock-step with each other so [cherry picking](http://www.wincent.com/wiki/cherry%20picking) will be fine. In hindsight, though, I see that I branched too soon and so I'm now having to redo a lot of previously done work.
