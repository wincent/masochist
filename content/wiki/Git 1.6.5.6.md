---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.6.5.6 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.5.6.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.5.6.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.5.6.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.5.6-1.fc11.$arch.rpm	(RPM)

    Hopefully this will be the last update to the 1.6.5.X series before the
    upcoming feature release (1.6.6).  It fixes a security issue, and users of
    older 1.6.5.X series are strongly recommended to update to this version.

    Git v1.6.5.6 Release Notes
    ==========================

    Fixes since v1.6.5.5
    --------------------

    * "git add -p" had a regression since v1.6.5.3 that broke deletion of
      non-empty files.

    * "git archive -o o.zip -- Makefile" produced an archive in o.zip
      but in POSIX tar format.

    * Error message given to "git pull --rebase" when the user didn't give
      enough clue as to what branch to integrate with still talked about
      "merging with" the branch.

    * Error messages given by "git merge" when the merge resulted in a
      fast-forward still were in plumbing lingo, even though in v1.6.5
      we reworded messages in other cases.

    * The post-upload-hook run by upload-pack in response to "git fetch" has
      been removed, due to security concerns (the hook first appeared in
      1.6.5).

    ----------------------------------------------------------------

    Changes since v1.6.5.5 are as follows:

    Jan Krüger (1):
         pull: clarify advice for the unconfigured error case

    Jeff King (1):
         add-interactive: fix deletion of non-empty files

    Junio C Hamano (3):
         Remove post-upload-hook
         Fix archive format with -- on the command line
         Git 1.6.5.6

    Matthieu Moy (2):
         merge-recursive: make the error-message generation an extern function
         builtin-merge: show user-friendly error messages for fast-forward too.
