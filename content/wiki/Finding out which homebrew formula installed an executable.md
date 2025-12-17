---
tags: wiki homebrew
title: Finding out which homebrew formula installed an executable
---

Say you want to find out what formula was responsible for installing `/opt/homebrew/bin/gpg-agent`, you can use `readlink` to see where the symlink points to:

```console
$ readlink /opt/homebrew/bin/gpg-agent
../Cellar/gnupg/2.4.8/bin/gpg-agent
```

Then, to learn more about the formula:

```console
$ brew info gnupg
==> gnupg: stable 2.4.8 (bottled)
GNU Privacy Guard (OpenPGP)
https://gnupg.org/
Installed
/opt/homebrew/Cellar/gnupg/2.4.8 (144 files, 15.6MB) *
  Poured from bottle using the formulae.brew.sh API on 2025-05-19 at 10:10:27
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/g/gnupg.rb
License: GPL-3.0-or-later
==> Dependencies
Build: pkgconf ✔
Required: gnutls ✔, libassuan ✔, libgcrypt ✔, libgpg-error ✔, libksba ✔, libusb ✔, npth ✔, pinentry ✔, readline ✔, gettext ✔
```
