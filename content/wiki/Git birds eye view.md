---
tags: git wiki
---

Things you need to now about [Git](/wiki/Git) before starting to work with it.

# Distributed version control

[Git](/wiki/Git) is a distributed [version control system](/wiki/version_control_system) like [SVK](/wiki/SVK) and unlike [Subversion](/wiki/Subversion) (which uses a server-client model). In fact it goes one step further than SVK in that every single checkout (every *clone* or *cloned repository* in Git terminology) is a complete copy of the entire repository and all its history; SVK on the other hand creates only a single mirror and each new checkout is just a shallow working copy.

This may seem wasteful at first glance but Git uses very efficient compression such that in many cases the entire repository and all its history is similar in size to a shallow Subversion checkout. If space is a concern you can do shallow clones if you wish, or just checkout submodules of a larger project, but for local clones (on the same filesystem) the default is to create hard links anyway which yields a massive space saving (note that if you are worried about filesystem integrity and are making a local clone for backup purposes then you probably want to pass the `--no-hardlinks` switch to `git clone`). It most cases you don't need to worry about space and just enjoy the benefits that having full local access to the history brings, such as excellent speed when viewing the history.

Under distributed version control things like "revision numbers" become meaningless. This is totally unlike the Subversion model wherein history advances as shown here:

    A -> B -> C -> D -> E

And revisions are identified by steadily increasing integers: 1, 2, 3, 4 and 5 in the case of the example above. Instead, a single Git repository can have a development history that looks like this:

    A -> B -> F -> G-> H -> I
          \           /
           C -> D -> E 

Here revisions (*commits* in Git-speak) are identified by [SHA-1](/wiki/SHA-1) hashes which are based on their content. Imagine that another developer clones this repository; they now receive an exact copy of the entire history, and can continue development as they please:

    A -> B -> F -> G-> H -> I -> J -> K
          \           /
           C -> D -> E 

At the same time the original author may have made other, independent changes:

    A -> B -> F -> G-> H -> I -> L -> M
          \           /
           C -> D -> E 

It's clear here that the distributed nature of Git makes integral revision numbers like those used in Subversion meaningless. Here we see that in one repo development produce revisions `J` and `K`, and in another `L` and `M`, and that they share some common history. It would be useless to refer to these as revisions 10 and 11 because they clearly refer to different things. The only way to uniquely identify such revisions is with a cryptographic hash.

Sounds like chaos? Not really. Because of these cryptographic underpinnings, either developer can pull in revisions from the other; in fact, they can pull in revisions from any repository anywhere. In the example above the result will look like this:

    A -> B -> F -> G-> H -> I -> J -> K
          \           /      \
           C -> D -> E        L -> M

The development history is modelled as a [DAG](/wiki/DAG) ([Directed Acyclic Graph](/wiki/Directed_Acyclic_Graph)) which means that it cannot ever contain any cyclic structures: this means that merely sharing revisions between repositories can never lead to any conflicts; you can literally fetch revisions from *any* Git repository out there and add them to your local object graph.

And because Git is so good at merging the history is easily unified to create a new revision, here labelled `N`:

    A -> B -> F -> G-> H -> I -> J -> K
          \           /      \         \
           C -> D -> E        L -> M -> N

Merging is so easy in Git that you will find yourself doing it all the time, even when you don't realise that you're doing it. Every time you do a `git pull` to grab changes from a remote repository and integrate them into your own Git is actually doing a `git fetch` (getting the new revisions) and a `git merge` (integrating them into your own development) under the covers. As another example, every time you do a `git stash` to store away some temporary changes, Git actually stores your working state as a commit with two parents, which is itself a form of merging (see the `git-stash` man page for more information); when you later apply a stash you're doing a merge as well. In short, with Git you merge all the time, painlessly, often without even needing to think about it.

All of this is enabled by and itself enables the distributed nature of Git. At first it may seem odd but once you understand it you see that it permits some fantastic and powerful new workflows.

# The index

[Git](/wiki/Git) uses a staging area called "the index" to determine what will be included in a commit. Other [version control systems](/wiki/version_control_systems) like [Subversion](/wiki/Subversion) use the working copy itself as a staging area (ie. `svn ci` will check in all changes in the working copy), but Git instead will only commit the changes that you explicitly tell it to commit; here "telling" Git means "adding to the index".

So a typical Subversion or [SVK](/wiki/SVK) workflow might be:

    # make changes
    vi file

    # commit
    svk ci

Whereas in Git you must explicitly tell it to "add" the changes to the index:

    # make changes
    vi file

    # nothing will be committed!
    git commit

    # now the index "knows" about the changes
    git add file

    # now we can commit
    git commit

At first this may seem like an unnecessary additional step, but it allows for some new workflows not possible with other version control systems; for example, the ability to have a "dirty" working copy (with temporary changes) while performing selective "clean" commits. It also allows for more nuanced `diff` and `status` operations because it permits you to distinguish between "finalized changes ready to be committed" and "local modifications not yet ready to be committed".

Note that the semantics of "add" are different in Git than they are in systems like Subversion. In the latter "add" means "add these new files/directories to the repository" while in Git it means "add *the modifications* in these files/directories to the index" (and "the index" itself means "the content of the next commit").

It is still possible to work according to the old paradigm by using `git commit -a`, which automatically adds modified files in the working tree to the index before performing the commit.
