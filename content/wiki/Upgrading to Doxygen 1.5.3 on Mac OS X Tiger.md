---
tags: doxygen updates wiki
cache_breaker: 1
---

These notes were made while upgrading to [Doxygen 1.5.3](/wiki/Doxygen_1.5.3) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

    # get and extract source
    wget http://ftp.stack.nl/pub/users/dimitri/doxygen-1.5.3.src.tar.gz
    tar xzvf doxygen-1.5.3.src.tar.gz 
    cd doxygen-1.5.3
    sh ./configure 
    make
    make docs
    sudo make install

    # grab Mac OS X binary install as well
    cd ..
    wget http://ftp.stack.nl/pub/users/dimitri/Doxygen-1.5.3.dmg
    hdiutil attach Doxygen-1.5.3.dmg
    sudo ditto /Volumes/Doxygen /Applications/Doxygen
    sudo mv /Applications/Doxygen/Doxygen.app /Applications/
    sudo rm -r /Applications/Doxygen
    hdiutil detach `hdiutil info | grep "/Volumes/Doxygen" | awk '{print $1}'`

    # grab documentation in PDF format
    wget ftp://ftp.stack.nl/pub/users/dimitri/doxygen_manual-1.5.3.pdf.zip
    unzip doxygen_manual-1.5.3.pdf.zip
