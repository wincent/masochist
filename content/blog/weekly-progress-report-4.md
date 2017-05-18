---
title: Weekly progress report #4
tags: progress blog
cache_breaker: 1
---

Time for another progress report. As always, the usual disclaimers apply. This is just an overview of commits on the currently checked-out branch in each repository, so any work done on side branches doesn't show up. The time limits involved are also only approximate; for example, I produced this report by passing in `10.days.ago` to my [Git](/wiki/Git) script, so some overlap or gap relative to the [the last report](/blog/weekly-progress-report-3) is possible.

# leopard/Synergy

    3a7877f Bump copyright year in version file
    9480d47 Update an import (broken by WOCommon to WOPublic migration)
    065829c Add buildtools as a submodule rather than using a relative path
    f70b724 Update Xcode project references to new buildtools location
    e401844 Update headers to synch with recent refactorings
    c4bcf03 Make WOPublic a submodule
    e409772 Remove all references to WOCommon
    fb038e1 Update version numbers in README file
    002b0f0 Bump version numbers and copyright range for 3.5a9 release
    a7c1fc2 Bump version number post-release
    36a24a7 Remove stale localized resources
    720a661 Add ability to temporarily disable last.fm submissions
    106ffb3 Flush preferences to disk immediately
    a79503f Bump version number for 3.5.1a release
    ffe595e Bump version number post-release
    3c9b8a3 Detect and offer to quit existing versions running at launch time

    33 files changed, 2887 insertions(+), 42247 deletions(-)

# leopard/WOPublic

    fa5898a Add WOLoginItem* classes to Xcode project file
    f2b8d13 Raise if WOLoginItem initialized with a nil path
    143994e Add buildtools as a submodule
    31c7469 Update references to use submodule version of buildtools
    483315b Fix header breakage
    9fbb9c6 Add missing files to project

    7 files changed, 137 insertions(+), 18 deletions(-)

# leopard/WOTest

    353acba Xcode project noise
    0a3374e Add buildtools submodule
    3e6d5da Update project references to submodule version of buildtools

    3 files changed, 29 insertions(+), 21 deletions(-)

