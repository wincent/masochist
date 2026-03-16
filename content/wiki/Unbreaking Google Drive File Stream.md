---
tags: wiki google apple
title: Unbreaking Google Drive File Stream
---

Apple's OS security update applied to Mojave 10.14.6 today (2020-12-16) broke the Google Drive File Stream app. Tried the usual stop/start, delete/reinstall, and reboot tricks, along with moving `~/Library/Application Support/Google/DriveFS` to another location (forcing it to start from scratch) and some other tips found online like temporarily disabling/reenabling app permissions with `sudo spctl --master-disable`/`sudo spctl --master-enable`.

Logs at `~/Library/Application Support/Google/DriveFS/Logs/drive_fs.txt` showed:

```
utils_mac.cc:295:LoadFuseKext Failed to load_dfsfuse: OS version too new
```

Fortunately, solution is found [here](https://support.google.com/drive/thread/79270023?hl=en), from [here](https://github.com/pqrs-org/Karabiner-Elements/issues/2373#issuecomment-676121212).

1. As root, `xattr -l /private/var/db/KernelExtensionManagement` and confirm it has the `com.apple.rootless` attribute (it did).
2. As root, `chmod 755 /private/var/db/KernelExtensionManagement`.
3. Boot into recovery mode (restart while holding Command-R; not that even if machine is set to Colemak, you have to hold the physical R key from the Qwerty layout).
4. Open Disk Utility.
5. Mount "Macintosh HD".
6. Open Terminal.
7. `chmod 755 /Volumes/Macintosh\ HD/private/var/db/KernelExtensionManagement/Staging`
8. `chflags restricted /Volumes/Macintosh\ HD/private/var/db/KernelExtensionManagement`
9. Restart.
10. Bonus: permanently turn off the world's most annoying startup chime because you are sick of hearing it, with `sudo nvram StartupMute=%01`.

Fun facts:

- `restricted` is not mentioned in `man chflags`.
- `xattr` isn't in the path when booting in recovery mode, and if you access it directly (eg. `/Volumes/Macintosh HD/usr/bin/xattr`) it will blow up because it can't load the Python interpreter.
