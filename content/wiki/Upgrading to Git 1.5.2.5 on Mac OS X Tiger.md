---
tags: tiger git updates os.x
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.2.5](/wiki/Git_1.5.2.5) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger), using a local clone of the central [Git](/wiki/Git) repository.

For notes on upgrading to 1.5.2.5 from the tarball, see "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)".

# Updating the local repository

From inside the local repository:

    git pull

## Output

    remote: Generating pack...
    remote: Done counting 2850 objects.
    remote: Result has 2215 objects.
    remote: Deltifying 2215 objects...
    remote:  100% (2215/2215) done
    Indexing 2215 objects...
    remote: Total 2215 (delta 1489), reused 1139 (delta 658)
     100% (2215/2215) done
    Resolving 1489 deltas...
     100% (1489/1489) done
    295 objects were added to complete this thin pack.
    * refs/remotes/origin/html: fast forward to branch 'html' of git://git.kernel.org/pub/scm/git/git
      old..new: 18b6ff3..a638742
    * refs/remotes/origin/maint: fast forward to branch 'maint' of git://git.kernel.org/pub/scm/git/git
      old..new: ffb293b..b13ef49
    * refs/remotes/origin/man: fast forward to branch 'man' of git://git.kernel.org/pub/scm/git/git
      old..new: 03a2059..43023f3
    * refs/remotes/origin/master: fast forward to branch 'master' of git://git.kernel.org/pub/scm/git/git
      old..new: 726f9bc..0058a33
    * refs/remotes/origin/next: fast forward to branch 'next' of git://git.kernel.org/pub/scm/git/git
      old..new: 84b7beb..8e57391
    * refs/remotes/origin/pu: forcing update to non-fast forward branch 'pu' of git://git.kernel.org/pub/scm/git/git
      old...new: e5aad12...8e57391
    * refs/remotes/origin/todo: fast forward to branch 'todo' of git://git.kernel.org/pub/scm/git/git
      old..new: 962753f..cc5e008
    Auto-following refs/tags/gitgui-0.8.0
    Auto-following refs/tags/gitgui-0.8.1
    Auto-following refs/tags/v1.5.2.5
    Auto-following refs/tags/v1.5.3-rc3
    Auto-following refs/tags/v1.5.3-rc4
    Auto-following refs/tags/v1.5.3-rc5
    Auto-following refs/tags/v1.5.3-rc6
    remote: Generating pack...
    remote: Done counting 7 objects.
    remote: Deltifying 7 objects...
    remote:  100% (7/7) done
    remote: Total 7 (delta 0), reused 3 (delta 0)
    Unpacking 7 objects...
     100% (7/7) done
    * refs/tags/gitgui-0.8.0: storing tag 'gitgui-0.8.0' of git://git.kernel.org/pub/scm/git/git
      tag: 37d5426
    * refs/tags/gitgui-0.8.1: storing tag 'gitgui-0.8.1' of git://git.kernel.org/pub/scm/git/git
      tag: 648de15
    * refs/tags/v1.5.2.5: storing tag 'v1.5.2.5' of git://git.kernel.org/pub/scm/git/git
      tag: 43738ab
    * refs/tags/v1.5.3-rc3: storing tag 'v1.5.3-rc3' of git://git.kernel.org/pub/scm/git/git
      tag: c2e35df
    * refs/tags/v1.5.3-rc4: storing tag 'v1.5.3-rc4' of git://git.kernel.org/pub/scm/git/git
      tag: 8953282
    * refs/tags/v1.5.3-rc5: storing tag 'v1.5.3-rc5' of git://git.kernel.org/pub/scm/git/git
      tag: 6c733bf
    * refs/tags/v1.5.3-rc6: storing tag 'v1.5.3-rc6' of git://git.kernel.org/pub/scm/git/git
      tag: c95d8e0
    gitweb/test/Märchen: needs update
    Merge made by recursive.
     .gitignore                                         |    1 +
     Documentation/Makefile                             |   28 +-
     Documentation/RelNotes-1.5.2.5.txt                 |   30 +
     Documentation/RelNotes-1.5.3.txt                   |  136 +++-
     Documentation/asciidoc.conf                        |    6 +
     Documentation/blame-options.txt                    |   20 +-
     Documentation/cmd-list.perl                        |   16 +-
     Documentation/config.txt                           |   43 +-
     Documentation/diff-options.txt                     |   11 +-
     Documentation/docbook.xsl                          |    5 +
     Documentation/fix-texi.perl                        |   15 +
     Documentation/git-add.txt                          |   49 +-
     Documentation/git-apply.txt                        |   14 +
     Documentation/git-archive.txt                      |   15 +-
     Documentation/git-branch.txt                       |    4 +-
     Documentation/git-checkout.txt                     |    2 +-
     Documentation/git-clone.txt                        |   18 +-
     Documentation/git-commit-tree.txt                  |   15 +-
     Documentation/git-commit.txt                       |   46 +-
     Documentation/git-config.txt                       |   43 +-
     Documentation/git-cvsexportcommit.txt              |    2 +-
     Documentation/git-cvsserver.txt                    |    2 +-
     Documentation/git-daemon.txt                       |    6 +
     Documentation/git-diff.txt                         |   29 +-
     Documentation/git-fast-import.txt                  |   92 ++-
     Documentation/git-filter-branch.txt                |   53 +-
     Documentation/git-fmt-merge-msg.txt                |    2 +-
     Documentation/git-format-patch.txt                 |    2 +-
     Documentation/git-fsck.txt                         |    6 +-
     Documentation/git-gui.txt                          |    2 +-
     Documentation/git-http-fetch.txt                   |    2 +-
     Documentation/git-local-fetch.txt                  |    2 +-
     Documentation/git-log.txt                          |    8 +
     Documentation/git-merge.txt                        |   10 +-
     Documentation/git-name-rev.txt                     |    2 +-
     Documentation/git-push.txt                         |    2 +-
     Documentation/git-rebase.txt                       |    2 +-
     Documentation/git-receive-pack.txt                 |    2 +-
     Documentation/git-reflog.txt                       |    5 +-
     Documentation/git-repack.txt                       |    2 +-
     Documentation/git-reset.txt                        |   16 +-
     Documentation/git-rev-list.txt                     |   21 +-
     Documentation/git-rev-parse.txt                    |    7 +-
     Documentation/git-send-email.txt                   |    8 +-
     Documentation/git-stash.txt                        |   19 +-
     Documentation/git-status.txt                       |    7 +
     Documentation/git-stripspace.txt                   |    5 +-
     Documentation/git-svn.txt                          |   63 ++-
     Documentation/git-svnimport.txt                    |    3 +
     Documentation/git-tag.txt                          |    8 +-
     Documentation/git-tar-tree.txt                     |   15 +-
     Documentation/git-verify-tag.txt                   |    4 +-
     Documentation/git.txt                              |   29 +-
     Documentation/gitattributes.txt                    |    8 +-
     Documentation/gitignore.txt                        |   22 +-
     Documentation/hooks.txt                            |    2 +-
     Documentation/install-doc-quick.sh                 |   12 +-
     Documentation/pretty-options.txt                   |    4 +-
     Documentation/tutorial.txt                         |    2 +-
     Documentation/urls.txt                             |   16 +-
     Documentation/user-manual.txt                      |   86 ++-
     INSTALL                                            |   18 +-
     Makefile                                           |   37 +-
     attr.c                                             |  120 +++-
     builtin-add.c                                      |   39 +-
     builtin-apply.c                                    |  113 +++-
     builtin-bundle.c                                   |   97 ++-
     builtin-check-attr.c                               |    5 +
     builtin-config.c                                   |    9 +-
     builtin-diff.c                                     |   15 +
     builtin-fsck.c                                     |   12 +-
     builtin-init-db.c                                  |   48 +-
     builtin-ls-files.c                                 |    8 +-
     builtin-mailinfo.c                                 |   64 ++-
     builtin-pack-objects.c                             |   13 +-
     builtin-read-tree.c                                |   28 +-
     builtin-rev-list.c                                 |    2 +-
     builtin-rev-parse.c                                |    7 +
     builtin-stripspace.c                               |   11 +-
     builtin-symbolic-ref.c                             |    2 -
     builtin-tag.c                                      |  460 ++++++++++++
     builtin-update-index.c                             |   10 +-
     builtin-update-ref.c                               |    2 -
     builtin-verify-tag.c                               |  110 +++
     builtin-write-tree.c                               |    3 +
     builtin.h                                          |    2 +
     cache.h                                            |   17 +-
     commit.c                                           |    5 +-
     config.c                                           |   35 +-
     configure.ac                                       |   14 +
     connect.c                                          |   12 +-
     contrib/completion/git-completion.bash             |  106 +++-
     contrib/emacs/git.el                               |  262 ++++---
     git-tag.sh => contrib/examples/git-tag.sh          |    2 +-
     .../examples/git-verify-tag.sh                     |    0 
     contrib/fast-import/git-p4                         |  292 +++++----
     contrib/hooks/update-paranoid                      |  179 ++++-
     contrib/patches/docbook-xsl-manpages-charmap.patch |   21 +
     contrib/workdir/git-new-workdir                    |   16 +-
     daemon.c                                           |   26 +-
     date.c                                             |    9 +
     diff-delta.c                                       |    2 +-
     diff-lib.c                                         |    8 +-
     diff.c                                             |   59 ++-
     diff.h                                             |    2 +
     dir.c                                              |   43 ++
     dir.h                                              |    3 +
     entry.c                                            |   56 +-
     environment.c                                      |   44 +-
     fast-import.c                                      |  269 ++++++--
     git-add--interactive.perl                          |   19 +-
     git-am.sh                                          |   11 +-
     git-clone.sh                                       |   74 ++-
     git-commit.sh                                      |   70 ++-
     git-compat-util.h                                  |   10 +
     git-cvsexportcommit.perl                           |    5 +
     git-cvsserver.perl                                 |    2 +
     git-filter-branch.sh                               |  182 ++++-
     git-gui/git-gui.sh                                 |  452 +++++++-----
     git-gui/lib/blame.tcl                              |   25 +-
     git-gui/lib/browser.tcl                            |   85 ++-
     git-gui/lib/checkout_op.tcl                        |  101 ++--
     git-gui/lib/choose_rev.tcl                         |  274 +++++++-
     git-gui/lib/commit.tcl                             |   30 +-
     git-gui/lib/database.tcl                           |   27 +
     git-gui/lib/diff.tcl                               |    1 +
     git-gui/lib/encoding.tcl                           |  276 +++++++
     git-gui/lib/error.tcl                              |    7 +-
     git-gui/lib/index.tcl                              |    2 +-
     git-gui/lib/merge.tcl                              |  279 +++-----
     git-gui/lib/remote.tcl                             |    6 +
     git-instaweb.sh                                    |    8 +-
     git-rebase--interactive.sh                         |  132 +++-
     git-send-email.perl                                |  101 ++--
     git-sh-setup.sh                                    |   31 +-
     git-stash.sh                                       |   47 +-
     git-submodule.sh                                   |   10 +-
     git-svn.perl                                       |   77 ++-
     git-svnimport.perl                                 |    2 +-
     git.c                                              |   34 +-
     gitk                                               |  759 +++++++++++++++-----
     gitweb/gitweb.perl                                 |  268 +++++--
     ident.c                                            |    8 +-
     index-pack.c                                       |    2 +-
     lockfile.c                                         |  103 +++-
     log-tree.c                                         |    3 +
     merge-recursive.c                                  |   71 +-
     mktag.c                                            |    2 +-
     pack-write.c                                       |    2 +-
     pager.c                                            |    5 +-
     path-list.c                                        |   14 +-
     path-list.h                                        |    2 +-
     path.c                                             |   89 ++-
     perl/Git.pm                                        |    8 +-
     perl/Makefile.PL                                   |    1 +
     read-cache.c                                       |   37 +-
     reflog-walk.c                                      |    7 +-
     reflog-walk.h                                      |    2 +-
     refs.c                                             |   45 +-
     revision.c                                         |   39 +-
     revision.h                                         |    1 +
     setup.c                                            |  263 +++----
     sha1_file.c                                        |   25 +-
     t/t0000-basic.sh                                   |   16 +
     t/t0020-crlf.sh                                    |   81 +++
     t/t0023-crlf-am.sh                                 |   44 ++
     t/t0030-stripspace.sh                              |    5 +
     t/t1300-repo-config.sh                             |   21 +
     t/t1301-shared-repo.sh                             |   11 +-
     t/t1500-rev-parse.sh                               |   18 +-
     t/t1501-worktree.sh                                |   24 +-
     t/t2050-git-dir-relative.sh                        |   55 ++
     t/t2200-add-update.sh                              |   73 ++-
     t/t3050-subprojects-fetch.sh                       |   52 ++
     t/t3404-rebase-interactive.sh                      |  113 +++-
     t/t3405-rebase-malformed.sh                        |   48 ++
     t/t3700-add.sh                                     |   16 +-
     t/t3902-quoted.sh                                  |    6 +
     t/t3903-stash.sh                                   |    7 +
     t/t5500-fetch-pack.sh                              |    2 +-
     t/t5510-fetch.sh                                   |    8 +
     t/t5700-clone-reference.sh                         |    2 +-
     t/t5701-clone-local.sh                             |   22 +-
     t/t6027-merge-binary.sh                            |   67 ++
     t/t7003-filter-branch.sh                           |   41 +-
     t/t7004-tag.sh                                     |  123 +++-
     t/t7005-editor.sh                                  |   91 +++
     t/t7400-submodule-basic.sh                         |   26 +
     t/t7500-commit.sh                                  |   96 +++
     t/t7500/add-comments                               |    4 +
     t/t7500/add-content                                |    3 +
     t/t7500/add-signed-off                             |    3 +
     t/t7501-commit.sh                                  |  134 ++++
     t/t9116-git-svn-log.sh                             |   48 ++
     t/t9200-git-cvsexportcommit.sh                     |   64 +-
     t/t9300-fast-import.sh                             |  187 +++++-
     t/t9500-gitweb-standalone-no-errors.sh             |   28 +
     t/test-lib.sh                                      |    1 +
     test-absolute-path.c                               |   11 +
     tree.c                                             |   69 ++-
     unpack-file.c                                      |    4 +-
     unpack-trees.c                                     |  162 +++--
     unpack-trees.h                                     |   13 +-
     203 files changed, 7565 insertions(+), 2194 deletions(-)
     create mode 100644 Documentation/RelNotes-1.5.2.5.txt
     create mode 100644 Documentation/docbook.xsl
     create mode 100755 Documentation/fix-texi.perl
     create mode 100644 builtin-tag.c
     create mode 100644 builtin-verify-tag.c
     rename git-tag.sh => contrib/examples/git-tag.sh (98%)
     rename git-verify-tag.sh => contrib/examples/git-verify-tag.sh (100%)
     create mode 100644 contrib/patches/docbook-xsl-manpages-charmap.patch
     create mode 100644 git-gui/lib/encoding.tcl
     create mode 100755 t/t0023-crlf-am.sh
     create mode 100755 t/t2050-git-dir-relative.sh
     create mode 100755 t/t3050-subprojects-fetch.sh
     create mode 100755 t/t3405-rebase-malformed.sh
     create mode 100755 t/t6027-merge-binary.sh
     create mode 100755 t/t7005-editor.sh
     create mode 100755 t/t7500-commit.sh
     create mode 100755 t/t7500/add-comments
     create mode 100755 t/t7500/add-content
     create mode 100755 t/t7500/add-signed-off
     create mode 100644 t/t7501-commit.sh
     create mode 100755 t/t9116-git-svn-log.sh
     create mode 100644 test-absolute-path.c

