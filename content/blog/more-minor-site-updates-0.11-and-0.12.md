---
title: More minor site updates (0.11 and 0.12)
tags: site blog
---

Just deployed a couple of minor revisions to the site.

Changes from 0.10 to 0.11:

    f0c3e9e script/deploy: fix broken symlinking in "switch" task
    6ee9c8f script/deploy: use "git rev-list" to get latest tag
    f207281 Remove "logout"/"login" links rather than just hiding them
    9231fea Move login/logout step definitions into "sessions.rb" file
    1d16082 Capybara: add step definitions for "has_css?" matcher
    34835c1 Add "I am not logged in" as a synonym for "I log out"
    cee31de Cucumber: fix spelling error in login feature
    525c843 Capybara: add step definitions for "have_content" "within"
    f6b3c7b Capybara: add debugging step (text dump)
    4eae550 Cucumber: more login features
    6fd6425 Update to Rails 2.3.5
    89edee4 Use sendmail for mail delivery in production mode

Changes from 0.11 to 0.12:

    a948fb7 Set "envelope from" on all outgoing email
