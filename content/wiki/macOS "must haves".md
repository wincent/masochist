---
tags: macos wiki
title: macOS "must haves"
---

This is a list of software which I consider to be pretty much a "must have" on any Mac I own. I'm not mentioning here command-line apps like [Git](/wiki/Git), [tmux](/wiki/tmux) and [Neovim](/wiki/Neovim) — which I also consider to be essential — but am instead confining myself to [GUI](/wiki/GUI) apps only.

Basically, this is the stuff that I end up installing on every machine that comes into my possession, and which I would be sad about if it ever became abandonware.

# "Free"

Software in this list is either [open source](/wiki/open_source), or otherwise freeware/donationware.

## Blurred

-   https://github.com/dwarvesf/Blurred

Supersedes [Isolator](/wiki/Isolator).

## [Hammerspoon](/wiki/Hammerspoon)

-   <http://www.hammerspoon.org/>

Programmable macOS automation and scripting tool. I use it for positioning windows using hot keys and in response to events (eg. plugging in or unplugging an external display, or launching an app).

## [Homebrew](/wiki/Homebrew)

-   <http://mxcl.github.io/homebrew/>

Ok, so this one is not a GUI app, but it's very important, as it is the primary way of getting all the not-GUI apps (and a few of the GUI ones too), so including it here.

