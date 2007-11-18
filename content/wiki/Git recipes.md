---
tags: git
---

# Initializing a repository based on an existing directory

    cd path_to_directory
    git init
    git add .
    git commit

# Topic branches

    # create a new branch
    git branch doc-updates

    # list branches
    git branch

    # switch to new branch
    git checkout doc-updates

    # note: could have done "git checkout -b doc-updates"
    #       to create new branch and checkout in one step

    # make a change
    echo "more docs" >> greeting.txt 
    git add greeting.txt 
    git commit -m "More docs"

    # one more change
    echo "even more docs" >> greeting.txt
    git add greeting.txt 
    git commit -m "Even more"

    # switch back to master branch
    git checkout master

    # merge topic branch (two commits)
    git merge doc-updates

    # delete topic branch
    git branch -d doc-updates

## Moving an unpublished topic branch from one machine to another with `git bundle`

```shell
$ git co my_topic
$ git bundle create bundlefile master..my_topic
$ scp bundlefile host:path/to/repo
$ ssh host
```

Now on the other host:

```shell
$ cd path/to/repo
$ git bundle unbundle bundlefile
$ git co -b my_topic sha1_hash_of_bundle_HEAD
```

# Creating and submitting a patch via email

For example, making a simple change to [Git](/wiki/Git) itself:

    # change to local checked-out copy of repository
    cd git.git

    # update
    git fetch # or "git pull" if you want to merge as well

    # make changes on a local topic branch
    git checkout -b my_topic origin/master

    # make/test changes
    vi file_to_be_changed

    # review changes
    git diff

    # commit changes
    git add file_to_be_changed
    git commit -s

    # run test suite
    make clean && make test

    # prepare patch
    git format-patch origin

    # send the email (dry run, test run)
    git send-email --dry-run --to me@example.com patch_file
    git send-email --to me@example.com patch_file

    # send the email (for real)
    git send-email --to git@vger.kernel.org patch_file 

For submitting patches to [Git](/wiki/Git) itself I've set up some aliases as described in "[Git quickstart](/wiki/Git_quickstart)". These would be used as follows:

    # send the email (dry run, test run)
    git send-email --dry-run --to me patch_file
    git send-email --to me patch_file

    # send the email (for real)
    git send-email --to git --cc junio patch_file

For patch series, you can pass the `--compose` switch to `git-send-email` to compose an introductory message that will be prepended to the rest of patch series.

I also recommend setting the `format.numbered` configuration variable to `true` as described in "[Git quickstart](/wiki/Git_quickstart)"; this is useful if you group your changes together in [topic branches](/wiki/topic_branches) (and you probably should when tracking an upstream project).

To get patches to send correctly from my local machine I need to configure my [SMTP](/wiki/SMTP) settings as described in "[Git quickstart](/wiki/Git_quickstart)". I also needed to install the Net::SMTP::SSL Perl module (see "[Installing Net::SMTP::SSL for sending patches with Git over secure SMTP](/wiki/Installing_Net%3a%3aSMTP%3a%3aSSL_for_sending_patches_with_Git_over_secure_SMTP)").

# Tracking upstream changes

    # fetch new commits from upstream
    git fetch

    # view what's happened on master branch since last time
    git co master
    git log HEAD..origin/master

    # fast-forward local checkout to upstream HEAD
    git merge origin/master

    # merge or rebase topic branches as appropriate
    git co my_topic_branch
    git rebase origin/master
