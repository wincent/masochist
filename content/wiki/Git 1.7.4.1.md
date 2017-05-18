---
tags: git wiki
---

From the official release announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The first maintenance release Git 1.7.4.1 is available at the usual
    places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.4.1.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.4.1.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.4.1.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.4.1-1.fc13.$arch.rpm	(RPM)


    Git v1.7.4.1 Release Notes
    ==========================

    Fixes since v1.7.4
    ------------------

    * On Windows platform, the codepath to spawn a new child process forgot
      to first flush the output buffer.

    * "git bundle" did not use OFS_DELTA encoding, making its output a few
      per-cent larger than necessarily.

    * The option to tell "git clone" to recurse into the submodules was
      misspelled with an underscore "--recurse_submodules".

    * "git diff --cached HEAD" before the first commit does what an end user
      would expect (namely, show what would be committed without further "git
      add").

    * "git fast-import" didn't accept the command to ask for "notes" feature
      to be present in its input stream, even though it was capable of the
      feature.

    * "git fsck" gave up scanning loose object files in directories with
      garbage files.

    And other minor fixes and documentation updates.

    ----------------------------------------------------------------

    Changes since v1.7.4 are as follows:

    Chris Packham (1):
         clone: fixup recurse_submodules option

    Jakub Narebski (1):
         gitweb: Mention optional Perl modules in INSTALL

    Jens Lehmann (2):
         t5526: Fix wrong argument order in "git config"
         pull: Document the "--[no-]recurse-submodules" options

    Johannes Sixt (2):
         start_command: flush buffers in the WIN32 code path as well
         t4120-apply-popt: help systems with core.filemode=false

    Jonathan Nieder (5):
         quote.h: simplify the inclusion
         fast-import: clarify documentation of "feature" command
         fast-import: introduce "feature notes" command
         compat: helper for detecting unsigned overflow
         svn-fe: warn about experimental status

    Junio C Hamano (3):
         fsck: drop unused parameter from traverse_one_object()
         fsck: do not give up too early in fsck_dir()
         Git 1.7.4.1

    Nguyễn Thái Ngọc Duy (4):
         diff: support --cached on unborn branches
         Add const to parse_{commit,tag}_buffer()
         sha1_file.c: move find_cached_object up so sha1_object_info can use it
         sha1_object_info: examine cached_object store too

    Pat Thoyts (2):
         t3509: use unconstrained initial test to setup repository.
         t7407: fix line endings for mingw build

    Shawn O. Pearce (1):
         bundle: Use OFS_DELTA in bundle files

    Sitaram Chamarty (1):
         post-receive-email: suppress error if description file missing

    Uwe Kleine-König (1):
         Documentation/merge subtree How-To: fix typo
