---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.6.5.7 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.5.7.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.5.7.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.5.7.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.5.7-1.fc11.$arch.rpm	(RPM)

    Nothing spectacular to see here, but as I was tagging 1.6.6-rc3 today, I
    wanted to push out fixes accumulated on the maintenance branch in a tagged
    release.  Everything in this release is also in 1.6.6-rc3.

    ----------------------------------------------------------------

    Changes since v1.6.5.6 are as follows:

    Jeff King (1):
         ignore unknown color configuration

    Johannes Sixt (1):
         help.autocorrect: do not run a command if the command given is junk

    Junio C Hamano (2):
         worktree: don't segfault with an absolute pathspec without a work tree
         Git 1.6.5.7

    Nanako Shiraishi (1):
         Illustrate "filter" attribute with an example
