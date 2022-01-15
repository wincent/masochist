---
tags: macos linux wiki
title: Migrating from macOS to Linux
---

Around May 2017 I started [seriously thinking of switching to Linux](https://twitter.com/wincent/status/868726264357572608) for my next machine. I've revisited the topic on multiple occasions. Here are some notes made while thinking through the topic.

# Is this viable?

At its core, this may be realistic because:

-   I spend most of my working life in Chrome and the Terminal.
-   I had a [mutt](/blog/email)-based email set-up that I was pretty happy with, and could easily resuscitate it; failing that, I'm relatively satisfied with the Gmail web interface.
-   You can get some very powerful hardware (with actual ports and a quality keyboard) on the Linux side at a reasonable price.

But there are some pretty big downsides:

-   Need to find replacements for indispensible software, and go without "dispensible-but-preferred" software.
-   Can't sync an iPhone with Linux, so would (_gasp!_) have to switch to Android.

# What's the motivation?

-   Apple has a penchant for breaking things in unexpected and arbitrary ways. For example, the introduction of S.I.P. (System Integrity Protection) — laudable though it may be from a security perspective — basically broke all RubyGem installs by default. Or the way Sierra broke Karabiner, which I utterly rely on.
-   iTerm is so slow, and it appears that macOS's own graphics APIs are the bottleneck; this is fine on the laptop screen, but a real killer when plugged into a 4K external display.
-   Apple is going nowhere fast with its hardware, with the last MacBook Pros being an insane cluster fuck of dongles, Touch Bars and no compelling performance or capacity upgrades in exchange for the lost convenience: I'd much rather have a "PC" laptop, even an ugly one, with a bunch of ports, an SD card slot, a bunch of RAM, and no ridiculous Touch Bar. The new keyboard is infamously prone to failure but basically can't be repaired (you have to replace the whole top plate, apparently). It also departs from the classic "inverted-T" cluster for the cursor keys. In short, it's a mess.
-   The [System76 Oryx Pro](https://system76.com/laptops/oryx) looks insanely powerful, and it comes with Linux installed by default (it also has a smaller, "sexier" sibling in the form of the [Galago Pro](https://system76.com/laptops/galago), which doesn't have the unnecessary number pad nor the ridiculously off-center trackpad).
-   I'm not even wedded to the idea of this Linux box being a laptop (portability is overrated, especially if you keep your Apple laptop around for those times when you need something on the go). My favorite machine out there right now is the [Compulab Airtop3](https://www.compulab.com/products/embedded-pcs/); there's a great [video review here](https://youtu.be/35OyZzCvG0g) and [pricing information is here](https://fit-iot.com/web/products/airtop3/), but the TL;DR is that this is a passively cooled (ie. basically silent) PC with a small form factor, powerful specs, reasonable pricing, easy access to internals, and beautiful design that leverages heat pipes to transport heat to the outside of the case (which can get quite hot). I love this thing.

# Are there alternatives to switching?

-   **Buying refurbished:** Apple used to sell refurbished 2015 MacBook Pros (the last "good" Apple laptops). You could buy one of these — and I did exactly that in 2017; I'm still using it now — and hope that Apple unfucks their laptop line by the time the refurbished one dies. At the time of writing, the oldest refurbished laptops that Apple sells now are 2017 models.

-   **Waiting:** Hold on long enough, and Apple just might get their shit together. I've grown increasingly skeptical about this because they seem utterly committed to reducing machine profile at all costs. This means that for the foreseeable future we're going to have ultra-thin machines with:

    -   Useless Touch Bars.

    -   Scarce ports.

    -   Flaky keyboards (even though they've apparently improved the keyboards in 2020 models, I don't think it's possible to produce a truly _good_ keyboard when the design envelope includes a hard height constraint of a a few millimeters).

    -    Thermal profiles that lead to chips which can burst to impressive peak performance levels only for short intervals before overheating and triggering horrible fan noise and worse still, thermal throttling which massively degrades performance. You don't even have to push the machine hard to get the fans to spin up (as I write this, merely having a podcast playing on YouTube in the background is enough to peg my fans at a steady 6000 RPM, keeping the CPUs down in the mid-60ºC range). The big question is how far Apple Silicon will go towards delivering on its promise of "powerful, efficient, cool: pick three"; it seems clear that we should expect a significant improvement, otherwise Apple wouldn't bother turning its entire world upside down, but at the same time, there are some pesky aspects of the law of physics that have long since troubled us after a few decades of Moore's Law-fueled good times. We'll see.

-   **Don't switch to Linux; switch to an iMac instead:** Even the cheapest, base-spec iMac side-steps some of the main problems with Apple's laptops (ie. Touch Bar, ports, keyboards) and they have gorgeous screens built in to a fantastic form factor at a reasonable price.

    Obviously, an iMac is still susceptible to the problems with the evolution of macOS and perhaps less obviously also prone to problems related to thermal limitations. Based on things I've heard in YouTube reviews, I gather that these machines also end up sounding a bit like hair-dryers when pushed hard. That in turn means that if you want to increase the specs on the machine to make it do more with less effort, you very quickly get into unafforable price ranges. As a crude illustration, the cheapest 21.5" and 27" iMacs at the time of writing (September 2020) are 1,299€ and 2,099€ respectively. Any upgrade to RAM, disk or CPU attracts is bought at an absurd premium. Cranking up the add-ons, you can dial up the price as high as 3,718€ or 10,7930€ for the 21.5" and 27" models respectively. Obviously, nobody in their right mind would do this. The iMac Pro is even more belied-beggaring. Prices start at 5,499€ and go as high as 16,209€.

    The Mac Pro of course doesn't warrant any kind of serious consideration, starting at 6,499€ and going as high as 66,299€. A screen will set you back an additional 5,499€ without a stand; add that in and opt for a matte screen and your bill will run up to 7,598€.

    Back in the 90s and early 2000s I bought several pro desktops from Apple; starting with a [PowerMac 7600](https://everymac.com/systems/apple/powermac/specs/powermac_7600_120.html) in 1996, and later a G4 and then a G5. And then Apple brought out it's first Intel-based iMac and from that point on its pro line became totally unappealing: always overpriced, and often underpowered.

-   **Don't migrate; supplement your Apple laptop with another machine:** I like simplicity and so since about 2011 I've had a one-machine-at-a-time policy. I don't want to be juggling and syncing data between machines. I took this policy so far, in fact, that I didn't even own a machine of my own from 2011 to 2017; I just used the machine provided by my employer and made sure all of my files were kept in the cloud.

     But, it's hard to _migrate_; that's what this whole document is about, after all. There are some things that suck about Apple hardware and macOS, but going to Linux isn't a panacea because it means accepting the things that suck about that instead, while leaving behind the things that were really great about Apple.

     So, given this unsavory proposal, might we consider a compromise position? For example, have a powerful Linux desktop (it need not even be a laptop) optimized for demanding "work" type activities: coding, recording screencasts etc, and keep the Apple laptop around for those things that would be really unpleasant to do on Linux (eg. managing a photo library, editing screencasts and photos etc), and critically, I could stick with the iPhone, syncing it to the Apple laptop.

     If you do this, you can optimize for a no-compromise machine that is _really_ good at its dedicated task. I'm thinking here of a machine that would optimize first and foremost for quiet operation, then consistently powerful performance (ie. not bursts of performance alternating with thermal throttling), and finally for price. The only remaining hurdle to overcome would be finding adequate replacements for tools like Karabiner-Elements. We might be able to get some of the way there, but I believe the only way to truly replace it would be to write my own, which would be rather difficult.



# Gotchas

I would need (or strongly want) to find workable replacements for everything on the [OS X "must haves"](/wiki/OS_X_"must_haves") page, and a few other apps that I haven't listed there.

-   **Flux:** Can probably replace with [Redshift](http://jonls.dk/redshift/).
-   **Hammerspoon (and Karabiner-Elements):** Probably screwed here; will likely be a lot of work to replace these.
-   **Homebrew:** Might miss the convenience here, but can get by without it, I think; as I haven't chosen a distro yet, not clear how good I can expect the native package management to be.
-   **Isolator:** No idea.
-   **iTerm 2:** Will have no trouble finding a performant replacement, but there may be some niche features that I miss.
-   **CleanShot:** Oh well, was nice knowing you. Will just have to settle for whatever is out there.
-   **OmniDiskSweeper:** No idea, but I expect there are viable alternatives out there.
-   **1Password:** Will be stuck with web view for foreseeable future.
-   **Alfred:** Will miss the snippets support and the auto-text expansion. There is a project called Albert, but I suspect it is missing a bunch of features.
-   **Arq:** Will sorely miss this one, but I believe there are less sophisticated alternatives that will meet the need.
-   **Net Monitor:** Sorry to see you go, after about 16 years of faithful service.
-   **Super Duper!** Not sure how many bootable backups I expect to make, but will have to find an alternative.
-   **xScope:** No idea.
-   **Spotify:** Web client? (There is an "unsupported" client [available](https://www.spotify.com/us/download/linux/) from Spotify.)
-   **iStat Menus:** Will miss these little suckers.
-   **Bartender:** Maybe not relevant?

Other apps that I haven't listed on that page but which I would miss:

-   **Screenflow**
-   **Fantastical**
-   **Sync:** Seems that only [web-based access is available for now](https://www.sync.com/help/general-limits-when-using-sync/#glinux).
-   **KeyCastr**
-   **Marked 2**
-   **Monodraw**
-   **Photos:** Yes, this sucks compared to Aperture, at least in terms of feature set, but I really can't imagine anything on Linux being as fast and robust. Note there isn't even a Google Photos client for Linux at this time.
-   **Capture One 12:** [No Linux client](https://support.captureone.com/hc/en-us/articles/360002902958-Do-you-have-Capture-One-for-Linux-).
-   **Things:** Would have to find an alternative
-   **Xcode:** Ha ha, just joking.

Losing some of these would hurt but be livable, but some of the others would be really, really big losses. This is why in that tweet that I linked to above, I put my chances of switching at "approaching 50%".

# Workarounds

An option to consider: dual-boot into macOS for those things that are super hard to replace. (Would require sticking with Apple hardware, that I am not super keen on given the nonsense with the lack of ports and the Touch Bar.)

# Doubts

-   System upgrades, long term support, and stability.
-   Choosing a distro? (Likely will go with [Arch Linux](https://www.archlinux.org/)).
-   I've used Linux on the server for many years and very happy with it there, but hard to know what it would be like as a desktop platform, as I haven't really ever gone beyond playing with it in that capacity.
