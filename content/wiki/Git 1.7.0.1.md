---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    The latest maintenance release Git 1.7.0.1 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.7.0.1.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.7.0.1.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.7.0.1.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.7.0.1-1.fc11.$arch.rpm	(RPM)

    Git v1.7.0.1 Release Notes
    ==========================

    Fixes since v1.7.0
    ------------------

    * In a freshly created repository "rev-parse HEAD^0" complained that
      it is dangling symref, even though "rev-parse HEAD" didn't.

    * "git show :no-such-name" tried to access the index without bounds
      check, leading to a potential segfault.

    * Message from "git cherry-pick" was harder to read and use than necessary
      when it stopped due to conflicting changes.

    * We referred to ".git/refs/" throughout the documentation when we
      meant to talk about abstract notion of "ref namespace".  Because
      people's repositories often have packed refs these days, this was
      confusing.

    * "git diff --output=/path/that/cannot/be/written" did not correctly
      error out.

    * "git grep -e -pattern-that-begin-with-dash paths..." could not be
      spelled as "git grep -- -pattern-that-begin-with-dash paths..." which
      would be a GNU way to use "--" as "end of options".

    * "git grep" compiled with threading support tried to access an
      uninitialized mutex on boxes with a single CPU.

    * "git stash pop -q --index" failed because the unnecessary --index
      option was propagated to "git stash drop" that is internally run at the
      end.

    And other minor fixes and documentation updates.

    ----------------------------------------------------------------

    Changes since v1.7.0 are as follows:

    Bert Wesarg (2):
         Documentation: mention conflict marker size argument (%L) for merge driver
         rerere: fix memory leak if rerere images can't be read

    Evan Powers (1):
         git-p4: fix bug in symlink handling

    Jacob Helwig (1):
         Documentation: Fix indentation problem in git-commit(1)

    Jeff King (9):
         accept "git grep -- pattern"
         cherry-pick: rewrap advice message
         cherry-pick: refactor commit parsing code
         cherry-pick: format help message as strbuf
         cherry-pick: show commit name instead of sha1
         cherry-pick: prettify the advice message
         dwim_ref: fix dangling symref warning
         docs: don't talk about $GIT_DIR/refs/ everywhere
         rm: fix bug in recursive subdirectory removal

    Johannes Sixt (1):
         t3301-notes: insert a shbang line in ./fake_editor.sh

    Jonathan Nieder (1):
         am: remove rebase-apply directory before gc

    Junio C Hamano (6):
         Typofixes outside documentation area
         Start 1.7.0 maintenance track
         Fix use of mutex in threaded grep
         Prepare 1.7.0.1 release notes
         Update 1.7.0.1 release notes
         Git 1.7.0.1

    Larry D'Anna (1):
         diff: make sure --output=/bad/path is caught

    Mark Lodato (2):
         grep documentation: clarify what files match
         Remove reference to GREP_COLORS from documentation

    Markus Heidelberg (1):
         sha1_name: fix segfault caused by invalid index access

    Matt Kraai (1):
         commit: quote the user name in the example

    Pete Harlan (1):
         Remove hyphen from "git-command" in two error messages

    René Scharfe (1):
         fix minor memory leak in get_tree_entry()

    Stephen Boyd (1):
         Documentation: describe --thin more accurately

    Thomas Rast (2):
         stash pop: remove 'apply' options during 'drop' invocation
         t1450: fix testcases that were wrongly expecting failure
