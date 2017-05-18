---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    A release candidate Git 1.6.6.rc2 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.6.rc2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.6.rc2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.6.rc2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.6.6.rc2-1.fc11.$arch.rpm	(RPM)

    The changes since rc1 are mostly updates to the subsystems.

    The regression to "git pull" that made the command give annoying warning
    message when there is no local commit has been fixed; it appeared in rc1.

    ----------------------------------------------------------------

    Changes since v1.6.6-rc1 are as follows:

    Alex Vandiver (3):
         git-svn: sort svk merge tickets to account for minimal parents
         git-svn: Set svn.authorsfile to an absolute path when cloning
         git-svn: set svn.authorsfile earlier when cloning

    Alexander Gavrilov (1):
         git-gui: Increase blame viewer usability on MacOS.

    Bernt Hansen (1):
         gitk: Skip translation of "wrong Tcl version" message

    Brandon Casey (2):
         t4201: use ISO8859-1 rather than ISO-8859-1
         t9001: use older Getopt::Long boolean prefix '--no' rather than '--no-'

    Clemens Buchacher (1):
         git-gui: search 4 directories to improve statistic of gc hint

    Eric Wong (1):
         git svn: log removals of empty directories

    Greg Price (1):
         git svn: Don't create empty directories whose parents were deleted

    Guillermo S. Romero (1):
         gitk: Add configuration for UI colour scheme

    Heiko Voigt (1):
         git gui: make current branch default in "remote delete branch" merge check

    Jakub Narebski (1):
         gitweb: Describe (possible) gitweb.js minification in gitweb/README

    Jan Krüger (1):
         pull: clarify advice for the unconfigured error case

    Jeff King (3):
         rerere: don't segfault on failure to open rr-cache
         reset: improve worktree safety valves
         add-interactive: fix deletion of non-empty files

    Jens Lehmann (2):
         gitk: Fix diffing committed -> staged (typo in diffcmd)
         gitk: Use the --submodule option for displaying diffs when available

    Jindrich Makovicka (1):
         git-gui: suppress RenderBadPicture X error caused by Tk bug

    Johan Herland (1):
         Fix crasher on encountering SHA1-like non-note in notes tree

    Junio C Hamano (9):
         Documentation/Makefile: allow man.base.url.for.relative.link to be set from Make
         Unconditionally set man.base.url.for.relative.links
         Git 1.6.5.4
         Documentation: xmlto 0.0.18 does not know --stringparam
         Prepare for 1.6.5.5
         Git 1.6.5.5
         Revert recent "git merge <msg> HEAD <commit>..." deprecation
         Update draft release notes to 1.6.6 before -rc2
         Git 1.6.6-rc2

    Linus Torvalds (1):
         Fix diff -B/--dirstat miscounting of newly added contents

    Markus Heidelberg (1):
         gitk: Fix "git gui blame" invocation when called from top-level directory

    Mizar (2):
         gitk: Add Japanese translation
         gitk: Update Japanese translation

    Pat Thoyts (4):
         gitk: Use themed tk widgets
         gitk: Fix errors in the theme patch
         gitk: Default to the system colours on Windows
         gitk: Fix selection of tags

    Paul Mackerras (5):
         gitk: Restore scrolling position of diff pane on back/forward in history
         gitk: Add a user preference to enable/disable use of themed widgets
         gitk: Show diff of commits at end of compare-commits output
         gitk: Don't compare fake children when comparing commits
         gitk: Improve appearance of radiobuttons and checkbuttons

    René Scharfe (1):
         archive: clarify description of path parameter

    SZEDER Gábor (1):
         bash: update 'git commit' completion

    Sitaram Chamarty (1):
         gitk: Disable checkout of remote branches

    Todd Zullinger (1):
         Documentation: Avoid use of xmlto --stringparam
