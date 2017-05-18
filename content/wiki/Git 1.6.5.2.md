---
tags: git wiki
cache_breaker: 1
---

The latest maintenance release GIT 1.6.5.2 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.5.2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.5.2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.5.2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.5.2-1.fc9.$arch.rpm	(RPM)

    GIT v1.6.5.2 Release Notes
    ==========================

    Fixes since v1.6.5.1
    --------------------

    * Installation of templates triggered a bug in busybox when using tar
      implementation from it.

    * "git add -i" incorrectly ignored paths that are already in the index
      if they matched .gitignore patterns.

    * "git describe --always" should have produced some output even there
      were no tags in the repository, but it didn't.

    * "git ls-files" when showing tracked files incorrectly paid attention
      to the exclude patterns.

    Other minor documentation updates are included.

    ----------------------------------------------------------------

    Changes since v1.6.5.1 are as follows:

    Andreas Schwab (1):
         Work around option parsing bug in the busybox tar implementation

    Carlos R. Mafra (1):
         Makefile: clean block-sha1/ directory instead of mozilla-sha1/

    Jeff King (2):
         ls-files: excludes should not impact tracked files
         document push's new quiet option

    Joe Perches (1):
         git-send-email.perl: fold multiple entry "Cc:" and multiple single line "RCPT TO:"s

    Johannes Sixt (2):
         Remove a left-over file from t/t5100
         Mark files in t/t5100 as UTF-8

    Jonathan Nieder (1):
         Documentation: describe check-ref-format --branch

    Junio C Hamano (4):
         Fix incorrect error check while reading deflated pack data
         Do not fail "describe --always" in a tag-less repository
         Fix list of released versions in the toc document
         GIT 1.6.5.2

    Markus Heidelberg (1):
         t7800-difftool: fix the effectless GIT_DIFFTOOL_PROMPT test

    Matt Kraai (1):
         Documentation/git-gc.txt: change "references" to "reference"

    Nanako Shiraishi (2):
         git push: remove incomplete options list from help text
         git push: say that --tag can't be used with --all or --mirror in help text

    Nasser Grainawi (1):
         Document `delta` attribute in "git help attributes".

    Pauli Virtanen (1):
         git-add--interactive: never skip files included in index

# See also

-   [Updating to Git 1.6.5.2](/wiki/Updating_to_Git_1.6.5.2)
