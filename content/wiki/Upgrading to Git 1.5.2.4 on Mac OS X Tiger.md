---
tags: tiger git updates macos wiki
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.2.4](/wiki/Git_1.5.2.4) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger), using a local clone of the central [Git](/wiki/Git) repository.

For notes on upgrading to 1.5.2.4 from the tarball, see "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)".

# Updating the local repository

From inside the local repository:

    git pull

## Output

    remote: Generating pack...
    remote: Done counting 65 objects.
    remote: Result has 49 objects.
    remote: Deltifying 49 objects...
    remote:  100% (49/49) done
    remote: Total 49 (delta 32), reused 0 (delta 0)
    Unpacking 49 objects...
     100% (49/49) done
    * refs/remotes/origin/maint: fast forward to branch 'maint' of git://git.kernel.org/pub/scm/git/git
      old..new: 512e44b..ffb293b
    Auto-following refs/tags/gitgui-0.7.5
    Auto-following refs/tags/v1.5.2.4
    remote: Generating pack...
    remote: Done counting 2 objects.
    remote: Deltifying 2 objects...
    remote: /2) done/2) done
    remote: Total 2 (delta 0), reused 0 (delta 0)
    Unpacking 2 objects...
     100% (2/2) done
    * refs/tags/gitgui-0.7.5: storing tag 'gitgui-0.7.5' of git://git.kernel.org/pub/scm/git/git
      tag: 7513f0f
    * refs/tags/v1.5.2.4: storing tag 'v1.5.2.4' of git://git.kernel.org/pub/scm/git/git
      tag: 60efd81
    Already up-to-date.

Note the key line, the commit corresponding to the tag for version 1.5.2.4:

    * refs/tags/v1.5.2.4: storing tag 'v1.5.2.4' of git://git.kernel.org/pub/scm/git/git

# Verification

Now we can check the signature on the tag:

    git tag -v v1.5.2.4

## Output

This fails because of non-portable `sed` behaviour which is [already fixed upstream](http://repo.or.cz/w/git.git?a=commitdiff;h=bfc04bb9b847912ee41a21fc23110962851878b2) and will most likely be made available in the 1.5.3 release:

    object ffb293b63d13b3b06b454a5f9f0ff6802ef15f0d
    type commit
    tag v1.5.2.4
    tagger Junio C Hamano <gitster@pobox.com> Thu Jul 12 12:02:05 2007 -0700

    GIT 1.5.2.4
    sed: 1: "/-----BEGIN PGP/Q": invalid command code Q
    gpg: Firmado el Thu Jul 12 21:02:08 2007 CEST usando clave DSA ID F3119B9A
    gpg: Firma INCORRECTA de "Junio C Hamano <junkio@cox.net>"

I could apply [the fix](http://repo.or.cz/w/git.git?a=commitdiff;h=bfc04bb9b847912ee41a21fc23110962851878b2) but I think that for now due to laziness I'll just blindly trust the tag.

# Rebuilding, testing and installing

    # switching working tree to 1.5.2.4
    git checkout v1.5.2.4

    # clean up any cruft that might be lying around
    make clean

    # build
    make prefix=/usr/local all doc

    # run tests
    make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install install-doc

# Notes

I think with future versions of [Git](/wiki/Git) I won't bother building the documentation myself -- it just takes too long -- and will instead download as I do on my [Red Hat](/wiki/Red_Hat) install (see "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)").

    # get man pages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.2.4.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.2.4.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.2.4.tar.bz2.sign git-manpages-1.5.2.4.tar.bz2

    # install
    cd /usr/local/man
    sudo tar xjvf full_path_to_manpages_archive/git-manpages-1.5.2.4.tar.bz2

Note that in order to verify the signature on the archive I had to paste the appropriate public key into a file, `kernel-key`, and import it into my local keyring on this machine also:

    gpg --import kernel-key

See "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)" for more details.
