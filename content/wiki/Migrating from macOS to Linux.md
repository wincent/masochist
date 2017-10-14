---
tags: macos linux wiki
---

At the of writing (May 2017) [I am thinking of switching to Linux](https://twitter.com/wincent/status/868726264357572608) for my next machine.

# Is this viable?

At its core, this is realistic because:

* I spend most of my working life in Chrome and the Terminal.
* I have a [mutt](/blog/email)-based email set-up that I am pretty happy with.

# What's the motivation?

* Apple has a penchant for breaking things in unexpected and arbitrary ways. For example, the introduction of S.I.P. (System Integrity Protection) — laudable though it may be from a security perspective — basically broke all RubyGem installs by default. Or the way Sierra broke Karabiner, which I utterly rely on.
* iTerm is so slow, and it appears that macOS's own graphics APIs are the bottleneck; this is fine on the laptop screen, but a real killer when plugged into a 4K external display.
* Apple is going nowhere fast with its hardware, with the last MacBook Pros being an insane cluster fuck of dongles, Touch Bars and no compelling performance or capacity upgrades in exchange for the lost convenience: I'd much rather have a "PC" laptop, even an ugly one, with a bunch of ports, an SD card slot, a bunch of RAM, and no ridiculous Touch Bar.

# Gotchas

I would need (or strongly want) to find workable replacements for everything on the [OS X "must haves"](/wiki/OS_X_"must_haves") page, and a few other apps that I haven't listed there.

* **Flux:** Can probably replace with [Redshift](http://jonls.dk/redshift/).
* **Hammerspoon (and Karabiner):** Probably screwed here; will likely be a lot of work to replace these.
* **Homebrew:** Might miss the convenience here, but can get by without it, I think; as I haven't chosen a distro yet, not clear how good I can expect the native package management to be.
* **Isolator:** No idea.
* **iTerm 2:** Will have no trouble finding a performant replacement, but there may be some niche features that I miss.
* **Skitch:** Oh well, was nice knowing you. Will just have to settle for whatever is out there.
* **OmniDiskSweeper:** No idea, but I expect there are viable alternatives out there.
* **1Password:** Will be stuck with web view for foreseeable future.
* **Alfred:** Will miss the snippets support and the auto-text expansion. There is a project called Albert, but I suspect it is missing a bunch of features.
* **Arq:** Will sorely miss this one, but I believe there are less sophisticated alternatives that will meet the need.
* **Net Monitor:** Sorry to see you go, after about 16 years of faithful service.
* **Super Duper!** Not sure how many bootable backups I expect to make, but will have to find an alternative.
* **xScope:** No idea.
* **Spotify:** Web client?
* **iStat Menus:** Will miss these little suckers.
* **Bartender:** Maybe not relevant?

Other apps that I haven't listed on that page but which I would miss:

* **Screenflow**
* **Fantastical**
* **Dropbox:** No idea what the integration on Linux is like; maybe it is ok?
* **KeyCastr**
* **Marked 2**
* **Monodraw**
* **Photos:** Yes, this sucks compared to Aperture, at least in terms of feature set, but I really can't imagine anything on Linux being as fast and robust.
* **Todoist:** Not sure if there is a good native client on Linux; maybe stuck with web.
* **Xcode:** Ha ha, just joking.

Losing some of these would hurt but be livable, but some of the others would be really, really big losses. This is why in that tweet that I linked to above, I put my chances of switching at "approaching 50%".

# Workarounds

An option to consider: dual-boot into macOS for those things that are super hard to replace. (Would require sticking with Apple hardware, that I am not super keen on given the nonsense with the lack of ports and the Touch Bar.)

# Doubts

* System upgrades, long term support, and stability.
* Choosing a distro? (Likely will go with [Arch Linux](https://www.archlinux.org/)).
* I've used Linux on the server for many years and very happy with it there, but hard to know what it would be like as a desktop platform, as I haven't really ever gone beyond playing with it in that capacity.
