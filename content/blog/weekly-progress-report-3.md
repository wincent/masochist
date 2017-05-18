---
title: Weekly progress report #3
tags: progress blog
---

It's been a while since I posted the last report, but now I am back online again it's time to resume. As always, the usual disclaimers apply. This is just an overview of commits on the currently checked-out branch in each repository, so any work done on side branches doesn't show up.

# leopard/Synergy

    132ef8d Update LSMinimumSystemVersion
    56c31e3 Update references to WOLoginItem and WOLoginItemList
    c36e8cc Remove unwanted "Copy headers" phases
    3a7877f Bump copyright year in version file
    9480d47 Update an import (broken by WOCommon to WOPublic migration)
    065829c Add buildtools as a submodule rather than using a relative path
    f70b724 Update Xcode project references to new buildtools location

    910 files changed, 222163 insertions(+), 31964 deletions(-)

# leopard/WOCommon

    6e3957a Migrate WOLoginItem and WOLoginItem list to WOPublic
    0ca8c3a Migrate WO_FREE macro to WOPublic

    5 files changed, 0 insertions(+), 414 deletions(-)

# leopard/WOPublic

    59b2e77 Use emalloc in NSFileManager path utilities class
    f08c5f9 Import WOLoginItem and WOLoginItemList from WOCommon
    32f13ac Clean up WOLoginItem and WOLoginItem for consistency with WOPublic
    9ecb23c Import WO_FREE macro from WOCommon
    8ca24a1 Update names in WOLoginItem
    f951946 Guard against redefinition of WO_STRINGIFY and WO_STRINGIFY_CONTENTS
    416c37d Fix copy/paste bug in WO_STRINGIFY_CONTENTS macro

    6 files changed, 520 insertions(+), 2 deletions(-)

# leopard/login-tool

    e5a2e69 Update SystemEvents header on Mac OS X 10.5.7
    d030d09 Synch with changes in WOCommon and WOPublic
    703e246 Remove unused SystemEvents header
    78bcd1e Remove references to NSDictionary creation category
    503b595 Use "foundation tool" configuration in Release builds
    c431b37 Add BSD license info
    e1306c5 Remove WOCommon symlink
    19e38a7 Git: ignore com.wincent.buildtools.gitrev.h
    c475969 Add login-tool_Version.h file and corresponding target
    87bb676 Make what(1) produce meaningful output
    26bbc22 Use "entity" instead of "var" in stringification macros
    c514810 Add -v switch to show version information at runtime
    c115e5a Remove stale comment
    f1a35a0 Replace (unwritted) man page with (empty) README
    e22f2f4 Replace WOPublic symlink with a submodule
    dd7780d Update project references to WOPublic submodule
    bc16164 Add buildtools as a submodule
    cef0e94 Update Xcode project references to buildtools configurations
    d27b68f Add simple "Distribution" target

    13 files changed, 411 insertions(+), 1857 deletions(-)

# unversioned/bansshee

    ac20e64 Remove unused TODO file
    03d05ed Clean-up headers
    b2ab556 Rewrap INSTALL file to fit within 80 columns
    15db16d Update URLs and email addresses
    deb64b3 Update repository info
    2948578 Update contact info
    51dc611 Rename the "support" directory to "contrib"
    c7e02d0 Add contrib files for RHEL 5.3
    706b12b Update default settings for RHEL 5.3
    afda604 Add secure.conf override file for RHEL 5.3
    f9ef31c Add README for RHEL 5.3 contrib files
    f4576b0 contrib/RHEL-5.3: update logwatch script to match "Adding JUMP rule..."
    2888f92 Partially revert "Update default settings for RHEL 5.3"
    b7d68ec contrib/RHEL-5.3: add sample configuration file
    3dab4da Update list of distros in contrib
    15887c4 Rewrap README to fit within 80 columns
    bb79984 Add low-level configuration information to README file
    e5de35d Remove out-of-date NOTES file
    a190077 Switch to BSD license
    945ed58 Rewrap and reformat FAQ
    dfbb89c Update HISTORY file for 1.0.1 release
    a628c8c Add VERSION file
    f6fcef2 Bump version number post-release

    41 files changed, 1226 insertions(+), 1281 deletions(-)

# unversioned/snippets

    10d7546 Make weekly progress script executable
    036d47a Use explicit "src" (or none) in weekly progress script
    b9053ab Use Bash pathname expansion to trim "/src" from progress output

    1 files changed, 42 insertions(+), 47 deletions(-)

# unversioned/wincent.com

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
    815cf64 Manually trigger cache sweeper after moderation
    cde8d79 Use record_timestamps in moderate_as_ham! method
    f4557ff Update to rspec 1.2.7/rspec-rails 1.2.7.1
    6a48a1d No need to explicitly call update_needles from moderate_as_ham!
    b934f20 Drop "did_moderate" callback in favor of "after_update"
    5010dc6 Comment model: drop "update_caches_after_destroy" method
    aa435d3 Fix breakage in comments controller specs
    e201d29 Insert RR placeholders in spec/spec_helper.rb
    e613e9e Fix display of underscores in last line of "pre" blocks (CSS)
    e0e2b70 Show a flash on wiki articles that haven't been touched in a year
    67d55c3 Show multiple flash items as bullet points
    b9eff44 CSS: Make bullet points in flashes look nice
    e107048 Use emphasis in the stale article flash
    6be658f Show tweet number in tweets#show HTML template

    1197 files changed, 40514 insertions(+), 39243 deletions(-)

# unversioned/wincent.git

    28c205e Ack: handle "wikitext" extension
    2dfdc06 Git: update to git-completion script from Git 1.6.3.3
    6867d93 Vim: tab settings for Objective-C files

    3 files changed, 28 insertions(+), 13 deletions(-)
