---
title: Site updates (0.13)
tags: site blog
---

Just deployed some minor tweaks to the site:

    e9fa6b1 Drop unnecessary step from wiki.feature
    150ca3c Cucumber: add table-based model creation step
    a56bf6e Cucumber: add relative dates feature
    44e85e5 Cucumber: apply "Given-When-Then" pattern more consistently
    3b81dd9 Cucumber: make "I am" optional were appropriate
    01aecfe Rename login feature to sessions feature
    65a2a4b Add cucumber/test/development configuration to database.sample.yml
    bb45eb8 When sending resets, do not insist on using default
    46b71d2 Cucumber: make initial "I" optional in all steps
    4be50a9 Cucumber: drop unnecessary pronouns from features
    7e80e26 Rate-limit passphrase resets so as to prevent abuse
    d8bb8e9 Add missing migration file
    2a897ba Return 403 status for attempts to comment when commenting is disabled
    74f9361 Update to Capybara 0.1.3
    5bbb119 Modify features for bug fixed in Capybara 0.1.3
    d6e23b7 Add specs for FixtureReplacement example data
    140af26 Add "meta/whitespace" specs
    620acd4 Move Rails monkey patches into config/initializers/monkey_patches
    5ce3247 Fix spec/meta/whitespace_spec.rb for Ruby 1.8.5
