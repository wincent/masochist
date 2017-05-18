---
tags: git updates wiki
cache_breaker: 1
---

These notes were made while doing the upgrade to [Git 1.5.5.1](/wiki/Git_1.5.5.1) on two machines:

-   on a local machine running [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.2, built inside a local clone of the official [Git](/wiki/Git) repository
-   on a remote machine running [RHEL 5](/wiki/RHEL_5), built from downloaded source tarballs

## Local upgrade

From inside an existing clone of the Git repo:

    # get latest changes
    git fetch

    # check validity of signature on the release tag
    git tag -v v1.5.5.1

    # note that I am using "co" here as an alias for "checkout"
    git co v1.5.5.1

    # clean up any cruft that may be laying around from previous builds
    make clean

    # build and test; see note below about building the docs
    make prefix=/usr/local test doc

    # actually install
    sudo make prefix=/usr/local install install-doc

See "[Git quickstart](/wiki/Git_quickstart)" for info on how to set up aliases like `git co`.

### [Bash](/wiki/Bash) completion update

I didn't do an update of the [bash](/wiki/bash) completion support this time because there were no changes since the last release:

    git diff v1.5.5..v1.5.5.1 -- contrib/completion

### A note on building the documentation

As always, if you want to build the documentation like that you'll need to have the tool chain set up (see "[Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard)").

If you don't want to set up the tool chain you can download and install the manual pages as shown below.

## Remote upgrade

    wget http://kernel.org/pub/software/scm/git/git-1.5.5.1.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-1.5.5.1.tar.bz2.sign \
         http://kernel.org/pub/software/scm/git/git-manpages-1.5.5.1.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-manpages-1.5.5.1.tar.bz2.sign
    gpg --verify git-1.5.5.1.tar.bz2.sign git-1.5.5.1.tar.bz2
    gpg --verify git-manpages-1.5.5.1.tar.bz2.sign git-manpages-1.5.5.1.tar.bz2
    tar xjvf git-1.5.5.1.tar.bz2
    cd git-1.5.5.1
    make configure
    ./configure --without-tcltk
    make test
    sudo make install
    make clean
    make configure
    ./configure
    make GITWEB_PROJECTROOT=/pub/git/path_to_public_repos \
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
    cd ..
    sudo tar xjv -C /usr/local/man -f git-manpages-1.5.5.1.tar.bz2
