---
tags: git
---

From the release announcement posted to the [Git](/wiki/Git) mailing list:

    The latest maintenance release GIT 1.6.1.2 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.1.2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.1.2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.1.2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are also provided
    as courtesy.

     RPMS/$arch/git-*-1.6.1.2-1.fc9.$arch.rpm	(RPM)

    People with 1.6.1 or 1.6.1.1, who push into a repository that borrows
    objects from other repositories via "alternates" mechanism (most of the
    linux kernel subsystems hosted on k.org, and "forks" on various public
    hosting site such as repo.or.cz and github fall into this category), may
    want to upgrade to this version, as these two versions have a buggy "git
    push" that does not like such a repository served by git 1.6.1 or newer.


    GIT v1.6.1.2 Release Notes
    ==========================

    Fixes since v1.6.1.1
    --------------------

    * The logic for rename detectin in internal diff used by commands like
     "git diff" and "git blame" have been optimized to avoid loading the same
     blob repeatedly.

    * We did not allow writing out a blob that is larger than 2GB for no good
     reason.

    * "git format-patch -o $dir", when $dir is a relative directory, used it
     as relative to the root of the work tree, not relative to the current
     directory.

    * v1.6.1 introduced an optimization for "git push" into a repository (A)
     that borrows its objects from another repository (B) to avoid sending
     objects that are available in repository B, when they are not yet used
     by repository A.  However the code on the "git push" sender side was
     buggy and did not work when repository B had new objects that are not
     known by the sender.  This caused pushing into a "forked" repository
     served by v1.6.1 software using "git push" from v1.6.1 sometimes did not
     work.  The bug was purely on the "git push" sender side, and has been
     corrected.

    * "git status -v" did not paint its diff output in colour even when
     color.ui configuration was set.

    * "git ls-tree" learned --full-tree option to help Porcelain scripts that
     want to always see the full path regardless of the current working
     directory.

    * "git grep" incorrectly searched in work tree paths even when they are
     marked as assume-unchanged.  It now searches in the index entries.

    * "git gc" with no grace period needlessly ejected packed but unreachable
     objects in their loose form, only to delete them right away.

    ----------------------------------------------------------------

    Changes since v1.6.1.1 are as follows:

    Björn Steinbrink (1):
         Rename detection: Avoid repeated filespec population

    Jeff King (1):
         avoid 31-bit truncation in write_loose_object

    Johannes Schindelin (2):
         get_sha1_basic(): fix invalid memory access, found by valgrind
         test-path-utils: Fix off by one, found by valgrind

    Junio C Hamano (4):
         ls-tree: add --full-tree option
         Teach format-patch to handle output directory relative to cwd
         send-pack: do not send unknown object name from ".have" to pack-objects
         GIT 1.6.1.2

    Marcel M. Cary (1):
         git-sh-setup: Fix scripts whose PWD is a symlink to a work-dir on OS X

    Markus Heidelberg (2):
         git-commit: color status output when color.ui is set
         git-status -v: color diff output when color.ui is set

    Nanako Shiraishi (1):
         Document git-ls-tree --full-tree

    Nguyễn Thái Ngọc Duy (2):
         grep: support --no-ext-grep to test builtin grep
         grep: grep cache entries if they are "assume unchanged"

    Nicolas Pitre (1):
         objects to be pruned immediately don't have to be loosened

## See also

-   [Updating to git 1.6.1.2](/wiki/Updating_to_git_1.6.1.2)

