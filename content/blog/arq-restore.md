---
description: Notes made while recovering an Arq backup
tags: blog
title: Arq restore notes
---

About a month ago, [my personal laptop died](/snippets/1180), requiring the logic board to be replaced. All the data on the previous incarnation of the machine was irrecoverably lost, requiring me to restore from backup. Unless my memory deceives me, this was the second time I've restored a backup made with [Arq](/wiki/Arq)[^superduper].

[^superduper]: The other backup tool that has saved my hide in the past is [SuperDuper!](/wiki/SuperDuper!), but on this occasion I didn't have access to my physical (SuperDuper!) backup, so restoring from the cloud (Arq) was my only option.

This time, things didn't go quite as smoothly, but overall, it still worked out ok. I'm going to put some notes here about the road bumps that I ran into while restoring, for reference by my Future Self™. Given that "past road bumps are no guarantee of future road bumps", I'm dumping this in a blog article rather than a wiki post, as I consider these to be more "moment in time" observations than an enduring record of what to do in the future.

A SuperDuper! backup is a full disk copy, and pretty close to being something that you can just restore and then run with. Arq, on the other hand, only backs up my home folder, which means I need to reinstall a bunch of apps after doing the restore. Additionally, there appear to be quite a few settings (particularly permission-related settings) that don't survive across a backup/restore cycle, and these need to be set up manually afterwards.

First steps:

- Install Arq, so I can initiate the restore.
- Install 1Password, so I can get the credentials necessary for the restore.
- Actually start the restore; after many hours, Arq used all the memory on the system, requiring me to start again[^glacier].
- Sign in to iCloud, because apparently thanks to Apple "magic" none of my photos were actually on my device, or at least, the couldn't be restored by Arq; after signing in, photos start syncing and I eventually got access to them all again.

[^glacier]: Restarting is a bit annoying, because I use Glacier storage for my backups, meaning that you can't just start downloading the data from the cloud; instead, you request for it to be made available and then wait 5 hours before actually beginning the download. Downloading from Glacier also hurts the wallet a bit, to the tune of about a hundred bucks for all the retrieval costs associated with the repeated attempts.

Next up, set the hostname, because otherwise Fig won't know what machine it is running on, and my machine will only get a lowest-common-denominator set-up as opposed to the specific one I want for this machine:

```
scutil --set HostName latina
scutil --set ComputerName 'MacBook Pro'
scutil --set LocalHostName latina
```

We then try running `git` in terminal, which triggers a command line tools download and install, and can finally at that point run `install` under `~/code/wincent/`. That died with:

```
$HOME/code/wincent/vendor/n/bin/n: fork: Resource temporarily unavailable
```

A `bin/n --cleanup` should supposedly delete all versions, but I ended up having to `rm -r vendor/node/n/versions` to actually get `n` working, at which point I could run `install` again.

You have to run `vendor/homebrew/install.sh` in order for this to work, and additionally you have to open a new window after installing in order to have the Homebrew directory appear in your `$PATH` (merely running `hash -r` isn't going to cut it).

Homebrew helpfully points out the following:

```
stderr: 'Error: homebrew/bundle was deprecated. This tap is now empty and all its contents were either deleted or migrated.\n',
```

So I deleted than, and it then says:

```
'Error: No available formula with the name "bun". Did you mean bup, buf or run?\n'
```

Turns out that you need fully-qualified (tap + brew) formula and cask names, as noted in [Homebrew/brew#21416](https://github.com/Homebrew/brew/issues/21416), so I fixed that.

There are a number of apps that you have to open or twiddle in order to get things working, even though Homebrew installs them:

- Karabiner-Elements (have to open it and grant privileges).
- Hammerspoon (have to open once, let it prompt for permission, set to load at login, hit Ctrl-Opt-Command-F2 to set two-monitor layout and F4 to set horizontal display arrangement).
- Raycast (somehow it couldn't read its settings, so I had to import a backup, set Command-Space in the System Settings to not open Spotlight, grant accessibility access for snippets to work, and the same for 1Password while I was at it, and set it to launch at login).
- Before using tmux, had to go to System Settings -> Keyboard -> Shortcuts -> Input Sources and turn off these trouble-makers:
  - Select the previous input source (ctrl-space)
  - Select next source in input menu (ctrl-option-space)
- Kitty (have to open it and set it to stay in the Dock)
- Godspeed (open it, set it to stay in dock, launch at login)
- `terminal-notifier`: run a command like `terminal-notifier -title hi -message there` so it appears in System Settings; then you can allow notifications from it.
- Resilio Sync (set to launch at login)
- Orion (installed via cask, but have to open and set to default browser in System Settings)
- CleanShot X (open and set to start at login, grant accessibility settings, turn off conflicting shortcuts in System Settings)
- iStatMenus (launch and grant permissions)

And general house-keeping:

- Remove cruft from dock.
- Dock settings: turn hiding on (I thought I had a default for that; maybe all I needed was to log out and in again for it to take effect)
- System settings: under the lock screen settings, require password immediately.

For some reason, I couldn't get Screenflow to make use of my microphone (it would claim I needed to grant it access to the microphone, but it didn't actually ask for access and there was no way to force it in the System Settings). In the end, I blew away the settings and data and it eventually prompted:

```
rm -rf \
  ~/Library/Preferences/net.telestream.screenflow10.plist \
  ~/Library/Preferences/WSG985FR47.net.telestream.screenflowhelper.plist \
  ~/Library/Containers/net.telestream.screenflow10 \
  "~/Library/Group Containers/WSG985FR47.net.telestream.screenflow10" \
  "~/Library/Application Support/ScreenFlow*"
```

The above is what I've discovered so far over the course of several days. Hopefully that's the end of it!
