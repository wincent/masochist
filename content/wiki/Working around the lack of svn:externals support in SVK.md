---
tags: svk wiki
---

I am a big fan of the [Subversion externals](/wiki/Subversion_externals) feature (also known as [svn:externals](/wiki/svn%3aexternals)). I use it to share code among my projects. It's heavily used by many popular open source projects including, for example, [Rails](/wiki/Rails).

The trouble is, [SVK](/wiki/SVK), doesn't support externals.

# Nested checkouts

If you try to "fake" externals support by doing a nested checkout:

    svk co //mirrors/project/trunk src
    cd src
    svk co //mirrors/other_project/trunk subdir

You'll fail with an error message like this:

    Overlapping checkout path is not supported (/Users/John/project/src); use 'svk checkout --detach' to remove it first.

# Views

It's been [suggested on the mailing lists](http://lists.bestpractical.com/pipermail/svk-devel/2007-January/000567.html) that [SVK](/wiki/SVK)'s views feature might work but it's [also noted](http://bestpractical.typepad.com/worst_impractical/2007/01/svk_20_is_bette.html) that they are a beta-quality feature right now ([SVK 2.0](/wiki/SVK_2.0)) not recommended for production use.

I also am not entirely sure of how views would be used; I [asked for clarification](http://lists.bestpractical.com/pipermail/svk-devel/2007-March/000741.html) on [svk-devel](/wiki/svk-devel) but it's still not clear to me how views are supposed to work as substitutes for [Subversion externals](/wiki/Subversion_externals).

# Non-nested checkouts

## Changing nested paths to non-nested paths

This will definitely work but unfortunately requires a lot of busy-work to fix breakage caused by the changed relative paths. That is, everything that was formally in `./other_project/` will now be in `../other_project` or `../../other_project`. In the case of [Xcode](/wiki/Xcode) this can lead to a lot of broken and hard-to-fix file references.

See "[Search and replace in multiple files with a Perl one-liner](/wiki/Search_and_replace_in_multiple_files_with_a_Perl_one-liner)" for information that may help to ease the pain of such a change.

## Using symbolic links

Another alternative is to remove the external and replace it with a symbolic link to the non-nested checkout; for example, in the case of [WOCommon](/wiki/WOCommon):

    cd $SOURCE_ROOT
    svk propdel svn:external .
    ln -s ../WOCommon WOCommon

Along with this change I'm making a minor adjustment to my directory structure. When I originally managed my code using [CVS](/wiki/CVS) each project lived in a folder like this:

    project
    project/cvs-files
    project/non-cvs-files

Where the trunk or whatever branch was being worked on would be checked out into the `cvs-files` subdirectory.

On migrating to [Subversion](/wiki/Subversion) this structure changed to:

    project
    project/svn-files
    project/non-svn-files

Now that I have yet another migration I'm going to remove the [SCM](/wiki/SCM) system's name from the path so that I won't ever have to make this kind of adjustment again:

    project
    project/src
    project/extra

## Command-line helper scripts

Without proper externals you miss out on the following functionality:

-   `svk co` doesn't automatically check out dependent modules the way `svn co` does.
-   `svk up` doesn't automatically update dependent modules the way `svn up` does.
-   `svk st` doesn't report on changes in dependent modules the way `svn st` does.

One way to work around this would be to write a set of helper scripts, `checkout`, `up` and `st` (`co` can't be used as a name because there is already an [RCS](/wiki/RCS) tool with that name), which would serve as a wrapper for `svk` and add the desired "dependency" functionality.

`checkout DEPOTPATH [PATH]` would invoke `svk co DEPOTPATH [PATH]` and then check for any `svk:externals` properties within the checked out path. Declared externals would then be checked out automatically at the appropriate location. `up` would perform similarly, wrapping `svk up`. `st` would wrap `svk st`.

Given the following `svk:externals` property set on a symbolic link `local_name` inside a working copy:

    svk:externals : //mirrors/project/remote_name

The scripts would expect the symbolic link `local_name` to reveal the real location where `//mirrors/project/remote_name` should be checked out.

This system would require some setup (the symbolic links) but once established would at least afford a level of automation comparable to that provided by [Subversion externals](/wiki/Subversion_externals).

## Shell tricks

It is possible to achieve some level of "automation" by employing some shell tricks.

For example, if you want to find and get status on all checked out instances of a particular external named `WOCommon` on your system you could do:

    svk co --list | grep WOCommon | awk '{print $2}'| xargs -L 1 svk st

To perform `svk up` on all such externals you could do:

    svk co --list | grep WOCommon | awk '{print $2}'| xargs -L 1 svk up

This is a brute force way of making sure that changes made to one external get propagated to all others.

# See also

-   Mailing list thread: <http://lists.bestpractical.com/pipermail/svk-devel/2007-March/000741.html>
-   [Implementing svn:externals support in SVK](/wiki/Implementing_svn%3aexternals_support_in_SVK)
