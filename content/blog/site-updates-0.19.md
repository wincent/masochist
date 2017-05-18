---
title: Site updates (0.19)
tags: site blog
cache_breaker: 1
---

After yesterday's [big deploy](/blog/site-updates-0.18) there were a couple of obvious wrinkles to be ironed out. I guess its not surprising that when you deploy code containing 1,000 new commits you're going to discover an issue or two when you go live, even if you do have nearly 4,000 specs in your spec suite.

The main user visible changes are:

-   fixed broken [forum indexes](/forums) (actually, this was hot-fixed immediately after deploying)
-   outgoing emails are now `text/plain` again, instead of being inappropriately tagged with a `text/html` content type

Read on for a list of all commits in this update.

    9c840ab Add local schema.rb back into repository
    682c4a1 Git: unignore schema.rb
    e1458f7 Regenerate schema.rb with 'rake db:schema:dump'
    22ebec1 User model: display name must be present
    3e8a85d Add specs for nil params to User.digest method
    af4f1ab User: specs for NULL columns
    387055c Post specs: clean up shared examples
    6eff0ec Post model: add specs for NULL columns
    bac4f52 Post#to_param: flesh out new-record spec
    f3ac690 Articles model: add specs for NULL columns
    87710d1 Attachment model: add specs for NULL columns
    c70b09a Comment model: add specs for NULL columns
    f643110 Bump memcache gem to 1.2.13
    851a354 Update Bundler binstubs
    74959bf Add a regression spec for issue #1670
    c391dcd Add TODO comment to confirmation model
    25b2c88 script/deploy: compare db/schema.rb to expected contents after migrating
    4bf5ce0 Add confirmation model specs for NULL columns
    22fb8d7 Ensure outgoing mail is sent with content-type 'text/plain'
    3b50cdf Email model: add specs for NULL columns
    8b27fd8 Forum and Issue models: add NULL column specs
    71203e2 Link model: add NULL column specs
    b366f54 Message model: add specs for NULL columns
    c32b030 Monitorship model: add specs for NULL columns
    4ed24a7 Update needle documentation (comment on absence of validations)
    569d3a6 Fix typo in code comment in Needle model
    58e4bb2 Needle model: add specs for NULL columns
    ce56f73 Add missing body presence validation to page model
    6fba2e1 Rewrapping in page model for better display on narrow terminals
    062610c Add NULL-column specs to Page model
    473c543 Add specs for NULL database columns to product spec
    0a28944 Repo model: add specs for NULL columns in database
    e218a52 Reset model: add specs for NULL db columns
    2a4190a Repo model: update schema documentation
    d148d3a Drop sessions table
    f86a954 Add NULL-column specs for Tag and Tagging classes
    5738871 Add NULL-column specs for Topic model
    49745d4 Add NULL-column specs for Tweet model
    8325386 Update db/schema.rb
    a9aa02c Adapt monitorship specs for database schema changes
    834dd09 More spec updates to sync with schema changes
    6cf0c09 Update annotations on products#new and products#edit form
