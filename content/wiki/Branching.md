---
tags: subversion svk wiki
---

My thinking about [branching](/wiki/branching) has evolved recently thanks to the possibilities opened up by [SVK](/wiki/SVK). [Subversion](/wiki/Subversion) itself has no inherent limitations that prevent you from doing sophisticated [branching](/wiki/branching) and [merging](/wiki/merging), but neither does it actually provide you with tools to make it convenient. The main defect in [Subversion](/wiki/Subversion)'s [merging](/wiki/merging) capabilities is the lack of [merge tracking](/wiki/merge_tracking). This means that you must manually keep track of the merges so as not to re-merge the same changes at a later date; see "[Synergy branch notes](/wiki/Synergy_branch_notes)" for an example of this manual tracking. This manual work can be a time-consuming and error-prone procedure.

[SVK](/wiki/SVK), on the other hand has built-in [merge tracking](/wiki/merge_tracking) which makes it much easier to merge changes from one branch to another. This in turn makes [branching](/wiki/branching) more viable and attractive.

# When to branch

Because manually managing two branches requires considerable effort under [Subversion](/wiki/Subversion) you should think carefully before going ahead and performing a branch. The basic question is: do the maintenance costs of micromanaging two branches outweigh the potential benefits? If the answer is yes, then you shouldn't branch. For an example of the branch process, see [Creating branches with Subversion](/wiki/Creating_branches_with_Subversion).

[SVK](/wiki/SVK) makes branching and merging so easy that you can afford to adopt a much more cavalier attitude to branching. You can use it to manage branches at two levels:

1.  Branches in the remote repository, typically stored in `project/branches/`.
2.  Local-only branches not stored in the remote repository.

This latter class of branch is enabled by the fact that [SVK](/wiki/SVK) uses a distributed model rather than a centralized client/server model. It's not an all or nothing affair, however, because the distributed model of [SVK](/wiki/SVK) can work seamlessly with an existing centralized, client/server infrastructure.

## Major branches

These are the branches that appear in the remote repository. You might wish to have multiple branches, one per version of the target operating system. Or perhaps you'll want a branch per major release. This branches may or may not coincide with the per-operating system target branches; that is, perhaps your branch for [Tiger](/wiki/Tiger) is actually the "2.x" branch, and your branch for [Leopard](/wiki/Leopard) is the trunk and corresponds to the "3.x" line of development. In fact, [SVK](/wiki/SVK) make [branching](/wiki/branching) and [merging](/wiki/merging) so easy that you may decide to have branches for minor releases as well.

## Lightweight branches

Lightweight branches tend to be short-lived branches in which you carry out a disruptive task that would otherwise break the main trunk (or other important release branch). Once the task is complete the changes are merged all at once back to the originating branch, hopefully without breakage and minimizing disruption. The branch's useful life effectively comes to an end at this point.

Examples of reasons for creating lightweight branches include:

-   Working on a bug fix
-   Implementing a new feature
-   Carrying out experimental work

These lightweight branches are often best suited to be local-only [SVK](/wiki/SVK) branches. You can then `push` and `pull` changes from and to the lightweight branch. See the "[Microbranching](/wiki/Microbranching)" article for an example.

# Branching styles

I like to think of these two branching styles as being like left and right-recursion in parsers. In one you carry out your disruptive work in a separate branch, keeping the trunk as stable as possible. In the other, you carry out your work on the trunk but you keep a stable copy in a separate branch just in case you need to do an interim release before the trunk is ready for it.

I'm inclined to think that a blend of the two styles is actually the optimum work style. To illustrate, this is my current thinking about what I will do with [Synergy](/wiki/Synergy) (currently 3.1.1 is in beta testing):

1.  Release 3.1.1 (actually from the `panther` branch)
2.  Create a tag, `tags/3.1.1`
3.  Merge back to `trunk`; mainline development will continue there.
4.  Let the misnamed `panther` branch die off.
5.  Make a new branch, `branches/jaguar`; this will actually be for the 3.1.x series and could just as easily have been called the `3.1` branch but I prefer the mnemonic animal-based naming.
6.  Continue development work on `trunk`; this [Leopard](/wiki/Leopard)-centric release will be numbered version 3.5.
7.  If it becomes necessary to do a 3.1.2 release can do that work on the `jaguar` branch.
8.  If it becomes necessary to do an even finer-grained branch (`3.1.2`, for example) can do so later on using a local-only [SVK](/wiki/SVK) branch.

Given that the trunk is intended for [Leopard](/wiki/Leopard) releases I want to keep disruptive feature work off of the trunk. So for bugfixes and feature additions that may take more than a day to complete I'll use [SVK](/wiki/SVK) to make local-only micro-branches and then merge them back into the trunk once they're done:

    # examples of creating local-only branches
    svk cp //mirrors/Synergy/trunk //local/Synergy/bug-512
    svk cp //mirrors/Synergy/trunk //local/Synergy/new-threading-model

    # check out a local working copy
    svk co //local/Synergy/new-threading-model src

    # work...
    cd src

    # pull changes from trunk if necessary
    svk pull

    # after the work is complete, merge it back to the trunk
    svk push --verbatim 

    # this short-lived branch is effectively done with now
    svk co --detach
    cd ..
    rm -r src

The `--verbatim` switch to `svk push` prevents it from including [SVK](/wiki/SVK) meta information (such as local revision numbers) in the log entry.

# See also

## General articles

-   [Cherry picking](/wiki/Cherry_picking)
-   [Merging](/wiki/Merging)
-   [Tagging](/wiki/Tagging)

## Project-specific branch notes

-   [Branch notes](/wiki/Branch_notes)
