---
tags: git
---

From the official announcement posted to the [Git](/wiki/Git) mailing list:

    The latest maintenance release GIT 1.6.3.1 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.3.1.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.3.1.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.3.1.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.3.1-1.fc9.$arch.rpm	(RPM)

    Embarrasingly 1.6.3 has a rather grave regression when you switch to a new
    branch while you have some changes added to the index.  A commit you make
    from that index will record a wrong tree.  Please consider this a hotfix
    and do not use vanilla 1.6.3.

    ----------------------------------------------------------------

    Changes since v1.6.3 are as follows:

    Alex Riesen (1):
         Clarify kind of conflict in merge-one-file helper

    Alexander Potashev (1):
         Documentation: cloning to empty directory is allowed

    Felipe Contreras (1):
         git config: clarify --add and --get-color

    Junio C Hamano (4):
         Start 1.6.3.1 maintenance series.
         archive-tar.c: squelch a type mismatch warning
         Revert "checkout branch: prime cache-tree fully"
         GIT 1.6.3.1
