---
title: Verbatim
---

Currently running a huge merge between the [Tiger](http://www.wincent.com/knowledge-base/Tiger) and [Leopard](http://www.wincent.com/knowledge-base/Leopard) branches of one of my projects ([WOCommon](http://www.wincent.com/knowledge-base/WOCommon)). [SVK](http://www.wincent.com/knowledge-base/SVK) really makes this kind of thing a breeze... I was about to say, "I don't know how I ever lived without it", but the truth is I *do* know exactly how I lived without it: I basically avoided [branching](http://www.wincent.com/knowledge-base/branching) and [merging](http://www.wincent.com/knowledge-base/merging) and did as little of it as possible.

That's a shame because if I had known about [SVK](http://www.wincent.com/knowledge-base/SVK) sooner I could have kept my development process much more nimble: with branches for long-running, disruptive changes on the one hand, and others for stable, release-worthy snapshots at any time.

I'm afraid I slipped up on this merge by forgetting to pass the `--verbatim` switch to `svk`... So there have been a couple of hundred log messages like [this one](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2007/04/wocommon_r490_2_items_changed.php) which are prepended by some [SVK](http://www.wincent.com/knowledge-base/SVK) metadata (`r1485@cuzco (orig r239): wincent | 2006-12-22 20:17:52 +0100` in this case) that I don't really want cluttering up my log messages... ah well.





### Bugs

Of course, [SVK](http://www.wincent.com/knowledge-base/SVK) is still not perfect and has its share of bugs. After a couple of hundred changes I got this:

    Too many open files: Can't open file '/Users/wincent/.svk/local/db/revs/1262': Too many open files

So fairly obvious there are still some resource leakage issues to be taken care of.

On trying again:

    Transaction is out of date: Out of date: '/trunk/WOBaseCore/WOSingleton+WOBaseCore.m' in transaction '538-1'
    Please sync mirrored path /mirrors/WOCommon/trunk first.

I had to perform the suggested `sync` before proceeding:

    svk sync -a //mirrors/WOCommon

### Conclusion

But little glitches aside, [SVK](http://www.wincent.com/knowledge-base/SVK) is a great tool. For the most part it's just a case of firing off the merge and resolving the occasional conflict; and conflict resolution is a pleasure thanks to the tight integration with [Apple](http://www.wincent.com/knowledge-base/Apple)'s [FileMerge](http://www.wincent.com/knowledge-base/FileMerge). [Subversion](http://www.wincent.com/knowledge-base/Subversion) 1.5 is around the corner and will finally bring some rudimentary [merge tracking](http://www.wincent.com/knowledge-base/merge%20tracking) facilities, but it still has a long way to go to catch up with [SVK](http://www.wincent.com/knowledge-base/SVK).
