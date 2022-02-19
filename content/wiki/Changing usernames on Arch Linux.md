---
tags: wiki arch linux
title: Changing usernames on Arch Linux
---

This is obviously fraught with peril, but given that I have scripts to recreate my Arch install from scratch pretty easily, I thought, what the heck. Logged in as root, and ensuring that no processes owned by the old username were still running (had to `kill` those off):

```
# usermod -l $NEW_LOGIN $OLD_LOGIN
# usermod -m -d /home/$NEW_LOGIN $NEW_LOGIN
# reboot
```

I then had to re-run my dotfiles install script, because I had a bunch of symlinks in my home directory of the form:

```
.zshrc -> /home/$OLD_LOGIN/code/wincent/aspects/dotfiles/files/.zshrc
```

that obviously needed to be freshened to:

```
.zshrc -> /home/$NEW_LOGIN/code/wincent/aspects/dotfiles/files/.zshrc
```
