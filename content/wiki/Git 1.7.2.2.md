---
tags: git wiki
cache_breaker: 1
---

From the official announcement to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.2.2 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.2.2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.2.2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.2.2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.2.2-1.fc11.$arch.rpm	(RPM)

    This is primarily for fixing a hanging bug in the smart http transport,
    but also comes with a lot of documentation udpates.

    ----------------------------------------------------------------

    Git v1.7.2.2 Release Notes
    ==========================

    Fixes since v1.7.2.1
    --------------------

    * Object transfer over smart http transport deadlocked the client when
      the remote HTTP server returned a failure, instead of erroring it out.

    * git-gui honors custom textconv filters when showing diff and blame;

    * git diff --relative=subdir (without the necessary trailing /) did not
      work well;

    * "git diff-files -p --submodule" was recently broken;

    * "git checkout -b n ':/token'" did not work;

    * "git index-pack" (hence "git fetch/clone/pull/push") enabled the object
      replacement machinery by mistake (it never should have);

    And other minor fixes and documentation updates.

# See also

-   [Updating to Git 1.7.2.2](/wiki/Updating_to_Git_1.7.2.2)
