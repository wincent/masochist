---
tags: wiki macos
---

These are notes made while trying to set up APFS-to-APFS backups with SuperDuper!. I had an external drive that I had formatted with the Apple Partition Map, mistakenly thinking it was the "best" format because the name suggested it was the one tailored to macOS. Turns out that was wrong and it is a legacy scheme; the GUID partition map is the one you want. However, the Disk Utility in macOS High Sierra provides no way to change the partition map scheme, even when you erase the disk. Instead, you must format it from the command-line:

```bash
# - Format as Journaled HFS+.
# - Name the volume "Backup".
# - Use a GUID partition table.
diskutil eraseDisk JHFS+ Backup GPT disk2
```

# Aside: Converting to APFS and encrypting

You can then convert to APFS using the item in the "Edit" menu of the Disk Utility. And then you can turn on encryption with:

```bash
diskutil list # Figure out the device name of the "Backup" volume.
diskutil apfs listCryptoUsers /dev/disk3s1
diskutil apfs encryptVolume /dev/disk3s1 -user disk
```
