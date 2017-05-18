---
title: Creating new daemon users on Leopard
---

I just made a curious realization while trying to build [MySQL](http://www.wincent.com/knowledge-base/MySQL) for [Leopard](http://www.wincent.com/knowledge-base/Leopard): I don't know how to create new daemon user. No doubt this is ridiculously easy with Mac OS X Server, but in the non-server version it's far from obvious.

The NetInfo Manager utility has finally be laid to rest, but so have [command line](http://www.wincent.com/knowledge-base/command%20line) tools like `adduser`. The `/etc/passwd` file starts with this info:

    ##
    # User Database
    # 
    # Note that this file is consulted directly only when the system is running
    # in single-user mode.  At other times this information is provided by
    # Open Directory.
    #
    # This file will not be consulted for authentication unless the BSD local node
    # is enabled via /Applications/Utilities/Directory Utility.app
    # 
    # See the DirectoryService(8) man page for additional information about
    # Open Directory.
    ##

So what am I supposed to do? Use the Directory Utility application to turn on the BSD local node and then manually edit `/etc/passwd` and set a password using the `passwd` tool (for which there is no longer a manpage, but at least `password --foo` causes usage information to be printed)? Is there a more elegant way than this? What does Mac OS X Server do under the hood?


### Update

-   Luckily, thanks to somebody who didn't know that Leopard was under an [NDA](http://www.wincent.com/knowledge-base/NDA), found [this article](http://www.michaelnygard.com/blog/2007/04/moving_your_home_directory_on.html) published back in April describing the `dscl` tool, a command line interface for Directory Services.
-   <http://docs.info.apple.com/article.html?artnum=306494>
-   <http://www.royhooper.ca/blog/articles/2007/10/27/creating-os-only-users-on-leopard>

So it looks like something like this *would* probably work:

    sudo dscl localhost -create /Local/Default/Users/_mysql
    sudo dscl localhost -create /Local/Default/Users/_mysql NFSHomeDirectory /var/empty
    sudo dscl localhost -create /Local/Default/Users/_mysql Password '*'
    sudo dscl localhost -create /Local/Default/Users/_mysql PrimaryGroupID 74
    sudo dscl localhost -create /Local/Default/Users/_mysql RealName "MySQL Server"
    sudo dscl localhost -create /Local/Default/Users/_mysql UniqueID: 74
    sudo dscl localhost -create /Local/Default/Users/_mysql UserShell: /usr/bin/false

*But*, having started to snoop around using `dscl` I saw that there already is a MySQL user, it's just that it appears as `_mysql`. Information about it can be printed by issuing one of the following commands:

    # with leading underscore
    dscl localhost -cat /Local/Default/Users/_mysql

    # without
    dscl localhost -cat /Local/Default/Users/mysql

The output is:

    AppleMetaNodeLocation: /Local/Default
    NFSHomeDirectory: /var/empty
    Password: *
    PrimaryGroupID: 74
    RealName:
     MySQL Server
    RecordName: _mysql mysql
    RecordType: dsRecTypeStandard:Users
    UniqueID: 74
    UserShell: /usr/bin/false

I have no way of knowing whether this user is created by default when installing Leopard or if this was migrated over automatically when I performed my archive install. (Update: Martin Maciaszek wrote in to say that he did a clean install and the `_mysql` user, along with others like `_svn`, *is* created during installation; he also notes that "almost all the user ids below 100 are taken now".)

The `_mysql` and `mysql` user names appear to be completely equivalent in use (ie. `chown mysql foo` is identical to `chown _mysql foo`).
