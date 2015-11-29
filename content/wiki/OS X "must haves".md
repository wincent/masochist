---
tags: os.x
cache_breaker: 1
---

This is a list of software which I consider to be pretty much a "must have" on any Mac I own. I'm not mentioning here command-line apps like [Git](/wiki/Git), [tmux](/wiki/tmux) and [Vim](/wiki/Vim) — which I also consider to be essential — but am instead confining myself to [GUI](/wiki/GUI) apps only.

Basically, this is the stuff that I end up installing on every machine that comes into my possession, and which I would be sad about if it ever became abandonware.

# "Free"

Software in this list is either [open source](/wiki/open_source), or otherwise freeware/donationware.

## [Chrome](/wiki/Chrome)

-   <http://www.google.com/chrome>

Not as pretty as [Apple's](/wiki/Apple%27s) own [Safari](/wiki/Safari), but despite the fact it shares many internals, 2012 was the year I finally had to recognize that Chrome had gotten the edge in features and stability.

I actually use both [Chrome](/wiki/Chrome) and [Chrome Canary](/wiki/Chrome_Canary); the former for "tools" (Gmail, Pivotal tracker, Airbrake etc) and the latter for development.

## [f.lux](/wiki/f.lux)

-   <http://stereopsis.com/flux/>

Softens your display after sunset, so that you don't have to bathe yourself in the eery, unnatural glow of the computer screen.

## [Hammerspoon](/wiki/Hammerspoon)

-   <http://www.hammerspoon.org/>

Programmable OS X automation and scripting tool. I use it for positioning windows using hot keys and in response to events (eg. plugging in or unplugging an external display, or launching an app).

## [Homebrew](/wiki/Homebrew)

-   <http://mxcl.github.io/homebrew/>

Ok, so this one is not a GUI app, but it's very important, as it is the primary way of getting all the not-GUI apps (and a few of the GUI ones too), so including it here.

I have some [deep misgivings](/snippets/131) about the decision of [Homebrew](/wiki/Homebrew) to take exclusive ownership of `/usr/local`, but on a fresh install of [OS X](/wiki/OS_X), if you're prepared to let Homebrew have its way, there is no simpler/faster way of installing a bunch of necessary and useful [command line](/wiki/command_line) packages ([here's my current Brewfile](https://github.com/wincent/wincent/blob/master/Brewfile)).

## [Isolator](/wiki/Isolator)

-   <http://willmore.eu/software/isolator/>

Makes the frontmost application stand out and the others fade into the background; excellent for when you have multiple windows that look alike, or too much screen real estate.

## [iTerm 2](/wiki/iTerm_2)

-   <http://www.iterm2.com/>

More features than you need, but I'll bet it also has the ones you do need and can't get anywhere else. The sole gripe: it's slower than [Apple's](/wiki/Apple%27s) own [Terminal](/wiki/Terminal).

## [Karabiner](/wiki/Karabiner) (formerly [KeyRemap4MacBook](/wiki/KeyRemap4MacBook))

-   <https://pqrs.org/osx/karabiner/> (old site: <https://pqrs.org/macosx/keyremap4macbook/index.html.en>)

Has some killer features, like after mapping the Caps Lock key to serve as a Control key (using the standard OS X System Preferences), you can use Karabiner to change its behavior: pressing and holding Caps Lock in combination with another key makes it serve as a Control key, but pressing and releasing it immediately serves as an Escape key (idea from [this article](http://stevelosh.com/blog/2012/10/a-modern-space-cadet/)).

For more details about this and other super useful settings, see the "[Karabiner](/wiki/Karabiner)" article.

## [Skitch](/wiki/Skitch)

-   <http://skitch.com/>

The quickest and easiest way to not only take screenshots, but annotate them and share them. It also has some nice frills, like history, and not spewing temporary files all over your desktop (like Mac OS X's built-in screenshot capability does).

This is free but not [open source](/wiki/open_source). It hooks in to Evernote.

## [VLC](/wiki/VLC)

-   <http://www.videolan.org/>

Play back audio and video formats that [Apple](/wiki/Apple) won't.

## [Skype](/wiki/Skype)

-   <http://www.skype.com/>

Not [open source](/wiki/open_source), but free, and pretty darn useful.

I actually prefer FaceTime for call quality, but not everyone has it as it is Apple-only.

## [OmniDiskSweeper](/wiki/OmniDiskSweeper)

-   <http://www.omnigroup.com/products/omnidisksweeper/>

When all you've got is a tiny SSD drive, this tool is very handy for hunting down and killing space-greedy files which aren't worthy of preservation.

# Commercial

## [1Password](/wiki/1Password)

-   <https://agilebits.com/onepassword>

Secret-management. More details [here](/wiki/1Password).

## [Arq](/wiki/Arq)

-   <http://www.haystacksoftware.com/arq/>

Encrypted, automated, sane backup to [AWS](/wiki/AWS) ([S3](/wiki/S3) and [Glacier](/wiki/Glacier)).

## [Net Monitor](/wiki/Net_Monitor)

-   <http://homepage.mac.com/rominar/net.html> (and available on the Apple App Store)

See what's going in and out of your tubes. I still use this for its Dock icon, even though I also use [iStat Menus](/wiki/iStat_Menus) as well.

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

## [Bartender](/wiki/Bartender)

-   <http://www.macbartender.com/>

Clear up menu bar clutter, while still keeping useful functionality one click away. I liked this enough to pay for a license even though I hadn't reached the end of the trial period.

# Hall of fame

These are products I used to use.

## [Divvy](/wiki/Divvy)

-   <http://mizage.com/divvy/>

Throw windows around your screen(s) with user-definable keyboard short cuts.

Superseded by [Slate](/wiki/Slate).

## [Mouse Locator](/wiki/Mouse_Locator)

-   <http://www.2point5fish.com/>

Helps you find the mouse pointer immediately when you haven't touched the mouse for a while; pretty much a must-have if you work with multiple displays, where the mouse can get lost.

Superseded by equivalent built-in feature in [OS X](/wiki/OS_X) 10.11 "[El Capitan](/wiki/El_Capitan)".

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

## [Adium](/wiki/Adium)

-   <http://www.adium.im/>

This was really the only sane choice on [Mac OS X](/wiki/Mac_OS_X).

I stopped using it on changing jobs (at the old job I used Google chat; at the new job it's Facebook messenger).

## [Notational Velocity](/wiki/Notational_Velocity)

-   <http://notational.net/>

Dead simple management of notes and text files. Keep everything indexable by Spotlight, and without vendor lockin, while still having access to conveniences like search, tags/labels, and wiki-style links between notes.

Superseded by [nvALT](/wiki/nvALT).

## [nvALT](/wiki/nvALT)

-   <http://brettterpstra.com/projects/nvalt/>

A fork of [Notational Velocity](/wiki/Notational_Velocity) with some additional features. To be honest, I didn't really care too much about the extra features, but nvALT did fix a bug or two with Notational Velocity; that was enough to make me make the switch.

Superseded by [Corpus](https://github.com/wincent/corpus), which is a [JavaScript](/wiki/JavaScript) clone of nvALT.
