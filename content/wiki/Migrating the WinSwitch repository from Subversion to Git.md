---
tags: subversion git wiki
cache_breaker: 1
---

# Local import

    $ cat ~/.svn-authors 
    wincent = Wincent Colaiuta <win@wincent.com>
    $ git svn clone --stdlayout -A ~/.svn-authors svn+ssh://svn.wincent.com/WinSwitch src

# Remote configuration

    $ cd /pub/git/path_to_public_repos
    $ sudo -u git mkdir WinSwitch.git
    $ cd WinSwitch.git
    $ sudo -H -u git git --bare init
    $ sudo -u git touch git-daemon-export-ok
    $ echo "Fast User Switching menu replacement for Mac OS X" | sudo -u git tee description
    $ echo "WinSwitch.git win@wincent.com" | sudo -u git tee -a /pub/git/conf/gitweb-projects 

# Initial push

    $ git tag -s r77 # tag initial Subversion import, corresponding to revision 77
    $ git remote add origin git.wincent.com:/pub/git/path_to_public_repos/WinSwitch.git
    $ git config branch.master.remote origin
    $ git config branch.master.merge refs/heads/master
    $ git push --all
    $ git push --tags

# Access

You can now create a clone of the repo using:

    $ git clone git://git.wincent.com/WinSwitch.git

And you can browse the repo at: <http://git.wincent.com/WinSwitch.git>

# Local cleanup

Seeing as I have no intention of ever committing to the old Subversion repo again, I remove the corresponding configuration to make sure that I never accidentally commit to the old repo:

    $ git config --remove-section svn-remote.svn

# See also

-   [Doing a one-off migration from Subversion to Git](/wiki/Doing_a_one-off_migration_from_Subversion_to_Git) (an older article, detailing my first experiences importing the full history of a [Subversion](/wiki/Subversion) repository into [Git](/wiki/Git))
-   [Commit messages](/blog/commit-messages) ([blog](/wiki/blog) post on the quality of the commit messages in the WinSwitch repo)
