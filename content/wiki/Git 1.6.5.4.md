---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.6.5.4 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.5.4.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.5.4.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.5.4.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.5.4-1.fc11.$arch.rpm	(RPM)

    Contains some minor fixes that have been accumulated; all of them
    appear in the upcoming 1.6.6 release as well.

    This should fix the problem that man pages formatted on FC11 boxes are
    littered with "man.base.url.for.relative.link" strings reported earlier
    today.

    Git v1.6.5.4 Release Notes
    ==========================

    Fixes since v1.6.5.3
    --------------------

    * "git help" (without argument) used to check if you are in a directory
      under git control. There was no breakage in behaviour per-se, but this
      was unnecessary.

    * "git prune-packed" gave progress output even when its standard error is
      not connected to a terminal; this caused cron jobs that run it to
      produce crufts.

    * "git pack-objects --all-progress" is an option to ask progress output
      from write-object phase _if_ progress output were to be produced, and
      shouldn't have forced the progress output.

    * "git apply -p<n> --directory=<elsewhere>" did not work well for a
      non-default value of n.

    * "git merge foo HEAD" was misparsed as an old-style invocation of the
      command and produced a confusing error message.  As it does not specify
      any other branch to merge, it shouldn't be mistaken as such.  We will
      remove the old style "git merge <message> HEAD <commit>..."  syntax in
      future versions, but not in this release,

    * "git merge -m <message> <branch>..." added the standard merge message
      on its own after user-supplied message, which should have overrided the
      standard one.

    Other minor documentation updates are included.

    ----------------------------------------------------------------

    Changes since v1.6.5.3 are as follows:

    David Aguilar (1):
         help: Do not unnecessarily look for a repository

    David Soria Parra (1):
         Documentation: Document --branch option in git clone synopsis

    Greg Price (1):
         Documentation: undocument gc'd function graph_release()

    Jeff King (1):
         prune-packed: only show progress when stderr is a tty

    Junio C Hamano (7):
         builtin-apply.c: pay attention to -p<n> when determining the name
         Do not misidentify "git merge foo HEAD" as an old-style invocation
         merge: do not add standard message when message is given with -m option
         Prepare for 1.6.5.4
         Documentation/Makefile: allow man.base.url.for.relative.link to be set from Make
         Unconditionally set man.base.url.for.relative.links
         Git 1.6.5.4

    Michael J Gruber (1):
         Documentation: Fix a few i.e./e.g. mix-ups

    Nicolas Pitre (1):
         pack-objects: split implications of --all-progress from progress activation

    Stephen Boyd (1):
         instaweb: restart server if already running
