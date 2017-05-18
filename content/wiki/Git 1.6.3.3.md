---
tags: git wiki
cache_breaker: 1
---

From the official announcement posted to the [Git](/wiki/Git) mailing list:

    The latest maintenance release, GIT 1.6.3.3, is available at the usual
    places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.3.3.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.3.3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.3.3.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.3.3-1.fc9.$arch.rpm	(RPM)

    GIT v1.6.3.3 Release Notes
    ==========================

    Fixes since v1.6.3.2
    --------------------

    * "git archive" running on Cygwin can get stuck in an infinite loop.

    * "git daemon" did not correctly parse the initial line that carries
      virtual host request information.

    * "git diff --textconv" leaked memory badly when the textconv filter
      errored out.

    * The built-in regular expressions to pick function names to put on
      hunk header lines for java and objc were very inefficiently written.

    * in certain error situations git-fetch (and git-clone) on Windows didn't
      detect connection abort and ended up waiting indefinitely.

    * import-tars script (in contrib) did not import symbolic links correctly.

    * http.c used CURLOPT_SSLKEY even on libcURL version 7.9.2, even though
      it was only available starting 7.9.3.

    * low-level filelevel merge driver used return value from strdup()
      without checking if we ran out of memory.

    * "git rebase -i" left stray closing parenthesis in its reflog message.

    * "git remote show" did not show all the URLs associated with the named
      remote, even though "git remote -v" did.  Made them consistent by
      making the former show all URLs.

    * "whitespace" attribute that is set was meant to detect all errors known
      to git, but it told git to ignore trailing carriage-returns.

    Includes other documentation fixes.

    ----------------------------------------------------------------

    Changes since v1.6.3.2 are as follows:

    Anders Kaseorg (1):
         for-each-ref: Do not lookup objects when they will not be used

    Clemens Buchacher (1):
         refuse to merge during a merge

    Jim Meyering (1):
         use xstrdup, not strdup in ll-merge.c

    Johannes Schindelin (1):
         import-tars: support symlinks

    Johannes Sixt (2):
         fetch-pack: close output channel after sideband demultiplexer terminates
         diff.c: plug a memory leak in an error path

    Junio C Hamano (3):
         t3505: fix abuse of test_expect_code
         attribute: whitespace set to true detects all errors known to git
         GIT 1.6.3.3

    Linus Torvalds (1):
         Fix big left-shifts of unsigned char

    Marco Nelissen (1):
         fix handling of iconv configuration options

    Mark Lodato (1):
         http.c: fix compiling with libcurl 7.9.2

    Michael J Gruber (1):
         builtin-remote: Make "remote show" display all urls

    Miklos Vajna (1):
         git-svn documentation: fix typo in 'rebase vs. pull/merge' section

    Nanako Shiraishi (1):
         .gitattributes: CR at the end of the line is an error

    Paolo Bonzini (2):
         Documentation: git-send-mail can take rev-list arg to drive format-patch
         avoid exponential regex match for java and objc function names

    René Scharfe (1):
         upload-archive: fix infinite loop on Cygwin

    Shawn O. Pearce (1):
         daemon: Strictly parse the "extra arg" part of the command

    Stephen Boyd (3):
         git-rerere.txt: grammatical fixups and cleanups
         pull, rebase: simplify to use die()
         git-show-ref.txt: remove word and make consistent
    v
    Tay Ray Chuan (1):
         http*: cleanup slot->local after fclose

    Thomas Rast (1):
         Documentation: refer to gitworkflows(7) from tutorial and git(1)

    Uwe Kleine-König (1):
         rebase--interactive: remote stray closing parenthesis

# See also

-   [Updating to Git 1.6.3.3](/wiki/Updating_to_Git_1.6.3.3)
