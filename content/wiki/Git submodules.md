---
tags: git wiki
cache_breaker: 1
---

# Workflows

## Adding a new submodule

One typical workflow: public project, public submodules.

-   you want anonymous users to be able to clone the public project and its submodules
-   but you want to be able to push changes from within the submodules

<!-- -->

    # add submodule to project, using public URL
    git submodule add git://git.example.com/project.git project

    # update your config file
    git submodule init

    # edit config to use private URL
    vim .git/config

    # checkout submodules, they will use the private URL
    git submodule update

Now you have push access set up via the private [URL](/wiki/URL) in your own copy of the repository, but if an anonymous user clones they'll just get the standard public/anonymous (read-only) access.

Note that if you have already checked out the submodules before you configure the private URL you'll need to go into the submodule's `.git/config` and tweak the URL there as well in order for your `git push` to work.

## Updating a submodule

    cd foo_submodule

    # after making some changes in the submodule (by fetching/merging, or editing/committing)
    # we want to record those changes in the superproject
    cd ..
    git add foo_submodule

    # we want our commit message to include a summary of the changes made in the submodule
    # note the "-e" switch allows us to review/edit the commit message before, er, committing to it
    git diff --submodule --cached -- foo_submodule | git commit -s -e -F -

    # or alternatively (slightly different format)
    git submodule summary foo_submodule | git commit -s -e -F -

This is a pattern I employ fairly commonly, so I have an alias set up for it:

    git config --global alias.smc '!git submodule summary -- $1 > ~/tmp/COMMIT_MSG && git commit -s -t ~/tmp/COMMIT_MSG'

Note that I ended up using a temporary file rather than a pipe because Vim tends to complain and I haven't had time to investigate why yet.
