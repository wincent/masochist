---
tags: git wiki
---

[Git 1.5.2.5](/wiki/Git_1.5.2.5) was released on 16 August 2007.

# Release notes

    GIT v1.5.2.5 Release Notes
    ==========================

    Fixes since v1.5.2.4
    --------------------

     * Bugfixes

       - "git add -u" had a serious data corruption problem in one
         special case (when the changes to a subdirectory's files
         consist only deletion of files).

       - "git add -u <path>" did not work from a subdirectory.

       - "git apply" left an empty directory after all its files are
         renamed away.

       - "git $anycmd foo/bar", when there is a file 'foo' in the
         working tree, complained that "git $anycmd foo/bar --" form
         should be used to disambiguate between revs and files,
         which was completely bogus.

       - "git checkout-index" and other commands that checks out
         files to the work tree tried unlink(2) on directories,
         which is a sane thing to do on sane systems, but not on
         Solaris when you are root.

     * Documentation Fixes and Updates

       - A handful documentation fixes.

# See also

-   [Upgrading to Git 1.5.2.5](/wiki/Upgrading_to_Git_1.5.2.5)
-   Tag for 1.5.2.5: <http://repo.or.cz/w/git.git?a=tag;h=43738ab9ed77af9f2427c010147e5215068d5af6>
-   Release notes for 1.5.2.5: <http://repo.or.cz/w/git.git?a=blob;f=Documentation/RelNotes-1.5.2.5.txt;h=e8281c72a0b997e90cba2c9a2c4153f8607a7b76;hb=b13ef4916ac5a25cc5897f85ba0b4c5953cff609>
