---
title: New version of site backend
tags: site blog
cache_breaker: 1
---

I'm currently testing a new version of the [Rails](/wiki/Rails) application that powers this site. Once that's complete I'll be taking the site offline briefly in order to deploy to the production environment. Read on for a full listing of what's coming.

**Update:** The new version has now been deployed. Please [let me know](mailto:win@wincent.com){.mailto} if you notice any problems.

# What's new

The full list of changes is fairly long, almost 200 commits, so the most obvious user-visible highlights are:

## Polish

    50bb85b Use RestfulPaginator (pretty page URLs) for posts#index
    b930335 Use RestfulPaginator (pretty URLs) in issues#index and support#index
    3634ec5 Use orange CSS styling on hovered major headings
    7ea41a6 Redesign header/navbar CSS

The visuals have been tweaked to give the site more "soul" and identity while still retaining a professional appearances.

## Bug fixes

Generally fairly minor cosmetic issues; some of the more noticeable ones may be:

    9009d1d Humanize issue kind in issues#show main page heading
    c24c1a8 Fix issue kind capitalization in issues#show page title
    7bc0cc5 Fix issue kind capitalization in issues#show bread crumbs
    88841d7 Gracefully handle empty comments
    a30dadd Special-case taggables_search_summary for no existing tags

## Usability enhancements

These are minor tweaks intended to make the site easier to navigate and use:

    fe7c48c Return date-ordered results in tags#show and tags#search
    2efc9f1 Make posts#show tag display match that of articles#show
    653749d Include post excerpt in per-post Atom feed
    0f3bd8a Initial cut at CSS drop-down menu for products
    ee84f33 Highlight selected "tab" according to current controller
    2220539 Provide a link to the search form from the 404 page
    330486c Make "by line" a hyperlinked email address

## New features and other enhancements

These are some of the more obvious changes: things like the ability to comment on [tweets](/twitter) and [wiki articles](/wiki), additional [Atom](/wiki/Atom) feeds, tweet tagging, and `<pre></pre>` blocks can now optionally have line numbers and syntax highlighting.

    b5792f6 Accept tag names including numbers
    1ec03c8 Make tweet model taggable
    647a55c Dynamically add line-numbers to "pre" blocks
    811e2f0 Add CSS styles and rules for Ruby language
    f972473 Initial version of Objective-C syntax highlighting
    0977428 Add C-language syntax highlighting
    4097261 Add "shell" syntax-highlighting
    30ca917 Add UI for comments on wiki articles
    55f9d22 Implement comments Atom feed for wiki articles
    ac8c124 Show comments in tweets#show
    c1022b2 Add per-tweet Atom feed

## Miscellaneous improvements

These are changes aimed at increasing the sense of transparency, openness and dialogue:

    b83b1e5 Add "speech bubble" CSS
    3afbb75 Set up skeletal "About" page
    1dcee43 Improve site identity by including author info
    acd4a27 Make posts, articles and tweets accept comments by default

## Full changelog

