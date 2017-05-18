---
tags: doxygen updates wiki
---

Notes made while upgrading to [Doxygen 1.5.7](/wiki/Doxygen_1.5.7) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.2.

    wget ftp://ftp.stack.nl/pub/users/dimitri/Doxygen-1.5.7.dmg
    hdiutil attach Doxygen-1.5.7.dmg 
    sudo ditto /Volumes/Doxygen /Applications/Doxygen
    sudo rm -r /Applications/Doxygen.app
    sudo mv /Applications/Doxygen/Doxygen.app /Applications/
    sudo rm -r /Applications/Doxygen
    hdiutil detach `hdiutil info | grep /Volumes/Doxygen | awk '{print $1}'`
    wget ftp://ftp.stack.nl/pub/users/dimitri/doxygen_manual-1.5.7.pdf.zip
    unzip doxygen_manual-1.5.7.pdf.zip
