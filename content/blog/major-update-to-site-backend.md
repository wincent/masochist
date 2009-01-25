---
title: Major update to site backend
tags: site
---

I've just deployed a rather large update to the [Rails](/wiki/Rails) [app](/wiki/app) which powers this site. There were *lots* of changes, so if anything is behaving strangely please get in touch with me by email (<win@wincent.com>) or by opening a [ticket](/wiki/ticket).

If you look at the number of lines changed since the last deployment it looks quite scary:

    1707 files changed, 47088 insertions(+), 90484 deletions(-)

Even scarier if you don't pass in the rename and copy detection switches (`-M`, `-C`) to `git diff`:

    2067 files changed, 76581 insertions(+), 119977 deletions(-)

Although almost all of those are updates to stuff that's frozen in `vendor`, including [Rails](/wiki/Rails) itself:

       3.0% vendor/rails/activerecord/test/
       3.1% vendor/plugins/rspec-rails/spec/
       3.1% vendor/rails/actionpack/lib/
       3.2% vendor/gems/haml-2.0.3/
       3.2% vendor/rails/actionpack/lib/action_view/helpers/javascripts/
       3.3% vendor/gems/wikitext-1.2.1/ext/
       3.3% vendor/rails/activesupport/lib/active_support/
       3.4% vendor/gems/haml-2.0.6/
       3.9% vendor/rails/
       4.3% vendor/gems/
       4.5% vendor/rails/actionpack/test/
       5.0% vendor/plugins/rspec/
       6.2% vendor/gems/wikitext-1.3.2/ext/
       8.3% vendor/rails/railties/doc/guides/source/images/
       8.9% vendor/rails/activesupport/lib/active_support/values/
      10.1% vendor/rails/railties/doc/guides/source/
      19.7% vendor/rails/railties/doc/guides/html/

If we look at the count of changes to actual application code (in `app`, `lib` and `spec`) the numbers are much less frightening:

    160 files changed, 662 insertions(+), 1347 deletions(-)

And a lot of those were changes to specs:

       3.3% spec/views/search/
       3.5% spec/views/
       3.6% app/helpers/
       4.0% app/views/issues/
       4.3% lib/
       4.8% spec/
       6.1% app/models/
       7.4% app/controllers/
      12.3% lib/tasks/
      12.8% spec/models/
      13.1% app/views/
      24.1% spec/controllers/

Even so, we're still talking about quite a few big changes, not least of which is the switch over to [SSL](/wiki/SSL) to provide protection against cookie capture attacks, so I'd appreciate you keeping me informed of any anomalies you might see.
