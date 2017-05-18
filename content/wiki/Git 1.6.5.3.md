---
tags: git wiki
cache_breaker: 1
---

The latest maintenance release GIT 1.6.5.3 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.5.3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.5.3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.5.3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.5.3-1.fc9.$arch.rpm	(RPM)

    Git v1.6.5.3 Release Notes
    ==========================

    Fixes since v1.6.5.2
    --------------------

    * info/grafts file didn't ignore trailing CR at the end of lines.

    * Packages generated on newer FC were unreadable by older versions of
      RPM as the new default is to use stronger hash.

    * output from "git blame" was unreadable when the file ended in an
      incomplete line.

    * "git add -i/-p" didn't handle deletion of empty files correctly.

    * "git clone" takes up to two parameters, but did not complain when
      given more arguments than necessary and silently ignored them.

    * "git cvsimport" did not read files given as command line arguments
      correctly when it is run from a subdirectory.

    * "git diff --color-words -U0" didn't work correctly.

    * The handling of blank lines at the end of file by "git diff/apply
      --whitespace" was inconsistent with the other kinds of errors.
      They are now colored, warned against, and fixed the same way as others.

    * There was no way to allow blank lines at the end of file without
      allowing extra blanks at the end of lines.  You can use blank-at-eof
      and blank-at-eol whitespace error class to specify them separately.
      The old trailing-space error class is now a short-hand to set both.

    * "-p" option to "git format-patch" was supposed to suppress diffstat
      generation, but it was broken since 1.6.1.

    * "git imap-send" did not compile cleanly with newer OpenSSL.

    * "git help -a" outside of a git repository was broken.

    * "git ls-files -i" was supposed to be inverse of "git ls-files" without -i
      with respect to exclude patterns, but it was broken since 1.6.5.2.

    * "git ls-remote" outside of a git repository over http was broken.

    * "git rebase -i" gave bogus error message when the command word was
      misspelled.

    * "git receive-pack" that is run in response to "git push" did not run
      garbage collection nor update-server-info, but in larger hosting sites,
      these almost always need to be run.  To help site administrators, the
      command now runs "gc --auto" and "u-s-i" by setting receive.autogc
      and receive.updateserverinfo configuration variables, respectively.

    * Release notes spelled the package name with incorrect capitalization.

    * "gitweb" did not escape non-ascii characters correctly in the URL.

    * "gitweb" showed "patch" link even for merge commits.

    * "gitweb" showed incorrect links for blob line numbers in pathinfo mode.

    Other minor documentation updates are included.


    ----------------------------------------------------------------

    Changes since v1.6.5.2 are as follows:

    Björn Gustavsson (1):
         git-clone.txt: Fix grammar and formatting

    Björn Steinbrink (1):
         pre-commit.sample: Diff against the empty tree when HEAD is invalid

    Clemens Buchacher (1):
         modernize fetch/merge/pull examples

    Daniel Barkalow (2):
         Require a struct remote in transport_get()
         Allow curl helper to work without a local repository

    Dmitry V. Levin (1):
         Makefile: add compat/bswap.h to LIB_H

    Gerrit Pape (1):
         help -i: properly error out if no info viewer can be found

    Gisle Aas (2):
         More precise description of 'git describe --abbrev'
         Fix documentation grammar typo

    Giuseppe Bilotta (1):
         gitweb: fix esc_param

    Jakub Narebski (1):
         gitweb: Do not show 'patch' link for merge commits

    Jan Krüger (1):
         rebase -i: more graceful handling of invalid commands

    Jari Aalto (3):
         Documentation/fetch-options.txt: order options alphabetically
         Documentation/git-pull.txt: Add subtitles above included option files
         Documentation/merge-options.txt: order options in alphabetical groups

    Jeff King (6):
         cvsimport: fix relative argument filenames
         push: always load default config
         add-interactive: handle deletion of empty files
         ls-files: unbreak "ls-files -i"
         push: fix typo in usage
         format-patch: make "-p" suppress diffstat

    Johannes Schindelin (3):
         blame: make sure that the last line ends in an LF
         help -a: do not unnecessarily look for a repository
         diff --color-words -U0: fix the location of hunk headers

    Jonathan Nieder (4):
         clone: detect extra arguments
         Add intermediate build products to .gitignore
         check-ref-format: update usage string
         merge: do not setup worktree twice

    Junio C Hamano (22):
         apply --whitespace=fix: fix handling of blank lines at the eof
         apply --whitespace=fix: detect new blank lines at eof correctly
         apply.c: split check_whitespace() into two
         apply --whitespace=warn/error: diagnose blank at EOF
         apply --whitespace: warn blank but not necessarily empty lines at EOF
         diff.c: the builtin_diff() deals with only two-file comparison
         diff --whitespace=warn/error: obey blank-at-eof
         diff --whitespace=warn/error: fix blank-at-eof check
         diff --color: color blank-at-eof
         core.whitespace: split trailing-space into blank-at-{eol,eof}
         diff --whitespace: fix blank lines at end
         diff.c: shuffling code around
         diff.c: split emit_line() from the first char and the rest of the line
         diff.c: emit_add_line() takes only the rest of the line
         diff -B: colour whitespace errors
         info/grafts: allow trailing whitespaces at the end of line
         gc --auto --quiet: make the notice a bit less verboase
         receive-pack: run "gc --auto --quiet" and optionally "update-server-info"
         clone: fix help on options
         diff --color-words: bit of clean-up
         check-ref-format -h: it does not know the --print option yet
         Git 1.6.5.3

    Markus Heidelberg (1):
         t4034-diff-words: add a test for word diff without context

    Petr Baudis (1):
         gitweb: Fix blob linenr links in pathinfo mode

    Sebastian Schuberth (1):
         Do not try to remove directories when removing old links

    Stephen Boyd (1):
         git-add.txt: fix formatting of --patch section

    Thomas Rast (1):
         Quote ' as \(aq in manpages

    Todd Zullinger (1):
         Makefile: Ensure rpm packages can be read by older rpm versions

    Vietor Liu (1):
         imap-send.c: fix compiler warnings for OpenSSL 1.0

# See also

-   [Updating to Git 1.6.5.3](/wiki/Updating_to_Git_1.6.5.3)
