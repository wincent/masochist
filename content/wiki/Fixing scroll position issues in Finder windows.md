---
tags: wiki macos finder
---

As I [mentioned on Twitter](https://twitter.com/wincent/status/1067049102154874880), my Finder windows were all opening up with the list view scrolled all the way to the right.

Open `~/Library/Preferences/com.apple.Finder.plist` and set `StandardViewSettings` &raquo; `ListViewSettings` &raquo; `scrollPositionX` back to 0 (was 255).

Why you would ever want this to be anything other than 0 is beyond me. (Also, what/how it got set to 255...)
