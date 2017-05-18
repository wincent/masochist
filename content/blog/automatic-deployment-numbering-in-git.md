---
title: Automatic deployment numbering in Git
tags: git blog
cache_breaker: 1
---

A frequently-asked [Git](/wiki/Git) question is, "How do I get Git to embed an automatically and atomically-incrementing revision number in my files?", or some related variant. (Strictly speaking, the question is not included in [the official FAQ](http://git.or.cz/gitwiki/GitFaq), bit it does crop up on the mailing list pretty often).

Invariably the answer is, you can't (easily) do this and it fact it doesn't even make sense to even try in a [distributed version control](/wiki/distributed_version_control) system.

Usually protests follow: "but I *have* to have automatically and atomically-increasing revision numbers!".

"So, *why* do you need these numbers?"

"Because we've always had them".

"*Why* have you always had them?"

"Because they're necessary to uniquely and unambiguously identify the version of the product."

"If that's what you need then you can easily embed such a number (a commit hash) as part of your build process."

"But I don't want a hash; I want an integer in base-10."

"*Why* do you want an integer in base-10?"

"Because it needs to be human readable."

"*Why* does it need to be "human readable"?"

"Because you can't do marketing with hexadecimal version numbers."

"*Why* are you trying to do marketing with a *build* number anyway?"

Basically, if you continue asking these "why" questions eventually the argument boils down to "because we've always done it that way". In many situations a [DVCS](/wiki/DVCS) will allow you to work in a wide variety of ways, including some of the ways that you may already be used to from your experiences with centralized [version control systems](/wiki/version_control_systems). But just because they *can* work in that way doesn't necessarily mean that you *should* make them work in that way, and this apparent "need" for automatically and atomically-incrementing, base-10 integer "revision numbers" is one of those cases.

Even so, many people insist and end up jumping through hoops using [gitattributes](http://www.kernel.org/pub/software/scm/git/docs/gitattributes.html), [githooks](http://www.kernel.org/pub/software/scm/git-core/docs/githooks.html) and other such devilry to impose a broken, old, unnecessary workflow on a new system which doesn't need or benefit from it. Some people go so far as to *tag* every single commit just so that they can get their precious incrementing base-10 "revision numbers".

So today when I saw a link to [this article](http://blog.rfwatson.net/2009/06/03/automatic-version-numbering-using-git/) titled, "Automatic version numbering using Git", I thought, oh no, here we go again.

It turns out, however, that the title is a little bit misleading. It's actually about "automatic *deployment* numbering". The author is indeed aware of the nonsensicality of trying to impose atomic, automatic, unique, incrementing revision numbers on a distributed system:

> This means that the version number changes, dependent on whose machine the application is running on. This is confusing for clients and developers alike, and quite frankly pretty useless.

The idea then is to number deployments:

> The solution, so far, is to reject the idea of basing the version number on the number of commits altogether, and instead base it on the number of deployments. This makes a lot more sense, because it hooks into the visible product actually changing: when a deploy is carried out, one can reasonably expect the finished product to have changed in some significant way. During this time, any number of commits could have been made or reverted, or branches created or destroyed; but the version number will still only increase by one.

In the specific context of a web application that is deployed to a central location, I think this is actually a pretty decent idea. In fact, when I deploy new versions of this site (about once per month) I end up tagging them manually with `git tag` because it is usually a bit more pleasant to write `git log v0.1..v0.2` than `git log 0bfe319..665eef1`.

So this would indeed work for very specific projects which meet the following criteria:

-   is a web application (or a non-web application for which the notion of "deployment" makes sense)
-   deployment may occur only to a specific, central location; in other words, it makes sense for an application like the one running this site but not for an open source weblog platform like [Mephisto](http://mephistoblog.com/) which is deployed by many

In these cases it's not all that different from manually bumping the revision number in [Git](/wiki/Git) itself; it's just that it happens automatically. I don't know if I deploy often enough to warrant automating this tagging process, but I think it's an interesting idea. The tags I currently use are really just for my own use (so that my deployed versions stand out when I review the history using `gitk`, but it might be worth extending my deployment process to spit this info out into the deployment directory somewhere and make it visible in the interface.

# Update: November 2009

In the end I did wind up automating the process. A while ago I [got rid of Capistrano](/blog/getting-rid-of-capistrano) and replaced it with a bare bones shell script, so adding in a couple of commands to do automatic tagging of deployed versions was a piece of cake.

This is what it looks like:

    REVISION=$(ssh $SERVER cat $LATEST/REVISION)
    if [ ! $(git describe --exact-match $REVISION 2> /dev/null) ]; then
      TAG=$(git describe $(git rev-list --tags --max-count=1) | awk -F . '{ printf "%d.%d", $1, $2 + 1}')
      echo "  warning: deployed version $REVISION is not yet tagged; tagging now as $TAG"
      git tag -s -m "Deployed $(LANG=en_GB.UTF-8; date '+%d %B %Y')." $TAG
    fi

It's by no means perfect but it does get the job done:

-   this gives me version numbers like 0.8, 0.9, 0.10, 0.11 and so on; when the code base goes [open source](/wiki/open_source) I'll evidently end up having to change this system and go back to manually tagging "real" releases again
-   it assumes that the latest tagged commit is the latest tag; a necessary evil given that `git rev-list` outputs in reverse-chronological order based on commit dates, not tag dates
-   you might think that this would cause problems if you deploy a version from December on the `master` branch and later decide to deploy an older version from November's `maint` branch, but in practice this is unlikely to come up because...
-   it only applies a new tag if the deployed commit doesn't already have one; so this means that you can deploy version "0.x", then "0.x+1", and end up rolling back to "0.x" without any problems
-   it suits the linear nature of this kind of web development fairly nicely (most development on single branch, no real need to maintain parallel branches for long periods of time etc)
