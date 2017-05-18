---
tags: red.hat git updates wiki
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.3.2](/wiki/Git_1.5.3.2) on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) from the tarball.

For notes on upgrading to 1.5.3.2 from a local clone of the central [Git](/wiki/Git) repository, see "[Upgrading to Git 1.5.3.2 on Mac OS X Tiger](/wiki/Upgrading_to_Git_1.5.3.2_on_Mac_OS_X_Tiger)".

# Downloading

    wget http://kernel.org/pub/software/scm/git/git-1.5.3.2.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-1.5.3.2.tar.bz2.sign

Before verifying the signature some set-up of [GPG](/wiki/GPG) is necessary; see "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)" for more details.

    gpg --verify git-1.5.3.2.tar.bz2.sign git-1.5.3.2.tar.bz2

# Building

    # extract
    tar xjvf git-1.5.3.2.tar.bz2
    cd git-1.5.3.2

    # build
    nice make prefix=/usr/local all

    # text
    nice make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

    # get man pages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.2.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.2.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.3.2.tar.bz2.sign git-manpages-1.5.3.2.tar.bz2

    # install
    cd /usr/local/man/
    sudo tar xjvf full_path_to_manpages_archive/git-manpages-1.5.3.2.tar.bz2

# Updating [gitweb](/wiki/gitweb)

    # from top-level of Git source tree
    make clean
    make prefix=/usr/local \
         GITWEB_PROJECTROOT=/pub/git/path_to_public_repos \
         GITWEB_LIST=/pub/git/conf/gitweb-projects \
         GITWEB_STRICT_EXPORT=1 \
         GITWEB_CSS="/gitweb.css" \
         GITWEB_LOGO="/git-logo.png" \
         GITWEB_FAVICON="/git-favicon.png" \
         GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
         gitweb/gitweb.cgi
    sudo -u git cp gitweb/gitweb.{cgi,css} \
                   gitweb/git-*.png \
                   /pub/git/public_html
