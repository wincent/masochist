---
tags: hammerspoon
---
Hammerspoon is a programmable OS X automation and scripting tool. I [use it for](https://github.com/wincent/wincent/blob/master/roles/dotfiles/files/.hammerspoon/init.lua) positioning windows using hot keys and in response to events (eg. plugging in or unplugging an external display, or launching an app).

## Why Hammerspoon?

I originally used [Stay](/wiki/Stay) and [Divvy](/wiki/Divvy), before discovering the joys of the [open source](/wiki/Open_source) [Slate](/wiki/Slate) window manager, which allowed me a much higher degree of customization via its [JavaScript](/wiki/JavaScript) config file format.

Alas, Slate became abandonware. I continued to use it for a long time; if it ain't broke, don't fix it, right? Unfortunately, it _was_ a little bit broken. I had [a patch](https://github.com/wincent/slate/commit/d880d98fddfc12e96de66637bcf48379171ca262) that fixed [the main issue](https://github.com/jigish/slate/issues/140) I was seeing, but at some point the app started silently crashing for me and I was never able to figure out why.

I looked into the obvious alternatives and was flabbergastered to see them flashing in and out of existence at an alarming rate. [Steven Degutis](https://github.com/sdegutis) alone has made half a dozen of them &mdash; AppGrid, Zephyros, Phoenix, Hydra, Penknife &mdash; before [finally(?)](http://archive.is/13jlq) settling on [Mjolnir](https://github.com/sdegutis/mjolnir). Consider [this insanely long list](http://apple.stackexchange.com/questions/9659/what-window-management-options-exist-for-os-x) of window management tools for [OS X](/wiki/OS_X). I didn't want to have to rewrite my extensive Slate config (probably even into another language) if the tool I was targeting was not going to stick around. 

In my opinion now, Hammerspoon (itself a fork or Mjolnir, and one which [Steven Degutis endorses](https://github.com/sdegutis/mjolnir/commit/0f26064deacfd76bff6aeb3f981aed1913b053b0)) has crossed the threshold for community size, active maintenance, and stability that I feel comfortable adopting it, even though it required me to port my Slate configuration from JavaScript to [Lua](/wiki/Lua) ([this is the result](https://github.com/wincent/wincent/blob/master/roles/dotfiles/files/.hammerspoon/init.lua)). It addresses my main concerns with Mjolnir (doesn't require me to micromanage a constellation of modules nor bootstrap an entire Lua ecosystem management toolchain, and the documentation is great) and it has plenty of nice features, enabling me to easily attain parity with my Slate set-up and actually exceed it in short order.

# Official site

* http://www.hammerspoon.org/
