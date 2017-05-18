---
title: Weekly progress report #5
tags: progress blog
---

Here comes another code-level progress report. As per usual, the standard disclaimers apply: this is just an overview of commits on the currently checked-out branch in each repository, so any work done on side branches doesn't show up. The time limits involved are also only approximate, so some overlap or gap relative to the [the last report](/blog/weekly-progress-report-4) is possible.

# leopard/Synergy

    e41f55f Clean up WOProcessManager class
    f161736 Remove unneeded WOGestalt code
    db7318e Update WOPublic submodule fa5898a -> cfb3b27
    b90e288 Bump minimum system version requirement to Mac OS X 10.5.8
    b244a7d Bump version number for 3.5.3a release
    ac6ae18 Bump marketing version to 3.5.4a
    e8c2721 Update distro.sh script with new relative path to buildtools
    12fab06 Bump version number for 3.5.4a release
    519e966 Xcode: add reference to "tag-release.sh" scripth" script
    b21d9a5 Update "tag-release.sh" script with new paths
    0ea2a71 tag-release.sh: consistency fix
    09c1611 tag-release.sh: add warning about tagging submodules
    5616f2f Bump version number post-release
    e3c7898 Query player position when retrieving track information
    ef5cfd1 Fix Audioscrobbler submission of consecutively repeated tracks
    6390e9c Remove out-of-date localized resources
    8ede3f4 Add menu item for quickly disabling/enabling scrobbling
    7074d91 Extract "audioscrobblerEnabled" method
    1feeb1b Extra preference key string into static variable
    9d004f8 Hook up menu item for toggling scrobbling
    47be80d Set Audioscrobbler menu item title at launch time
    3ed56bd Reverse "polarity" of audioscrobblerMenuTitleForState: method
    bd9055b Flush changes to disk immediately
    7f5fb56 Make prefs UI update when user toggles scrobbling from menu
    165a8df Auto-sync pref changes from app to pref pane
    5b07a66 Sync changes from pref pane to app
    b293981 Handle sync edge case described in 5b07a66

    58 files changed, 787 insertions(+), 9353 deletions(-)

# leopard/SynergyAdvance

    06ca796 Fix typos in WOAppleEventController documentation
    89e534b Update copyright range to include current year
    2fd470a Update Xcode project file
    bd88e00 Update URL broken by issue tracker move
    ec12d8b Remove duplicate reference to header file
    c537294 Git: ignore "build" folder
    fef6c65 Remove some anti-piracy code from main.m
    d27c830 Add WOPublic and buildtools as submodules
    c8fe11f Update Xcode project references to buildtools files
    d245ff9 Update include statements in project-local xcconfig files
    97e230e Remove outdated notes
    7fc0d07 Update refs to WOLogManager class in "synergyd" target
    a3a889c Update WOPublic submodule from cfb3b27 to cdd54cd
    8a94c5f Update main.m imports for synergyd target
    2fe37af Remove unnecessary import from synergyd target's main.m
    ea609ef synergyd: remove enumeration macros and use Objective-C 2.0 "for" idiom
    d06cf8a Remove obfuscation targets
    69ab2d9 Fix broken symlink to Growl source
    bcf922c Update Xcode project references to Growl framework

    1523 files changed, 267350 insertions(+), 542 deletions(-)

# leopard/WOBezel

    47b4cd7 Initial import from private WOBezel repository
    7c58022 Re-add submodules

    2 files changed, 2 insertions(+), 0 deletions(-)

# leopard/WOCommon

    9649947 Remove WOMigrate.h
    cd3bef8 Remove WOSysctl and WOProcessSerialNumber classes
    fda0a23 Remove Xcode project refrences to migrated files

    6 files changed, 1 insertions(+), 653 deletions(-)

# leopard/WODebug

    ddb9688 Make WOPublic a submodule
    9ad8aba Add buildtools as a submodule
    da86379 Update project references to configuration files
    98408ee Ignore "build" directory created by Xcode

    5 files changed, 18 insertions(+), 8 deletions(-)

# leopard/WOHotKey

    43a62d9 Switch to submodule-based buildtools
    4d50c35 Add _WO_SELF macro to localizations header
    4408562 Add WOPublic submodule
    b0567d9 Update WOPublic submodule
    750a508 Implement NSFastEnumeration protocol in WOHotKeyHandlerSet
    82ff57d Update copyright ranges in headers
    ee23a49 Remove obfuscation target
    ddce1de Remove WOObfuscation.h header and all references to it
    300ee33 Xcode project: remove unused "Other sources" group
    dfa7225 Remove unnecessary imports

    29 files changed, 125 insertions(+), 277 deletions(-)

# leopard/WOPublic

    5db5404 Import WOEnumerate.h from WOCommon
    20f4382 Update WOEnumerate.h header
    3f02c03 Rewrap Doxygen comments in WOEnumerate.h
    cfb3b27 Update URL broken by issue tracker move
    d044846 Initial import of WOSysctl and WOProcessSerialNumber classes
    6107e0a Add Xcode project references to new files
    1dcf4b9 Update WOSysctl and WOProcessSerialNumber headers
    1741c7f Formatting changes for WOSysctl and WOProcessSerialNumber
    cdd54cd Update wmalloc reference to emalloc

    8 files changed, 657 insertions(+), 4 deletions(-)

# unversioned/wikitext

    441a906 Accept optional options hash on "nil.w"
    2fb4b56 Implement "link_proc" option ("red link" support)
    c56d6d6 Silence compiler warning in StringValue
    febd17a Remove repetition of ID2SYM() and rb_intern()
    e9e6979 Update RDoc for new "link_proc" feature
    6473f31 Bump version number for 1.9 release
    bd5480c Bump version number post-release

    6 files changed, 285 insertions(+), 7 deletions(-)

# unversioned/wincent.com

    3b7fa81 Remove admin_only helper
    f578782 Update to Haml/Sass 2.2.0
    6572d7b Haml 2.2.0: use new abbreviated attribute syntax where appropriate
    abdf22e Haml 2.2.0: drop unnecessary "==" interpolation markers
    1627f1d Fix unbalanced brackets in issues#show template
    f411324 Trim unnecessary CSS for "button" type
    2e6e4d9 Revert "Trim unnecessary CSS for "button" type"
    24c3807 Fix errors in Product specs
    777dc97 cap: enable Git submodules
    698f980 Haml: update to 2.2.1
    fb5753f Update Wikitext extension to version 1.9
    05e1493 Rails: update to 2.3.3
    7f8bbe1 More explicit formatting error message for redirect text
    6c6f19e Tighten up regular expressions in Article model
    a8a50a5 Rails 2.3.3: reapply ed05c94 (Don't check authenticity tokens for AJAX)
    4e86b42 Use less-sickly colors for admin blog/wiki comments
    cfe32d6 CSS: make admin comment text a little darker
    a1ffa77 Products CSS: More space between "dl" items

    855 files changed, 56256 insertions(+), 34932 deletions(-)

# unversioned/wincent.git

    01ee173 MacVim: expand to max horizontal size on entering fullscreen mode
    db17633 Vim: remove stale comment
    21ad41f MacVim: use Command-F to toggle fullscreen mode
    3c775fa Git: update to Bash completion script from Git 1.6.4

    3 files changed, 86 insertions(+), 29 deletions(-)
