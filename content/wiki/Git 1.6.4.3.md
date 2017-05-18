---
tags: git wiki
cache_breaker: 1
---

From the official release announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release GIT 1.6.4.3 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.4.3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.4.3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.4.3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.4.3-1.fc9.$arch.rpm	(RPM)


    GIT v1.6.4.3 Release Notes
    ==========================

    Fixes since v1.6.4.2
    --------------------

    * "git clone" from an empty repository gave unnecessary error message,
     even though it did everything else correctly.

    * "git cvsserver" invoked git commands via "git-foo" style, which has long
     been deprecated.

    * "git fetch" and "git clone" had an extra sanity check to verify the
     presense of the corresponding *.pack file before downloading *.idx
     file by issuing a HEAD request.  Github server however sometimes
     gave 500 (Internal server error) response to HEAD even if a GET
     request for *.pack file to the same URL would have succeeded, and broke
     clone over HTTP from some of their repositories.  As a workaround, this
     verification has been removed (as it is not absolutely necessary).

    * "git grep" did not like relative pathname to refer outside the current
     directory when run from a subdirectory.

    * an error message from "git push" was formatted in a very ugly way.

    * "git svn" did not quote the subversion user name correctly when
     running its author-prog helper program.

    Other minor documentation updates are included.

# See also

-   [Updating to Git 1.6.4.3 on Mac OS X 10.6 Snow Leopard](/wiki/Updating_to_Git_1.6.4.3_on_Mac_OS_X_10.6_Snow_Leopard)
