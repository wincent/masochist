---
title: Minor site updates
tags: site blog
---

Just deployed a new version of the site, mostly consisting of changes to the supporting infrastructure (testing frameworks and the like). About the only user visible change should be that [JavaScript](/wiki/JavaScript) is now minimized a little more efficiently using the [Google](/wiki/Google) [Closure](/wiki/Closure) compiler, so page loads should be about 1% faster.

Other than that it should be business as usual, but if you do spot any problems please let me know via email (to <win@wincent.com>) or via a [ticket](/wiki/ticket) in the [issue tracker](/wiki/issue_tracker).

The full list of code-level changes appears below:

    a84f3c9 Use Google Closure compiler for JavaScript minimization
    adc82b9 script/deploy: switch to Google Closure compiler
    85b5eb9 Remove references to YUI Compressor
    6f7d7d4 irbrc: use Hirb in script/console if available
    13fbbe4 Cucumber: use more consistent naming for "see" steps
    69a7c55 Update to FixtureReplacement 3.0
    e66081d Add link to GitHub ticket for FixtureReplacement issue
    f0bfbd2 Capistrano: remove stray files
    4ee93cc Update to FixtureReplacement 3.0.1
    17c3499 Switch to Capybara + Culerity in favour of Webrat
    6a1deb1 Use Capyraba default for "@javascript" tests
    07d6354 Vendor all gems required by "cucumber" environment
    c5899c1 Capybara: use "have_content" for text matching
    4e82b16 Update to Culerity 0.2.4
    d997d50 script/status: eliminate false positives for "running"
    76761fe script/mysqld: silence warnings about directory permissions
    bdad662 script/mysqld: make normal startups less chatty
    4091f2b Tighten gem version requirements in "cucumber" environment
    a0870ec Update to Haml/Sass 2.2.14
    4e213f9 Update to Cucumber 0.4.4
    6eaf418 Add exception mailer for internal server errors
    8c0285f Make exception reports more readable by substituting "RAILS_ROOT"
    6f354a2 Don't create "Rails root" regexp for every stack frame
    e56935e script/deploy: REVISION file should contain SHA1 of commit
    b5728d6 script/deploy: offer to tag deployed versions if not already tagged
    38e90cd script/deploy: make "current" point to real dir, not "latest" symlink
    bbf7150 Fix bug in FFI 0.5.3 Gem extension extconf.rb
