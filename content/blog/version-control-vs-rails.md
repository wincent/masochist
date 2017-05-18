---
title: Version Control vs Rails
tags: blog
---

Version Control wins.


### What actually happened

Try to upgrade to the first release candidate for [Rails](http://www.wincent.com/knowledge-base/Rails) 2.0:

    rake rails:freeze:edge TAG=rel_2-0-0_RC1

This didn't work due to a connection failure, but before trying again I did a `git st` and noticed that *everything* under `vendor/rails` had been deleted. Atomicity would have been nice. So what next? Let's try again:

    rake rails:freeze:edge TAG=rel_2-0-0_RC1

It get's better. You *can't* try again because of the damage done by the previous failure:

    rake aborted!
    no such file to load -- /Users/wincent/trabajo/unversioned/wincent.com/src/config/../vendor/rails/railties/lib/initializer
    /Users/wincent/trabajo/unversioned/wincent.com/src/rakefile:4
    (See full trace by running task with --trace)

Version control to the rescue, specifically [Git](http://www.wincent.com/knowledge-base/Git):

    git co vendor/rails

Now we can retry the rake task and everything works fine.
