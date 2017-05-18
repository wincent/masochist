---
tags: git wiki
cache_breaker: 1
---

# For the impatient

Once the initial set-up is done, it's a simple matter of:

    # given local user $GIT_USER, $GITORIOUS_PROJECT, and $GITORIOUS_REPO
    cd /path/to/repo
    sudo -u $GIT_USER git remote add --mirror gitorious git@gitorious.org:$GITORIOUS_PROJECT/$GITORIOUS_REPO

    # either wait for the cron job to propagate the changes, or...
    sudo -u $GIT_USER -s -H
    git push gitorious

# Set-up

Most of the set-up is described in "[Setting up backup (mirror) repositories on GitHub](/wiki/Setting_up_backup_%28mirror%29_repositories_on_GitHub)". I'm using the same public key that I described on that page under "Setting up a private/public key pair".

I also added a block like this to my `~/.ssh/config`; it's not strictly necessary but I think it's nice to be explicit:

    Host gitorious.org
      IdentityFile /path/to/git/home/.ssh/id_dsa
      HostName gitorious.org
      User git

With this set-up in place you have the option of specifying the repository using:

    gitorious.org:wopublic/wopublic.git

Instead of the longer:

    git@gitorious.org:wopublic/wopublic.git

# Creating the new repository on Gitorious

1.  Click on the "[All Projects](http://gitorious.org/projects)" link
2.  Click the "[Create a New Project](http://gitorious.org/projects/new)" button
3.  Enter:
    1.  Title (for example "WOHotKey")
    2.  Slug (for example "wohotkey")
    3.  Categories (for example "objective-c mac-os-x")
    4.   License (for example "BSD License")
    5.  Home URL (for example, <http://git.wincent.com/WOHotKey.git>)
    6.  Bugtracker URL (for example, <https://wincent.com/issues/>)
4.  Disable the wiki
5.  Provide a Description (for example, "Mirror of the official WOHotKey repository at git.wincent.com")
6.  Click on "Create project"

Now create a new repository:

1.  Fill in:
    1.   Name (for example, "WOHotKey")
    2.  Description (for example, "Mirror of the official WOHotKey repository at git.wincent.com")
