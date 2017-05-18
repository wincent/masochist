---
title: Weekly progress report #6
tags: progress blog
---

Here comes another code-level progress report. As per usual, the standard disclaimers apply: this is just an overview of commits on the currently checked-out branch in each repository, so any work done on side branches doesn't show up. The time limits involved are also only approximate, so some overlap or gap relative to the [the last report](/blog/weekly-progress-report-5) is possible.

# snow-leopard/Synergy

    c620e48 Bump version number for 3.5.5a release
    2e83076 Bump version number post-release
    e95a3f9 Set up Leopard/Snow Leopard development branches
    5ec4283 Move updated info plists into subfolders
    c3be6dd Move categories into subfolders
    0dca43b Move WOAudioscrobbler class files into subfolder
    472df27 Move NSTimer category files
    ca2b0da Remove extremely old beta notes
    c0ebc5c Update buildtools 366d169..1bf82fa
    fda515a Update buildtools 1bf82fa..93e282e
    3d3022a Update WOPublic submodule 49f3b99..c76cba5
    9257119 Clang: remove unused local variable
    d0ae869 Clang: eliminate unnecessary clearing of local variables
    597b6c6 Clang: fix two minor resource leaks
    c8fa954 Update buildtools submodule 93e282e..6656431
    7c280fe Clang: fix numerous warnings
    c77a28e Clang: mark prefs controller as conforming to NSTextFieldDelegate

    48 files changed, 1283 insertions(+), 1297 deletions(-)

# snow-leopard/SynergyAdvance

    b2081a0 Growl: silence hg-related build error
    94f67d1 Growl: ignore Xcode fluff files
    a044183 Growl: use same "build" and "build-intermediates" folders as Synergy Advance
    1a86abf Growl: rename configurations to match recent defaults
    0fa84e8 Add TODO note
    2ecba15 Copy Growl framework along with other frameworks
    08aa9f2 Growl: store real hg revision number
    9360fb0 Update path for WOProcessLifetime import
    856cba0 Remove obfuscation header and all references to it
    b318e04 Update version header for Snow Leopard
    ccd62b7 Drop ppc macros from version file
    141e07a Update WOPublic submodule cdd54cd..651555f
    395b5ba Squish a couple of compile errors
    371c6dc Drop Cocoa header import
    031ca95 Squish more compilation errors
    af56591 Drop unnecessary import
    0cf352a Update imports in NSMenuItem category
    f93f316 Erradicate one more reference to the obfuscation header
    533c6e0 Replace old singleton pattern in WOITunesMusicLibrary class
    57b76b1 Remove dealloc method from WOITunesMusicLibrary singleton
    8cc364a Fix syntax error
    2e4ad12 Companion fix to 8cc364a

    70 files changed, 864 insertions(+), 635 deletions(-)

# snow-leopard/WOCommon

    eb8d139 Header tweaks
    af2bf2a Switch WOPublic over to a submodule
    4c2d555 Add buildtools as a submodule
    b905b26 Update buildtools references in Xcode project
    82830e0 Git: ignore "build" folder created by Xcode
    0c984da Remove obfuscation header and all references to it
    6b7b296 Update some imports
    0fe5766 Remove redundant dealloc method
    b4750ac More import updates
    5fef29b Help WOProcessLifetime find its superclass
    8e55a15 Update header for WOProcessLifetime.m
    f71e38f WOProcessLifetime sanitization
    5c9f76a Remove WOProcessLifetime (migrated to WOPublic)
    8b4df7e Remove WOProcessManager class (migrate to WOPublic)
    d0f73c2 Remove Xcode project references to migrated files
    5d482f6 Update macro imports for NSArray creation category
    c536a40 Update Synergy Advance version number for Snow Leopard branch
    607470f Remove WOHost files

    123 files changed, 344 insertions(+), 2334 deletions(-)

# snow-leopard/WOPublic

    732fed9 Initial import of WOProcessLifetime class from WOCommon
    5073a04 Add WOEnumerate.h reference to Xcode project file
    a2d62d7 Add WOProcessLifetime references to Xcode project
    3ea6121 Update WOProcessLifetime headers
    0d49600 Initial import of WOProcessManager class (from WOCommon)
    5abb920 Reformat WOProcessManager files for WOPublic
    49f3b99 Add WOProcessManager references to Xcode project file
    b86050d WOMemoryBarrier.h: drop PowerPC macros on Snow Leopard branch
    651555f Update URL to more recent version of documentation
    4839d41 Import WOHost files from WOCommon
    f586333 Add BSD license header to WOHost files
    ee27b38 Reformat WOHost code documentation to match WOPublic style
    1d4c1bc Add references to WOHost files to Xcode project
    5cc640e Fix compilation errors in WOHost
    821cb27 Link to SystemConfiguration framework
    aa7fde4 Update buildtools submodule 8fb8129..93e282e
    c76cba5 Fix leak in -[WOLoginItem addToList:]

    12 files changed, 1446 insertions(+), 41 deletions(-)

