---
tags: git wiki
cache_breaker: 1
---

From the official announcement to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.0.4 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.0.4.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.0.4.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.0.4.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.0.4-1.fc11.$arch.rpm	(RPM)

    Git v1.7.0.4 Release Notes
    ==========================

    Fixes since v1.7.0.3
    --------------------

    * Optimized ntohl/htonl on big-endian machines were broken.

    * Color values given to "color.<cmd>.<slot>" configuration can now have
      more than one attributes (e.g. "bold ul").

    * "git add -u nonexistent-path" did not complain.

    * "git apply --whitespace=fix" didn't work well when an early patch in
      a patch series adds trailing blank lines and a later one depended on
      such a block of blank lines at the end.

    * "git fast-export" didn't check error status and stop when marks file
      cannot be opened.

    * "git format-patch --ignore-if-in-upstream" gave unwarranted errors
      when the range was empty, instead of silently finishing.

    * "git remote prune" did not detect remote tracking refs that became
      dangling correctly.

    And other minor fixes and documentation updates.

    ----------------------------------------------------------------

    Changes since v1.7.0.3 are as follows:

    Björn Gustavsson (5):
         apply: Don't unnecessarily update line lengths in the preimage
         apply: Remove the quick rejection test
         apply: Allow blank context lines to match beyond EOF
         t4124: Add additional tests of --whitespace=fix
         t3417: Add test cases for "rebase --whitespace=fix"

    Chris Packham (1):
         test for add with non-existent pathspec

    David Aguilar (1):
         difftool: Fix '--gui' when diff.guitool is unconfigured

    Greg Bacon (1):
         Documentation: Clarify support for smart HTTP backend

    Holger Weiß (3):
         Don't redefine htonl and ntohl on big-endian
         Link against libiconv on IRIX
         Documentation: show-ref <pattern>s are optional

    Jakub Narebski (1):
         gitweb: git_get_project_config requires only $git_dir, not also $project

    Jan Stępień (1):
         Updated the usage string of git reset

    Jeff King (1):
         dir: fix COLLECT_IGNORED on excluded prefixes

    Johannes Sixt (2):
         diff: fix textconv error zombies
         Windows: fix utime() for read-only files

    Junio C Hamano (8):
         git add -u: die on unmatched pathspec
         color: allow multiple attributes
         t0050: mark non-working test as such
         tests for "git add ignored-dir/file" without -f
         refs: ref entry with NULL sha1 is can be a dangling symref
         t9350: fix careless use of "cd"
         Prepare for 1.7.0.4
         Git 1.7.0.4

    Kevin Ballard (1):
         format-patch: Squelch 'fatal: Not a range." error

    Markus Heidelberg (1):
         Documentation: explain the meaning of "-g" in git-describe output

    Sverre Rabbelier (1):
         fast-export: don't segfault when marks file cannot be opened

# See also

-   [Updating to Git 1.7.0.4 on Mac OS X 10.6.2 Snow Leopard](/wiki/Updating_to_Git_1.7.0.4_on_Mac_OS_X_10.6.2_Snow_Leopard)
