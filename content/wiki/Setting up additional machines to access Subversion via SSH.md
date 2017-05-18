---
tags: subversion wiki
---

Before going away for the weekend I wanted to set up my laptop so that I could access the [Subversion](/wiki/Subversion) repository via [SSH](/wiki/SSH). This article is the set of steps I had to perform to do this, and is a simplified version of the original configuration described in [Setting up multiple repository access methods with Subversion](/wiki/Setting_up_multiple_repository_access_methods_with_Subversion). The laptop is a clean install of a pre-release version of [Mac OS X](/wiki/Mac_OS_X), so it is effectively "empty" and has no configuration in place.

# Procedure

Check to see what's in the `~/.MacOSX/environment.plist`:

    defaults read ~/.MacOSX/environment

Nothing, so create it:

    mkdir .MacOSX
    defaults write ~/.MacOSX/environment SVN_SSH -string "/usr/bin/ssh -i /Users/wincent/.ssh/id_dsa_subversion"

Now run my SSH agent application (automatically sets up `SSH_ASKPASS`, `DISPLAY` and `SSH_AUTH_SOCK`), or set them up manually:

    defaults write ~/.MacOSX/environment SSH_ASKPASS -string "/Users/wincent/bin/SSHPassKey.app/Contents/MacOS/SSHPassKey"
    defaults write ~/.MacOSX/environment SVN_AUTH_SOCK -string "/Users/wincent/.ssh/agent.sock"
    defaults write ~/.MacOSX/environment DISPLAY -string "localhost"

Note that if you already have an ssh-agent process running or if you have one otherwise configured (for example, as a [launchd](/wiki/launchd) process) then there is no need to set the `SSH_AUTH_SOCK` variable.

Now connect to the iMac in the Finder and mount my other home directory so that the necessary pieces can be copied over:

    mkdir bin  
    cp -R /Volumes/wincent/bin/SSHPassKey.app bin/ 
    open bin/SSHPassKey.app
    cp /Volumes/wincent/.ssh/id_dsa_subversion .ssh/

For convenience, copy over [Subversion](/wiki/Subversion) config as well:

    mkdir .subversion
    cp /Volumes/wincent/.subversion/config .subversion/

Launch the SSH agent application with the option key held down so that you can add the private key file to the list of automatically added keys. Choose "Open at Login" from its Dock menu to make set-up automatic.

Finally, log out so that the environment changes will take effect. The `~/.ssh/config` file will need to be modified (or created) to contain the following:

    Host svn.wincent.com
      HostName svn.wincent.com
      User svn

# Extras

To make life a little bit more bearable on the unconfigured machine, copy over the following as well:

-   `.bash_profile`
-   `.inputrc`
-   `.profile`

I also find it pretty frusting to use the Terminal unless Option-Left and Option-Right are bound to `\033b` and `\033f` respectively.

For more information, see [Quickly setting up a machine for testing with a pre-release seed](/wiki/Quickly_setting_up_a_machine_for_testing_with_a_pre-release_seed).

# Note on the SSH agent application

The "SSH agent application" referred to in this article is not yet publicly released. To be notified when it is released add yourself to the [announcements mailing list](/wiki/announcements_mailing_list).