# snow-leopard/buildtools

    366d169 Remove legacy $Id$ tag
    9b7d87b Rewrap README to 80 columns
    40f3da0 Fix GPL references in the README
    18ae5c3 Update README for buildtools as a Git submodule
    64c03c6 README: indent paths to make them stand out
    2ff2a43 README: remove "included tools" list
    6044395 README: add notes on repository URLs and layout
    aa40fda README: remove unnecessary references to enclosing directory
    d49b922 README: add note on tags
    1bf82fa Drop PowerPC support
    04230fd README: update for Snow Leopard
    93e282e Switch to Snow Leopard SDK
    6656431 Switch to Clang/LLVM
    1cd84ad ReleaseNotes.sh: handle submodules ahead of annotated tags
    7d4e122 ReleaseNotes.sh: handle first release

    5 files changed, 100 insertions(+), 70 deletions(-)

# snow-leopard/wincent-icon-util

    6870cc8 Add buildtools as a submodule
    0d2d9db Update project references to buildtools files
    779214e Name "Run script" build phase in Installer package target
    e34e226 Git: ignore "build" folder created by Xcode
    cec9fc1 Add reference to "Package.sh" file
    38e4e43 Add LICENSE references to Xcode project
    e38747e Add installer package references to Xcode project
    46c2025 Add call to objc_startCollectorThread()
    96e41a7 Add tag-release.sh script
    e28ac43 Add "distro.sh" script
    e9bb59c Add Xcode project references to scripts
    34279a3 Add "Distro" target to Xcode project
    dceb194 Update buildtools submodule 6656431..1cd84ad
    1f3c7c0 Drop unnecessary import statement
    199d036 Embed version/copyright information for what(1)
    5156e74 Include product info in usage output
    e5c1aff Enforce minimum system version requirement in installer package
    8e5aff3 Update dates in man page
    bb843c5 Xcode project file buzz
    0469ca4 Bump version number for 2.0 release
    965909f Update buildtools submodule 1cd84ad..7d4e122
    1d5de3d Bump version number for 2.0.1 release
    81e4736 Bump version number post-release
    17fb9e0 distro.sh: distribute package file without zip wrapper

    11 files changed, 292 insertions(+), 30 deletions(-)

# snow-leopard/wincent-strings-util

    78d01f8 Add buildtools as a submodule
    62b163f Update references to buildtools files
    2c675fd Rework references to buildtools
    301e305 Rename "Run script" phase
    12d5598 Remove unneeded PowerPC code
    b40a583 Bump copyright dates in man page
    6ef674f Bump version number for 2.0 release
    a178978 Git: ignore "build" folder created by Xcode
    55f53d7 Add call to objc_startCollectorThread()
    0e3c1f6 Update buildtools submodule d49b922..6656431
    ea7472a Add missing system header import
    614072f Bump version number post-release
    90217dd Enforce minimum system version in installer package
    9b03d4d Add tag-release.sh script
    dd77046 Add schema for "distro.sh" script
    08867ea Add script references to Xcode project
    7ffabdc distro.sh: implement tag checking
    bfb53d7 Add "Distro" target
    d41d08c Clarify comment
    59abb4f Second phase of "distro.sh" (zip up package file)
    65d9ca7 distro.sh: prepare source archive
    85fcf47 distro.sh: include submodules in source archive
    cf3e80b distro.sh: use temp directory to avoid cluttering up BUILT_PRODUCTS_DIR
    f96082e distro.sh: prepare release notes
    8ce03a9 Update buildtools submodule 6656431..1cd84ad
    961e477 distro.sh: prepare plaintext version of man page
    f982362 Bump version number prior to 2.0.1 release
    636af94 Make "tag-release.sh" script executable
    de3fc6c Bump version number post-release
    7336c47 Xcode project file buzz
    33b56c0 distro.sh: distribute package file without zip wrapper

    13 files changed, 246 insertions(+), 47 deletions(-)

# unversioned/wincent.com

    96cbb03 CSS: right-pad blockquotes
    b6909bd Update to Haml 2.2.3
    bed7a88 Add "hide_from_front_page" field to Product model
    d8846aa Add "hide from front page" checkbox to Product form

    371 files changed, 16891 insertions(+), 16694 deletions(-)

# unversioned/wincent.git

    14c1f92 Vim: add a.vim (alternate) plug-in version 2.18
    151fab5 Vim: teach a.vim about Objective-C source code files
    68509f5 Bash: export PYTHONPATH for the benefit of hg
    f8a8493 Bash: Show current directory in Terminal tab
    e328660 Git: add .gitignore file
    afe3bd1 Git: add .gitk file
    c0b1148 Vim: source matchit.vim

    7 files changed, 1099 insertions(+), 0 deletions(-)
