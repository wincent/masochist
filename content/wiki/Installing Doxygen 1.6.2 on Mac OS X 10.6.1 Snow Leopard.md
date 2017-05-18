---
tags: doxygen snow.leopard wiki
---

```shell
$ curl -O http://ftp.stack.nl/pub/users/dimitri/Doxygen-1.6.2.dmg
$ hdiutil attach Doxygen-1.6.2.dmg
$ sudo ditto /Volumes/Doxygen /Applications/Doxygen
$ sudo rm -r /Applications/Doxygen.app
$ sudo mv /Applications/Doxygen/Doxygen.app /Applications/
$ sudo rm -r /Applications/Doxygen
$ hdiutil detach $(hdiutil info | grep /Volumes/Doxygen | awk '{print $1}')
$ wget http://ftp.stack.nl/pub/users/dimitri/doxygen_manual-1.6.2.pdf.zip
$ unzip doxygen_manual-1.6.2.pdf.zip
```

# See also

-   [Doxygen](/wiki/Doxygen) change log: <http://www.stack.nl/~dimitri/doxygen/changelog.html>
-   [Installing GraphViz 2.26.0 on Mac OS X 10.6.1 Snow Leopard](/wiki/Installing_GraphViz_2.26.0_on_Mac_OS_X_10.6.1_Snow_Leopard)
