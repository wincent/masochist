---
tags: xcode wiki
cache_breaker: 1
---

You may be prompted to do this by a message like:

> Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.

# Solution 1

This can be done by trying to run Clang from the command-line as root:

```shell
$ sudo xcrun cc
```

## Source

-   <http://blog.tomhennigan.co.uk/post/62238548037/agreeing-to-the-xcode-license-from-the-command-line>

# Solution 2

I didn't test this one, but apparently, this also works (and is evidently more direct):

```shell
$ sudo xcodebuild -license
```

## Source

-   <https://intellij-support.jetbrains.com/entries/62745413-Mac-OSX-can-t-start-Git-after-updating-Mac-OS-XCode>
