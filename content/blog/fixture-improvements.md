---
title: Fixture improvements
tags: blog
---

Just found out via [the Rails Envy podcast](http://www.railsenvy.com/2007/10/30/rails-envy-podcast-episode-005-10-30-2007) about [improvements](http://ryandaigle.com/articles/2007/10/26/what-s-new-in-edge-rails-fixtures-just-got-a-whole-lot-easier) to the much-derided [Rails](http://www.wincent.com/knowledge-base/Rails) fixture implementation, recently [added into the trunk](http://dev.rubyonrails.org/changeset/8036).

This addresses some of the problems that [FixtureReplacement](http://www.wincent.com/knowledge-base/FixtureReplacement) set out to cure. I'll be sticking with FixtureReplacement, however, because:

-   All test data is conveniently located in a single file, `example_data.rb` (depending on how much test data you need this may be a plus or a minus)
-   The convenience methods (`create_model` and `new_model`) allow you to create new test data on the fly; as such:
    -   You have more flexibility; you're not limited to a pre-determined set of fixtures set in stone before your test run
    -   You can create/tweak your test data closer to where it is actually used, making for much more readable [specs](http://www.wincent.com/knowledge-base/specs)
    -   The selective overriding capability allows you to make the attributes that are relevant to a particular situation really stand out (see [this example](http://www.wincent.com/a/about/wincent/weblog/archives/2007/10/custom_validation_matcher.php))
    -   FixtureReplacement is great for experimenting in the `script/console`

I think there's room for both "Foxy Fixtures" (ugh) *and* something like FixtureReplacement in core Rails. I'd like to see the latter merged in some day.
