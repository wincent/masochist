---
tags: version.control synergy wiki
---

# Trunk ([Leopard](/wiki/Leopard))

## Timeline

-   `trunk`: as of 23 March 2007, reserved for [Leopard](/wiki/Leopard) (version 3.5+) development

# [Panther](/wiki/Panther) branch

I realized soon after creating this branch that it was actually a mistake for two reasons:

1.  It really should have been a [Jaguar](/wiki/Jaguar) branch, not a [Panther](/wiki/Panther) branch, as the software on the branch continued to support versions of [Mac OS X](/wiki/Mac_OS_X) back to [Jaguar](/wiki/Jaguar).
2.  The branch was created too soon.

I created the branch because I wanted to keep my [Leopard](/wiki/Leopard) development separate from my legacy development. The branch was made too soon (too far ahead of [Leopard](/wiki/Leopard)'s release) because most of the work ended up taking place on the branch instead of on the trunk. The trunk remained almost motionless and I periodically merged in changes from the branch; I may as well have just done all development on the trunk and only branched later on.

Towards the end of March 2007 and in conjunction with the move to [SVK](/wiki/SVK) I executed the following plan:

-   Keep the 3.1 series as the [Jaguar](/wiki/Jaguar)-compatible branch.
-   The next major version will be 3.5 and that will most likely be for [Leopard](/wiki/Leopard) development; it will coincide with the trunk.
-   The poorly named [Panther](/wiki/Panther) branch will be allowed to die off; I may even choose to delete it.
-   Let 3.1.1 be the last public release before the branch.
-   After that branch, use [SVK](/wiki/SVK) because it handles branching and merging better.
-   [SVK](/wiki/SVK) makes branch management so much easier that it makes sense to branch more often; instead of branching only major OS-compatibility cut-off points it becomes attractive to branch at every minor release. In many cases where you currently would only consider using tags it may make sense to create branches instead. For example, a branch for the 3.2 series, 3.3 series, and so on. This makes it easy to roll out bug-fix releases (3.2.1 etc). In fact, [SVK](/wiki/SVK) branches are so lightweight and easy that you can even consider making local-only branches for minor bug-fixes (that don't even correspond to full releases); these branches never exist separately in the remote repository, but once the work is completed the changes get merged in upstream.

## Timeline

-   `panther` branch created from trunk: r274, 19 September 2006
    -   Changes merged back into trunk (see "[Merging](/wiki/Merging)"):
        -   274:293, 26 October 2006
        -   294:330, 22 March 2007
        -   331:332, 23 March 2007
    -   As of 23 March 2007, the plan is to let the `panther` branch die off.

# [Jaguar](/wiki/Jaguar) branch

## Timeline

-   `jaguar` branch created from trunk: r337 ([Subversion](/wiki/Subversion))/r2358 ([SVK](/wiki/SVK)), 23 March 2007
    -   Now a maintenance branch (versions 3.1+, possibly 3.2, 3.3 and 3.4 as well) with the intention of maintaining [Jaguar](/wiki/Jaguar) compatibility.
