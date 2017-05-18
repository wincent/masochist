---
tags: synergy last.fm wiki
---

To turn it on, quit Synergy and do this in the Terminal:

    defaults write org.wincent.Synergy LogAudioscrobblerEvents -bool yes

To turn it off, quit Synergy and do this:

    defaults write org.wincent.Synergy LogAudioscrobblerEvents -bool no

The logged events can be viewed using the [Console.app](/wiki/Console.app).
