---
tags: git wiki
---

# Tips

Generally anonymous public checkouts (clones) are served via the `git-daemon` (see `man git-daemon`) and accessed using [URLs](/wiki/URLs) that start with `git://`.

Write access, on the other hand, is generally performed over [SSH](/wiki/SSH).

So if you plan to push modifications back to a remote [Git](/wiki/Git) repository then you should clone it using an `ssh://` URL and not a `git://` one. If you mistakenly make the wrong type of clone and then try to push you will get a message like this:

    fatal: The remote end hung up unexpectedly
    error: failed to push to 'git://git.example.com/repo'

Perform a `git config -l | grep remote` or `git remote show origin` to see how access to the remote repository is configured. You'll see that the access URL uses the `git` protocol (`'git://git.example.com/repo'`).

To correct the problem you can use the `git config` command to update the URL to the [SSH](/wiki/SSH) equivalent:

    git config remote.origin.url ssh://git.example.com/pub/git/path_to_public_repos/repo.git

Note how the publicly-visible path to your repository for anonymous users is not necessarily the same as the absolute path that you'll use when accessing over SSH, and this depends on the parameters you pass to the `git-daemon` (see "[Migrating Subversion repositories to Git](/wiki/Migrating_Subversion_repositories_to_Git)" for information on how I set up these repositories).

Now `git push` will work.
