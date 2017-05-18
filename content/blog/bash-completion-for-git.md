---
title: Bash completion for Git
tags: blog
---

If you're using [Git](http://www.wincent.com/knowledge-base/Git) and [Bash](http://www.wincent.com/knowledge-base/Bash) (if you're using a programmer and have the freedom to choose the [SCM](http://www.wincent.com/knowledge-base/SCM) you use then the former should be true; if you're a [Mac OS X](http://www.wincent.com/knowledge-base/Mac%20OS%20X) user then the latter is true by default unless you've overridden it) then you really should check out the Bash completion script that comes with Git (in `contrib/completion/`).

I had previously only glanced at it but on giving it a bit more of a serious try I am really, really impressed with its usefulness.

Examples:

    # show subcommands starting with "show"
    $ git show<tab>
    show          show-branch   show-ref

    # autocompletion of branch names
    $ git checkout m<tab>
    maint    master

    # same, but with awareness of "co" alias for checkout
    $ git co m<tab>
    maint    master

    # autocompletion of file names
    $ git co WO<tab>
    WOAudioscrobbler.h  WOAudioscrobbler.m  WOCommon@           WOPublic@

    # autocompletion of options
    $ git diff --<tab>
    --abbrev                --diff-filter           --ignore-space-at-eol   --no-renames            --shortstat 
    --binary                --exit-code             --ignore-space-change   --numstat               --stat 
    --cached                --ext-diff              --name-only             --patch-with-stat       --summary 
    --check                 --find-copies-harder    --name-status           --pickaxe-all           --text 
    --color                 --full-index            --no-color              --pickaxe-regex         
    --color-words           --ignore-all-space      --no-ext-diff           --quiet

I'm sure that that's only just scratching the surface, but even that small subset of the completion functionality is an impressive usability enhancement that will help you dozens or hundreds of times per day.
