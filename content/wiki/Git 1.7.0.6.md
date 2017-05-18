---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    Git 1.7.0.6 is available at the usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.0.6.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.0.6.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.0.6.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.0.6-1.fc11.$arch.rpm	(RPM)

    ----------------------------------------------------------------

    Git v1.7.0.6 Release Notes
    ==========================

    Fixes since v1.7.0.5
    --------------------

    * "git diff --stat" used "int" to count the size of differences,
      which could result in overflowing.

    * "git rev-list --abbrev-commit" defaulted to 40-byte abbreviations, unlike
      newer tools in the git toolset.

    And other minor fixes and documentation updates.

    ----------------------------------------------------------------

    Changes since v1.7.0.5 are as follows:

    Charles Bailey (1):
         Documentation: Describe other situations where -z affects git diff

    David Aguilar (1):
         Makefile: Remove usage of deprecated Python "has_key" method

    Jay Soffian (1):
         Documentation/config.txt: default gc.aggressiveWindow is 250, not 10

    Jeff King (1):
         diff: use large integers for diffstat calculations

    Johannes Sixt (1):
         MSVC: Fix build by adding missing termios.h dummy

    Jonathan Nieder (2):
         Document new "already-merged" rule for branch -d
         Documentation/Makefile: fix interrupted builds of user-manual.xml

    Junio C Hamano (1):
         Git 1.7.0.6

    Marc Branchaud (1):
         Docs: Add -X option to git-merge's synopsis.

    Michael J Gruber (3):
         rev-list: use default abbrev length when abbrev-commit is in effect
         t1010-mktree: Adjust expected result to code and documentation
         t7012: Mark missing tests as TODO

    SZEDER Gábor (1):
         reflog: remove 'show' from 'expire's usage string

    Thomas Rast (1):
         combined diff: correctly handle truncated file

    Will Palmer (1):
         documentation: clarify direction of core.autocrlf
