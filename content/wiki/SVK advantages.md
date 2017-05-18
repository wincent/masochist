---
tags: svk wiki
---

# Leverages existing [Subversion](/wiki/Subversion) infrastructure

-   [SVK](/wiki/SVK) is client-side; you can continue to use your existing [Subversion](/wiki/Subversion) server.
-   Your server-side ([Subversion](/wiki/Subversion)) post-commit and other hook scripts will continue to work.
-   If you have version or build numbers tied to [Subversion](/wiki/Subversion) revision numbers then the numbering will continue uninterrupted.
-   Your users can continue to use their [Subversion](/wiki/Subversion) clients to download code from your server.

# Low risk

-   Many [SVK](/wiki/SVK) commands have a `-C`/`--check-only` switch which allows you to preview changes prior to proceeding with them.
-   With the exception of adapting your projects to accommodate the fact that [SVK](/wiki/SVK) does not yet support [Subversion externals](/wiki/Subversion_externals), you can undertake a low-risk migration to [SVK](/wiki/SVK) while retaining the ability to go back to straight [Subversion](/wiki/Subversion) at any point in the future.
-   Even if a bug in [SVK](/wiki/SVK) or a human error causes undesired changes to be propagated to your remote [Subversion](/wiki/Subversion) repository you can always rollback the changes (check out a previous version and then recommit it) because there is no such thing as an `svn obliterate` command and there is no way that [SVK](/wiki/SVK) could permanently alter or damage the history in the remote repository.

# Redundancy

-   Your local [SVK](/wiki/SVK) depot is a complete mirror (a copy including all history) of your remote repository.

# Offline commits

-   You can work without a network connection, committing to the local depot and later propagating those changes to the remote repository.
-   This also means that many operations which would normally require network access are much, much faster.

# Batching

-   You can make multiple commits to the local depot and decide to propagate them to the remote server individually (as separate commits) or lumped together:
    -   To do this you must work on a local branch (that is, `svk cp` the branch you wish to work on rather than `svk co` a working copy).
    -   Then you can use `svk push` with the `-l`/`--lump` switch to batch changes together; omitting it will cause the changesets to be applied individually.
    -   Use the `--verbatim` switch to omit [SVK](/wiki/SVK) meta-information (such as local revision numbers) from the log entries.

# Bundle-friendly

-   No metadata is stored inside your working copy so [SVK](/wiki/SVK) is inherently bundle-friendly. This comes at the cost of [SVK](/wiki/SVK) expecting your checked-out working copies to stay in the same place. You should notify [SVK](/wiki/SVK) if you wish to remove or stop using a working copy using `svk co --detach`; you can also tell it about relocations using `svk co --relocate` or create a "floating" (movable) checkout which stores metadata in the top level only of the working copy using `svk co --floating`; finally, you can clean-up (detach) all working copies that no longer exist using `svk co --purge`.

# Branching and merging

-   Branching and merging are much easier than in [Subversion](/wiki/Subversion), specifically because [SVK](/wiki/SVK) keeps track of your merge history automatically. At least for simple cases, this means that you can work on a branch and `push` (merge) the changes back to another branch (or `pull` changes in from that branch) multiple times and [SVK](/wiki/SVK) will remember which changes have already been merged and try to merge only the previously unmerged changes. Branches are so cheap and easy that you no longer need to weigh things up so carefully before deciding to branch; it becomes practical to create branches often, as often as you create a tag, for example, or even as often as you want to work on a particular single issue (such as a bugfix or a minor new feature).
-   Because [SVK](/wiki/SVK) can mirror the entire history of your remote [Subversion](/wiki/Subversion) repository you can take advantage of its advanced merge tracking features even for branches that were created before you started using [SVK](/wiki/SVK); during the initial `sync` it detects and remembers the points at which you branched.

# See also

-   [Git advantages](/wiki/Git_advantages)
