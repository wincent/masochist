---
tags: git wiki
---

From the official announcement to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.0.2 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.0.2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.0.2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.0.2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.0.2-1.fc11.$arch.rpm	(RPM)

    Git v1.7.0.2 Release Notes
    ==========================

    Fixes since v1.7.0.1
    --------------------

    * GIT_PAGER was not honored consistently by some scripted Porcelains, most
      notably "git am".

    * updating working tree files after telling git to add them to the
      index and while it is still working created garbage object files in
      the repository without diagnosing it as an error.

    * "git bisect -- pathspec..." did not diagnose an error condition properly when
      the simplification with given pathspec made the history empty.

    * "git rev-list --cherry-pick A...B" now has an obvious optimization when the
      histories haven't diverged (i.e. when one end is an ancestor of the other).

    * "git diff --quiet -w" did not work as expected.

    * "git fast-import" didn't work with a large input, as it lacked support
      for producing the pack index in v2 format.

    * "git imap-send" didn't use CRLF line endings over the imap protocol
      when storing its payload to the draft box, violating RFC 3501.

    * "git log --format='%w(x,y,z)%b'" and friends that rewrap message
      has been optimized for utf-8 payload.

    * Error messages generated on the receiving end did not come back to "git
      push".

    * "git status" in 1.7.0 lacked the optimization we used to have in 1.6.X series
      to speed up scanning of large working tree.

    * "gitweb" did not diagnose parsing errors properly while reading tis configuration
      file.

    And other minor fixes and documentation updates.

    ----------------------------------------------------------------

    Changes since v1.7.0.1 are as follows:

    Bert Wesarg (1):
         unset GREP_OPTIONS in test-lib.sh

    Christian Couder (1):
         bisect: error out when passing bad path parameters

    Dmitry Potapov (1):
         hash-object: don't use mmap() for small files

    Erik Faye-Lund (1):
         run-command: support custom fd-set in async

    Gabriel Filion (1):
         require_work_tree broken with NONGIT_OK

    Hitoshi Mitake (1):
         git-imap-send: Convert LF to CRLF before storing patch to draft box

    Jakub Narebski (2):
         gitweb: Die if there are parsing errors in config file
         gitweb: Fix project-specific feature override behavior

    Jonathan Nieder (8):
         Fix 'git var' usage synopsis
         Make 'git var GIT_PAGER' always print the configured pager
         git.1: Clarify the behavior of the --paginate option
         git svn: Fix launching of pager
         am: Fix launching of pager
         tests: Add tests for automatic use of pager
         t7006-pager: if stdout is not a terminal, make a new one
         tests: Fix race condition in t7006-pager

    Junio C Hamano (6):
         t6000lib: Fix permission
         lib-patch-mode.sh: Fix permission
         status: preload index to optimize lstat(2) calls
         Start preparing for 1.7.0.2
         Update draft release notes to 1.7.0.2
         Git 1.7.0.2

    Larry D'Anna (2):
         git diff --quiet -w: check and report the status
         git-diff: add a test for git diff --quiet -w

    Matthieu Moy (1):
         stash: suggest the correct command line for unknown options.

    Michal Sojka (1):
         Remove extra '-' from git-am(1)

    Nicolas Pitre (8):
         fast-import: start using struct pack_idx_entry
         fast-import: use sha1write() for pack data
         fast-import: use write_idx_file() instead of custom code
         fast-import: make default pack size unlimited
         fast-import: honor pack.indexversion and pack.packsizelimit config vars
         fast-import: use the diff_delta() max_delta_size argument
         sha1_file: don't malloc the whole compressed result when writing out objects
         sha1_file: be paranoid when creating loose objects

    René Scharfe (4):
         utf8.c: remove print_wrapped_text()
         utf8.c: remove print_spaces()
         utf8.c: remove strbuf_write()
         utf8.c: speculatively assume utf-8 in strbuf_add_wrapped_text()

    Shawn O. Pearce (7):
         run-command: Allow stderr to be a caller supplied pipe
         send-pack: demultiplex a sideband stream with status data
         receive-pack: Refactor how capabilities are shown to the client
         receive-pack: Wrap status reports inside side-band-64k
         receive-pack: Send hook output over side band #2
         t5401: Use a bare repository for the remote peer
         receive-pack: Send internal errors over side-band #2

    Stephen Boyd (1):
         t7406: Fix submodule init config tests

    Sylvain Rabot (1):
         gitweb multiple project roots documentation

    Tay Ray Chuan (1):
         transport: add got_remote_refs flag

    Thomas Rast (1):
         cherry_pick_list: quit early if one side is empty