# unversioned/wincent.com

    67d55c3 Show multiple flash items as bullet points
    b9eff44 CSS: Make bullet points in flashes look nice
    e107048 Use emphasis in the stale article flash
    6be658f Show tweet number in tweets#show HTML template
    3bb5063 Add Wincent Login Tool to products menu in navigation bar
    4047b04 Remove executable permissions from non-executable files
    837658b Remove obsolete "stories" directory
    a33e520 Migration: Add "header" and "footer" fields to Product model
    ca104a2 Add initial CSS file for products controller
    8ec7940 Add products#show template
    a4494ee Add products#show action
    41dd5d2 Make "footer" and "header" accessible on product model
    cf15195 Add "footer" and "header" fields to products#new template
    1d089b6 Teach "navbar_selected?" method to recognize product pages
    9ad4e45 Don't set empty CSS class on unselected navbar items
    c2db557 Extract product creation/editing form into a separate partial
    8014b14 Trim commented-out code from comments#form partial
    8773d2e Use comments form partial in comments#edit template
    bfbd008 Add comment_form_path helper method
    a238759 Remove cruft from comments#edit template
    2cf064a Clean up links in products#new template
    8d33202 Add products#edit action and template
    4b498ac Add products#update action
    d5b7a0f Use shorter syntax when possible when using redirect_to
    05bc634 Remove unwanted trailing periods from flash messages
    8bbd7cc Add "Page" model
    e635caf Make "Products" link in navbar point to products controller
    2b507ed Synch static HTML files with changes in dynamic layout
    e6eab81 Migration: add product id to pages table
    f2d06a9 Set up pages association and show default page in products#show
    c533233 Routing: nest "pages" resource inside "products" for editing purposes
    0c02be7 Show page title in HTML title span for products#show
    f90902d Provide table for viewing/editing/adding pages from products#edit
    864c493 Set up pages#new
    0b33fe0 Drop unnecessary parens in tweets#new template
    6a22e82 Implement pages#create action
    ac4edcf Flesh out products#create action
    eb191db Extract pages#new form into a separate partial
    b63bbde Implement pages#edit
    8dc12ef Add pages helper
    b4014ee Simplify params to embedded_product_page_path method
    861e287 Implement pages#update action
    f09072d Split page validations across multiple lines
    9482140 Add button to destroy pages
    cd6e540 Fix products#edit button label
    5ddd3e0 Add cart graphics from Bartelme Design
    5b36d36 Add various support graphics
    80e5bef Drop "min" component from jQuery script
    d442806 Add rake tasks for minified JavaScript
    dd6b6c2 Add "maxified" versions of some JavaScript
    e8c475a Use symlinks for switching between JavaScript variants
    901bd38 Remove invisible non-breaking spaces
    86aab39 Drop -v switch to yuicompressor
    ea8efeb Capistrano: run js:minify:deploy rake task during deployment
    b0d385d Add minified versions of JavaScript files
    a47befe Simplify tweet sweeper
    2530738 Implement page caching for products pages
    295457d Add CSS for screenshot thumbnails with "expand widgets"
    e2e0d8a Initial version of products JavaScript (lightbox implementation)
    0e5e592 lightbox: preload images on mouseover (mouseenter)
    88d361e lightbox: show spinner on click
    b5b5b94 lightbox: show preloaded images on click
    1c239b2 Add 12px margin to lightbox thumbnail frames
    62a3e40 lightbox: Extract show_spinner function
    5596523 lightbox: remove unwanted debugging alert
    b766f9d lightbox: disable clicks on all lightboxes when showing image
    7bccf23 lightbox: dim out "expand widgets" upon disabling them
    d9a39b0 lightbox: move auxialliary helper functions to bottom
    7a32c6c lightbox: drop temporary variables in show_image function
    69256dd Add CSS styling and close widget to lightbox
    3d8f114 lightbox: dynamically position lightbox relative to thumbnail
    c4df39a lightbox: reenable "expand widgets" when dismissing a lightbox
    53ca457 lightbox: remove unnecessary nested "each"
    76ea1d2 lightbox: use "unbind" in "enable_expand_widgets" function
    caec3b5 lightbox: don't show spinner if image is already preloaded
    13defc1 lightbox: replace old image when re-showing lightbox
    6b1e86e lightbox: "uniquify" handling of click events
    201f2a1 Add "minified" version of products.js file
    ce47d8e Add graphics required by lightbox implementation
    9092cbf lightbox: show caption in lightbox tooltip
    00a253f lightbox: show caption in bottom border of lightbox
    10492bc Include products JavaScript (for lightbox) in products#show template
    80771f0 Add support graphics for "expand" widget and large spinner
    92164ea lightbox: add "alt" and "title" attributes to the "expand" widget
    8252af9 Do not put product header, footer and page body in separate divs
    d9e4a52 Give products drop-down menu a high z-index
    ecedf16 CSS: add "column" class
    fcffc77 CSS: make lightbox captions truly centered
    bfe1713 CSS: make lightbox thumbnails appear "inline"
    2134343 Add support images for product pages
    28e2b7b Remove .htaccess file
    f28d36d Git: ignore cached products pages
    07505d0 Make "assets" subdirectory
    2d46747 Assets: add script icon
    753651e More asset juggling
    1f92b97 Products CSS: use relative CSS URLs
    1c27d46 Correct comment typo
    0ebabde lightbox: scroll viewport to center of lightbox
    626e60d lightbox: animate scrolling
    e70be17 lightbox: fix spinner glitches
    b857848 Use "happier" colors for product navbar buttons
    97e7ac0 Migration: add "position" and "category" columns to "products" table
    409548d Sort products by category then position
    0ff941d Add ability to edit product position and category from forms

    152 files changed, 1648 insertions(+), 921 deletions(-)

# unversioned/wincent.git

    1d1c4af Bash: add alias for yuicompressor
    abe6fbf Ack: treat "builder" and "rake" files as Ruby
    ccb399d Vim: add nbsp to listchars

    3 files changed, 5 insertions(+), 2 deletions(-)
