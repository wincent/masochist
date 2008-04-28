---
tags: git
---

# The short version

    git symbolic-ref HEAD refs/heads/newbranch
    rm .git/index
    # and now git add, git commit etc

# The long version

Normally you create a [branch](/wiki/branch) by "forking" off from some other point in the development history (often the HEAD of an existing branch). Ultimately you can trace the ancestry of all your branches back to a "great-grand-daddy" commit, shown as an `X` in the diagram below:

      o--o--o--o--o--o--o--o
     /
    X--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o
        \                         /
         o--o--o--o--o--o--o--o--o
                \
                 o--o--o--o--o--o--o--o

It's a common workflow and forking off such a new branch is extremely easy to do:

    git checkout -b my_new_branch

So what do you do if you want your repository to contain a completely unrelated branch that does not begin from that common "great-grand-daddy" commit? In other words, a new line of development that starts from point `Y`?

      o--o--o--o--o--o--o--o
     /
    X--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o
        \                         /
         o--o--o--o--o--o--o--o--o
                \
                 o--o--o--o--o--o--o--o

    Y--o--o--o--o--o--o--o--o--o--o--o--o
                                      \
                                       o--o--o

I recently wanted to do this with my [Synergy](/wiki/Synergy) repository. The reason was that when I moved to [Git](/wiki/Git) I had done a shallow import of the old [Subversion](/wiki/Subversion) repository. Basically I had a few branches in the old repo, of which the following two are pertinent for the purposes of this discussion:

    o--o--o--o--Z "trunk" (Leopard)
        \
         o--W "jaguar"

My shallow import was basically just a new repository that started from the old tip of the trunk, `Z` in the above diagram. The new repository didn't have any history or any other branches. Development continued in the new [Git](/wiki/Git) repository and now looked like this:

    Z--o--o--o--o--o "master" (Leopard)

But when it came time to make some changes to the old "jaguar" branch I didn't want to go back to using my old [Subversion](/wiki/Subversion) repository, I wanted to instead get that branch into my [Git](/wiki/Git) repo. But given that the new Git repo didn't actually contain the common ancestry point at which the "trunk" and "jaguar" branches diverged, I would need to add a new branch corresponding to point `W` from the old repo. (Going back and importing the common ancestry point wasn't an option because — although possible — that would involve rewriting the history of all the commits in the new repository, changing their SHA1 ids, and I didn't want to do that.)

I would then end up with two independent branches like this:

    Z--o--o--o--o--o "master" (Leopard)

    W--o--o "jaguar"

In order to do this you need to make direct use of the low-level "plumbing":

    # make sure there are no uncommitted changes
    git status

    # blow away everything in the working tree
    rm -r *

    # see if there are any dot files which should also be blown away
    ls -laF

    # in my case, there were; I want to remove everything except the .git dir
    rm .gitignore

    # grab source corresponding to point "W"
    svn export the_svn_url/tags/3.2-release

    # move it into place
    mv 3.2-release/* .
    rmdir 3.2-release

    # prepare the index to exactly mirror the contents of the working tree
    git add -u
    git add .

    # create a new tree object corresponding to the state of the index
    # this produced a tree object with hash 0112c3d643ebbe7c8834e850e6b13d7c13018b04
    git write-tree

    # put together a commit message
    cat > /tmp/cmsg <<HERE
    Import 3.2 release

    This corresponds to the 3.2 (Jaguar) release tag from the old
    Subversion repository.

    Signed-off-by: Wincent Colaiuta <win@wincent.com>
    HERE

    # now create a commit from the tree object previously created
    # this produced a new commit object with hash 7b24419a52514084992fe62a3dc848b2f18c97f8
    git commit-tree 0112c3d643ebbe7c8834e850e6b13d7c13018b04 < /tmp/cmsg

    # create a new branch from the commit just created
    git branch jaguar 7b24419a52514084992fe62a3dc848b2f18c97f8

    # put the index and working tree back the way they were before
    git reset HEAD
    git clean -f -d

    # inspect
    gitk --all

    # finally, double-check that the new branch matches the one in the old repo
    # to do this I diffed against a separate svn export of the old repo that I had at /tmp/jaguar
    git checkout jaguar
    diff -r . /tmp/jaguar

## See also

See also [this weblog post](http://madduck.net/blog/2007.07.11:creating-a-git-branch-without-ancestry/) which goes into some detail describing another method which is shorter but requires some direct manipulation and knowledge of [Git](/wiki/Git) internals; but basically boils down to:

    git symbolic-ref HEAD refs/heads/newbranch
    rm .git/index
    # and now git add, git commit etc
