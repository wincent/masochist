---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    A few maintenance releases of Git 1.7.0.8, 1.7.1.3 and 1.7.2.4 are
    available at the usual places (replace $V below with these version
    numbers):

     http://www.kernel.org/pub/software/scm/git/

     git-$V.tar.{gz,bz2}			(source tarball)
     git-htmldocs-$V.tar.{gz,bz2}		(preformatted docs)
     git-manpages-$V.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-$V-1.fc11.$arch.rpm	(RPM)

    These are primarily to backport support for the new "add.ignoreErrors"
    name given to the existing "add.ignore-errors" configuration variable.

    The next version, Git 1.7.4, and future versions, will support both
    old and incorrect name and the new corrected name, but without this
    backport, users who want to use the new name "add.ignoreErrors" in
    their repositories cannot use older versions of Git.
