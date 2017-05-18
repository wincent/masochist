---
tags: git wiki
cache_breaker: 1
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.0.3 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.0.3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.0.3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.0.3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.0.3-1.fc11.$arch.rpm	(RPM)

    Git v1.7.0.3 Release Notes
    ==========================

    Fixes since v1.7.0.2
    --------------------

    * Object files are created in a more ACL friendly way in repositories
      where group permission is ACL controlled.

    * "git add -i" didn't handle a deleted path very well.

    * "git blame" padded line numbers with one extra SP when the total number
      of lines was one less than multiple of ten due to an off-by-one error.

    * "git fetch --all/--multi" used to discard information for remotes that
      are fetched earlier.

    * "git log --author=me --grep=it" tried to find commits that have "it"
      or are written by "me", instead of the ones that have "it" _and_ are
      written by "me".

    * "git log -g branch" misbehaved when there was no entries in the reflog
      for the named branch.

    * "git mailinfo" (hence "git am") incorrectly removed initial indent from
      paragraphs.

    * "git prune" and "git reflog" (hence "git gc" as well) didn't honor
      an instruction never to expire by setting gc.reflogexpire to never.

    * "git push" misbehaved when branch.<name>.merge was configured without
      matching branch.<name>.remote.

    And other minor fixes and documentation updates.

# See also

-   [Updating to Git 1.7.0.3 on Mac OS X 10.6.2 Snow Leopard](/wiki/Updating_to_Git_1.7.0.3_on_Mac_OS_X_10.6.2_Snow_Leopard)