Note the key line, the commit corresponding to the tag for version 1.5.2.5:

    * refs/tags/v1.5.2.5: storing tag 'v1.5.2.5' of git://git.kernel.org/pub/scm/git/git

# Verification

Now we can check the signature on the tag:

    git tag -v v1.5.2.5

## Output

This fails because of non-portable `sed` behaviour which is [already fixed upstream](http://repo.or.cz/w/git.git?a=commitdiff;h=bfc04bb9b847912ee41a21fc23110962851878b2) and will most likely be made available in the 1.5.3 release:

    object b13ef4916ac5a25cc5897f85ba0b4c5953cff609
    type commit
    tag v1.5.2.5
    tagger Junio C Hamano <gitster@pobox.com> Wed Aug 15 15:01:35 2007 -0700

    GIT 1.5.2.5
    sed: 1: "/-----BEGIN PGP/Q": invalid command code Q
    cat: .git/.tmp-vtag: Bad file descriptor
    gpg: Firmado el Thu Aug 16 00:01:38 2007 CEST usando clave DSA ID F3119B9A
    gpg: Firma INCORRECTA de "Junio C Hamano <junkio@cox.net>"

I could apply [the fix](http://repo.or.cz/w/git.git?a=commitdiff;h=bfc04bb9b847912ee41a21fc23110962851878b2) but I think that for now due to laziness I'll just trust the tag.

# Rebuilding, testing and installing

    # switching working tree to 1.5.2.5
    git checkout v1.5.2.5

    # clean up any cruft that might be lying around
    make clean

    # build
    make prefix=/usr/local all

    # run tests
    make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

# Installing the documentation

This time I didn't bother building the documentation myself -- it just takes too long; instead I just downloaded and installed it:

    # get man pages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.2.5.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.2.5.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.2.5.tar.bz2.sign git-manpages-1.5.2.5.tar.bz2

    # install
    cd /usr/local/man
    sudo tar xjvf full_path_to_manpages_archive/git-manpages-1.5.2.5.tar.bz2
