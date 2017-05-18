---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    A release candidate GIT 1.6.6.rc1 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.6.rc1.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.6.rc1.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.6.rc1.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.6.6.rc1-1.fc11.$arch.rpm	(RPM)

    Git v1.6.6 Release Notes (draft)
    ================================

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

    When necessary, transition strategy for existing users has been designed
    not to force them running around setting configuration variables and
    updating their scripts in order to either keep the traditional behaviour
    or use the new behaviour on the day their sysadmin decides to install
    the new version of git.  When we switched from "git-foo" to "git foo" in
    1.6.0, even though the change had been advertised and the transition
    guide had been provided for a very long time, the users procrastinated
    during the entire transtion period, and ended up panicking on the day
    their sysadmins updated their git installation.  We tried very hard to
    avoid repeating that unpleasantness.

    For changes decided to be in 1.7.0, we have been much louder to strongly
    discourage such procrastination.  If you have been using recent versions
    of git, you would have already seen warnings issued when you exercised
    features whose behaviour will change, with the instruction on how to
    keep the existing behaviour if you want to.  You hopefully should be
    well prepared already.

    Of course, we have also given "this and that will change in 1.7.0;
    prepare yourselves" warnings in the release notes and announcement
    messages.  Let's see how well users will fare this time.

    * "git push" into a branch that is currently checked out (i.e. pointed by
      HEAD in a repository that is not bare) will be refused by default.

      Similarly, "git push $there :$killed" to delete the branch $killed
      in a remote repository $there, when $killed branch is the current
      branch pointed at by its HEAD, will be refused by default.

      Setting the configuration variables receive.denyCurrentBranch and
      receive.denyDeleteCurrent to 'ignore' in the receiving repository
      can be used to override these safety features.  Versions of git
      since 1.6.2 have issued a loud warning when you tried to do them
      without setting the configuration, so repositories of people who
      still need to be able to perform such a push should already have
      been future proofed.

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

    * various git-gui updates including new translations, wm states, etc.

    * git-svn updates.

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

    * The ancient "git merge <message> HEAD <branch>..." syntax will be
      removed in later versions of git.  A warning is given and tells
      users to use the "git merge -m <message> <branch>..." instead.

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

    * "gitweb" can optionally render its "blame" output incrementally (this
      requires JavaScript on the client side).

    * Author names shown in gitweb output are links to search commits by the
      author.

    Fixes since v1.6.5
    ------------------

    All of the fixes in v1.6.5.X maintenance series are included in this
    release, unless otherwise noted.

    * Enumeration of available merge strategies iterated over the list of
      commands in a wrong way, sometimes producing an incorrect result.
      Will backport by merging ed87465 (builtin-merge.c: call
      exclude_cmds() correctly., 2009-11-25).

    * "git format-patch revisions... -- path" issued an incorrect error
      message that suggested to use "--" on the command line when path
      does not exist in the current work tree (it is a separate matter if
      it makes sense to limit format-patch with pathspecs like that
      without using the --full-diff option).  Will backport by merging
      7e93d3b (format-patch: add test for parsing of "--", 2009-11-26).

    * "git shortlog" did not honor the "encoding" header embedded in the
      commit object like "git log" did.  Will backport by merging 79f7ca0
      (shortlog: respect commit encoding, 2009-11-25).

    ----------------------------------------------------------------

    Changes since v1.6.6-rc0 are as follows:

    Avery Pennarun (1):
         builtin-merge.c: call exclude_cmds() correctly.

    Benjamin Kramer (1):
         Explicitly truncate bswap operand to uint32_t

    Bert Wesarg (2):
         Give the hunk comment its own color
         get_ref_states: strdup entries and free util in stale list

    Björn Gustavsson (11):
         Teach the --all option to 'git fetch'
         Teach the --multiple option to 'git fetch'
         Add the configuration option skipFetchAll
         Add missing test for 'git remote update --prune'
         Re-implement 'git remote update' using 'git fetch'
         Clarify and correct -z
         apply: apply works outside a repository
         apply: Format all options using back-quotes
         apply: Use the term "working tree" consistently
         Fix over-simplified documentation for 'git log -z'
         gitworkflows: Consistently back-quote git commands

    Brian Gernhardt (1):
         t/gitweb-lib: Split HTTP response with non-GNU sed

    Christian Couder (6):
         Documentation: add "Fighting regressions with git bisect" article
         replace: use a GIT_NO_REPLACE_OBJECTS env variable
         Documentation: fix typos and spelling in replace documentation
         Documentation: talk a little bit about GIT_NO_REPLACE_OBJECTS
         bisect: simplify calling visualizer using '--bisect' option
         Documentation: update descriptions of revision options related to '--bisect'

    David Aguilar (1):
         help: Do not unnecessarily look for a repository

    David Soria Parra (1):
         Documentation: Document --branch option in git clone synopsis

    Erick Mattos (1):
         commit -c/-C/--amend: reset timestamp and authorship to committer with --reset-author

    Felipe Contreras (3):
         format-patch: fix parsing of "--" on the command line
         format-patch: add test for parsing of "--"
         send-email: automatic envelope sender

    Horst H. von Brand (1):
         git-pull.sh: Fix call to git-merge for new command format

    Jakub Narebski (10):
         gitweb: Add optional "time to generate page" info in footer
         gitweb: Incremental blame (using JavaScript)
         gitweb: Colorize 'blame_incremental' view during processing
         gitweb: Create links leading to 'blame_incremental' using JavaScript
         gitweb: Minify gitweb.js if JSMIN is defined
         t/gitweb-lib.sh: Split gitweb output into headers and body
         gitweb: Document current snapshot rules via new tests
         gitweb.js: Harden setting blamed commit info in incremental blame
         gitweb: Make linking to actions requiring JavaScript a feature
         gitweb: Add link to other blame implementation in blame views

    Jay Soffian (4):
         remote: refactor some logic into get_stale_heads()
         teach warn_dangling_symref to take a FILE argument
         builtin-fetch: add --prune option
         builtin-fetch: add --dry-run option

    Jeff King (1):
         prune-packed: only show progress when stderr is a tty

    Johannes Sixt (2):
         t4014-format-patch: do not assume 'test' is available as non-builtin
         Add a notice that only certain functions can print color escape codes

    Jonathan Nieder (1):
         Makefile: do not clean arm directory

    Junio C Hamano (19):
         mailinfo: -b option keeps [bracketed] strings that is not a [PATCH] marker
         Pretty-format: %[+-]x to tweak inter-item newlines
         read_revision_from_stdin(): use strbuf
         Teach --stdin option to "log" family
         setup_revisions(): do not call get_pathspec() too early
         Make --stdin option to "log" family read also pathspecs
         t9001: test --envelope-sender option of send-email
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

    Mark Rada (2):
         gitweb: check given hash before trying to create snapshot
         gitweb: Smarter snapshot names

    Martin Storsjö (3):
         Disable CURLOPT_NOBODY before enabling CURLOPT_PUT and CURLOPT_POST
         Refactor winsock initialization into a separate function
         Enable support for IPv6 on MinGW

    Matthew Ogilvie (5):
         cvsserver doc: database generally can not be reproduced consistently
         config documentation: some configs are auto-set by git-init
         t2300: use documented technique to invoke git-sh-setup
         t3409 t4107 t7406 t9150: use dashless commands
         t/README: Document GIT_TEST_INSTALLED and GIT_TEST_EXEC_PATH

    Matthieu Moy (4):
         merge-recursive: point the user to commit when file would be overwritten.
         user-manual: Document that "git merge" doesn't like uncommited changes.
         merge-recursive: make the error-message generation an extern function
         builtin-merge: show user-friendly error messages for fast-forward too.

    Michael J Gruber (1):
         Documentation: Fix a few i.e./e.g. mix-ups

    Nanako Shiraishi (2):
         t1200: fix a timing dependent error
         prepare send-email for smoother change of --chain-reply-to default

    Nicolas Pitre (1):
         pack-objects: split implications of --all-progress from progress activation

    Ramsay Allan Jones (1):
         git-count-objects: Fix a disk-space under-estimate on Cygwin

    René Scharfe (2):
         strbuf_add_wrapped_text(): skip over colour codes
         mergetool--lib: simplify guess_merge_tool()

    Stephen Boyd (3):
         gitweb.js: fix null object exception in initials calculation
         instaweb: restart server if already running
         gitweb.js: fix padLeftStr() and its usage

    Tay Ray Chuan (1):
         remote-curl.c: fix rpc_out()

    Uwe Kleine-König (1):
         shortlog: respect commit encoding
