---
tags: git wiki
---

From the official announcement to the [Git mailing list](/wiki/Git_mailing_list):

    A release candidate Git 1.7.3.rc2 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.3.rc2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.3.rc2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.3.rc2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.7.3.rc2-1.fc11.$arch.rpm	(RPM)



    Changes since v1.7.3-rc1 are as follows:

    Csaba Henk (2):
         bundle: detect if bundle file cannot be created
         filter-branch: retire --remap-to-ancestor

    Jens Lehmann (2):
         Several tests: cd inside subshell instead of around
         t1020: Get rid of 'cd "$HERE"' at the start of each test

    Jonathan Nieder (5):
         tests: subshell indentation stylefix
         t1450 (fsck): remove dangling objects
         t2105 (gitfile): add missing &&
         t1302 (core.repositoryversion): style tweaks
         t2016 (checkout -p): add missing &&

    Junio C Hamano (3):
         t3101: modernise style
         ls-tree $di $dir: do not mistakenly recurse into directories
         Git 1.7.3 rc2

    Matthieu Moy (1):
         git-gui: use shell to launch textconv filter in "blame"

    Oded Shimon (1):
         Add --src/dst-prefix to git-formt-patch in git-rebase.sh

    Pat Thoyts (6):
         git-gui: Make usage statement visible on Windows.
         git-gui: display error launching blame as a message box.
         git-gui: handle textconv filter on Windows and in development
         git-gui: ensure correct application termination in git-gui--askpass
         git-gui: avoid mis-encoding the copyright message on Windows.
         git-gui 0.13

    Peter Krefting (1):
         git-gui: Update Swedish translation (521t).

    Ramsay Allan Jones (1):
         vcs-svn: Fix some printf format compiler warnings

    René Scharfe (1):
         compat/nedmalloc: don't force NDEBUG on the rest of git

    Schalk, Ken (1):
         Avoid rename/add conflict when contents are identical
    --
    To unsubscribe from this list: send the line "unsubscribe git" in
    the body of a message to majordomo@vger.kernel.org
    More majordomo info at  http://vger.kernel.org/majordomo-info.html
