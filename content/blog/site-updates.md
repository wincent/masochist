---
title: Site updates
tags: site
---

I just deployed an updated version of the site so if you notice any anomalies please let me know (either by opening a [ticket](/issues/new) or [emailing me](mailto:win@wincent.com){.mailto}). A full list of changes appears below.

# Changes

Most of these a code-level changes with little impact at the user-interface level for public visitors (although for admin users there are quite a few improvements, especially on the [AJAX](/wiki/AJAX) side of things).

Some noteworthy changes for public visitors are:

-   You can now open tickets with only a summary (no description). The intention here is to make the [issue tracker](/issues) much easier to use as a super-easy-and-convenient "TODO" list; I'm hoping that users won't abuse the feature and file bug reports or feature requests without the necessary details.
-   I've [jettisoned](/blog/goodbye-prototype-scriptaculous) [Prototype](/wiki/Prototype) and [Scriptaculous](/wiki/Scriptaculous) in favour of [jQuery](/wiki/jQuery), which means a lot less [JavaScript](/wiki/JavaScript) has to be downloaded on the first page-view and should result in much better load times.
-   A couple of bugs related to "authenticity tokens" being inappropriately included in the search form were fixed:
    -   The search form on static error pages like the [404 (not found)](/404.html) and [500 (internal server error)](/500.html) pages now works.
    -   "Authenticity tokens" are no longer leaked onto page-cached pages, effectively fixing likely breakage of the search form on all such pages.

