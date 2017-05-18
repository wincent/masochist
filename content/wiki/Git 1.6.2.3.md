---
tags: git wiki
---

From the official release announcement posted to the [Git](/wiki/Git) mailing list:

    The latest maintenance release GIT 1.6.2.3 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.2.3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.2.3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.2.3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.2.3-1.fc9.$arch.rpm	(RPM)

    ----------------------------------------------------------------

    GIT v1.6.2.3 Release Notes
    ==========================

    Fixes since v1.6.2.2
    --------------------

    * Setting an octal mode value to core.sharedrepository configuration to
     restrict access to the repository to group members did not work as
     advertised.

    * A fairly large and trivial memory leak while rev-list shows list of
     reachable objects has been identified and plugged.

    * "git-commit --interactive" did not abort when underlying "git-add -i"
     signaled a failure.

    * git-repack (invoked from git-gc) did not work as nicely as it should in
     a repository that borrows objects from neighbours via alternates
     mechanism especially when some packs are marked with the ".keep" flag
     to prevent them from being repacked.

    Many small documentation updates are included as well.

    ----------------------------------------------------------------

    Changes since v1.6.2.2 are as follows:

    Björn Steinbrink (1):
         process_{tree,blob}: Remove useless xstrdup calls

    Brandon Casey (6):
         t7700-repack: add two new tests demonstrating repacking flaws
         git-repack.sh: don't use --kept-pack-only option to pack-objects
         pack-objects: only repack or loosen objects residing in "local" packs
         Remove --kept-pack-only option and associated infrastructure
         t7700: demonstrate repack flaw which may loosen objects unnecessarily
         pack-objects: don't loosen objects available in alternate or kept packs

    Dan McGee (1):
         git-repack: use non-dashed update-server-info

    Daniel Cheng (aka SDiZ) (1):
         State the effect of filter-branch on graft explicitly

    Jari Aalto (1):
         Change double quotes to single quotes in message

    Jason Merrill (1):
         Documentation: clarify .gitattributes search

    Jeff King (2):
         t1301: loosen test for forced modes
         commit: abort commit if interactive add failed

    Johan Herland (1):
         Move chmod(foo, 0444) into move_temp_to_file()

    Julien Danjou (1):
         git submodule: fix usage line

    Junio C Hamano (12):
         git-repack: resist stray environment variable
         has_sha1_pack(): refactor "pretend these packs do not exist" interface
         has_sha1_kept_pack(): take "struct rev_info"
         Consolidate ignore_packed logic more
         Simplify is_kept_pack()
         is_kept_pack(): final clean-up
         diff --cached: do not borrow from a work tree when a path is marked as assume-unchanged
         "core.sharedrepository = 0mode" should set, not loosen
         move_temp_to_file(): do not forget to chmod() in "Coda hack" codepath
         set_shared_perm(): sometimes we know what the final mode bits should look like
         Start 1.6.2.3 preparation
         GIT 1.6.2.3

    Linus Torvalds (1):
         process_{tree,blob}: Remove useless xstrdup calls

    Markus Heidelberg (1):
         doc/git-pack-refs: fix two grammar issues

    Matthieu Moy (3):
         git-checkout.txt: fix incorrect statement about HEAD and index
         git-checkout.txt: clarify that <branch> applies when no path is given.
         git-pull.sh: better warning message for "git pull" on detached head.
