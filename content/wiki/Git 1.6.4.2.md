---
tags: git wiki
cache_breaker: 1
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release GIT 1.6.4.2 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.4.2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.4.2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.4.2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.4.2-1.fc9.$arch.rpm	(RPM)

    GIT v1.6.4.2 Release Notes
    ==========================

    Fixes since v1.6.4.1
    --------------------

    * --date=relative output between 1 and 5 years ago rounded the number of
       years when saying X years Y months ago, instead of rounding it down.

    * "git add -p" did not handle changes in executable bits correctly
     (a regression around 1.6.3).

    * "git apply" did not honor GNU diff's convention to mark the creation/deletion
     event with UNIX epoch timestamp on missing side.

    * "git checkout" incorrectly removed files in a directory pointed by a
     symbolic link during a branch switch that replaces a directory with
     a symbolic link.

    * "git clean -d -f" happily descended into a subdirectory that is managed by a
     separate git repository.  It now requires two -f options for safety.

    * "git fetch/push" over http transports had two rather grave bugs.

    * "git format-patch --cover-letter" did not prepare the cover letter file
     for use with non-ASCII strings when there are the series contributors with
     non-ASCII names.

    * "git pull origin branch" and "git fetch origin && git merge origin/branch"
     left different merge messages in the resulting commit.

    Other minor documentation updates are included.

# See also

-   [Updating to Git 1.6.4.2 on Mac OS X 10.6 Snow Leopard](/wiki/Updating_to_Git_1.6.4.2_on_Mac_OS_X_10.6_Snow_Leopard)
