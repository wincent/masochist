---
title: Weekly progress report #1
tags: progress blog
---

I've just whipped together a quick script to iterate over my local repositories (ones I control, not clones of upstream projects) and produce a brief summary of the recent commits. I'm going to try and run this script on a weekly basis to give a basic overview of what I've been working on that week.

There may be some minor errors — gaps or overlaps — depending on which time of day I run the script (and I *do* want to run it manually so that I can review the results), but the script should be fine for its intended purpose: giving a general overview of what's been happening.

# leopard/REnamer

    63ad0d5 Update project references for files moved to WOPublic
    323155a Change import statement to get plug-in building again
    4b155c0 Add WOPublic Xcode project to "Dependencies" group
    31e5647 Clean up comments in WOREnamer_Version.h
    de621cd Make application target buildable again
    9208d42 Fix tool breakage
    5be826e Embed what(1) information in "re" tool
    dc5ed75 Whitespace fixes
    aed4aa9 Fix application test breakage due to migration
    45945f2 Force linkage of static libpcre
    578d444 Fix unit test failures caused by renaming to WOREnamerDocument
    854af48 Fix more unit test failures
    d9b54cc Xcode project noise
    a527050 Update copyright range
    748eadd Update preview when checkboxes are manipulated
    22b8c64 Tool: update usage and version information
    beac3fd Tool: update usage to include short negative options
    22ee46c Tool: parse command-line options
    a747ce2 Tool: add merge_options and normalize_options functions

    22 files changed, 644 insertions(+), 259 deletions(-)

# leopard/WOCommon

    3c97b49 Migrate NSArray WOConvenience category to WOPublic
    6c1b5b7 Change "Error:" to "error:" in WORequire macro

    3 files changed, 15 insertions(+), 63 deletions(-)

# leopard/WOPublic

    c2e8306 Import NSArray WOConvenience category from WOCommon
    1a657bb Add license header to NSArray WOConvenience category
    ced2f58 Add xcalloc() wrapper
    32cff7d Rename wmalloc() to emalloc()

    3 files changed, 114 insertions(+), 3 deletions(-)

# unversioned/wikitext

    90de8af Change license header from GPL to BSD
    cac0b47 Really change license header
    575fca3 Extract repeated pattern into wiki_append_pre_start()
    024870e Handle optional "lang" attribute in PRE_START tags
    f50de80 Update README for new PRE_START "lang" attribute

    5 files changed, 1234 insertions(+), 1040 deletions(-)

# unversioned/wincent.com

    3634ec5 Use orange CSS styling on hovered major headings
    647a55c Dynamically add line-numbers to "pre" blocks
    b37a932 CSS: make "pre" line numbers stand out more

    3 files changed, 37 insertions(+), 5 deletions(-)

# unversioned/wincent.git

    61a7e2a .vim/.vimrc: initial import
    c34c549 Vim: Record version information for vim-git plugin
    416e04b Vim: add symlinks for dot files
    af52533 Vim: remove stray fuzzyfinder archive
    3253304 Vim: Incorporate fixes to :GitCommit
    f6b0ad5 Git: add Git Bash completion script from Git 1.6.3
    bc6bf0d Bash: import bash completion 20060301
    1816296 Vim: set low ttimeoutlen
    7849a35 Vim: set nocompatible, just in case
    001edd7 Vim: add custom statusline
    c18ace0 Vim: activate plugins by filetype
    2114f31 Vim: Map XP Template to F5
    e798a3d Vim: use wildmenu for completion
    c752e87 Vim: new settings for virtualedit, showmatch etc
    2501361 Vim: map Command-A, Command-O and Command-T
    8e0bfaf Vim: guard MacVim-specific setup with has('gui_macvim')
    32d57fc Bash: import .bash_profile
    1a5c298 Bash: change from GPL to BSD license
    8f92eaa Bash: general cleanup and fat-trimming
    528d05f Bash: defer to bash completion for host completion
    4290c82 Bash: defer to bash completion for more things
    1a372ff Bash: remove buttonarchive function
    d327c12 Bash: add "ts" script
    12c8fb8 Bash: remove irb configuration
    ed7080c Ack: import .ackrc file
    2cbb59a Ack: add symlink for .ackrc file
    1e1ec48 Ack: add "rl" (Ragel) file type
    189d2fd Ack: add filetypes for "txt" and "xcconfig" files

    51 files changed, 19986 insertions(+), 8 deletions(-)
