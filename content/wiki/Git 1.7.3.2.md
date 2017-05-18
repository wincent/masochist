---
tags: git wiki
---

From the official release announcement to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.3.2 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.3.2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.3.2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.3.2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.3.2-1.fc11.$arch.rpm	(RPM)

    This is primarily to push out many documentation fixes accumulated since
    the 1.7.3.1 release.

    ----------------------------------------------------------------

    Changes since v1.7.3.1 are as follows:

    Andreas Gruenbacher (1):
         Clarify and extend the "git diff" format documentation

    Antonio Ospite (1):
         t/t9001-send-email.sh: fix stderr redirection in 'Invalid In-Reply-To'

    Bert Wesarg (1):
         Documentation: update-index: -z applies also to --index-info

    Brandon Casey (1):
         diffcore-pickaxe.c: remove unnecessary curly braces

    Cliff Frey (1):
         documentation: git-config minor cleanups

    Elijah Newren (1):
         t3020 (ls-files-error-unmatch): remove stray '1' from end of file

    Eric Wong (1):
         Documentation/git-svn: discourage "noMetadata"

    Erik Faye-Lund (1):
         do not depend on signed integer overflow

    Johannes Schindelin (2):
         Make sure that git_getpass() never returns NULL
         Fix typo in pack-objects' usage

    Jon Seymour (1):
         stash: simplify parsing fixes

    Jonathan Nieder (10):
         t0004 (unwritable files): simplify error handling
         environment.c: remove unused variable
         setup: make sure git dir path is in a permanent buffer
         init: plug tiny one-time memory leak
         xdiff: cast arguments for ctype functions to unsigned char
         Documentation: No argument of ALLOC_GROW should have side-effects
         Documentation: gitrevisions is in section 7
         Documentation: diff can compare blobs
         Documentation: expand 'git diff' SEE ALSO section
         Documentation: update implicit "--no-index" behavior in "git diff"

    Junio C Hamano (4):
         MinGW: avoid collisions between "tags" and "TAGS"
         CodingGuidelines: reword parameter expansion section
         shell portability: no "export VAR=VAL"
         Git 1.7.3.2

    Kevin Ballard (1):
         Update test script annotate-tests.sh to handle missing/extra authors

    Kirill Smelkov (1):
         user-manual: be consistent in illustrations to 'git rebase'

    Mathias Lafeldt (1):
         git-svn: fix processing of decorated commit hashes

    Matthieu Moy (1):
         diff: trivial fix for --output file error message

    Michael J Gruber (4):
         remote-helpers: build in platform independent directory
         user-manual: fix anchor name Finding-comments-With-given-Content
         rev-list-options: clarify --parents and --children
         git-show-ref.txt: clarify the pattern matching

    Ramkumar Ramachandra (1):
         SubmittingPatches: Document some extra tags used in commit messages

    René Scharfe (1):
         work around buggy S_ISxxx(m) implementations

    Steven Walter (1):
         git-svn: check_cherry_pick should exclude commits already in our history

    Tony Luck (1):
         Better advice on using topic branches for kernel development

    Uwe Kleine-König (1):
         Documentation/git-clone: describe --mirror more verbosely

    Yann Dirson (1):
         t/t3415: use && where applicable.

    Štěpán Němec (6):
         Use angles for placeholders consistently
         Fix odd markup in --diff-filter documentation
         Use parentheses and `...' where appropriate
         Remove stray quotes in --pretty and --format documentation
         Put a space between `<' and argument in pack-objects usage string
         Fix {update,checkout}-index usage strings
