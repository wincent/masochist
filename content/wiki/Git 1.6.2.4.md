---
tags: git wiki
---

# Official release announcement

As posted to the [Git](/wiki/Git) mailing list:

    The latest maintenance release GIT 1.6.2.4 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.2.4.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.2.4.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.2.4.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.2.4-1.fc9.$arch.rpm	(RPM)

    This contains bunch of fixes that have already been merged to the master
    branch in preparation for 1.6.3.

    ----------------------------------------------------------------

    GIT v1.6.2.4 Release Notes
    ==========================

    Fixes since v1.6.2.3
    --------------------

    * The configuration parser had a buffer overflow while parsing an overlong
     value.

    * pruning reflog entries that are unreachable from the tip of the ref
     during "git reflog prune" (hence "git gc") was very inefficient.

    * "git-add -p" lacked a way to say "q"uit to refuse staging any hunks for
     the remaining paths.  You had to say "d" and then ^C.

    * "git-checkout <tree-ish> <submodule>" did not update the index entry at
     the named path; it now does.

    * "git-fast-export" choked when seeing a tag that does not point at commit.

    * "git init" segfaulted when given an overlong template location via
     the --template= option.

    * "git-ls-tree" and "git-diff-tree" used a pathspec correctly when
     deciding to descend into a subdirectory but they did not match the
     individual paths correctly.  This caused pathspecs "abc/d ab" to match
     "abc/0" ("abc/d" made them decide to descend into the directory "abc/",
     and then "ab" incorrectly matched "abc/0" when it shouldn't).

    * "git-merge-recursive" was broken when a submodule entry was involved in
     a criss-cross merge situation.

    Many small documentation updates are included as well.

    ----------------------------------------------------------------

    Changes since v1.6.2.3 are as follows:

    Björn Steinbrink (1):
         tree_entry_interesting: a pathspec only matches at directory boundary

    Clemens Buchacher (3):
         add tests for merging with submodules
         update cache for conflicting submodule entries
         simplify output of conflicting merge

    Erik Faye-Lund (4):
         test-suite: adding a test for fast-export with tag variants
         builtin-fast-export.c: turn error into warning
         builtin-fast-export.c: fix crash on tagged trees
         builtin-fast-export.c: handle nested tags

    Frank Lichtenheld (1):
         init: Do not segfault on big GIT_TEMPLATE_DIR environment variable

    Jeff King (2):
         doc/gitattributes: clarify location of config text
         add-interactive: refactor mode hunk handling

    Johan Herland (1):
         Update docs on behaviour of 'core.sharedRepository' and 'git init --shared'

    Johannes Schindelin (1):
         Fix 'git checkout <submodule>' to update the index

    Johannes Sixt (1):
         t1301-shared-repo: fix forced modes test

    Junio C Hamano (3):
         match_tree_entry(): a pathspec only matches at directory boundaries
         Describe fixes since 1.6.2.3
         GIT 1.6.2.4

    Junio Hamano (1):
         Speed up reflog pruning of unreachable commits

    Linus Torvalds (1):
         Clean up reflog unreachability pruning decision

    Markus Heidelberg (2):
         doc/git-daemon: add missing arguments to options
         doc/git-daemon: add missing arguments to max-connections option

    Matthieu Moy (2):
         git add -p: new "quit" command at the prompt.
         Update git-add.txt according to the new possibilities of 'git add -p'.

    Nguyễn Thái Ngọc Duy (1):
         Makefile: remove {fetch,send}-pack from PROGRAMS as they are builtins

    Paul Bolle (1):
         imap-send: use correct configuration variable in documentation

    Thomas Jarosch (1):
         Fix buffer overflow in config parser

    Ulrich Windl (1):
         git-apply: fix option description

# See also

-   [Updating to Git 1.6.2.4](/wiki/Updating_to_Git_1.6.2.4)
