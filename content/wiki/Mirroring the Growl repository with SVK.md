---
tags: svk growl wiki
---

# Rationale

In the past I've incorporated [Growl](/wiki/Growl) into [Synergy](/wiki/Synergy) and [Synergy Advance](/wiki/Synergy_Advance) by downloading the [SDK](/wiki/SDK) and referencing it as I would any other project on my hard disk. But with the introduction of my automated nightly builds (see "[Setting up a nightly build system](/wiki/Setting_up_a_nightly_build_system)") this is no longer really adequate. The nightly build system is based on the premise that the source code to be built should be a totally clean check out of the entire code base, including external dependencies. If one of those dependencies, in this case [Growl](/wiki/Growl), is just a folder somewhere on your hard disk then your nightly build system now depends on hard-coded paths and can only be run from that particular machine.

So the most convenient way to incorporate [Growl](/wiki/Growl) in an existing project in a way compatible with proper nightly builds would be to use a [Subversion external](/wiki/Subversion_external). In this way you can *reference* an external project without literally copying it into your repository (which would clutter your repository with material and history which doesn't really belong there). With externals, updates to the external project can be carried out independently of updates to your own project. On checking out your project you automatically check out the external project as well.

But lately I've been using [SVK](/wiki/SVK) rather than [Subversion](/wiki/Subversion) and [SVK](/wiki/SVK) doesn't yet support [svn:externals](/wiki/svn%3aexternals)(see "[Working around the lack of svn:externals support in SVK](/wiki/Working_around_the_lack_of_svn%3aexternals_support_in_SVK)"). Nevertheless, the basic idea is the same with some minor modifications. Instead of using an [Subversion external](/wiki/Subversion_external) we use a local mirror of the [Growl](/wiki/Growl) repository combined with a checkout and an appropriate symlink so that the incorporating project can find it (nested checkouts are not allowed in [SVK](/wiki/SVK)).

A benefit of using [SVK](/wiki/SVK) is that your nightly builds can now check out the external project from your local repository which will be quicker *and* spare load on the third-party's servers.

And using [SVK](/wiki/SVK) brings an additional benefit: the ability to create a local only branch to which you can commit modifications if necessary. Normally if you want to use revision control to track development over time you need write access to the repository; in the case of a third-party project you most likely don't have such access. You're able to make modifications, send patches into the maintainers, view `diff` output, but your inability to commit changes means that your working copy will only ever be a static delta from the main code; you can't track change history or revert changes.

With a local branch that limitation no longer applies because you can commit changes freely. Now, the plan is *not* actually to make any changes to the codebase. But the ability to be able to make those changes, *just in case*, is a nice benefit (remember that the [Growl](/wiki/Growl) maintainers don't actually want you making changes, they prefer everyone to be running exactly the same code).

About two years ago when I introduced [Growl](/wiki/Growl) support in [Synergy](/wiki/Synergy) I had to make such local changes to correct breakage caused by [Growl](/wiki/Growl) when I couldn't wait for the next official release. The [Growl](/wiki/Growl) codebase is now fairly stable so this kind of emergency action is unlikely to be required, but it is nice to know that one can conveniently do so if required. With a local branch you can:

1.  Perform local modifications.
2.  If upstream fixes are committed to the remote repository, revert your local changes and pull down the remote fixes.

# Initial mirroring

    # to mirror the entire repository:
    svk mirror http://src.growl.info/growl //mirrors/growl

    # or just the trunk
    [/tags/svk #svk] mirror http://src.growl.info/growl/trunk //mirrors/growl

    # or just a branch...
    [/tags/svk #svk] mirror http://src.growl.info/growl/branches/desired_branch //mirrors/growl

    svk sync //mirrors/growl

# Creating a local-only branch for local modifications

At the time of writing there is no tag in the repository for the latest (0.7.6) release. Some research with `svn log` and comparison with the downloadable 0.7.6 source archive reveals that the 0.7.6 release corresponds to revision 3872 of the [0.7 branch](http://src.growl.info/growl/branches/growl-0.7/).

Apparently, there will be no more releases in that series -- development on the trunk is for a 1.x release -- although there have been some minor changes since the release which you can visually inspect with the following command:

    svn diff http://src.growl.info/growl/branches/growl-0.7@3872 \
             http://src.growl.info/growl/branches/growl-0.7@HEAD

So I decided to base my local branch on the tip of the `growl-0.7` branch:

    svk cp -p //mirrors/growl/branches/growl-0.7 //local/growl/tiger

As stated above, the plan is actually to *not* make any changes, but we can if we ever need to.

In the nightly builds (and in regular development) a local copy can now be checked out using:

    svk co //local/growl/tiger Growl

## Deviations of my branch from the official 0.7 branch

-   Framework version number is "0.7.6+" (official branch is mislabelled as "0.7.5" anyway).
-   Renamed "Deployment" target to "Release" to bring naming in line with current [Apple](/wiki/Apple) conventions.
-   Target [Tiger](/wiki/Tiger) for both [PowerPC](/wiki/PowerPC) and [Intel](/wiki/Intel) builds (to match [Synergy Advance](/wiki/Synergy_Advance)).
-   Prebinding turned off (causes warnings on [Tiger](/wiki/Tiger)).
-   Set built product and build intermediates directories as relative paths.

# See also

-   <http://growl.info/documentation/developer/growl-source-install.php>
