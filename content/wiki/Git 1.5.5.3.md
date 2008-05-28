---
tags: git
---

## Official release announcement

    The latest maintenance release GIT 1.5.5.3 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.5.5.3.tar.{gz,bz2}			(tarball)
     git-htmldocs-1.5.5.3.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.5.5.3.tar.{gz,bz2}		(preformatted docs)
     RPMS/$arch/git-*-1.5.5.3-1.$arch.rpm	(RPM)

    This one is much smaller than 1.5.5.2, primarily to push out a few fixes
    to send-email and bisect that have already been in 'master' for a while.

    ----------------------------------------------------------------

    Changes since v1.5.5.2 are as follows:

    Christian Couder (1):
         bisect: print an error message when "git rev-list --bisect-vars" fails

    Gerrit Pape (3):
         git-bisect.sh: don't accidentally override existing branch "bisect"
         Documentation/git-bundle.txt: fix synopsis
         commit --interactive: properly update the index before commiting

    Horst H. von Brand (1):
         Fix recipient santitization

    Jeff King (2):
         send-email: specify content-type of --compose body
         send-email: rfc2047-quote subject lines with non-ascii characters

    Johannes Sixt (1):
         Revert "filter-branch: subdirectory filter needs --full-history"

    Junio C Hamano (3):
         Release Notes for 1.5.5.2
         show-branch --current: do not barf on detached HEAD
         GIT 1.5.5.3

    Lea Wiemann (1):
         gitweb: only display "next" links in logs if there is a next page

    Michele Ballabio (1):
         Documentation: fix graph in git-rev-parse.txt

    Pieter de Bie (1):
         builtin-fast-export: Only output a single parent per line

## See also

-   [Upgrading to Git 1.5.5.3](/wiki/Upgrading_to_Git_1.5.5.3)

