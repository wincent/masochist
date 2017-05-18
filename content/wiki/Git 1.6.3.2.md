---
tags: git wiki
---

The latest maintenance release GIT 1.6.3.2 is available at the
    usual places:

      http://www.kernel.org/pub/software/scm/git/

      git-1.6.3.2.tar.{gz,bz2}                        (source tarball)
      git-htmldocs-1.6.3.2.tar.{gz,bz2}                (preformatted docs)
      git-manpages-1.6.3.2.tar.{gz,bz2}                (preformatted docs)

    The RPM binary packages for a few architectures are found in:

      RPMS/$arch/git-*-1.6.3.2-1.fc9.$arch.rpm        (RPM)

    GIT v1.6.3.2 Release Notes
    ==========================

    Fixes since v1.6.3.1
    --------------------

     * A few codepaths picked up the first few bytes from an sha1[] by
       casting the (char *) pointer to (int *); GCC 4.4 did not like this,
       and aborted compilation.

     * Some unlink(2) failures went undiagnosed.

     * The "recursive" merge strategy misbehaved when faced rename/delete
       conflicts while coming up with an intermediate merge base.

     * The low-level merge algorithm did not handle a degenerate case of
       merging a file with itself using itself as the common ancestor
       gracefully.  It should produce the file itself, but instead
       produced an empty result.

     * GIT_TRACE mechanism segfaulted when tracing a shell-quoted aliases.

     * OpenBSD also uses st_ctimspec in "struct stat", instead of "st_ctim".

     * With NO_CROSS_DIRECTORY_HARDLINKS, "make install" can be told not to
       create hardlinks between $(gitexecdir)/git-$builtin_commands and
       $(bindir)/git.

     * command completion code in bash did not reliably detect that we are
       in a bare repository.

     * "git add ." in an empty directory complained that pathspec "." did not
       match anything, which may be technically correct, but not useful.  We
       silently make it a no-op now.

     * "git add -p" (and "patch" action in "git add -i") was broken when
       the first hunk that adds a line at the top was split into two and
       both halves are marked to be used.

     * "git blame path" misbehaved at the commit where path became file
       from a directory with some files in it.

     * "git for-each-ref" had a segfaulting bug when dealing with a tag object
       created by an ancient git.

     * "git format-patch -k" still added patch numbers if format.numbered
       configuration was set.

     * "git grep --color ''" did not terminate.  The command also had
       subtle bugs with its -w option.

     * http-push had a small use-after-free bug.

     * "git push" was converting OFS_DELTA pack representation into less
       efficient REF_DELTA representation unconditionally upon transfer,
       making the transferred data unnecessarily larger.

     * "git remote show origin" segfaulted when origin was still empty.

    Many other general usability updates around help text, diagnostic messages
    and documentation are included as well.

    ----------------------------------------------------------------

    Changes since v1.6.3.1 are as follows:

    Alex Riesen (7):
          Introduce an unlink(2) wrapper which gives warning if unlink failed
          replace direct calls to unlink(2) with unlink_or_warn
          print unlink(2) errno in copy_or_link_directory
          Clarify kind of conflict in merge-one-file helper
          ls-tree manpage: use "unless" instead of "when ... is not"
          ls-tree manpage: output of ls-tree is compatible with update-index
          http-push.c::remove_locks(): fix use after free

    Charles Bailey (2):
          t6023: merge-file fails to output anything for a degenerate merge
          Change xdl_merge to generate output even for null merges

    Clemens Buchacher (1):
          fix segfault showing an empty remote

    Dan McGee (1):
          Fix type-punning issues

    Daniel Cordero (1):
          builtin-checkout: Don't tell user that HEAD has moved before it has

    Dave Olszewski (1):
          merge-recursive: never leave index unmerged while recursing

    Giuseppe Bilotta (1):
          completion: use git rev-parse to detect bare repos

    Jeff King (6):
          fix GIT_TRACE segfault with shell-quoted aliases
          add: don't complain when adding empty project root
          for-each-ref: fix segfault in copy_email
          lock_ref: inform callers of unavailable ref
          fetch: report ref storage DF errors more accurately
          fix cat-file usage message and documentation

    Jim Meyering (2):
          format-patch let -k override a config-specified format.numbered
          pre-commit.sample: don't print incidental SHA1

    Johannes Schindelin (2):
          Add NO_CROSS_DIRECTORY_HARDLINKS support to the Makefile
          Cope better with a _lot_ of packs

    Johannes Sixt (1):
          t3701: ensure correctly set up repository after skipped tests

    Junio C Hamano (8):
          Revert "git-add--interactive: remove hunk coalescing"
          completion: fix PS1 display during a merge on detached HEAD
          completion: simplify "current branch" in __git_ps1()
          completion: enhance "current branch" display
          Prepare for 1.6.3.2
          Update draft release notes for 1.6.3.2
          blame: correctly handle a path that used to be a directory
          GIT 1.6.3.2

    Linus Torvalds (3):
          Avoid unnecessary 'lstat()' calls in 'get_stat_data()'
          Teach 'git checkout' to preload the index contents
          dir.c: clean up handling of 'path' parameter in read_directory_recursive()

    Matt Graham (1):
          Splitting a hunk that adds a line at the top fails in "add -p"

    Michael J Gruber (1):
          merge-options.txt: Clarify merge --squash

    Nanako Shiraishi (1):
          test: checkout shouldn't say that HEAD has moved if it didn't

    Nicolas Pitre (1):
          allow OFS_DELTA objects during a push

    René Scharfe (4):
          grep: fix word-regexp colouring
          grep: fix word-regexp at the beginning of lines
          grep: fix colouring of matches with zero length
          grep: fix empty word-regexp matches

    Stephen Boyd (6):
          api-parse-options.txt: use 'func' instead of 'funct'
          tests: Add tests for missing format-patch long options
          completion: add missing options to show-branch and show
          show-branch: Fix die message in parse_reflog_param()
          commit: -F overrides -t
          apply, fmt-merge-msg: use relative filenames

    Thomas Rast (2):
          Documentation: teach stash/pop workflow instead of stash/apply
          add -i: do not dump patch during application

    Tony Kemp (1):
          Turn on USE_ST_TIMESPEC for OpenBSD
