---
tags: wiki macos
---

Just say you have a file that has a busted creation date on it like January 1st, 1970 (ie. the beginning of the Unix epoch).

There are a bunch of old posts out there such as [this one](http://blog.grapii.com/2010/07/change-a-files-creationmodified-date-on-mac-os-x/) that claim that `touch -t YYYYMMDDhhmm.SS $FILENAME` should work, however I found that they didn't work on macOS High Sierra on a machine using an APFS filesystem.

[This Stack Overflow post](https://apple.stackexchange.com/a/99599/158927) says that `touch` won't fix creation dates, but that wasn't the problem I was seeing (I was seeing it basically ignore the argument and create files called `-t` and `YYYYMMDDhhmm`). Nevertheless, the post does contain the answer, which is to use `SetFile` which comes with the Xcode tools.

 ```
 SetFile -d '03/10/2018 10:00:00 AM' $FILENAME
 ```
