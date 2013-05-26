---
tags: git
cache_breaker: 1
---

For Rails deployments I want to eliminate third-party dependencies on places like rubygems.org or github.com (I don't want downtime of either of those services to prevent me from deploying.)

As a result, if I want to use a third-party library as a submodule, I do the following:

-   Add a submodule pointing at the upstream repo
-   Fork the repo on GitHub
-   Create an (initially empty) backup mirror on [Gitorious](/wiki/Gitorious)
-   Create an (initially empty) mirror on git.wincent.com
-   Create an (initially empty) mirror on the same machine as my Rails app is running
-   In the local submodule, update the submodule to point at the git.wincent.com mirror
-   Add an "upstream" remote pointing at the original repo, for use with `git fetch`

A lot of this is described in detail in "[Setting up a brand new public Git repository](/wiki/Setting_up_a_brand_new_public_Git_repository)". I have a `new-public-repo.sh` script that I can run on git.wincent.com to do most of the dirty work for me. For example, below is the output from setting up a mirror of the [spin.js](/wiki/spin.js) repo:

-   Note the use of a shared "github-mirrors" project on [Gitorious](/wiki/Gitorious) so I don't have to create new projects for each upstream mirror
-   Also note that I had to call the repo "spin-js" there due to limitations imposed by Gitorious

```shell
# ./new-public-repo.sh spin.js
Initialized empty Git repository in ...
Enter a one-line description (for GitWeb): Mirror of github.com/fgnass/spin.js
Mirror of github.com/fgnass/spin.js
spin.js.git Wincent+Colaiuta+<win@wincent.com>
git://git.wincent.com/spin.js.git
Enter name of backup repo at GitHub (eg. Command-T): spin.js
Enter name of backup project at Gitorious (eg. fusion-mac-os-x): github-mirrors
Enter name of backup repo at Gitorious (eg. fusion): spin-js

-------------------------------------------------------------------------
                      Configuration now complete

Contents of description file:

Mirror of github.com/fgnass/spin.js

Contents of cloneurl file:

git://git.wincent.com/spin.js.git

Contents (tail) of gitweb-projects file:

synergy.git Wincent+Colaiuta+<win@wincent.com>
clipper.git Wincent+Colaiuta+<win@wincent.com>
spin.js.git Wincent+Colaiuta+<win@wincent.com>

Contents of config file:

[core]
        repositoryformatversion = 0
        filemode = true
        bare = true
[remote "github"]
        url = git@github.com:wincent/spin.js.git
        fetch = +refs/*:refs/*
        mirror = true
[remote "gitorious"]
        url = git@gitorious.org:github-mirrors/spin-js.git
        fetch = +refs/*:refs/*
        mirror = true
        # etc ...

You have set up a 'rails' remote; remember to create bare repo on that machine:
  ...

Then you can push to publish your initial changes to this repo:
  ...
```

In the end, the steps on the local machine looked something like:

```shell
$ mkdir -p vendor/assets/javascripts
$ git submodule add git://github.com/fgnass/spin.js.git
$ cd vendor/assets/javascripts.spin.js
$ git remote add upstream git://github.com/fgnass/spin.js.git
$ cd ../../../..
$ vim .gitmodules # update clone URL
$ vim .git/modules/vendor/assets/javascripts/spin.js/config # update local URL
$ git config branch.master.remote origin
$ git config branch.master.merge refs/heads/master
$ git push origin --all
$ git push origin --tags
```
