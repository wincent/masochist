---
tags: red.hat git updates wiki
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.2.5](/wiki/Git_1.5.2.5) on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) from the tarball.

For notes on upgrading to 1.5.2.5 from a local clone of the central [Git](/wiki/Git) repository, see "[Upgrading to Git 1.5.2.5 on Mac OS X Tiger](/wiki/Upgrading_to_Git_1.5.2.5_on_Mac_OS_X_Tiger)".

# Downloading

    wget http://kernel.org/pub/software/scm/git/git-1.5.2.5.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-1.5.2.5.tar.bz2.sign

See "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)" for details of the initial set-up I had to do to get [GPG](/wiki/GPG) working nicely on [RHEL](/wiki/RHEL).

To verify the downloaded tarball:

    gpg --verify git-1.5.2.5.tar.bz2.sign git-1.5.2.5.tar.bz2

Output:

    gpg: Signature made Wed 15 Aug 2007 06:07:10 PM CDT using DSA key ID 517D0F0E
    gpg: Good signature from "Linux Kernel Archives Verification Key <ftpadmin@kernel.org>"
    gpg: WARNING: This key is not certified with a trusted signature!
    gpg:          There is no indication that the signature belongs to the owner.
    Primary key fingerprint: C75D C40A 11D7 AF88 9981  ED5B C86B A06A 517D 0F0E

Note that although I don't have a trust path to the kernel key set up (ie. I can't verify that key really belongs to the Linux Kernel Archives) my confidence that the key is legitimate is fairly high for the reasons explained in "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)".

# Building

    # extract
    tar xjvf git-1.5.2.5.tar.bz2
    cd git-1.5.2.5

    # build
    make prefix=/usr/local all

    # text
    make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

    # get man pages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.2.5.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.2.5.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.2.5.tar.bz2.sign git-manpages-1.5.2.5.tar.bz2

    # install
    cd /usr/local/man
    sudo tar xjvf full_path_to_manpages_archive/git-manpages-1.5.2.5.tar.bz2

# Problems

Somewhat alarming was that after all this, the output of `git --version` was:

    git version 1.5.2.4

I ran `sudo make prefix=/usr/local install` again and this time it worked.

# See also

-   Original installation notes: [Installing Git 1.5.2.3 on Red Hat Enterprise Linux](/wiki/Installing_Git_1.5.2.3_on_Red_Hat_Enterprise_Linux)
