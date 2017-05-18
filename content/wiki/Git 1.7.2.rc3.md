---
tags: git wiki
---

From the official announcement to the [Git mailing list](/wiki/Git_mailing_list):

    A release candidate Git 1.7.2.rc3 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.2.rc3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.2.rc3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.2.rc3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.7.2.rc3-1.fc11.$arch.rpm	(RPM)

    Hopefully this will be the last one before the final I'd like to have by
    the end of the week.

    ----------------------------------------------------------------

    Changes since v1.7.2-rc2 are as follows:

    Bo Yang (1):
         diff.c: fix a graph output bug

    Fredrik Skolmli (1):
         Documentation: Spelling fix in protocol-capabilities.txt

    Johannes Sixt (1):
         t0005: work around strange $? in ksh when program terminated by a signal

    Jonathan Nieder (1):
         t9118 (git-svn): prevent early failure from taking down later tests

    Junio C Hamano (2):
         Fix "read-tree -m A B" priming the cache-tree
         Git 1.7.2-rc3

    Michael J Gruber (3):
         t9118: avoid PEG revision identifier in tests
         test-lib: simplify GIT_SKIP_TESTS loop
         test-lib: TAP compliance for skipping tests on request

    Miklos Vajna (1):
         format-patch: document the format.to configuration setting

    Nicolas Sebrecht (1):
         checkout: accord documentation to what git does

    Oren Held (1):
         git fetch documentation: describe short '-p' synonym to '--prune' option

    Raja R Harinath (1):
         Use dev_t for device id (st_dev) from stat in setup_git_directory_gently()

    Ævar Arnfjörð Bjarmason (1):
         tests: Use skip_all=* to skip tests
