---
tags: git
---

# Introduction

Sometimes a feature, improvement or fix makes it into the [Git](/wiki/Git) codebase which is useful enough that you want to start benefitting from it right now rather than waiting for the next maintenance release (updates like 1.5.3.4, 1.5.3.5) or feature release (versions like 1.5.3, 1.5.4).

You have two options.

You could [cherry pick](/wiki/cherry_pick) those specific changes in your local repository, [merging](/wiki/merging) them into a local branch forked off from the last official release.

Alternatively, you could just track the "maint" or "master" branches directly. Tracking the "maint" branch means tracking the branch from which *maintenance* releases are periodically cut, while tracking "master" means tracking the branch from which *feature* releases are cut.

Of these two approaches I prefer to simply track one of the branches rather than cherry pick. This is because changes may be complex and have subtle interdependencies with other changes on the branches, and picking out one change in isolation may have unpredictable side-effects. In contrast, following the branch as a whole means following something fairly cohesive and widely tested (it seems that a large number of developers within the Git community run these pre-release versions on their local systems).

Of the branches you can possibly track, "maint" is the lowest risk (contains only fixes), followed closely by "master" (obvious, safe enhancements). You could also track "next" (which is where more significant enhancements are tried out before graduating to "master") but this involves more risk, risk which you may not be prepared to run on your production system with your precious source code. Personally, I wouldn't recommend running "next" to anyone but developers actually working on Git itself; on the other hand, "maint" and "master" are generally pretty solid and well tested and you would be very unlucky to get "burnt" by running them. For more information on the different branches used in the development of Git, see "[Structure of git.git](/wiki/Structure_of_git.git)".

# Process

Here is how you might produce a build based on the current "master" branch.

    # update your local repository
    cd git.git
    git checkout master
    git fetch

    # visualize what's been happening upstream 
    gitk --all

    # or
    git diff master..origin/master

    # or
    git log master..origin/master

    # update local master
    git merge origin/master
     
    # or
    git checkout -b my_master origin/master

    # build
    make clean
    make prefix=/usr/local test

    # if all tests pass, install
    sudo make prefix=/usr/local install

# Testing

If things break:

    # run the failing test verbosely
    cd t
    ./t0000-the-test.sh --verbose

    # or run it echoing commands as they are executed
    sh -x t0000-the-test.sh --verbose

To find out which commit broke things:

    git bisect start
    git bisect bad
    git checkout v1.5.3.5
    git bisect good
    # etc

If you find breakage and can fix it, see "[Creating and submitting a patch via email with Git](/wiki/Creating_and_submitting_a_patch_via_email_with_Git)" for info on how to share the fix with the community.

# Other useful commands

    # visualize difference between topic branch and remote master
    git diff origin/master HEAD
    git diff origin HEAD # shorter form

    # view commits in topic branch but not in remote master
    git log HEAD ^origin/master
    git log HEAD ^origin # shorter form

# Documentation

When tracking a branch rather than installing official releases you have two options for up-to-date documentation:

-   Read the AsciiDoc source of the documentation (in the `Documentation` directory of the source repository)
-   Build the man pages from the AsciiDoc source and install them

While the second option is somewhat more pleasant (allows you to just type `man git-fetch` or `git fetch --help`, for example), it is also more painful and time-consuming. See "[Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard)" for more information.
