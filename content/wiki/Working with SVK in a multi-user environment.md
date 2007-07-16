---
tags: svk
---

When I first started working with [SVK](/wiki/SVK) I was working alone and from a single machine. My work cycle was basically:

    # make changes
    svk ci -m "Commit message"

    # make more changes
    svk ci -m "Commit message"

When working with multiple branches my pattern was:

    # make changes
    svk ci -m "Commit message"

    # push changes from branch back to trunk
    svk push --verbatim

    # or, pulling changes from trunk into branch
    svk pull

    # now working in another branch; get most recent changes
    svk up

    # make changes
    svk ci -m "Commit message"

When I started doing development work in [Leopard](/wiki/Leopard) itself and finally got [SVK](/wiki/SVK) working (my initial attempts at installing [SVK](/wiki/SVK) failed and so I fell back to working with vanilla [Subversion](/wiki/Subversion)) I no longer had a single-machine set-up; I now had two depots (two mirrors).

I was surprised to see that after working on another branch my commits were failing even though I had done an `svk up` beforehand:

    Commit into mirrored path: merging back directly.
    Merging back to mirror source svn://svn.wincent.com/WOTest.
    A checksum mismatch occurred: Base checksum mismatch on '/trunk/NSException+WOTest.m':
       expected:  ab5055a21d72459b6fe6c8bd4c959e20
         actual:  7d57db2ecf5e25fc15762d8bb1feb6cb

This is because in any multi-user (multi-depot) environment `svk up` is not enough to ensure that your depot reflects the latest changes in the remote repository. Instead you must perform an `svk sync` (see `svk help sync` for information about options) to bring the local depot up to date, or pass the `-s` switch to `svk up` to achieve the same effect:

    # alternative 1:
    svk sync //mirrors/mirrored_repo_name
    svk up

    # alternative 2:
    svk up -s

When you're working from a single machine (single depot) and nobody else is updating the repository from anywhere else you don't run into this problem, even when working on many branches and using `svk push` and `svk pull` extensively. This is because every time you do an `svk ci` the local depot is updated to reflect those changes and they are then transmitted to the repository; in this way the remote repository never sees any changes which the local depot doesn't see.

As soon as you switch to a multi-user (multi-depot) pattern then you'll need to start using `svk sync`.
