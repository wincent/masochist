---
tags: git
---

From the official release announcement posted to the [Git](/wiki/Git) mailing list:

    A release candidate GIT 1.6.3.rc3 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.3.rc3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.3.rc3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.3.rc3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.6.3.rc3-1.fc9.$arch.rpm	(RPM)

    I did cut a 1.6.3-rc2 earlier but it went unannounced.  Hopefully this one
    will be very close to the final.

    GIT v1.6.3 Release Notes (draft)
    ================================

    With the next major release, "git push" into a branch that is
    currently checked out will be refused by default.  You can choose
    what should happen upon such a push by setting the configuration
    variable receive.denyCurrentBranch in the receiving repository.

    To ease the transition plan, the receiving repository of such a
    push running this release will issue a big warning when the
    configuration variable is missing.  Please refer to:

     http://git.or.cz/gitwiki/GitFaq#non-bare
     http://thread.gmane.org/gmane.comp.version-control.git/107758/focus=108007

    for more details on the reason why this change is needed and the
    transition plan.

    For a similar reason, "git push $there :$killed" to delete the branch
    $killed in a remote repository $there, if $killed branch is the current
    branch pointed at by its HEAD, gets a large warning.  You can choose what
    should happen upon such a push by setting the configuration variable
    receive.denyDeleteCurrent in the receiving repository.

    When the user does not tell "git push" what to push, it has always
    pushed matching refs.  For some people it is unexpected, and a new
    configuration variable push.default has been introduced to allow
    changing a different default behaviour.  To advertise the new feature,
    a big warning is issued if this is not configured and a git push without
    arguments is attempted.


    Updates since v1.6.2
    --------------------

    (subsystems)

    * various git-svn updates.

    (performance)

    * many uses of lstat(2) in the codepath for "git checkout" have been
     optimized out.

    (usability, bells and whistles)

    * Boolean configuration variable yes/no can be written as on/off.

    * rsync:/path/to/repo can be used to run git over rsync for local
     repositories.  It may not be useful in practice; meant primarily for
     testing.

    * http transport learned to prompt and use password when fetching from or
     pushing to http://user@host.xz/ URL.

    * (msysgit) progress output that is sent over the sideband protocol can
     be handled appropriately in Windows console.

    * "--pretty=<style>" option to the log family of commands can now be
     spelled as "--format=<style>".  In addition, --format=%formatstring
     is a short-hand for --pretty=tformat:%formatstring.

    * "--oneline" is a synonym for "--pretty=oneline --abbrev-commit".

    * "--graph" to the "git log" family can draw the commit ancestry graph
     in colors.

    * If you realize that you botched the patch when you are editing hunks
     with the 'edit' action in git-add -i/-p, you can abort the editor to
     tell git not to apply it.

    * @{-1} is a new way to refer to the last branch you were on introduced in
     1.6.2, but the initial implementation did not teach this to a few
     commands.  Now the syntax works with "branch -m @{-1} newname".

    * git-archive learned --output=<file> option.

    * git-archive takes attributes from the tree being archived; strictly
     speaking, this is an incompatible behaviour change, but is a good one.
     Use --worktree-attributes option to allow it to read attributes from
     the work tree as before (deprecated git-tar tree command always reads
     attributes from the work tree).

    * git-bisect shows not just the number of remaining commits whose goodness
     is unknown, but also shows the estimated number of remaining rounds.

    * You can give --date=<format> option to git-blame.

    * "git-branch -r" shows HEAD symref that points at a remote branch in
     interest of each tracked remote repository.

    * "git-branch -v -v" is a new way to get list of names for branches and the
     "upstream" branch for them.

    * git-config learned -e option to open an editor to edit the config file
     directly.

    * git-clone runs post-checkout hook when run without --no-checkout.

    * git-difftool is now part of the officially supported command, primarily
     maintained by David Aguilar.

    * git-for-each-ref learned a new "upstream" token.

    * git-format-patch can be told to use attachment with a new configuration,
     format.attach.

    * git-format-patch can be told to produce deep or shallow message threads.

    * git-format-patch can be told to always add sign-off with a configuration
     variable.

    * git-format-patch learned format.headers configuration to add extra
     header fields to the output.  This behaviour is similar to the existing
     --add-header=<header> option of the command.

    * git-format-patch gives human readable names to the attached files, when
     told to send patches as attachments.

    * git-grep learned to highlight the found substrings in color.

    * git-imap-send learned to work around Thunderbird's inability to easily
     disable format=flowed with a new configuration, imap.preformattedHTML.

    * git-rebase can be told to rebase the series even if your branch is a
     descendant of the commit you are rebasing onto with --force-rebase
     option.

    * git-rebase can be told to report diffstat with the --stat option.

    * Output from git-remote command has been vastly improved.

    * "git remote update --prune $remote" updates from the named remote and
     then prunes stale tracking branches.

    * git-send-email learned --confirm option to review the Cc: list before
     sending the messages out.

    (developers)

    * Test scripts can be run under valgrind.

    * Test scripts can be run with installed git.

    * Makefile learned 'coverage' option to run the test suites with
     coverage tracking enabled.

    * Building the manpages with docbook-xsl between 1.69.1 and 1.71.1 now
     requires setting DOCBOOK_SUPPRESS_SP to work around a docbook-xsl bug.
     This workaround used to be enabled by default, but causes problems
     with newer versions of docbook-xsl.  In addition, there are a few more
     knobs you can tweak to work around issues with various versions of the
     docbook-xsl package.  See comments in Documentation/Makefile for details.

    * Support for building and testing a subset of git on a system without a
     working perl has been improved.


    Fixes since v1.6.2
    ------------------

    All of the fixes in v1.6.2.X maintenance series are included in this
    release, unless otherwise noted.

    Here are fixes that this release has, but have not been backported to
    v1.6.2.X series.

    * "git-apply" rejected a patch that swaps two files (i.e. renames A to B
     and B to A at the same time).  May need to be backported by cherry
     picking d8c81df and then 7fac0ee).

    * The initial checkout did not read the attributes from the .gitattribute
     file that is being checked out.

    * git-gc spent excessive amount of time to decide if an object appears
     in a locally existing pack (if needed, backport by merging 69e020a).

    ---
    exec >/var/tmp/1
    O=v1.6.3-rc2
    echo O=$(git describe master)
    git shortlog --no-merges $O..master ^maint


    ----------------------------------------------------------------

    Changes since v1.6.3-rc1 are as follows:

    Alex Riesen (2):
         Wait for git diff to finish in git difftool
         Explain seemingly pointless use of system in difftool

    Allan Caffee (3):
         t4202-log: extend test coverage of graphing
         graph API: fix extra space during pre_commit_line state
         graph API: fix a bug in the rendering of octopus merges

    Ben Jackson (1):
         Work around ash "alternate value" expansion bug

    Benjamin Kramer (1):
         connect: replace inet_ntop with getnameinfo

    Bill Pemberton (1):
         Add parsing of elm aliases to git-send-email

    Brandon Casey (2):
         t9001: use older Getopt::Long boolean prefix '--no' rather than '--no-'
         t7700-repack: repack -a now works properly, expect success from test

    Dan Loewenherz (1):
         Convert to use quiet option when available

    Erik Faye-Lund (4):
         test-suite: adding a test for fast-export with tag variants
         builtin-fast-export.c: turn error into warning
         builtin-fast-export.c: fix crash on tagged trees
         builtin-fast-export.c: handle nested tags

    Frank Lichtenheld (1):
         gitcvs-migration: Link to git-cvsimport documentation

    Holger Weiß (1):
         gitweb: Fix snapshots requested via PATH_INFO

    Jeff King (2):
         add-interactive: refactor mode hunk handling
         t7800: respect NO_PERL

    Johan Herland (1):
         Update docs on behaviour of 'core.sharedRepository' and 'git init --shared'

    Johannes Schindelin (2):
         Fix off-by-one in read_tree_recursive
         Add an option not to use link(src, dest) && unlink(src) when that is unreliable

    Johannes Sixt (4):
         Windows: Work around intermittent failures in mingw_rename
         Windows: Skip fstat/lstat optimization in write_entry()
         builtin-help: silently tolerate unknown keys
         remote.c: do not trigger remote.<name>.<var> codepath for two-level names

    Junio C Hamano (8):
         GIT 1.6.2.4
         read-tree A B: do not corrupt cache-tree
         Move prime_cache_tree() to cache-tree.c
         read-tree -m A B: prime cache-tree from the switched-to tree
         checkout branch: prime cache-tree fully
         Revert "stat_tracking_info(): only count real commits"
         Makefile: ignore perl/ subdirectory under NO_PERL
         GIT 1.6.3-rc2

    Junio Hamano (1):
         Speed up reflog pruning of unreachable commits

    Linus Torvalds (2):
         Clean up reflog unreachability pruning decision
         t4202: fix typo

    Markus Heidelberg (1):
         grep: don't support "grep.color"-like config options

    Matthieu Moy (3):
         git add -p: new "quit" command at the prompt.
         Update git-add.txt according to the new possibilities of 'git add -p'.
         clone: add test for push on an empty clone.

    Michael J Gruber (2):
         test-lib.sh: Help test_create_repo() find the templates dir
         Fix more typos/spelling in comments

    Michał Kiedrowicz (3):
         tests: test applying criss-cross rename patch
         builtin-apply: keep information about files to be deleted
         tests: make test-apply-criss-cross-rename more robust

    Mike Ralphson (3):
         builtin-remote: fix typo in option description
         Documentation: fix typos / spelling mistakes
         Fix typos / spelling in comments

    Nguyễn Thái Ngọc Duy (1):
         Makefile: remove {fetch,send}-pack from PROGRAMS as they are builtins

    Nicolas Pitre (1):
         progress bar: round to the nearest instead of truncating down

    Sitaram Chamarty (1):
         Remove obsolete bug warning in man git-update-server-info

    Stephen Boyd (8):
         test-genrandom: Add newline to usage string
         config.txt: add missing format.{subjectprefix,cc,attach} variables
         Documentation: use lowercase for shallow and deep threading
         git-show-branch.txt: cleanup example description
         git-format-patch.txt: general rewordings and cleanups
         config.txt: add missing 'the's and make words plural
         config.txt: clarify sentences in the configuration and syntax sections
         config.txt: Make configuration paragraph more consistent

    Wesley J. Landaker (4):
         Documentation: git-svn: fix spurious bolding that mangles the output
         Documentation: git-svn: fix a grammatical error without awkwardness
         Documentation: git-clean: fix minor grammatical errors
         Documentation: git-clean: make description more readable

    Wincent Colaiuta (1):
         git add -p: add missing "q" to patch prompt