Here is the full list of commits made to the repository since the previous deployment:

    602902f Allow "body-less" issues (issues with a blank description field)
    76924a6 Fix specs broken by recent changes
    9a205e1 Abort if no selection found in ajax_select
    de95256 Teach ajax_check_box and ajax_select to show flash messages on error
    ffa1f67 Correct AJAX flash positioning
    7817c6b links#update.js: render JSON rather than redirecting
    449d47d Provide better error strings for failed AJAX updates
    f244954 Be even more paranoid about adding new methods to ActiveRecord::Base
    abf764e Use slightly safer pattern for extending ActiveRecord::Base
    b7ef64a Add "flashable_error_string" method to ActiveRecord::Base and use it
    17df853 Provide better error messages for failed AJAX updates in links controller
    2bb4fe5 Make authentication return non-empty response text on access errors
    171a9ad Make edit_in_place() show flashes for AJAX errors
    355e27d Remove Affero GPL license file
    7a48f63 Remove inline CSS styling on AJAX spinners
    dd788d1 issues#show: include ajax.js only if admin
    e482a93 CSS: change "spinner" id to "preview_spinner"
    50b7919 Remove now-used "spinner_tag" helper
    dfb514a Drop "refresh" text entirely for live preview
    8d94471 Change "update" to "refresh" for live preview link
    b4654fd Use emdash instead of brackets for live "preview" link
    e88550b Drop "fieldName" parameter to setup_preview_link
    bfc5483 Use setup_preview_link in posts#new and posts#edit
    ab750e2 Use Haml shorthand for preview_link id
    b840b18 Use setup_preview_link in articles#new and articles#edit
    6d11209 Eliminate (harmless) stray slash in ajax.js
    7b17781 Extract setup_preview_link function
    e655c1f Migrate link_to_update_preview from helpers/tweets_helper to JS
    692bf75 New "update" (preview refresh) icon
    ae956ce "Unobtrusify" field observation in tweets#edit and tweets#new
    dea53f7 "Unobtrusify" field observation in posts#edit and posts#new
    95c04d8 "Unobtrusify" field observation in articles#new and articles#edit
    9b45004 Fix stray slash in app/views/js/issues/show.js.erb
    fb3156c observe_field: infer field from other parameters
    930ad9e observe_field: set up "complete" function default and use it
    b371281 observe_field: set up "error" function default and use it
    a283c37 observe_field: set up "success" function as a default and use it
    74d3b0c Rely on 30 second default to observe_field function
    ebe9cbc observe_field: move interval default to top of function
    c0b21ed observe_field: move default "before" setup to top of function
    dc45261 observe_field: perform default "before" action if none supplied
    6b8aaa3 Bring class-based flash CSS into line with id-based flash CSS
    044f524 Show flash-like feedback for live preview AJAX errors
    e2290f5 Return diagnostic text for 404 AJAX requests
    6623b2e Comment cleanup in JavaScript files
    7231f1e spec_helper.rb whitespace fix
    2e9dee5 Remove dead specs for articles helper
    942bdfa Use hard-coded links to work around url_for quirks (test env)
    2768719 Use $ shorthand for jQuery functions
    f966eac Fix "misc" controller breakage in admin namespace
    aa7a7a5 Split AJAX JS into separate file, ajax.js
    14f6f05 Replace Prototype gsub(), evalJSON() and round() functions
    b6b6098 Show title and body in posts#new and post#edit views
    8bacfcc Include title in initial preview in posts#new and posts#edit
    47dbd63 Hook up title observation in posts#new and posts#edit
    cecd981 Remove kludgey global in "observe_field" JS
    1a7e6a9 Increase observation interval of live post previews
    2584a1f Remove all references to Prototype and Scriptaculous
    b9835cf jQuery live preview for posts#new and posts#edit
    f35f320 jQuery live preview for tweet#new and tweet#edit
    07a25b4 Use spinner_tag helper everywhere
    6ccc7d3 jQuery "observe_field": only do AJAX post if content actually changed
    a7772a5 jQuery version of live preview in articles#new and articles#edit
    f8b7bc9 lib/sortable: don't propagate authenticity tokens
    e12c8e6 Improved lock, tick and sort triangle icons
    7f4dcb8 Remove default "catch-all" routes
    445c0db Explicitly map route for heartbeat#ping action
    f1823fc Rewrap admin issues controller for better display on narrow terminals
    bb223e4 Remove unused admin/issues#update
    7e9326d Update topics and comments controllers to work with new AJAX helpers
    f4ee659 jQuery rewrite of button_to_moderate_model_as_ham method
    09d0667 jQuery rewrite of button_to_destroy_model method
    70ee8bb Special case AJAX and Atom requests in record_not_found method
    7d965ff Remove various unused actions from issues controller
    e9a0bc3 Cucumber: add "loose" matching of page text
    545c109 Update specs for JS controller routing changes
    8fdc1a8 Remove old in-place-editing plugin
    2c94dac Switch to new edit-in-place for admin/forums#index
    9b2191c Comment consistency fix
    1d010ec Indentation fixes in admin/tags controller
    f764e48 Switch to new edit-in-place for admin/posts#index
    d48a285 Remove redundant comment from js/links/index.js.erb
    77fa1f9 Switch to new edit-in-place for admin/tags#index
    810cf7a Handle namespaced delegating controllers in JsController
    5b04a2d Teach dynamic_javascript_include_tag to handle namespaces
    e2bc498 Remove redundant set_issue_summary specs
    8436758 Don't leak authenticity tokens onto cached pages
    c753545 Partial "revert" of 6bb575b: stop using authenticity tokens in AJAX requests
    ed05c94 Don't check authenticity tokens for any AJAX requests
    4ef9112 Teach edit_in_place to handle multiple matching elements
    0732e05 Highlight errors using red CSS after an AJAX error
    3111f57 Correct description of link model
    9ff49a7 Partial replacement of in-place editing for links#index
    99b7f80 Correct copyright date
    d386d19 Prepare links#index for dynamic JavaScript
    8d6b0d5 Move AJAX JS from issues#show into application.js
    6bb575b Set up authenticity token global in application layout
    2445e40 Remove redundant call to in_place_edit_for
    2fc98a1 Remove unused js_for_attribute method
    15e7fcb Remove unused spinner_for_attribute method
    16d61cf Make search field in nav bar use jQuery instead of Prototype
    7313787 Make link_to_issue_search use jQuery instead of Prototype
    c0c73c2 Remove the set_protected_attribute method
    bb8f937 Mark set_protected_attribute for future removal
    1e786dd Use set_protected_attribute to set pending tags in issues controller
    64090f6 Better nil handling in set_protected_attribute method
    466b735 Link to tags index from wiki index
    55f15d9 Skip request forgery protection in search controller
    23ccaec Clarify comments on local_request? method
    bb30767 Cucumber 0.3.0: fix breakage caused by World API churn
    af58be7 Make issue tags editable-in-place via AJAX
    7ab65f2 Teach ajax_select helper an "include blank" option
    7bb87dd Create an empty whitelist of accessible attributes for all models
    eb6b7ab Add attr_accessible declarations to message, needle and tweet models
    4a9f368 Document table fields for Needle model
    cbcfe07 Remove references to "status" in ajax_select function
    f4f903d jQuery replacement for ajax_check_box method
    2e19f5a Change to BSD license in JS files
    b505940 Note that can't use config.include trick with FixtureReplacement
    73b4e46 RSpec: move controller helper methods into separate file
    7970e94 Add FreeBSD license file and clarify licensing plans
    22730ac Move dev-specific config into appropriate environment
    24733b7 Update to RSpec 1.2.4
    27e2bfb "Smart" capitalization for new articles
    6b6ccca Revert "Capitalize article titles when not found"
    4def946 Capistrano: change command order in help
