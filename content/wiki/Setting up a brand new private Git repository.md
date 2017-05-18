---
tags: git wiki
cache_breaker: 1
---

These notes describe my procedure for starting a new project and setting up a *private* [Git](/wiki/Git) repository for it. For projects managed under legacy [version control systems](/wiki/version_control_systems) see, "[Migrating Subversion repositories to Git](/wiki/Migrating_Subversion_repositories_to_Git)". For *public* repositories see "[Setting up a brand new public Git repository](/wiki/Setting_up_a_brand_new_public_Git_repository)".

    # on the remote (private) machine:
    # create a new bare repository
    cd /pub/git/path_to_private_repositories
    sudo -u git mkdir repo.git
    cd repo.git
    sudo -u git git --bare init

    # on the local machine:
    # create a new repository and prepare the initial commit
    mkdir foo
    cd foo
    git init
    git add .
    git commit -s

    # actually push
    git remote add origin git.example.com:/pub/git/path_to_private_repositories/repo.git
    git config branch.master.remote origin
    git config branch.master.merge refs/heads/master
    git push --all
