---
tags: wiki
title: Formatting an encrypted USB drive on macOS
---

Most USB sticks come ExFAT formatted, so, this is what I did to try and get an encrypted APFS volume onto a USB stick, first in the UI (impossible) and then falling back to the terminal:

1. In Disk Utility, chose "Erase..." and select "Mac OS Extended (Journaled)" (you can't actually select APFS in the UI app, nor can you convert after formatting as HFS+, because the partition table will be in GPT format).
2. In the terminal, `diskutil list` to get the device (eg. `/dev/disk4` or similar).
3. `diskutil eraseDisk JHFS+ $VOLUME_NAME GPT disk4`
4. `diskutil unmountDisk disk4`
5. `diskutil apfs convert /dev/disk4s2` (note that `/dev/disk4s1` is usually the EFI partition).
6. `diskutil list` to get "synthesize" APFS volume device (in this case, `/dev/disk6s1`).
7. `diskutil apfs listCryptoUsers /dev/disk6s1`
8. `diskutil apfs encrypt /dev/disk6s1 -user disk`
9. `diskutil apfs list` to see encryption progress (which occurs in the background).
