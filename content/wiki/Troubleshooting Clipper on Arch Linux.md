---
tags: wiki
title: Troubleshooting Clipper on Arch Linux
---

# Install from AUR

Using `yay`, for example:

```
yay -S clipper-git
```

As indicated in the [PKGBUILD](https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=clipper-git), installing prepares you to run Clipper but actually running it is up to you:

```
mkdir -p ~/.config/systemd/user
cp /usr/share/clipper/clipper.service ~/.config/systemd/user/clipper.service
systemctl --user daemon-reload
systemctl --user enable clipper.service
systemctl --user start clipper.service
```

# Verify that the service is running

```
systemctl --user status clipper.service
```

# View the logs

```
journalctl --user --unit clipper.service
```

# Tail the logs

```
journalctl --user --unit clipper.service -f
```

# Confirm that `$DISPLAY` is set

```
echo $DISPLAY
```

Without `$DISPLAY`, `xclip` won't work.

# Test that `xclip` works

```
echo hi | xclip -selection clipboard
```

Verify that the contents actually are in the clipboard by pasting into another application or by running, somewhat tautologically, `xclip` again:

```
xclip -o -selection clipboard
```

# Test that the Clipper socket exists

```
$ find ~ -maxdepth 1 -type s -name .clipper.sock
/home/wincent/.clipper.sock
```

# Try piping something to the socket

Note `~` won't work; you have to spell out the entire path:

```
echo stuff | socat - UNIX-CLIENT:$HOME/.clipper.sock
xclip -o -selection clipboard
```

(Using `xclip` to confirm that it made it into the clipboard.)
