---
tags: wiki arch
title: Arch Linux cheatsheet
---

Just a set of personal reminders for me as I set up a Linux box. Some of these are generic, but many will be specific to my machine.

# Reconnecting to the WiFi

```sh
netctl restart $PROFILE # eg netctl restart cole-valley
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

# Seeing fan speed and temperature information

```sh
sensors
```

# Getting X window metadata

eg. for targeting specific windows in i3:

```sh
xprop
```
