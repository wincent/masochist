---
tags: git
---

    A release candidate GIT 1.6.2.rc2 is available at the usual places
    for testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.2.rc2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.2.rc2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.2.rc2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.6.2.rc2-1.fc9.$arch.rpm	(RPM)

    ----------------------------------------------------------------
    GIT v1.6.2 Release Notes (draft)
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


    Updates since v1.6.1
    --------------------

    (subsystems)

    * git-svn updates.

    * gitweb updates, including a new patch view and RSS/Atom feed
     improvements.

    * (contrib/emacs) git.el now has commands for checking out a branch,
     creating a branch, cherry-picking and reverting commits; vc-git.el
     is not shipped with git anymore (it is part of official Emacs).

    (performance)

    * pack-objects autodetects the number of CPUs available and uses threaded
     version.

    (usability, bells and whistles)

    * automatic typo correction works on aliases as well

    * @{-1} is a way to refer to the last branch you were on.  This is
     accepted not only where an object name is expected, but anywhere
     a branch name is expected and acts as if you typed the branch name.
     E.g. "git branch --track mybranch @{-1}", "git merge @{-1}", and
     "git rev-parse --symbolic-full-name @{-1}" would work as expected.

    * When refs/remotes/origin/HEAD points at a remote tracking branch that
     has been pruned away, many git operations issued warning when they
     internally enumerated the refs.  We now warn only when you say "origin"
     to refer to that pruned branch.

    * The location of .mailmap file can be configured, and its file format was
     enhanced to allow mapping an incorrect e-mail field as well.

    * "git add -p" learned 'g'oto action to jump directly to a hunk.

    * "git add -p" learned to find a hunk with given text with '/'.

    * "git add -p" optionally can be told to work with just the command letter
     without Enter.

    * when "git am" stops upon a patch that does not apply, it shows the
     title of the offending patch.

    * "git am --directory=<dir>" and "git am --reject" passes these options
     to underlying "git apply".

    * "git am" learned --ignore-date option.

    * "git blame" aligns author names better when they are spelled in
     non US-ASCII encoding.

    * "git clone" now makes its best effort when cloning from an empty
     repository to set up configuration variables to refer to the remote
     repository.

    * "git checkout -" is a shorthand for "git checkout @{-1}".

    * "git cherry" defaults to whatever the current branch is tracking (if
     exists) when the <upstream> argument is not given.

    * "git cvsserver" can be told not to add extra "via git-CVS emulator" to
     the commit log message it serves via gitcvs.commitmsgannotation
     configuration.

    * "git cvsserver" learned to handle 'noop' command some CVS clients seem
     to expect to work.

    * "git diff" learned a new option --inter-hunk-context to coalesce close
     hunks together and show context between them.

    * The definition of what constitutes a word for "git diff --color-words"
     can be customized via gitattributes, command line or a configuration.

    * "git diff" learned --patience to run "patience diff" algorithm.

    * "git filter-branch" learned --prune-empty option that discards commits
     that do not change the contents.

    * "git fsck" now checks loose objects in alternate object stores, instead
     of misreporting them as missing.

    * "git gc --prune" was resurrected to allow "git gc --no-prune" and
     giving non-default expiration period e.g. "git gc --prune=now".

    * "git grep -w" and "git grep" for fixed strings have been optimized.

    * "git mergetool" learned -y(--no-prompt) option to disable prompting.

    * "git rebase -i" can transplant a history down to root to elsewhere
     with --root option.

    * "git reset --merge" is a new mode that works similar to the way
     "git checkout" switches branches, taking the local changes while
     switching to another commit.

    * "git submodule update" learned --no-fetch option.

    * "git tag" learned --contains that works the same way as the same option
     from "git branch".


    Fixes since v1.6.1
    ------------------

    All of the fixes in v1.6.1.X maintenance series are included in this
    release, unless otherwise noted.

    Here are fixes that this release has, but have not been backported to
    v1.6.1.X series.

    * "git-add sub/file" when sub is a submodule incorrectly added the path to
     the superproject.

    * "git bundle" did not exclude annotated tags even when a range given
     from the command line wanted to.

    * "git filter-branch" unnecessarily refused to work when you had
     checked out a different commit from what is recorded in the superproject
     index in a submodule.

    * "git filter-branch" incorrectly tried to update a nonexistent work tree
     at the end when it is run in a bare repository.

    * "git gc" did not work if your repository was created with an ancient git
     and never had any pack files in it before.

    * "git mergetool" used to ignore autocrlf and other attributes
     based content rewriting.

    * branch switching and merges had a silly bug that did not validate
     the correct directory when making sure an existing subdirectory is
     clean.

    * "git -p cmd" when cmd is not a built-in one left the display in funny state
     when killed in the middle.

    --
    exec >/var/tmp/1
    O=v1.6.2-rc2
    echo O=$(git describe master)
    git shortlog --no-merges $O..master ^maint


    ----------------------------------------------------------------

    Changes since v1.6.2-rc1 are as follows:

    Abhijit Menon-Sen (1):
         Convert git-* invocations to "git *" in the svnimport example.

    Alexandre Julliard (3):
         git.el: Make sure that file lists are sorted as they are created.
         git.el: Improve the confirmation message on remove and revert.
         Add a README in the contrib/emacs directory.

    Allan Caffee (1):
         trace: Fixed a minor typo in an error message.

    Ben Walton (1):
         git-svn fix to avoid using strftime %z

    Brian Gernhardt (1):
         git-svn: Create leading directories in create-ignore

    Christian Couder (1):
         README: fix path to "gitcvs-migration.txt" and be more consistent

    Eric Wong (1):
         git-svn: fix delete+add branch tracking with empty files

    Felipe Contreras (2):
         git add: trivial codestyle cleanup
         sha1_file.c: fix typo

    Gerrit Pape (3):
         Documentation/git-push: --all, --mirror, --tags can not be combined
         Install builtins with the user and group of the installing personality
         git-quiltimport: preserve standard input to be able to read user input

    Giuseppe Bilotta (1):
         gitweb: fix wrong base URL when non-root DirectoryIndex

    Jay Soffian (2):
         disallow providing multiple upstream branches to rebase, pull --rebase
         Allow HTTP tests to run on Darwin

    Johannes Schindelin (2):
         Introduce the function strip_path_suffix()
         system_path(): simplify using strip_path_suffix(), and add suffix "git"

    Johannes Sixt (1):
         gitattributes.txt: Path matching rules are explained in gitignore.txt

    Junio C Hamano (4):
         git-svn: fix parsing of timestamp obtained from svn
         tests: fix "export var=val"
         Make sure objects/pack exists before creating a new pack
         GIT 1.6.2-rc2

    Lars Noschinski (1):
         filter-branch -d: Export GIT_DIR earlier

    Linus Torvalds (1):
         Support 'raw' date format

    Marc Branchaud (1):
         Docs: Expand explanation of the use of + in git push refspecs.

    Marcel M. Cary (2):
         gitweb: Fix warnings with override permitted but no repo override
         gitweb: Hyperlink multiple git hashes on the same commit message line

    Matthieu Moy (2):
         Document git blame --reverse.
         More friendly message when locking the index fails.

    Michael J Gruber (1):
         Fix typo in contrib/examples/git-svnimport.txt

    Michael Spang (1):
         Skip timestamp differences for diff --no-index

    Pete Wyckoff (1):
         git-p4: avoid syncing duplicate changes

    Peter Oberndorfer (1):
         git-svn: read the dcommit url from the config file on a per remote basis

    SZEDER Gábor (2):
         bash: add missing 'git merge' options
         bash: update 'git svn' options

    Thomas Rast (2):
         bash completion: refactor common log, shortlog and gitk options
         bash completion: only show 'log --merge' if merging

    Todd Zullinger (1):
         Documentation: Note file formats send-email accepts

# See also

-   [Updating to Git 1.6.2.rc2 on Mac OS X Leopard 10.5.6](/wiki/Updating_to_Git_1.6.2.rc2_on_Mac_OS_X_Leopard_10.5.6)

