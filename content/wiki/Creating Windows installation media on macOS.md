---
tags: wiki windows
title: Creating Windows installation media on macOS
---

```sh
brew install wimlib
diskutil list # Get device name of USB where you want to create the install media.
diskutil eraseDisk MS-DOS WINDOWS11 GPT /dev/disk2 # Format the media.
diskutil list # Confirm the result.
rsync -vha --exclude=sources/install.wim /Volumes/CCCOMA_X64FRE_EN-US_DV9/* /Volumes/WINDOWS11
wimlib-imagex split /Volumes/CCCOMA_X64FRE_EN-US_DV9/sources/install.wim /Volumes/WINDOWS11/sources/install.swm 3000
```

- Source: ["3 Ways to Create a Bootable Windows 11 USB With a Mac"](https://www.makeuseof.com/how-to-make-a-bootable-windows-11-usb-on-mac/)
