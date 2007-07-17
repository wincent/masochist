---
tags: git
---

For my [Red Hat](/wiki/Red_Hat) [Git](/wiki/Git) install I opted for a simpler, no-documentation installation (for notes on installing the documentation see "[Installing Git 1.5.2.3 on Mac OS X Tiger](/wiki/Installing_Git_1.5.2.3_on_Mac_OS_X_Tiger)"). Note that although [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) already has a copy of the Expat library installed (in `/usr/lib/`) I decided to download the latest version and install it under `/usr/local/lib/`.

    # get source for Expat dependency from:
    # http://sourceforge.net/projects/expat/
    wget http://surfnet.dl.sourceforge.net/sourceforge/expat/expat-2.0.1.tar.gz

    # extract
    tar xzvf expat-2.0.1.tar.gz
    cd expat-2.0.1

    # build
    ./configure
    make
    make check
    sudo make install

    # grab the source from the Git homepage:
    # http://git.or.cz/
    wget http://kernel.org/pub/software/scm/git/git-1.5.2.3.tar.bz2

    # extract source
    tar xjvf git-1.5.2.3.tar.bz2
    cd git-1.5.2.3

    # build
    make prefix=/usr/local all

    # run tests
    make prefix=/usr/local test
    echo $?

    # install
    unset CDPATH
    sudo make prefix=/usr/local install

My first attempt at installing didn't work because of a period in my `CDPATH` environment variable; to avoid such problems in the future I `unset` the variable and removed the corresponding `export` from my `~/.bash_profile` (`CDATH` should be set via normal assignment only and not exported).

# See also

-   [Installing Git 1.5.2.3 on Mac OS X Tiger](/wiki/Installing_Git_1.5.2.3_on_Mac_OS_X_Tiger)
-   [Installing Git 1.5.2.4 on Mac OS X Leopard](/wiki/Installing_Git_1.5.2.4_on_Mac_OS_X_Leopard)

