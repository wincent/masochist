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
