---
tags: git wiki
---

From the official announcement posted to the [Git mailing list](/wiki/Git_mailing_list):

    A release candidate Git 1.6.6.rc4 is available at the usual places
    for final testing:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.6.rc4.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.6.rc4.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.6.rc4.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     testing/git-*-1.6.6.rc4-1.fc11.$arch.rpm	(RPM)

    Hopefully I'll do the final this Wednesday to make 1.6.6 a holiday gift to
    everybody.

    I would very much prefer news outlets like kernelpodcast.org and lwn.net
    _not_ to say "... is released; it comes with many _fixes_".  Fixes to
    released versions have indeed been included in the 'master' branch, but
    they all appear in the maintenance release.  The main _point_ of using a
    new feature release like 1.6.6 is to get new _features_, so it is more
    appropriate to say "it comes with many new features."

    Thanks for all contributors who have worked hard to whip this release into
    shape.

    ----------------------------------------------------------------

    Changes since v1.6.6-rc3 are as follows:

    Björn Gustavsson (1):
         rebase -i: abort cleanly if the editor fails to launch

    Eric Wong (2):
         git svn: make empty directory creation gc-aware
         t9146: use 'svn_cmd' wrapper

    Junio C Hamano (1):
         Git 1.6.6-rc4

    Stephen Boyd (2):
         api-strbuf.txt: fix typos and document launch_editor()
         technical-docs: document hash API
