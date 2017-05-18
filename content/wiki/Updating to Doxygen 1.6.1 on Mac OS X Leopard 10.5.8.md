---
tags: leopard doxygen updates wiki
cache_breaker: 1
---

```shell
$ wget http://ftp.stack.nl/pub/users/dimitri/Doxygen-1.6.1.dmg
$ hdiutil attach Doxygen-1.6.1.dmg
$ sudo ditto /Volumes/Doxygen /Applications/Doxygen
$ sudo rm -r /Applications/Doxygen.app
$ sudo mv /Applications/Doxygen/Doxygen.app /Applications/
$ sudo rm -r /Applications/Doxygen
$ hdiutil detach $(hdiutil info | grep /Volumes/Doxygen | awk '{print $1}')
$ wget http://ftp.stack.nl/pub/users/dimitri/doxygen_manual-1.6.1.pdf.zip
$ unzip doxygen_manual-1.6.1.pdf.zip
```

# See also

-   <http://www.stack.nl/~dimitri/doxygen/changelog.html>
