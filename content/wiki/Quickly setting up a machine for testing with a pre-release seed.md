---
tags: leopard wiki
---

# Note

These notes were superseded by "[Pre-release Leopard set-up notes](/wiki/Pre-release_Leopard_set-up_notes)".

For notes on setting up the final release, see "[Leopard set-up notes](/wiki/Leopard_set-up_notes)".

# Set-up

When working on a pre-release seed I try not to customize the environment too much because I may have to uninstall and reinstall many times. But there are some changes that I find that I just can't live without. Here is a quick list.

Assuming that the home directory of my production (non-pre-release) system is mounted at `/Volumes/path_to_home_folder`:

    RESOURCES=/Volumes/path_to_home_folder
    cd
    cp $RESOURCES/.bash_profile .
    cp $RESOURCES/.inputrc .
    cp $RESOURCES/.profile .
    mkdir .ssh
    cp $RESOURCES/.ssh/id_dsa .ssh
    cp $RESOURCES/.ssh/id_dsa_subversion .ssh
    cp $RESOURCES/.ssh/config .ssh
    mkdir .subversion
    cp $RESOURCES/.subversion/config .subversion
    mkdir .MacOSX
    defaults write ~/.MacOSX/environment SVN_SSH -string "/usr/bin/ssh -i /Users/wincent/.ssh/id_dsa_subversion"
    mkdir bin

Copy my SSH management application into `bin` and double-click it while holding down the option key. In the preferences window, add the `id_dsa` and `id_dsa_subversion` identities and set the app to launch at login. Log out and log in again so that the environment variable settings can take effect.

I also find it pretty frusting to use the Terminal unless Option-Left and Option-Right are bound to `\033b` and `\033f` respectively; so pick up my settings like so:

    cp $RESOURCES/Library/Preferences/com.apple.Terminal.plist Library/Preferences/
