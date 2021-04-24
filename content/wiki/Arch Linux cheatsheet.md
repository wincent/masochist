---
tags: wiki arch
title: Arch Linux cheatsheet
---

Just a set of personal reminders for me as I set up a Linux box. Some of these are generic, but many will be specific to my machine.

# Reconnecting to the WiFi

```sh
netctl restart $PROFILE # eg netctl restart cole-valley
```

# Pairing or connecting Bluetooth headphones

```sh
$ systemctl start bluetooth
$ bluetoothctl
# help
# power on
# scan on
# scan off
# pair 00:1B:66:CD:BD:8F
# connect 00:1B:66:CD:BD:8F
```

# Putting the machine to sleep

```sh
systemctl suspend
```

# Rebooting the machine

```sh
sudo reboot
```

# Updating all packages

```sh
sudo pacman -Syu
```

# Inspecting key and mouse events

```sh
xev
```

# Terminating the X session

- `Control-Alt-Backspace`

# Switching to another virtual console

- `Control-Alt-1`, `Control-Alt-2` etc.

# Entering BIOS at power-on

- Tap `Delete` (probably repeatedly).

# Selecting boot device at power-on

- Tap `F12` (probably repeatedly).

# Seeing fan speed and temperature information

```sh
sensors
```

# Getting X window metadata

eg. for targeting specific windows in i3:

```sh
xprop
```

# Setting up `irssi` for Twitch chat

[With OAuth token](https://twitchapps.com/tmi/):

```
/network add -nick greghurrell Twitch
/server add -auto -ssl -network Twitch irc.chat.twitch.tv 6697 YOUR_OAUTH_TOKEN
/network add -autosendcmd "/quote CAP REQ :twitch.tv/membership" Twitch
/ignore jtv
/save
/connect Twitch
/channel add -auto #greghurrell Twitch
/save
/join #greghurrell
```

## See also

- [Source](https://blog.crunchprank.net/connecting-to-twitch-chat-via-irssi/)
- [TL;DR](https://gist.github.com/lambdan/4d9ac5a63e56c6d1d9169f5b81de9dd6)
- https://dev.twitch.tv/docs/irc/guide
