---
tags: git updates wiki
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.4](/wiki/Git_1.5.4).

# Local upgrade

These notes were made performing the upgrade on [Mac OS X](/wiki/Mac_OS_X) 10.5.1 [Leopard](/wiki/Leopard), using a local clone of the central [Git](/wiki/Git) repository.

    # get new stuff from upstream
    git fetch

    # check the signature on the tag
    git tag -v v1.5.4

    # switching working tree to v1.5.4
    git checkout v1.5.4

    # clean up any cruft that might be lying around
    make clean

    # build, run tests, and generate docs
    make prefix=/usr/local test doc

    # install
    sudo make prefix=/usr/local install install-doc

In order to build the docs you need the documentation toolchain in place; see "[Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard)".

# Remote upgrade

On the remote server (running [RHEL 3](/wiki/RHEL_3)) I installed from the tarball instead.

## Downloading

    wget http://kernel.org/pub/software/scm/git/git-1.5.4.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-1.5.4.tar.bz2.sign

Before verifying the signature some set-up of [GPG](/wiki/GPG) is necessary; see "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)" for more details.

    gpg --verify git-1.5.4.tar.bz2.sign git-1.5.4.tar.bz2

## Building

    # extract
    tar xjvf git-1.5.4.tar.bz2
    cd git-1.5.4

    # build and test
    nice make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

    # get man pages
    cd ..
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.4.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.4.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.4.tar.bz2.sign git-manpages-1.5.4.tar.bz2

    # install
    sudo tar xjv -C /usr/local/man -f git-manpages-1.5.4.tar.bz2

## Updating [gitweb](/wiki/gitweb)

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

## Fixing `git daemon` breakage

When `git daemon` handles incoming connections it will try to launch other [Git](/wiki/Git) commands such as `git upload-pack`, `git upload-archive` and `git receive-pack`.

A change in 1.5.4 means that Git now only looks in the `PATH` for such commands, not in the directory of the currently running Git executable. This in turn broke my `git daemon` set-up because I install Git into `/usr/local`, and I launch `git daemon` from within `xinetd`, but the `PATH` environment provided by `xinetd` does *not* include `/usr/local/bin`.

In other words, incoming connections work because I specified an absolute path (`/usr/local/bin/git-daemon`) in the `xinetd` configuration. But as soon as the client attempts to send or receive any data, the daemon tries to launch one of the other processes and fails because `/usr/local/bin` is not in the `PATH`. So it worked under 1.5.3.8 and in previous versions, but it wouldn't work under 1.5.4.

To fix this I had to add a line like this to my `/etc/xinetd.d/git` file:

            env = PATH=/bin:/usr/bin:/usr/local/bin

Another alternative would be to pass the `--exec-path` option to `git` as follows:

            server = /usr/local/bin/git
            server_args = --exec-path=/usr/local/bin daemon --inetd --base-path=/blah -- /blah

The alternative workaround would be to install [Git](/wiki/Git) under `/usr` rather than `/usr/local`. I am not sure if this qualifies as breakage or not — it is not unreasonable to expect people to have a correctly configured `PATH`; it is just a little surprising when you specify an absolute path to the `git-daemon` executable and it doesn't work — so I am not sure if this will be fixed in upstream Git.

### Update: later `git daemon` breakage

See "[fatal: protocol error: bad line length character](/wiki/fatal%3a_protocol_error%3a_bad_line_length_character)" for how I ran into trouble when another change was made in between 1.6.1 and 1.6.2 (although I only discovered the error when I updated to 1.6.3.3/1.6.4).

At the time of writing (running Git 1.6.4), I use neither the explicit `--exec-path` switch nor the `env` setting in the `/etc/xinetd.d/git` file.

Hoping this kind of problem won't crop up again. It's been an unfortunate consequence of my decision to install under `/usr/local/` (something which I thought qualified as "standard practice", but evidently is not standard enough for it to be trouble-free).
