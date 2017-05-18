---
tags: git wiki
---

From the official release announcement to the [Git mailing list](/wiki/Git_mailing_list):

    A release candidate Git 1.7.4-rc2 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.4.rc2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.4.rc2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.4.rc2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.7.4.rc2-1.fc13.$arch.rpm	(RPM)

    Hopefully we can declare victory soon and cut the final mid-next week.

    ----------------------------------------------------------------
    Changes since v1.7.4-rc1 include nothing spectacular.

    Anders Kaseorg (1):
         Mark gitk script executable

    Brandon Casey (3):
         trace.c: ensure NULL is not passed to printf
         t0001,t1510,t3301: use sane_unset which always returns with status 0
         t3032: limit sed branch labels to 8 characters

    Jeff King (1):
         docs: explain diff.*.binary option

    Jonathan Nieder (3):
         diff: funcname and word patterns for perl
         gitweb: make logo optional
         t9010: svnadmin can fail even if available

    Junio C Hamano (2):
         userdiff/perl: catch BEGIN/END/... and POD as headers
         Git 1.7.4-rc2

    Matthieu Moy (1):
         commit: suggest --amend --reset-author to fix commiter identity

    Michael J Gruber (1):
         RelNotes/1.7.4: minor fixes

    Ramsay Allan Jones (7):
         lib-git-svn.sh: Move web-server handling code into separate function
         t9157-*.sh: Add an svn version check
         t6038-*.sh: Pass the -b (--binary) option to sed on cygwin
         t3032-*.sh: Pass the -b (--binary) option to sed on cygwin
         t3032-*.sh: Do not strip CR from line-endings while grepping on MinGW
         t4135-*.sh: Skip the "backslash" tests on cygwin
         t9157-*.sh: Make the svn version check more precise

    StephenB (1):
         git svn: fix the final example in man page

    Sylvain Rabot (2):
         gitweb: add extensions to highlight feature map
         gitweb: remove unnecessary test when closing file descriptor

    Thomas Rast (4):
         Documentation/git-archive: spell --worktree-attributes correctly
         Documentation/githooks: post-rewrite-copy-notes never existed
         submodule: fix relative url parsing for scp-style origin
         t0000: quote TAP snippets in test code
