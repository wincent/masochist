---
tags: git wiki
cache_breaker: 1
---

From the official announcement to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.2.3 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.2.3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.2.3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.2.3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.2.3-1.fc11.$arch.rpm	(RPM)

    We will soon be preparing for 1.7.3 feature release but during the
    pre-release freeze period for it, I expect one more maintenance updates
    to the 1.7.2.X series.

    Thanks everybody who contributed to this release to help making git less
    suck ;-)


    Git v1.7.2.3 Release Notes
    ==========================

    Fixes since v1.7.2.2
    --------------------

    * When people try insane things such as delta-compressing 4GiB files, we
      threw an assertion failure.

    * "git archive" gave the full commit ID for "$Format:%h$".

    * "git fetch --tags" did not fetch tags when remote.<nick>.tagopt was set
      to --no-tags.  The command line option now overrides the configuration
      setting.

    * "git for-each-ref --format='%(objectname:short)'" has been completely
      broken for a long time.

    * "git gc" incorrectly pruned a rerere record that was created long
      time ago but still is actively and repeatedly used.

    * "git log --follow -M -p" was seriously broken in 1.7.2, reporting
      assertion failure.

    * Running "git log" with an incorrect option started pager nevertheless,
      forcing the user to dismiss it.

    * "git rebase" did not work well when the user has diff.renames
      configuration variable set.

    * An earlier (and rather old) fix to "git rebase" against a rebased
      upstream broke a more normal, non rebased upstream case rather badly,
      attempting to re-apply patches that are already accepted upstream.

    * "git submodule sync" forgot to update the superproject's config file
      when submodule URL changed.

    * "git pack-refs --all --prune" did not remove a directory that has
      become empty.

    ----------------------------------------------------------------

    Changes since v1.7.2.2 are as follows:

    Brandon Casey (2):
         Makefile: link builtins residing in bin directory to main git binary too
         Makefile: make hard/symbolic links for non-builtins too

    Daniel Johnson (1):
         fetch: allow command line --tags to override config

    David Aguilar (1):
         submodule sync: Update "submodule.<name>.url"

    Elijah Newren (3):
         t5520-pull: Add testcases showing spurious conflicts from git pull --rebase
         pull --rebase: Avoid spurious conflicts and reapplying unnecessary patches
         tree-walk: Correct bitrotted comment about tree_entry()

    Greg Price (1):
         pack-refs: remove newly empty directories

    Jay Soffian (1):
         for-each-ref: fix objectname:short bug

    Jens Lehmann (1):
         t7403: add missing &&'s

    Jonathan Nieder (12):
         t4150 (am): style fix
         t4150 (am): futureproof against failing tests
         t3400 (rebase): whitespace cleanup
         archive: abbreviate substituted commit ids again
         checkout, commit: remove confusing assignments to rev.abbrev
         examples/commit: use --abbrev for commit summary
         Documentation: flesh out “git pull” description
         core: Stop leaking ondisk_cache_entrys
         read-tree: stop leaking tree objects
         write-tree: Avoid leak when index refers to an invalid object
         t3302 (notes): Port to Solaris
         parse-options: clarify PARSE_OPT_NOARG description

    Junio C Hamano (6):
         Teach "apply --index-info" to handle rename patches
         rebase: protect against diff.renames configuration
         diff --follow: do not waste cycles while recursing
         diff --follow: do call diffcore_std() as necessary
         Prepare for 1.7.2.3
         Git 1.7.2.3

    Linus Torvalds (1):
         Fix 'git log' early pager startup error case

    Mark Rada (1):
         Tell ignore file about generate files in /gitweb/static

    Matthieu Moy (2):
         xmalloc: include size in the failure message
         t0003: add missing && at end of lines

    Nicolas Pitre (1):
         fix >4GiB source delta assertion failure

    Ralf Wildenhues (1):
         Typos in code comments, an error message, documentation

    SZEDER Gábor (2):
         mingw_utime(): handle NULL times parameter
         rerere: fix overeager gc

    Thiago Farina (1):
         builtin/merge_recursive.c: Add an usage string and make use of it.

    Thomas Rast (5):
         Documentation/git-reset: reorder modes for soft-mixed-hard progression
         Documentation/reset: separate options by mode
         Documentation/reset: promote 'examples' one section up
         Documentation/reset: reorder examples to match description
         Documentation/reset: move "undo permanently" example behind "make topic"

    Ville Skyttä (1):
         Documentation: spelling fixes

    Ævar Arnfjörð Bjarmason (1):
         log: test for regression introduced in v1.7.2-rc0~103^2~2

# See also

-   [Updating to Git 1.7.2.3](/wiki/Updating_to_Git_1.7.2.3)
