---
tags: version.control
---

[Microbranching](/wiki/Microbranching), better known as "[using topic branches](/wiki/using_topic_branches)", is a technique that I use when I wish to develop a specific, small feature without distrupting the main line of development or degrading its stability. It is also commonly used when submitting patches to an "upstream" project which you do not control; you group together a logical set of changes on a "topic branch" where they can be easily managed (revised, or kept up to date using [rebasing](/wiki/rebasing)) and then submitted as a patch series (see "[Creating and submitting a patch via email with Git](/wiki/Creating_and_submitting_a_patch_via_email_with_Git)").

The technique consists of creating a local-only branch using a branch-savvy [version control system](/wiki/version_control_system) such as [Git](/wiki/Git) or [SVK](/wiki/SVK), working on the feature, and then using `git merge`, `svk push` or similar to propagate the changes back to the trunk, *or* publishing them upstream as a patch series sent via email (for projects which you don't control directly). These [topic branches](/wiki/topic_branches) or [microbranches](/wiki/microbranches) are short-lived.

# An example using [SVK](/wiki/SVK)

This is an example of a creating a [microbranch](/wiki/microbranch) for the purposes of adding the `#include` directive to [Walrus](/wiki/Walrus). This feature is well-suited to a [microbranch](/wiki/microbranch) because it is a relatively complicated directive (it requires a sub-parser to be spawned for each included file) but it is still reasonable to implement it within a short time frame (no more than a few days).

## Creating the branch

    # use the "-p" switch to create "//local/Walrus/" if needed
    svk cp -p //mirrors/Walrus/trunk //local/Walrus/include-directive \
           -m "Microbranch for implementing '#include' directive"

    # check out a working copy of the microbranch
    svk co //local/Walrus/include-directive include-directive

    # make sure all specs pass
    cd include-directive
    rake make
    rake spec

## Pulling changes in from the trunk

It's unlikely that any changes will be made on the trunk while working on this feature because this will be such a short-lived branch.

    svk pull

## Pushing back changes

    svk push --verbatim

The `--verbatim` switch prevents [SVK](/wiki/SVK) from including [SVK](/wiki/SVK)-specific meta-information (such as local revision numbers) in the log entries.

## Disposing of the microbranch

    svk co --detach
    cd ..
    rm -r include-directive

## Updating existing copies of the trunk

Assuming there is a checked-out copy of the trunk in `src`:

    cd src
    svk up -s

And again ensuring that all specs pass:

    rake spec

# See also

-   [Branching](/wiki/Branching).

