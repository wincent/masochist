---
tags: git wiki
cache_breaker: 1
---

From the official release announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.1.1 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.1.1.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.1.1.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.1.1.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.1.1-1.fc11.$arch.rpm	(RPM)

    Git v1.7.1.1 Release Notes
    ==========================

    Fixes since v1.7.1
    ------------------

    * Authentication over http transport can now be made lazily, in that the
      request can first go to a URL without username, get a 401 response and
      then the client will ask for the username to use.

    * We used to mistakenly think "../work" is a subdirectory of the current
      directory when we are in "../work-xyz".

    * The attribute mechanism now allows an entry that uses an attribute
      macro that set/unset one attribute, immediately followed by an
      overriding setting; this makes attribute macros much easier to use.

    * We didn't recognize timezone "Z" as a synonym for "UTC" (75b37e70).

    * In 1.7.0, read-tree and user commands that use the mechanism such as
      checkout and merge were fixed to handle switching between branches one
      of which has a file while the other has a directory at the same path
      correctly even when there are some "confusing" pathnames in them.  But
      the algorithm used for this fix was suboptimal and had a terrible
      performance degradation especially in larger trees.

    * "git am -3" did not show diagnosis when the patch in the message was corrupt.

    * After "git apply --whitespace=fix" removed trailing blank lines in an
      patch in a patch series, it failed to apply later patches that depend
      on the presence of such blank lines.

    * "git bundle --stdin" segfaulted.

    * "git checkout" and "git rebase" overwrote paths that are marked "assume
      unchanged".

    * "git commit --amend" on a commit with an invalid author-name line that
      lacks the display name didn't work.

    * "git describe" did not tie-break tags that point at the same commit
      correctly; newer ones are preferred by paying attention to the
      tagger date now.

    * "git diff" used to tell underlying xdiff machinery to work very hard to
      minimize the output, but this often was spending too many extra cycles
      for very little gain.

    * "git diff --color" did not paint extended diff headers per line
      (i.e. the coloring escape sequence didn't end at the end of line),
      which confused "less -R".

    * "git fetch" over HTTP verifies the downloaded packfiles more robustly.

    * The memory usage by "git index-pack" (run during "git fetch" and "git
      push") got leaner.

    * "GIT_DIR=foo.git git init --bare bar.git" created foo.git instead of bar.git.

    * "git log --abbrev=$num --format='%h' ignored --abbrev=$num.

    * "git ls-files ../out/side/cwd" refused to work.

    * "git merge --log" used to replace the custom message given by "-m" with
      the shortlog, instead of appending to it.

    * "git notes copy" without any other argument segfaulted.

    * "git pull" accepted "--dry-run", gave it to underlying "git fetch" but
      ignored the option itself, resulting in a bogus attempt to merge
      unrelated commit.

    * "git rebase" did not faithfully reproduce a malformed author ident, that
      is often seen in a repository converted from foreign SCMs.

    * "git reset --hard" started from a wrong directory and a working tree in
      a nonstandard location is in use got confused.

    * "git send-email" lacked a way to specify the domainname used in the
      EHLO/HELO exchange, causing rejected connection from picky servers.
      It learned --smtp-domain option to solve this issue.

    * "git send-email" did not declare a content-transfer-encoding and
      content-type even when its payload needs to be sent in 8-bit.

    * "git show -C -C" and other corner cases lost diff metainfo output
      in 1.7.0.

    * "git stash" incorrectly lost paths in the working tree that were
      previously removed from the index.

    * "git status" stopped refreshing the index by mistake in 1.7.1.

    * "git status" showed excess "hints" even when advice.statusHints is set to false.

    And other minor fixes and documentation updates.

    ----------------------------------------------------------------

    Changes since v1.7.1 are as follows:

    Alexey Mahotkin (1):
         xdiff/xmerge.c: use memset() instead of explicit for-loop

    Bert Wesarg (1):
         diff: fix coloring of extended diff headers

    Björn Gustavsson (1):
         apply: Allow blank *trailing* context lines to match beyond EOF

    Björn Steinbrink (1):
         diff: Support visibility modifiers in the PHP hunk header regexp

    Bo Yang (1):
         blame-options.txt: Add default value for `-M/-C` options.

    Brandon Casey (1):
         t/t9001: use egrep when regular expressions are involved

    Brian Downing (1):
         unpack-trees: Make index lookahead less pessimal

    Brian Gernhardt (4):
         send-email: Cleanup { style
         send-email: Don't use FQDNs without a '.'
         Document send-email --smtp-domain
         send-email: Cleanup smtp-domain and add config

    Charles Bailey (2):
         stash: Don't overwrite files that have gone from the index
         stash tests: stash can lose data in a file removed from the index

    Chris Webb (1):
         exec_cmd.c: replace hard-coded path list with one from <paths.h>

    Christian Couder (3):
         diff: fix "git show -C -C" output when renaming a binary file
         commit: use value of GIT_REFLOG_ACTION env variable as reflog message
         Documentation: grep: fix asciidoc problem with --

    Clemens Buchacher (7):
         do not overwrite files marked "assume unchanged"
         Documentation: git-add does not update files marked "assume unchanged"
         test get_git_work_tree() return value for NULL
         get_cwd_relative(): do not misinterpret suffix as subdirectory
         setup: document prefix
         quote.c: separate quoting and relative path generation
         ls-files: allow relative pathspec

    Dmitry Potapov (1):
         hash_object: correction for zero length file

    Gary V. Vaughan (1):
         git-compat-util.h: use apparently more common __sgi macro to detect SGI IRIX

    Gerrit Pape (1):
         git-submodule.sh: properly initialize shell variables

    Henrik Grubbström (3):
         attr: Fixed debug output for macro expansion.
         attr: Allow multiple changes to an attribute on the same line.
         attr: Expand macros immediately when encountered.

    Ian McLean (1):
         Fix "Out of memory? mmap failed" for files larger than 4GB on Windows

    Ian Ward Comfort (1):
         rebase -i: Abort cleanly if new base cannot be checked out

    Jakub Narebski (1):
         autoconf: Check if <paths.h> exists and set HAVE_PATHS_H

    Jay Soffian (3):
         commit.txt: clarify how --author argument is used
         am: use get_author_ident_from_commit instead of mailinfo when rebasing
         gitweb/Makefile: fix typo in gitweb.min.css rule

    Jeff King (7):
         handle "git --bare init <dir>" properly
         docs: clarify meaning of -M for git-log
         remove over-eager caching in sha1_file_name
         pull: do nothing on --dry-run
         commit: give advice on empty amend
         Makefile: default pager on AIX to "more"
         notes: check number of parameters to "git notes copy"

    Johannes Sixt (1):
         Thread-safe xmalloc and xrealloc needs a recursive mutex

    Jonathan Nieder (25):
         t7006: guard cleanup with test_expect_success
         t5704 (bundle): add tests for bundle --stdin
         fix "bundle --stdin" segfault
         test-lib: Let tests specify commands to be run at end of test
         commit --amend: cope with missing display name
         Documentation/shortlog: scripted users should not rely on implicit HEAD
         t4201 (shortlog): guard setup with test_expect_success
         t4201 (shortlog): Test output format with multiple authors
         shortlog: Document and test --format option
         test-lib: some shells do not let $? propagate into an eval
         cherry-pick: do not dump core when iconv fails
         Documentation/notes: document format of notes trees
         Documentation/notes: describe content of notes blobs
         Documentation/notes: add configuration section
         Documentation/notes: simplify treatment of default notes ref
         Documentation/log: add a CONFIGURATION section
         Documentation/notes: simplify treatment of default display refs
         Documentation/notes: clean up description of rewriting configuration
         Documentation/notes: nitpicks
         post-receive-email: document command-line mode
         Documentation/checkout: clarify description
         gitignore.5: Clarify matching rules
         rebase -i -p: document shortcomings
         Documentation/checkout: clarify description
         add-interactive: Clarify “remaining hunks in the file”

    Junio C Hamano (10):
         am -3: recover the diagnostic messages for corrupt patches
         clone: quell the progress report from init and report on clone
         t9129: fix UTF-8 locale detection
         common_prefix: simplify and fix scanning for prefixes
         Prepare draft release notes to 1.7.1.1
         Update draft release notes to 1.7.1.1
         tests: remove unnecessary '^' from 'expr' regular expression
         Update draft release notes to 1.7.1.1
         Update draft release notes to 1.7.1.1
         Git 1.7.1.1

    Leif Arne Storset (1):
         Documentation/config.txt: GIT_NOTES_REWRITE_REF overrides notes.rewriteRef

    Marcus Comstedt (1):
         Add "Z" as an alias for the timezone "UTC"

    Markus Heidelberg (4):
         t7508: add test for "git status" refreshing the index
         git status: refresh the index if possible
         t7508: add a test for "git status" in a read-only repository
         Documentation: rebase -i ignores options passed to "git am"

    Michael J Gruber (10):
         index-pack: fix trivial typo in usage string
         t7508: test advice.statusHints
         wt-status: take advice.statusHints seriously
         Documentation: fix minor inconsistency
         Documentation/gitdiffcore: fix order in pickaxe description
         Documentation/SubmittingPatches: clarify GMail section and SMTP
         completion: --set-upstream option for git-branch
         Makefile: reenable install with NO_CURL
         Documentation/config: describe status.submodulesummary
         Documentation: A...B shortcut for checkout and rebase

    Michal Sojka (1):
         test-lib.sh: Add explicit license detail, with change from GPLv2 to GPLv2+.

    Nazri Ramliy (1):
         Documentation/pretty-{formats,options}: better reference for "format:<string>"

    Nicolas Pitre (4):
         Make xmalloc and xrealloc thread-safe
         index-pack: smarter memory usage when resolving deltas
         index-pack: rationalize unpack_entry_data()
         index-pack: smarter memory usage when appending objects

    Pete Harlan (1):
         clone: reword messages to match the end-user perception

    Peter Collingbourne (4):
         Generalise the unlink_or_warn function
         Implement the rmdir_or_warn function
         Introduce remove_or_warn function
         Remove a redundant errno test in a usage of remove_path

    Philippe Bruhat (1):
         Git.pm: better error message

    Ping Yin (1):
         Documentation/git-send-email: Add "Use gmail as the smtp server"

    Ramkumar Ramachandra (1):
         SubmittingPatches: Add new section about what to base work on

    Ramsay Allan Jones (4):
         Makefile: Fix 'clean' target to remove all gitweb build files
         msvc: Fix some "expr evaluates to function" compiler warnings
         msvc: Fix some compiler warnings
         notes: Initialise variable to appease gcc

    René Scharfe (3):
         git diff too slow for a file
         remove ecb parameter from xdi_diff_outf()
         Fix checkout of large files to network shares on Windows XP

    Scott Chacon (1):
         Prompt for a username when an HTTP request 401s

    Shawn O. Pearce (16):
         tag.c: Correct indentation
         tag.h: Remove unused signature field
         tag.c: Refactor parse_tag_buffer to be saner to program
         tag.c: Parse tagger date (if present)
         describe: Break annotated tag ties by tagger date
         http.c: Remove bad free of static block
         t5550-http-fetch: Use subshell for repository operations
         http.c: Tiny refactoring of finish_http_pack_request
         http.c: Drop useless != NULL test in finish_http_pack_request
         http.c: Don't store destination name in request structures
         http.c: Remove unnecessary strdup of sha1_to_hex result
         Introduce close_pack_index to permit replacement
         Extract verify_pack_index for reuse from verify_pack
         Allow parse_pack_index on temporary files
         http-fetch: Use index-pack rather than verify-pack to check packs
         http-fetch: Use temporary files for pack-*.idx until verified

    Sverre Rabbelier (1):
         Gitweb: ignore built file

    Tay Ray Chuan (18):
         t5541-http-push: add test for URLs with trailing slash
         http: make end_url_with_slash() public
         remote-curl: ensure that URLs have a trailing slash
         http.c::new_http_pack_request: do away with the temp variable filename
         t7604-merge-custom-message: shift expected output creation
         t7604-merge-custom-message: show that --log doesn't append to -m
         merge: update comment
         merge: rename variable
         fmt-merge-msg: minor refactor of fmt_merge_msg()
         fmt-merge-msg: refactor merge title formatting
         fmt-merge-msg: add function to append shortlog only
         merge: --log appends shortlog to message if specified
         GIT-VERSION-GEN: restrict tags used
         t7502-commit: fix spelling
         show-branch: use DEFAULT_ABBREV instead of 7
         t7502-commit: add tests for summary output
         t7502-commit: add summary output tests for empty and merge commits
         commit::print_summary(): don't use format_commit_message()

    Thomas Rast (2):
         t/README: document --root option
         send-email: ask about and declare 8bit mails

    Tim Henigan (1):
         Documentation/SubmittingPatches: Fix typo in GMail section

    Tor Arntsen (1):
         Change C99 comments to old-style C comments

    Will Palmer (1):
         pretty: Respect --abbrev option

    Zhang Le (1):
         git-mailinfo documentation: clarify -u/--encoding

    bert Dvornik (1):
         start_command: close cmd->err descriptor when fork/spawn fails

    Ævar Arnfjörð Bjarmason (3):
         Move t6000lib.sh to lib-*
         Turn setup code in t2007-checkout-symlink.sh into a test
         notes: Initialize variable to appease Sun Studio

# See also

-   [Updating to Git 1.7.1.1](/wiki/Updating_to_Git_1.7.1.1)
