---
tags: wiki arch cheatsheet
title: Arch Linux cheatsheet
---

Just a set of personal reminders for me as I set up a Linux box. Some of these are generic, but many will be specific to my machine.

# Creating installation media and installing

After grabbing the ISO image from [the download page](https://archlinux.org/download/), follow the procedure outlined on for macOS on the [USB Flash installation medium page](https://wiki.archlinux.org/index.php/USB_flash_installation_medium#In_macOS):

```bash
diskutil list # figure out device eg. /dev/disk3
diskutil unmountDisk /dev/disk3
sudo dd if=/Users/wincent/Downloads/archlinux-2021.03.01-x86_64.iso of=/dev/rdisk3 bs=1m
```

After that, it's a matter of booting from the media (ie. tap F12 repeatedly as described in "Selecting boot device at power-on" below). The option you want is "UEFI: USB", not "UEFI: USB, Partition 2" or "USB". When the GRUB menu appears, the first option will be autoselected and used by default, but it you don't want to wait you can select it yourself (it's "Arch Linux install medium (x86_64, UEFI)").

Kick off the installation script:

```bash
loadkeys colemak # "iyasefjr cyifmae" typing colemak-style on qwerty)
setfont ter-132b # Switch to a larger font, if needed.
iwctl station wlan0 connect $SSID
curl -LO https://wincent.dev/link/arch/desktop.sh
# or: curl -LO https://wincent.dev/link/arch/zbook.sh
bash desktop.sh
# or: bash zbook.sh

# etc...

reboot

# then, after logging back in...

cd code/wincent
./install
```

In order to do anything useful, need to get SSH key and GPG key onto the box. That means setting:

```
PasswordAuthentication yes
```

in `/etc/ssh/sshd_config`, sending a `SIGHUP` to the daemon (eg. something like `pkill -1 sshd`), and then copying over the keys; eg:

```
scp ~/.ssh/id_ed25519.pub huertas.local:.ssh
scp -rp ~/.gnupg huertas.local:
```

Note that if you already have a keyring on the Arch machine and you want to just copy over the secret key without overwriting everything, you can do:

```
gpg --list-secret-keys --key-id-format LONG # look for "rsa4096/$KEY_ID"
gpg --export-secret-key $KEY_ID | ssh huertas.local gpg --import --batch

# On the Arch machine:
gpg --edit-key $KEY_ID # run `trust` to set trust level to ultimate
```

Source:

-   [Stack Overflow, "How to transfer pgp private key to another computer?"](https://stackoverflow.com/a/3176373/2103996) (on using `ssh` to run `gpg --import`)
-   [Stack Overflow, "gpg-agent forwarding: inappropriate ioctl for device"](https://stackoverflow.com/a/73169380/2103996) (on using `--batch`)

# Managing WiFi with `iwctl` (part of [`iwd`](https://wiki.archlinux.org/title/iwd))

```bash
device list # list devices (eg. wlan0)
device wlan0 set-property Powered on # turn on
station wlan0 scan # scan for networks
station wlan0 get-networks # list networks
station wlan0 connect "Cole Valley" # connect to a network (tab completion works)
station wlan0 connect DIGIFIBRA-PLUS-Xz3f # connect to a network
```

# Managing WiFi with `netctl`

I used to use `netctl` before switching to `iwd`, so just leaving these notes here for posterity.

## Reconnecting to the WiFi

```bash
netctl restart $PROFILE # eg netctl restart cole-valley

# Alternatively...
netctl stop $PROFILE
netctl start $PROFILE
```

## Getting status for a WiFi connection

```bash
netctl status cole-valley
netctl status digifibra-xz3f
netctl status digifibra-plus-xz3f
```

### Checking to see whether a network is enabled and/or active

```bash
netctl is-enabled cole-valley
netctl is-enabled digifibra-xz3f
netctl is-enabled digifibra-plus-xz3f

netctl is-active cole-valley
netctl is-active digifibra-xz3f
netctl is-active digifibra-plus-xz3f
```

## Switching to another WiFi network

```bash
sudo netctl switch-to cole-valley
sudo netctl switch-to digifibra-xz3f
sudo netctl switch-to digifibra-plus-xz3f
```

## Other WiFi related commands

For more of these, see `man netctl`:

```bash
netctl list
sudo netctl enable $PROFILE
sudo netctl disable $PROFILE
sudo netctl verify $PROFILE # check for syntax errors
```

See also, `man netctl.profile` for details on the format of profile files stored under `/etc/netctl/`.

## Showing current WiFi channel

```bash
iwlist channel
```

## Showing other info about current WiFi connection

```bash
iwconfig
```

# Pairing or connecting Bluetooth headphones

```sh
$ systemctl start bluetooth
$ bluetoothctl
[bluetooth]# help
[bluetooth]# power on
[bluetooth]# pairable on
[bluetooth]# scan on
[bluetooth]# scan off
[bluetooth]# pair 14:3F:A6:2C:8E:98
[bluetooth]# connect 14:3F:A6:2C:8E:98
[bluetooth]# quit
```

In theory, for subsequent connections, all you need (as long as the `bluetooth` service is up and running) is:

```
[bluetooth]# connect 14:3F:A6:2C:8E:98
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
sudo pacman -Syyu # double "y" forces refresh of package databases even if they look up-to-date
```

or with Yay (to update AUR packages as well):

```bash
yay -Syyu # or...
yay # equivalent to `yay -Syu`
```

# Taking a screenshot

eg. of the selected area:

```bash
scrot -s output.png # without -s, takes picture of entire screen
```

# Trouble-shooting Clipper issues

See [Troubleshooting Clipper on Arch Linux].

# Inspecting key and mouse events

```bash
xev
```

# Terminating the X session

-   `Control-Alt-Backspace`

# Switching to another virtual console

-   `Control-Alt-1`, `Control-Alt-2` etc.

# Entering BIOS at power-on

-   Tap `Delete` (probably repeatedly).

# Selecting boot device at power-on

-   Tap `F12` (probably repeatedly).

# Applying BIOS updates

1. Download new BIOS versions from [Gigabyte's X570 support page](https://www.gigabyte.com/Motherboard/X570-AORUS-MASTER-rev-10/support#dl).
2. Unzip the download and copy the file to a FAT32-formatted USB drive. The filename will be something like `X570AOMA.F32` (for a normal release) or `X570AOMA.33j` (for a beta release, indicated by the trailing letter after the number).
3. Insert the USB into the front panel (a blue port, ie. USB 3.0).
4. Tap Delete after reboot to get into the BIOS menu.
5. Select "Q-Flash".
6. Choose "Update BIOS". Note that there is an "Also update backup BIOS" checkbox; these motherboards actually have two BIOSes, a primary and a secondary fallback one, so you can update both at once with the checkbox (alternatively, you can leave the secondary BIOS as-is; I am not sure how you would actually switch to the backup BIOS and update it later).
7. Hit Delete on rebooting to get back into BIOS.
8. Reenable the XMP profile.
9. Insert Arch installation medium into USB slot. Now, for some reason, every BIOS date resets the NVRAM, where critical EFI information is stored. The system won't boot properly until it is reconfigured. Reboot one more time, hitting F12 to get the boot menu. Choose `UEFI:USB` to boot from the installation medium. Using the medium, you have two choices (explained below) for returning the machine to a bootable state.

## Option 1: Use `efibootmgr` to repair the boot table

There may be a better way to fix this (probably in [the UEFI wiki page](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface)), but the following is the most concise way I have found so far to _manually_ restore bootability to the system, [using `efibootmgr`](https://wiki.gentoo.org/wiki/Efibootmgr) to get the boot entries back in place. "Option 2", further down, is decidedly easier and somewhat more automated.

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

In addition to `a.nsh` and `b.nsh`, [my installation script](https://wincent.dev/link/arch-linux-install.sh) also creates `a.sh` and `b.sh` that can contain copies of the `efibootmgr` commands printed above. This means that, after booting using the above technique, you can run `sudo bash /boot/b.sh && sudo bash /boot/a.sh` to permanently repair the boot table ("permanently", that is, until the next BIOS update). Note the order in which you run these commands matters; running `b.sh` first then `a.sh` ensures that "linux" comes before "linux-lts" in the boot order.

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

-   [Source](https://blog.crunchprank.net/connecting-to-twitch-chat-via-irssi/)
-   [TL;DR](https://gist.github.com/lambdan/4d9ac5a63e56c6d1d9169f5b81de9dd6)
-   https://dev.twitch.tv/docs/irc/guide

# Kitty

## Font size

-   `Ctrl-Shift-Minus`: Decrease font size by 2 pts.
-   `Ctrl-Shift-Equals`: Decrease font size by 2 pts.
-   `Ctrl-Shift-Backspace`: Reset font size to original.

# i3

## Application

-   `Alt-Shift-C`: Reload config.
-   `Alt-Shift-P`: Restart i3.
-   `Alt-Shift-Q`: Quit i3.

## Windows

-   `Alt-Q`: Kill focused window.
-   `Alt-Shift-Space`: Toggle floating.
-   `Super-B`: Do next split below.
-   `Super-R`: Do next split to right.
-   `Super-T`: Toggle fullscreen for currently focused container.
-   `Super-Y`: Cycle through container layouts (eg. vertical splits, horizontal splits, tabbed, stacking).

### Focus

-   `Super-h`: Focus left.
-   `Super-l`: Focus right.
-   `Super-j`: Focus below.
-   `Super-k`: Focus above.
-   `Super-a`: Focus parent.

### Moving

-   `Super+mouse`: Drag floating window.
-   `Super-Shift-h`: Move focused window left.
-   `Super-Shift-l`: Move focused window right.
-   `Super-Shift-j`: Move focused window down.
-   `Super-Shift-k`: Move focused window up.

### Resizing

-   `Control-Super-Left`: Grow window leftwards.
-   `Control-Super-Right`: Grow window rightwards.
-   `Control-Super-Up`: Grow window upwards.
-   `Control-Super-Down`: Grow window downwards.
-   `Control-Super-Shift-Left`: Shrink window leftwards.
-   `Control-Super-Shift-Right`: Shrink window rightwards.
-   `Control-Super-Shift-Up`: Shrink window upwards.
-   `Control-Super-Shift-Down`: Shrink window downwards.

<!-- References -->

[troubleshooting clipper on arch linux]: /wiki/Troubleshooting_Clipper_on_Arch_Linux
