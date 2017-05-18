---
tags: mac startup.chime wiki
cache_breaker: 1
---

# Background

It has always puzzled me how Apple — generally so hip, so chic, so elegant, so tasteful, so concerned with aesthetics — could have perpetrated such a horrible transgression against good taste, peace, and tranquility, as they have with their Mac startup sounds.

At least as long as I've had a Mac (and if I recall correctly my first was a PowerMac 7200 back around 1994), the startup sound has been an absolutely stupefying, eardrum-shattering aural sledgehammer. To fully experience it, enclose yourself in a quiet room, pump your speakers up to maximum volume and watch either [this](http://www.youtube.com/watch?v=PwcySsaWqAY) or [this](http://www.youtube.com/watch?v=By1Jb13QYb8) YouTube compilation of Mac startup sounds. Unless it makes your windows rattle in their panes, you're not listening to it loud enough, and need to pump up the volume and try again. (As an aside, [here](http://www.youtube.com/watch?v=LTVmrX6Lee0) is another compilation which includes not only the startup sounds, but also the "Chime of Death" played when certain failure conditions are detected.)

Why anyone at Apple ever thought this was a good idea is beyond me. Perhaps if it were quiet enough — very quiet — it wouldn't be such a big deal, but given that it usually accompanies an involuntary reboot, this unwanted slap in the side of the head with the aural equivalent of a 40-pound cod is almost always unwelcome.

[This Wikipedia page](http://en.wikipedia.org/wiki/Macintosh_startup#Startup_chime) tells the story of the chime, while [this page](http://folklore.org/StoryView.py?project=Macintosh&story=Boot_Beep.txt) tells some of the pre-history of how things were before the chime, back when Macs used to beep.

While the sound is often misattributed to Brian Eno — perhaps due to confusion arising from the fact that [he created](http://www.coolcatdaddy.com/essays/mssound.html) the Windows 95 startup sound — it was in fact made by Jim Reekes and you can read about some of his thought processes [here](http://musicthing.blogspot.com/2005/05/tiny-music-makers-pt-4-mac-startup.html). Unsurprisingly, he was after a "powerful" sound:

> I wanted something really fat, heavy bass, high notes, and a sharp attack.
>
> Turning the Mac on is one thing, but being forced to reboot from a crash is a totally different experience. I wanted to avoid a sound that would be associated with the crash. I wanted it to sound more like a "palette cleanser".
>
> ROM engineers continued changing it with each new machine. Some of them were weak, such as the Stanley Jordon guitar strum used on the first PowerMacs. I objected to it, because that sound had no "power".

# Popular opinion on the startup chime

I am not alone in hating the chime. A Google search for "turn off mac startup sound" yields just under a million results at the time of writing. Tellingly, the [number one result](http://www.makeuseof.com/tag/psst-silence-your-macs-start-up-chime/) for "mac startup chime" is a page that tells you how to "Silence Your Mac's Start-up Chime Volume". [The second result](http://homepage.mac.com/geerlingguy/mac_support/mac_help/pages/0025-startup_sound.html) is titled, "Mute, Disable or Quiet the Mac Startup Sound/Bong/Chime".

It's baffling that after all these years of discontent and suffering, Apple hasn't deigned to at least put a checkbox in the System Preferences to optionally suppress this horrible "feature". It's not like they have't received any complaints about it.

# Turning off the sound

The Mac startup chord is like an unwelcome relative that just won't go away. Or perhaps like that incessant zombie that just won't stop lumbering towards you, no matter how many shotgun blasts you fire in its direction. Pick whichever metaphor works best for you.

While anecdotes suggest that holding down the mute key during power-up used to be enough to suppress it, it seems that this is no longer the case with current Macs.

Likewise, even the seemingly infallible precaution of inserting a jack into the headphone socket is not enough to stop this most resilient of adversaries.

There are a couple of programs that are oft-recommended for the purposes of suppressing the beast, but like any software which tampers with low-level system plumbing, they come with their risks. [StartupSound.prefPane](http://www5e.biglobe.ne.jp/~arcana/StartupSound/index.en.html) supposedly involves a kernal extension, and I've read reports of it leading to hangs, and that is enough warning for me to steer clear of it. [Psst](http://www.satsumac.com/Psst.php) is an alternative that runs as a background application; I am not sure if it involves a kernel extension component. Neither of them are [open source](/wiki/open_source), and seeing as I can't audit them to see how they work, I'm not really interested in trying either.

Oddly enough, the one universally reliable means of taming the beast seems to be to simply mute your sound before turning off or restarting your computer. Remembering to do this may be a problem, and evidently won't save you in the case of a crash or a kernel panic anyway, but there is one nice property of the Mac sound settings for users that use external speakers: you can mute the sound of the internal speakers, thus silencing the startup chime, and independently control the output of your external speakers.

I can only vouch for this working with USB-based speakers; I do not know if it works for speakers plugged directly into the audio-out jack. At least with USB speakers, at the time the startup chime would normally be heard the drivers have not been loaded and so muting the internal speakers is enough to suppress the chime. By the time the system boots up and the USB speakers come online the chime has long since past, and you can continue to enjoy normal audio output through your external speakers.
