---
tags: bash lion zsh macos wiki
---

# Via the [command line](/wiki/command_line)

On [Mac OS X](/wiki/Mac_OS_X) merely running `sudo chsh` is not enough, as [Lion](/wiki/Lion) doesn't treat `/etc/passwd` as the definitive authority of user account information, but instead defers to a thing called "Directory Service" that is managed using `sudo dscl`.

For example, changing your user's shell to `/usr/local/bin/zsh`:

    $ sudo dscl
    > list Local/Default/Users
    > read Local/Default/Users/<username>
    > change Local/Default/Users/<username> UserShell /bin/bash /usr/local/bin/zsh

# Via the [GUI](/wiki/GUI)

Go to the "Users & Groups" pane of the System Preferences application:

1.  Click the padlock to unlock the pane
2.  Right click on your user account in the list on the left, and select "Advanced Options"
3.  Select the desired shell from the list of available shells

Note that if you've added a custom shell to `/etc/shells` it may not be visible in the list until your next login.
