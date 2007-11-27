---
tags: leopard svk
---

# Background

Having to repeatedly install new [Leopard](/wiki/Leopard) seeds I wanted to record some set-up notes here to help guide me through the repetitive steps that I have to go through each time in order to get things configured the way I like.

There is nothing really specific to [Leopard](/wiki/Leopard) in these notes; I would basically have to go through the same steps in order to set up [Tiger](/wiki/Tiger) for basic development use.

These notes replace the shorter, older version in "[Quickly setting up a machine for testing with a pre-release seed](/wiki/Quickly_setting_up_a_machine_for_testing_with_a_pre-release_seed)".

For notes on setting up the final release, see "[Leopard set-up notes](/wiki/Leopard_set-up_notes)".

# Rationale

Given the potential instability of prerelease OS seeds I don't want to do any data migration or sharing. I basically want a clean install with just the minimum of configuration and set-up to get it into a workable state.

# Pre-install

As the seeds become more reliable and usable I spend more time running them and inevitably invest more time making my working environment comfortable. In the lead-up to the final [Leopard](/wiki/Leopard) release I start making tar archives of my home directory prior to upgrading (and the "upgrades" are always clean installs because I want to keep the seed installs as pristine and reliable as possible). I can then use these archives to take some shortcuts when setting up after installation (for example, extracting my `work` folder which already contains a bunch of [Git](/wiki/Git) repositories).

I use `tar` like this to create the needed archive:

    BACKUPDIR="/Volumes/volume_containing_previous_leopard_install/Users/wincent"
    TARGETVOL="/Volumes/volume_on_which_to_store_the_backup"
    sudo tar -cv -f "${TARGETVOL}/wincent-9a466.tbz2" --bzip2 -C "${BACKUPDIR}" .

    # inspect contents of archive
    bzcat "${BACKUPDIR}/wincent-9a466.tbz2" | tar -t

# First boot

-   Run software update immediately
-   Install [Xcode](/wiki/Xcode)
-   Lower privileges

I don't like to run as an administrator for day-to-day use, principally to minimize the potential impact of security holes. So I create a new user account with administrator privileges and then drop those privileges from my principal account.

# Preferences

There are some preferences which I just have to change to prevent madness:

-   Keyboard
    -   Raise key repeat rate to maximum
-   Mouse
    -   Enable secondary button
    -   Make scroll ball act as "Button 3"
    -   Turn off "squeeze" action
-   Sound
    -   Turn off "Play user interface sound effects"
    -   Turn off "Play feedback when volume is changed"
    -   Turn off "Play Front Row sound effects"
    -   Turn down "Alert volume" close to minimum

Useful:

-   Appearance
    -   Increase number of recent items
-   Sharing
    -   Change computer name to something short, for example "leopard"
-   Date & Time
    -   Make menu bar clock show seconds

Necessary in untrusted environments:

-   Security:
    -   Turn on "Disable automatic login"
    -   Turn on "Require password to wake this computer from sleep or screen saver"

Miscellaneous:

-   Desktop and Screen Saver
    -   Set up hot corners
    -   Start screen saver after 5 minutes of inactivity
-   Exposé and Spaces
    -   Enable Spaces (four groups)
-   Energy Saver:
    -   Set the computer to never go to sleep
-   Safari:
    -   Set "New windows open with" to "Empty Page"
    -   Turn off 'Open "safe" files after downloading"
    -   Turn on AutoFill for "User names and passwords"
    -   Select "Show Status Bar" and "Show Tab Bar"

# Developer tools

## Terminal

-   Add [Terminal](/wiki/Terminal) to [Dock](/wiki/Dock) (and while you're there remove all the crud that doesn't need to be in there)
-   Setup preferences:
    -   Black on light yellow (FFFFCC) color scheme
    -   Windows should be 132 columns by 54 rows
    -   Turn off "Set LANG environment variable on startup" (makes [Perl](/wiki/Perl) tools complain loudly)
    -   Bind Option-Left and Option-Right to \\033b and \\033f respectively (word-based movement); in order to set these up you have to paste in those strings.
-   Set up `sudo`:

Must add a line like this:

    wincent ALL=(ALL)       ALL

To the `sudoers` file:

    su admin_username
    sudo visudo
    exit

-   Setup work directory and transfer useful files across from previous install:

<!-- -->

    # or, if you have a tar archive of the previous install
    mkdir ~/tmp
    cd ~/tmp
    cp path_to_archive/archive.tbz2 .
    tar xjvf archive.tbz2
    mv trabajo ../

    # and while we're here...
    mv bin .MacOSX .ssh .bash_profile .gitaliases .gitconfig .gitignore .gitk .gnupg .init.ae .inputrc .subversion ../
    cd ~/trabajo/vendor/aee/aee-2.2.15b
    make clean
    make
    sudo make install
    cd ../../ee/easyedit-1.4.6
    make clean
    make
    sudo make install
    cd ../../git/gnupg-1.4.7
    make clean
    ./configure
    make
    make check
    sudo make install
    cd ../git-1.5.3.2
    make clean
    make prefix=/usr/local all
    make prefix=/usr/local test
    echo $?
    sudo make prefix=/usr/local install
    cd ..
    sudo tar xjv -C /usr/local/man -f git-manpages-1.5.3.2.tar.bz2
    cd ../wget/wget-1.10.1
    make clean
    ./configure
    make
    make check
    sudo make install
    cd ../../ragel/ragel-5.24
    ./configure
    make
    cd test
    ./runtests 
    cd ..
    sudo make install
    cd ../../doxygen
    hdiutil attach Doxygen-1.5.3.dmg 
    sudo ditto /Volumes/Doxygen /Applications/Doxygen
    sudo mv /Applications/Doxygen/Doxygen.app /Applications/
    sudo rm -r /Applications/Doxygen
    hdiutil detach `hdiutil info | grep "/Volumes/Doxygen" | awk '{print $1}'`

-   Log out and log in again for environment settings to take effect

## Essential software

-   Install SSHPassKey.app into `~/bin/` (if you didn't already do it above)
    -   Launch while holding down the Option key so as to add in [SSH](/wiki/SSH) identities to register at launch time
        -   `~/.ssh/id_dsa`
        -   `~/.ssh/id_dsa_subversion`
        -   `~/.ssh/id_dsa_git`
    -   Set SSHPassKey.app to run at login time

# See also

-   [Installing Git 1.5.2.4 on Mac OS X Leopard](/wiki/Installing_Git_1.5.2.4_on_Mac_OS_X_Leopard)

