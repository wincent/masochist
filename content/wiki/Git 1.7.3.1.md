---
tags: git wiki
---

From the official release announcement to the [Git mailing list](/wiki/Git_mailing_list):

    The first maintenance release of Git 1.7.3.X series, 1.7.3.1, is
    available at the usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.3.1.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.3.1.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.3.1.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.3.1-1.fc11.$arch.rpm	(RPM)

    Git v1.7.3.1 Release Notes
    ==========================

    Fixes since v1.7.3
    ------------------

    * "git stash show stash@{$n}" was accidentally broken in 1.7.3 ("git
      stash show" without any argument still worked, though).

    * "git stash branch $branch stash@{$n}" was accidentally broken in
      1.7.3 and started dropping the named stash even when branch creation
      failed.

    And other minor fixes and documentation updates.