The full list of commits follows:

    ed26e91 Set up "l" as shortcut for links#show action
    f7d047c Update links routing specs
    62e89c7 Cucumber: split features into "webrat" and "selenium" categories
    398a63f Merge branch 'maint'
    b566e90 Add bundle identifier to products table
    af9a3cc Merge branch 'maint'
    d624de5 Merge branch 'maint'
    c48af55 Partially revert 87143a7 by turning page caching off in development
    b56bc02 Fix whitespace damage in local nginx config
    54b0b7a Use "_path" instead of "_url" helpers where possible
    e4f9974 Note that can't roll ham logic into generic AJAX workflow
    f93c469 Don't use "secure" cookies in local testing
    074527f Add "selenium" environment for Webrat
    db53b1d Use selenium_server_address to stop Webrat from auto-spawning
    ab52015 Add script/selenium for conveniently launching Selenium server
    02d9a29 Remove stale note about pagination articles#index
    50bb85b Use RestfulPaginator (pretty page URLs) for posts#index
    803b03b Make find_recent methods more consistent
    b930335 Use RestfulPaginator (pretty URLs) in issues#index and support#index
    9009d1d Humanize issue kind in issues#show main page heading
    c24c1a8 Fix issue kind capitalization in issues#show page title
    7bc0cc5 Fix issue kind capitalization in issues#show bread crumbs
    f1babae Correct documentation for grouped_taggables_for_tag_names method
    fe7c48c Return date-ordered results in tags#show and tags#search
    e76c05e Rename "_preview.js.haml" templates to "_preview.html.haml"
    d0ecc0b Stop abusing format.js for live previews
    814b097 Update to RSpec 1.2.5
    6094fdf Only show "ham" button on comments#edit if awaiting moderation
    03f0b55 Only show "ham" button on issues#edit if awaiting moderation
    1650aea Add view specs for topics#edit
    c13dc88 Update to Cucumber 0.3.1
    2efc9f1 Make posts#show tag display match that of articles#show
    522f033 Use abbreviated syntax for "render :partial"
    3892b31 Update to RSpec 1.2.6
    90c2113 Remove unused icons and corresponding CSS classes
    279adca Capistrano: check for "mkdtemp" gem
    595f5fe Standard specs for RESTful routing in tags controller
    866eb56 Use 1.9-style hash syntax to make shorter "it" lines in tags routing specs
    b5792f6 Accept tag names including numbers
    1ec03c8 Make tweet model taggable
    1e5ab4a Rename and move atom_title tweet helper into application helper
    003cab0 Add UI for showing/editing tweet tags
    66e1084 Redirect on successful tweet update in tweets#update
    0326d51 Show "status" pop-up on issues#edit and issues#new
    666eab1 Remove special-casing of "status" in issues#update
    3d7be04 Add CSS styles matching issue kind to issues#show, [/tags/index #index] and support#index
    5c8caf7 Cucumber: Add support for generic paths
    7f1c722 Initial beginnings of attachments controller
    2895ff5 Require admin privileges to access attachments#new
    7d5b88d Prepare "files" directory
    fd506d8 Update to Wikitext 1.6
    56ec636 Jump to body from "more" link in posts#index
    eabc35d Update to Wikitext 1.7
    3634ec5 Use orange CSS styling on hovered major headings
    647a55c Dynamically add line-numbers to "pre" blocks
    b37a932 CSS: make "pre" line numbers stand out more
    5c27856 Update to Wikitext 1.8
    cb4dfea Apply line number only to "pre" blocks with "-syntax" classes
    0c0c89c First cut at syntaxHighlight function
    015f237 Apply syntax highlighting repeatedly
    811e2f0 Add CSS styles and rules for Ruby language
    fdfa54a Ruby syntax: handle "::" namespace separator
    e3fb743 Ruby syntax: add "statement" styling
    df3c278 Ruby syntax: add support highlghting for numeric literals
    39eb477 Treat "skip" rules specially to avoid mangling HTML tags
    f165ccb Skip only anchor tags when highlighting
    cc1bb50 Handle hyperlinks inside string literals
    f972473 Initial version of Objective-C syntax highlighting
    d1fb7d7 Objective-C syntax: handle string and char literals
    dc1d108 Objective-C syntax: add more rules
    3c8c3bd Objective-C syntax: highlight multiline comments
    e1fd4ed Objective-C syntax: add "boolean" rule
    11d2adc Objective-C syntax: fix anchoring of preprocessor directives
    969fb08 Objective-C syntax: simplify preprocessor regex
    ef79646 Objective-C syntax: add "statement" rule
    610c341 Objective-C syntax: add numeric literal rule
    0977428 Add C-language syntax highlighting
    0bf1175 Base Objective-C highlight rules on C rules (clone and override)
    ce4f985 Remove unnecessary temporary variables in stylePreBlocks()
    4097261 Add "shell" syntax-highlighting
    d13ac97 Correct typo in comment
    50063f9 Ruby syntax: add some more keywords
    95ddd65 Capistrano: setup symlink for "files" directory
    6e2fece Add attachment_salt variable to sample config file
    485d13b Clarify nature of BSD license on "legal" page
    0dade6d Add Cucumber to list of test-time dependencies in "legal" page
    dcb74b5 Add workaround for CVE-2009-1904 (BigDecimal crash)
    fa9a6fa Add left and right margin to "pre" blocks
    b83b1e5 Add "speech bubble" CSS
    7e0421c Show blog post comments in speech bubbles
    a6c22b0 Add supporting images for comment bubble CSS
    a4f93e6 Remove "private" CSS logic from posts#show view
    42ae8c6 Add supporting image for admin comment bubbles
    8886d2a Add CSS for styling admin comment bubbles
    94e9eee Apply "admin" CSS to admin comment bubbles in posts#show
    148fba9 Remove TODO notes about data importers
    5e6130b Update source graphics in others/gfx
    ef5889d Remove old design prototype
    b572385 Remove stale comments from posts#show template
    7ce3643 Remove "Create new comment" from comments/comment partial
    6773923 Note "issue #123" autolinking in wikitext cheatsheet
    a2ed337 Remove © entities from the copyright and legal information template
    88841d7 Gracefully handle empty comments
    30ca917 Add UI for comments on wiki articles
    55f9d22 Implement comments Atom feed for wiki articles
    87aaef7 Clarify per-post Atom feed title
    2dc6139 Fix adding a comment to wiki articles with multi-word titles
    653749d Include post excerpt in per-post Atom feed
    d96520d Add attachments table (migration)
    1337a83 Add columns to tweets table for commentability
    0dd2e35 Set up associations for tweet commentability
    5e86c3c Add specs for tweet commentability
    f6e0183 Add UI for setting "Accepts comments" attribute on Tweet model
    ac8c124 Show comments in tweets#show
    bd48a60 Update tweets and comments sweepers for new commentable tweets
    4b85b81 Use non-dynamic JS for links#index
    7053199 Move links#index JS into document head
    11893e2 Make admin forums#index JavaScript static
    3f0b143 Make admin tags#index JavaScript static
    fca634d Make admin posts#index JavaScript static
    e1716c2 Move wiki article JavaScript into document head
    ce888c5 Move blog post JavaScript into document head
    62947c1 Move tweet JavaScript into document head
    07b6655 Extract get_parent method (comments controller)
    339a4dc Teach nested_comment_path method about tweets
    c921ac7 Use polymorphic_path method in get_parent
    e6ddd0f Fix typo in comments controller (Twitter.find for Tweet.find)
    f64a0d2 Teach polymorphic_comments_path helper about tweets
    621302f Teach get_parent method to handle "new" action
    8356a83 Set up comments#new
    643a123 Teach "get_parent" method to handle "new" for forum topics
    50114ee Add non-AJAX comment link to tweets#show
    c1022b2 Add per-tweet Atom feed
    10b2583 Extract "last_activity" helper and use it in the tweets#show Atom template
    dfb3fed Teach link_to_commentable method about tweet comments
    7183170 Improve fidelity of the last_activity helper method
    cfd2687 Use last_activity helper in other Atom feeds
    bd0a933 Pull down comment form via Ajax in tweets#show
    08bc116 Extract ajax_comment_form function into ajax.js
    08eed79 Use globally unique spinner id in ajax_comment_form function
    cc50f50 Call clearAJAXFlash on success in ajax_comment_form
    4cede83 Simplify ajax_select and ajax_check_box by using global_spinner_counter
    e36c280 Rename comments/comment partial to comments/form
    f6b9c10 Redirect to comments#new on failure
    7ea41a6 Redesign header/navbar CSS
    69d87bc Use px, not pt, in CSS rules
    68128fe Add shadow under header
    0f3bd8a Initial cut at CSS drop-down menu for products
    3831756 Add sample text to products drop-down in navbar
    22b829f Turn product names into links in drop-down menu
    ee84f33 Highlight selected "tab" according to current controller
    6b56deb Add supporting images for navbar selection highlighting
    5ea9efe Add drop shadow and transparency to products drop-down
    13f4605 Display gray color behind navbar-bg.png
    0ff0cb9 Partial fix for "log in"/"log out" alignment problem in Firefox
    b50cc5f Move "log out"/"log in" links back to the right
    3afbb75 Set up skeletal "About" page
    905261f Sync up static HTML pages with recent changes to navbar organization
    f2bf875 Add mail icon to "contact" links on static pages and layouts
    2220539 Provide a link to the search form from the 404 page
    adf84fc Provide content for misc#about template
    91c10ef Set up and use APP_CONFIG['admin_name']
    3e09b76 Set up navbar search box unobtrusively
    1dcee43 Improve site identity by including author info
    a30dadd Special-case taggables_search_summary for no existing tags
    f90de3f Use explicit parameters in post helpers
    a551b0d Use explicit parameters in article helpers
    584f4e7 Remove unused "editable" helper method
    0912d6d Use explicit parameters in issue helpers
    9811cf8 Cleanup link_to_prev_issue/link_to_next_issue helpers
    287f5d6 Use explicit parameters in tag helpers
    fa52b72 Patch wikitext so that "nil.w" can accept an options hash
    e0128a7 Replace title_excerpt_and_body_html helper with use of partial
    02f65d1 Replace "title_and_body_html" helper method with partial rendering
    7e8bea9 Remove body_html helper
    5b530e9 Remove excerpt_html helper
    ab37cb7 Use post_path helper in comments_link helper
    acd4a27 Make posts, articles and tweets accept comments by default
    2369ff1 Remove special styling for links inside "when" spans/blocks
    330486c Make "by line" a hyperlinked email address
