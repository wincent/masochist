---
tags: wiki macos ruby
title: Unbreaking Ruby compilation on macOS "Monterey" 12.6.1
---

Similar to what we saw in [Unbreaking Ruby compilation on macOS "Big Sur" 11.6.2](/wiki/Unbreaking_Ruby_compilation_on_macOS_"Big_Sur"_11.6.2), after the update to "Monterey" 12.6.1 I was seeing failures to build Ruby extensions:

```
fatal error: 'ruby/config.h' file not found
```

Updating Xcode didn't work, nor did `sudo xcodebuild -license accept` (which I tried because the real error message about the header was being suppressed from the console output, and this is a trick that worked at another time in the past to get past some silent prompt that was derailing the build).

[This abomination](https://stackoverflow.com/a/65481787/2103996), however, did work:

```shell
$ cd /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX13.0.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby
$ sudo ln -sf ../../../../Headers/ruby/config.h
```
