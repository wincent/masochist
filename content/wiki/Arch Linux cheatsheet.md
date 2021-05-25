---
tags: wiki arch
title: Arch Linux cheatsheet
---

Just a set of personal reminders for me as I set up a Linux box. Some of these are generic, but many will be specific to my machine.

# Creating installation media and installing

After grabbing the ISO image from [the download page](https://archlinux.org/download/), follow the procedure outlined on for macOS on the [USB Flash installation medium page](https://wiki.archlinux.org/index.php/USB_flash_installation_medium#In_macOS):

```sh
diskutil list # figure out device eg. /dev/disk3
diskutil unmountDisk /dev/disk3
sudo dd if=/Users/glh/Downloads/archlinux-2021.03.01-x86_64.iso of=/dev/rdisk3 bs=1m
```

After that, it's a matter of booting from the media (see "Selecting boot device at power-on below) and kicking off the installation script:

```sh
loadkeys colemak # "iyasefjr cyifmae" typing colemak-style on qwerty)
iwctl station wlan0 connect $SSID
curl -LO https://wincent.com/link/arch-linux-install.sh
bash arch-linux-install.sh

# etc...

reboot

# then, after logging back in...

cd code/wincent
./install
```

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

# Applying BIOS updates

1. Download new BIOS versions from [Gigabyte's X570 support page](https://www.gigabyte.com/Motherboard/X570-AORUS-MASTER-rev-10/support#dl).
2. Unzip the download and copy the file  to a FAT32-formatted USB drive. The filename will be something like `X570AOMA.F32` (for a normal release) or `X570AOMA.33j` (for a beta release, indicated by the trailing letter after the number).
3. Insert the USB into the front panel (a blue port, ie. USB 3.0).
4. Tap Delete after reboot to get into the BIOS menu.
5. Select "Q-Flash".
6. Choose "Update BIOS". Note that there is an "Also update backup BIOS" checkbox; these motherboards actually have two BIOSes, a primary and a secondary fallback one, so you can update both at once with the checkbox (alternatively, you can leave the secondary BIOS as-is; I am not sure how you would actually switch to the backup BIOS and update it later).
7. Hit Delete on rebooting to get back into BIOS.
8. Reenable the XMP profile.
9. Insert Arch installation medium into USB slot. Reboot one more time, hitting F12 to get the boot menu; choose `UEFI:USB`.

Now, for some reason, every BIOS date resets the NVRAM, where critical EFI information is stored. The system won't boot properly until it is reconfigured. Now I am sure there is a better way to fix this (probably in [the UEFI wiki page](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface), but the only way I have been able to restore bootability to the system has been to set up the whole `/boot` partition all over again.

```sh
# Make it possible to type in Colemak.
loadkeys colemak -- (ie. "iyasefjr cyifmae")

# Get on the WiFi so we can download things.
iwctl station wlan0 connect $SSID

# Mount encrypted root partition.
cryptsetup open /dev/nvme0n1p2 cryptroot
mount /dev/mapper/cryptroot /mnt

# Mount (unencrypted) /boot partition.
mkdir -p /mnt/boot # I don't think we need this, but just in case.
mount /dev/nvme0n1p1 /mnt/boot

# Set up /boot all over again...
arch-chroot /mnt
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB --recheck
cp /usr/share/locale/en\@quot/LC_MESSAGES/grub.mo /boot/grub/locale/en.mo
grub-mkconfig -o /boot/grub/grub.cfg

# Now, if kernel files don't show up where expected may need to do...
mkinitcpio -p linux
mkinitcpio -p linux-lts

# And if that doesn't work (for example, "specified kernel image does not exist"):
pacman -S linux linux-lts # Reinstall... (which should do mkinitcpio)

# May need one more to get appropriate entries in /boot/grub/grub.cfg:
grub-mkconfig -o /boot/grub/grub.cfg

# All done...
exit
umount -a
reboot
```

Basically, I'm not sure what order to run those commands in; I had to try several times to get it to work (was winding up at a Grub prompt when rebooting). Also, I am not sure how/why, but I initially mounted `/boot` and everything was there, but after my first attempt, it seemed like the partition was somehow emptied and that's why I had to set it up all over again. For next time, see if I can shortcut some of this by [using `efibootmgr`](https://wiki.gentoo.org/wiki/Efibootmgr) to get the boot entries back in place.

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

# Kitty

## Font size

- `Ctrl-Shift-Minus`: Decrease font size by 2 pts.
- `Ctrl-Shift-Equals`: Decrease font size by 2 pts.
- `Ctrl-Shift-Backspace`: Reset font size to original.

# i3

## Application

- `Alt-Shift-C`: Reload config.
- `Alt-Shift-P`: Restart i3.
- `Alt-Shift-Q`: Quit i3.

## Windows

- `Alt-Q`: Kill focused window.
- `Alt-Shift-Space`: Toggle floating.
- `Super-B`: Do next split below.
- `Super-R`: Do next split to right.
- `Super-T`: Toggle fullscreen for currently focused container.
- `Super-Y`: Cycle through container layouts (eg. vertical splits, horizontal splits, tabbed, stacking).

### Focus

- `Super-h`: Focus left.
- `Super-l`: Focus right.
- `Super-j`: Focus below.
- `Super-k`: Focus above.
- `Super-a`: Focus parent.

### Moving

- `Super+mouse`: Drag floating window.
- `Super-Shift-h`: Move focused window left.
- `Super-Shift-l`: Move focused window right.
- `Super-Shift-j`: Move focused window down.
- `Super-Shift-k`: Move focused window up.

### Resizing

- `Control-Super-Left`: Grow window leftwards.
- `Control-Super-Right`: Grow window rightwards.
- `Control-Super-Up`: Grow window upwards.
- `Control-Super-Down`: Grow window downwards.
- `Control-Super-Shift-Left`: Shrink window leftwards.
- `Control-Super-Shift-Right`: Shrink window rightwards.
- `Control-Super-Shift-Up`: Shrink window upwards.
- `Control-Super-Shift-Down`: Shrink window downwards.
