---
tags: git
---

These notes describe my procedure for starting a new project and setting up a *public* [Git](/wiki/Git) repository for it. For projects managed under legacy [version control systems](/wiki/version_control_systems) see, "[Migrating Subversion repositories to Git](/wiki/Migrating_Subversion_repositories_to_Git)". For *private* repositories see "[Setting up a brand new private Git repository](/wiki/Setting_up_a_brand_new_private_Git_repository)".

**NOTE:** *now that my procedure for setting up a new repo is relatively stable, I've created a script on the server which performs all of this set-up in one hit; but I'm leaving the notes here as they may be helpful to others*

# Initial set up

    # on the remote (public) machine:
    # create a new bare repository
    cd /pub/git/path_to_public_repositories
    sudo -u git git init --bare repo.git
    cd repo.git
    sudo -u git touch git-daemon-export-ok

    # additional set-up for Gitweb
    echo "Description of this repository" | sudo -u git tee description
    echo "repository.git Owner+Name+<owner@example.com>" | sudo -u git tee -a /pub/git/conf/gitweb-projects
    echo "git://git.example.com/repository.git" | sudo -u git tee cloneurl

    # on the local (private) machine:
    # create a new repository and prepare the initial commit
    mkdir foo
    cd foo
    git init
    git add .
    git commit -s

    # actually push
    git remote add origin git.example.com:/pub/git/path_to_public_repositories/repo.git
    git config branch.master.remote origin
    git config branch.master.merge refs/heads/master
    git push --all

## Backups

After setting up the empty mirror repos on [GitHub](/wiki/GitHub) and [Gitorious](/wiki/Gitorious), set up backups like this:

    # given local user $GIT_USER, $GITHUB_USER, $GITHUB_REPO, $GITORIOUS_PROJECT, $GITORIOUS_REPO
    cd /path/to/repo
    sudo -u git git remote add --mirror github git@github.com:$GITHUB_USER/$GITHUB_REPO.git
    #             for example: --mirror github git@github.com:wincent/WOHotKey.git
    sudo -u git git remote add --mirror gitorious git@gitorious.org:$GITORIOUS_PROJECT/$GITORIOUS_REPO.git
    #             for example: --mirror gitorious git@gitorious.org:wohotkey/wohotkey.git

    # either wait for the cron job to propagate the changes, or...
    sudo -u git git push github
    sudo -u git git push gitorious

For the full low-down see:

-   [Setting up backup (mirror) repositories on GitHub](/wiki/Setting_up_backup_%28mirror%29_repositories_on_GitHub)
-   [Setting up backup (mirror) repositories on Gitorious](/wiki/Setting_up_backup_%28mirror%29_repositories_on_Gitorious)

## Rails application mirror

We also set up a remote for our Rails application server. We push a copy of all public repos to the server so that it can provide a repository browser via local filesystem access:

```shell
# cd /path/to/repo
# sudo -u $GIT_USER git remote add --mirror rails $REMOTE_GIT_USER@$REMOTE_HOST:/remote/path/to/repo
```

While the GitHub and Gitorious repos get pushed too via an automatic cron job, the mirror on the Rails application server is immediately updated via a `post-receive` hook, so set that up via a link:

```shell
# cd /path/to/repo/hooks
# ln -s ../../../hooks/post-receive post-receive
```

**Note:** on the remote server we actually have to create the destination repo too:

```shell
# cd /path/to/repos
# sudo -u $REMOTE_GIT_USER git init --bare repo.git
```

# Other workflows

Imagine that you have a local repository that you eventually wish to make public but which isn't quite ready yet for publication. On the other hand, even though you aren't yet ready to expose the code for all the world to see you may still wish to set up a remote repository to give you some data redundancy in the form of an additional off-site backup. [Git](/wiki/Git) is extremely flexible and allows you to do this, making it very easy for you to convert your private repository into a public one when you're ready to do so.

There are various ways of doing this, but here are two possibilities:

## Deploy to the public server

With this technique you set up your repository exactly as described above but you omit the:

    sudo -u git touch git-daemon-export-ok

And:

    echo "repository.git owner@example.com" | sudo -u git tee -a /pub/git/conf/gitweb-projects

Lines. See the `INSTALL` file that comes with [gitweb](/wiki/gitweb) for information about how you make your not-yet-public project truly invisible from within gitweb (in short, you need to set the `GITWEB_STRICT_EXPORT` and/or `GITWEB_EXPORT_OK` build configuration variables; this is also described in the article, "[Setting up gitweb](/wiki/Setting_up_gitweb)").

When you're ready to go public you just perform the two operations that were previously omitted.

## Deploy elsewhere and then move to the public server

With this method you deploy to another location and later move the repository into place once it is ready to go public. See "[Migrating Subversion repositories to Git](/wiki/Migrating_Subversion_repositories_to_Git)" for a description of one way of doing this. Once in place you need to update your local copy of the repository to point to the new origin:

    git config --unset remote.origin.url
    git config --unset remote.origin.fetch
    git remote add origin git.example.com:/pub/git/path_to_public_repositories/repo.git
    git config branch.master.remote origin
    git config branch.master.merge refs/heads/master

As another example, consider how I fixed a botched `git remote add origin` invocation:

    # there is a mistake in the host name...
    git remote add origin bad.example.com:/pub/git/path_to_public_repositories/repo.git

    # this won't work
    git push --all

    # redo the "git remote add"
    git remote add origin good.example.com:/pub/git/path_to_public_repositories/repo.git

    # whoops, we're about to create a "master" _and_ an "origin" branch on the remote server
    git push --all

    # I deleted the "origin" branch on the server by logging in and doing "git branch -d origin"
    # although there may be another way to do this...

    # let's try re-adding the origin again
    git remote rm origin
    git remote add origin good.example.com:/pub/git/path_to_public_repositories/repo.git

    # this still shows a stale "origin" branch
    # presumably because we still have a reference: refs/remotes/origin/origin
    git remote show origin

    # clean it up
    git remote prune origin

    # all good again
    git remote show origin

# See also

-   [Going public with previously proprietary code](/wiki/Going_public_with_previously_proprietary_code)
-   [Setting up gitweb](/wiki/Setting_up_gitweb)

