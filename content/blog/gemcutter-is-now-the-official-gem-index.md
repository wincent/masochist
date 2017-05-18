---
title: GemCutter is now the official gem index
tags: rubygems blog
---

Just got this in the mail:

> You're receiving this email because you're a RubyForge project admin and a recent change probably affects you. A few days ago we repointed gems.rubyforge.org to the gemcutter.org box. This means that Nick Quaranto's excellent gemcutter app is now indexing and serving all the gems - so rather than having two gem indexes, we now have one. As a consequence of this, when you release files to RubyForge you will probably also want to do a "gem push" to get them onto gemcutter and into the main gem index.
>
> Note that you can continue to release gems (and other files) at RubyForge; it's just that gems won't automatically make it into the main gem index.

So while GemCutter is undoubtedly nicer infrastructure for easily publishing gems, this change will result in more work for gem publishers. As GemCutter doesn't even provide a mechanism for including release notes with gems, we are basically forced to perform a two-step process to publish a new version of a gem: push the gem to GemCutter *and* continue to publish to RubyForge as well so that users can actually see release notes and decide whether or not to update (or failing that, publish a changelog to some other project page as an independent step).

I really hope that GemCutter adds at least a release notes feature in the near future.
