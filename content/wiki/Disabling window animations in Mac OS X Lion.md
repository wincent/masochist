---
tags: lion wiki
cache_breaker: 1
---

[Lion](/wiki/Lion) introduces new window animations which make things like spawning new windows frustratingly sluggish on underpowered or overloaded machines (and mine generally tends to be both of those things!). Instead of appearing instantly, windows will noticeably stutter as they grow, shrink or move into position.

Generally, Apple's own applications like Safari and the Finder will "zoom" new windows into existence and "zoom" them out upon closing. [Mail.app](/wiki/Mail.app) also has a special animation for message windows upon sending, in which they are seen flying up towards the top of the screen; that particular one tends to be much smoother and less noticeable, probably because translating pixels across the screen is considerably easier that scaling them.

Thankfully, there is a way to turn them off:

# Turning animations off

```shell
$ defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool NO
```

This will add the required setting to your `~/Library/GlobalPreferences.plist` file.

Relatedly, there is an animation [Mail.app](/wiki/Mail.app) that can be turned off with:

```shell
$ defaults write com.apple.Mail DisableReplyAnimations -bool YES
```

# Turning animations on

```shell
$ defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool YES
```

And relatedly:

```shell
$ defaults write com.apple.Mail DisableReplyAnimations -bool NO
```

# Source

-   originally found here:
    -   <http://osxdaily.com/2011/07/25/disable-the-new-window-animation-in-mac-os-x-lion/>
    -   <http://www.cultofmac.com/turn-off-mail-animations-in-os-x-lion-how-to/105991>
