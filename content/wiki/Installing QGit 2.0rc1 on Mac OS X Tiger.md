---
tags: git wiki
---

These notes were made while installing [QGit](/wiki/QGit) for the first time on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger). As this was the first time I had built a [Qt](/wiki/Qt)-based [app](/wiki/app) on [Mac OS X](/wiki/Mac_OS_X) I had to first download and build the Qt frameworks.

    # download latest version of Qt
    # http://trolltech.com/developer/downloads/qt/mac
    wget http://wftp.tu-chemnitz.de/pub/Qt/qt/source/qt-mac-opensource-src-4.3.0.tar.gz

    # extract
    tar xzvf qt-mac-opensource-src-4.3.0.tar.gz 
    cd qt-mac-opensource-src-4.3.0/

    # build
    ./configure
    make
    sudo make install

    # download QGit
    cd ..
    wget "http://dfn.dl.sourceforge.net/sourceforge/qgit/qgit-2.0rc1.tar.bz2"

    # extract
    tar xjvf qgit-2.0rc1.tar.bz2 
    cd qgit

    # ensure that qmake is in path
    export PATH="/usr/local/Trolltech/Qt-4.3.0/bin/:$PATH"

    # build
    qmake qgit.pro 
    make

    # test built application
    open bin/qgit.app

    # install (into $HOME/bin/)
    sudo make install
