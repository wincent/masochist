---
tags: git updates
---

## Local upgrade

Build from source (local clone of official [Git](/wiki/Git) repository), [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.4.

    git fetch
    git tag -v v1.6.0.1
    git co v1.6.0.1
    make clean
    make prefix=/usr/local test doc && sudo make prefix=/usr/local install install-doc
    cp contrib/completion/git-completion.bash ~/.git-completion.sh

**Note:** `git co` is an alias for `git checkout` (see [Git quickstart](/wiki/Git_quickstart) for details on setting up aliases). See [Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard) for details on setting up the prerequisites for building the docs.

## Remote upgrade

Build from source (tarball), [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) 5.1.

    wget http://kernel.org/pub/software/scm/git/git-1.6.0.1.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-1.6.0.1.tar.bz2.sign \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.6.0.1.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.6.0.1.tar.bz2.sign
    gpg --verify git-1.6.0.1.tar.bz2.sign git-1.6.0.1.tar.bz2
    gpg --verify git-manpages-1.6.0.1.tar.bz2.sign git-manpages-1.6.0.1.tar.bz2
    tar xjvf git-1.6.0.1.tar.bz2
    cd git-1.6.0.1
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
    sudo tar xjv -C /usr/local/man -f git-manpages-1.6.0.1.tar.bz2

## Cleaning up old versions

When you install Git 1.6.0 or later for the first time you might see a message like this:

    !! You have installed git-* commands to new gitexecdir.
    !! Old version git-* commands still remain in bindir.
    !! Mixing two versions of Git will lead to problems.
    !! Please remove old version commands in bindir now.

Unfortunately the release notes aren't specific about exactly *which* commands should continue to live in the `bindir` (`/usr/local/bin/` on my system):

> With the default Makefile settings, most of the programs are now installed outside your $PATH, except for "git", "gitk" and some server side programs that need to be accessible for technical reasons.

As a first approximation, I thought, "well, let's just try removing everything from `/usr/local/bin/` that's duplicated in `/usr/local/libexec/git-core/`".

    for OLD in $(ls $(git --exec-path)); do rm -i "/usr/local/bin/$OLD"; done

On my local machine, this left the following things behind in `/usr/local/bin/`:

    /usr/local/bin/git-applymbox
    /usr/local/bin/git-applypatch
    /usr/local/bin/git-browse-help
    /usr/local/bin/git-convert-objects
    /usr/local/bin/git-help--browse
    /usr/local/bin/git-local-fetch
    /usr/local/bin/git-merge-stupid
    /usr/local/bin/git-runstatus
    /usr/local/bin/git-ssh-fetch
    /usr/local/bin/git-ssh-pull
    /usr/local/bin/git-ssh-push
    /usr/local/bin/git-ssh-upload
    /usr/local/bin/git-svnimport

Most of these are obsolete files left behind from various previous versions of [Git](/wiki/Git) installed on this system. Of the above list, the ones which are still in the 1.6.0 tree are:

    git-help--browse
    git-merge-stupid

But those are never installed anyway. So I got rid of all of those files too:

    cd /usr/local/bin
    sudo rm git-applymbox \
            git-applypatch \
            git-browse-help \
            git-convert-objects \
            git-help--browse \
            git-local-fetch \
            git-merge-stupid \
            git-runstatus \
            git-ssh-* \
            git-svnimport

Likewise on the remote server I had to remove a couple of files, although not as many because it hasn't had as many versions of [Git](/wiki/Git) installed on it:

    cd /usr/local/bin
    sudo rm git-help--browse \
            git-merge-stupid 

So at this point I'd removed all the old stuff, but I'd also removed some of the new stuff too because some of it is installed in both places. Looking at the `make install` transcript I could see the following:

    install git git-upload-pack git-receive-pack git-upload-archive '/usr/local/bin'

So `git-upload-pack`, `git-receive-pack` and `git-upload-archive` needed to be copied back over again. Rather than doing it manually I decided to do the install again:

    # local machine
    cd path_to_git_1.6.0.1_checkout
    sudo make prefix=/usr/local install

    # same deal on remote server
    make clean
    make configure
    ./configure --without-tcltk
    make
    sudo make install

So the process I used wasn't very optimal. In the future I think I'm going to take before-and-after snapshots and save them so that I always know in the future what files need to be cleaned up from old versions.

## Fixing `git-daemon` breakage

There was also some breakage of `git daemon`, similar to the experience in the past (see "[Upgrading to Git 1.5.4](/wiki/Upgrading_to_Git_1.5.4)"). I was able to clone public repositories, but when I tried to clone private ones I was asked for my password (normally I use public-key authentication).

I tried playing with the `--exec-path` setting in `/etc/xinetd.d/git` without success, before turning to inspect `/var/log/secure`. The telltale message was:

    User wincenzo not allowed because shell /usr/local/bin/git-shell does not exist

Should have noticed that `git-shell` also got moved in the change to 1.6.0. So the solution was:

1.  Change `/usr/local/bin/git-shell` to `/usr/local/libexec/git-core/git-shell` in `/etc/shells`
2.  Change the shell for the user: `chsh -s /usr/local/libexec/git-core/git-shell wincenzo`

