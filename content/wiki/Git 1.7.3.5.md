---
tags: git wiki
---

From the official release announcement to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.3.5 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.3.5.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.3.5.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.3.5.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.3.5-1.fc11.$arch.rpm	(RPM)

    Just a handful of small fixes here and there, nothing spectacular, except
    perhaps for a fix to the "am --abort" safety issue Linus noticed the other
    day.

    ----------------------------------------------------------------

    Changes since v1.7.3.4 are as follows:

    Brandon Casey (1):
         test-lib.sh/test_decode_color(): use octal not hex in awk script

    Jakub Narebski (1):
         gitweb: Include links to feeds in HTML header only for '200 OK' response

    Jeff King (1):
         ident: die on bogus date format

    Jiang Xin (1):
         Fix typo in git-gc document.

    Jonathan Nieder (2):
         t0050: fix printf format strings for portability
         gitweb: skip logo in atom feed when there is none

    Junio C Hamano (5):
         commit: die before asking to edit the log message
         am --abort: keep unrelated commits since the last failure and warn
         rebase --skip: correctly wrap-up when skipping the last patch
         Prepare for 1.7.3.5
         Git 1.7.3.5

    Kevin Ballard (1):
         status: Quote paths with spaces in short format

    Kirill Smelkov (2):
         t/t8006: Demonstrate blame is broken when cachetextconv is on
         fill_textconv(): Don't get/put cache if sha1 is not valid

    Mark Lodato (1):
         fsck docs: remove outdated and useless diagnostic

    Michael J Gruber (2):
         git-difftool.txt: correct the description of $BASE and describe $MERGED
         difftool: provide basename to external tools

    Ramsay Allan Jones (1):
         t3419-*.sh: Fix arithmetic expansion syntax error

    René Scharfe (1):
         close file on error in read_mmfile()

    Robin H. Johnson (2):
         Fix false positives in t3404 due to SHELL=/bin/false
         t9001: Fix test prerequisites

    Thomas Rast (1):
         userdiff: fix typo in ruby and python word regexes

    Vasyl' Vavrychuk (1):
         trace.c: mark file-local function static
