---
tags: wiki
---

Foolishly decided to upgrade more or less immediately when High Sierra came out, even though I usually prefer to wait for a couple of point releases (sometimes more when waiting for updates to critical third-party software). The allure of being rid of HFS+ once and for all was just too great.

Fair number of horror stories on Twitter about stuck installs etc but I fortunately didn't hit any of those snags. Instead, I had a few others.

# Can't log in after installing

Fruit of the fact that I have a corp-managed laptop with a network account. People have reported difficulty unlocking the encrypted disk and then logging in even when unlocked. I basically assumed both issues might be at play so ran through the suggested fixes for both:

1. Reboot in recovery mode (Command-R), which required me to do a hard reset (because I couldn't even restart without the system accepting my password); this explains some issues with orphaned socket files that I later ran into (see below).
2. In the Terminal: `diskutil apfs list` (to find the disk name, eg. `disk2s1`).
3. `diskutil apfs unlockvolume disk2s1` (to mount).
4. `diskutil apfs updatePreboot disk2s1` (this should solve any issues unlocking the disk).
5. `rm /Volumes/$VOL/var/db/.AppleSetupDone` (this to allow me to create a local, non-network account).
6. `reboot`
7. Log in to local account.
8. `sudo passwd $OTHER_USER`
9. Reboot.
10. `sudo chefctl -i` (machine is managed by Chef).
11. Remove local account.

# Other issues

* Karabiner-Elements needs to be explicitly enabled in the Security pane of the System Preferences.
* `xcode-select --install` didn't work for me, claiming the command-line tools were not available to download; nevertheless, I have Xcode 9 on the system.

## `vim`, `nvim` are broken

Here I thrashed around trying to reinstall.

```bash
brew update
brew upgrade
brew uninstall neovim
brew install neovim         # Nope, still crashing
brew uninstall neovim
brew install --HEAD neovim  # Still crashing, Vim too.
sudo gem install neovim     # Works.
brew uninstall vim
brew install --HEAD vim     # Still crashing, but will just use nvim.
```

After this, rebuild Command-T (ie. `make clean && ruby extconf.rb && make`). Didn't need to reinstall everything (ie. `brew list | xargs brew reinstall`) but might be worth a thought at some point.

# Other steps

* Turn on iCloud recovery key again (apparently, Apple got rid of this when they rolled out Two-Factor auth a while back because it was too easy for people to totally lock themselves out, but looks like it is back).
* `brew doctor`, just in case.

## Clipper is broken

Random attempt at uninstalling/reinstalling didn't work, then I realized a stale socket file was lying around preventing it from starting:

```bash
brew uninstall --force clipper  # --force because I have multiple versions.
brew install clipper
brew services start clipper     # Claims it is already running.
brew services restart clipper   # Nope, still not working.
rm ~/.clipper.sock              # Found the culprit.
brew services restart clipper   # Works.
```

## Mutt set-up is broken

Mutt works, but imapfilter can't log in. Turns out that it just can't get the password info out of Passage. Same fix as for Clipper:

```
rm ~/.passage.sock
```

Note I didn't even need to restart it, `launchd` did it for me automatically.

### Sending mail

This was broken due to missing gems. I tried installing them:

```bash
sudo gem install mime-types-data mime-types mail
```

But they didn't match the lockfile and I hadn't bothered to pin explicit versions, so I tried to blow away the lockfile and install again, but Bundler was broken too and I couldn't install it:

```bash
sudo gem install bundler # no implicit conversion of nil into String
sudo gem update --system
sudo gem install bundler # You don't have write permissions for the /usr/bin directory.
gem install bundler # You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.
```

`gem environment` and `sudo gem environment` show the same thing:

```
INSTALLATION DIRECTORY: /Library/Ruby/Gems/2.3.0
EXECUTABLE DIRECTORY: /usr/bin
```

Solution was to add `gem: --bindir /usr/local/bin` to the `~/.gemrc`, then `sudo gem install bundler` worked, and `bundle` did too.

### Searching mail

Broken because the `~/.mutt/tmp/notmuch.history` history file format needed to be updated as per [this Stack Overflow answer](https://stackoverflow.com/a/17824899/2103996):

* Insert header of `_HiStOrY_V2_`.
* Replaces spaces with `\040` (ie. `:%s/\v /\\040/g` in Vim).
