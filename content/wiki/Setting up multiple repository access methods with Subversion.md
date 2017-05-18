---
tags: subversion wiki
---

# Motivation

I currently (September 2006) offer [Subversion](/wiki/Subversion)-based access to the source code for a number of projects. This read-only access occurs over unencrypted channels. These are notes I've made while setting up encrypted access via [SSH](/wiki/SSH) for the purposes of write-access (when committing). Even though [Subversion](/wiki/Subversion) never actually passes passwords over the network as plaintext, and even though the per-transaction design of the protocol is such that vulnerability to snooping-based attacks is minimal, I still think it's good practice to perform write-access over an encrypted channel.

# Background

As noted in the "[Supporting Multiple Repository Access Methods](http://svnbook.red-bean.com/nightly/en/svn.serverconfig.multimethod.html)" section of [the Subversion book](http://svnbook.red-bean.com/), accessing the repository simultaneously via various means is complicated.

Anonymous access is mediated by the `svnserve` daemon running as the `svn` user which has exclusive access to the repository. When accessing via `svn+ssh` then the access is performed as the user who authenticated via [SSH](/wiki/SSH), not necessarily the `svn` user and this can cause ownership and permissions conflicts. The solution must carefully take this potential conflict into account.

# Set-up

-   [This article](http://www.nabble.com/svnserve-and-launchd-in-OS-X-t2314532.html) offers an excellent guide to setting up access.
-   Subversion itself comes with an "[SSH tricks](http://svn.collab.net/repos/svn/trunk/notes/ssh-tricks)" document.

## Key pair generation

Each unique user that needs write access to the repository will need a key pair.

    ssh-keygen -t dsa -f ~/.ssh/id_dsa_subversion
    chmod 400 ~/.ssh/id_dsa_subversion

## Client-side set-up

Set the `SVN_SSH` environment variable:

    export SVN_SSH="/usr/bin/ssh -i /Users/wincent/.ssh/id_dsa_subversion"

To make this setting available to GUI-level apps such as [SmartSVN](/wiki/SmartSVN) and [Xcode](/wiki/Xcode) you should also edit your `~/.MacOSX/environment.plist` file accordingly. A minimal `environment.plist` file might resemble this:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
            <key>SVN_SSH</key>
            <string>/Users/wincent/.ssh/id_dsa_subversion</string>
    </dict>
    </plist>

You would set such a variable with the following command:

    defaults write ~/.MacOSX/environment SVN_SSH -string "/Users/wincent/.ssh/id_dsa_subversion"

I also had to add the following to my `.ssh/config` to prevent [SSH](/wiki/SSH) from trying to authenticate me as user `wincent` instead of user `svn`:

    Host svn.wincent.com
      HostName svn.wincent.com
      User svn

## Server-side set-up

    sudo -s
    cd /var/lib/svn
    sudo -u svn mkdir .ssh
    chmod 700 .ssh
    cd .ssh
    sudo -u svn touch authorized_keys
    chmod 400 authorized_keys

Edit the `authorized_keys` file to include the public key (`~/.ssh/id_dsa_subversion`) created above; the following is split across multiple lines for readability but in the actual file it must appear all on the same line. Additional users would each have their own line in the file.

    command="/usr/local/bin/svnserve -t 
                                     --tunnel-user=wincent
                                     -r /var/lib/svn/repositories",
    no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty 
    ssh-dss AA...WA== wincent@cuzco.local

Note that there are no spaces between the quoted `command`, the trailing commas, and the `no-port-forwarding` specification and the other restrictions.

The public key itself begins with a key-type marker, `ssh-dss`, followed by the key itself (abbreviated here to `AA...WA==`, and is followed by a comment (in this case, my username and the name of the host on which I generated the key).

## Testing

Perform a test checkout via `svn+ssh` to confirm that everything is working as expected:

    svn co svn+ssh://svn.wincent.com/project-name/trunk

In order for this to work I found that I had to set the shell of the `svn` user to `/bin/sh` (previously it was `/sbin/nologin`). Note that even though a login shell is defined for that user it is not possible to actually gain a login shell because logins are explicitly disallowed for the `svn` user in the `/etc/shadow` file (that is, the password field contains only "\*", indicating that the logins are not permitted for that user).

## Using `ssh-agent`

If your private key is protected by a passphrase (and it probably should be) then in typical usage Subversion will prompt you many, many times for the passphrase as it makes multiple connection attempts.

There are two ways to avoid these repeated prompts:

1.  Do not protect your private key with a passphrase: with appropriate filesystem permissions, this is probably about as secure as the standard Subversion method of storing your passwords as plaintext in your `~/.subversion/` directory (although as of Subversion 1.4.0 passwords are stored securely in the keychain; see "[Keychain-based storage of Subversion passwords](/wiki/Keychain-based_storage_of_Subversion_passwords)").
2.  Use `ssh-agent` and `ssh-add`: this is the more secure option, detailed below.

You can launch `ssh-agent` from a Terminal window and it will set the required environment variables, `SSH_AUTH_SOCK` and `SSH_AGENT_PID`. The problem with this approach is that such environment variables won't be available to window-based programs like [Xcode](/wiki/Xcode). Modifying the `~/.MacOSX/environment.plist` file doesn't necessarily help either; for one thing, the value of `SSH_AUTH_SOCK` will randomly vary (incorporating both a random string component as well as the process ID number of the `ssh-agent` process; for example, `/tmp/ssh-A4yghslTsh/agent.10578`) and the file is read only once at login (that is, if you make changes *after* login they will only be read upon the *next* login by which time the information will be out of date).

A possible workaround is to set only the `SSH_AUTH_SOCK` variable and use the `-a` switch to force the `ssh-agent` to use that (known ahead of time) value, something like `~/.ssh/agent.sock`, and forget about the `SSH_AGENT_PID` variable seeing as it can't be known ahead of time (although this may break certain commands such as `ssh-agent -k`). If the appropriate permission are set on the `~/.ssh/` directory (700, for example) then the use of a fixed socket file should not pose any security risk. The `SSH_AUTH_SOCK` variable should also be set in your `~/.bash_profile`.

You could put such settings in place with the following commands:

    defaults write ~/.MacOSX/environment SSH_AUTH_SOCK -string "/Users/wincent/.ssh/agent.sock"
    echo 'export SSH_AUTH_SOCK="/Users/wincent/.ssh/agent.sock"' >> ~/.bash_profile

Once that set-up is in place all that's required is to actually run the `ssh-agent` process at login and kill it off at logout. There are three possible ways of doing this:

1.   Launch it manually from the terminal once and once only per session.
2.  Launch it using [launchd](/wiki/launchd) (see [example](http://www.opendarwin.org/~landonf/misc/launchd-sshagent/); this example shows how to patch `ssh-agent` for use with `launchd` but it is not suitable for use here because the `SSH_AUTH_SOCK` environment variable can't be known prior to login time).
3.  Write a wrapper script or program to launch it, and add the wrapper to your login items.

I have not tested whether this `ssh-agent` set-up works with Xcode's integrated Subversion support (I do all my interaction with Subversion from the command line or from within SmartSVN).

## Keychain integration

The above methods can be made truly passwordless (that is, even the initial passphrase prompts can be eliminated) by storing the passphrases in the login keychain. When the user logs in he/she effectively unlocks the login keychain and the passphrases stored therein can be accessed without intervention. In this way we get the convenience of passwordless operation with none of the drawbacks of storing passwords insecurely on the disk.

I am currently working on an application that provides the following functionality:

-   Launches `ssh-agent` at login
-   Automatically adds identities with `ssh-add`
-   Provides a GUI for entering passphrases (for use from within GUI apps)
-   Optionally stores passphrases in the login keychain
-   Provides a GUI for adding/removing and enabling/disabling identities
-   Checks environment variables at launch and offers to correct any problems detected

The above functionality is already implemented and working. If people express and interest I may release the software publicly and potentially add more features.

## Working copy switching

    svn switch --relocate svn://svn.wincent.com/project-name/trunk \
                          svn+ssh://svn.wincent.com/project-name/trunk

## See also

-   [Setting up additional machines to access Subversion via SSH](/wiki/Setting_up_additional_machines_to_access_Subversion_via_SSH)
