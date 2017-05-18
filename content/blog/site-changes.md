---
title: Site changes
tags: site blog
---

The changes [mentioned yesterday](/blog/upcoming-site-changes) are now in place. The main points of interest are:

-   new product pages for [Synergy](/wiki/Synergy): these are much more navigable and attractive than the old pages
-   a host backend updates (170 commits)

A full listing of code-level changes appears below. As always, if you spot any glitches please let me know (via email to <win@wincent.com>, or opening a [ticket](/wiki/ticket) in the [issue tracker](/wiki/issue_tracker).

    ec73672 script/deploy: fix incorrect paths in "switch" subcommand
    9b66b93 script/deploy: migrate using "migrations" environment
    2499b23 Capistrano: truncate help, directing people to script/deploy
    5ccb056 script/deploy: pass "--shared" flag to "git clone"
    ca68a65 script/deploy: clarify usage of --rev parameter
    6e13b8d script/deploy: usage improvements
    25e81ff script/deploy: add "help" subcommand and switches
    17c5154 script/deploy: add stop, start and restart subcommands
    8ed0918 script/deploy: add "disable" and "enable" subcommands
    3388c36 script/deploy: bump Rack requirement to 1.0.0
    f146557 script/deploy: be less chatty by using "rake --silent"
    5907cc6 script/deploy: add "spec" subcommand
    57ec742 script/deploy: add informative text to unlock/lockdown commands
    e89fec3 script/deploy: add commands for migrating databases
    acf98d8 script/deploy: complete implementation of the "deploy" subcommand
    69fcc40 script/deploy: echo timestamp for new deployments
    fcb575e script/deploy: warn if currently checked out branch is unexpected
    40a50d8 script/deploy: beginnings of "deploy" command
    f2d0131 script/deploy: better feedback for directory tests
    90694f8 script/deploy: perform multiple commands per SSH invocation
    6435ea6 script/deploy: check for gems and versions
    c4141bc script/deploy: check more directories and writability
    5d0fbc1 script/deploy: initial implementation of "check" command
    c16b3b2 script/deploy: implement unlock and lockdown commands
    3edaef2 script/deploy: option handling enhancements
    66b81f8 script/deploy: warn of early exits
    878ae47 Initial version of script/deploy
    b8733f6 Fix page-finding bug in products controller
    0faa997 Redirect products index to old site
    2f484e0 Capistrano: remind user to force use of 2.2.0
    096338e Update Synergy link in products drop-down menu
    3cbcfff Add "centered-column" CSS for product pages
    e6b1eab Add script/mysqld: starter/stopper script for MySQL
    7db0188 Silence warning caused by move to nginx 0.7.x series
    9143b76 Fix warning caused by move to nginx 0.7.x series
    e924a4c script/nginx: fix errors caused by moved to nginx 0.7.x series
    d8846aa Add "hide from front page" checkbox to Product form
    bed7a88 Add "hide_from_front_page" field to Product model
    b6909bd Update to Haml 2.2.3
    96cbb03 CSS: right-pad blockquotes
    a1ffa77 Products CSS: More space between "dl" items
    cfe32d6 CSS: make admin comment text a little darker
    4e86b42 Use less-sickly colors for admin blog/wiki comments
    a8a50a5 Rails 2.3.3: reapply ed05c94 (Don't check authenticity tokens for AJAX)
    6c6f19e Tighten up regular expressions in Article model
    7f8bbe1 More explicit formatting error message for redirect text
    05e1493 Rails: update to 2.3.3
    fb5753f Update Wikitext extension to version 1.9
    698f980 Haml: update to 2.2.1
    777dc97 cap: enable Git submodules
    24c3807 Fix errors in Product specs
    2e6e4d9 Revert "Trim unnecessary CSS for "button" type"
    f411324 Trim unnecessary CSS for "button" type
    1627f1d Fix unbalanced brackets in issues#show template
    abdf22e Haml 2.2.0: drop unnecessary "==" interpolation markers
    6572d7b Haml 2.2.0: use new abbreviated attribute syntax where appropriate
    f578782 Update to Haml/Sass 2.2.0
    3b7fa81 Remove admin_only helper
    827b171 ajax.js: remove duplication by extracting option_tag helper function
    02c39ce Add optgroup support to ajax.js
    d96a1f0 Group product select menu according to categories
    5554f29 Capistrano: check for product icon directories
    f6aadd6 Use absolute icon path in Product model
    b52a653 Update products link on "About" page
    43f5bdf Add breadcrumb navigation to "tweet" views
    31c9003 Tweak breadcrumb and product-container margins
    1a654f9 Add breadcrumbs to products, articles and posts views
    595c4bc product_page_title helper: don't mutate page title
    526aaef Use categorized_products method in products#index
    f0c3fc5 Add Product#categorized_products method
    0ff941d Add ability to edit product position and category from forms
    409548d Sort products by category then position
    97e7ac0 Migration: add "position" and "category" columns to "products" table
    b857848 Use "happier" colors for product navbar buttons
    e70be17 lightbox: fix spinner glitches
    626e60d lightbox: animate scrolling
    0ebabde lightbox: scroll viewport to center of lightbox
    1c27d46 Correct comment typo
    1f92b97 Products CSS: use relative CSS URLs
    753651e More asset juggling
    2d46747 Assets: add script icon
    07505d0 Make "assets" subdirectory
    f28d36d Git: ignore cached products pages
    28e2b7b Remove .htaccess file
    2134343 Add support images for product pages
    bfe1713 CSS: make lightbox thumbnails appear "inline"
    fcffc77 CSS: make lightbox captions truly centered
    ecedf16 CSS: add "column" class
    d9e4a52 Give products drop-down menu a high z-index
    8252af9 Do not put product header, footer and page body in separate divs
    92164ea lightbox: add "alt" and "title" attributes to the "expand" widget
    80771f0 Add support graphics for "expand" widget and large spinner
    10492bc Include products JavaScript (for lightbox) in products#show template
    00a253f lightbox: show caption in bottom border of lightbox
    9092cbf lightbox: show caption in lightbox tooltip
    ce47d8e Add graphics required by lightbox implementation
    201f2a1 Add "minified" version of products.js file
    6b1e86e lightbox: "uniquify" handling of click events
    13defc1 lightbox: replace old image when re-showing lightbox
    caec3b5 lightbox: don't show spinner if image is already preloaded
    76ea1d2 lightbox: use "unbind" in "enable_expand_widgets" function
    53ca457 lightbox: remove unnecessary nested "each"
    c4df39a lightbox: reenable "expand widgets" when dismissing a lightbox
    3d8f114 lightbox: dynamically position lightbox relative to thumbnail
    69256dd Add CSS styling and close widget to lightbox
    7a32c6c lightbox: drop temporary variables in show_image function
    d9a39b0 lightbox: move auxialliary helper functions to bottom
    7bccf23 lightbox: dim out "expand widgets" upon disabling them
    b766f9d lightbox: disable clicks on all lightboxes when showing image
    5596523 lightbox: remove unwanted debugging alert
    62a3e40 lightbox: Extract show_spinner function
    1c239b2 Add 12px margin to lightbox thumbnail frames
    b5b5b94 lightbox: show preloaded images on click
    88d361e lightbox: show spinner on click
    0e5e592 lightbox: preload images on mouseover (mouseenter)
    e2e0d8a Initial version of products JavaScript (lightbox implementation)
    295457d Add CSS for screenshot thumbnails with "expand widgets"
    2530738 Implement page caching for products pages
    a47befe Simplify tweet sweeper
    b0d385d Add minified versions of JavaScript files
    ea8efeb Capistrano: run js:minify:deploy rake task during deployment
    86aab39 Drop -v switch to yuicompressor
    901bd38 Remove invisible non-breaking spaces
    e8c475a Use symlinks for switching between JavaScript variants
    dd6b6c2 Add "maxified" versions of some JavaScript
    d442806 Add rake tasks for minified JavaScript
    80e5bef Drop "min" component from jQuery script
    5b36d36 Add various support graphics
    5ddd3e0 Add cart graphics from Bartelme Design
    cd6e540 Fix products#edit button label
    9482140 Add button to destroy pages
    f09072d Split page validations across multiple lines
    861e287 Implement pages#update action
    b4014ee Simplify params to embedded_product_page_path method
    8dc12ef Add pages helper
    b63bbde Implement pages#edit
    eb191db Extract pages#new form into a separate partial
    ac4edcf Flesh out products#create action
    6a22e82 Implement pages#create action
    0b33fe0 Drop unnecessary parens in tweets#new template
    864c493 Set up pages#new
    f90902d Provide table for viewing/editing/adding pages from products#edit
    0c02be7 Show page title in HTML title span for products#show
    c533233 Routing: nest "pages" resource inside "products" for editing purposes
    f2d06a9 Set up pages association and show default page in products#show
    e6eab81 Migration: add product id to pages table
    2b507ed Synch static HTML files with changes in dynamic layout
    e635caf Make "Products" link in navbar point to products controller
    8bbd7cc Add "Page" model
    05bc634 Remove unwanted trailing periods from flash messages
    d5b7a0f Use shorter syntax when possible when using redirect_to
    4b498ac Add products#update action
    8d33202 Add products#edit action and template
    2cf064a Clean up links in products#new template
    a238759 Remove cruft from comments#edit template
    bfbd008 Add comment_form_path helper method
    8773d2e Use comments form partial in comments#edit template
    8014b14 Trim commented-out code from comments#form partial
    c2db557 Extract product creation/editing form into a separate partial
    9ad4e45 Don't set empty CSS class on unselected navbar items
    1d089b6 Teach "navbar_selected?" method to recognize product pages
    cf15195 Add "footer" and "header" fields to products#new template
    41dd5d2 Make "footer" and "header" accessible on product model
    a4494ee Add products#show action
    8ec7940 Add products#show template
    ca104a2 Add initial CSS file for products controller
    a33e520 Migration: Add "header" and "footer" fields to Product model
    837658b Remove obsolete "stories" directory
    4047b04 Remove executable permissions from non-executable files
    3bb5063 Add Wincent Login Tool to products menu in navigation bar
