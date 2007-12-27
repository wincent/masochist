---
tags: subversion
---

# Introduction

[Subversion](/wiki/Subversion) is an [open source](/wiki/open_source) [version control system](/wiki/version_control_system) developed by [Tigris](http://www.tigris.org/) and volunteers.

A Subversion repository is a centralized store containing all the files and directories relating to a project. When changes are made to the project they can be "committed" to the repository. The repository is an historical record of all the project, containing not only the current revision but also all previous revisions.

The benefits of using a version control system like Subversion include:

-   Serves as an off-site backup for valuable project files
-   Allows multiple people to work on a project at the same time and share their changes
-   Allows even a single developer working alone to work on a project using several different machines and keep all the versions synchronized
-   Provides a convenient way of rolling back undesired changes
-   Encourages a disciplined working methodology in which a developer works on discrete problems and solves them one by one
-   Provides a convenient way of visualizing and inspecting changes in an evolving code base
-   Provides a convenient way of accepting modifications to a code base ("[diffs](/wiki/diffs)") from third parties
-   Provides a powerful mechanism for [branching](/wiki/branching) a code base and maintaining branches (although note that until recently Subversion only provided half of the picture — the other half, [merging](/wiki/merging), was hideously neglected — and it still trails fair behind the [distributed version control systems](/wiki/distributed_version_control_systems) in this area)
-   Provides a convenient way of [tagging](/wiki/tagging) a code base in a certain state (like taking a "snapshot") and going back to that state at any time in the future
-   Intrinsically maintains of logs of changes to a project (due to the presence of "commit" messages for each change)

# Subversion and Wincent products

Up until July 2007, all of the code for all [Wincent](/wiki/Wincent) products was managed via [Subversion](/wiki/Subversion) (with an additional [SVK](/wiki/SVK) layer used for development purposes). In July 2007 I started migrating to [Git](/wiki/Git).

The source code for Wincent's open source products was available to the public via Subversion access to a public repository hosted at svn.wincent.com. The closed source products were also stored in a Subversion repository.

When this article was originally prepared (December 2007) the Subversion repositories were still online but no new commits had been made to them for many months; all continuing development work takes place using Git.

As of March 2010, however, the Subversion repositories were officially withdrawn from service.

Products for which public Subversion repositories existed include:

-   [atosym](/wiki/atosym)
-   [Bansshee](/wiki/Bansshee)
-   [Walrus](/wiki/Walrus)
-   [Wincent Build Tools](/wiki/Wincent_Build_Tools)
-   [Wincent Strings Utility](/wiki/Wincent_Strings_Utility)
-   [WOTest](/wiki/WOTest)

All of these projects have been migrated over to [Git](/wiki/Git) (see <http://git.wincent.com/> for a web-based interface to the new Git-hosted public repositories).

# See also

-   Official [Subversion](/wiki/Subversion) website: <http://subversion.tigris.org/>

