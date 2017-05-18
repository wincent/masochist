---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    A release candidate Git 1.6.6.rc3 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.6.rc3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.6.rc3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.6.rc3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.6.6.rc3-1.fc11.$arch.rpm	(RPM)

    Things have really calmed down and hopefully we can give the final release
    as holiday present to everybody in time ;-)

    ----------------------------------------------------------------

    Changes since v1.6.6-rc2 are as follows:

    Björn Gustavsson (1):
         bash: Support new 'git fetch' options

    Jeff King (1):
         ignore unknown color configuration

    Johannes Sixt (1):
         help.autocorrect: do not run a command if the command given is junk

    Junio C Hamano (7):
         Remove post-upload-hook
         Fix archive format with -- on the command line
         Git 1.6.5.6
         Update Release Notes for 1.6.6 to remove old bugfixes
         worktree: don't segfault with an absolute pathspec without a work tree
         Git 1.6.5.7
         Git 1.6.6-rc3

    Nanako Shiraishi (1):
         Illustrate "filter" attribute with an example
