---
tags: wiki windows
title: Creating Windows installation media on macOS
---

```sh
hdiutil mount Win11_22H2_English_x64v1.iso
brew install wimlib

# Get device name of USB where you want to create the install media.
diskutil list

# Format the media (MBR because can't use GPT on EFI systems).
diskutil eraseDisk MS-DOS 64GBUSB MBR disk5

# Confirm the result.
diskutil list

# Copy everything but the `install.wim` file which is too big for FAT32 filesystem.
rsync -avh --progress --exclude=sources/install.wim /Volumes/CCCOMA_X64FRE_EN-US_DV9/ /Volumes/64GBUSB

# Split `install.wim` into chunks of no more than 4000 MB.
wimlib-imagex split /Volumes/CCCOMA_X64FRE_EN-US_DV9/sources/install.wim /Volumes/64GBUSB/sources/install.swm 4000
```

# Sources
- ["HOW TO CREATE A WINDOWS 11 BOOTABLE USB ON MAC OS MONTEREY"](https://frankdenneman.nl/2022/12/21/how-to-create-a-windows-11-bootable-usb-on-mac-os-monterey/)
- ["3 Ways to Create a Bootable Windows 11 USB With a Mac"](https://www.makeuseof.com/how-to-make-a-bootable-windows-11-usb-on-mac/)
