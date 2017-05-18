---
tags: git updates wiki
---

These notes were made while doing the upgrade to [Git 1.5.5](/wiki/Git_1.5.5) on two machines:

-   on a local machine running [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.2, built inside a local clone of the official [Git](/wiki/Git) repository
-   on a remote machine running [RHEL 5](/wiki/RHEL_5), built from downloaded source tarballs

## Local upgrade

From inside an existing clone of the Git repo:

    # get latest changes
    git fetch

    # check validity of signature on the release tag
    git tag -v v1.5.5

    # note that I am using "co" here as an alias for "checkout"
    git co v1.5.5

    # clean up any cruft that may be laying around from previous builds
    make clean

    # build and test; see note below about building the docs
    make prefix=/usr/local test doc

    # actually install
    sudo make prefix=/usr/local install install-doc

### [Bash](/wiki/Bash) completion update

The [Bash](/wiki/Bash) completion add-on has seen some updates in this release, so I updated that too:

    cp contrib/completion/git-completion.bash ~/.git-completion.sh

This works because I have a couple of lines like this in my `~/.bash_profile`:

    GIT_COMPLETION=~/.git-completion.sh
    test -f "${GIT_COMPLETION}" && source "${GIT_COMPLETION}"

### A note on building the documentation

As always, if you want to build the documentation like that you'll need to have the tool chain set up (see "[Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard)").

If you don't want to set up the tool chain you can download and install the manual pages as shown below.

## Remote upgrade

    wget http://kernel.org/pub/software/scm/git/git-1.5.5.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-1.5.5.tar.bz2.sign \
         http://kernel.org/pub/software/scm/git/git-manpages-1.5.5.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-manpages-1.5.5.tar.bz2.sign
    gpg --verify git-1.5.5.tar.bz2.sign git-1.5.5.tar.bz2
    gpg --verify git-manpages-1.5.5.tar.bz2.sign git-manpages-1.5.5.tar.bz2
    tar xjvf git-1.5.5.tar.bz2
    cd git-1.5.5
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
    sudo tar xjv -C /usr/local/man -f git-manpages-1.5.5.tar.bz2

## Other tweaks

I ran this on each of my machines:

    git config --global color.ui auto

## Favorite changes from this release

    * "git commit" does not run lstat(2) more than necessary
      anymore.

    * Bash completion script (in contrib) are aware of more commands and
      options.

    * A catch-all "color.ui" configuration variable can be used to
      enable coloring of all color-capable commands, instead of
      individual ones such as "color.status" and "color.branch".

    * The commands refused to take absolute pathnames where they
      require pathnames relative to the work tree or the current
      subdirectory.  They now can take absolute pathnames in such a
      case as long as the pathnames do not refer outside of the
      work tree.  E.g. "git add $(pwd)/foo" now works.

    * "git help <alias>" now reports "'git <alias>' is alias to <what>",
      instead of saying "No manual entry for git-<alias>".

    * "git diff" learned "--dirstat" option to show birds-eye-summary of
      changes more concisely than "--diffstat".

    * "git gc" now automatically prunes unreachable objects that are two
      weeks old or older.

    * "git help <alias>" now reports "'git <alias>' is alias to <what>",
      instead of saying "No manual entry for git-<alias>".

    * "git stash" learned "pop" command, that applies the latest stash and
      removes it from the stash, and "drop" command to discard the named
      stash entry.

    * Two conflict hunks that are separated by a very short span of common
      lines are now coalesced into one larger hunk, to make the result easier
      to read.
