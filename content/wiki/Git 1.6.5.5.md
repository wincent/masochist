---
tags: git wiki
---

From the official announcement to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.6.5.5 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.5.5.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.5.5.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.5.5.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.5.5-1.fc11.$arch.rpm	(RPM)

    This is primarily to help other distros with older xmlto to partially
    revert the change in 1.6.5.4 to help distros with newer docbook
    stylesheets, but I also merged some fixes that have already been cooking
    and graduated to 'master' as well.


    Git v1.6.5.5 Release Notes
    ==========================

    Fixes since v1.6.5.4
    --------------------

    * Manual pages can be formatted with older xmlto again.

    * GREP_OPTIONS exported from user's environment could have broken
      our scripted commands.

    * In configuration files, a few variables that name paths can begin with
      ~/ and ~username/ and they are expanded as expected.  This is not a
      bugfix but 1.6.6 will have this and without backporting users cannot
      easily use the same ~/.gitconfig across versions.

    * "git diff -B -M" did the same computation to hash lines of contents
      twice, and held onto memory after it has used the data in it
      unnecessarily before it freed.

    * "git diff -B" and "git diff --dirstat" was not counting newly added
      contents correctly.

    * "git format-patch revisions... -- path" issued an incorrect error
      message that suggested to use "--" on the command line when path
      does not exist in the current work tree (it is a separate matter if
      it makes sense to limit format-patch with pathspecs like that
      without using the --full-diff option).

    * "git grep -F -i StRiNg" did not work as expected.

    * Enumeration of available merge strategies iterated over the list of
      commands in a wrong way, sometimes producing an incorrect result.

    * "git shortlog" did not honor the "encoding" header embedded in the
      commit object like "git log" did.

    * Reading progress messages that come from the remote side while running
      "git pull" is given precedence over reading the actual pack data to
      prevent garbled progress message on the user's terminal.

    * "git rebase" got confused when the log message began with certain
      strings that looked like Subject:, Date: or From: header.

    * "git reset" accidentally run in .git/ directory checked out the
      work tree contents in there.

    Other minor documentation updates are included.

    ----------------------------------------------------------------

    Changes since v1.6.5.4 are as follows:

    Avery Pennarun (1):
         builtin-merge.c: call exclude_cmds() correctly.

    Brandon Casey (1):
         t4201: use ISO8859-1 rather than ISO-8859-1

    Brian Collins (1):
         grep: Allow case insensitive search of fixed-strings

    Felipe Contreras (2):
         format-patch: fix parsing of "--" on the command line
         format-patch: add test for parsing of "--"

    Jeff King (4):
         diffcore-break: free filespec data as we go
         diffcore-break: save cnt_data for other phases
         rerere: don't segfault on failure to open rr-cache
         reset: improve worktree safety valves

    Junio C Hamano (7):
         diffcore-rename: reduce memory footprint by freeing blob data early
         Documentation: avoid xmlto input error
         Protect scripted Porcelains from GREP_OPTIONS insanity
         Remove dead code from "git am"
         Documentation: xmlto 0.0.18 does not know --stringparam
         Prepare for 1.6.5.5
         Git 1.6.5.5

    Linus Torvalds (1):
         Fix diff -B/--dirstat miscounting of newly added contents

    Lukas Sandström (1):
         git am/mailinfo: Don't look at in-body headers when rebasing

    Matthew Ogilvie (1):
         core.autocrlf documentation: mention the crlf attribute

    Matthieu Moy (4):
         Expand ~ and ~user in core.excludesfile, commit.template
         expand_user_path: expand ~ to $HOME, not to the actual homedir.
         merge-recursive: point the user to commit when file would be overwritten.
         user-manual: Document that "git merge" doesn't like uncommited changes.

    Nicolas Pitre (1):
         give priority to progress messages

    Philippe Bruhat (1):
         Make sure $PERL_PATH is defined when the test suite is run.

    Raman Gupta (1):
         Add branch management for releases to gitworkflows

    Ramsay Allan Jones (3):
         Makefile: merge two Cygwin configuration sections into one
         t9700-perl-git.sh: Fix a test failure on Cygwin
         git-count-objects: Fix a disk-space under-estimate on Cygwin

    René Scharfe (2):
         mergetool--lib: simplify guess_merge_tool()
         archive: clarify description of path parameter

    Tim Henigan (2):
         Update 'git remote update' usage string to match man page.
         git remote: Separate usage strings for subcommands

    Todd Zullinger (1):
         Documentation: Avoid use of xmlto --stringparam

    Uwe Kleine-König (1):
         shortlog: respect commit encoding
