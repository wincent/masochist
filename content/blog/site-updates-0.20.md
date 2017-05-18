---
title: Site updates (0.20)
tags: site blog
---

Another round of tweaks were just applied to the server. Almost exclusively back-end stuff completely invisible to the user, with a couple of tiny exceptions: the alignment of checkboxes in forms in some browsers (Chrome on Windows, Firefox) has been fixed, as have some broken links on the [404 page](/404.html).

Full list of changes below:

    3478c83 script/deploy: try to speed up deployments (bundle --local)
    b77e8b6 script/deploy: tag $REVISION, not current HEAD
    bda2c08 Drop sessions table from db/schema.rb
    0945dad script/deploy: ignore space change when diffing schema
    8ec3c1b script/deploy: check that db/schema.rb is up-to-date
    8ffa6d7 script/deploy: cosmetic tweak for consistency
    54c77ef Update broken and out-of-date links in 404 page
    8c57baf Fix non-left-aligned checkboxes in forms
    c7494dd Simplify logic in sessions#create
    da5d4db Another layer against session fixation attacks
    fefed7d Remove session.blank? guards
    4a9d190 Gemfile: switch from memcache to memcache-client gem
    5a54ce3 Use mem_cache_store in production
    f751e43 script/memcached: fix broken quit signalling
    63a3cb0 Update Bundler binstubs
    b3558be Reset model: update schema summary
