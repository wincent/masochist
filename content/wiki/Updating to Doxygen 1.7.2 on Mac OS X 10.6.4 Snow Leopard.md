---
tags: doxygen snow.leopard wiki
---

```shell
$ wget http://ftp.stack.nl/pub/users/dimitri/Doxygen-1.7.2.dmg
$ hdiutil attach Doxygen-1.7.2.dmg
$ sudo ditto /Volumes/Doxygen /Applications/Doxygen
$ sudo rm -rf /Applications/Doxygen.app
$ sudo mv /Applications/Doxygen/Doxygen.app /Applications/
$ sudo rm -r /Applications/Doxygen
$ hdiutil detach $(hdiutil info | grep /Volumes/Doxygen | awk '{print $1}')
$ wget http://ftp.stack.nl/pub/users/dimitri/doxygen_manual-1.7.2.pdf.zip
$ unzip doxygen_manual-1.7.2.pdf.zip
```
