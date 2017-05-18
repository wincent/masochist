---
tags: red.hat git updates snow.leopard wiki
---

# Local update

Notes made while performing the update to [Git 1.7.0](/wiki/Git_1.7.0) on my local [Mac OS X](/wiki/Mac_OS_X) 10.6.2 [Snow Leopard](/wiki/Snow_Leopard) install.

    # start off in local clone of official upstream Git repo
    git fetch

    # verify the tag
    git tag -v v1.7.0

    # note that "co" is a shorthand alias I have configured for "checkout"
    git co v1.7.0

    # proceed with the build
    make clean
    make prefix=/usr/local test
    sudo make prefix=/usr/local install quick-install-man

    # check for changes in the Bash completion script and install it
    diff -u ~/.git-completion.sh contrib/completion/git-completion.bash 
    cp contrib/completion/git-completion.bash ~/.git-completion.sh 

    # go back to master branch rather than hanging around on detached HEAD
    git co master

# Remote update

Notes made while updating on my remote [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) install.

    # starting from a clone of the official upstream Git repo
    git fetch
    git tag -v v1.7.0
    git co v1.7.0
    make clean
    NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make prefix=/usr/local test
    sudo -i
    cd /path/to/clone/of/git.git
    NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make prefix=/usr/local install quick-install-man

    # now for GitWeb
    make clean
    make GITWEB_PROJECTROOT=/pub/git/path/to/public/repos \
         GITWEB_LIST=/pub/git/conf/gitweb-projects \
         GITWEB_STRICT_EXPORT=1 \
         GITWEB_CSS="/gitweb.css" \
         GITWEB_LOGO="/git-logo.png" \
         GITWEB_FAVICON="/git-favicon.png" \
         GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
         bindir=/usr/local/bin \
         gitweb/gitweb.cgi
    sudo -u git cp gitweb/gitweb.{cgi,css} gitweb/git-*.png /pub/git/public_html/
