---
tags: git
---

Notes made while updating from my existing installation of QGit (see "[Installing QGit 2.0rc1 on Mac OS X Tiger](/wiki/Installing_QGit_2.0rc1_on_Mac_OS_X_Tiger)") to the just-released QGit 2.0.

Since my original install the [Qt](/wiki/Qt) libraries have been updated from version 4.3.0 to 4.3.1, so I built those as well.

    # choose a local mirror from http://trolltech.com/developer/downloads/qt/mac
    wget "http://wftp.tu-chemnitz.de/pub/Qt/qt/source/qt-mac-opensource-src-4.3.1.tar.gz"

    # extract
    tar xzvf qt-mac-opensource-src-4.3.1.tar.gz 
    cd qt-mac-opensource-src-4.3.1

    # build
    ./configure
    make
    sudo make install

    # choose a local mirror from http://sourceforge.net/projects/qgit
    cd ..
    wget "http://kent.dl.sourceforge.net/sourceforge/qgit/qgit-2.0.tar.bz2"

    # extract
    tar xjvf qgit-2.0.tar.bz2 
    cd qgit

    # ensure that qmake is in path
    echo $PATH
    export PATH="/usr/local/Trolltech/Qt-4.3.1/bin/:$PATH"

    # build
    qmake qgit.pro 
    make

    # test built application
    open bin/qgit.app

    # install (into $HOME/bin/)
    sudo make install
