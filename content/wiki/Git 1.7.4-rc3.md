---
tags: git wiki
---

From the official announcement to the [Git mailing list](/wiki/Git_mailing_list):

    A release candidate Git 1.7.4-rc3 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.4.rc3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.4.rc3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.4.rc3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.7.4.rc3-1.fc13.$arch.rpm	(RPM)

    Except for a regression fix to keep honoring "git --work-tree=/there/ cmd"
    without specifying --git-dir (Thanks Jonathan), there isn't any exciting
    new thing to see here; which is exactly the way how I want an rc3 to be.

    Hopefully we can tag the final by the end of the month.  Everybody, thanks
    in advance for testing this rc ;-).

    ----------------------------------------------------------------

    Changes since v1.7.4-rc2 are as follows:

    Alexey Shumkin (1):
         userdiff: match Pascal class methods

    Björn Steinbrink (1):
         Correctly report corrupted objects

    Erik Faye-Lund (1):
         exec_cmd: remove unused extern

    Johannes Sixt (2):
         Fix expected values of setup tests on Windows
         t/README: hint about using $(pwd) rather than $PWD in tests

    Jonathan Nieder (9):
         ll-merge: simplify opts == NULL case
         Documentation/fast-import: capitalize beginning of sentence
         remote-ext: do not segfault for blank lines
         Documentation/fast-import: put explanation of M 040000 <dataref> "" in context
         tests: cosmetic improvements to the repo-setup test
         tests: compress the setup tests
         Documentation: do not treat reset --keep as a special case
         Subject: setup: officially support --work-tree without --git-dir
         t1510: fix typo in the comment of a test

    Junio C Hamano (2):
         Documentation updates for 'GIT_WORK_TREE without GIT_DIR' historical usecase
         Git 1.7.4-rc3

    Ramsay Allan Jones (1):
         svndump.c: Fix a printf format compiler warning

    --
    To unsubscribe from this list: send the line "unsubscribe git" in
    the body of a message to majordomo@vger.kernel.org
    More majordomo info at  http://vger.kernel.org/majordomo-info.html
