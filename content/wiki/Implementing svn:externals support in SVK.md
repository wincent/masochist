---
tags: svk wiki
---

So [SVK](/wiki/SVK) doesn't yet support [Subversion externals](/wiki/Subversion_externals). A number of possible workarounds are discussed in "[Working around the lack of svn:externals support in SVK](/wiki/Working_around_the_lack_of_svn%3aexternals_support_in_SVK)" but in this article I'd like to propose how I think the feature should be implemented in [SVK](/wiki/SVK).

# Nested checkouts

An [svn:externals](/wiki/svn%3aexternals) property is an instruction to the [Subversion](/wiki/Subversion) client that it should check out a given repository path at a location inside an existing working copy. It is essentially a reference to a path in another repository, like a symbolic link. It essentially produces a "nested" working copy, one working copy checked out inside another.

Nesting of working copies is not allowed in [SVK](/wiki/SVK) so you can't "fake" this by manually checking out the desired path inside an existing working copy. As a precondition for implementing [svn:externals](/wiki/svn%3aexternals) support [SVK](/wiki/SVK) therefore has to be modified to allow this special case of nested working copies when [svn:externals](/wiki/svn%3aexternals) are in use.

# Mirroring

[SVK](/wiki/SVK) normally works with a local mirror so if you invoke:

`svk co svn+ssh://svn.example.com/project/trunk`

Where no mirror for that [URL](/wiki/URL) yet exists [SVK](/wiki/SVK) will offer to create a (local) mirror at:

    //mirror/project-trunk

This detail is relevant to implementing [svn:externals](/wiki/svn%3aexternals) support in [SVK](/wiki/SVK) because a user could check out a working copy containing a reference to a not-yet-mirrored external repository. In this case [SVK](/wiki/SVK) would need to offer to mirror the repository. Given that [svn:externals](/wiki/svn%3aexternals) are a client-level detail this mirroring should be implemented at check out time rather than at the time when the first repository is mirrored.

# Working with [SVK](/wiki/SVK) paths

It should be possible to set `svn:externals` properties that use [SVK](/wiki/SVK) paths:

    svk propset svn:externals "nested_path //mirror/mirror_path"

But this is of limited use because it means that other users who may not be using [SVK](/wiki/SVK) and might just be using the [Subversion](/wiki/Subversion) client will not be able to checkout the externals.

# Working with [Subversion](/wiki/Subversion) paths

Much more useful would be the ability for [SVK](/wiki/SVK) to work with [Subversion](/wiki/Subversion) paths in [svn:externals](/wiki/svn%3aexternals) properties:

    svk propset svn:externals "nested_path svn+ssh://svn.example.com/mirror_path"

The question then becomes, what should [SVK](/wiki/SVK) do when it encounters such a path?

-   Should it automatically use the local mirror corresponding to that [Subversion](/wiki/Subversion) path (offering to create the mirror if it doesn't yet exist)?
-   Should it use another mirror dedicated exclusively to that particular instance of `svn:externals`?

The first approach is probably the most straightforward and most closely matches the existing behaviour of [Subversion externals](/wiki/Subversion_externals).

# Command changes

From a user perspective, the [SVK](/wiki/SVK) commands which would need to be updated are:

-   `svk co`: The client should check out any `svn:externals` referenced in the code that is being checked out.
-   `svk st`: The client should separately show the status of the checked out working copy and that of any nested `svn:externals`.
-   `svk up`: The client should update not only the checked out working copy but also any nested `svn:externals`.
-   `svk ci`: When checking in code the client should act on only one thing at a time: either the checked out working copy *or* a nested `svn:externals`; this matches the behaviours of the [Subversion](/wiki/Subversion) client which insists that all commits be atomic and cannot guarantee that a commit to more than two repositories will be atomic.

# See also

-   [Working around the lack of svn:externals support in SVK](/wiki/Working_around_the_lack_of_svn%3aexternals_support_in_SVK)
-   Initial response to this article by [Chia-Liang Kao](/wiki/Chia-Liang_Kao): <http://lists.bestpractical.com/pipermail/svk-devel/2007-March/000787.html>
