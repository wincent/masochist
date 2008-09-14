---
tags: git updates
---

These were notes made while updating to [Git 1.6.0.2](/wiki/Git_1.6.0.2).

## Local update

This was the update performed on my local machine running [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.4. It was built from source (local clone of official [Git](/wiki/Git) repository).

    git fetch
    git tag -v v1.6.0.2
    git co v1.6.0.2
    make clean
    make prefix=/usr/local test doc
    sudo make prefix=/usr/local install install-doc > install-1.6.0.2.txt
    cp contrib/completion/git-completion.bash ~/.git-completion.sh

**Note:** `git co` is an alias for `git checkout` (see [Git quickstart](/wiki/Git_quickstart) for details on setting up aliases). See [Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard) for details on setting up the prerequisites for building the docs.

## Remote update

Seeing as none of the changes in 1.6.0.2 seemed to affect server-side operation I didn't apply this update on the remote server. (For an example of a remote update, see "[Updating to Git 1.6.0.1](/wiki/Updating_to_Git_1.6.0.1)").
