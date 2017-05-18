---
tags: git wiki
cache_breaker: 1
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest feature release Git 1.6.6 is available at the usual
    places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.6.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.6.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.6.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.6-1.fc11.$arch.rpm	(RPM)

    Git v1.6.6 Release Notes
    ========================

    Notes on behaviour change
    -------------------------

    * In this release, "git fsck" defaults to "git fsck --full" and
      checks packfiles, and because of this it will take much longer to
      complete than before.  If you prefer a quicker check only on loose
      objects (the old default), you can say "git fsck --no-full".  This
      has been supported by 1.5.4 and newer versions of git, so it is
      safe to write it in your script even if you use slightly older git
      on some of your machines.

    Preparing yourselves for compatibility issues in 1.7.0
    ------------------------------------------------------

    In git 1.7.0, which is planned to be the release after 1.6.6, there will
    be a handful of behaviour changes that will break backward compatibility.

    These changes were discussed long time ago and existing behaviours have
    been identified as more problematic to the userbase than keeping them for
    the sake of backward compatibility.

    When necessary, a transition strategy for existing users has been designed
    not to force them running around setting configuration variables and
    updating their scripts in order to either keep the traditional behaviour
    or adjust to the new behaviour, on the day their sysadmin decides to install
    the new version of git.  When we switched from "git-foo" to "git foo" in
    1.6.0, even though the change had been advertised and the transition
    guide had been provided for a very long time, the users procrastinated
    during the entire transtion period, and ended up panicking on the day
    their sysadmins updated their git installation.  We are trying to avoid
    repeating that unpleasantness in the 1.7.0 release.

    For changes decided to be in 1.7.0, commands that will be affected
    have been much louder to strongly discourage such procrastination, and
    they continue to be in this release.  If you have been using recent
    versions of git, you would have seen warnings issued when you used
    features whose behaviour will change, with a clear instruction on how
    to keep the existing behaviour if you want to.  You hopefully are
    already well prepared.

    Of course, we have also been giving "this and that will change in
    1.7.0; prepare yourselves" warnings in the release notes and
    announcement messages for the past few releases.  Let's see how well
    users will fare this time.

    * "git push" into a branch that is currently checked out (i.e. pointed by
      HEAD in a repository that is not bare) will be refused by default.

      Similarly, "git push $there :$killed" to delete the branch $killed
      in a remote repository $there, when $killed branch is the current
      branch pointed at by its HEAD, will be refused by default.

      Setting the configuration variables receive.denyCurrentBranch and
      receive.denyDeleteCurrent to 'ignore' in the receiving repository
      can be used to override these safety features.  Versions of git
      since 1.6.2 have issued a loud warning when you tried to do these
      operations without setting the configuration, so repositories of
      people who still need to be able to perform such a push should
      already have been future proofed.

      Please refer to:

      http://git.or.cz/gitwiki/GitFaq#non-bare
      http://thread.gmane.org/gmane.comp.version-control.git/107758/focus=108007

      for more details on the reason why this change is needed and the
      transition process that already took place so far.

    * "git send-email" will not make deep threads by default when sending a
      patch series with more than two messages.  All messages will be sent
      as a reply to the first message, i.e. cover letter.  Git 1.6.6 (this
      release) will issue a warning about the upcoming default change, when
      it uses the traditional "deep threading" behaviour as the built-in
      default.  To squelch the warning but still use the "deep threading"
      behaviour, give --chain-reply-to option or set sendemail.chainreplyto
      to true.

      It has been possible to configure send-email to send "shallow thread"
      by setting sendemail.chainreplyto configuration variable to false.
      The only thing 1.7.0 release will do is to change the default when
      you haven't configured that variable.

    * "git status" will not be "git commit --dry-run".  This change does not
      affect you if you run the command without pathspec.

      Nobody sane found the current behaviour of "git status Makefile" useful
      nor meaningful, and it confused users.  "git commit --dry-run" has been
      provided as a way to get the current behaviour of this command since
      1.6.5.

    * "git diff" traditionally treated various "ignore whitespace" options
      only as a way to filter the patch output.  "git diff --exit-code -b"
      exited with non-zero status even if all changes were about changing the
      ammount of whitespace and nothing else.  and "git diff -b" showed the
      "diff --git" header line for such a change without patch text.

      In 1.7.0, the "ignore whitespaces" will affect the semantics of the
      diff operation itself.  A change that does not affect anything but
      whitespaces will be reported with zero exit status when run with
      --exit-code, and there will not be "diff --git" header for such a
      change.


    Updates since v1.6.5
    --------------------

    (subsystems)

    * various gitk updates including use of themed widgets under Tk 8.5,
      Japanese translation, a fix to a bug when running "gui blame" from
      a subdirectory, etc.

    * various git-gui updates including new translations, wm states fixes,
      Tk bug workaround after quitting, improved heuristics to trigger gc,
      etc.

    * various git-svn updates.

    * "git fetch" over http learned a new mode that is different from the
      traditional "dumb commit walker".

    (portability)

    * imap-send can be built on mingw port.

    (performance)

    * "git diff -B" has smaller memory footprint.

    (usability, bells and whistles)

    * The object replace mechanism can be bypassed with --no-replace-objects
      global option given to the "git" program.

    * In configuration files, a few variables that name paths can begin with ~/
      and ~username/ and they are expanded as expected.

    * "git subcmd -h" now shows short usage help for many more subcommands.

    * "git bisect reset" can reset to an arbitrary commit.

    * "git checkout frotz" when there is no local branch "frotz" but there
      is only one remote tracking branch "frotz" is taken as a request to
      start the named branch at the corresponding remote tracking branch.

    * "git commit -c/-C/--amend" can be told with a new "--reset-author" option
      to ignore authorship information in the commit it is taking the message
      from.

    * "git describe" can be told to add "-dirty" suffix with "--dirty" option.

    * "git diff" learned --submodule option to show a list of one-line logs
      instead of differences between the commit object names.

    * "git diff" learned to honor diff.color.func configuration to paint
      function name hint printed on the hunk header "@@ -j,k +l,m @@" line
      in the specified color.

    * "git fetch" learned --all and --multiple options, to run fetch from
      many repositories, and --prune option to remove remote tracking
      branches that went stale.  These make "git remote update" and "git
      remote prune" less necessary (there is no plan to remove "remote
      update" nor "remote prune", though).

    * "git fsck" by default checks the packfiles (i.e. "--full" is the
      default); you can turn it off with "git fsck --no-full".

    * "git grep" can use -F (fixed strings) and -i (ignore case) together.

    * import-tars contributed fast-import frontend learned more types of
      compressed tarballs.

    * "git instaweb" knows how to talk with mod_cgid to apache2.

    * "git log --decorate" shows the location of HEAD as well.

    * "git log" and "git rev-list" learned to take revs and pathspecs from
      the standard input with the new "--stdin" option.

    * "--pretty=format" option to "log" family of commands learned:

      . to wrap text with the "%w()" specifier.
      . to show reflog information with "%g[sdD]" specifier.

    * "git notes" command to annotate existing commits.

    * "git merge" (and "git pull") learned --ff-only option to make it fail
      if the merge does not result in a fast-forward.

    * "git mergetool" learned to use p4merge.

    * "git rebase -i" learned "reword" that acts like "edit" but immediately
      starts an editor to tweak the log message without returning control to
      the shell, which is done by "edit" to give an opportunity to tweak the
      contents.

    * "git send-email" can be told with "--envelope-sender=auto" to use the
      same address as "From:" address as the envelope sender address.

    * "git send-email" will issue a warning when it defaults to the
      --chain-reply-to behaviour without being told by the user and
      instructs to prepare for the change of the default in 1.7.0 release.

    * In "git submodule add <repository> <path>", <path> is now optional and
      inferred from <repository> the same way "git clone <repository>" does.

    * "git svn" learned to read SVN 1.5+ and SVK merge tickets.

    * "git svn" learned to recreate empty directories tracked only by SVN.

    * "gitweb" can optionally render its "blame" output incrementally (this
      requires JavaScript on the client side).

    * Author names shown in gitweb output are links to search commits by the
      author.

    Fixes since v1.6.5
    ------------------

    All of the fixes in v1.6.5.X maintenance series are included in this
    release, unless otherwise noted.


    ----------------------------------------------------------------

    Changes since v1.6.5 are as follows:

    Alex Riesen (1):
         git-gui: Update russian translation

    Alex Vandiver (3):
         git-svn: sort svk merge tickets to account for minimal parents
         git-svn: Set svn.authorsfile to an absolute path when cloning
         git-svn: set svn.authorsfile earlier when cloning

    Alexander Gavrilov (1):
         git-gui: Increase blame viewer usability on MacOS.

    Alexey Borzenkov (1):
         git-gui: store wm state and fix wm geometry

    Anders Kaseorg (1):
         bisect reset: Allow resetting to any commit, not just a branch

    Andreas Schwab (1):
         Work around option parsing bug in the busybox tar implementation

    Andrew Myrick (1):
         git-svn: Remove obsolete MAXPARENT check

    Avery Pennarun (1):
         builtin-merge.c: call exclude_cmds() correctly.

    Ben Walton (2):
         configure: add macro to set arbitrary make variables
         configure: add settings for gitconfig, editor and pager

    Benjamin Kramer (1):
         Explicitly truncate bswap operand to uint32_t

    Bernt Hansen (1):
         gitk: Skip translation of "wrong Tcl version" message

    Bert Wesarg (2):
         Give the hunk comment its own color
         get_ref_states: strdup entries and free util in stale list

    Björn Gustavsson (24):
         Teach 'rebase -i' the command "reword"
         git-clone.txt: Fix grammar and formatting
         bash: complete more options for 'git rebase'
         Teach 'git merge' and 'git pull' the option --ff-only
         Teach the --all option to 'git fetch'
         Teach the --multiple option to 'git fetch'
         Add the configuration option skipFetchAll
         Add missing test for 'git remote update --prune'
         Re-implement 'git remote update' using 'git fetch'
         format-patch: Always generate a patch
         format-patch documentation: Remove diff options that are not useful
         format-patch documentation: Fix formatting
         format-patch: Add "--no-stat" as a synonym for "-p"
         bash: add the merge option --ff-only
         Clarify and correct -z
         apply: apply works outside a repository
         apply: Format all options using back-quotes
         apply: Use the term "working tree" consistently
         Fix truncated usage messages
         User Manual: Write "Git" instead of "GIT"
         Fix over-simplified documentation for 'git log -z'
         gitworkflows: Consistently back-quote git commands
         bash: Support new 'git fetch' options
         rebase -i: abort cleanly if the editor fails to launch

    Björn Steinbrink (2):
         clone: Supply the right commit hash to post-checkout when -b is used
         pre-commit.sample: Diff against the empty tree when HEAD is invalid

    Brandon Casey (2):
         t4201: use ISO8859-1 rather than ISO-8859-1
         t9001: use older Getopt::Long boolean prefix '--no' rather than '--no-'

    Brian Collins (1):
         grep: Allow case insensitive search of fixed-strings

    Brian Gernhardt (1):
         t/gitweb-lib: Split HTTP response with non-GNU sed

    Carlos R. Mafra (1):
         Makefile: clean block-sha1/ directory instead of mozilla-sha1/

    Christian Couder (7):
         git: add --no-replace-objects option to disable replacing
         Documentation: add "Fighting regressions with git bisect" article
         replace: use a GIT_NO_REPLACE_OBJECTS env variable
         Documentation: fix typos and spelling in replace documentation
         Documentation: talk a little bit about GIT_NO_REPLACE_OBJECTS
         bisect: simplify calling visualizer using '--bisect' option
         Documentation: update descriptions of revision options related to '--bisect'

    Clemens Buchacher (4):
         modernize fetch/merge/pull examples
         remote-helpers: return successfully if everything up-to-date
         set httpd port before sourcing lib-httpd
         git-gui: search 4 directories to improve statistic of gc hint

    Dan Zwell (1):
         git-gui: Limit display to a maximum number of files

    Daniel Barkalow (2):
         Require a struct remote in transport_get()
         Allow curl helper to work without a local repository

    David Aguilar (2):
         submodule.c: Squelch a "use before assignment" warning
         help: Do not unnecessarily look for a repository

    David Brown (1):
         commit: More generous accepting of RFC-2822 footer lines.

    David Kågedal (1):
         git-blame.el: Change how blame information is shown.

    David Reiss (1):
         Prevent git blame from segfaulting on a missing author name

    David Soria Parra (1):
         Documentation: Document --branch option in git clone synopsis

    Dmitry V. Levin (1):
         Makefile: add compat/bswap.h to LIB_H

    Eric Wong (13):
         git svn: fix fetch where glob is on the top-level URL
         git svn: read global+system config for clone+init
         git svn: add authorsfile test case for ~/.gitconfig
         git svn: attempt to create empty dirs on clone+rebase
         git svn: always reuse existing remotes on fetch
         git svn: strip leading path when making empty dirs
         git svn: log removals of empty directories
         git svn: make empty directory creation gc-aware
         t9146: use 'svn_cmd' wrapper
         git svn: fix --revision when fetching deleted paths
         update release notes for git svn in 1.6.6
         git svn: lookup new parents correctly from svn:mergeinfo
         git svn: branch/tag commands detect username in URLs

    Erick Mattos (1):
         commit -c/-C/--amend: reset timestamp and authorship to committer with --reset-author

    Erik Faye-Lund (6):
         imap-send: use separate read and write fds
         imap-send: use run-command API for tunneling
         imap-send: fix compilation-error on Windows
         imap-send: build imap-send on Windows
         mingw: wrap SSL_set_(w|r)fd to call _get_osfhandle
         mingw: enable OpenSSL

    Felipe Contreras (5):
         diff.c: stylefix
         Use 'fast-forward' all over the place
         format-patch: fix parsing of "--" on the command line
         format-patch: add test for parsing of "--"
         send-email: automatic envelope sender

    Gerrit Pape (1):
         help -i: properly error out if no info viewer can be found

    Gisle Aas (2):
         More precise description of 'git describe --abbrev'
         Fix documentation grammar typo

    Giuseppe Bilotta (1):
         gitweb: fix esc_param

    Greg Price (2):
         Documentation: undocument gc'd function graph_release()
         git svn: Don't create empty directories whose parents were deleted

    Guillermo S. Romero (1):
         gitk: Add configuration for UI colour scheme

    Heiko Voigt (2):
         git-gui: remove warning when deleting correctly merged remote branch
         git gui: make current branch default in "remote delete branch" merge check

    Horst H. von Brand (1):
         git-pull.sh: Fix call to git-merge for new command format

    Ingmar Vanhassel (1):
         import-tars: Add support for tarballs compressed with lzma, xz

    Jakub Narebski (16):
         gitweb: Add optional "time to generate page" info in footer
         gitweb: Incremental blame (using JavaScript)
         gitweb: Colorize 'blame_incremental' view during processing
         gitweb: Create links leading to 'blame_incremental' using JavaScript
         gitweb: Minify gitweb.js if JSMIN is defined
         gitweb: Add 'show-sizes' feature to show blob sizes in tree view
         gitweb: Do not show 'patch' link for merge commits
         t/gitweb-lib.sh: Split gitweb output into headers and body
         gitweb: Document current snapshot rules via new tests
         gitweb: Refactor 'log' action generation, adding git_log_body()
         gitweb: Refactor common parts of 'log' and 'shortlog' views
         gitweb: Make 'history' view (re)use git_log_generic()
         gitweb.js: Harden setting blamed commit info in incremental blame
         gitweb: Make linking to actions requiring JavaScript a feature
         gitweb: Add link to other blame implementation in blame views
         gitweb: Describe (possible) gitweb.js minification in gitweb/README

    Jan Krüger (2):
         rebase -i: more graceful handling of invalid commands
         pull: clarify advice for the unconfigured error case

    Jari Aalto (3):
         Documentation/fetch-options.txt: order options alphabetically
         Documentation/git-pull.txt: Add subtitles above included option files
         Documentation/merge-options.txt: order options in alphabetical groups

    Jay Soffian (4):
         remote: refactor some logic into get_stale_heads()
         teach warn_dangling_symref to take a FILE argument
         builtin-fetch: add --prune option
         builtin-fetch: add --dry-run option

    Jean Privat (1):
         Teach "git describe" --dirty option

    Jeff King (18):
         ls-files: excludes should not impact tracked files
         document push's new quiet option
         cvsimport: fix relative argument filenames
         imap-send: remove useless uid code
         push: always load default config
         gitignore: root most patterns at the top-level directory
         add-interactive: handle deletion of empty files
         ls-files: unbreak "ls-files -i"
         t915{0,1}: use $TEST_DIRECTORY
         push: fix typo in usage
         format-patch: make "-p" suppress diffstat
         diffcore-break: free filespec data as we go
         diffcore-break: save cnt_data for other phases
         prune-packed: only show progress when stderr is a tty
         rerere: don't segfault on failure to open rr-cache
         reset: improve worktree safety valves
         add-interactive: fix deletion of non-empty files
         ignore unknown color configuration

    Jens Lehmann (7):
         git-gui: display summary when showing diff of a submodule
         git-gui: fix diff for partially staged submodule changes
         git submodule add: make the <path> parameter optional
         git-gui: fix use of uninitialized variable
         add tests for git diff --submodule
         gitk: Fix diffing committed -> staged (typo in diffcmd)
         gitk: Use the --submodule option for displaying diffs when available

    Jimmy Angelakos (1):
         git-gui: Added Greek translation & glossary

    Jindrich Makovicka (1):
         git-gui: suppress RenderBadPicture X error caused by Tk bug

    Joe Perches (1):
         git-send-email.perl: fold multiple entry "Cc:" and multiple single line "RCPT TO:"s

    Johan Herland (10):
         Teach "-m <msg>" and "-F <file>" to "git notes edit"
         fast-import: Add support for importing commit notes
         t3302-notes-index-expensive: Speed up create_repo()
         Add flags to get_commit_notes() to control the format of the note string
         Teach notes code to free its internal data structures on request
         Teach the notes lookup code to parse notes trees with various fanout schemes
         Add selftests verifying that we can parse notes trees with various fanouts
         Refactor notes code to concatenate multiple notes annotating the same object
         Add selftests verifying concatenation of multiple notes for the same commit
         Fix crasher on encountering SHA1-like non-note in notes tree

    Johannes Schindelin (11):
         print_wrapped_text(): allow hard newlines
         Add strbuf_add_wrapped_text() to utf8.[ch]
         Introduce commit notes
         Add a script to edit/inspect notes
         Speed up git notes lookup
         Add an expensive test for git-notes
         Add '%N'-format for pretty-printing commit notes
         Add the --submodule option to the diff option family
         blame: make sure that the last line ends in an LF
         help -a: do not unnecessarily look for a repository
         diff --color-words -U0: fix the location of hunk headers

    Johannes Sixt (7):
         remote-curl: add missing initialization of argv0_path
         Remove a left-over file from t/t5100
         Mark files in t/t5100 as UTF-8
         Windows: use BLK_SHA1 again
         t4014-format-patch: do not assume 'test' is available as non-builtin
         Add a notice that only certain functions can print color escape codes
         help.autocorrect: do not run a command if the command given is junk

    Jonathan Nieder (40):
         Add tests for git check-ref-format
         Documentation: describe check-ref-format --branch
         check-ref-format: simplify --print implementation
         clone: detect extra arguments
         Handle more shell metacharacters in editor names
         Add intermediate build products to .gitignore
         Retire fetch--tool helper to contrib/examples
         Show usage string for 'git grep -h'
         Show usage string for 'git cherry -h'
         Show usage string for 'git commit-tree -h'
         Show usage string for 'git merge-ours -h'
         Show usage string for 'git show-ref -h'
         check-ref-format: update usage string
         merge: do not setup worktree twice
         http-fetch: add missing initialization of argv0_path
         Show usage string for 'git check-ref-format -h'
         Show usage string for 'git fast-import -h'
         Show usage string for 'git get-tar-commit-id -h'
         Show usage string for 'git imap-send -h'
         Show usage string for 'git mailsplit -h'
         Show usage string for 'git merge-one-file -h'
         Show usage string for 'git rev-parse -h'
         Show usage string for 'git show-index -h'
         Show usage string for 'git unpack-file -h'
         Show usage string for 'git stripspace -h'
         Let 'git http-fetch -h' show usage outside any git repository
         Show usage string for 'git http-push -h'
         Let 'git <command> -h' show usage without a git dir
         Introduce usagef() that takes a printf-style format
         merge-{recursive,subtree}: use usagef() to print usage
         diff --no-index: make the usage string less scary
         Do not use VISUAL editor on dumb terminals
         Suppress warnings from "git var -l"
         Teach git var about GIT_EDITOR
         Teach git var about GIT_PAGER
         add -i, send-email, svn, p4, etc: use "git var GIT_EDITOR"
         am -i, git-svn: use "git var GIT_PAGER"
         Provide a build time default-editor setting
         Speed up bash completion loading
         Makefile: do not clean arm directory

    Julian Phillips (4):
         fetch: Speed up fetch by rewriting find_non_local_tags
         remote: Make ref_remove_duplicates faster for large numbers of refs
         fetch: Speed up fetch of large numbers of refs
         remote: fix use-after-free error detected by glibc in ref_remove_duplicates

    Junio C Hamano (86):
         mailinfo: -b option keeps [bracketed] strings that is not a [PATCH] marker
         apply --whitespace=fix: fix handling of blank lines at the eof
         apply --whitespace=fix: detect new blank lines at eof correctly
         apply.c: split check_whitespace() into two
         apply --whitespace=warn/error: diagnose blank at EOF
         apply --whitespace: warn blank but not necessarily empty lines at EOF
         diff.c: the builtin_diff() deals with only two-file comparison
         diff --whitespace=warn/error: obey blank-at-eof
         diff --whitespace=warn/error: fix blank-at-eof check
         diff --color: color blank-at-eof
         core.whitespace: split trailing-space into blank-at-{eol,eof}
         diff --whitespace: fix blank lines at end
         diff.c: shuffling code around
         diff.c: split emit_line() from the first char and the rest of the line
         diff.c: emit_add_line() takes only the rest of the line
         diff -B: colour whitespace errors
         Pretty-format: %[+-]x to tweak inter-item newlines
         diff-lib.c: fix misleading comments on oneway_diff()
         unpack-trees: typofix
         unpack_callback(): use unpack_failed() consistently
         git check-ref-format --print
         info/grafts: allow trailing whitespaces at the end of line
         GIT 1.6.5.1
         Start 1.6.6 cycle
         check_filename(): make verify_filename() callable without dying
         DWIM "git checkout frotz" to "git checkout -b frotz origin/frotz"
         format_commit_message(): fix function signature
         fsck: default to "git fsck --full"
         git checkout --no-guess
         gc --auto --quiet: make the notice a bit less verboase
         receive-pack: run "gc --auto --quiet" and optionally "update-server-info"
         Fix incorrect error check while reading deflated pack data
         Teach --wrap to only indent without wrapping
         Do not fail "describe --always" in a tag-less repository
         Fix list of released versions in the toc document
         GIT 1.6.5.2
         Update draft release notes to 1.6.6
         clone: fix help on options
         Revert "Don't create the $GIT_DIR/branches directory on init"
         diff --color-words: bit of clean-up
         t1200: further modernize test script style
         t1200: prepare for merging with Fast-forward bikeshedding
         builtin-commit.c: fix logic to omit empty line before existing footers
         git-describe.txt: formatting fix
         check-ref-format -h: it does not know the --print option yet
         Provide a build time default-pager setting
         Git 1.6.5.3
         Update draft release notes to 1.6.6
         read_revision_from_stdin(): use strbuf
         Teach --stdin option to "log" family
         setup_revisions(): do not call get_pathspec() too early
         Make --stdin option to "log" family read also pathspecs
         diffcore-rename: reduce memory footprint by freeing blob data early
         Documentation: avoid xmlto input error
         t9001: test --envelope-sender option of send-email
         Git v1.6.6-rc0
         Add trivial tests for --stdin option to log family
         Protect scripted Porcelains from GREP_OPTIONS insanity
         builtin-apply.c: pay attention to -p<n> when determining the name
         Remove dead code from "git am"
         emit_line(): don't emit an empty <SET><RESET> followed by a newline
         Update draft release notes to 1.6.6 before merging topics for -rc1
         git-merge: a deprecation notice of the ancient command line syntax
         Update draft release notes to 1.6.6 before -rc1
         Do not misidentify "git merge foo HEAD" as an old-style invocation
         merge: do not add standard message when message is given with -m option
         Prepare for 1.6.5.4
         Git 1.6.6-rc1
         Documentation/Makefile: allow man.base.url.for.relative.link to be set from Make
         Unconditionally set man.base.url.for.relative.links
         Git 1.6.5.4
         Documentation: xmlto 0.0.18 does not know --stringparam
         Prepare for 1.6.5.5
         Git 1.6.5.5
         Revert recent "git merge <msg> HEAD <commit>..." deprecation
         Update draft release notes to 1.6.6 before -rc2
         Git 1.6.6-rc2
         Remove post-upload-hook
         Fix archive format with -- on the command line
         Git 1.6.5.6
         Update Release Notes for 1.6.6 to remove old bugfixes
         worktree: don't segfault with an absolute pathspec without a work tree
         Git 1.6.5.7
         Git 1.6.6-rc3
         Git 1.6.6-rc4
         Git 1.6.6

    Linus Torvalds (2):
         Add '--bisect' revision machinery argument
         Fix diff -B/--dirstat miscounting of newly added contents

    Lukas Sandström (1):
         git am/mailinfo: Don't look at in-body headers when rebasing

    Marius Storm-Olsen (1):
         MSVC: Enable OpenSSL, and translate -lcrypto

    Mark Lodato (5):
         http-backend: add GIT_PROJECT_ROOT environment var
         http-backend: reword some documentation
         http-backend: use mod_alias instead of mod_rewrite
         http-backend: add example for gitweb on same URL
         http-backend: more explict LocationMatch

    Mark Rada (3):
         gitweb: check given hash before trying to create snapshot
         instaweb: support mod_cgid for apache2
         gitweb: Smarter snapshot names

    Markus Heidelberg (4):
         t7800-difftool: fix the effectless GIT_DIFFTOOL_PROMPT test
         bash completion: difftool accepts the same options as diff
         t4034-diff-words: add a test for word diff without context
         gitk: Fix "git gui blame" invocation when called from top-level directory

    Martin Storsjö (3):
         Disable CURLOPT_NOBODY before enabling CURLOPT_PUT and CURLOPT_POST
         Refactor winsock initialization into a separate function
         Enable support for IPv6 on MinGW

    Matt Kraai (2):
         grep: do not segfault when -f is used
         Documentation/git-gc.txt: change "references" to "reference"

    Matthew Ogilvie (6):
         core.autocrlf documentation: mention the crlf attribute
         cvsserver doc: database generally can not be reproduced consistently
         config documentation: some configs are auto-set by git-init
         t2300: use documented technique to invoke git-sh-setup
         t3409 t4107 t7406 t9150: use dashless commands
         t/README: Document GIT_TEST_INSTALLED and GIT_TEST_EXEC_PATH

    Matthieu Moy (6):
         Expand ~ and ~user in core.excludesfile, commit.template
         expand_user_path: expand ~ to $HOME, not to the actual homedir.
         merge-recursive: point the user to commit when file would be overwritten.
         user-manual: Document that "git merge" doesn't like uncommited changes.
         merge-recursive: make the error-message generation an extern function
         builtin-merge: show user-friendly error messages for fast-forward too.

    Michael J Gruber (2):
         Make t9150 and t9151 test scripts executable
         Documentation: Fix a few i.e./e.g. mix-ups

    Miklos Vajna (1):
         git-stash documentation: mention default options for 'list'

    Mizar (2):
         gitk: Add Japanese translation
         gitk: Update Japanese translation

    Nanako Shiraishi (5):
         git push: remove incomplete options list from help text
         git push: say that --tag can't be used with --all or --mirror in help text
         t1200: fix a timing dependent error
         prepare send-email for smoother change of --chain-reply-to default
         Illustrate "filter" attribute with an example

    Nasser Grainawi (1):
         Document `delta` attribute in "git help attributes".

    Nicolas Pitre (4):
         change throughput display units with fast links
         pack-objects: move thread autodetection closer to relevant code
         give priority to progress messages
         pack-objects: split implications of --all-progress from progress activation

    Pat Thoyts (4):
         gitk: Use themed tk widgets
         gitk: Fix errors in the theme patch
         gitk: Default to the system colours on Windows
         gitk: Fix selection of tags

    Paul Mackerras (5):
         gitk: Restore scrolling position of diff pane on back/forward in history
         gitk: Add a user preference to enable/disable use of themed widgets
         gitk: Show diff of commits at end of compare-commits output
         gitk: Don't compare fake children when comparing commits
         gitk: Improve appearance of radiobuttons and checkbuttons

    Pauli Virtanen (1):
         git-add--interactive: never skip files included in index

    Petr Baudis (1):
         gitweb: Fix blob linenr links in pathinfo mode

    Philippe Bruhat (1):
         Make sure $PERL_PATH is defined when the test suite is run.

    Raman Gupta (1):
         Add branch management for releases to gitworkflows

    Ramsay Allan Jones (5):
         Makefile: merge two Cygwin configuration sections into one
         Makefile: keep MSVC and Cygwin configuration separate
         MSVC: Add support for building with NO_MMAP
         t9700-perl-git.sh: Fix a test failure on Cygwin
         git-count-objects: Fix a disk-space under-estimate on Cygwin

    René Scharfe (9):
         describe: load refnames before calling describe()
         Implement wrap format %w() as if it is a mode switch
         log --format: don't ignore %w() at the start of format string
         grep: unset GREP_OPTIONS before spawning external grep
         strbuf_add_wrapped_text(): factor out strbuf_add_indented_text()
         log --format: document %w
         strbuf_add_wrapped_text(): skip over colour codes
         mergetool--lib: simplify guess_merge_tool()
         archive: clarify description of path parameter

    Robert Zeh (1):
         git svn: add test for a git svn gc followed by a git svn mkdirs

    Robin Rosenberg (1):
         Don't create the $GIT_DIR/branches directory on init

    SZEDER Gábor (2):
         Documentation: add 'git replace' to main git manpage
         bash: update 'git commit' completion

    Sam Vilain (10):
         git-svn: add test data for SVK merge, with script.
         git-svn: allow test setup script to support PERL env. var
         git-svn: convert SVK merge tickets to extra parents
         git-svn: add test data for SVN 1.5+ merge, with script.
         git-svn: convert SVN 1.5+ / svnmerge.py svn:mergeinfo props to parents
         git-svn: expand the svn mergeinfo test suite, highlighting some failures
         git-svn: memoize conversion of SVN merge ticket info to git commit ranges
         git-svn: fix some mistakes with interpreting SVN mergeinfo commit ranges
         git-svn: exclude already merged tips using one rev-list call
         git-svn: detect cherry-picks correctly.

    Scott Chacon (2):
         mergetool--lib: add p4merge as a pre-configured mergetool option
         Update packfile transfer protocol documentation

    Sebastian Schuberth (3):
         Do not try to remove directories when removing old links
         Use faster byte swapping when compiling with MSVC
         Make the MSVC projects use PDB/IDB files named after the project

    Shawn O. Pearce (28):
         git-gui: Ensure submodule path is quoted properly
         sha1_file: Fix infinite loop when pack is corrupted
         pkt-line: Add strbuf based functions
         pkt-line: Make packet_read_line easier to debug
         fetch-pack: Use a strbuf to compose the want list
         Move "get_ack()" back to fetch-pack
         Add multi_ack_detailed capability to fetch-pack/upload-pack
         remote-curl: Refactor walker initialization
         fetch: Allow transport -v -v -v to set verbosity to 3
         remote-helpers: Fetch more than one ref in a batch
         remote-helpers: Support custom transport options
         Move WebDAV HTTP push under remote-curl
         Git-aware CGI to provide dumb HTTP transport
         Add stateless RPC options to upload-pack, receive-pack
         Smart fetch and push over HTTP: server side
         Discover refs via smart HTTP server when available
         Smart push over HTTP: client side
         Smart fetch over HTTP: client side
         Smart HTTP fetch: gzip requests
         http tests: use /dumb/ URL prefix
         test smart http fetch and push
         http-backend: Use http.getanyfile to disable dumb HTTP serving
         http-backend: Test configuration options
         Git-aware CGI to provide dumb HTTP transport
         http-backend: Protect GIT_PROJECT_ROOT from /../ requests
         t5551-http-fetch: Work around some libcurl versions
         t5551-http-fetch: Work around broken Accept header in libcurl
         http-backend: Fix bad treatment of uintmax_t in Content-Length

    Sitaram Chamarty (1):
         gitk: Disable checkout of remote branches

    Stephen Boyd (13):
         rebase -i: fix reword when using a terminal editor
         gitweb: linkify author/committer names with search
         t1402: Make test executable
         t1200: cleanup and modernize test style
         t1200: Make documentation and test agree
         git-add.txt: fix formatting of --patch section
         t3101: test more ls-tree options
         ls-tree: migrate to parse-options
         gitweb.js: fix null object exception in initials calculation
         instaweb: restart server if already running
         gitweb.js: fix padLeftStr() and its usage
         api-strbuf.txt: fix typos and document launch_editor()
         technical-docs: document hash API

    Tarmigan Casebolt (3):
         Check the format of more printf-type functions
         http-backend: Fix access beyond end of string.
         http-backend: Let gcc check the format of more printf-type functions.

    Tay Ray Chuan (3):
         http-push: fix check condition on http.c::finish_http_pack_request()
         t5540-http-push: remove redundant fetches
         remote-curl.c: fix rpc_out()

    Thiago Farina (1):
         Documentation: update pt-BR

    Thomas Rast (15):
         bash completion: complete refs for git-grep
         Let --decorate show HEAD position
         Refactor pretty_print_commit arguments into a struct
         reflog-walk: refactor the branch@{num} formatting
         Introduce new pretty formats %g[sdD] for reflog information
         stash list: use new %g formats instead of sed
         stash list: drop the default limit of 10 stashes
         Quote ' as \(aq in manpages
         describe: when failing, tell the user about options that work
         filter-branch: stop special-casing $filter_subdir argument
         filter-branch: nearest-ancestor rewriting outside subdir filter
         Documentation: clarify 'ours' merge strategy
         rebase docs: clarify --merge and --strategy
         Document git-svn's first-parent rule
         describe: do not use unannotated tag even if exact match

    Tim Henigan (2):
         Update 'git remote update' usage string to match man page.
         git remote: Separate usage strings for subcommands

    Toby Allsopp (1):
         git svn: handle SVN merges from revisions past the tip of the branch

    Todd Zullinger (2):
         Makefile: Ensure rpm packages can be read by older rpm versions
         Documentation: Avoid use of xmlto --stringparam

    Uwe Kleine-König (1):
         shortlog: respect commit encoding

    Vietor Liu (2):
         git-gui: adjust the minimum height of diff pane for shorter screen height
         imap-send.c: fix compiler warnings for OpenSSL 1.0

    Štěpán Němec (1):
         git-update-index.txt: Document the --really-refresh option.

# See also

-   [Updating to Git 1.6.6](/wiki/Updating_to_Git_1.6.6)