I have some [deep misgivings](/snippets/131) about the decision of [Homebrew](/wiki/Homebrew) to take exclusive ownership of `/usr/local`, but on a fresh install of [macOS](/wiki/macOS), if you're prepared to let Homebrew have its way, there is no simpler/faster way of installing a bunch of necessary and useful [command line](/wiki/command_line) packages ([here's a snapshot of my Brewfile](https://github.com/wincent/wincent/blob/22ba80737b24ac6540309d7c9ab6375f16fd4752/aspects/homebrew/templates/Brewfile.erb)).

## kitty

- <https://sw.kovidgoyal.net/kitty/>

Best all-round cross-platform terminal for macOS and Linux, delivering excellent performance and an absurdly large number of features.

## [Karabiner-Elements](https://karabiner-elements.pqrs.org/) (formerly [Karabiner](/wiki/Karabiner), itself formerly [KeyRemap4MacBook](/wiki/KeyRemap4MacBook))

-   <https://karabiner-elements.pqrs.org/>

Has some killer features, like after mapping the Caps Lock key to serve as a Control key (using the standard macOS System Preferences), you can use Karabiner-Elements to change its behavior: pressing and holding Caps Lock in combination with another key makes it serve as a Control key, but pressing and releasing it immediately serves as an Escape key (idea from [this article](http://stevelosh.com/blog/2012/10/a-modern-space-cadet/)).

For more details about this and other super useful settings, see the "[Karabiner](/wiki/Karabiner)" article.

## [OmniDiskSweeper](/wiki/OmniDiskSweeper)

-   <http://www.omnigroup.com/products/omnidisksweeper/>

When all you've got is a tiny SSD drive, this tool is very handy for hunting down and killing space-greedy files which aren't worthy of preservation.

## [VLC](/wiki/VLC)

-   <http://www.videolan.org/>

Play back audio and video formats that [Apple](/wiki/Apple) won't.

# Commercial

## [1Password](/wiki/1Password)

-   <https://agilebits.com/onepassword>

Secret-management. More details [here](/wiki/1Password).

## [Arq](/wiki/Arq)

-   <http://www.haystacksoftware.com/arq/>

Encrypted, automated, sane backup to [AWS](/wiki/AWS) ([S3](/wiki/S3) and [Glacier](/wiki/Glacier)) and many other targets.

## CleanShot

-   [CleanShot](https://getcleanshot.com/)

I used to recommend [Skitch](http://skitch.com/) as:

> The quickest and easiest way to not only take screenshots, but annotate them and share them. It also has some nice frills, like history, and not spewing temporary files all over your desktop (like macOS's built-in screenshot capability does).

However, the company that made Skitch was [acquired by Evernote in 2011](https://en.wikipedia.org/wiki/Evernote#Skitch), and I never fully trusted their cloud integration given their [history](https://en.wikipedia.org/wiki/Evernote#Incidents).

CleanShot carries none of that baggage, has a delightful UX, and if you need history synced across multiple machines, it is easy enough to save your screenshots to a shared folder.

## Godspeed

- [Godspeed](https://godspeedapp.com/)

Feature rich, clean, fast, "TODO" app with macOS and iOS clients.

## Raycast

The new Alfred.

-   <https://www.raycast.com/>

## [SuperDuper!](/wiki/SuperDuper%21)

-   <http://www.shirt-pocket.com/SuperDuper/>

Whole-disk backup software that has saved my butt on multiple occasions.

## [xScope](/wiki/xScope)

-   <http://xscopeapp.com/>

Measure anything on the screen (colors, distances etc). This is the perfect tool for helping you as a web developer to translate a designer's mock into a working web page.

## [Spotify](/wiki/Spotify)

-   <https://www.spotify.com/>

Free to download and use, but paid if you want to get rid of the ads. On a laptop with a small SSD, this is a great way to retain access to a lot of your music, without actually needing to use up your precious drive space.

## [iStat Menus](/wiki/iStat_Menus)

-   <http://bjango.com/mac/istatmenus/>

Ridiculously configurable menu meters. This is arguably superior to [MenuMeters](/wiki/MenuMeters) and [Temperature Monitor](/wiki/Temperature_Monitor), but it's not free.

# Hall of fame

These are products I used to list as "must haves":

## [Adium](/wiki/Adium)

-   <http://www.adium.im/>

This was really the only sane choice on [macOS](/wiki/macOS).

I stopped using it on changing jobs (at the old job I used Google chat; then it was Facebook messenger; finally I've now worked at three companies that use Slack).

## Alfred

-   <https://www.alfredapp.com/>

Superseded by Raycast.

## [Bartender](/wiki/Bartender)

-   <http://www.macbartender.com/>

Clear up menu bar clutter, while still keeping useful functionality one click away. I liked this enough to pay for a license even though I hadn't reached the end of the trial period.

Superseded by [Ice](https://icemenubar.app/) when [Bartender did a rug-pull](https://www.reddit.com/r/macapps/comments/1d7zjv8/bartender_5_not_safe_anymore_warning_from/) (the app got sold, and certificates were changed, without warning; serious questions exist about the reliability and intentions of the new owner).

## [Chrome](/wiki/Chrome)

-   <http://www.google.com/chrome>

Not as pretty as [Apple's](/wiki/Apple%27s) own [Safari](/wiki/Safari), but despite the fact it shares many internals, 2012 was the year I finally had to recognize that Chrome had gotten the edge in features and stability. At the time of writing, I still use [Chrome](/wiki/Chrome), but only at work (where is mandated). Elsewhere, I use [Orion](/wiki/Orion) (for it's privacy features) and [Edge](/wiki/Edge) (for use cases where Orion is broken).

## [Divvy](/wiki/Divvy)

-   <http://mizage.com/divvy/>

Throw windows around your screen(s) with user-definable keyboard short cuts.

Superseded by [Slate](/wiki/Slate).

## [Isolator](/wiki/Isolator)

-   <http://willmore.eu/software/isolator/>

Superseded by [Blurred](https://github.com/dwarvesf/Blurred).

Makes the frontmost application stand out and the others fade into the background; excellent for when you have multiple windows that look alike, or too much screen real estate.

## [iTerm 2](/wiki/iTerm_2)

-   <http://www.iterm2.com/>

More features than you need, but I'll bet it also has the ones you do need and can't get anywhere else. The sole gripe: it's slower than [Apple's](/wiki/Apple%27s) own [Terminal](/wiki/Terminal).

Superseded by [kitty](https://sw.kovidgoyal.net/kitty/).

## [Mouse Locator](/wiki/Mouse_Locator)

-   <http://www.2point5fish.com/>

Helps you find the mouse pointer immediately when you haven't touched the mouse for a while; pretty much a must-have if you work with multiple displays, where the mouse can get lost.

Superseded by equivalent built-in feature in [macOS](/wiki/macOS), since version 10.11 "[El Capitan](/wiki/El_Capitan)", which means you can magnify the mouse by "shaking" the mouse pointer.

## [Net Monitor](/wiki/Net_Monitor)

-   <http://homepage.mac.com/rominar/net.html> (and available on the Apple App Store)

See what's going in and out of your tubes. Sadly, doesn't work on Apple Silicon, so I cover the gap with [iStat Menus](/wiki/iStat_Menus).


## [Skype](/wiki/Skype)

-   <http://www.skype.com/>

Not [open source](/wiki/open_source), but free, and pretty darn useful.

I actually prefer FaceTime for call quality, but not everyone has it as it is Apple-only. Also, I've found it to be terribly buggy over many years now. 😢

## [Slate](/wiki/Slate)

-   <https://github.com/jigish/slate>

Awesome [open source](/wiki/open_source) window management (keyboard control, auto-layout, multi-monitor configuration).

Superseded by [Hammerspoon](/wiki/Hammerspoon).

## [Stay](/wiki/Stay)

-   <http://cordlessdog.com/stay/>

Remembers and restores window locations. Great for when you are plugging into and out of external displays. Not entirely reliable, but even working 90% properly 75% of the time beats setting up all your windows by hand.

Superseded by [Slate](/wiki/Slate).

## [Scroll Reverser](/wiki/Scroll_Reverser)

-   <http://pilotmoon.com/scrollreverser/>

Enables you to independently control the direction of the mouse scroll wheel and the trackpad (very useful if you prefer "natural" scrolling on the trackpad but not on the mouse).

The necessary settings are a little bit confusing, at least for me:

-   "Scroll direction: natural": should be turned **off** in the System preferences for both the mouse and the trackpad (the checkboxes are linked anyway)
-   In Scroll Reverser:
    -   Top level "Reverse Scrolling" menu item should be checked
    -   Submenu "Reverse Horizontal" should be checked (weird, isn't it?)
    -   Submenu "Reverse Vertical" should be checked
    -   Submenu "Reverse Trackpad" should be checked
    -   Submenu "Reverse Mouse" should **not** be checked

Uninstalled when I switch back to using a Magic Trackpad instead of a mouse.

## Things

Prettiest to-do lists this side of Cupertino. Very simple, and not cross-platform, but the features that it does have work extremely well.

-   [Things](https://culturedcode.com/things/)

Superseded by [Godspeed](https://godspeedapp.com/).

## [Propane](/wiki/Propane)

-   <http://propaneapp.com/>

We used Campfire at my old work, and this is the nicest way to be in Campfire. The killer feature is the regex-based alert notifications.

Uninstalled on switching jobs.

## [MenuMeters](/wiki/MenuMeters)

-   <http://www.ragingmenace.com/software/menumeters/index.html>

I used to use it for the disk activity meter, which provides visual feedback of when the solid-state drive on my MacBook Air is actually doing something, and also gave me convenient one-click access to all my volumes as well as showing their current usage and capacity levels.

Superseded by [iStat Menus](/wiki/iStat_Menus).

## [Temperature Monitor](/wiki/Temperature_Monitor)

-   <http://www.bresink.com/osx/TemperatureMonitor.html>

Measure how hot your machine is running. Overheating killed my last machine, and I find temperature to be a useful indicator of how hard I'm pushing the machine; it can be a clue that you can afford to turn on more bells or whistles, or cut back.

Superseded by [iStat Menus](/wiki/iStat_Menus).

## [Notational Velocity](/wiki/Notational_Velocity)

-   <http://notational.net/>

Dead simple management of notes and text files. Keep everything indexable by Spotlight, and without vendor lockin, while still having access to conveniences like search, tags/labels, and wiki-style links between notes.

Superseded by [nvALT](/wiki/nvALT).

## [nvALT](/wiki/nvALT)

-   <http://brettterpstra.com/projects/nvalt/>

A fork of [Notational Velocity](/wiki/Notational_Velocity) with some additional features. To be honest, I didn't really care too much about the extra features, but nvALT did fix a bug or two with Notational Velocity; that was enough to make me make the switch.

Superseded by [Corpus](https://github.com/wincent/corpus), which is a [JavaScript](/wiki/JavaScript) clone of nvALT.

## [f.lux](/wiki/f.lux)

-   <http://stereopsis.com/flux/>

Softens your display after sunset, so that you don't have to bathe yourself in the eerie, unnatural glow of the computer screen.

Superseded by equivalent built-in "Night Shift" feature in [macOS](/wiki/macOS) 10.12 "Sierra".
