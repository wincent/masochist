---
tags: site wiki
cache_breaker: 1
---

This is a list of user-visible changes to the custom [Rails](/wiki/Rails) application running this site since it went public. These really are only the *user-visible* changes; there are generally *lots* of other modifications made "under the hood".

Eventually I plan to make the code for the site [open source](/wiki/open_source), so I won't need to manually maintain this list any more.

# 0.3: 24 April 2009

-   Covered [here](/blog/site-updates).

# April 2009

I've started tagging deployments in the [Git](/wiki/Git) repo. Basically, after a deploy has been up and running for a few days and is known to be "good" I go back and tag the corresponding revision. So far there are two tags:

-   0.2: deployed 1 April 2009
-   0.1: deployed 26 March 2009

From here on instead of manually recording changes I'll just be posting Git commit logs showing what changes between tags.

# March 2009

-   [Ticket \#1237](/issues/1237): 'Auto-adjust "heading level" according to context'
-   Update to Rails 2.3.2
-   Flashes are now [JavaScript-backed](/blog/javascript-backed-flash), which means I can start turning on page-caching in more places and users will see faster page load times
-   Ported fix for [XSS and CSRF vulnerabilities](http://weblog.rubyonrails.org/2009/2/28/xss-and-csrf-vulnerabilities-in-the-in_place_editing-plugin)
-   [Ticket \#1137](/issues/1137): 'Add "tweet" model for blog sidebar'
-   [Ticket \#1235](/issues/1235): "Viewing a forum topic, "updated at" shows last reply date"
-   [Ticket \#1213](/issues/1213): "Update backend to Rails 2.3.0 RC1"
-   [Ticket \#1210](/issues/1210): "Write JavaScript for dynamic "relativization" of displayed dates"
-   [Ticket \#1209](/issues/1209): "Scope refinement while navigating the tag cloud"

# February 2009

I've been a bit slack about updating this page. Some notable changes that have made it onto the production server:

-   [Ticket \#1199](/issues/1199): 'Private items' influence visible on "tags\#show" page'
-   [Ticket \#1198](/issues/1198): "Automatically record issue metadata changes in comments"
-   [Ticket \#1190](/issues/1190): "Very long form content gets truncated during post"
-   [Ticket \#1136](/issues/1136): "Add tag support to issue tracker"

Here is a list of the commits made between 27 April 2008 and 1 February 2009:

    257e0ba... Fix template noise introduce in 85f69bd
    6bbf25a... Add "drill-down" filter box to tags search template
    056ac91... Make life easier for callers wanting reachable tags
    ce656a8... Fix spec breakage caused by filterbox template
    29d115c... Remove unnecessary parens
    4aac0a4... Move tag scope "filterbox" out into a partial
    85f69bd... First cut at "tag scoping" UI
    d74696c... Add support for "scoping" to Tag model
    9d852e6... Trim some fat from Tagging model
    6b792ff... Lose unnecessary braces
    6ced003... Don't include port 443 in outgoing emails
    afafcb9... Paginator: exclude "protocol" from params
    2cd7292... Set "Secure" attribute on cookies
    001ac77... Use "_url" methods instead of "_path" methods
    b2bde10... Fix spec breakage caused by b39c68c
    4bc1f1e... Fix redirection bug in articles controller
    b39c68c... Redirect to HTTPS URL if HTTP request gets through
    da7c5d6... Use HTTPS for absolutely everything
    a1f0c0c... Unset "current_user" variable even if an exception is thrown
    bfd6771... Fix typo in comment
    23028b6... Redirect HTTP requests to equivalent HTTPS URL
    a1c70dc... Switch to SSL in nginx config
    747aadf... Add SSL cert and keys for local testing
    237e901... Ignore nginx log files
    6bd33bb... Add start/stop ability to script/nginx script
    759ffbc... Initial version of script/nginx script
    a0ac397... Remove hard-coded paths from nginx config
    4b04be7... Minimal changes to get nginx running local
    edd917d... Import nginx conf from server
    361a4ac... Prepare for switch to SSL transport
    eb0c1ac... Update to Cucumber 0.1.16 and Webrat 0.4.0
    6a63371... Add specs for issue annotations (programmatic manipulaton)
    c3dde7b... Add note to issue specs for "pending_tags" attribute
    83500ee... Replace custom tag validator with standard validates_format_of
    1d45637... Only annotate tags if they really changed
    ddb6bf1... Handle products in issue annotations
    5d76ad5... Clear current user from thread-local storage after request
    9f939be... Refactor issue annotations from controller to model layer
    905750b... First stab at issue annotations
    e619d07... Adding "pending_tags?" method
    a3918ca... Add class methods to Issue model for getting kind and status strings
    ef5097e... irbrc: show SQL queries in console sessions
    c2c5d14... Work around Cucumber bug #165
    42a3d0b... Port wiki stories over to Cucumber
    f2dc4ce... Remove old version of Webrat plug-in
    8f0873d... Set-up Cucumber files
    160b6d9... Fix discrepancies in tag count when non-public objects are tagged
    f122f05... Specs for fixed "pending tags" behaviour
    9b9f224... Stop validation errors from blowing away pending tags
    c9576a7... acts_as_taggable: don't blow away old tags on save
    70335a3... Update specs to handle issue edits involving pending tags
    f4c8a58... Update pending tags when editing issues
    0ec6971... Add specs for taggable_link helper
    9768122... Teach tags helper to display links to tagged issues
    1c50806... Link from issues#show to edit tags
    f62d7ea... Separate tags with spaces, not commas, in tag_links method
    2dfc438... Show tag links when showing issues
    1b24c4e... Let admins set tags on issues
    216d788... Make "pending_tags" a protected attribute
    f04e634... Add "pending_tags" to accessible attributes for Issue model
    2a90c0c... Remove old "TODO"
    507dfb4... Update to RSpec 1.1.12
    456f512... Capistrano: add local_repository config for Capistrano > 2.2.0
    193a689... Add notes on setting up crontab for session purging
    47b3500... Rake: thin sessions table after 24 hours instead of 30 days
    8b7442b... Revert "Switch to cookie-based session stores"
    d0230fd... Improve 422.html error message
    ceda020... Switch to cookie-based session stores
    a3cad07... Partially revert 15ba815
    15ba815... Capistrano: add 'migrate:test', 'migrate:development' etc tasks
    f2e6b27... Whitespace fixes to spec/models/post_spec.rb
    060dffd... Add validations for overlength posts
    0a28ec6... Add rake task for updating TAGS file
    0a6ac1d... Revise limit in MEDIUMTEXT migrations
    36a3cb9... Fix spec breakage caused by 0530242
    ff34b5d... Add specs to confirm that database migrations really worked
    bdad3b3... Change various TEXT column types to MEDIUMTEXT
    0530242... Make use of "find_by_foo!" (bang) methods
    5d272b4... Add reminder note about using ":shallow" routes
    1b8ca39... Rails 2.2 fix: repair Haml "ugly" mode breakage
    5fc7345... Revert cdd9125: move application_controller.rb back to application.rb
    deab165... Capistrano: add check for rack 0.4.0
    2765c3e... Use "/system/images/" as custom image prefix for wikitext
    3604d11... Update to wikitext 1.3.2
    da98cc6... Rails 2.2.2 bugfix: RSpec broken thanks to application_controller.rb
    cdd9125... Rename application_spec.rb to application_controller_spec.rb
    55aae12... RSpec: don't freak out about application_controller.rb
    3141b0c... Update to wikitext 1.3.1
    388c3f5... Fix bug in Wikitext 1.3.0
    6e92fe7... Rename application.rb to application_controller.rb
    ae2cb07... Add missing RSpec rake tasks file
    c82af82... Capistrano: check for Rubygems 1.3.1
    b4cd5bc... Update to Wikitext 1.3.0
    c032fb1... Fix recent Rails breakage of template engines
    8442e04... Haml: silence "puts" deprecation warnings
    bd45464... Update to Haml 2.0.6
    3f8ad3f... Better fix for Rails 2.2.0 model preloading breakage
    6985cb3... Update to Rails 2.2.2 (final release)
    316221e... Update to Rails 2.2.1
    ef20863... Clean up polymorphic comment path mess
    089bfd5... More 2.2.0 breakage: special handling of routing for non-new records
    e0c744e... Move polymorphic_comments_path into application helper
    35ded72... Fix Rails 2.2.0 breakage: route generation behaviour changed
    5ab0c87... Rails 2.2.0: remove now-redundant body_html method from Articles helper
    c992cda... Fix Rails 2.2.0 breakage: newly created Articles no longer have nil bodies
    c3d4a47... Rails 2.2.0: silence deprecation warnings for "default_error_messages"
    3817c75... RSpec: silence deprecation warnings for expect_render
    5191b28... Rails 2.2.0: silence deprecation warnings for "truncate"
    20f454c... Style fixes: remove unnecessary parens
    8a5a83c... Fix Rails 2.2.0 breakage (cache_template_loading has been removed)
    a5d0bdc... Kludge fix for Rails 2.2.0 breakage (broken extensions to ActiveRecord::Base)
    d93062f... Fix Rails 2.2.0 breakage (ActionView::TemplateHandler)
    12a6788... Fix Rails 2.2.0 breakage (cache_template_extensions removal)
    bfd9b00... Update to Rails 2.2.0 (first release candidate, broken)
    3f39f3a... Restore application.js accidentally deleted in Rails 2.1.2 upgrade
    4d49bca... Another fix for Rails bug #324
    bfa1d20... Re-apply private fix for Rails bug #324
    627d796... Update to Rails 2.1.2 (broken)
    37588c2... Update to RSpec 1.1.10
    5cbb396... capistrano: warn if not on expected branch
    ca7578e... Fix Rails 2.1 breakage of wikitext templates
    922e595... Set up symbolic link to latest version of Atom schema
    f6625eb... Move Atom schema into spec/matchers subdirectory
    4a40fb6... Move custom matchers into spec/matchers/
    9774fa6... Add Atom schema to spec directory
    d9b9243... style: use single quotes if no interpolation is required
    329425c... Fix broken blog feed with no posts
    4eda948... Silence "don't put space before argument parentheses" warning
    8a1aaad... Fix broken articles feed when no articles
    edef14f... Don't pass custom entry URLs for posts and articles feeds
    0fe019e... Update comments in the custom Atom feed helper
    395dc4b... Fix breakage to blog Atom feed
    57b63ce... Formatting changes in articles controller
    6fcc4b5... Use Rails 2.1 conditional page caching
    78a48d3... Add quick "rake db:sessions" tasks
    b785d19... Capistrano: fix typo in help text
    d97d4b4... Partial revert of c2509ed (Rails install_command)
    93f88cb... Include comment "in context" link in notification emails
    b3ea654... Update story style for RSpec 1.1.4
    79bb498... Tweaks to fix story breakage under RSpec 1.1.4
    84c0c37... Make stories/all.rb executable
    46802fb... Update wikitext gem to 1.2.1
    1d47b86... Provide rails/init.rb for wikitext gem
    b075e2a... Freeze Haml gem into vendor/gems (again)
    3f793f2... Private fix for Rails bug #324
    e6deb19... Update to Haml 2.0.3
    b0d7f8e... Update wikitext module to version 1.2
    c2509ed... Fix for Rails bug #1003 (rake gems:unpack breakage)
    77c346f... Update comments about Rails ticket #324
    e0ed3f8... Fix broken article#new template
    5c8a021... Rake: use "ruby" method instead of backticks
    3557d39... Style changes to stories/wiki.rb
    297e6fd... Make stories/all a standalone executable
    d6cbeb1... Style changes to sessions stories
    0ace555... Add spec:stories task to run all stories
    92c90af... Restore application.js file
    2dd0e01... Add "show" link to comment editing template
    257661e... Capistrano: add maintenance page tips to help text
    52e1ade... Move Haml back into vendor/plugins (again)
    b84941a... Capistrano: make sure "rake gems:build" runs from appropriate directory
    f9378ed... Many specs for cache updates in "commentable" models
    df16dd3... Fix commentable "updated_at" bug
    7f746ae... Add shared searchable spec placeholder file
    a8a04e3... Update to Rails 2.1.1
    7d31c0e... Capistrano: check for RubyGems 1.1.1
    d51249c... Back out the REXML vulnerability fix
    3b3e3e8... Tweak shared classifiable specs for new RSpec
    de9d337... Move "classifiable" specs to more consistent location
    f6d7779... Silence deprecation warning triggered by RSpec 1.1.4
    7fc59c9... Drop unnecessary ".rb" from require statement
    b7146b0... Add note to Commentable module
    9e62942... Move Classifiable module under ActiveRecord::Acts
    73f47f4... Eliminate ambiguous module names in Taggable module
    dfdc9f6... Remove useless ClassMethods module from Searchable module
    ea56b47... Fix comment typo in Capistrano deploy file
    e5b7322... Clarify reason for update_caches_after_create
    8d59641... Trim update_caches_after_destroy method
    88ec601... Better cache updating for moderated comments
    b7f37c7... Don't let spam comments bump issues up the list
    1d1a6c8... Fix for REXML vulnerability
    00a9a9c... Update notes on "rails/init.rb" in wikitext gem
    3808f57... Update to Haml 2.0.2
    889fc07... Remove workaround or Rails ticket #275
    ae79cd6... Update to Rails 2.1
    49e4217... Update application controller specs for Rails 2.1
    3fe41c9... Use ActiveRecord's new "first" and "last" methods when possible
    07c76ed... Simplify taggable_link method
    d01ad18... Simplify polymorphic_comments_path method
    6cb5307... Routing: makeover for confirmations model
    58dcb9b... Routing: "blog_index_path" becomes "posts_path"
    32a8b59... Routing: wiki_path becomes articles_path
    1cb2e60... Partially revert aa466b4
    aa466b4... Add deployment notes and comment out auto-building on deploy
    342f3d2... Remove Makefile from frozen wikitext extension
    7a818a2... Capistrano: update built extensions in frozen gems on update
    eadde08... Rake: add "gems:clean" task
    cd189f4... Move forgery secret into application config file
    66a2833... Move session secret out into configuration file
    49ff4c6... Clean temporary build files from frozen wikitext gem
    bf07721... Add arch-specific wikitext build for Linux
    c2ac696... Fix Rails load ordering of frozen gems
    4a0d977... Freeze wikitext 1.1.1 gem into "vendor"
    7bdf2f4... Capistrano: don't depend on frozen gems and plugins
    0fd6b60... Use Rails gem dependency for loading the wikitext gem
    e1fe380... Fixes for Rails gems dependencies
    a73e850... Update to Rails 2.1.0_RC1
    17c76e7... Fix subtle bugs in partials specs
    9caee6e... Dump unneeded "preserve" calls
    dbe95cc... Use Haml's "ugly" mode
    cc6d09b... Don't auto-preserve when in ugly mode
    ea76f65... Upgrade to Haml 2.0
    4c2f3d3... Upgrade to RSpec 1.1.4
    24b95b4... Don't advertise atom feeds on private issues
    489f242... Document problems with Atom feeds on private issues
    d7f0437... Note forthcoming changes in caches_action
    b06469b... Import styles into maintenance page
    6de162e... Fix search controller spec breakage
    cc9f0ac... Capistrano: override default deploy:web:disable task
    89672b4... Add custom maintenance page
    e245fb9... Update static error pages
    a7cd867... Update non-JS fallback "search" link in navbar
    07a9212... Scope search results according to the logged-in user
    de83072... Add links to tag search from index and show templates
    bdf2bf9... Correct off-by-one error in query limits
    1a30f2f... Switch navbar search field to full-text search
    e65c6c3... Minor cleanup to search form template spec
    e464395... Show more issue information in search results
    c6303e5... Log warnings if search index is out of date
    6b95594... Handle deleted and destroyed models
    0721f17... Fix breakage in shared classifiable specs

# 27 April 2008

-   Roll out basic prototype of full-text search: at the moment, weblog posts, wiki articles, issue tracker tickets and forum topics are all indexed, but comments attached to them are not.

# 23 April 2008

-   Fix destructive indenting by [Haml](/wiki/Haml) when re-editing in the "new issue" form (visible as unwanted indenting when redisplaying the form, as will happen when you supply invalid input and the validation fails)

# 21 April 2008

-   Fix "last post" information on topics with an anonymous last commenter (see [bug \#671](/issues/671))
-   Lots of [CSS](/wiki/CSS) tweaks and improvements

# 17 April 2008

-   [CSS](/wiki/CSS):
    -   changed to add a grey border around the main content of the area for the page, give the pages a less crowded appearance
    -   Added underlining to headings in several places to improve visual separation between different page sections
-   Easy-to-use and flexible search added to the [issue tracker](/wiki/issue_tracker)
-   The [Atom](/wiki/Atom) feed for the blog is now page-cached (not really a user-visible change, but it means that you can hit the feed more often without running into performance issues)
-   Improve navigation between pages in the issue tracker and support index by adding more links and making them more prominent
-   Add breadcrumbs to the [forum](/wiki/forum) index (the topic index and individual topic pages already had this)
-   Add breadcrumbs to individual weblog post pages

# 16 April 2008

-   Use "fuzzy matching" for forum comment dates; this eliminates repetitious labels like "Posted 2 days ago, edited 2 days ago" (this would be reduced to just "Posted 2 days ago", or just "2 days ago" when combined with the other changes to make dates more concise)
-   Use more concise date formats; cuts down on repeated "noise" words on the page
