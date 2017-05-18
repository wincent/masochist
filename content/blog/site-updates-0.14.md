---
title: Site updates (0.14)
tags: site blog
---

Just deployed some minor updates to the site (full list appears below). Nothing really exciting, just maintenance stuff like updating some dependencies and tweaking the deployment script to work with my new hosting arrangements in [the cloud](/wiki/the_cloud).

    d726f1c Add real 403.html error page
    7ed3a78 Correct page title in 403.html
    8124e8b Compress PNG files using OptiPNG
    acb69ad Refactor: extract handle_http_status_code method
    17407ad Add initial version of Attachment model
    341bf3c Update to Capybara 0.2.0
    a0670cb Update vendored nokogiri 1.4.1, ffi 0.5.3, rack-test-0.5.2
    92f9313 Ignore build cruft of nokogiri and ffm gems
    e52db5d Update to culerity-0.2.6 gem
    5b5c67f Remove jarib-celerity gem
    d51a63a Update to ffi-0.5.4, json_pure-1.2.0 and selenium-webdriver-0.0.13
    42e650c Update to cucumber 0.6.0 and cucumber-rails 0.2.3
    ed80e27 Remove features/support/selenium.rb
    6ecbded Update setup notes for recent gem updates
    afd1ef5 Add jquery.js symbolic link
    6de3c03 Link to jquery.js (symbolic link) rather than fully-qualified version
    9038c18 Update to capybara 0.3.0
    6057d28 Update to Haml/Sass 2.2.17
    68cf09f Update to rspec 1.3.0 and rspec-rails 1.3.2
    227f2b0 Update to jQuery 1.4
    25f1b34 Use new jQuery 1.4 element creation with attributes
    f3abd0a More readable wrapping in escapeHTML function
    6006e04 Avoid repetition in clearAJAXFlash function
    9417424 Remove logging statement from ajax.js
    beb0ad6 Empty AJAX flash after fading it out
    e7292e3 deploy: always deploy from master
    7ccf62f deploy: point at new server
    ce9b09b deploy: monit groups no longer needed
    603a348 deploy: remove ADMIN_HOST
    711d935 deploy: run some commands as root
    b8d5808 deploy: dispense with monit groups, refer to unicorn instead
    c31ac88 deploy: refactor common prefix into bail()
    3a4aa15 deploy: new server settings
    e171f15 deploy: group settings variables for clarity
    ceb5133 deploy: update usage
    86310d7 deploy: extract warn() function
    4dd6dcb deploy: provide explicit user for all remote commands
    0c6734a deploy: consistent indentation for trapped exit message
    ae432a1 deploy: drop check for rubygems-update
    f65ea1d deploy: don't pass --shared to git clone
    bf5a363 deploy: tell "git clone" and "git checkout" to operate quietly
