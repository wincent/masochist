---
tags: git wiki
cache_breaker: 1
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release GIT 1.6.4.4 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.4.4.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.4.4.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.4.4.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.4.4-1.fc9.$arch.rpm	(RPM)

    This is primarily to fix a http regression introduced by 1.6.4.3

    GIT v1.6.4.4 Release Notes
    ==========================

    Fixes since v1.6.4.4
    --------------------

    * The workaround for Github server that sometimes gave 500 (Internal server
     error) response to HEAD requests in 1.6.4.3 introduced a regression that
     caused re-fetching projects over http to segfault in certain cases due
     to uninitialized pointer being freed.

    * "git pull" on an unborn branch used to consider anything in the work
     tree and the index discardable.

    * "git diff -b/w" did not work well on the incomplete line at the end of
     the file, due to an incorrect hashing of lines in the low-level xdiff
     routines.

    * "git checkout-index --prefix=$somewhere" used to work when $somewhere is
     a symbolic link to a directory elsewhere, but v1.6.4.2 broke it.

    * "git unpack-objects --strict", invoked when receive.fsckobjects
     configuration is set in the receiving repository of "git push", did not
     properly check the objects, especially the submodule links, it received.

    Other minor documentation updates are included.

# See also

-   [Updating to Git 1.6.4.4](/wiki/Updating_to_Git_1.6.4.4)
