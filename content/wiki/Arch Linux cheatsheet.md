---
tags: wiki arch
title: Arch Linux cheatsheet
---

Just a set of personal reminders for me as I set up a Linux box. Some of these are generic, but many will be specific to my machine.

# Creating installation media and installing

After grabbing the ISO image from [the download page](https://archlinux.org/download/), follow the procedure outlined on for macOS on the [USB Flash installation medium page](https://wiki.archlinux.org/index.php/USB_flash_installation_medium#In_macOS):

```bash
diskutil list # figure out device eg. /dev/disk3
diskutil unmountDisk /dev/disk3
sudo dd if=/Users/glh/Downloads/archlinux-2021.03.01-x86_64.iso of=/dev/rdisk3 bs=1m
```

After that, it's a matter of booting from the media (see "Selecting boot device at power-on below) and kicking off the installation script:

```bash
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

```bash
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

```bash
systemctl suspend
```

# Rebooting the machine

```bash
sudo reboot
```

# Powering the machine off

**Note:** `sudo shutdown -h now` is [not going to cut it](https://twitter.com/wincent/status/1409928030219341826).

```bash
sudo poweroff
```

# Updating all packages

```bash
sudo pacman -Syu
```

# Inspecting key and mouse events

```bash
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
9. Insert Arch installation medium into USB slot. Now, for some reason, every BIOS date resets the NVRAM, where critical EFI information is stored. The system won't boot properly until it is reconfigured. Reboot one more time, hitting F12 to get the boot menu. Choose `UEFI:USB` to boot from the installation medium. Using the medium, you have two choices (explained below) for returning the machine to a bootable state.

## Option 1: Use `efibootmgr` to repair the boot table

There may be a better way to fix this (probably in [the UEFI wiki page](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface)), but the following is the easiest way I have found so far to restore bootability to the system, [using `efibootmgr`](https://wiki.gentoo.org/wiki/Efibootmgr) to get the boot entries back in place.

From the installation medium, boot in the UEFI Arch installer. We need this in order to access tools such as `cryptsetup` and `mount` which are stored under `/usr` on the encrypted volume.

```bash
loadkeys colemak -- (ie. "iyasefjr cyifmae")
iwctl station wlan0 connect $SSID
cryptsetup open /dev/nvme0n1p2 cryptroot
mount /dev/mapper/cryptroot /mnt
mount /dev/nvme0n1p1 /mnt/boot
arch-chroot /mnt

PARTUUID=$(lsblk /dev/nvme0n1p2 -o PARTUUID -d -n)

efibootmgr \
  --disk /dev/nvme0n1 \
  --part 1 \
  --create \
  --label "Arch Linux LTS" \
  --loader /vmlinuz-linux-lts \
  --unicode "cryptdevice=PARTUUID=${PARTUUID}:root root=/dev/mapper/root rw initrd=\initramfs-linux-lts.img" \
  --verbose
efibootmgr \
  --disk /dev/nvme0n1 \
  --part 1 \
  --create \
  --label "Arch Linux" \
  --loader /vmlinuz-linux \
  --unicode "cryptdevice=PARTUUID=${PARTUUID}:root root=/dev/mapper/root rw initrd=\initramfs-linux.img" \
  --verbose
exit
reboot
```

## Option 2: Boot the machine using the UEFI shell

There is a [UEFI shell](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface#UEFI_Shell) that you can also access from the installation media, but it is to painful to type in (using Qwerty when my muscle memory is wired for Colemak, and my keyboard has ninja keycaps on it so I can't even hunt-and-peck...).

So, I created two `.nsh` scripts on the `/boot` partition that run the necessary command to boot off the main partition.

`a.nsh` will boot the "linux" kernel and its contents look roughly like this (roughly, because the [partition UUID](https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) will vary with each install):

```
\vmlinuz-linux cryptdevice=PARTUUID=a7ade8a2-2a7d-2247-b2ea-5142c917746b:root root=/dev/mapper/root rw initrd=\initramfs-linux.img
```

`b.nsh` will boot into the "linux-lts" kernel:

```
\vmlinuz-linux-lts cryptdevice=PARTUUID=a7ade8a2-2a7d-2247-b2ea-5142c917746b:root root=/dev/mapper/root rw initrd=\initramfs-linux-lts.img
```

To use either of these scripts, it suffices to type:

```
FS0:
a
```
or:

```
FS0:
b
```

In addition to `a.nsh` and `b.nsh`, [my installation script](https://wincent.com/link/arch-linux-install.sh) also creates `a.sh` and `b.sh` that can contain copies of the `efibootmgr` commands printed above. This means that, after booting using the above technique, you can run `sudo bash /boot/b.sh && sudo bash /boot/b.sh` to permanently repair the boot table ("permanently", that is, until the next BIOS update). Note the order in which you run these commands matters; running `b.sh` first then `a.sh` ensures that "linux" comes before "linux-lts" in the boot order.

# Seeing fan speed and temperature information

```bash
sensors
```

# Getting X window metadata

eg. for targeting specific windows in i3:

```bash
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