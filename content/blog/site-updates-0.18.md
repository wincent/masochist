---
title: Site updates (0.18)
tags: site blog
---

Here's the changelog related to today's [extended site maintenance](/blog/extended-site-maintenance). There are just under 1,000 commits in here, which correspond to several months of development coinciding with the move from [Rails](/wiki/Rails) 2 to [Rails 3](/wiki/Rails_3).

As I mentioned in [this blog post](/blog/rails-3-upgrade-progress), seeing as so much of the application had to be revised I decided to knock down some walls and implement some big changes, in addition to a whole lot of spring cleaning.

Even though I tried to be as prepared as possible for the final deployment, there were some unexpected roadbumps that had to be worked out, so I'll be making a post with some notes on the process shortly. I expect to deploy another update soon too, to iron out some remaining wrinkles.

    1fe1f36 Clean up pending and failing specs
    7f7712c script/status: update path for Snow Leopard MySQL location
    146f94d script/status: warn if stale PID file(s) found
    8e4755b script/status: try removing stale PID file(s)
    0ed4e2d script/memcached: clean up stale PID files
    616b76f script/memcached: updates for latest PID-handling behaviour
    0c8727f script/nginx: clean up stale PID files
    b3f6c97 .gitignore: remove trailing blank line
    fd709e1 Update vendored gem ".specification" files
    66475a7 Rails 3: new session_store and cookie_secret API
    aa27cec Rails 3: delete old vendor/gems in preparation for move to Bundler
    3ee11e7 Rails 3: update files with "rails" tool
    020cd52 Rails 3: bundle package
    10c1f2c script/deploy: check for bundler and trust it
    c505f6b Gemfile updates (Hpricot, Wikitext)
    b63e52f Remove new_rails_defaults.rb
    0d6823d Add missing Gemfile.lock file from commit c505f6b
    a4d57b4 Fix syntax error in routes
    7d464e0 Gemfile: update with mysql/hpricot etc
    828e452 Fix uses of RAILS_ROOT/Rails.root
    adf7e05 Rewrite routes using new Rails 3 DSL
    f153092 Use ":path" instead of ":as" to change literal path in URL
    0af5547 Rails 3: use set_callback method for callback setup
    b5c452b Rails 3: remove references to ActionController::UrlWriter
    cf3b37f Remove vendor/rails
    58ee8fa Update to Haml 3.0.0.rc.3
    75c35d0 Remove unused inline_js helper
    a5c3b3a Rails 3: helper updates for h() and html_safe()
    936dcf0 Rename SearchController to SearchesController
    891b764 Clean up searches#create
    c813435 Whitespace cleanup
    b0320fe Rationalize issue search routing
    67f648d Update remaining reference to SearchController
    4d40621 Correct order of parameters to set_callback
    5a07122 html_safe tweak for application layout
    72b98ec Teach relative date JS to grok UTC dates
    5e313ab Adapt paginator for html_safe changes
    806ec42 Replace some references to searches_path
    0ea993f Update to jQuery 1.4.2
    426e6ea Further tweaks to callbacks
    a5b2c8f Move admin/dashboard route into proper namespace
    a857646 Rails 3: migrate deprecated model callbacks
    7b7b7da Rails 3: replace deprecated error_messages_for calls
    63e0706 Gem churn
    ebb68e7 Update Gems to latest versions (Rails 3 beta 4, Haml etc)
    c78d149 Mark next/previous issue link text as html_safe
    e5bab30 Mark compound relative date strings as HTML-safe
    a7395b7 bugfix: the JS method Date.UTC expects zero-based months
    7aa22d6 Rails 3: mark product page HTML as safe
    a07ff85 Fix issue filtering for normal users
    f913179 Haml: explicitly set up to emit HTML5
    161308f Update Sass to 3.0.11
    23c93a2 Fix typo from commit f913179
    e2379bd Add html_safe call in link_to_topic_for_forum method
    2112c7a Work around for Rails 3 beta 4 truncate bug (#4825)
    a92f316 Rails 3: lots of HTML-safe fixes
    7659744 Make GET /search work
    bed1684 HTML5: replace instances of <tt> with <code> elements
    4f13bbd Update Haml to 3.0.12
    2f0d773 Requests for / show Synergy product page
    a404f96 Re-minify JS
    e68470e Updates in preparation for Wikitext 2.0
    4603161 Update to Wikitext 2.0
    32c18dd Don't specify default "application" layout
    68a9238 Rails 3: fix in-place editor field breakage
    1f8cfdf Serve dynamic JS with appropriate Content-Type
    cda2c45 Replace some html_safe calls with raw()
    0546116 JsController: return 404 for non-existent templates
    b8e9a19 Add error messages partial
    26950de Simplify links#new template
    32760e6 Rails 3: update to new CSS class names for validation
    6cd50a6 Form shakedown
    40aafa4 Don't nest inside "label" element
    df83f97 Simplify posts#new form
    7bb095e Convert posts#new form to new table-less style
    35adfd6 Add annotation helper
    283baa9 Use lists in forms for prettier CSS
    93ef070 Remove now-redundant comment
    00018fe Apply "field_with_errors" highlighting to textareas as well
    0e888d9 Dump ValidatingFormBuilder in favor or field_error_proc
    356d325 Move submit button inside form list
    3143d87 Update button look
    32bc221 Align wide submit buttons on forms (eg. comment partial)
    8d1e12c Label and button color tweaks
    eefe0bb Reduce excessive spacing above and below submit buttons
    954b23b Simplify issues#edit form
    83edd61 Revert "Remove unused inline_js helper"
    f9b7d01 Teach annotation() to take multiple arguments
    40075d5 Update issues/form partial
    0c1b237 Simplify issues#new form
    158d843 Use SASS mixins to share styling between "submit" and "button" inputs
    55b3ea0 Make button/submit inputs match size of "link" CSS
    d7d1c80 Dump Cucumber in favor of Steak
    11096fc rspec: update spec/spec.opts -> .rspec for RSpec 2
    18e3816 rspec: spec_helper updates for RSpec 2
    e3a5c95 Fruit of running 'rails g rspec:install'
    fd6f14d Remove old spec.rake file
    8905ee4 Add autotest directory
    a1f803d Add rspec_generator initializer
    54ebcbe Switch to RR and Factory Girl
    111ce7d Bump Steak to 0.4.0.beta.1
    de38c1e Remove cucumber rake stuff
    f1e2f24 More updates for Capybara/Steak
    d965078 Remove demo acceptance spec
    af67d7a Drop protocol requirement from routes.rb
    9a9bcbd Ignore Capybara "save_and_open_page" files
    8cb309f Don't include FixtureReplacement from .irbrc
    b6f5e81 Include Factory Girl in development environment
    92679db Fix .irbrc breakage
    a33f5fd Add Factory Girl convenience methods to ActiveRecord
    17ad26b Extend Factory Girl wrapper methods
    19fbe66 Add product factory
    61370be Work around missing url_handlers in sweepers
    5f3eb95 Fix for sessions spec
    5b802a6 Rails 3: silence a deprecation warning
    fe0158b Get ":js => true" working for Steak/Capybara
    cd382cb Add factories for Email, Product and User models
    f265e39 Remove FixtureReplacement example data
    966a9cd Add a JS-based (Culerity) session spec
    0df7a52 Complete sessions acceptance spec
    1bd3ec8 Rails 3: another deprecation warning bites the dust
    327051c Add "local_request?" method
    868b309 Use absolute path in require
    fb894fd routes: point to products#index for requests to "/"
    7766544 product#index specs
    20a554e Remove products#index redirect
    a5f1d6e Remove product icon attribute
    96cd758 Migration to remove icon_extension attribute from database
    9eaa733 Modernize login form
    85962eb Temporary workaround for Rails bug #4879
    0e7512e Make products category default to ''
    48ba63e Rails 3: silence another deprecation warning
    012f569 Refactoring of Product finder methods
    6e072c7 Add "breadcrumbs" helper
    30ea96e Sprinkle breadcrumbs
    45b00c2 Modernize issues search form
    954cb94 Don't explode if post title is nil
    b0ea9d1 Initial version of Post factory
    accba47 Fix broken tagging
    65efb85 Add randomization to Post factory under development environment
    eaf0562 Strip HTML tags in comments on dashboard page
    18df15d Truncate long issue summaries in dashboard
    5a83879 Mark tag_links helper output as HTML-safe
    f70de88 Big overhaul of issue search handling and pagination
    544dd59 Carry product selection across issue searches
    49cfae9 Add "destructive" CSS class for dangerous buttons
    5331ab2 Fully merge "link" and "button" CSS
    c2f9817 Add "destructive" CSS class to "destroy" buttons
    efffa81 Add spec for hidden products on front page
    a7f8ba3 Capybara: use CSS selectors by default
    ab75a15 Add db-level uniqueness contraint on tag names
    753399b Set up "confirm" dialogs via Unobtrusive JS
    a3b7a52 Silence a deprecation warning
    a7ad1b7 Prepare for syntax highlighting on AJAX-loaded elements
    997cfe1 Apply syntax highlighting in previews
    40af859 Syntax highlighting refactoring for speed and cleanliness
    14df9f4 Adjustments for jQuery plug-in guidelines
    3e51c67 Modernize posts#edit template
    50631df Unobtrusive JS version of old "popup" functionality
    2fc867e Remove footer from empty layout
    1c5d16c Tweak content div margins
    abb8ba2 Fail nicely for "forbidden" errors
    febd00f Clear AJAX flash before display errors
    1bf3e95 Clear AJAX flash before starting new request
    b320d16 Add "disabled" CSS to buttons that trigger pending AJAX requests
    804ffc3 Suppress layout when rendering static error pages
    17a256f Use URL helper in tweets#show template
    4f7ba3d Only show comments form if commenting enabled on tweet
    aaf25db Load post comments form via AJAX
    b22e1d7 Rails 3: replace deprecated request_uri calls
    4c01208 Load wiki comments form via AJAX on demand
    76968b7 Fix commenting on wiki articles with funny characters
    c0ee410 legal: update software list
    b97d0d3 Add regression spec for bug fixed in 76968b7
    75fef46 Silence another deprecation warning
    57cce0c Rails 3: avoid deprecation warning for "validate" method
    a1a2d56 Don't use add_to_base
    6f4f71c Remove stray comment
    cc1cfa9 Add article factory
    eee187c Add missing 'require' to Post factory
    393390b Spec tweaks
    356bdba Gem updates
    3a9e15b Fix "destroy" button on issues#show template
    f870a9f Use button_to instead of link_to for issues#show destroy
    dba5389 Replace more "destroy" link_to calls with button_to
    05aeaf7 Add issues search acceptance spec file
    6d9c83d RSpec 2: changes to shared example groups
    302d337 Gemfile updates
    8cbc6c0 Update to current master branch of Steak
    ee9598c Run "bundle install --relock"
    502daa9 Handle spec dependencies the right way
    b56acfc RSpec: integrate_views is now render_views
    ea5ea54 Remove stray parenthesis
    486efc9 Always use strings with shared_examples_for
    259ecde Add comment factory
    710f330 Move factories into "support" directory
    a378f40 Avoid repetitive require
    2d0eec1 Make CommentMailer spec runnable again
    f6781c8 Bail if user runs "spec" instead of "rspec" by mistake
    a7c5a8a Include "protocol" in app config
    11a2a5a Add protocol to default_url_options
    ec158b1 Add mailer spec helpers (gets CommentMailer specs passing)
    afc9e68 Rename controller helpers to minimize risk of namespace clash
    d00a76a Include spec helper modules automatically
    e07361a Update to RSpec 2.0.0.beta.13 and Factory Girl 1.3.1
    7f881f2 Use RSpec 2.0.0 beta 13 "example.options"
    f78645c Gemfile: explicitly require RSpec 2.0.0.beta.13 or greater
    feebf1f Warn if running "rspec" outside the context of Bundler
    124957c .irbrc updates for moved factory files
    a7faf76 CSS: flash improvements
    6484a01 Add icons for flashes
    8c7224a Add CSS styling for flash icons
    8cb9c9e Change order of columns in issue lists
    f4b584f Drop "main" class from issues#show table
    2abf64a Right align "labels" in issues#show template
    a6f95d2 Give subtle embossed effect to table headers
    da503c8 Cull some words from the footer to reduce visual clutter
    e71e23a Add thead/tbody to admin posts#index
    3d6cd65 Add breadcrumbs to admin posts#index
    74ce747 Add breadcrumbs to administrator dashboard
    f86f865 Add thead/tbody to admin dashboard
    5cff9ba Add bread crumbs to (admin) topic index
    4b405f0 Only emit tbody element if it's going to have rows
    2d24419 Add thead/tbody to forums#index
    6c64e4c Add thead/tbody to forums#show
    7e0db59 issues/issues: only emit tbody if we have content for it
    9520375 More breadcrumb cleanup in admin namespace
    113b203 Give admin tags#index the thead/tbody treatment
    e5db952 tbody treatment for articles#edit
    ecd4e81 issues/form: fix two mismatched labels
    0f587c9 Modernize articles#edit template
    97119b4 Add thead/tbody to articles#index
    80cf9ee Rails 3: silence another deprecation warning
    4bf02e3 Modernize articles#new template
    20949c4 Give dashboard tables some thead/tbody lurve
    30d8dc6 Change column order in dashboard comments table
    668928f Add tbody to emails#edit
    a0dcc88 Rails 3: silence deprecation warning
    61ddc83 Clean up email#edit template
    dbe6f75 Modernize forums#new
    d5afd55 Love for links#index template
    0571e93 Enhancements to pages forms
    b775781 Add breadcrumbs to page form templates
    9a92870 Add tbody/thead to taggings partial
    7c933a2 Fix users listing
    c717f51 user#show cleanup
    45be2e0 Bring products#edit template up to date
    9b94af0 Silence a bunch more deprecation warnings
    ed5056c posts#edit cleanup
    1fe9142 products/form partial cleanup
    d4b6916 Be brief in wikitext markup help link
    18a4c83 Update resets views
    6ee6ddf Update topics/edit
    5872b41 Modernize topics/new
    812b40e Use "major" heading class on tweets index
    d5ddf7f Use major style on principal blog index heading
    5edca41 User thinner line for "major" underline on h2 elements
    0de0aeb Use smaller heading in tweets sidebar
    da6bb23 Use major heading on tweets#show template
    ff2851a Modernize tweets#edit
    45a17cf Modernize tweets#new
    f40e3a0 Update users#edit template
    8ba247b Clean up users#new template
    a1ad0c3 Fixes for users#edit display
    1cdf7b2 Add breadcrumbs to articles#edit
    7fc499b articles#edit: add line above preview area
    801ef4b Eliminate the final separating line between form elements
    664c086 Tweak footer appearance
    8d1ffff Assorted view cleanup
    f1fd259 Add missing 'major' class on preview headers
    c46dc48 Drop unnecessary parens
    8db497f Drop unneeded :cols param
    e92653d Breadcrumbs for issues#new
    00adfe1 Shorter back-link for issues#new
    a94afcb Fix up a couple more back-links
    f39c812 Breadcrumbs and form simplification for confirmations#new
    438cec4 Make buttons more compact when inside a table cell
    bfa1f41 Dashboard cleanup
    2fdfe75 Dump "table.main" class
    33af9b1 Update rspec.rake task
    8c175bc Add uses_dynamic_javascript? method
    24033c5 Add methods for automatic insertion of stylesheet tags
    d4476f8 DRY up stylesheet inclusion
    4e883a3 Add border-radius to #sidebar properties
    2b7ea60 Turn comment bubble divs into ol/li elements
    442ac03 Convert issue comments to "bubbles"
    aa6a5e3 First cut at "boxed" comment style
    b258fb9 Extract comment bubble styles into separate file
    e0bab97 Fix top margin on lists in comment bubbles
    03a9b34 Intermediate cut at "boxed" comment style
    8c86482 inline-block to the rescue
    87d934c Correct text darkness in boxed comments
    7aceeee Fix wrapping in "boxed" comments
    0dda2b7 Remove hacky margin fine-tuning
    8978732 Extract comment box CSS into separate file
    dc23fa2 Move comment boxes to the left
    646652a Make topics#show use table-less CSS
    f3679c3 Turn post comment timestamps into permalinks
    70ea9c0 Make comment permalinks appear only on hover
    49af07b Rename "permalink" class to "hoverlink" and use it more widely
    2d6120f Make tweet permalinks into "hoverlinks" as well
    f58bede Compromise on tweet hoverlink behavior
    cad7445 More tweet permalink visibility tweaks
    8a29aad Permalinks for articles#show comments
    4874146 Add permalinks for tweets#show comments
    6b5e5ed Remove unnecessary indirection
    8464cfc Add permalinks to topics#show comments
    276c3c9 Permalinks or issues#show comments
    50c06b9 Update spec_helper to match upstream
    b52e620 Add missing uses_stylesheet_links omitted from previous commit
    e03bd82 script/deploy: use "bundle install" instead of "rake gems:..."
    210da5a Bundle update
    3406dcd Set up explicit BUNDLE_PATH for deployments
    772920f Add jruby-openssl to Gemfile
    c4aa828 Add mongrel to Gemfile
    85a037a Remove unneeded requires
    adc6a2b Clear RUBYOPT to make "rake spec:acceptance" work reliably
    955f0f3 Prune RUBYOPT less aggressively
    2c9c4c3 Future-proof against possible vendor whitespace changes
    b40129f More simplification to RUBYOPT codepath
    e2ace93 Add spec:unit task
    76036a9 Rails 3: kill a deprecation warning
    d0d612e Rails 3: more deprecation warnings
    3c0f9cc Rails 3: deprecation warnings
    8eb7233 Use mail method in comment mailer
    2294762 Comment mailer: use default method
    ffa2346 Use headers[] rather than headers() method
    638edf1 Move support mailer into its new home
    59b313b Knock support mailer specs into shape
    296f820 Silence some deprecation warnings
    a3b9889 Silence some more deprecation warnings
    71a8000 Move issue mailer to its new Rails 3 home
    34f8b26 Add issues factory
    1acb324 Use issue factory in issue mailer specs
    76f4395 Silence Rails 3 deprecation warnings
    fc102bf Drop unneeded manipulation of default_url_options
    50a2459 Update issue mailer to use new API
    dcba24b Refactor issue mailer to eliminate temporary variables
    99ad655 Further simplification to issue mailer
    b282c05 Refactor comments mailer to avoid temporary variables
    bbf6172 Move remaining mailers into app/mailers
    1aaf8eb Add confirmations factory
    b6ab17d User confirmation factory in specs
    100531a Silence a Rails 3 deprecation warning
    bd40c77 Remove unneeded default_url_options calls
    836a458 Silence more Rails 3 deprecation warnings
    57723c4 Refactor confirmation mailer using new API
    d2a3c0b Use Factory Girl factory in reset mailer specs
    fe77d75 Remove unnecessary default_url_options calls
    8ea1c70 Silence some deprecation warnings
    84f2091 Add reset factory
    6ded53a Silence more deprecation warnings
    a23c322 Simply spec setup by using reset factory
    4705b75 Convert reset mailer to use new Rails 3 API
    a3af47f Remove "email_address" attribute from reset factory
    4dc7f4e Rename fixtures_spec.rb to factories_spec.rb
    7a1bd37 Update meta/factories spec for Factory Girl
    dfae5ac Revert 'Remove "email_address" attribute from reset factory'
    ae3a0d8 Add lorem_ipsum generator
    cab47c3 Use lorem_ipsum in article factory
    ba7e93e Add remaining missing factories
    0b1a627 Use new topic factory in topic mailer specs
    c9cebc0 Silence Rails 3 deprecation warnings
    e979598 Silence more Rails 3 deprecation warnings
    425f11c Convert topic mailer to new API
    ba8d9cb Remove unneeded default_url_options calls
    562a47f Silence Rails 3 deprecation warnings
    96e7512 Switch to RR mock syntax for exception mailer specs
    2b816da Use more concise RR syntax in exception mailer specs
    a904e28 Use new API in exception mailer
    f846203 Fix custom matcher breakage caused by the move to RSpec 2
    a0be736 Use factory girl factories in message specs
    f5856e3 Confirm that message records default to incoming
    80311a5 Automatically populate message_id_header field when appropriate
    d314d30 Remove calls to SupportMailer.new_message_id
    df4f87c Silence Ruby warning due to bad parenthesis placement
    7b0387f Silence Rails 3 deprecation warning about errors.on
    f0841f3 Add validations to monitorship model
    3d8098a Add monitorship specs
    4e3a316 Wrapping to fit under 80 columns
    619a956 Use ensure rather than rescue in current_user_wrapper
    7fac6ec Add basis for exception notifying mechanism
    816518a Move rescue_action_in_public into middleware
    fe3d8e1 Remove "local_request?" method
    bc23386 Refactor exception reporter code for clarity
    91277b1 Fully armed and operational ExceptionReporter
    46287c0 Add more info to exception notifications
    adaca64 Clean up backtraces by substituting BUNDLE_PATH
    0e2c31a Remove trailing whitespace
    4c4ed8a Make tweet specs pass again
    b2782ec Update exception mailer spec for new report format
    779beac Update article specs for Factory Girl
    41e8ba0 Update comment specs to use Factory Girl
    38f40d6 Convert comment spec mocks to RR
    320b073 Fix email specs (FixtureReplacement -> Factory Girl)
    2593b1d Try to make the Email#deleted= method more useful
    54266ee Note limitation of restrictive email address format
    7119e42 Flesh out email specs
    cb88223 Drop an ancient spec that is no longer needed
    7fd1587 Simplify a uniqueness test
    1c47b3a Update user specs (FixtureReplacement -> Factory Girl)
    dcc8475 Update user spec comment
    ac5f786 Factory Girl triumphs where FixtureReplacement failed
    23771c9 Update to Bundler 1.0.0.beta.2 and use new "platforms" API
    8b10a87 Remove RUBYOPT pruning
    5f41033 Move ruby-debug into 'development' group
    432f72b Repair reset specs
    bc497e1 Add migration to remove user_id from resets table
    ac6d96f Remove "user_id" from Reset model
    e2beafb Replace build-then-save! pattern with create!
    2e2333e Replace build-and-save pattern with create
    b744e93 Dump some unnecessary parens
    2b175a1 Make clearer what's really happening in the validation
    3529ae7 Remove Bundler warning from spec_helper.rb
    1d1bd68 Add show action to resets controller
    9f7157c Add back needed params
    a25dd35 Use short URLs in reset mailer
    8dbe19a Factory clean-up
    6725adc Rethink Reset factory
    2c6eeb0 Remove Reset factory kludge
    5bc45a6 Backtrack on Reset factory changes
    d1f784e Fix failures in topic specs due to tool changes
    3e525d8 mock_with is now mock_framework
    dc845e3 Track Git repo of rspec-mocks
    f145ff2 Switch to RR for shared classified mocking
    6e194e7 Use 'new' API for specifying mock framework
    b7875fb Update topic specs for RR
    ecf8666 Add more info about mysterious RR failures
    3b06c5d Use loser param expectations in topic mocks
    4bcf469 Link back to RR issue on GitHub
    0e7da2b Unbreak tagging specs
    49a1b64 Merge subgroups in tagging specs
    39a38ac Drop validity spec from tagging_spec.rb
    3cec21a Modernize tagging specs
    7c7c6a9 Unbreak tag specs
    848cd2c Remove duplicative spec
    e854b33 Make 'it' strings briefer by dropping 'should'
    26487e2 Unbreak product specs
    a3bb49e Remove redundant spec
    25856a8 Fix post specs
    ce6f50e Reproducible sequences are overrated
    a367824 Update to Capybara 0.3.9
    92a006f Remove redundant specs
    68c11af Unbreak page specs
    76a22da Remove redundant specs
    4d87b20 Unbreak needle specs
    0090109 Unbreak link specs
    9905c69 Remove duplicative spec
    d4a67ab Unbreak issue specs
    1eb0d80 Remove redundant spec
    5223bee Unbreak forum specs
    8f768be Update whitespace specs to use new RSpec matcher API
    66db3ac Minor cleanup to whitespace_spec.rb
    f32d358 Don't run whitespace specs on irrelevant/non-existent files
    8f4f0af Unbreak application helper specs
    7372fca Unbreak tweet helper specs
    3de77ac Unbreak tags helper specs
    5451828 Explicit helper no longer needed in helper specs under RSpec 2
    934af0a 'integretion' specs are now 'request' specs under RSpec 2
    66a569f Fix favicon background
    1e6378e Add routing spec helpers
    dcdfe41 Start revising article routing specs
    b61d842 Add map_from matcher and use it in routing specs
    2ab35b9 Restrict routing matchers to router specs only
    1f4b4d7 Flesh out article routing specs
    6b6d088 Finish basic route recognition and generation specs for articles
    9b9d09c More article routing spec clean-up
    756df45 Add "map" matcher and use it in router specs
    e18497d Separate URL helper specs into a separate block
    c6bce10 Support "controller#action" syntax in "map*" route matchers
    66b160d Unbreak issues routing specs
    009ffd8 Use shorter 'controller#action' syntax in article routing specs
    16a539a Add description to routing matchers
    9e1a9ee Ignore method in map_from matcher
    d2248b2 Simplify paginated issues routing
    7a6b06e Tweets route reform
    f6746cf Abbreviate article routing specs
    83aa2cc Give posts routing a makeover
    37be9d1 Don't let article routing specs feel lonely
    eef95a6 Get rid of pagination helper for article routes
    e6ae690 Be stricter about the format of the :page parameter
    fc10cd0 Unbreak link routing specs
    fd3482b Bring resets routing specs up to date
    d26cf6b Bring tag route specs up to date?
    36ae510 Update to Celerity pre-release
    d847de1 Add "be_recognized" matcher
    12906d0 Finish admin forums routing specs
    36c7f69 Get 'be_recognized' working the way it should
    148c867 Add description for 'be_recognized' matcher
    acefd25 Use consistent language in routing specs
    1e96807 Bump Celerity rev (fixes "bundle update/install" warnings)
    40b0f39 Exclude some controller actions which should never be routable
    dff1986 Down with double quotes! Long live single quotes!
    3c0218e Use be_recognized instead of be_routable
    50f3fed Add specs for forums routing
    d4514a7 Add nested comments to routing specs
    131572f Add topics routing specs
    384c507 Unbreak tweets#show view specs
    65c62ab Use webrat matchers in tweets#show view specs
    478fbf2 Use :content for shorter spec
    3ab9673 Flesh out and tidy up tweets#show view specs
    cd0b20b Update to Celerity 0.8.0.beta.1
    bd92a20 Use 'helper' instead of 'view.extend'
    4afb3b0 Flesh out tweets#show specs
    1af0622 Unbreak tweets#new view specs
    18615b3 Use "stub.proxy(view).render.with_any_args"
    b944702 Unbreak articles controller specs
    bb00cf2 Fix pending spec
    52b9406 Controller specs for articles#index
    6e1e19c Check assigns in articles controller specs
    439414d Make some use of Arel-powered scopes in Articles model
    438b226 Rename "map()" to "have_routing()"
    9e6d3a4 Add 'public' scope to Article model
    b4ed205 Replace some references to "map()" with "have_routing()"
    55695cd Update Article model scopes
    cc0cc59 Use scoped methods in articles#index
    48c0341 Custom shared error messages
    2f4b5c3 Collapse two lines into one
    48d5151 Work around Rails bug #5060
    e36ba73 Update to RSpec 2.0.0.beta.16
    75d7d44 Add Capybara a8a4efc3790daa6f146c to vendor/repos
    3a94c2b Tell Bundler to look at local Capybara fork
    9b5191a Replace shallow Capybara clone with plain directory
    2f45c6b Work around hanging Celerity specs
    5c7c6b5 Update Capybara path in Gemfile
    1fbe0df Update Gemfile.lock (remove duplicate lines)
    c873178 Reorganize articles controller spec
    69a8285 Update controller spec helpers for Factory Girl and RR
    0faf29c Add 'as_admin' helper for controller specs
    19b2c69 Teach Article.find_with_param! to take a user parameter
    e511b36 Change action order to match standard order
    57bfed8 More Atom format specs for articles controller, and notes
    3a98ec4 Add redirection specs to articles controller
    b84ac78 Move url_for_redirect into the model
    afa0087 Make "articles_path" available inside the model
    66a10f5 Share regexes between validation and URL generation methods
    1dba61a Rename "url_for_redirect" to "redirection_url"
    d44eec7 Move a comment to a more appropriate place
    4a105e2 Completely blow away the test directory, don't just ignore it
    9d72c87 Specs for articles#new
    4b33d4e Specs for articles#create action (normal requests)
    f65284c Specs for AJAX calls to articles#create
    8785167 Be obsessive about not aborting requests in before filters
    c4fe4bf articles#show: add specs for non-existent articles
    d96b0c2 Add specs for articles#edit
    f45b60e Specs for articles#update
    b4f0963 Unbreak tweets controller specs
    e7fcd25 Add note about evil design of comments controller
    efa331d Massive cleanup of 'get_parent' method
    e4c4145 Remove broken parameter filtering specs (Rails 3)
    e882897 tweets partial: add 'comment' link next to 'permalink'
    9c47dca Run mysqld as normal user, with test database in RAM
    2608ee0 script/status: update for new MySQL set-up
    b88483d Update to RSpec 2.0.0.beta.17
    611ce7f Add Bundler executable stubs
    73cee06 Git: ignore db/development_structure.sql
    0d688d3 Make RSpec generators available
    e9e66f5 Drop user-stupidity guard
    ba40883 Unbreak links controller specs
    500440a Move "rspec-rails" back into development + test groups
    20d47db Annotate Gemfile
    baa6bdf Convert "assets" directory into a submodule
    8ca486f deploy: git clone using "--recursive"
    902415e deploy: bump minimum Bundler version
    7115e72 deploy: use explicit "submodule update"
    29600b2 deploy: use Bundler bin stubs
    b88e235 Unbreak topics controller specs
    cbb28a5 Unbreak sessions controller specs
    78a169b Unbreak search controller specs
    7090fdf Edits for brevity
    e498752 Unbreak products controller specs
    5bb4c54 Unbreak posts controller specs
    ec9c330 Triage JsController specs
    7aac88d Silence incredibly noisy backtraces in spec runs
    92050b4 Switch to Git version of RR
    25de644 Unbreak issues controller specs
    94a5877 Various CSS tweaks for readability
    2b8f67a CSS: war on dotted borders
    2549ab1 Keep a minimum of code inside "rescue" blocks
    2d592ba Unbreak heartbeat controller specs
    6fc74cb Unbreak comments controller specs
    866de5b Unbreak admin dashboard controller specs
    4b56ddf Unbreak admin issues controller specs
    f0ed94a Remove 2 "pending" guards (latest RR has fix)
    ced9d38 Add ViewSpecHelpers
    b4dea7a Unbreak tweets#index view specs (HTML format)
    964db85 Switch to a shinier comment bubble
    3e30dc1 CSS tweaks for better bubble placement
    d321359 Bundle update
    9bca1b4 Remove unnecessary helper call in tweets#show view spec
    dccd60a Match view helper code to upstream patch version
    bb7eb6e Use cleaner stub set-up in tweets#index view spec
    0ae527f Drop unneeded 'with_any_args' from tweets#new view specs
    abd6f88 Unbreak tweets/preview partial specs
    3d824fb Unbreak tweets/tweets partial specs
    c7c09f5 Unbreak tweets#index (Atom format) view specs
    3a54bb5 Unbreak tweets#edit view specs
    a6b495c Partially unbreak topics#show view specs
    3f8e07b Unbreak tags#index view spec
    3850f11 Unbreak topics#edit view specs
    280c3e0 Unbreak tags#show view specs
    4586d18 Unbreak support#index view specs
    5795028 Unbreak searches#new view spec
    5707398 Correct paths for searches view specs
    da099cb Unbreak searches/_issues view specs
    b14d248 Toughen test for summary escaping in searches/_issues partial
    fd8cef4 Unbreak searches#create view specs
    09a7692 Cleaner set-up in searches#create view spec
    d73ef56 Move duplicate spec file
    b0890f5 Remove duplicate spec file
    71e92a5 Unbreak searches/_tweet view spec
    df272d9 Simplify render call in searches/_issue view spec
    e99cf62 Unbreak searches/_topic view spec
    f1be253 Unbreak searches/_article view spec
    77ac6b8 Unbreak searches/_post view spec
    f3226a9 Unbreak searches/_form view spec
    27dfe77 Silence more Rails 3 deprecation warnings
    989b376 Unbreak resets/new view spec
    e05dd32 Unbreak resets#edit view specs
    c503d23 Remove CommentMailer view specs
    9139895 Unbreak products#index view spec
    e405271 Unbreak posts#index view specs
    b2ff7cc Unbreak posts#index view specs (Atom format)
    e523939 Unbreak pages#edit view spec
    3272d83 Unbreak pages#new view specs
    4e40be9 Unbreak misc#legal view spec
    ddaf0d3 Unbreak links#new view specs
    2da4745 Unbreak links#index view specs
    1165062 Update bug links in Gemfile
    d1ca388 Unbreak issues/show view specs
    2142422 Workaround for rspec-rails issue #119
    a8ad98b Unbreak issues#search view specs
    240ed31 Unbreak issues#new view specs
    8effcaf Unbreak issues#index view specs
    ff68fc6 Unbreak issues#edit view specs
    5809117 Remove spec for view which no longer exists
    19b2640 Unbreak issues/_issues partial spec
    a490658 Complete some pending specs for issues/_issues partial
    7185454 Unbreak layout specs
    44874b3 Unbreak forums#show view spec
    5348ae6 Unbreak forums#index view spec
    d55dba8 Unbreak admin view specs
    8398b06 Unbreak dashboard#show view specs
    a85a58b Remove unneeded explicit 'self' receiver in lib/authentication
    37b1726 Unbreak comments#edit view spec
    d15fe16 Unbreak articles#index (Atom format) view spec
    9d34512 Unbreak attachments#new view spec
    f2303fd Partial revert of a85a58b
    0a7c74d Fix attachments factory
    a21ad44 Cleaner implementation of helper hack
    c38b3da Patch view spec metaclass only
    21076e8 Do not pluralize controller name when dynamically generating CSS tag
    791107b Rename search.css to match controller name
    ee0abf5 Use ActiveSupport::Concern to simplify StylesheetLinks module
    101529e Use ActiveSupport::Concern to simplify Authentication module
    a565a60 Use ActiveSupport::Concern in authentication model parts as well
    4dd70ea Make 'random_session_key' a protected instance method
    8551fc8 Comment cleanup
    66934e3 Keep constants together near module head
    76ef4b6 Use protected and private methods in authentication module
    9cdcf53 Use ActiveSupport::Concern to simplify DynamicJavascript module
    9efa11d Use ActiveSupport::Concern to simplify sortable modules
    9f594f4 Edit sortable module for conciseness
    eb700bc Fix no-op sortable_header_cell calls
    849d67f Add basic specs for #sortable_header_cell
    65fe71f Don't bother passing :protocol to url_for in sortable_header_cell
    f93104f Add real sortable_header_cell calls to issues/_issues spec
    a4e6203 Complete regression specs for fix from commit eb700bc
    f91a4fc Add smilie images for autotest and growlnotify
    f14278c Add autotest gem to Gemfile
    21c6054 autotest: report results via growlnotify
    e3e6819 Add missing binstubs
    6590be7 Disable broken Vim formatter until RSpec 2 formatter API is finalized
    37cca9e Get VimFormatter working again
    8e0e9ef Teach VimFormatter to use growlnotify
    954f970 Remove outdated populate_development_db.rb script
    db55140 Remove gem rake tasks, now made redundant by Bundler
    0a27913 Remove deprecated constant
    f3dc854 Remove deprecated constant
    3ad8389 Clean out legacy scripts from previous versions of Rails/RSpec
    5a6fd9c Whitespace fix
    b0c6208 Silence ActionMailer deprecation warnings
    062bc62 Replace to-be-deprecated #find calls in users controller
    d7facff Restore status script, accidentally blown away in 3ad8389
    d91f54c Use new API for issues search queries
    5a8b69e Fix for another case of Rails bug #5060
    fbabf17 Move workaround into controller to minimize impact on specs
    0bb5bd5 New query API in admin::posts#index
    5481e0b Switch to new query API in needle model
    74f835e Silence another deprecated ActionMailer API warning
    1bfe796 Use new query API in tagging model
    5edbcce Replace some old query API use in comments controller
    227a1b5 Add note about ActiveRecord::Relation quirk
    bc98c6c Don't let YAML errors derail exception mailer
    d77b9a7 Silence another deprecation warning
    adddec6 Use require_dependency to undo Rails unloading
    b742e39 New query API for dashboard controller
    4d6979a Fix navbar search box positioning
    65daa77 Correct ActiveRecord::RecordNotFound constant name
    c6b9828 Remove old comments about former bugs
    dfb6d02 Migrate to new query API in tag model
    7c553e5 Prettify a query in the tagging model
    4d422b3 Drop unnecessary explicit receiver
    68c522f Add Tag#find_with_tag_names method
    48120b0 Use find_with_tag_names method
    b10ace7 Replace 'find_all_by' queries in tagging model
    03507a3 find_using_query_string becomes find_with_query_string
    b2bf3f0 New query API in confirmations controller
    267e09b New query API for forum model
    79319bf Use new query API in topics controller
    f750201 Use shorter idiom in topics controller
    972d6e8 Make annotations about redundant queries in topics#show view
    5ec6391 New query syntax in tags controller
    716e5db New query syntax in resets controller
    40ab852 New query API for issues controller
    3a11a86 New query API for support controller
    1af186d New query API for admin forums controller
    9c9351f New query API for admin issues controller
    295bc44 New query API for admin tags controller
    c53b9fd New query API for confirmations controller
    2265b3e More query changes for resets controller
    bff3c3e Drop unnecessary parens
    3be2924 Add missing parens
    ef27e05 Remove Cucumber sessions feature (already converted to Steak)
    df0625c Fix admin issues controller spec breakage
    9b246e0 Translate wiki feature from Cucumber to Steak
    4a2b2df Convert relative dates spec from Cucumber to Steak
    32a0523 Port issue annotation feature from Cucumber to Steak
    f829685 Port attachments feature from Cucumber to Steak
    fd446cb Steak: only add helpers to acceptance specs
    f69aee9 Make Rails URL helpers work transparently in Steak specs
    46d65a3 Port resets feature from Cucumber to Steak
    a2119e1 Remove features directory
    a1e181f Show Growl notification at end of manual spec runs
    c7158fa Copy growlnotify method from GrowlFormatter
    fb9f242 Comment updates
    d38d8c2 Add rcov to Gemfile
    fdc84fc Add spec:unit:rcov task
    86e08a8 Remove DEPLOYMENT_NOTES
    d2de007 Bring DESIGN_NOTES up to date
    5a6895e Remove SETUP_NOTES
    f0340f8 Rename README_FOR_APP to plain old README
    1a174cf Make GrowlFormatter inherit from ProgressFormatter
    877bcfd Change many instances of "login" to "log[_ ]in"
    127af37 Rename log_in_as_normal_user helper
    28f2084 Specs for confirmations controller
    fe2129c Don't add to cookie flash unless non-nil
    6d10735 Refactoring of confirmations controller
    b0cb3ad Make messages in deliver() more generic (for reuse)
    5dff73c Edit deliver() error messages for brevity
    713fba3 Move deliver() method up into application controller
    a157c23 Move parameter filtering specs out of shared application examples
    7f687b0 New specs for resets#new action
    fa4161b Migrate query to new API in resets controller create action
    4da8449 Use deliver() method in resets#create action
    13f6ff8 New specs for resets#create action
    da8469a New specs for resets#show action
    4f03eac New specs for resets#edit action
    de773e8 Add specs for resets#update action
    2ed0a90 Clean up view spec helpers
    399d1b8 Add specs for tags#index
    c48dc3d Fix reset acceptance spec breakage (case mismatch)
    cc94651 Set "no_full_*" autotest options
    3842bce Specs for tags#show and tags#search actions
    2e2dcd6 Add products helper specs
    829affd Redo pages helper specs
    16834ff Add specs for admin/forums#new
    774c76a Add specs for admin/forums#show.js action
    5f9068f Use RR stub -> mock chaining
    da1623c Remove impertinent attribute from factory
    58840ee Make forum position mass-assignable
    f4a99df Add specs for admin/forums#update.js action
    18cd962 Extract 'require_admin' shared example groups into separate file
    b3d4552 Use stub instead of mock
    8bf1209 Use more lax stubs, because we can
    49d2c2f Bundle update (thor)
    c56927a Bump Steak to commit 1c5e882
    ba7fb0e Specs for users#index action
    600a8c8 More user controller specs
    3ddbf76 Make factories independent of load order
    1281e9d Make user factory more useful in controller specs
    d1b2347 Add specs for users#create
    0d84ed4 User deliver() method in users controller
    1041de5 users#create updates and fixes
    20704ad Drop special handling o position attribute from admin/forums#update
    90988a7 Specs for users#show
    79f5433 Make redirect_to_login a private method
    a5e8522 Reduce repetition in "require_*" shared example groups
    49e6433 Don't refer to Mr Krinkle directly
    59fb324 Partial specs for users#edit action
    bebf612 Specs for users#edit action
    745d181 Make "log_in_as" helpers more realistic
    aa1f97c Remove email deletion handling from users#edit
    dfa01b9 Specs for users#edit
    48b89c6 Remove unnecessary reload
    f58bfea Update comments in users/edit template
    0660215 Fix minor regression in users#edit logic
    7c93041 Avoid possible duplicate ID when showing errors on multiple models
    e083481 Show model type in shared error partial
    fd602ff Move users#update example into right place (fix bug from 0660215b)
    0408b14 Remove unneeded explicit true return from before filters
    575aa8a Make User.emails errors appear as User.email
    e0e91d4 Remove now unused remove_emails method
    330fea5 Make users#to_param work properly with dirty records
    ad7f017 Add initial regression specs for issue #1616
    f1ff4b2 Incorporate changes to acceptance helper from recent Steak
    f6842a2 Be more intention revealing in issue #1616 spec
    1d22c0f Remove duplicate entries from Gemfile.lock
    4843781 Gemfile cleanup (remove workarounds for bugs fixed in Bundler)
    2c1e1a0 Move to Git version of Capybara
    c60808c Better description for commit 76968b7 regression test
    a40454b Avoid deprecation warning in commit 76968b7 regression test
    b4cb9f5 More descriptive filename for commit 76968b7 spec
    84074be Make posts#to_param work properly with dirty records
    2c002f4 Make Article#to_param work properly with dirty records
    8f62db9 Minor refactoring of User#to_param
    c420be4 Make Email#to_param work properly with dirty records
    b8f183f Make Forum#to_param work properly with dirty records
    2598c13 Make Page#to_param and Product#to_param work properly with dirty records
    8f75fea Make tag#to_param behave properly for dirty records
    25a1487 Update bundle (for RSpec 2.0.0.beta.18)
    cb300a2 Whitespace fix (silences warning)
    3db42bc Add workaround for Bundler regression (ticket 478)
    33c3617 Remove items made redundant by RSpec 1.0.0.beta.18
    8dd0ac0 Alias 'it_should_behave_like' to 'it_has_behavior'
    20920e7 Refactoring for tags#edit action
    1f1aedb Minor tweak to Vim formatter to match changes in RSpec
    6432561 Use 'it_has_behavior' in specs
    d703e3b Make 'cookie_flash' spec helper return an "indifferent" hash
    81f1f2e Always use symbol params to cookie_flash method
    0f23082 Implement tags#edit
    3bc10bb Move Steak's Capybara-specific config into capybara.rb support file
    28c5cdd Fix string typo in spec
    ea0fb57 Add tags#edit to issue #1616 regression spec
    cdda05f Rename example group helper modules to more accurately describe them
    51888db Use ":type" for custom spec helper inclusion
    44a6589 Add forums#edit
    d0c8daf Tweaks to tags/edit view spec
    f3b6b09 Add missing tags/edit template omitted from earlier commit
    f5a2962 Add links#edit
    4033cf0 Restore syntax highlighting functionality
    fa7697b Update product links in application layout
    9644137 Use all lowercase in footer links to reduce their importance
    05e43e3 Update product links in static pages
    fd11ec2 Prettify and remove inline CSS from maintenance page
    b72a7e7 Add haml versions of static files in public
    2ed9fbe Round-trip generate static HTML files in public using Haml
    9f61469 Bundle update (test fix for Bundle issue #477)
    7ee4605 Add script/static for generating static HTML from Haml files
    503b390 Add static:generate rake task
    13b4ed7 Refactor script/static
    9f02efc Introduce View class into script/static
    15dcf7f Implement "content_for" in script/static
    b57da9b Add 'render' method to script/static
    ca10ce9 script/static: don't mention explicit :content
    80e8d5f script/static: drop explicit page title argument
    3e1164e script/static: use instance variable for sections
    37cdf5f rake static:generate updates files on as-needed basis
    dd043ef script/static: blow-up early for missing or bad args
    b3077e7 Tweaks to application layout for HTML 5
    ce4a81c Drop unnecessary explicit yield in static layout
    cd2d65f script/static: silence warning about multiple values for a block parameter
    e69e387 Make generate:static task files depend on layout file as well
    6347da7 Show search criteria above issue search results listing
    7bca896 Initial version of repos controller
    5668764 Add repo model
    4522677 Add missing repos#index template from previous commit
    bbb8772 Add repo factory to meta specs
    c2c6e39 Don't let RSpec rake task files cause production tasks to bomb
    04df7d1 script/deploy: expect Bundler 1.0.0.rc.1 minimum
    d135bdd script/deploy: check that generated static HTML files up-to-date
    5398376 script/deploy: add 'lock' as synonym for 'lockdown'
    708492c Update to Rails 3.0.0.rc
    788fae5 Update to Git version of Haml (for fix for removal of 'returning' method)
    3e0f91c Rails 3.0.0.rc: fix Needle specs breakage
    e8ca595 Set config.active_support.deprecation in development and production
    a1c4119 Work around Rails bug #5208
    780e1e6 Use require_dependency for ostruct
    6fbd7bf Update vendor/cache after update to Bundler 1.0.0.rc.1
    10c2789 Update to Haml 3.0.14
    55385cc Add 'presence' validations to repo model
    78aa286 More specs for repo model
    7faf878 Add association spec for repo model
    c25697e Repo model attribute accessibility
    aecc320 Add notes about repo model
    b87cac5 Update to Haml 3.0.15
    083b7a5 Add wopen3 to Gemfile, for use by Git module
    0e54df8 Remove comment from Gemfile
    8ea187e Start Git:Repo class
    aa7a566 Use mkdtemp to make empty non-repo directory in Git specs
    82578ad Add GitSpecHelpers to Git specs
    f04de33 Update to mkdtemp 1.2
    97c8a63 Add script/start convenience script
    b35d1b0 Add valid repo test to Git::Repo specs
    0b99e11 Make Git::Repo#git method available to collaborators
    c12c584 Add clone_url and rw_clone_url attributes to Repo model
    096e4d6 Squash two new deprecation warnings that appeared in Rails 3.0.0.rc
    cfb1fc9 Merge in changes from fresh 3.0.0.rc application
    b2f119d Add missing parts of commit c12c584
    25de046 Add specs and implementation for #path and #git_dir methods
    b5e994d Update to Wopen3 version 0.3
    6a3ec33 Initial version of #refs method, with support code
    27cf7f1 Teach Git spec helpers to accept blocks
    f7237b2 Add basic Ref, Branch and Tag classes
    f868a77 Add Branch and Tag specs
    b6b4658 Add Repo#head method and Ref::head method
    4d794c7 Add Git::Commit object
    b5f001e More work on Commit#log method
    bf4a554 Refactor commit log parsing
    885d6c0 Git::Ident: parse times into local time
    58a1961 Specs and bug fixes for Git::Commit
    8306fa3 Add basic Git::Repo#commit method
    ac0ae75 Initial pieces of diff-parsing implementation
    c25f6e2 Move commit-related exceptions inside Git::Commit namespace
    ac0d726 Initial cut at diff parsing
    3dcf4aa Fix various bugs in the diff implementation
    d80da96 Add specs for Git::Commit.commit_with_hash
    ace39ae Add specs for ref and repo attributes
    1be328c Handle edge case of length-1 images in diff method
    a92190a Flesh out specs for diff
    eb771c0 Line model needs to know both pre and postimage line number
    1b7bf47 Bundle update with Bundler 1.0.0.rc.5
    1382846 Minor update to 'about' page
    f261ac1 Add repos#new
    f70a999 Remove workaround for Rails bug #4879 (now fixed)
    4347507 Add repos#create
    133a972 Add repo#to_param
    4ffc0cc Make Repo product_id accessible
    d52bc25 Add uniqueness validations to Repo model
    435307a Add database-level constraints for uniqueness in repo model
    269e633 Repo model: validate 'path' attribute refers to a valid Git repo
    d93d5d9 Add repos#show (controller only for now, view to come)
    a737960 Drop unnecessary parens
    0e50bb5 Bundle update (Haml 3.0.17, Capybara 8d34194)
    62defca Bundle update (haml 3.0.17, rack-mount 0.6.10, celerity-0.8.0.beta.4)
    2563246 Update links to new Walrus product pages
    653fd53 Add navbar links for Walrat
    227834b Update to RR 1.0.0
    cc5f6a7 Update to Rails 3.0.0.rc2
    5c6a6e9 Fix breakage caused by use of @controller under Rails 3.0.0.rc2
    c099427 Remove duplicate specs newly failing in Rails 3.0.0.rc2
    5d4f184 Switch to mysql2 driver (includes "bundle update")
    0dd4944 Update specs for minor behavioral differences in mysql2 gem
    4a94e96 Fix timeinfo_for_forum method compatibility with mysql2 adapter
    cd8d76e Add a TODO comment
    bd36123 Add note about Rails bug #5440
    0beb1c1 Whitespace fix
    560a01c Be more liberal with timestamp comparisons in specs
    509d34d "bundle update" to pull down RSpec 2.0.0.beta.20
    d6fa827 "bundle update" to Rails 3.0.0 release
    68c1ba7 Update to Haml 3.0.18 (fixes Rails 3.0.0 spec failures)
    787024d Product description rendered as raw HTML in products#index
    253bef9 Include products.js in products#index
    ac35760 Add more CSS hacks for floats and clearing
    d3d2c4b Use major heading style to separate product categories in products#index
    34c4a5d Add styling for products#index
    1dd235b Update assets submodule 3f7c20d..7b15cea)
    3228ef8 script/deploy: check for version ~> 1.0.0 of bundler
    e1d4b0c script/deploy: pass --deployment switch to Bundler
    63a832c script/deploy: use 'bin/rspec spec' to run specs
    7fce7cf script/deploy: explicitly specify "-f progress" for spec run
    0315943 script/deploy: add missing "git submodule init"
    92e9e3a Add Unicorn to bundle to avoid Rack clashes
    65c79a8 script/deploy: pass --path to 'bundle install' for faster deploys
    6d962d7 script/deploy: pass '--quiet' switch to 'bundle install'
    0278c37 Add memcache gem to Gemfile
    4467f3f Lock memcache at 1.2.12
    5a22e30 Remove workaround for Rails bug #5208
    10ae6d3 script/deploy: don't tag when in staging environment
