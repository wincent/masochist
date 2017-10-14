---
tags: macos wiki
---

Notes made getting a re-imaged machine set-up (running macOS Sierra; the previous High Sierra install imploded).

These are mostly linear in nature, but there was some parallelism and back-and-forth involved because the Arq backup restore took over 24 hours to complete, so while that was happening I was going back to earlier items and augmenting them.

1. Switch to Colemak.
1. Turn off System Preferences → Keyboard → Shortcuts → Input Sources → Select the previous input source (Control-Space).
1. Accepted proposed software updates.
1. Trash unwanted corp-installed welcome document on Desktop.
1. Drag off unwanted Dock icons (Siri, Launchpad, Dashboard, Safari, Firefox, System Preferences, IT Technical Support, Cisco AnyConnect, Maps, Photos, iBooks).
1. Set-up dotfiles repo.

        mkdir code
        cd code
        git clone --recursive https://github.com/wincent/wincent
        cd wincent
        ./install

    - Hombrew install seems to hang. Control-C it to get better visibility.
    - Attempt cleanup `brew cleanup` to release locks (er, no, doesn't work; `brew doctor` doesn't either).
    - `cd ~/code/wincent/roles/homebrew/files && brew bundle`
    - Seeing as it got interrupted, `./install shell` (and then `chsh`).
    - Then `./install vim` (ugh, permissions issues throughout, requiring numerous `sudo chown -R`; I suspect the in-progress Arq backup is futzing with the permissions).
    - `./install defaults`
    - `./install ssh` (can't run this until backup is done — or rather, until GPG keys are on the disk — because we need to decrypt the encrypted files in the repo in order to do it).
    - `./install cron`
    - `./install misc`
        - And follow-up to this one, from `roles/misc/files` set up `user-icon.png` by drag-and-drop into Users & Groups preference pane.
1. Add Activity Monitor to Dock:
    1. Set to Open at Login.
    1. Set to show CPU History in Dock icon.
1. Log in to App Store:
    1. Install apps: Todoist, ScreenFlow 6, Monodraw, Fantastical 2, Marked 2, Textual 6, Relax Melodies Premium, Twitter, Transmit, Kindle, Net Monitor, xScope, Skitch, Keynote.
1. Add to Dock and set to Open at Login:
    1. Net Monitor
    1. Todoist
        1. Turn off Menu Bar icon.
    1. Fantastical 2
        1. Add iCloud (probably don't need this) using app-specific password in 1Password.
        1. Add Office 365 account (work).
        1. Add Google account (personal).
        1. Turn off Menu Bar icon.
        1. Under Preferences → Calendars customize items in the default calendar set (can omit most of them).
1. Set up 1Password (requires "Secret Key" — previously known as "Account Key"):
    1. Also install browser extension (you should be prompted to do this during set-up, but if not, see: https://agilebits.com/onepassword/extensions).
1. Restore from Arq backup:
    1. Launch installed app (installed via Homebrew).
    1. Enter license key (from 1Password).
    1. Add AWS backup destination using info from 1Password, re-use existing bucket.
    1. Add Google Drive destination.
        1. Choose "Do NOT use Appdata Folder" (because that wasn't an option when I originally set up).
    1. Start the restore by finding the last backup, clicking the home folder and clicking "Restore..." and "Overwrite...".
    1. Preferences (not sure if these will come through anyway with the restore):
        1. Back up using administrator privileges
        1. Show hidden files in file selection dialog
        1. Include file list in backup logs and email reports
1. Sign in to Chrome.
    - **NOTE:** This obviates the need to turn off unwanted default corp search engine, or install 1Password extension (seems I have two versions installed: need to uninstall one of them; will keep the beta I guess).
1. Turn on Night Shift (System Preferences → Displays → Night Shift).
1. Set-up hot-corners (System Preferences → Desktop & Screen Saver → Screen Saver → Hot Corners...)
1. Launch Karabiner-Elements (not sure if Homebrew does this already, but check it anyway).
1. Launch Hammerspoon:
    1. Enable accessibility features.
    1. Launch Hammerspoon at login (on)
    1. Show Dock icon (off)
    1. Keep console window on top.
1. Manually install Adobe Source Code Pro by copying from roles/fonts/files.
    1. Some follow-up needed though (prefs in iTerm); will see if they come down with backup restore or not.
1. Make Colemak the default layout (hm, didn't seem to work): see: https://wincent.com/wiki/Making_Colemak_the_default_layout_at_the_OS_X_login_prompt
1. Clone corporate repos.
1. iTerm:
    1. Move cursor to the front of line
        1. ⌘+← Send Hex Codes: 0x01
    1. Move cursor to the end of line
        1. ⌘+→ Send Hex Codes: 0x05
    1. Move cursor one word left
        1. ⌥+← Send Hex Codes: 0x1b 0x62
    1. Move cursor one word right
        1. ⌥+→ Send Hex Codes: 0x1b 0x66
1. `arc install-certificate` (needed to do anything useful with arc).
1. Manually run through prefs (can't be bothered waiting for backup restore to finish).
    1. System Preferences → Dock → Automatically hide and show the Dock.
1. Download and install https://github.com/chrstphrknwtn/epoch-flip-clock
1. Launch and set up Dropbox.
1. Manually restore `~/.gnupg` and `~/.ssh` — want access to keys (note: can do this even though another restore is already running); then:
    - `gpg --list-secret-keys` can't see old keys... this is a gpg2 vs gpg thing:

            brew install gpg1
            gpg1 —list-secret-keys # works
            gpg1 —export-secret-keys > v1-secret-key.export
            gpg1 —export > v1-public-key.export
            gpg —import v1-public-key.export v1-secret-key.export
            gpg —list-secret-keys # now works
            gpg —list-public-keys # now works
            rm v1-public-key.export v1-secret-key.export

    - In dotfiles repo: `vendor/git-cipher/bin/git-cipher decrypt`
1. Restore `~/Library/Preferences` (too sick of waiting for full restore to finish)
1. Set up passage:

        go get github.com/wincent/passage (http://github.com/wincent/passage)
        go get github.com/keybase/go-keychain (http://github.com/keybase/go-keychain)
        sudo cp $(which passage) /usr/local/bin/
        launchctl load -w -S Aqua ~/Library/LaunchAgents/com.wincent.passage.plist (that file already on disk, restored from backup)

    - Need to restore items from backup keychain:
        1. Restore from Arq to `~/Backups/Keychains/`
        1. Rename to `2017-10-09-login.keychain-db`
        1. Add to Keychain Access and unlock
        1. Recreate items in the main keychain rather than copying them across (sick of the "test item" name that I can't change); there are 4 items, listed in my dotfiles repo README.
1. Run Alfred (settings came in via Backup)
    1. Disable Spotlight shortcut in System Preferences → Keyboard → Shortcuts → Spotlight → Show Spotlight search
1. Run Bartender; settings came in via Backup, except for:
    1. Preferences → General → Launch Bartender at Login
1. Run iStat Menus (settings came in via Backup)
1. `sudo chown -R $USER:"$(id -gn $USER)" $HOME` (quotes because of bogus space in Active Directory group name)
    1. After this, retry installing Safari 1Password extension (works).
1. Set desktop pic to High Sierra (restored from backup).
1. Add Corpus release and debug builds to Dock
1. Re-auth Kindle app, and log in to Amazon to delete old device.
1. Reboot to flush out remaining issues
1. Set Hammerspoon to launch at login (again)
1. Get mail search history working again: `rm -rf ~/mutt/tmp/notmuch.history` (was a directory full of files; caused `IOError: [Errno 21] Is a directory`; this system has a different version or readline it seems)
1. Unbreak Markdown mail sending (was gracefully degrading):

        cd ~/.mutt/scripts
        gem install bundler
        bundle install

1. Finalize Arq set-up:
    1. Adopt Arq backup sets
    1. Schedule daily backups
    1. Set up email updates
    1. Set up exclusions in Time Machine (see exclusion list in Corpus, "Arq backup notes")
    1. Back up only on selected devices, selected networks.
1. Boot Isolator and set it to launch at login.
