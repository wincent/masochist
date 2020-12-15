---
tags: wiki
title: Modifier keys
---

# Overview

## macOS

- On the bottom left, we have: `Control`, then `Option` (formerly `Alt`), then `Command` (formerly `Apple`).
- On the bottom right, the reverse order applies: `Command`/`Apple`, then `Alt`/`Option`, then `Control` (may not be present on laptops).

Older Mac keyboards showed `Alt` plus Unicode symbol `U-2387` ("ALTERNATIVE KEY SYMBOL") on the `Alt`/`Option` key. Newer ones show the word `Option` instead (as well as the symbol).

Likewise, they used to show an Apple logo in addition to the `Command` symbol (`U-2318`, "PLACE OF INTEREST SIGN") but nowadays just show the word `Command` along with the symbol.

Some laptops have an `Fn` (`Function`) key on the bottom left, to the left of the `Control` key.

## Windows

On Windows, the `Control` keys are in the same place as on Macs, but the ordering of `Alt` and the other key is swapped; that is:

- On the bottom left, we have `Control`, then a `Windows` key, followed by `Alt`.
- On the right, we have `Alt` (may be labeled as [`Alt Gr`](https://en.wikipedia.org/wiki/AltGr_key), short for `Alternate Graphic`), followed by `Windows`, followed by `Control`.

Some keyboards may have an additional modifies on the right side between `Windows` and `Control` called `Menu`.

## Linux

As per `xev`, values for my Realforce keyboard:

-   Left side:
    -   `Control_L`: keycode 37.
    -   `Super_L`: keycode 133.
    -   `Alt_L`: keycode 64.
-   Right side:
    -   (Alt) `ISO_Level3_Shift`: keycod 108.
    -   `Super_R`: keycode 134.
    -   `Menu`: keycode 135.
    -   `Control_R`: keycode 105.
-   Other keys of interest:
    -   `Caps_Lock`: keycode 66.
    -   `Return`: keycode 36.
    -   `Shift_L`: keycode 50.
    -   `Shift_R`: keycode 62.

As noted [here](https://en.wikipedia.org/wiki/Modifier_key), "Super" is sometimes referred to as "Meta", and some keyboards such as the "space-cadet keyboard" even had a _separate key_ called "Meta".

Modifier keys have an additional layer of symbolic names on Linux that you can see with `xmodmap -pm`. This shows which physical keys (`Shift_L`, `Control_L` etc) map onto the symbolic role-based names: `shift`, `lock`, `control`, `mod1`, `mod2`, `mod3`, `mod4`, and `mod5`.

Other tools may use these symbolic names. For example, i3 uses a `$mod` variable in its config to designate a principal modifier key, and it defaults to `Mod1` (ie. `Alt`) by default, with [`Mod4` (ie. `Super`/`Windows`)](https://i3wm.org/docs/userguide.html) being a popular alternative.

Additionally, there may be key codes which you can't press because your physical keyboard doesn't have them; these include:

-   `Meta_L`
-   `Meta_R`
-   `Hyper_L`
-   `Hyper_R`
-   `Mode_switch`: An old name for [the `AltGr` key](https://unix.stackexchange.com/a/55154)
-   `Compose`

To see what symbolic key names (`keysym`) each keycode is mapped to, run `xmodmap -xpe`. This will print up to 8 codes:

1.   With no modifier.
2.   With `Shift`.
3.   With `Mode_switch`.
4.   With `Mode_switch` + `Shift`.
5.   With `ISO_Level3_Shift` (but may not be implemented).
6.   With `ISO_Level3_Shift` + `Shift` (but may not be implemented).
7.   Not used.
8.   Not used.

# In summary

| Position | macOS | Windows | Linux |
| ------ | ------------- | ------------- | ----- |
| Left 1 | Control | Control | Control |
| Left 2 | Option | Windows | Super |
| Left 3 | Command | Alt | Alt |
| Right 1 | Command | Alt Gr | ISO_Level3_Shift |
| Right 2 | Option | Windows | Super |
| Right 3 | Menu | Menu | Menu |
| Right 4 | Control | Control | Control |

# Using Mac-like keybindings in Linux

The are many questions like [this one](https://superuser.com/questions/426515/efficient-key-bindings-using-both-mac-and-linux) asking how to get Mac-like bindings on Linux. The fundamental observation is that:

- On Macs, Control is mostly not used by command-line apps, and Command is mostly not used by terminal apps. This means that the common shortcuts that apply across the entire OS (like Command-C to copy, Command-V to paste, Command-X to cut, Command-W to close a window, Command-Z to undo etc) can be used absolutely everywhere (including in terminal apps), while the programs running in the terminal like tmux or Vim can freely use Control-based shortcuts without them clashing with the OS-level ones (for example, Control-V enters visual block mode in Vim, Control-X decrements a number in Vim, Control-C sends an interrupt, Control-Z backgrounds a process etc).
- On Linux, most of those OS-level shortcuts end up using Control, although it is done on a per-app basis. For example, Chromium uses Control-W to close windows, Control-C to copy, Control-V to paste, and so on. Other apps (eg. Kitty) may use Control-Shift-V, or Shift-Insert to paste.
- The other fundamental thing about macOS's use of the Command key is that it is easily accessed with the left thumb, allowing the comfortable use of one-handed "cheating" to do the most common shortcuts (eg. Command-Tab, Command-W, Command-Z, Command-T, Command-V, Command-X, Command-C etc). Technically, you should use the opposite hand to activate modifier keys, but in practice, if you have your right hand on the mouse or trackpad, then one-handed "cheating" is actually the _only_ way to activate the modifier. And once you get used to "cheating", you find yourself doing it even when you don't need to. One-handed "cheating" is much harder on Linux because you rely on the weaker finger (the "pinkie" as, er, _opposed_ to the thumb &mdash; no pun intended). It's probably not too hard to build up the muscle memory to hit some combinations in this way (eg. Control-X, Control-C, Control-V), but there are some that require almost painful contortions to enact; for example, "previous tab" in Chrome is Control-Shift-Tab on Linux, and it is quite difficult to hit whether you do it using the real Right Control key or have remapped Caps Lock to Control and use that instead. In contrast, on macOS, the comfortable Command-`[` is used instead (comfortable because it is a two-hand combination involving a tiny lateral movement, almost symmetrical, of the little finger on each hand).

The most commonly suggested solution is to "sacrifice" a modifier on the Linux side by binding Alt (ie. "Command") to Control. This means that you can hit "Command-C" in Chromium to copy, and it works because it's really Control-C. The obvious downsides here are that:

- Even without analyzing this deeply, it's obvious that using two keys for a single modifier is a huge waste that significantly impacts the number of things that you can map in a collision-free way. Especially when you consider that if you map Caps Lock to Control as well (a must for terminal efficiency, then you've devoted not two but _three_ left-side keys to a single modifier. You might think that you could just trade Right Control for something else, seeing as you mostly use Caps Lock for Control anyway, but the catch is the "mostly"; when you're hitting combinations like Control-Alt-Backspace you'll surely miss having the use of the physical Right Control key.
- You can't straightforwardly use Alt/"Command" as an i3 mod key, because i3 Alt/"Command" becomes Control in this set up, unless you make sure that none of your i3 mappings overlap with the ones that you want to use in your apps. For example, if "Command"-V (really Control-V) is to do the right thing in Chrome, that means you can't have a "Mod-V" mapping i3; just say you wanted something with a mnemonic for "[v]ertical split", now you have to think of something else.
- This still doesn't help you with other things for which you may have muscle memory from the Mac; for example previous/next tab in Chromium (Command-`[` and Command-`]` on Mac) are Control-Shift-Tab/Control-Tab on Linux; for these situations, you would actually need per-application overrides so that you could map "Command"-`[` (ie. Control-`[`) to Control-Shift-Tab just when Chromium has focus. If you can figure out how to do that, there may end up being a lot of apps where you have to do that set-up. As far as I can tell, there is no "good" way to do this although [xkeysnail](https://github.com/mooz/xkeysnail) might be all right; you might be able to subscribe to i3 window events and change mappings on the fly when that happens, but it sounds fragile. Another non-universal approach could be setting up i3 modes; where you could bind a key trigger a mode (when Chromium is active) and have different bindings just for that mode).
- We still have to surmount the other problem, which is that on Mac there are pretty much universal word and line movement shortcuts that use Command or Option (Option-Left/Right to move by words, Command-Left/Right to move to start or end of line, Command-Up/Down to move to end of beginning of document etc) that all need to be remapped to the corresponding Linux equivalents (where such exist).

A variant on the "sacrificial" idea:

- Control is Control, to keep terminal apps happy.
- Alt is Control, to make Chromium etc (mostly) act like it does on the Mac.
- Super is i3 mod key; seeing as Super (AKA "Option") is used less heavily on the Mac, using it for the i3 mod key is less likely to produce clashes.

Another variant:

- If using something like xkeysnail, swap Alt and Control _except_ in the terminal.
